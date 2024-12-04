import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <RiMenu4Fill />
      </IconButton>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <RiMenu4Fill />
                </ListItemIcon>
                <ListItemText primary={"Trang chủ"} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              Item 2
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}