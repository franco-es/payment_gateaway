import axios from "axios";
const baseUrl = "ec2-3-239-238-73.compute-1.amazonaws.com:3000/";

export default function getCategory(token) {
  return new Promise((res, rej) => {
    axios
      .get(`http://${baseUrl}category/getCategory`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        res(response);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
