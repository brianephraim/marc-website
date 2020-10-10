import React from 'react'
import Link from 'gatsby-link'
import styleResolver from 'react-native-web/dist/exports/StyleSheet/styleResolver'

const GatsbyLink = (props) => {
  const {style,activeStyle,activeClassName,...rest} = props;
  const objForClassName = {};
  if (typeof style !== 'undefined') {
    const {className} = styleResolver.resolve(style) || {};
    objForClassName.className = className;
  }
  if (typeof activeStyle !== 'undefined') {
    const {className} = styleResolver.resolve(activeStyle) || {};
    objForClassName.activeClassName = className;
  }

  return (
    <Link
      {...objForClassName}
      {...rest}
    />
  );
};

export default GatsbyLink;
