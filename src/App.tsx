import { useState, useEffect } from "react";
import { User } from "../types.d";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      <h1>Users</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList users={filteredUsers} />
    </>
  );
}

export default App;
