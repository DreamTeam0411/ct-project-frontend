import axios from "axios";

const local = localStorage.getItem("token");

export const FetchDataAdmin = async (path: string) => {
  return await axios.get(path, {
    headers: {
      Authorization: "Bearer " + local,
    },
  });
};
