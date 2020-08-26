import React, { useState } from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import warningIcon from '../../assets/images/icons/warning.svg';
//import { useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';

function LoginSecretaria() {
  //const history = useHistory ();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {}

  return (
    <div id="page-secretaria-login" className="page-container">
      <PageHeader to="/" label="Voltar" />
      <main>
        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>Login secretaria</legend>
            <Input
              name="name"
              placeholder="Usuário"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </fieldset>
          <footer>
          <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha os dados
          </p>
            <button type="submit">Entrar</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default LoginSecretaria;
