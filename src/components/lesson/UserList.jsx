import User from "./User";

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <User key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UserList;
