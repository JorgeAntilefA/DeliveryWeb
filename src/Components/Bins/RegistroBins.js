import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tabla from "./Tabla";
import Destinos from "./Destinos";
import InsertSalidas from "../../Services/InsertSalidas";
import UpdateSalidas from "../../Services/UpdateSalidas";
import AlertDialog from "../AlertDialog";
import useSalidas from "../../Hooks/useSalidas";
import useCuenta from "../../Hooks/useCuenta";
import Cajas from "./Cajas";
import Responsables from "./Responsables";
import useResponsables from "../../Hooks/useResponsables";
import Context from "../../Context/UserContext";
import useUser from "../../Hooks/useUser";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  buttonSalida: {
    backgroundColor: "green",
    width: 150,
    marginTop: 30,
  },
  buttonLlegada: {
    backgroundColor: "orange",
    marginTop: 20,
    width: 150,
  },
  text: {
    width: 150,
  },
}));

export default function RegistroBins() {
  const classes = useStyles();
  const textFieldManifiesto = React.useRef(null);
  const [codigo, setCodigo] = useState("");
  const [manifiesto, setManifiesto] = useState("");
  const [destino, setDestino] = useState();
  const [llegada, setLlegada] = useState("");
  const [val, setVal] = useState({ estado: false, message: "" });
  const [valr, setValr] = useState(false);
  const { getSalidas } = useSalidas();
  const { getCuenta } = useCuenta();
  const { getResponsables } = useResponsables();
  const { valor } = useContext(Context);
  const [usuario, setUsuario] = useState();
  const { isLogged } = useUser();
  const history = useHistory();

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user === null) {
      process.env.NODE_ENV === "development"
        ? history.push("registro")
        : history.push("/Delivery");
    } else {
      setUsuario(user);
    }
  }, []);

  const handleSalida = () => {
    console.log(manifiesto);
    InsertSalidas({ codigo, manifiesto, destino, usuario })
      .then((res) => {
        if (res.data[0].afectadas === 1) {
          setCodigo("");
          setManifiesto("");
          setVal({ estado: true, message: "Registrado Guardado." });
          getSalidas();
          getResponsables();
          getCuenta();
        }
        if (res.data[0].afectadas === 0) {
          setCodigo("");
          setManifiesto("");
          setVal({
            estado: true,
            message: "Bins tiene Salida, favor dar llegada.",
          });
        }
        if (res.data[0].afectadas === 2) {
          setCodigo("");
          setManifiesto("");
          setVal({
            estado: true,
            message: "BINS no existe",
          });
        }
        if (res.data[0].afectadas === 3) {
          setCodigo("");
          setManifiesto("");
          setVal({
            estado: true,
            message: "Manifiesto no existe",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLlegada = () => {
    UpdateSalidas({ llegada, usuario })
      .then((res) => {
        console.log(res.data[0].afectadas);
        if (res.data[0].afectadas === 1) {
          setLlegada("");
          setVal({ estado: true, message: "Registrado Guardado." });
          getSalidas();
          getCuenta();
        }

        if (res.data[0].afectadas === 0) {
          setLlegada("");
          setVal({
            estado: true,
            message: "Bins no tiene Salida",
          });
          // getSalidas();
        }
        if (res.data[0].afectadas === 2) {
          setLlegada("");
          setVal({ estado: true, message: "Bins no existe" });
          getSalidas();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAlert = () => {
    setValr(true);
  };

  return (
    <div>
      <div style={{ marginLeft: 30 }}>
        <Cajas handleLlegada={handleAlert} />
        <div style={{ float: "left", marginTop: 20 }}>
          <TextField
            id="codigo-bins"
            label="Codigo Bins"
            variant="outlined"
            className={classes.text}
            value={codigo.toLocaleUpperCase()}
            onChange={(e) => setCodigo(e.target.value)}
            //onKeyDown={enterToManifiesto}
            inputProps={{
              onKeyPress: (event) => {
                const { key } = event;
                if (key === "Enter") {
                  textFieldManifiesto.current.focus();
                }
              },
            }}
          />
          <TextField
            id="manifiesto"
            label="Manifiesto"
            variant="outlined"
            value={manifiesto}
            onChange={(e) => setManifiesto(e.target.value)}
            style={{ marginLeft: 15 }}
            className={classes.text}
            inputRef={textFieldManifiesto}
          />
        </div>
        <div style={{ float: "left", marginTop: 12 }}>
          <Destinos setDestino={setDestino} />
        </div>
        <div style={{ float: "left", width: 200 }}>
          <Button
            className={classes.buttonSalida}
            variant="contained"
            color="primary"
            onClick={() => handleSalida()}
          >
            SALIDA
          </Button>
        </div>
        <div style={{ marginTop: 20 }}>
          <TextField
            id="codigo-bins-llegada"
            label="Codigo Bins"
            variant="outlined"
            className={classes.text}
            value={llegada.toLocaleUpperCase()}
            onChange={(e) => setLlegada(e.target.value)}
          />

          <Button
            className={classes.buttonLlegada}
            variant="contained"
            color="primary"
            onClick={() => handleLlegada()}
            style={{ marginLeft: 15, marginTop: 10 }}
          >
            LLEGADA
          </Button>
        </div>
        {/* <SearchContextProvider> */}
        {/* <Busqueda /> */}
        <Tabla />
        {/* </SearchContextProvider> */}
        <Responsables valr={valr} setValr={setValr} />
        <AlertDialog val={val.estado} message={val.message} setVal={setVal} />
      </div>
    </div>
  );
}
