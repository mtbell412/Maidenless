import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import popeTurtle from './PopeTurtle.png'

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
      <footer className="w-100 mt-auto bg-secondary p-4">
        <div className="container text-center mb-5">
          {location.pathname !== '/' && (
            <button
              className="btn btn-dark mb-3"
              onClick={() => navigate(-1)}
            >
              &larr; Go Back
            </button>
          )}
          <h3>You Died</h3>
          <img src={popeTurtle} alt='popeTurtle'/>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  