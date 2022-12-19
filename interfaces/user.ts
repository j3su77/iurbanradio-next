import {ObjectId} from 'mongoose';
import { type } from 'os';



export interface IUser {
    _id: string;
    username: string;
    email: string;
    password?: string;
    role: "admin" | "client" | "super-user";
    createAt?: string;
    updatadAt?: string;
  }