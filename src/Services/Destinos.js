import { urlDestinos } from "../Utils/Constants";
import axios from "axios";

export default function Destinos() {
  return axios
    .post(urlDestinos, {
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
