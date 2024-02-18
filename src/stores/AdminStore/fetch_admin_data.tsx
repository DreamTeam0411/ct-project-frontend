import axios from "axios";

const token = localStorage.getItem("token");

export const FetchDataAdmin = async (path: string) => {
  return await axios.get(path, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
