import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { stringAvatar } from "../../helpers/stringAvatar";
import { useState } from "react";

export const HeaderAvatar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const user = {
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    fullName: "Kent Dodds"
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {user.avatar ? (
          <Avatar 
            alt={user.fullName}
            src={user.avatar}
          />
        ) : (
          <Avatar {...stringAvatar(user.fullName)} />
        )}
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}