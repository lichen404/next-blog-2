import { getUsers } from "@/actions/user";
import { AddForm } from "@/components/form";

const AllUsersPage = async () => {
  const users = await getUsers();

  return (
    <>
      <AddForm />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.email} (ID: ${user.id})`}</li>
        ))}
      </ul>
    </>
  );
};

export default AllUsersPage;
