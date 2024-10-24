interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  address: {
    address: string;
    state: string;
    city: string;
    postalCode: string;
    coordinates: {
      lat: string;
      lng: string;
    };
  };
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export { User, UsersResponse };
