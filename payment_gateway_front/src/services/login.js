import axios from "axios";
const baseUrl = "ec2-3-239-238-73.compute-1.amazonaws.com:3000/";

export default function login(email, password) {
  return new Promise((resolve, reject) => {
    const user = {
      email: email,
      password: password,
    };
    axios
      .post(`http://${baseUrl}users/login`, user)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
