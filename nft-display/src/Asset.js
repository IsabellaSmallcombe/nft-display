import React from 'react'
import './Asset.css'

const Asset = ({ image, description, animation }) => {
    return (
        <div className='asset-card'>
            <div className='asset'>
                {image !== ''
                    ? <img src={image} alt='asset' className='imageAsset' />
                    : <video src={animation} alt='asset' className='animationAsset' />
                }
            </div>
        </div>
    )
}

export default Asset;