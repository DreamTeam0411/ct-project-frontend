import axios from "axios";





export const FetchDataAdmin = async (path: string) => {
  const  token = localStorage.getItem('token')
  return await axios.get(path, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
