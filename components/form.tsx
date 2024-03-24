"use client"
import { postUser } from "@/actions/user";

import { FC } from "react";

export const AddForm: FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postUser({ email: e.currentTarget.email.value });
        
      }}
    >
      <input type="text" name="email" />
      <button type="submit">Add User</button>
    </form>
  );
};
