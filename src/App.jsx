import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesByGenre from "./components/MoviesByGenre";
import MainElements from "./pages/MainElements";
import store from "./redux/store";
import { Provider } from "react-redux";

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
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
