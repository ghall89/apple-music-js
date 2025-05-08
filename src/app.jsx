import { Box, useInput, useStdout } from 'ink';
import React, { useEffect, useState } from 'react';

import NowPlaying from './components/NowPlaying';
import PlaylistSidebar from './components/PlaylistSidebar';
import StatusBar from './components/StatusBar';
import { getPlaylists } from './lib/jxa';

export default function App() {
  const { stdout } = useStdout();

  const [playlists, setPlaylists] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(async () => {
    const playlistInfo = await getPlaylists();

    setPlaylists(() => playlistInfo);
  }, []);

  useInput((input, key) => {
    if ((key.ctrl && input === 'q') || key.escape) {
      process.exit();
    }
  });

  return (
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
        <PlaylistSidebar
          playlists={playlists}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Box borderStyle="round" width="75%"></Box>
      </Box>
      <StatusBar />
    </Box>
  );
}
