import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (engine: string) => {
    if (!query) return;
    let url = '';
    switch (engine) {
      case 'google': url = `https://www.google.com/search?q=${query}`; break;
      case 'bing': url = `https://www.bing.com/search?q=${query}`; break;
      case 'video': url = `https://www.youtube.com/results?search_query=${query}`; break;
      default: url = `https://www.google.com/search?q=${query}`;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="app">
      <div className="search-container">
        <h1>OmniSearch</h1>
        <p>Find anything, instantly. The world's knowledge at your fingertips.</p>
        
        <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="Search the web..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch('google')}
          />
        </div>

        <div className="button-group">
          <button onClick={() => handleSearch('google')} className="btn-search">Search</button>
        </div>

        <div className="engine-tabs">
          <button onClick={() => handleSearch('google')} className="tab">🌐 Web</button>
          <button onClick={() => handleSearch('video')} className="tab">📺 Video</button>
          <button onClick={() => handleSearch('bing')} className="tab">🔍 News</button>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact Us</span>
        </div>
        <p>© 2025 OmniSearch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
