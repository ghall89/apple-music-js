import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { getPlaylists } from 'tunes-js';

const MusicContext = createContext();

export const useMusicContext = () => useContext(MusicContext);

export function MusicProvider({ children }) {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylistIndex, setSelectedPlaylistIndex] = useState(0);

  useEffect(async () => {
    const playlistInfo = await getPlaylists();

    setPlaylists(() => playlistInfo);
  }, []);

  const contextMemo = useMemo(
    () => ({
      playlists,
      selectedPlaylistIndex,
      setSelectedPlaylistIndex,
    }),
    [playlists, selectedPlaylistIndex, setSelectedPlaylistIndex],
  );

  return (
    <MusicContext.Provider value={contextMemo}>
      {children}
    </MusicContext.Provider>
  );
}

MusicProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
