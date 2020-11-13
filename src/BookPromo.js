import React from 'react'
import { Text, View } from 'react-native'
import Markdown from 'react-native-markdown-display';

import Image from './Image';
import LifecastProductImage from './LifecastProductImage';

import StyleSheet from './StyleSheet';
import Link from './gatsby-link'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 1000,
    alignItems: 'center',
    marginVertical: 80,
    marginHorizontal: 30,
  },
  leftSide: {
    flexShrink: 1,
    marginHorizontal: 20,
  },
  h1: {
    fontFamily: 'HeaderFont',
    fontSize: 50,
    fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 20,
  },
  bodyTextWrap: {
    marginBottom: 30,
  },
  emphasis: {
    color: '$color1',
  },
  bookImage: {
    marginHorizontal:20,
    marginTop:20,
  },
  buyNow: {
    backgroundColor: '$color2',
    color: 'black',
    fontFamily: 'HeaderFont',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    alignSelf: 'center',
    textDecorationLine: 'none',
    marginBottom: 15,
  },
  learnMore: {
    backgroundColor: '$color2',
    color: 'black',
    fontFamily: 'HeaderFont',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    textDecorationLine: 'none',
  },
})
const textContent = `*BRAVE NEW WORLD*${'\u0020'} meets *FEED*${'\u0020'} in this thrilling adventure that pits one man against a pleasure-obsessed society that threatens to take everything from him.
`;
/* eslint-disable react-native/no-unused-styles */
const markdownStyles = StyleSheet.create({
  text: {
    fontFamily: 'BodyFont',
    lineHeight:40,
    fontSize: 25,
    color: '$color5',
    textAlign:'center',
    marginBottom: 30,
  },
  textgroup: {textAlign:'center'},
  // body: {color: 'red', fontSize: 10},
  // body
  // heading1
  // heading2
  // heading3
  // heading4
  // heading5
  // heading6
  // hr
  // strong
  // em
  // s
  // blockquote
  // bullet_list
  // ordered_list
  // list_item
  // code_inline
  // code_block
  // fence
  // table
  // thead
  // tbody
	// th
  // tr
  // td
  // link
  // blocklink
	// image
  // text
  // textgroup
  // paragraph
  // hardbreak
  // softbreak
  // pre
  // inline
  // span
});
/* eslint-enable react-native/no-unused-styles */
const BookPromo = () => (
  <View style={styles.container}>
    <View style={styles.leftSide}>
      <Text style={styles.h1}>Welcome To Lifecast</Text>
      <View style={styles.bodyTextWrap}>
        <Markdown style={markdownStyles}>
          {textContent}
        </Markdown>
      </View>
      {/* <Link
        to="/books/"
        style={styles.buyNow}
      >
        BUY NOW
      </Link> */}
      <Link
        to="/lifecast/"
        style={styles.learnMore}
      >
        LEARN MORE
      </Link>
    </View>
    <LifecastProductImage
      style={styles.bookImage}
      width={380}
    />

  </View>
)

export default BookPromo;
