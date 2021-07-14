import instance from "@/api/instance";

// 회원가입
export const register = ({ email, name, password }) =>
  instance.post("/auth/register", {
    email,
    name,
    password,
  });

export const login = ({ email, password }) =>
  instance.post("/auth/login", {
    email,
    password,
  });

export const check = () => instance.get("/auth/me");
