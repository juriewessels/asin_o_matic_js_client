import React from 'react';

import AsinForm from '../components/AsinForm';

import '../css/header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <h1 className="brand">
              Asin
              <span className="brand-o">-O-</span>
              Matic
            </h1>
          </div>
          <div className="col-xs-12 col-sm-8">
            <AsinForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
