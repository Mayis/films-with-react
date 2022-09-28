import React from "react";
import PrimarySearchAppBar from "./MUI settings/SearchAppBar";
function AppBar({ showGenres, showFavorites, showWatchLater }) {
  return (
    <PrimarySearchAppBar
      showGenres={showGenres}
      showFavorites={showFavorites}
      showWatchLater={showWatchLater}
    />
  );
}

export default AppBar;
