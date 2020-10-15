import React from 'react'
import Image from './Image';

const aspectRatio = 1660/1686;

const LifecastProductImage = ({style, width}) => {
  return (
    <Image
      style={[{width,height: width * aspectRatio},style]}
      source={{uri:'/lifecast-product.png'}}
    />
  );
};

export default LifecastProductImage;
