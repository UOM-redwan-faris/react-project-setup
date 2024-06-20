export type AuthUser = {
  id: number;
  phoneNumber: string;
  fullName: string;
  role: any;
};

export type UserResponse = {
  accessToken: string;
  user: AuthUser;
};
