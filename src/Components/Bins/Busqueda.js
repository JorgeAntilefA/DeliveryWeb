import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Context from "../../Context/SearchContext";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    backgroundColor: "blue",
    marginLeft: 10,
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();
  const [text, setText] = useState();
  const { setSearch } = useContext(Context);

  const handleSearch = () => setSearch(text);

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Buscar Bins"
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handleSearch()}
        >
          BUSCAR
        </Button>
      </Grid>
    </div>
  );
}
