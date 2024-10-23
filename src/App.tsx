import { useState } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import useFetchUsers from "./hooks/useFetchUsers";
import useFilterUsers from "./hooks/useFilterUsers";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [searchfield, setSearchfield] = useState("");
  const [users, isLoading, error] = useFetchUsers(page);
  const filteredUsers = useFilterUsers(users, searchfield);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-[#f4c4f3] to-[#fc67fa]">
      <h1 className="text-3xl font-mono text-center my-4">Robots</h1>
      <button
        className="font-mono w-32 border-2 mb-4"
        disabled={isLoading}
        onClick={() => setPage(page + 1)}
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <SearchBox searchChange={onSearchChange} />
      <CardList users={filteredUsers} />
    </div>
  );
}

export default App;
