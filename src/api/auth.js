import instance from "@/api/instance";

// 회원가입
// export const register = ({ email, name, password }) =>
//   instance.post("/auth/register", {
//     email,
//     name,
//     password,
//   });

export const register = ({ email, name, password }) => {
  return instance({
    url: "/auth/register",
    method: "post",
    data: {
      email,
      name,
      password,
    },
  });
};

export const login = ({ email, password }) => {
  return instance({
    url: "/auth/login",
    method: "post",
    data: {
      email,
      password,
    },
  });
};

export const check = () => {
  return instance({
    url: "/auth/me",
    method: "get",
  });
};
