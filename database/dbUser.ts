import bcrypt from "bcryptjs";

import { User } from "../models";
import { db } from ".";
import { IUser } from "../interfaces/user";
import mongoose from "mongoose";
import { ObjectId } from "mongoose";

export const checkUserEmailPassword = async (
  email: string,
  password: string
) => {
  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();

  if (!user) {
    return null;
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    return null;
  }

  const { role, username, _id } = user;

  return {
    id: _id,
    email: email.toLocaleLowerCase(),
    role,
    username,
  };
};

// Esta función crea o verifica el usuario de OAuth
export const oAUthToDbUser = async (oAuthEmail: string, oAuthName: string) => {
  await db.connect();
  const user = await User.findOne({ email: oAuthEmail });

  if (user) {
    await db.disconnect();
    const { _id, username, email, role } = user;
    return { _id, username, email, role };
  }

  const newUser = new User({
    email: oAuthEmail,
    name: oAuthName,
    password: "@",
    role: "client",
  });
  await newUser.save();
  await db.disconnect();

  const { _id, username, email, role } = newUser;
  return { _id, username, email, role };
};


