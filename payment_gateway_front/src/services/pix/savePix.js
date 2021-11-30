import axios from "axios";
const baseUrl = "http://localhost:3000/";

export default function setPixConn(pix, token, method) {
  return new Promise((res, rej) => {
    const pixCode = {
      pixCode: pix,
    };
    if (method == "post") {
      axios
        .post(`${baseUrl}users/savePix`, pixCode, {
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
    } else {
      axios
        .put(`${baseUrl}users/updatePix`, pixCode, {
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
    }
  });
}
