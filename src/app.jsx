import React from "react";
import { render, Box } from "ink";

import NowPlaying from "./components/NowPlaying";

const App = () => {
  return (
    <Box justifyContent="center" alignItems="center">
      <NowPlaying />
    </Box>
  );
};

render(<App />);
