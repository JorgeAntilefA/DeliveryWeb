import { useCallback, useState } from "react";
import Responsables from "./../Services/Responsables";

export default function useResponsables() {
  const [responsables, setResponsables] = useState([]);

  const getResponsables = useCallback(() => {
    Responsables()
      .then((res) => {
        setResponsables(res);
      })
      .catch((err) => {
        console.log("error al buscar responsables" + err);
      });
  }, [setResponsables]);

  return {
    responsables: responsables,
    getResponsables,
  };
}
