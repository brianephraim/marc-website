import React from 'react'
// import { Text, View } from 'react-native'
import Image from './Image';

// const aspectRatio = 1378/2107;
// const aspectRatio = 2107/1378;
const aspectRatio = 1593/1179;

const LifecastBookImage = ({style, width, dataSet}) => {
  return (
    <Image
      style={[{width, height: width * aspectRatio},style]}
      source={{uri:'/lifecast-book.png'}}
      dataSet={dataSet}
    />
  );
};

export default LifecastBookImage;
