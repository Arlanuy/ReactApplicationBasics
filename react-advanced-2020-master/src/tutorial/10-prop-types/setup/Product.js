import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({image, name, price}) => {
  const url = image && image.url
  console.log(image, name, price)
  return <article className='product'>
    
     <h4>single product</h4>
     <img src={image.url || defaultImage} alt={name || 'default name'} />
    <h4>{name}</h4>
    <p>${price}</p>
  </article>;
};

// eslint-disable-next-line react/no-typos
Product.PropTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage
}

export default Product;
