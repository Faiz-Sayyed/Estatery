import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import SearchArea from './Components/SearchArea/SearchArea'
import DisplayArea from './Components/DisplayArea/DisplayArea'
import data from './data.js'
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState(data);
  const [filterResults, setFilterResults] = useState(data);
  const [finalResults, setFinalResults] = useState(data);

  useEffect(() => {
    setFinalResults(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setFinalResults(filterResults);
  }, [filterResults]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="body-container">
        <SearchArea data={data} setSearchResults={setSearchResults} setFilterResults={setFilterResults} />
        <DisplayArea finalResults={finalResults} />
      </div>
    </>
  );
}

export default App;
