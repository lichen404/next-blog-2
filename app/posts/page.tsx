import { getPosts } from "@/actions/post";
import { getUser } from "@/actions/user";
import { AddForm } from "@/components/form";

const AllUsersPage = async () => {
  const result = await getPosts();
  const currentUser = await getUser();

  return (
    <>
      <span>{currentUser?.username}</span>
      <AddForm />
      <ul>
        {result?.posts.map((user) => (
          <li key={user.id}>{user.content}</li>
        ))}
      </ul>
    </>
  );
};

export default AllUsersPage;
