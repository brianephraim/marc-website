import React from 'react'
import { Text, View } from 'react-native'
import StyleSheet from './StyleSheet';
import Link from './gatsby-link'
import Image from './Image';
import LifecastCoverImage from './LifecastCoverImage';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // maxWidth: 1000,
    alignItems: 'center',
    // marginVertical: 30,
    // marginHorizontal: 30,
    // backgroundColor: "$color5",
    alignSelf:'stretch',
    paddingBottom:30,
  },
  h1: {
    fontFamily: 'HeaderFont',
    fontSize: 50,
    // fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 6,
    marginTop: 30,
  },
  hr: {

    backgroundColor: '$color5',
    width: 100,
    height:4,
  },
  subtitle: {
    fontSize:25,
    marginTop:15,
    fontFamily: 'BodyFont',
    color: '$color5',
  },
  genre: {
    marginTop:10,
    fontSize:18,
    fontFamily: 'BodyFont',
    color: '$color5',
  },
  columns: {
    marginTop:30,
    marginHorizontal:30,
    maxWidth:1000,
    flexDirection: 'row',
  },
  columnText: {
    flexShrink: 1,
  },
  column: {
    marginHorizontal:20,
  },

  blurb: {
    fontFamily: 'BodyFont',
    lineHeight:30,
    fontSize: 22,
    color: '$color5',
    textAlign:'center',
    marginBottom: 30,
  },
  bookImage: {
    marginHorizontal:20,
    marginTop:20,
    // width: 380,
    // height:610,
  },
  buyNowWrap: {
    marginBottom: 15,
    textDecorationLine: 'none',
    alignSelf: 'center',
  },
  buyNow: {
    backgroundColor: '$color2',
    color: '$color6',
    fontFamily: 'HeaderFont',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    textDecorationLine: 'none',
    display:'flex',
    borderWidth:4,
    borderColor:'$color4',
  },
  italic: {
    fontStyle: 'italic'
  },
})

const blurbs = [
  `Welcome to LifeCast.

There is no government...

There is no law…

There is no choice...

There is only the Idol.

Extreme urban sprawl has resulted in one massive megalopolis simply called, “The City.” The City’s wealthiest families live in the Highland, above a freezing layer of indigo mist.

Noble Valet Bear was born in the lowland, but now lives and works in the Highland as the sole servant of House Telladyne. Bear’s best friend, Aleks, was born to House Yukita, but has resisted her Noble grooming since she was young.

Until now, Bear has kept Aleks at a distance for fear his love might put them both in danger. Little does he know that they are about to stumble upon deeply-hidden secrets of the Idol that will threaten both of their lives.

In the fight to save themselves, Bear and Aleks must join forces with dangerous allies, face off against a foe who wields unimaginable power, and make the impossible choice between desire and survival. `,
];

const LifecastDetails = () => (
  <View style={styles.container}>
    <Text style={styles.h1}>LIFECAST</Text>
    <View style={styles.hr} />
    <Text style={styles.subtitle}>
      Book 1 of the
      {'\u0020'}
      <Text style={styles.italic}>The Neurogem Saga</Text>
    </Text>
    {/* <Text style={styles.genre}>
      GENRE: Science Fiction
    </Text> */}
    <View style={styles.columns}>
      <View style={styles.columnText}>
        {
          blurbs.map(text => (
            <Text style={styles.blurb}>
              {text}
            </Text>
          ))
        }
        <Link
          to="/books/"
          style={styles.buyNowWrap}
        >
          <Text style={styles.buyNow}>
            BUY NOW
          </Text>
        </Link>
      </View>
      <View style={styles.column}>
        <LifecastCoverImage
          style={styles.bookImage}
          width={380}
        />
      </View>
    </View>

  </View>
)

export default LifecastDetails;
