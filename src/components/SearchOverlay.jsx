import React, { useState } from 'react';
import { indianStates, indianCities } from '../data/indianStates';
import './SearchOverlay.css';

const SearchOverlay = ({ onSelectLocation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value.length > 0) {
            const allLocations = [...indianStates, ...indianCities];
            const filtered = allLocations.filter((location) =>
                location.name.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    };

    const handleSelect = (location) => {
        onSelectLocation(location);
        setQuery(location.name);
        setResults([]);
    };

    return (
        <div className="search-overlay">
            <h2>Explore India</h2>
            <input
                type="text"
                className="search-input"
                placeholder="Search for a state or city..."
                value={query}
                onChange={handleSearch}
            />
            {results.length > 0 && (
                <ul className="results-list">
                    {results.map((location) => (
                        <li
                            key={location.name + location.type}
                            className="result-item"
                            onClick={() => handleSelect(location)}
                        >
                            <span style={{ fontWeight: 'bold' }}>{location.name}</span>
                            <span style={{ fontSize: '0.8em', marginLeft: '10px', opacity: 0.7 }}>
                                ({location.type})
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchOverlay;
