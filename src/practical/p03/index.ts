import axios from "axios"
export async function filterUserById(id) {
    try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data;

    const user = users.find(item => item.id === id);

    if (!user) {
      return "Invalid id";
    }

    return {
      id: user.id ?? null,
      name: user.name ?? null,
      phone: user.phone ?? null,
      address: user.address ?? null
    };
  } catch (error) {
    throw error;
  }
}
