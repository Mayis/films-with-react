import React, { memo } from "react";
import {
  Drawer,
  List,
  ListItemText,
  ListItem,
  Divider,
  Typography,
} from "@mui/material";

function WatchLater({ show, close }) {
  return (
    <Drawer anchor="right" open={show} onClose={close}>
      <List sx={{ width: "450px" }}>
        <ListItem>
          <ListItemText primary="watch later" />
        </ListItem>
        <Divider />

        <ListItem>
          <Typography sx={{ fontWeight: "700" }}>asdasdasd</Typography>
          {/* <IconButton sx={{ position: "absolute", right: "5px" }}>
            <PaidIcon color="success" fontSize="large" />
          </IconButton> */}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default memo(WatchLater);
