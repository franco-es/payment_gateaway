import axios from "axios";
const baseUrl = "http://localhost:3000/";

export default function getCategory(token) {
  return new Promise((res, rej) => {
    axios
      .get(`${baseUrl}category/getCategory`, {
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
