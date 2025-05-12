import { Box, Text } from 'ink';
import React from 'react';

export default function StatusBar() {
  return (
    <Box height={1} borderTop width="100%" justifyContent="space-between">
      <Text>Quit: ctrl + q</Text>
      <Text>🔀 🔁</Text>
    </Box>
  );
}
