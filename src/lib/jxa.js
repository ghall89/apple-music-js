import '@jxa/global-type';
import { run } from '@jxa/run';

import { logger } from './logger';

/**
 * Checks if Music.app is running
 *
 * @returns {Promise<boolean>} A promise that returns true if Music.app is open, otherwise returns false.
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
 * @typedef {Object} CurrentTrack
 * @property {number} id - The unique identifier for the current track.
 * @property {Blob} artwork - A data blob representing the artwork of the current track.
 * @property {string} title - The title of the current track.
 * @property {string} artist - The artist of the current track.
 * @property {string} album - The album of the current track.
 * @property {boolean} favorited - Whether the current track is favorited.
 * @property {number} duration - The duration (in seconds) of the current track.
 * @property {number} position - The current playback position (in seconds) of the current track.
 */

/**
 * Fetches the currently playing track in Music.app
 *
 * @returns {Promise<CurrentTrack | null>} A promise that retrieves the currently playing music track, if available
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
