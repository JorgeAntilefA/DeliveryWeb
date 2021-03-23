import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useDestinos from "../../Hooks/useDestinos";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Destinos(props) {
  const classes = useStyles();
  const { getDestinos, destinos } = useDestinos();
  const [option, setOption] = useState("");

  const { setDestino } = props;
  useEffect(() => {
    const Destinos = async () => {
      getDestinos();
    };
    Destinos();
  }, []);

  const handleChange = (event) => {
    setOption(event.target.value);
    setDestino(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Destino</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={option}
          onChange={handleChange}
          label="Destino"
        >
          {destinos.map((destino, key) => (
            <MenuItem key={key} value={destino.courier}>
              {destino.courier}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
