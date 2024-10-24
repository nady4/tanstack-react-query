import { useInfiniteQuery } from "@tanstack/react-query";
import { UsersResponse } from "../../types.d";

const fetchUsers = async ({ pageParam = 0 }): Promise<UsersResponse> => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=10&skip=${pageParam}&select=firstName,lastName,username,email,phone,address`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

const useFetchUsers = () => {
  return useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      const nextSkip = allPages.length * 10;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });
};

export default useFetchUsers;
