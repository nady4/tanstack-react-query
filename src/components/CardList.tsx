import { User } from "../../types.d";
import Card from "./Card";

const CardList = ({ users }: { users: User[] }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default CardList;
