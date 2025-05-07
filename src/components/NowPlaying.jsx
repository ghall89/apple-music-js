import { Box, Text } from 'ink';
import React, { useEffect, useState } from 'react';

import { getCurrentTrack } from '../lib/jxa';

export default function NowPlaying() {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const timer = setInterval(async () => {
      const trackInfo = await getCurrentTrack();

      setCurrentTrack(() => trackInfo);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      borderStyle="round"
      height={8}
      width="100%"
      justifyContent="space-around"
      alignItems="center"
      padding={1}
    >
      {currentTrack ? (
        <Box flexDirection="column" alignItems="center">
          <Text color="blueBright" wrap="truncate-end">
            {currentTrack.title}
          </Text>
          <Text color="yellow" wrap="truncate-end">
            {currentTrack.artist}
          </Text>
          <Text color="blue" wrap="truncate-end">
            {currentTrack.album}
          </Text>
        </Box>
      ) : (
        <Text>Nothing is playing...</Text>
      )}
    </Box>
  );
}
