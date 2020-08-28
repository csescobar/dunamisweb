import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

function Aluno() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img
            src="http://sga.igrejabatistadafe.com.br/images/logo.png"
            alt="Dunamis"
          />
          <h2>Sistema para Gerenciamento Escolar.</h2>
        </div>
        <div className="buttons-container">
          <Link to="/loginSecretaria" className="secretaria">
            Login secretaria
          </Link>
          <Link to="/loginAluno" className="aluno">
            Login aluno
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aluno;
