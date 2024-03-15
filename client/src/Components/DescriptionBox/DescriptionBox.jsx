import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="description-nav-box">Description </div>
        <div className="description-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates
            the buying and selling the products or services over the internet.It 
            services as a virtual marketplace where businesses and individuals can 
            showcase the products,interact with customers and conduct transactions 
            without the need for a physical presence E-Commerce website have gained 
            immense popularly due to their convience accessability, and the global the over.</p>
            <p>
                E-commerce websites typically dispaly products or services along
                with detailed description images,prices and any available variations(e.g., sizes, colors).
                Each product usually ahs its own dedicated page with 
                relevant information.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
