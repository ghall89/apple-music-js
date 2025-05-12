import { render } from 'ink';
import React from 'react';
import { launch } from 'tunes-js';

import App from './App';
import darwinCheck from './lib/darwinCheck';

darwinCheck();

// Launch Music.app if it's not already running
launch();

render(<App />);
