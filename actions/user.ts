'use server'
import { revalidatePath } from "next/cache";

import { getDBConnection } from "@/database/connection";
import { User } from "@/models/User";
import { getSession } from "./session";
import md5 from "md5";

export const getUsers = async (): Promise<User[]> => {
  const connection = await getDBConnection();
  const data = await connection.getRepository(User).find();
  return JSON.parse(JSON.stringify(data));
};

export const postUser = async (user: User): Promise<User> => {
  user.passwordDigest = md5(user.password || '');
  const connection = await getDBConnection();
  const result = await connection.getRepository(User).save(user);
  revalidatePath('/posts');
  return JSON.parse(JSON.stringify(result));
};

export async function getUser(){
  const session = await getSession();
  if(session.userId){
    const connection = await getDBConnection();
    const data = await connection.getRepository(User).findOne({where: {id: session.userId}});
    return JSON.parse(JSON.stringify(data));
  }
}

export async function logout() {
  const session = await getSession();
  session.destroy();
}

export async function login(formData: FormData) {
  const session = await getSession();
  const inputUsername = formData.get("username") as string;
  const connection = await getDBConnection();
  const data = await connection.getRepository(User).findOne({where: {username: inputUsername,passwordDigest: md5(formData.get("password") as string)}});
  if(data && data.id){
    session.userId = data.id;
    await session.save();
  }
  else {
    return {error: "Invalid username or password"}
  }
  
}