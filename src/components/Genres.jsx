import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Drawer, List, ListItem, Divider, Typography } from "@mui/material";
import { genres } from "../helper/APIs";
const navStyle = {
  textDecoration: "none",
  fontSize: "20px",
  color: "black",
};

function Genres({ show, close }) {
  return (
    <Drawer anchor={"left"} open={show} onClose={close}>
      <List sx={{ width: "250px" }}>
        <ListItem>
          <Typography sx={{ fontWeight: "700" }}>Genres</Typography>
        </ListItem>
        <Divider />
        {genres?.map((genre) => (
          <ListItem key={genre.id}>
            <NavLink to={`genres/${genre.id}`} style={navStyle}>
              {genre.name}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default memo(Genres);
