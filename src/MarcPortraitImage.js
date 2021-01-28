import React from 'react'
// import { Text, View } from 'react-native'
import Image from './Image';

const aspectRatio = 1786/1427;

const MarcPortraitImage = ({style, width}) => {
  return (
    <Image
      style={[{width, height: width * aspectRatio},style]}
      source={{uri:'/marc-portrait.jpg'}}
    />
  );
};

export default MarcPortraitImage;
