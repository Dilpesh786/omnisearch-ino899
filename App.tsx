import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <h1 className="logo-text">OmniSearch</h1>
      <div className="search-wrapper">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Search the future..." 
        />
        <div style={{ marginTop: '20px' }}>
           <button className="search-btn">Search</button>
        </div>
      </div>
      <p className="footer-text">Powered by OmniSearch-ino899</p>
    </div>
  );
}

export default App;
