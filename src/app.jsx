import { Box, useFocusManager, useInput, useStdout } from 'ink';
import React from 'react';

import NowPlaying from './components/NowPlaying';
import PlaylistSidebar from './components/PlaylistSidebar';
import StatusBar from './components/StatusBar';
import Tracklist from './components/Tracklist';
import { MusicProvider } from './context/MusicContext';
import { NowPlayingProvider } from './context/NowPlayingContext';

export default function App() {
  const { stdout } = useStdout();
  const { focusNext, focusPrevious } = useFocusManager();

  useInput((input, key) => {
    if ((key.ctrl && input === 'q') || key.escape) {
      process.exit();
    }
    if (key.rightArrow) {
      focusNext();
    }
    if (key.leftArrow) {
      focusPrevious();
    }
  });

  return (
    <MusicProvider>
      <NowPlayingProvider>
        <Box
          justifyContent="center"
          alignItems="flex-start"
          flexDirection="column"
          height={stdout.rows}
        >
          <Box borderStyle="round">
            <NowPlaying />
          </Box>
          <Box height={stdout.rows - 9}>
            <PlaylistSidebar />
            <Tracklist />
          </Box>
          <StatusBar />
        </Box>
      </NowPlayingProvider>
    </MusicProvider>
  );
}
