import { User } from "../../types.d";
import Card from "./Card";

const CardList = ({ users }: { users: User[] }) => {
  return (
    <div>
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </div>
  );
};

export default CardList;
