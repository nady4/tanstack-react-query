import { User } from "../../types.d";

const Card = ({ user }: { user: User }) => {
  return (
    <div className="hover:scale-105 rounded-lg bg-fuchsia-200 mr-3 mb-3 flex flex-col items-center font-mono">
      <img src={`https://robohash.org/${user.id}?200x200`} alt="robots" />
      <h1 className="mt-2">{user.firstName}</h1>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default Card;
