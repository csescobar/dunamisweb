import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import LoginSecretaria from './pages/LoginSecretaria';
import LoginAluno from './pages/LoginAluno';
import Aluno from './pages/Aluno';
import Boletim from './pages/Boletim';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/loginSecretaria" component={LoginSecretaria} />
      <Route path="/loginAluno" component={LoginAluno} />
      <Route path="/aluno" component={Aluno} />
      <Route path="/boletim" component={Boletim} />
    </BrowserRouter>
  );
}

export default Routes;