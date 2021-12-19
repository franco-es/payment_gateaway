import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function register(
  email,
  pass,
  name,
  telefono,
  lastName,
  DNI,
  category,
  username
) {
  return new Promise((resolve, reject) => {
    const userRegister = {
      name: name,
      lastName: lastName,
      email: email,
      password: pass,
      dni: DNI,
      phone: telefono,
      category: category,
      username: username,
    };
    axios
      .post(`${baseUrl}users/new`, userRegister)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}
