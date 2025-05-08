import { Box, Text } from 'ink';
import React, { useEffect, useState } from 'react';

import { getCurrentTrack } from '../lib/jxa';
import ProgressBar from './ProgressBar';

export default function NowPlaying() {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const timer = setInterval(async () => {
      const trackInfo = await getCurrentTrack();

      setCurrentTrack(() => trackInfo);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      rowGap={1}
      height={5}
    >
      {currentTrack ? (
        <Box flexDirection="column" alignItems="center">
          <Text wrap="truncate-end" bold>
            {currentTrack.title}
          </Text>
          <Text color="yellow" wrap="truncate-end">
            {currentTrack.artist}
          </Text>
          <Text color="blueBright" wrap="truncate-end">
            {currentTrack.album}
          </Text>
        </Box>
      ) : (
        <Text>Nothing is playing...</Text>
      )}
      <ProgressBar
        percent={
          currentTrack
            ? (currentTrack.position / currentTrack.duration) * 100
            : 0
        }
        isPlaying={!!currentTrack}
      />
    </Box>
  );
}
