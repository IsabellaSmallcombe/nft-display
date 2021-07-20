import React, { useState } from 'react'
import './App.css'
import Asset from './Asset'

function App() {
  const [assets, setAssets] = useState([])
  const [search, setSearch] = useState('')
  const [submit, setSubmit] = useState(false)

  const fetchNFTs = () => {
    console.log('address is ', search)
    fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&owner=${search}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        setAssets(res.assets)
        console.log(res)
      })
      .catch((error) => console.log(error))
  }

  const handleOnClickSearch = () => {
    console.log('search is ', search)
    setSubmit(true)
    fetchNFTs()
  }

  return (
    <div className="App">
      <header>
        <div className="header-flex-box">
          {submit && (
            <button className="button-address">Address: {search}</button>
          )}
        </div>
      </header>
      <body>
        <div className="asset-container-box">
          {!submit && (
            <>
              <h1>NFT Explore</h1>
              <form>
                <input
                  className="input-search"
                  placeholder="Search an address..."
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                ></input>
              </form>
              <button className="input-submit" onClick={handleOnClickSearch}>
                Submit
              </button>
            </>
          )}
          <div className="asset-row">
            {assets.map((asset) => {
              return (
                <Asset
                  key={asset.id}
                  image={asset.image_url}
                  animation={asset.animation_url}
                />
              )
            })}
          </div>
        </div>
      </body>
    </div>
  )
}

export default App
