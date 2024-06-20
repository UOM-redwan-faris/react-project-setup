export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  email: string;
  fullName: string;
  phoneNumber: string;
  role: Role;
}

export interface Role {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  roleName: string;
}
