import React from 'react'
// import { Text, View } from 'react-native'
import Image from './Image';

// const aspectRatio = 1378/2107;
const aspectRatio = 2107/1378;

const LifecastCoverImage = ({style, width}) => {
  return (
    <Image
      style={[{width, height: width * aspectRatio},style]}
      source={{uri:'/lifecast-cover.png'}}
    />
  );
};

export default LifecastCoverImage;
