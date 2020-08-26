import React from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";

function Boletim() {
  return (
    <div id="page-boletim-detail" className="page-container">
      <PageHeader to="/aluno" label="Voltar" />
      <main>
        <h2>Consulta de notas</h2>
        <div className="table-content">
          <table className="rTable">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GUIADOS PELO ESPÍRITO DE DEUS</td>
                <td>9.5</td>
              </tr>
              <tr>
                <td>AUTORIDADE DO CRENTE</td>
                <td>10</td>
              </tr>
              <tr>
                <td>AS MANIFESTACOES DO ESPÍRITO</td>
                <td>10</td>
              </tr>
              <tr>
                <td>SUBMISSÃO E AUTORIDADE</td>
                <td>10</td>
              </tr>
              <tr>
                <td>DOUTRINAS BÁSICAS</td>
                <td>9</td>
              </tr>
              <tr>
                <td>FRUTO DO ESPÍRITO</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Boletim;
