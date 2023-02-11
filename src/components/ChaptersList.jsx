import React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export const ChaptersList = () => {
  return (
    <Box>
      <List
        subheader={
          <Box px={1.5} py={0.7}>
            <Typography
              textAlign="center"
              textTransform="lowercase"
              sx={{
                opacity: 0.7,
              }}
            >
              capítulos
            </Typography>
          </Box>
        }
        sx={{ width: "100%", bgcolor: "background.paper", opacity: 0.7 }}
      >
        {[0, 1, 2, 3].map((value, index) => {
          const labelId = `checkbox-list-label-`;

          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <TextSnippetIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemText id={labelId} primary={`Line item `} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
