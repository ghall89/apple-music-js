import React, { useState, useEffect } from "react";
import { render, Box, Text } from "ink";

import ProgressBar from "./components/ProgressBar.js";

import { AppleMusicTrack } from "./types.js";
import { getCurrentTrack } from "./utils.js";

const NowPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState<AppleMusicTrack | null>(
    null,
  );

  useEffect(() => {
    const timer = setInterval(async () => {
      const trackInfo = await getCurrentTrack();

      setCurrentTrack(() => trackInfo);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!currentTrack) {
    return <Text>Nothing is playing...</Text>;
  }

  return (
    <Box
      borderStyle="round"
      width={40}
      flexDirection="column"
      justifyContent="center"
    >
      <Text color="blueBright" wrap="truncate-end">
        {currentTrack.title}
      </Text>
      <Text color="yellow" wrap="truncate-end">
        {currentTrack.artist}
      </Text>
      <Text color="blue" wrap="truncate-end">
        {currentTrack.album}
      </Text>
      <ProgressBar
        progress={(currentTrack.position / currentTrack.duration) * 100}
      />
    </Box>
  );
};

render(<NowPlaying />);
