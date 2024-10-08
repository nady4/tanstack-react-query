import { User } from "../../types.d";

const Card = ({ user }: { user: User }) => {
  return (
    <div>
      <img src={`https://robohash.org/${user.id}?200x200`} alt="robots" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
    </div>
  );
};

export default Card;
