import { useCallback, useContext, useState } from "react";
import Context from "../Context/UserContext";
import loginServices from "../Services/Login";

export default function useUser() {
  const { valor, setValor } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginServices({ username, password })
        .then((res) => {
          setValor({ alias: res.alias, usuario: res.usuario });
          localStorage.setItem("user", res.usuario);
          localStorage.setItem("alias", res.alias);
          console.log("user1:" + res.usuario);
          setState({ loading: false, error: false });
          if (res === undefined) {
            setState({ loading: false, error: true });
          }
        })
        .catch((err) => {
          console.log("error al ingresar");
          setState({ loading: false, error: true });
        });
    },
    [setValor]
  );

  const logout = useCallback(() => {
    setValor(null);
    localStorage.removeItem("user");
    localStorage.removeItem("alias");
    console.log("sesion cerrada");
  }, [setValor]);

  return {
    isLogged: Boolean(valor),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
