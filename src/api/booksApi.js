import API from "./_index";

export const fetchBooks = async () => {
  try {
    const { data } = await API(`books/`);

    return data;
  } catch (error) {}
};
