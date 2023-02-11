import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import UserDetails from "../components/UserDetails";
import { UsersList } from "../components/UsersList";

import { selectUsers } from "../store/slices/users.slice";
import { getUsers } from "../store/actions/users.actions";

import { setUser } from "../store/slices/user.slice";

const Admin = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [createUsersMode, setCreateUsersMode] = useState(false);

  const users = useSelector(selectUsers);

  const createUsersData = [
    {
      username: "Admin",
      email: "correo@ejemplo.com",
      password: "1234",
      name: "Nombre Completo",
      type: "author/developer/illustrator/publisher",
      isVerified: true,
      role: "ADMIN/COLLABORATOR/MODERATOR/DEFAULT",
    },
  ];

  const selectUser = ({ email }) => {
    setSearchParams({ selectedUserEmail: email });
  };

  const handleTabChange = (e) => {
    function clearParams() {
      searchParams.delete("selectedUserEmail");
      setSearchParams(searchParams);
    }

    switch (e.target.name) {
      case "list":
        setCreateUsersMode(false);
        clearParams();
        break;
      case "create":
        setCreateUsersMode(true);
        searchParams.has("selectedUserEmail") && dispatch(setUser(null));
        clearParams();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box gridColumn="span 2">
        <ButtonGroup color="secondary" size="large" sx={{ p: 0.5 }}>
          <Button
            disabled={!createUsersMode}
            name="list"
            onClick={handleTabChange}
          >
            Listar Usuarios
          </Button>
          <Button
            disabled={createUsersMode}
            name="create"
            onClick={handleTabChange}
          >
            Crear Usuario
          </Button>
        </ButtonGroup>
      </Box>
      <Box
        gridColumn="span 2"
        display="grid"
        gridTemplateColumns="30% 60% auto"
        width="100%"
        gap={5}
        p={1}
        sx={{ p: 0.5 }}
      >
        <UsersList
          createMode={createUsersMode}
          users={createUsersMode ? createUsersData : users}
          onClick={selectUser}
        />
        <UserDetails
          createMode={createUsersMode}
          createUserData={createUsersMode ? createUsersData : null}
        />
      </Box>
    </Box>
  );
};

export default Admin;
