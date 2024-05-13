"use client"
import { postUser } from "@/actions/user";

import { FC } from "react";
import {Button} from "./ui/button"

export const AddForm: FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postUser({
          username: e.currentTarget.username.value, password: e.currentTarget.password.value
        });
        
      }}
    >
      <input type="text" name="username" />
      <input type="text" name="password" />
      <Button type="submit">Add User</Button>
    </form>
  );
};
