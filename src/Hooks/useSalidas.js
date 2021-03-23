import { useCallback, useContext } from "react";
import Context from "../Context/SalidasContext";
import Salidas from "./../Services/Salidas";

export default function useSalidas() {
  //const [salidas, setSalidas] = useState([]);
  const { salidas, setSalidas } = useContext(Context);

  const getSalidas = useCallback(() => {
    console.log("salidas");
    Salidas()
      .then((res) => {
        setSalidas(res);
      })
      .catch((err) => {
        console.log("error al ingresar salidas" + err);
      });
  }, [setSalidas]);

  return {
    salidas: salidas,
    setSalidas,
    getSalidas,
  };
}
