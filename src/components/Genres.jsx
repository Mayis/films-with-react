import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";

import { genreSelector } from "../redux/slices/genreSlice";

function Genres({ show, close }) {
  const genres = useSelector(genreSelector);
  const dispatch = useDispatch();

  return (
    <Drawer anchor={"left"} open={show} onClose={close}>
      <List sx={{ width: "250px" }}>
        <ListItem>
          <Typography sx={{ fontWeight: "700" }}>Genres</Typography>
        </ListItem>
        <Divider />
        {genres?.map((genre) => (
          <ListItem key={genre.id}>
            <Typography sx={{ cursor: "pointer" }}>{genre.name}</Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default memo(Genres);
