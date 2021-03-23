import { urlLogin } from "../Utils/Constants";
import axios from "axios";

export default function login({ username, password }) {
  return axios
    .post(
      urlLogin,
      { name: username, password: password },
      {
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
      }
    )
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {});
}
