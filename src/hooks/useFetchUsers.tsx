import { useState, useEffect } from "react";
import { User } from "../../types.d";

const useFetchUsers = (page: number): [User[], boolean, string | null] => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(
      `https://dummyjson.com/users?limit=10&skip=${
        (page - 1) * 10
      }&select=firstName,lastName,username,email,phone,address`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers((prevUsers) =>
          page === 1 ? data.users : [...prevUsers, ...data.users]
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [page]);

  return [users, isLoading, error];
};

export default useFetchUsers;
