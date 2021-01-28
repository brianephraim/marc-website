import React from 'react'
import { Text, View } from 'react-native'
import PageLayout from '../PageLayout';
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'
import MarcPortraitImage from '../MarcPortraitImage';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    maxWidth: 1000,
    // alignItems: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 30,
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
  bodyText: {
    fontFamily: 'BodyFont',
    fontSize: 18,
    // fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 16,
    marginTop: 30,
    maxWidth: 400,
    lineHeight:30,
  },

})

const About = () => (
  <PageLayout>
    <View style={styles.container}>
      <Text style={styles.h1}>About Marc</Text>
      <Text style={styles.bodyText}>
        {`MARC OPSAL is a native of Spokane, WA and graduated from Western Washington University. He currently lives in Pasadena, CA with his family.`}
      </Text>
      <MarcPortraitImage width={400} />
    </View>
  </PageLayout>

)

export default About;
