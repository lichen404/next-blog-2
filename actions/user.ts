'use server'
import { revalidatePath } from "next/cache";

import { getDBConnection } from "@/app/database/connection";
import { User } from "@/app/models/User";

export const getUsers = async (): Promise<User[]> => {
    const connection = await getDBConnection();
    const data = await connection.getRepository(User).find();
    return JSON.parse(JSON.stringify(data));
  };
  
export const postUser = async (user: User): Promise<User> => {
    const connection = await getDBConnection();
    const result = await connection.getRepository(User).save(user);
    revalidatePath('/posts');
    return result;
  };