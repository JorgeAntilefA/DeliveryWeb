import { useCallback, useState } from "react";
import Cuenta from "./../Services/Cuenta";

export default function useCuenta() {
  const [cuenta, setCuenta] = useState([
    {
      title: "Disponibles",
      total: "",
    },
    {
      title: "Salidas",
      total: "",
    },
  ]);

  const getCuenta = useCallback(() => {
    Cuenta()
      .then((res) => {
        setCuenta([
          {
            title: "Disponibles",
            total: res[1].total,
          },
          {
            title: "Salidas",
            total: res[0].total,
          },
        ]);
      })
      .catch((err) => {
        console.log("error al ingresar cuenta" + err);
      });
  }, [setCuenta]);

  return {
    cuenta: cuenta,
    getCuenta,
  };
}
