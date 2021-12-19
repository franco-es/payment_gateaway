import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default function setPixConn(pix, token, method) {
  return new Promise((res, rej) => {
    const pixCode = {
      pixCode: pix,
    };
    if (method === "post") {
      console.log("accion post");
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
      console.log("accion put");
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
