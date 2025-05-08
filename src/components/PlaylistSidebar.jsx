import { Box, Text, useFocus, useInput } from 'ink';
import PropTypes from 'prop-types';
import React from 'react';

export default function PlaylistSidebar({
  playlists,
  selectedIndex,
  setSelectedIndex,
}) {
  const { isFocused } = useFocus();

  useInput((input, key) => {
    if (!isFocused) return;

    if (key.downArrow && selectedIndex < playlists.length - 1) {
      setSelectedIndex((prev) => prev + 1);
    }
    if (key.upArrow && selectedIndex > 0) {
      setSelectedIndex((prev) => prev - 1);
    }
  });

  return (
    <Box
      borderStyle="round"
      width="25%"
      borderColor={isFocused && 'blueBright'}
    >
      <Box flexDirection="column" paddingLeft={1}>
        {playlists?.map((plist) => (
          <ListItem
            key={plist.name}
            label={plist.name}
            isFocused={playlists[selectedIndex] === plist}
          />
        ))}
      </Box>
    </Box>
  );
}

PlaylistSidebar.propTypes = {
  playlists: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

function ListItem({ label, isFocused }) {
  return (
    <Text
      wrap="truncate-end"
      bold={isFocused}
      color={isFocused && 'blueBright'}
    >
      {isFocused ? '>' : '•'} {label}
    </Text>
  );
}

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};
