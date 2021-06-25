import instance from "@/api/instance";

// 회원가입
export const register = ({ email, name, password }) =>
  instance.post("/auth/register", {
    email,
    name,
    password,
  });
