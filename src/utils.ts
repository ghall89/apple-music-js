import "@jxa/global-type";
import { run } from "@jxa/run";
import { AppleMusicTrack } from "./types.js";

/**
 * Checks if Music.app is running
 *
 * @returns {bool}
 */
export async function isMusicAppRunning(): Promise<boolean> {
  const result = (await run(() => {
    const Music = Application("Music");
    return Music.running();
  })) as boolean;

  console.log(`Music.app is running: ${result}`);
  return result;
}

/**
 * Fetches the currently playing track in Music.app
 *
 * @returns {AppleMusicTrack}
 */
export async function getCurrentTrack(): Promise<AppleMusicTrack | null> {
  const result = (await run(() => {
    const Music = Application("Music");
    const { currentTrack, playerPosition } = Music;

    if (!currentTrack) {
      return null;
    }

    const data: AppleMusicTrack = {
      id: currentTrack.databaseID(),
      title: currentTrack.name(),
      artist: currentTrack.artist(),
      album: currentTrack.album(),
      duration: currentTrack.duration(),
      position: playerPosition(),
    };

    return data;
  })) as AppleMusicTrack;

  return result;
}
