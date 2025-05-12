import { Box, Text, measureElement, useInput } from 'ink';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function ScrollingList({
  isActive,
  items,
  selectedIndex,
  setSelectedIndex,
}) {
  const boxRef = useRef();
  const [offset, setOffset] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useInput((input, key) => {
    if (!isActive) return;

    if (key.downArrow) {
      if (selectedIndex < items.length - 1) {
        setSelectedIndex((prev) => prev + 1);
      } else {
        setSelectedIndex(0);
      }
    }
    if (key.upArrow) {
      if (selectedIndex > 0) {
        setSelectedIndex((prev) => prev - 1);
      } else {
        setSelectedIndex(items.length - 1);
      }
    }
  });

  useEffect(() => {
    const newOffset = selectedIndex;

    if (newOffset <= items.length - boxHeight) {
      setOffset(newOffset);
    } else {
      setOffset(items.length - boxHeight);
    }
  }, [items.length, boxHeight, offset, selectedIndex]);

  useEffect(() => {
    const { height } = measureElement(boxRef.current);
    setBoxHeight(height);
  }, []);

  const visibleRowsMemo = useMemo(() => {
    const startIndex = offset;
    const endIndex = offset + boxHeight;

    return items.slice(startIndex, endIndex);
  }, [items, offset, boxHeight]);

  return (
    <Box
      flexDirection="row"
      height="100%"
      width="100%"
      justifyContent="space-between"
    >
      <Box flexDirection="column" ref={boxRef} height="100%">
        {visibleRowsMemo.map((item) => (
          <ListItem
            key={item}
            label={item}
            isFocused={items[selectedIndex] === item}
          />
        ))}
      </Box>
      <ScrollBar offset={offset} length={boxHeight} itemCount={items.length} />
    </Box>
  );
}

ScrollingList.propTypes = {
  isActive: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
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
      {isFocused ? '►' : '•'} {label}
    </Text>
  );
}

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

function ScrollBar({ offset, length, itemCount }) {
  const scrollTextMemo = useMemo(() => {
    const elements = [];

    const scrollPct = (offset / (itemCount - length + 1)) * 100;
    const scrollPos = Math.floor((scrollPct / 100) * (length + 1));

    for (let i = 0; i < length; i += 1) {
      elements.push(i === scrollPos ? '█' : '│');
    }

    return elements.join('\n');
  });

  return <Text>{scrollTextMemo}</Text>;
}

ScrollBar.propTypes = {
  offset: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
};
