import axios from "axios";

export async function getPostalAddress() {
 try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    return users.map({
      id: users.id ?? null,
      name: users.name ?? null,
      phone: users.phone ?? null,
      address: users.address ?? null
    });
  } catch (error) {
    throw error;
  }
}




