import React from 'react'
import { View } from 'react-native'
import Image from './Image';
import Link from './gatsby-link'
import StyleSheet from './StyleSheet';
import SocialButtons from './SocialButtons';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 3,
    borderBottomColor: '$color3',
    backgroundColor: '$color4',
  },
  link: {
    color: '$color2',
    fontFamily: 'BodyFont',
    marginRight: 20,
    marginBottom:5,
    fontSize: 18,
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
  socialButtons: {
    position:'absolute',
    top:10,
    right: 0,
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
      <LinkItem to="/lifecast">LIFECAST</LinkItem>
      <LinkItem to="/newsletter">Newsletter</LinkItem>
      {/* <LinkItem to="/press">Press</LinkItem> */}
      <LinkItem to="/about">About Me</LinkItem>
      <LinkItem to="/contact">Contact</LinkItem>
      {/* <LinkItem to="/merch">Merch</LinkItem> */}
    </View>
    <SocialButtons
      style={styles.socialButtons}
    />


  </View>
)

export default HeaderBar;
