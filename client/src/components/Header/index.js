import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="card-bg text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Maidenless</h1>
          </Link>
          <p className="m-0">A companion site for the Tarnished as they wonder the Lands Between</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn button-primary btn-lg  m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn button-primary btn-lg  m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg button-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg button-primary m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;