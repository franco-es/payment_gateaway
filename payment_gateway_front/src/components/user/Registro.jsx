import React, {useCallback, useState} from "react";
import register from "../../services/register";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [name, SetName] = useState("");
  const [username, SetUsername] = useState("");
  const [lastName, SetLastName] = useState("");
  const [telefono, SetTelefono] = useState("");
  const [DNI, SetDNI] = useState("");
  const [error, setError] = useState("");

  const cleanForm = () => {
    setEmail("");
    SetName("");
    SetLastName("");
    SetUsername("");
    setPassword("");
    SetDNI("");
    SetTelefono("");
  };

  const RegisterEmail = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      // console.group("ingrese email");
      setError("el email es OBLIGATORIO");
      return;
    }
    if (!pass.trim()) {
      // console.group("ingrese password");
      setError("La password es OBLIGATORIA");
      return;
    }
    if (pass.length < 6) {
      // console.log("password menor de 6 caracteres.");
      setError("password menor de 6 caracteres.");
      return;
    }
    if (!telefono.trim()) {
      // console.log("password menor de 6 caracteres.");
      setError("El Numero de telefono es OBLIGATORIO.");
      return;
    }
    if (!name.trim()) {
      // console.log("password menor de 6 caracteres.");
      setError("El nombre es OBLIGATORIO.");
      return;
    }
    console.log("pasando todas las validaciones");
    signUp();
  };

  const signUp = useCallback(async () => {
    const res = await register(email, pass, name, telefono, lastName, DNI, 2, username );
    console.log(res);
    cleanForm();
  }, [email, pass, name, telefono, lastName, DNI, username]);

  return (
    <div>
      <form onSubmit={RegisterEmail} className="mb-3">
        {error && <div className="alert alert-danger">{error}</div>}
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese su Username"
          onChange={(e) => SetUsername(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese su Nombre"
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese su Apellido"
          onChange={(e) => SetLastName(e.target.value)}
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Ingrese un email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Ingrese un password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Ingrese su DNI"
          onChange={(e) => SetDNI(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Ingrese un telefono"
          onChange={(e) => SetTelefono(e.target.value)}
        />
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Registrate
        </button>
      </form>
    </div>
  );
};

export default Registro;
