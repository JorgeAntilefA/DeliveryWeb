import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import useResponsables from "../../Hooks/useResponsables";

const useStyles = makeStyles({
  table: {
    maxWidth: 800,
  },
});

export default function Responsables(props) {
  const classes = useStyles();
  const { valr, setValr } = props;
  const { responsables, getResponsables } = useResponsables();

  useEffect(() => {
    const Responsables = async () => {
      if (valr) {
        getResponsables();
      }
    };
    Responsables();
  }, [valr]);

  const handleClose = () => {
    setValr(false);
  };

  function Table() {
    return (
      <table style={{ minWidth: 350 }}>
        <thead>
          <tr>
            <th>Responsable</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {responsables.map((res) => (
            <tr key={res.destino}>
              <td>{res.destino}</td>
              <td>{res.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <Dialog
        open={valr}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Responsables"}</DialogTitle>
        <DialogActions>
          <Table />
        </DialogActions>
      </Dialog>
    </div>
  );
}
