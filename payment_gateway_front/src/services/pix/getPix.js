import axios from "axios";
const baseUrl = "ec2-3-239-238-73.compute-1.amazonaws.com:3000/";

export default function getPixConn(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://${baseUrl}users/getPix?id=${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
