import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

function Account() {
  return (
    <Link to="/profile" className="account">
      <p className="account__text">Аккаунт</p>
      <div className="account__image" />
    </Link>
  );
}

export default Account;
