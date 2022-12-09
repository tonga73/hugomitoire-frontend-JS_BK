import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Drawer,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MenuIcon from "@mui/icons-material/Menu";

import { Navigation } from "./Navigation";

import { motion } from "framer-motion";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const TopBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [drawer, setDrawer] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      id="header"
      component={motion.div}
      initial={{ opacity: 0, top: -50 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.7 }}
      sx={{ opacity: 0.7, boxShadow: 0 }}
      style={{
        background:
          "linear-gradient(to top, rgba(23, 23, 23,0) 0%, rgba(23, 23, 23,0.51) 51%, rgba(23, 23, 23,1) 100%)",
      }}
      position={pathname === "/" ? "fixed" : "sticky"}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={2} lg={4}>
            <Toolbar disableGutters>
              <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => setDrawer(true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Drawer
                anchor={"left"}
                open={drawer}
                onClose={() => setDrawer(false)}
              >
                daskopdaskopdas
              </Drawer>

              {/* MAIN NAVIGATION  */}
              <Box sx={{ display: { xs: "none", lg: "initial" } }}>
                <Navigation />
              </Box>
            </Toolbar>
          </Grid>
          <Grid
            item
            xs={8}
            lg={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h3"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Cinzel",
                fontWeight: 500,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => navigate("/")}
            >
              Hugo Mitoire
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "Cinzel",
                fontWeight: 500,
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => navigate("/")}
            >
              Hugo Mitoire
            </Typography>
          </Grid>

          <Grid
            item
            sx={{ display: { xs: "flex", lg: "flex" } }}
            lg={4}
            xs={2}
            justifyContent="flex-end"
          >
            <Toolbar disableGutters>
              <Box sx={{ justifyContent: "end" }}>
                {/* <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip> */}
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
