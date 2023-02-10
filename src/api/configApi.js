import API from "./_index";

export const fetchUserEnums = async () => {
  try {
    const { data } = await API(`users_enumdata/`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
