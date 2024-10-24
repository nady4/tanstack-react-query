import { useState, useEffect } from "react";
import { User } from "../../types.d";

const useFilterUsers = (users: User[], searchfield: string) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const filtered = users
      .filter((user) =>
        user.firstName.toLowerCase().includes(searchfield.toLowerCase())
      )
      .sort((a, b) => a.firstName.localeCompare(b.firstName));
    setFilteredUsers(filtered);
  }, [users, searchfield]);

  return filteredUsers;
};

export default useFilterUsers;
