import React from 'react'
import './Asset.css'

const Asset = ({ image, animation }) => {

  console.log('animation is ', animation);
  return (
    <div className="asset-card">
      <div className="asset">
        {image !== '' ? (!image.endsWith('.mp4') ? 
          <img src={image} alt="asset" className="imageAsset" /> :
          <video alt="asset" className="animationAsset"  autoplay loop controls muted>
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <video alt="asset" className="animationAsset" autoplay loop controls muted>
            <source src={animation} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}

export default Asset
