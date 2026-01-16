import axios from "axios";

export async function getPostalAddress() {
 try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    return users.map(user => ({
      id: user.id,
      name: user.name,
      phone: user.phone,
      address: user.address
    }));
  } catch (error) {
    throw error;
  }
}




