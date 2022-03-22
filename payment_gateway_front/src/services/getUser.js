import axios from "axios";
const baseUrl = "ec2-3-239-238-73.compute-1.amazonaws.com:3000/";
//const baseUrl = "http://localhost:8000/";

export default function getUserByUsername(username) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://${baseUrl}users/singleByUsername?username=${username}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
