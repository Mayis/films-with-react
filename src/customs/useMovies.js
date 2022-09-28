import React, { useState, useEffect } from "react";
import request from "../helper/request";

export default function useMovies(api, page = 1) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    return request(api, page).then(
      (data) => (setMovies(data.results), setLoading(false))
    );
  }, [api, page]);
  return [movies, loading];
}
