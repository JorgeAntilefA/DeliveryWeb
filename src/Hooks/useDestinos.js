import { useCallback, useState } from "react";
import Destinos from "./../Services/Destinos";

export default function useDestinos() {
  const [destinos, setDestinos] = useState([]);

  const getDestinos = useCallback(() => {
    Destinos()
      .then((res) => {
        setDestinos(res);
      })
      .catch((err) => {
        console.log("error al ingresar salidas" + err);
      });
  }, [setDestinos]);

  return {
    destinos: destinos,
    getDestinos,
  };
}
