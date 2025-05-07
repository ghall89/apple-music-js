import React from "react";
import { Text } from "ink";

export default function ProgressBar({ progress }: { progress: number }) {
  const barLength = 36;
  const filledLength = Math.round(progress / (100 / barLength));
  const bar = "█".repeat(filledLength) + "-".repeat(barLength - filledLength);

  return <Text>{`[${bar}]`}</Text>;
}
