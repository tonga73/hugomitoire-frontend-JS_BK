import API from "./_index";

// OBTENER VALORES ENUM PARA MODELO USUARIO
export const fetchUserEnums = async () => {
  try {
    const { data } = await API(`users_enumdata/`);

    console.log(data, "data");
    return data;
  } catch (error) {
    console.log(error);
  }
};

// OBTENER TODOS LOS USUARIOS
export const fetchUsers = async () => {
  try {
    const { data } = await API(`users/`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// OBTENER USUARIO POR EMAIL
export const fetchUser = async (email) => {
  try {
    const { data } = await API(`users/${email}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// CREAR USUARIO
export const fetchCreateUser = async (user) => {
  try {
    const { data } = await API.post(`users/`, user);

    return data;
  } catch (error) {
    console.log(error);
  }
};
