import { Box, Text } from 'ink';
import React from 'react';

import { useNowPlayingContext } from '../context/NowPlayingContext';
import ProgressBar from './ProgressBar';

export default function NowPlaying() {
  const { currentTrack } = useNowPlayingContext();

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
            ? (currentTrack.playerPosition / currentTrack.duration) * 100
            : 0
        }
        isPlaying={!!currentTrack}
      />
    </Box>
  );
}
