import axios from "axios";
const baseUrl = "http://localhost:3000/";

export default function getPixConn(id) {
    return new Promise((resolve, reject) => {
        axios
            .get(`${baseUrl}users/getPix?id=${id}`)
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
