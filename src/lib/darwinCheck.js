/* eslint-disable no-console */
import os from 'node:os';

/**
 * Check OS environment, and exit process if it is not macOS/Darwin.
 */
export default function darwinCheck() {
  const platform = os.platform();

  if (platform !== 'darwin') {
    console.error('This package requires a macOS environment.');
    process.exit();
  }
}
