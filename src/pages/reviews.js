import React from 'react'
import { Text, View } from 'react-native'
import { useMediaQuery } from 'react-native-media-query';
import PageLayout from '../PageLayout';
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'
import MarcPortraitImage from '../MarcPortraitImage';

import Image from '../Image';
import Markdown from 'react-native-markdown-display';


const aspectRatio = 1786/1427;


const mediaStyles = {

  marcImage: {
    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
  marcImageSmaller: {

    display: 'none',
    '@media (max-width: 500px)': {
      display: 'block',
    },
  },
}
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
    // marginBottom: 30,
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

const basicStyles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    maxWidth: 1000,
    // alignItems: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 30,
    alignItems: 'center',
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
    fontSize: 25,
    // fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 6,
    marginTop: 30,
  },
  p: {
    fontFamily: 'BodyFont',
    lineHeight:30,
    fontSize: 21,
    color: '$color5',
    textAlign: 'center',
    marginBottom:20,

    // marginBottom: 30,
  },
  markdownWrap: {
    marginBottom: 16,
    marginTop: 30,
    maxWidth: 400,
  },
  review: {
    borderWidth: 2,
    borderColor: '$color5',
    marginBottom: 50,
    alignSelf: 'stretch',
    padding: 30,    
  },

})
const markdownContent = `.MARC OPSAL was born and raised in the Inland Northwest. After graduating from Western Washington University, he moved to New York City to work in the book publishing industry. Eventually, he relocated to Pasadena, CA with his wife.

Marc loves to hike with his family, bike around town, and create cocktails with whatever ingredients are available.

For updates on Marc’s writing, be sure to [subscribe\u00a0to\u00a0his\u00a0newsletter](/newsletter) and follow [@MarcOpsal](https://www.instagram.com/marcopsal/) on Instagram.`;
  
  
const reviewData = [
  {
    name:`Kirkus Starred Review`,
    content:`A clever and cutting fantasy that takes modern society to task for its corruption.`,
    url:`https://www.kirkusreviews.com/book-reviews/marc-opsal/lifecast-the-neurogem-saga/`,
  },
  {
    name:`Midwest Book Review`,
    content:`Having an immense attraction for readers with an interest in dystopian themed novels, "Lifecast" by author Marc Opsal is a simply compelling page turner of a read from cover to cover. Original, entertaining, populated with memorable characters and more plot twists than a carnival roller coaster, "Lifecast" is a deftly crafted novel -- the kind from which blockbuster movies are made!"`,
    url:`http://www.midwestbookreview.com/sbw/may_22.htm#generalfiction`,
  },
  {
    name:`Words and Other Malarky`,
    content:`Lifecast is a futuristic dystopian with such captivating and immersive worldbuilding I would often forget I was reading. Yeah, you heard that right.`,
    url:`https://wordsandothermalarky.com/book-review-lifecast-by-marc-opsal/`,
  },
  {
    name:`Lauren Lee White, Contributor, VICE Magazine and The Guardian`,
    content:`Opsal creates a hellscape of class warfare, in which the internet of things has become the internet of people, and no one's soul is safe from getting hacked. LifeCast warns us of the brutal, often grotesque results of massive wealth inequality, and how it can render all of us something less than human. But there's no cynicism here; throughout the story, Opsal weaves evidence of our indestructible will to find humor, to be alive, and to find love in the darkness.`,
    url:null,
  },
  {
    name: 'Breakeven Books',
    youtube: 'https://www.youtube.com/embed/w9GU9UP-aYw?start=411',
    url: 'https://www.youtube.com/watch?v=w9GU9UP-aYw&t=411',
  },
];
  // <iframe width="560" height="315" src="https://www.youtube.com/embed/w9GU9UP-aYw?start=411" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const Reviews = () => {
  const [styleIds, styles] = useMediaQuery(mediaStyles);
  return (
    <PageLayout>
      <View style={basicStyles.container}>
        <Text style={basicStyles.h1}>Reviews</Text>
        {
          reviewData.map(({name,content,url,youtube}) => {
            return (
              <View style={basicStyles.review}>
                {
                  youtube && (
                    <iframe
                      style={{alignSelf:'center',maxWidth:'100%',marginBottom:30,}}
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/w9GU9UP-aYw?start=411"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                }
                {
                  content && (
                    <Text style={basicStyles.p}>
                      {`"${content}"`}
                    </Text>
                  )
                }
                {
                  !!url && (
                    <Link
                      to={url}
                      target="_blank"
                      style={{textAlign:'center'}}
                    >
                      <Text style={[basicStyles.h2,{'text-decoration':'underline'}]}>
                        {`- ${name}`}
                      </Text>
                    </Link>
                  )
                }
                {!url && (<Link
                  to={url}
                  target="_blank"
                  style={{textAlign:'center'}}
                >
                  <Text style={basicStyles.h2}>
                    {`- ${name}`}
                  </Text>
                </Link>)}
                
              </View>
            );
          })
        }
        
      </View>
    </PageLayout>

  );
}

export default Reviews;
