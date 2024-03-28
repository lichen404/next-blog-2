"use client"
import { postUser } from "@/actions/user";

import { FC } from "react";

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
      <button type="submit">Add User</button>
    </form>
  );
};
