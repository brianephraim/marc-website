import React from 'react'
import { View } from 'react-native'
import Image from './Image';
import Link from './gatsby-link'
import StyleSheet from './StyleSheet';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 3,
    borderBottomColor: '$color5'
  },
  link: {
    color: '$color5',
    fontFamily: 'BodyFont',
    marginRight: 25,
    marginBottom:5,
    fontSize: 15,
    textDecorationLine: 'none',

  },
  activeLink: {
    color: '$color1',
  },
  linkCollection: {
    flexDirection: 'row',
  },
  face: {
    marginHorizontal:20,
    marginTop:20,
    width: 70,
    height:70,
  },
  adsf: {
    height: 30,
    width: 30,
    backgroundColor:'red',
  }

})

// const linkStyle = StyleSheet.flatten(styles.link);
const LinkItem = ({to, children}) => {
  return (
    <Link
      style={styles.link}
      activeStyle={styles.activeLink}
      to={to}
    >
      {children}
    </Link>
  );
}

const HeaderBar = () => (
  <View style={styles.container}>
    <Image
      style={styles.face}
      source={{uri:'/face_small.png'}}
    />
    <View style={styles.linkCollection}>
      <LinkItem to="/">Home</LinkItem>
      <LinkItem to="/books">Books</LinkItem>
      <LinkItem to="/lifecast">Lifecast</LinkItem>
      <LinkItem to="/newsletter">Newsletter</LinkItem>
      <LinkItem to="/press">Press</LinkItem>
      <LinkItem to="/about">About Me</LinkItem>
      <LinkItem to="/contact">Contact</LinkItem>
      <LinkItem to="/merch">Merch</LinkItem>
    </View>
  </View>
)

export default HeaderBar;
