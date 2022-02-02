import React from 'react'
import { Text, View } from 'react-native'
import StyleSheet from './StyleSheet';
import { useMediaQuery } from 'react-native-media-query';
// import LifecastCoverImage from './LifecastCoverImage';
import LifecastBookImage from './LifecastBookImage';
import Link from './gatsby-link';
import StoreIcons from './StoreIcons';
import BookPreview from './BookPreview';

const mediaStyles = {

  columns: {
    marginTop:30,
    marginHorizontal:30,
    maxWidth:1000,
    flexDirection: 'row',
    '@media (max-width: 800px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },
  widgetWrap: {
    marginTop:30,
    marginHorizontal:30,
    maxWidth:1000,
    flexDirection: 'column',
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
      marginHorizontal:0,
      display: 'block',
    },
  },
  column: {
    marginHorizontal:40,
    '@media (max-width: 500px)': {
      marginHorizontal:15,
    },
    alignItems:'center',
  },
};

const basicStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  h2: {
    fontFamily: 'HeaderFont',
    fontSize: 40,
    // fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 16,
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

  columnText: {
    flexShrink: 1,
  },
  column: {
    marginHorizontal:40,
    alignItems:'center',
  },

  blurb: {
    fontFamily: 'BodyFont',
    lineHeight:30,
    fontSize: 22,
    color: '$color5',
    textAlign:'center',
    marginBottom: 50,
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
    alignSelf:'center',
    marginTop:25,
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

const LifecastDetails = () => {
  const [styleIds, styles] = useMediaQuery(mediaStyles);
  return (
    <View style={basicStyles.container}>
      <Text style={basicStyles.h1}>LIFECAST</Text>
      <View style={basicStyles.hr} />
      <Text style={basicStyles.subtitle}>
        Book 1 of the
        {'\u0020'}
        <Text style={basicStyles.italic}>The Neurogem Saga</Text>
      </Text>
      {/* <Text style={basicStyles.genre}>
        GENRE: Science Fiction
      </Text> */}
      <View style={styles.columns} dataSet={{ media: styleIds.columns }}>
        <View style={styles.column} dataSet={{ media: styleIds.column }}>
          <LifecastBookImage
            style={basicStyles.bookImage}
            dataSet={{ media: styleIds.bookImage }}
            width={380}
          />
          <LifecastBookImage
            style={styles.bookImageSmaller}
            dataSet={{ media: styleIds.bookImageSmaller }}
            width={180}
          />
          <Link
            to="https://www.amazon.com/dp/B09QH1VPRW?ref_=pe_3052080_276849420"
            target="_blank"
            style={basicStyles.buyNow}
          >
            Buy Now
          </Link>
          <StoreIcons />
        </View>
        <View style={basicStyles.columnText}>
          {
            blurbs.map(text => (
              <Text style={basicStyles.blurb} key={text}>
                {text}
              </Text>
            ))
          }

          {/*
            <Link
              href="https://www.amazon.com/dp/B09QH1VPRW?ref_=pe_3052080_276849420"
              target="_blank"
              style={basicStyles.buyNow}
            >
              Buy Now
            </Link>
          */}
          {/* <Link
            to="/books/"
            style={basicStyles.buyNowWrap}
          >
            <Text style={basicStyles.buyNow}>
              BUY NOW
            </Text>
          </Link> */}
        </View>

      </View>
      <View style={[styles.widgetWrap,{width:'100%',flexDirection:'column',}]} >
        <Text style={basicStyles.h2}>READ THE FIRST THREE CHAPTERS</Text>
        <BookPreview />


      </View>

    </View>
  )
};

export default LifecastDetails;
