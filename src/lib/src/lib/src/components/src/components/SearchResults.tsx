import React from 'react';

export default function SearchResults({ results }: { results: any[] }) {
  if (results.length === 0) return null;

  return (
    <div className="results-list">
      {results.map((result, index) => (
        <div key={index} className="result-item">
          <a href={result.url} target="_blank" rel="noopener noreferrer">
            <h3>{result.title}</h3>
          </a>
          <p>{result.snippet}</p>
          <span className="result-source">{result.source}</span>
        </div>
      ))}
    </div>
  );
}
