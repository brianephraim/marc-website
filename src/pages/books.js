import React from 'react'
import { Text, View } from 'react-native'
// import Link from '../gatsby-link';
import PageLayout from '../PageLayout';
// import BookPromo from '../BookPromo';
import StyleSheet from '../StyleSheet';
import AllBooks from '../AllBooks';


const Home = ({children}) => (
  <PageLayout>
    <AllBooks />
  </PageLayout>
)

export default Home;
