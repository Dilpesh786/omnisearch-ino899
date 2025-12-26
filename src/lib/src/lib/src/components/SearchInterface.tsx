import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { performSearch } from '../lib/searchApi';

export default function SearchInterface() {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const results = await performSearch(query);
    console.log(results);
    alert('Search functionality is ready!');
  };

  return (
    <div className="search-container">
      <h1>OmniSearch</h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..." 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', background: '#38bdf8', color: 'white', border: 'none', cursor: 'pointer' }}>
          Search
        </button>
      </form>
    </div>
  );
}
