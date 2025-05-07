import React, { useState, useEffect } from "react";
import { render, Box, Text } from "ink";

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

  return (
    <Box
      borderStyle="round"
      width={40}
      flexDirection="column"
      justifyContent="center"
    >
      <Text color="blueBright">{currentTrack?.title}</Text>
      <Text color="yellow">{currentTrack?.artist}</Text>
      <Text color="blue">{currentTrack?.album}</Text>
      <Text color="gray">
        {currentTrack?.position.toFixed(0)}/{currentTrack?.duration.toFixed(0)}{" "}
        Seconds
      </Text>
    </Box>
  );
};

render(<NowPlaying />);
