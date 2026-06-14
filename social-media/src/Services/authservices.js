import axios from "axios";

export async function signup(userData) {
  const { data } = await axios.post(
    "https://route-posts.routemisr.com/users/signup",

    userData,
  );

  return data;
}
