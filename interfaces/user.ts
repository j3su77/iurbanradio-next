



export interface IUser {
    _id?: string;
    id?: string;
    name: string;
    email: string;
    password?: string;
    role: "admin" | "client" | "super-user";
    createAt?: string;
    updatadAt?: string;
  }