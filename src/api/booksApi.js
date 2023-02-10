import API from "./_index";

export const fetchBooks = async () => {
  try {
    const { data } = await API(`books/`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchBook = async (id) => {
  try {
    const { data } = await API(`books/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
