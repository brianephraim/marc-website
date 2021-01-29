import React from 'react'
import Image from './Image';

const aspectRatio = 1660/1686;

const LifecastProductImage = ({style, width, dataSet}) => {
  return (
    <Image
      style={[{width,height: width * aspectRatio},style]}
      source={{uri:'/lifecast-product.png'}}
      dataSet={dataSet}
    />
  );
};

export default LifecastProductImage;
