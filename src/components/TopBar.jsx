import React, { useState, useEffect, useRef } from "react";
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

import MenuIcon from "@mui/icons-material/Menu";

import { useScrollPosition } from "../utils/useScrollPosition";
import { Navigation } from "./Navigation";

import { motion } from "framer-motion";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const TopBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [drawer, setDrawer] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [colorizeOnScroll, setColorizeOnScroll] = useState(false);
  const rendersCount = useRef(0);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (pathname === "/") {
        const isShow = currPos.y > -430 || currPos.y <= -1601;
        if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      }
      const isBgColorized = currPos.y >= -3;
      if (isBgColorized) {
        setColorizeOnScroll(false);
      } else {
        setColorizeOnScroll(true);
      }
    },
    [hideOnScroll],
    null,
    false,
    300
  );

  return hideOnScroll ? (
    <AppBar
      id="header"
      component={motion.div}
      initial={{ opacity: 0, top: -50 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3 }}
      sx={{ opacity: 0.7, boxShadow: 0 }}
      style={{
        transition: "background ease 3ms",
        background: colorizeOnScroll
          ? "rgba(23, 23, 23, 1)"
          : "linear-gradient(to top, rgba(23, 23, 23, 0) 0%, rgba(23, 23, 23,0.51) 51%, rgba(23, 23, 23,1) 100%)",
      }}
      position={pathname === "/" ? "fixed" : "sticky"}
    >
      <Container maxWidth="xl">
        <Box display="grid" gridTemplateColumns="repeat(12, minmax(0, 1fr))">
          <Box gridColumn={{ xs: "span 2", lg: "span 4" }}>
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
          </Box>
          <Box
            gridColumn={{ xs: "span 8", lg: "span 4" }}
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
          </Box>

          <Box
            gridColumn={{ xs: "span 2", lg: "span 4" }}
            justifyContent="flex-end"
            sx={{ display: { xs: "flex", lg: "flex" } }}
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
          </Box>
        </Box>
      </Container>
    </AppBar>
  ) : undefined;
};
