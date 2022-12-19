



export interface IUser {
    id: string;
    name: string;
    email: string;
    password?: string;
    role: "admin" | "client" | "super-user";
    createAt?: string;
    updatadAt?: string;
  }