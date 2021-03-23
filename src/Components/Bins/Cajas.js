import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Link from "@material-ui/core/Link";
import useCuenta from "../../Hooks/useCuenta";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Cajas(props) {
  const classes = useStyles();
  const { handleLlegada } = props;
  const { cuenta, getCuenta } = useCuenta();

  useEffect(() => {
    const Cuenta = async () => {
      getCuenta();
    };
    Cuenta();
  }, [cuenta]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{ marginTop: 10 }} maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {cuenta.map((cuenta) => (
            <Grid
              item
              key={cuenta.title}
              xs={12}
              sm={cuenta.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={cuenta.title}
                  subheader={cuenta.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                  action={
                    cuenta.title === "Salidas" ? (
                      <Link>
                        <LocalShippingIcon onClick={() => handleLlegada()} />{" "}
                      </Link>
                    ) : null
                  }
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {cuenta.total}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
