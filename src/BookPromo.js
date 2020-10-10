import React from 'react'
import { Text, View } from 'react-native'
import Image from './Image';

import StyleSheet from './StyleSheet';
import Link from './gatsby-link'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 1000,
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  leftSide: {
    flexShrink: 1,
  },
  h1: {
    fontFamily: 'HeaderFont',
    fontSize: 50,
    fontWeight: 'bold',
    color: '$color2',
    textAlign:'center',
    marginBottom: 20,
  },
  bodyText: {
    fontFamily: 'BodyFont',
    lineHeight:40,
    fontSize: 25,
    color: '$color3',
    textAlign:'center',
    marginBottom: 30,
  },
  emphasis: {
    color: '$color1',
  },
  bookImage: {
    marginHorizontal:20,
    marginTop:20,
    width: 380,
    height:610,
  },
  buyNow: {
    backgroundColor: '$color5',
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
    backgroundColor: '$color5',
    color: 'black',
    fontFamily: 'HeaderFont',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    textDecorationLine: 'none',
  },
})

const BookPromo = () => (
  <View style={styles.container}>
    <View style={styles.leftSide}>
      <Text style={styles.h1}>Welcome To Lifecast</Text>
      <Text style={styles.bodyText}>
        The most best intereseting book thing you could
        ever imagine
        {'\u0020'}
        <Text style={styles.emphasis}>like really wow</Text>
        {'\u0020'}
        just you gotta give it a try right now you can't say
        enough good things about it.
      </Text>
      <Link
        to="/books/"
        style={styles.buyNow}
      >
        BUY NOW
      </Link>
      <Link
        to="/books/"
        style={styles.learnMore}
      >
        LEARN MORE
      </Link>
    </View>
    <Image
      style={styles.bookImage}
      source={{uri:'/book.png'}}
    />
  </View>
)

export default BookPromo;
