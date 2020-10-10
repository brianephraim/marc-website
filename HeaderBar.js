import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flexDirection
  },
  link: {
    fontFamily: 'BodyFont',
  },
})

const LinkItem = ({to, children}) => {
  return (
    <Link
      to={to}
    >
      {children}
    </Link>
  );
}

const HeaderBar = () => (
  <View style={styles.container}>
    <Image src={{uri:'face_small.png'}}
    <LinkItem to="/">Home</LinkItem>
    <LinkItem to="/books">Books</LinkItem>
    <LinkItem to="/newsletter">Newsletter</LinkItem>
    <LinkItem to="/press">Press</LinkItem>
    <LinkItem to="/about">About Me</LinkItem>
    <LinkItem to="/contact">Contact</LinkItem>
    <LinkItem to="/merch">Merch</LinkItem>
  </View>
)

export default HeaderBar;
