// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './email.css';
import { GiCheckMark } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';


function Email() {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate('/');
  };

  return (
    <section className="email">
      <div className="max-width">
      <div className="content">
        <div className="card-content">
          <div className="card">
            <div className="icon">
              <strong>
                <GiCheckMark />
              </strong>
            </div>
            <div className="text">
              <h1>🙏Thank You🙏</h1>
              <p>Your message has been successfully submitted. We will reply as soon as possible ! </p>
            </div>
            <div className="btn-email">
              <button className="btn" onClick={handleOkClick}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Email;
