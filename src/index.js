import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function Intro() {
  return (
    <div className="section">
      <img
        src="/profile.jpg"
        alt="My Profile"
        width="150"
        style={{ borderRadius: "50%" }}
      />
      <h2>Saad Nadeem</h2>
      <p>Email: saad@example.com</p>
      <p>Phone: 0300-xxxxxxx</p>
      <p>Location: Pakistan</p>
    </div>
  );
}

export default Intro;