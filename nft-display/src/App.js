import React, { useState } from 'react';
import './App.css';
import Asset from './Asset';

function App() {
  const [address, setAddress] = useState('');
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState('');

  const handleOnClickSearch = () => {
    setAddress(search);
    fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&owner=${address}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => res.json())
    .then(res => {
      setAssets(res.assets);
      console.log(res);
    }).catch(error => console.log(error));

  };

  return (
    <div className="App">
      <div className="header-flex-box">
        <form>
        <input placeholder="Search an address" onChange={(e) => {setSearch(e.target.value)}}></input>
        </form>
        <button onClick={handleOnClickSearch}>Search</button>
        <button>{address}</button>
      </div>
      
      <div className='asset-container-box'>
        <div className='asset-row'>
          {assets.map(asset => {
            return (
              <Asset key={asset.id} description={asset.description} image={asset.image_url} animation={asset.animation_url} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
