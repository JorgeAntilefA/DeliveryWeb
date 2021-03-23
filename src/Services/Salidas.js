import { urlSalidas } from "../Utils/Constants";
import axios from "axios";

export default function Salidas() {
  return axios
    .post(urlSalidas, {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
