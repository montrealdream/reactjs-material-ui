import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { HeaderAvatar } from "./HeaderAvatar";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <HeaderMenu />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <HeaderAvatar />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}