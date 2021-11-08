import axios from "axios";
const baseUrl = "http://localhost:3000/";

export default function login(email, password) {
  return new Promise((resolve, reject) => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post(`${baseUrl}users/login`, user)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
