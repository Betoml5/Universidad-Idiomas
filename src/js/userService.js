const API = "http://localhost:3010/api/users";

const registerUser = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
  };

  const response = await fetch(`${API}/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: data,
  });
  return response;
};

export default registerUser
