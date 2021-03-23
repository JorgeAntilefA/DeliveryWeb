const ENDPOINT = process.env.REACT_APP_URL_BASE;

module.exports = {
  urlLogin: ENDPOINT + "/api/login",
  urlSalidas: ENDPOINT + "/api/salidas",
  urlDestinos: ENDPOINT + "/api/destinos",
  urlInsertSalidas: ENDPOINT + "/api/insertSalidas",
  urlResponsables: ENDPOINT + "/api/responsables",
  urlLlegadas: ENDPOINT + "/api/updateLlegada",
  urlCuenta: ENDPOINT + "/api/getCuenta",
};
