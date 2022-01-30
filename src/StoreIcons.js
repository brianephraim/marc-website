import React from 'react'
import { Text, View } from 'react-native'
import Image from './Image';
import Link from './gatsby-link';

// const aspectRatio = 1378/2107;
const aspectRatio = 2107/1378;
/*
 */
const bookStores = [
  {
    name:'bn',
    url: 'https://www.barnesandnoble.com/w/lifecast-marc-opsal/1140897287?ean=9781735549514',
  },
  {
    name:'bd',
    url: 'https://www.bookdepository.com/Lifecast-Opsal-Marc-Opsal/9781735549514?ref=grid-view&qid=1643304780107&sr=1-1',
  },
  {
    name:'indigo',
    url: 'https://www.chapters.indigo.ca/en-ca/books/lifecast/9781735549507-item.html?ikwid=lifecast&ikwsec=Home&ikwidx=7#algoliaQueryId=e5186b4a5f1301f8c7f6cb0cdd1373e9',
  },
  {
    name:'kobo',
    url: 'https://www.kobo.com/us/en/ebook/lifecast',
  },
  {
    name:'amazon',
    url: 'https://www.amazon.com/dp/B09QH1VPRW?ref_=pe_3052080_276849420',
  },
  {
    name:'apple',
    url: 'http://books.apple.com/us/book/id1605067701',
  },
];

const LifecastCoverImage = ({style, width}) => {
  return (
    <View style={{
      flexDirection: 'row',
      marginTop: 40,
      flexWrap: 'wrap',
      alignItems:'center',
      justifyContent:'center',
    }}>
      {
        bookStores.map(({name,url}) => {
          return (
            <Link
              to={url}
              target="_blank"
              style={{}}
              key={name}
            >
              <Image
                style={[{width:55, height: 55, margin: 10,}]}
                source={{uri:`/store-icons/${name}.jpeg`}}
              />
            </Link>
          );
        })
      }

    </View>
  );
};

export default LifecastCoverImage;
