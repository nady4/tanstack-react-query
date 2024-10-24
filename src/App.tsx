import { useState } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import useFetchUsers from "./hooks/useFetchUsers";
import filterUsers from "./utils/filterUsers";
import "./App.css";

function App() {
  const [searchfield, setSearchfield] = useState("");
  const { data, error, fetchNextPage, isFetchingNextPage } = useFetchUsers();
  const users = data?.pages.flatMap((page) => page.users) ?? [];
  const filteredUsers = filterUsers(users, searchfield);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-[#f4c4f3] to-[#fc67fa]">
      <h1 className="text-3xl font-mono text-center my-4">🤖 Robots 🤖</h1>
      <button
        className="font-mono w-32 border-2 mb-4 hover:bg-fuchsia-300 hover:scale-105 focus:scale-95 focus:bg-fuchsia-400 focus:text-md rounded-md"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
      {error && <div className="text-red-500 mb-4">{error.message}</div>}
      <SearchBox searchChange={onSearchChange} />
      <CardList users={filteredUsers} />
    </div>
  );
}

export default App;
