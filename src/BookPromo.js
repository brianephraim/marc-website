import React from 'react'
import { Text, View } from 'react-native'
import Markdown from 'react-native-markdown-display';
import { useMediaQuery } from 'react-native-media-query';
import Image from './Image';
import LifecastProductImage from './LifecastProductImage';
import StoreIcons from './StoreIcons';

import StyleSheet from './StyleSheet';
import Link from './gatsby-link'

const mediaStyles = {
  container: {
    flexDirection: 'row',
    maxWidth: 1000,
    alignItems: 'center',
    marginVertical: 80,
    marginHorizontal: 30,
    '@media (max-width: 800px)': {
        flexDirection: 'column-reverse',
    },
  },
  leftSide: {
    flexShrink: 1,
    marginHorizontal: 20,
    marginTop: 50,
  },
  bookImage: {
    marginHorizontal:20,
    marginTop:20,
    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
  bookImageSmaller: {
    marginHorizontal:20,
    marginTop:20,
    display: 'none',
    '@media (max-width: 500px)': {
      display: 'block',
    },
  },
};

const basicStyles = StyleSheet.create({

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
  // emphasis: {
  //   color: '$color1',
  // },

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
    marginBottom: 15,
  },
})
const textContent = `*BRAVE NEW WORLD*${'\u0020'} meets *FEED*${'\u0020'} in this thrilling adventure that pits one man against a pleasure-obsessed society that threatens to take everything from him.
`;
/* eslint-disable */
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
/* eslint-enable */
const BookPromo = () => {
  const [styleIds, styles] = useMediaQuery(mediaStyles);
  return (
    <View style={styles.container} dataSet={{ media: styleIds.container }}>
      <View style={styles.leftSide} dataSet={{ media: styleIds.leftSide }}>
        <Text style={basicStyles.h1}>Welcome To Lifecast</Text>
        <View style={basicStyles.bodyTextWrap}>
          <Markdown style={markdownStyles}>
            {textContent}
          </Markdown>
        </View>
        <Link
          to="/lifecast/"
          style={basicStyles.learnMore}
        >
          LEARN MORE
        </Link>
        <Link
          href="https://www.amazon.com/dp/B09QH1VPRW?ref_=pe_3052080_276849420"
          target="_blank"
          style={basicStyles.buyNow}
        >
          Buy Now
        </Link>
        <StoreIcons />
      </View>
      <LifecastProductImage
        style={styles.bookImage}
        width={380}
        dataSet={{ media: styleIds.bookImage }}
      />
      <LifecastProductImage
        style={styles.bookImageSmaller}
        dataSet={{ media: styleIds.bookImageSmaller }}
        width={280}
      />


    </View>
  )
};

export default BookPromo;
