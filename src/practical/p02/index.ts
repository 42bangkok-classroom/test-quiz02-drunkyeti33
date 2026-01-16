type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
import axios from "axios";
export async function addUser(newUser: newUser | null){
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;
 
    const formattedUsers = users.map(user => ({
      id: user.id ?? null,
      name: user.name ?? null,
      phone: user.phone ?? null,
      address: user.address ?? null
    }));
 
    if (newUser === null) {
      return formattedUsers;
    }

    const lastId = users.length > 0 ? users[users.length - 1].id : 0;

    const newUser = {
      id: lastId + 1,
      name: newUser?.name ?? null,
      phone: newUser?.phone ?? null,
      address: newUser?.address ?? null
    };

    return [...formattedUsers, newUser];
  } catch (error) {
    throw error;
  }
}
