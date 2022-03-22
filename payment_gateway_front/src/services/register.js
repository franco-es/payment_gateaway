import axios from "axios";
const baseUrl = "ec2-3-239-238-73.compute-1.amazonaws.com:3000/";

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
      .post(`http://${baseUrl}users/new`, userRegister)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
}
