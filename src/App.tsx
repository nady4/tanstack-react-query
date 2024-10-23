import { useState, useEffect } from "react";
import { User } from "../types.d";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch(
      `https://dummyjson.com/users?limit=10&skip=${
        (page - 1) * 10
      }&select=firstName,lastName,username,email,phone,address`
    )
      .then((response) => response.json())
      .then((data) => setUsers([...users, ...data.users]));
  }, [page]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.firstName.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="h-full flex flex-col items-center bg-gradient-to-tr from-[#f4c4f3] to-[#fc67fa]">
      <h1 className="text-3xl font-mono text-center my-4">Robots</h1>
      <button
        className="font-mono w-32 border-2 mb-4"
        onClick={() => setPage(page + 1)}
      >
        Load More
      </button>
      <SearchBox searchChange={onSearchChange} />
      <CardList users={filteredUsers} />
    </div>
  );
}

export default App;
