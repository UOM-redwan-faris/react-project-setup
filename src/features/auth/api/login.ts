import { axios } from "../../../lib/axios";
export type LoginCredentialsDTO = {
  password: string;
  phoneNumber: string;
};

export const loginWithEmailAndPassword = (data: LoginCredentialsDTO) => {
  return axios.post("/auth/signin/admin", data);
};
