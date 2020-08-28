import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

const PageHeader = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={props.to}>
          <img src={backIcon} alt={props.label} />
        </Link>
        <p>{props.label}</p>
      </div>

      <div className="header-content">
        <img
          src="http://sga.igrejabatistadafe.com.br/images/logo.png"
          alt="Dunamis"
        />
        <h2>Sistema para Gerenciamento Escolar.</h2>
      </div>
    </header>
  );
};

export default PageHeader;
