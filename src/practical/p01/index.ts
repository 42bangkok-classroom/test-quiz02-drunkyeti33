import axios from "axios";

export async function getPostalAddress() {
 try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    return users.map(user => ({
      id: user.id ?? null,
      name: user.name ?? null,
      phone: user.phone ?? null,
      address: user.address ?? null
    }));
  } catch (error) {
    throw error;
  }
}




