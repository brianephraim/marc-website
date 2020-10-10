import React from 'react';
import {Image as ImageOriginal} from 'react-native';
import { withPrefix } from "gatsby"


const Image = (props) => {
  let {source} = props;
  if (source && source.uri){
    source = {
      ...source,
      uri: withPrefix(source.uri),
    };
  }
  return (
    <ImageOriginal
      {...props}
      source={source}
    />
  );

};

export default Image;
