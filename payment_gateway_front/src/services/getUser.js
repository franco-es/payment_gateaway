import axios from "axios";
// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "http://localhost:8000/";

export default function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}users/singleByUsername?username=${username}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
