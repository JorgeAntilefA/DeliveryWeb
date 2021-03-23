import { urlLlegadas } from "../Utils/Constants";
import axios from "axios";

export default function UpdateSalidas({ llegada, usuario }) {
  return axios
    .post(
      urlLlegadas,
      { llegada, usuario },
      {
        headers: {
          "content-type": "application/json; charset=utf-8",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {});
}
