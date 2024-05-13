"use client";
import { login } from "@/actions/user";
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        const errors = await login(formData);
        if(errors){
          window.alert(errors.error);
        }
        else {
          router.push("/posts");
        }
      }}
    >
      <input type="text" name="username" />
      <input type="text" name="password" />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
