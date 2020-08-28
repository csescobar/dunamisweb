import React, { useState } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import { useHistory } from 'react-router-dom';

function LoginAluno() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    history.push('/aluno');
  }

  return (
    <div id="page-aluno-login" className="page-container">
      <PageHeader to="/" label="Voltar" />
      <main>
        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>Login Aluno</legend>
            <Input
              name="name"
              placeholder="Matrícula"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Input
              name="cpf"
              placeholder="CPF"
              value={cpf}
              onChange={e => {
                setCpf(e.target.value);
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

export default LoginAluno;
