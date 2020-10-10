import React from 'react'
import { Text, View } from 'react-native'
import Image from './Image';
import StyleSheet from './StyleSheet';
import Link from './gatsby-link'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 1000,
    alignItems: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  column: {
    margin: 10,
  },
  bookCard: {
    backgroundColor: '$color1',
    paddingHorizontal: 20,
    paddingVertical: 0,
    width: 300,
    alignItems:'center',
    borderRadius: 3,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'HeaderFont',
    fontSize: 25,
    fontWeight: 'bold',
    color: '$color4',
    textAlign:'center',
    paddingBottom:10,
    marginTop:20,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '$color4',
  },
  subtitle: {
    fontFamily: 'BodyFont',
    // lineHeight:4,
    fontSize: 16,
    color: '$color4',
    textAlign:'center',
    marginBottom: 15,
  },
  italic: {
    // color: '$color1',
    fontStyle: 'italic',
  },
  bookImage: {
    marginHorizontal:20,
    marginTop:20,
    width: 180,
    height:290,
  },
  buyNow: {
    backgroundColor: '$color5',
    color: 'black',
    fontFamily: 'HeaderFont',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    textDecorationLine: 'none',
    marginBottom: 15,
  },
  learnMore: {
    backgroundColor: '$color3',
    color: '$color4',
    fontFamily: 'HeaderFont',
    fontSize: 14,
    // fontWeight: 'bold',
    padding: 8,
    alignSelf: 'center',
    textDecorationLine: 'none',
    marginBottom: 15,
    // border
  },
  soon: {
    // backgroundColor: '$color5',
    color: '$color1',
    fontFamily: 'HeaderFont',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center',
    textDecorationLine: 'none',
    marginBottom: 15,
  },
})

const AllBooks = () => (
  <View style={styles.container}>
    {
      [
        {
          title: 'Welcome to Lifecast',
          imageUrl: '/book.png',
          outNow: true,
          subtitle: (
            <>
              Book 1 of the
              {'\u0020'}
              <Text style={styles.italic}>Lifecast</Text>
              {'\u0020'}
              series
            </>
          ),
        },
        {
          title: 'Lifecast: The Revenge',
          imageUrl: '/book.png',
          outNow: false,
          subtitle: (<>
            Book 2 of the
            {'\u0020'}
            <Text style={styles.italic}>Lifecast</Text>
            {'\u0020'}
            series{'\n'}
          </>),
        },
      ].map(({title,subtitle,buyNowUrl,imageUrl,outNow}) => (
        <View style={styles.column}>
          <View style={styles.bookCard}>
            <Image
              style={styles.bookImage}
              source={{uri:imageUrl}}
            />
            <Text style={styles.title}>
              {title}
            </Text>
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          </View>
          {
            outNow ?  (
              <>
                <Link
                  to='/books/'
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

              </>
            ) : (
              <Text style={styles.soon}>
                COMING SOON
              </Text>
            )
          }

        </View>
      ))
    }

  </View>
)

export default AllBooks;
