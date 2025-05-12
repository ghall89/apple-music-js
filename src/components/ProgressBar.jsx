import { Text, useStdout } from 'ink';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

/**
 * The progress bar props.
 *
 * @typedef {object} Props
 * @property {number} percentage - The percentage of the progress bar that should be filled.
 * @property {bool} isActive - Whether the progrss bar is active.
 */

/**
 * Progress bar component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} The progress bar.
 */
export default function ProgressBar({ percent, isActive }) {
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
    <Text color="cyan" dimColor={!isActive}>
      {progress}
    </Text>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
};

ProgressBar.defaultProps = {
  isActive: true,
};
