const API = "http://localhost:3013/api/users";

const registerUser = async (name, email, password) => {
  const data = {
    name,
    email,
    password,
  };

  const response = await fetch(`${API}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response;
};

const btnRegister = document.querySelector("#btn-register");
btnRegister.addEventListener("click", function () {
  const userName = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  registerUser(userName, email, password);
});
