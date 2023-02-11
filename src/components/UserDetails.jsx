import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

import { selectUser } from "../store/slices/user.slice";
import { getUser, createUser } from "../store/actions/user.actions";

import { Loading } from "./Loading";

const UserDetails = ({ createMode, createUserData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState(null);
  const [confirmCreate, setConfirmCreate] = useState(null);

  const user = useSelector(selectUser);

  useEffect(() => {
    if (
      (!createUserData && !searchParams.has("selectedUserEmail")) ||
      (!user && !searchParams.has("selectedUserEmail"))
    ) {
      setSelectedUser(null);
      return;
    }
    if (!!user) {
      setSelectedUser(user);
      return;
    }
    if (!createMode && searchParams.has("selectedUserEmail")) {
      dispatch(getUser(searchParams.get("selectedUserEmail")));
      return;
    } else if (createMode && searchParams.has("selectedUserEmail")) {
      const newUserData = createUserData.filter(
        (e) => e.email === searchParams.get("selectedUserEmail")
      );
      setSelectedUser(...newUserData);
      return;
    }
    if (searchParams.has("selectedUserEmail") && !selectedUser) {
      searchParams.delete("selectedUserEmail");
    }
  }, [
    searchParams,
    searchParams.has("selectedUserEmail"),
    createMode,
    user,
    selectedUser,
  ]);

  return !!selectedUser ?? Object.values(selectedUser).length > 0 ? (
    <Box display="grid" rowGap={1}>
      {createMode ? (
        <Box width="min-content" minWidth={300}>
          <Alert severity="info">Usuario a crear</Alert>
        </Box>
      ) : null}
      <Box
        width="min-content"
        minWidth={300}
        sx={{ opacity: createMode ? 0.3 : 1 }}
      >
        <Typography
          variant="h5"
          fontStyle="italic"
          color="GrayText"
          textAlign="right"
          lineHeight="100%"
        >
          {selectedUser.role}
        </Typography>
        <Typography variant="h3" fontStyle="italic">
          {selectedUser.username}
        </Typography>
        <Typography variant="h6" fontStyle="italic">
          {selectedUser.email}
        </Typography>
        <Typography variant="h6" fontStyle="italic">
          {selectedUser.name}
        </Typography>
        <Box display="flex" gap={0.5}>
          <Typography variant="subtitle1" fontStyle="italic" color="Highlight">
            {selectedUser.type}
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic" color="Highlight">
            |
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic" color="Highlight">
            {selectedUser.isVerified ? "Verificado" : "Sin Verificar"}
          </Typography>
        </Box>
      </Box>
      {createMode ? (
        <Box display="grid" width="min-content" minWidth={300} minHeight={60}>
          {confirmCreate ? (
            <>
              <Typography variant="caption" color="InfoText" textAlign="center">
                confirmar creacion de usuario
              </Typography>
              <Box display="flex" justifyContent="space-around" with="100%">
                <Button
                  onClick={() => setConfirmCreate(null)}
                  color="secondary"
                >
                  cancelar
                </Button>
                <Button
                  onClick={() => dispatch(createUser(selectedUser))}
                  variant="contained"
                  color="success"
                >
                  confirmar
                </Button>
              </Box>
            </>
          ) : (
            <Button
              onClick={() => setConfirmCreate(true)}
              fullWidth
              variant="outlined"
            >
              crear Usuario
            </Button>
          )}
        </Box>
      ) : null}
    </Box>
  ) : (
    <Box>
      <Loading message="Seleccionar usuario" noAnimation noDots />
    </Box>
  );
};

export default UserDetails;
