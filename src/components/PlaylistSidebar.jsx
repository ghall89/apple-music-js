import { Box, useFocus } from 'ink';
import React from 'react';

import { useMusicContext } from '../context/MusicContext';
import ScrollingList from './ScrollingList';

export default function PlaylistSidebar() {
  const { playlists, selectedPlaylistIndex, setSelectedPlaylistIndex } =
    useMusicContext();

  const { isFocused } = useFocus({
    autoFocus: true,
  });

  return (
    <Box
      borderStyle="round"
      width="50%"
      borderColor={isFocused && 'blueBright'}
    >
      <ScrollingList
        isActive={isFocused}
        items={playlists.map((plist) => plist.name)}
        selectedIndex={selectedPlaylistIndex}
        setSelectedIndex={setSelectedPlaylistIndex}
      />
    </Box>
  );
}
