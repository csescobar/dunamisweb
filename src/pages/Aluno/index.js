import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import { useHistory } from 'react-router-dom';

function Aluno() {
  const history = useHistory();

  function handleBoletim(e) {
    e.preventDefault();

    history.push('/boletim');
  }

  return (
    <div id="page-aluno-detail" className="page-container">
      <PageHeader to="/loginAluno" label="Logout" />
      <main>
        <fieldset>
          <div className="legend-detail">
            <legend>CESAR DA SILVA ESCOBAR (163)</legend>
            <legend>Turma: ZOE - Ativo</legend>
          </div>
        </fieldset>
        <footer>
          <button type="button" onClick={handleBoletim}>
            Boletim de notas
          </button>
          <button type="button">Financeiro</button>
          <button type="button">Consulta presença</button>
          <button type="button">Colegas de classe</button>
          <button type="button">Audio das aulas</button>
          <button type="button">Conteúdo das aulas</button>
          <button type="button">Contato</button>
        </footer>
      </main>
    </div>
  );
}

export default Aluno;
