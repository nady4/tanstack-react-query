import { useState, useEffect } from "react";
import { User } from "../../types.d";

const useFilterUsers = (users: User[], searchfield: string) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    const filtered = users.filter((user) => {
      return user.firstName.toLowerCase().includes(searchfield.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [users, searchfield]);

  return filteredUsers;
};

export default useFilterUsers;
