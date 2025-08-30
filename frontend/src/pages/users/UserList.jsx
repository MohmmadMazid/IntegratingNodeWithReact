import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/api";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getdata() {
      await getUsers().then((res) => setUsers(res.data));
      console.log(users);
    }
    getdata();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} - {u.email} {u._id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
