import request from "@/utils/request";

async function userLogin(params: { email: string; password: string }) {
  return request("/api/v3/account/login", {
    method: "POST",
    data: params,
  });
}

async function currentUser() {
  const auth = localStorage.getItem("auth") || "";
  return request("/api/v3/account/login", {
    method: "POST",
    data: JSON.parse(auth),
  });
}

const userAPI = {
  userLogin,
  currentUser,
};

export default userAPI;
