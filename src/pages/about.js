import React from 'react'
import { Text, View } from 'react-native'
import PageLayout from '../PageLayout';
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'
import MarcPortraitImage from '../MarcPortraitImage';

import Markdown from 'react-native-markdown-display';

/* eslint-disable */
const markdownStyles = StyleSheet.create({
  // text: {
  //   fontFamily: 'BodyFont',
  //   lineHeight:40,
  //   fontSize: 25,
  //   // color: '$color5',
  //   textAlign:'center',
  //   marginBottom: 30,
  // },
  // textgroup: {textAlign:'center'},
  body: {
    fontFamily: 'BodyFont',
    lineHeight:30,
    fontSize: 21,
    color: '$color5',
    textAlign:'left',
    marginBottom: 30,
  },
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
  link : {
    color: '$color2',
    textDecorationLine: 'none',
  },
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
  markdownWrap: {
    marginBottom: 16,
    marginTop: 30,
    maxWidth: 400,
  },

})
const markdownContent = `MARC OPSAL was born and raised in the Pacific Northwest. After graduating from Western Washington University, he moved to New York City to work in the book publishing industry. Eventually, he relocated to Pasadena, CA with his wife.

Marc loves to hike with his family, bike around town, and create cocktails with whatever ingredients are available. For updates on Marc’s writing, follow him on Twitter [@MarcOpsal](https://www.twitter.com).`

const About = () => (
  <PageLayout>
    <View style={styles.container}>
      <Text style={styles.h1}>About Marc</Text>
      <View style={styles.markdownWrap}>
        <Markdown style={markdownStyles}>
          {markdownContent}
        </Markdown>
      </View>
      <MarcPortraitImage width={400} />
    </View>
  </PageLayout>

)

export default About;
