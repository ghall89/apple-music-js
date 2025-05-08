import { render } from 'ink';
import React from 'react';

import App from './App';
import { launchMusicApp } from './lib/jxa';

launchMusicApp();

render(<App />);
