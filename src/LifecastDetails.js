import React from 'react'
import { Text, View, Image } from 'react-native'
import StyleSheet from './StyleSheet';
import Link from './gatsby-link'

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // maxWidth: 1000,
    alignItems: 'center',
    // marginVertical: 30,
    // marginHorizontal: 30,
    backgroundColor: "$color1",
    alignSelf:'stretch',
    paddingBottom:30,
  },
  h1: {
    fontFamily: 'HeaderFont',
    fontSize: 40,
    // fontWeight: 'bold',
    color: '$color4',
    textAlign:'center',
    marginBottom: 6,
    marginTop: 30,
  },
  hr: {

    backgroundColor: '$color4',
    width: 100,
    height:4,
  },
  subtitle: {
    fontSize:20,
    marginTop:15,
    fontFamily: 'BodyFont',
  },
  genre: {
    marginTop:10,
    fontSize:15,
    fontFamily: 'BodyFont',
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
    fontSize: 18,
    color: '$color4',
    textAlign:'center',
    marginBottom: 30,
  },
  bookImage: {
    marginHorizontal:20,
    marginTop:20,
    width: 380,
    height:610,
  },
  buyNowWrap: {
    marginBottom: 15,
    textDecorationLine: 'none',
    alignSelf: 'center',
  },
  buyNow: {
    backgroundColor: '$color5',
    color: 'black',
    fontFamily: 'HeaderFont',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 20,
    textDecorationLine: 'none',
    display:'flex',
    borderWidth:2,borderColor:'black'
  },
})

const blurbs = [
  `Moving along… Oh, I always feared he might run off like this. Why, why, why didn't I break his legs? I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!`,
  `That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Professor, make a woman out of me. Daylight and everything. You'll have all the Slurm you can drink when you're partying with Slurms McKenzie!`,
  `And then the battle's not so bad? Aww, it's true. I've been hiding it for so long. Well I'da done better, but it's plum hard pleading a case while awaiting trial for that there incompetence. No, I'm Santa Claus!

Incidentally, you have a dime up your nose. I've been there. My folks were always on me to groom myself and wear underpants. What am I, the pope? Stop! Don't shoot fire stick in space canoe! Cause explosive decompression!`,
];

const HeaderBar = () => (
  <View style={styles.container}>
    <Text style={styles.h1}>Welcome To Lifecast</Text>
    <View style={styles.hr} />
    <Text style={styles.subtitle}>
      Book 1 of the
      {'\u0020'}
      <Text style={styles.italic}>Lifecast</Text>
      {'\u0020'}
      series{'\n'}
    </Text>
    <Text style={styles.genre}>
      GENRE: Science Fiction
    </Text>
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
        <Image
          style={styles.bookImage}
          source={{uri:'/book.png'}}
        />
      </View>
    </View>

  </View>
)

export default HeaderBar;
