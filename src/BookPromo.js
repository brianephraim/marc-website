import React from 'react'
import { Text, View } from 'react-native'
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
  bodyText: {
    fontFamily: 'BodyFont',
    lineHeight:40,
    fontSize: 25,
    color: '$color5',
    textAlign:'center',
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
const textContent = `Extreme urban sprawl has resulted in one massive megalopolis simply called, “The City.” The City’s wealthiest families live in the Highland, above a freezing layer of indigo mist.
`;

const BookPromo = () => (
  <View style={styles.container}>
    <View style={styles.leftSide}>
      <Text style={styles.h1}>Welcome To Lifecast</Text>
      <Text style={styles.bodyText}>
        {textContent}
      </Text>
      <Link
        to="/books/"
        style={styles.buyNow}
      >
        BUY NOW
      </Link>
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
