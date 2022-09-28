import React, { useCallback } from "react";
import { memo, useState } from "react";
import AppBar from "../components/AppBar";
import Favorites from "../components/Favorites";
import Genres from "../components/Genres";
import WatchLater from "../components/WatchLater";
function MainElements() {
  const [showGenres, setShowGenres] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showWatchLater, setShowWatchLater] = useState(false);

  const handleShowGenres = useCallback(() => setShowGenres(true), []);
  const closeGenres = useCallback(() => setShowGenres(false), []);
  const handleShowFavorites = useCallback(() => setShowFavorites(true), []);
  const closeFavorites = useCallback(() => setShowFavorites(false), []);
  const handleShowWatchLater = useCallback(() => setShowWatchLater(true), []);
  const closeWatchLater = useCallback(() => setShowWatchLater(false), []);

  return (
    <>
      <AppBar
        showGenres={handleShowGenres}
        showFavorites={handleShowFavorites}
        showWatchLater={handleShowWatchLater}
      />
      <Favorites show={showFavorites} close={closeFavorites} />
      <Genres show={showGenres} close={closeGenres} />
      <WatchLater show={showWatchLater} close={closeWatchLater} />
    </>
  );
}

export default memo(MainElements);
