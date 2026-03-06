import axios from "axios";

export const loginService = async (form) => {
  const res = await axios.get(`http://localhost:3001/User`);

  const users = res.data.find(
    (u) => u.username === form.username && u.password === form.password,
  );
  if (!users) {
    throw new Error("sai tai khoan hoac mat khau");
  }

  return users;
};
export const User = async () => {
  const res = await axios.get(`http://localhost:3001/User`);
  return res.data;
};
