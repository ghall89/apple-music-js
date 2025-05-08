import { Text, useStdout } from 'ink';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

export default function ProgressBar({ percent, isPlaying }) {
  const { stdout } = useStdout();

  const progress = useMemo(() => {
    const d = stdout.columns - 5;
    const n = Math.floor(d * (percent / 100));

    const barStringArr = [];

    for (let i = 0; i <= d; i += 1) {
      if (i <= n) {
        barStringArr.push('█');
      } else {
        barStringArr.push('▓');
      }
    }

    return barStringArr.join('');
  }, [stdout.width, percent]);

  return (
    <Text color="cyan" dimColor={!isPlaying}>
      {progress}
    </Text>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
