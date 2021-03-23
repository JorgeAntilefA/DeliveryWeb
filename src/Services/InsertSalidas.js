import { urlInsertSalidas } from "../Utils/Constants";
import axios from "axios";

export default function InsertSalidas({
  codigo,
  manifiesto,
  destino,
  usuario,
}) {
  return axios
    .post(
      urlInsertSalidas,
      { codigo, manifiesto, destino, usuario },
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
