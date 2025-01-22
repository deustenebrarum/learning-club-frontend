import api from "./base";

export const obtainToken = async (email, password) => {
  const res = await api.post("/auth/token", { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
}