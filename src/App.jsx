import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesByGenre from "./components/MoviesByGenre";
import MoviesBySearch from "./components/MoviesBySearch";
import MainElements from "./pages/MainElements";
import store from "./redux/store";
import { Provider } from "react-redux";
import SelectedMovie from "./pages/SelectedMovie";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainElements />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/genres" element={<MoviesByGenre />}>
            <Route path=":genreId" element={<MoviesByGenre />} />
          </Route>
          <Route path="/search" element={<MoviesBySearch />}>
            <Route path=":searchWord" element={<MoviesBySearch />} />
          </Route>
          <Route path="/movie" element={<SelectedMovie />}>
            <Route path=":movieId" element={<SelectedMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
