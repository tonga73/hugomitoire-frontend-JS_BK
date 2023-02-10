import API from "./_index";

export const fetchUsers = async () => {
  try {
    const { data } = await API(`users/`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async (id) => {
  try {
    const { data } = await API(`users/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
