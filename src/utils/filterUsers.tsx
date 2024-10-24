import { User } from "../../types.d";

export const filterUsers = (users: User[], searchfield: string): User[] => {
  if (!searchfield) return users;

  return users
    .filter((user) =>
      user.firstName.toLowerCase().includes(searchfield.toLowerCase())
    )
    .sort((a, b) => a.firstName.localeCompare(b.firstName));
};

export default filterUsers;
