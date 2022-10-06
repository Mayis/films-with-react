import React from "react";
import { useNavigate } from "react-router-dom";
import PrimarySearchAppBar from "./MUI settings/SearchAppBar";
function AppBar({ showGenres, showFavorites, showWatchLater }) {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <PrimarySearchAppBar
      showGenres={showGenres}
      showFavorites={showFavorites}
      showWatchLater={showWatchLater}
      backHome={backHome}
    />
  );
}

export default AppBar;
