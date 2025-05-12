import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getNowPlaying } from 'tunes-js';

const NowPlayingContext = createContext();

export const useNowPlayingContext = () => useContext(NowPlayingContext);

export function NowPlayingProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    const timer = setInterval(async () => {
      const trackInfo = await getNowPlaying();

      setCurrentTrack(() => trackInfo);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const contextMemo = useMemo(() => ({ currentTrack }), [currentTrack]);

  return (
    <NowPlayingContext.Provider value={contextMemo}>
      {children}
    </NowPlayingContext.Provider>
  );
}

NowPlayingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
