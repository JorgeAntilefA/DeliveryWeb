import { urlCuenta } from "../Utils/Constants";
import axios from "axios";

export default function Cuenta() {
  return axios
    .post(urlCuenta, {
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
