import axios from "axios";
const baseUrl = "ec2-3-239-238-73.compute-1.amazonaws.com:3000/";

export default function setPixConn(pix, token, method) {
  return new Promise((res, rej) => {
    const pixCode = {
      pixCode: pix,
    };
    if (method === "post") {
      console.log("accion post");
      axios
        .post(`http://${baseUrl}users/savePix`, pixCode, {
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
