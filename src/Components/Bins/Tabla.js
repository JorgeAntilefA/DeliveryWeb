import React, { useEffect, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import useSalidas from "../../Hooks/useSalidas";
import Context from "../../Context/SearchContext";

const columns = [
  { field: "codigo_bins", headerName: "Codigo Bins", width: 150 },
  { field: "manifiesto", headerName: "Manifiesto", width: 130 },
  { field: "destino", headerName: "Destino", width: 200 },
  { field: "fecha_salida", headerName: "Fecha Salida", width: 190 },
  { field: "usuario_salida", headerName: "Usuario Salida", width: 160 },
  { field: "fecha_llegada", headerName: "Fecha Llegada", width: 190 },
  { field: "usuario_llegada", headerName: "Usuario Llegada", width: 160 },
];

export default function Tabla() {
  const { salidas, getSalidas, setSalidas } = useSalidas();
  const { search } = useContext(Context);

  useEffect(() => {
    //   // if (search !== null && search !== undefined && search !== "") {
    //   //   const registerBin = salidas.filter((bin) => bin.codigo_bins === search);
    //   //   setSalidas(registerBin);
    //   // } else {

    //   // }

    const Salidas = async () => {
      getSalidas();
    };
    Salidas();
  }, [getSalidas]);

  const rows = salidas;

  return (
    <div style={{ height: 800, width: "100%", marginTop: 20 }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
  );
}
