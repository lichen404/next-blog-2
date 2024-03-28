import { getSession } from "@/actions/session";
import { login } from "@/actions/user";

const Login = async () => {
    const id = (await getSession()).userId;
  return (
    <>{id}
      <form action={login}>
        <input type="text" name="username" />
        <input type="text" name="password" />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default Login;
