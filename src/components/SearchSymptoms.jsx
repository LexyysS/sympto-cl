import React, { useState } from 'react';
import { searchSymptoms } from '../infermedicaAPI';

const SearchSymptoms = ({ onSymptomSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const data = await searchSymptoms(query);
    setResults(data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Buscar síntoma"
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {results.map(symptom => (
          <li key={symptom.id}>
            <label>
              <input
                type="checkbox"
                value={symptom.id}
                onChange={e => onSymptomSelect(e.target.value, e.target.checked)}
              />
              {symptom.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSymptoms;