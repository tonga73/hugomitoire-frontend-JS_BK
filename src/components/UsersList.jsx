import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import { Loading } from "./Loading";

export const UsersList = ({ users, createMode, onClick }) => {
  return (
    <List
      dense
      subheader={
        <Box px={1.5} py={0.5}>
          <Typography
            variant="caption"
            textTransform="uppercase"
            fontFamily="cinzel"
            fontWeight={700}
            letterSpacing={1.3}
          >
            {createMode ? "Modelos De Usuario" : "Usuarios Registrados"}
          </Typography>
        </Box>
      }
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {!!users ? (
        users.map(
          (
            {
              username,
              email,
              name,
              type,
              isVerified,
              role,
              images,
              booksIllustrated,
              booksPublished,
            },
            index
          ) => (
            <ListItemButton key={index} onClick={() => onClick({ email })}>
              <ListItemAvatar>
                <Avatar>
                  {!!images ? <ImageIcon /> : username.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                disableTypography
                primary={
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {username}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography
                      variant="subtitle2"
                      fontFamily="cinzel"
                      fontWeight="bold"
                      letterSpacing={1.3}
                      color="GrayText"
                    >
                      {role}
                    </Typography>
                  </Box>
                }
              />
            </ListItemButton>
          )
        )
      ) : (
        <Loading />
      )}
    </List>
  );
};
