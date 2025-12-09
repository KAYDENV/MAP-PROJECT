import React, { useState } from 'react';
import MapViewer from './components/MapViewer';
import SearchOverlay from './components/SearchOverlay';
import './App.css';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="App">
      <SearchOverlay onSelectLocation={setSelectedLocation} />
      <MapViewer selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
