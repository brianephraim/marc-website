import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import styleResolver from 'react-native-web/dist/exports/StyleSheet/styleResolver'
import Link from '../gatsby-link';
import PageLayout from '../PageLayout';
import BookPromo from '../BookPromo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
  },
  link: {
    fontFamily: 'BodyFont',
  },
  bold: {
    fontWeight: 'bold',
  },
})


const LinkItem = ({to, children}) => {
  return (
    <Link
      to={to}
      style={[styles.link,styles.bold]}
      // className={styleResolver.resolve([styles.link,styles.bold]).className}
    >
      {children}
    </Link>
  );
}

const Home = ({children}) => (
  <PageLayout>
    <BookPromo />
  </PageLayout>
)

export default Home;
