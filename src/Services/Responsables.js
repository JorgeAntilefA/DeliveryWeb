import { urlResponsables } from "../Utils/Constants";
import axios from "axios";

export default function Responsables() {
  return axios
    .post(urlResponsables, {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
