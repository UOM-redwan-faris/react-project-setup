import { axios } from "../../../lib/axios";
import { User } from "../types/getUserType"; // adjust the import path as necessary

export const getUser = async (): Promise<User> => {
  const response = await axios.get<User>("/auth/me");
  // console.log(response.data);

  return response.data;
};
