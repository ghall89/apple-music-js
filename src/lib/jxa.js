import '@jxa/global-type';
import { run } from '@jxa/run';

import { logger } from './logger';

/**
 * Checks if Music.app is running
 *
 * @returns {boolean} Returns true if Music.app is open, otherwise returns false.
 */
export async function isMusicAppRunning() {
  try {
    const result = await run(() => {
      const Music = Application('Music');
      return Music.running();
    });

    return result;
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

/**
 * Fetches the currently playing track in Music.app
 *
 * @returns {object | null} The currently playing music track, if available
 */
export async function getCurrentTrack() {
  try {
    if (isMusicAppRunning()) {
      const result = await run(() => {
        const Music = Application('Music');
        if (Music.playerState() === 'playing') {
          const { currentTrack, playerPosition } = Music;

          if (!currentTrack) {
            return null;
          }

          return {
            id: currentTrack.databaseID(),
            artwork: currentTrack.artworks[0]?.rawData(),
            title: currentTrack.name(),
            artist: currentTrack.artist(),
            album: currentTrack.album(),
            favorited: currentTrack.favorited(),
            duration: currentTrack.duration(),
            position: playerPosition(),
          };
        }

        return null;
      });

      return result;
    }

    return null;
  } catch (err) {
    logger.error(err);
    throw err;
  }
}
