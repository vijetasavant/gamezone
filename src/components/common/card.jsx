import React from 'react'

const Card = ({ cardDetails }) => {
  const { isAvailable, name, link, description, image } = cardDetails;
  return (
    <div className='mt-3 mb-3 col-auto'>
      <div className="card game">
        <div className="game-img-container">
          <img src={image} className="game-img" alt="error"></img>
        </div>
        <h5 className="game-title mt-3">{name}</h5>
        <h6 className={isAvailable ? 'game-available' : 'game-available-soon'}>{isAvailable ? 'Enjoy Playing' : 'Will be available soon'}</h6>
        <p className="game-desc mt-1">{description}</p>
        <a href="#" className="card-link">{link}</a>
      </div>
    </div>
  )
}

export default Card