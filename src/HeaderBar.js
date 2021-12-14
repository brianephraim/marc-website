import React from 'react'
import { View, Text } from 'react-native'
import { useMediaQuery } from 'react-native-media-query';
import Image from './Image';
import Link from './gatsby-link'
import StyleSheet,{colors} from './StyleSheet';
import SocialButtons from './SocialButtons';

const logoHeight = 50;
const logoHeightSmaller = 30;

const mediaStyles = {

  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomWidth: 3,
    borderBottomColor: colors.color3,
    backgroundColor: colors.color4,
    '@media (max-width: 500px)': {
      flexWrap: 'wrap',
    },
  },
  navMain: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    flexShrink: 1,
    marginLeft:30,
  },
  linkCollection: {
    flexDirection: 'row',

  },
  logoImg: {
    marginRight:30,

    width: (1239/206) * logoHeight,
    height: logoHeight,
    '@media (max-width: 800px)': {
      marginTop:8,
      marginBottom:3,
      width: (1239/206) * logoHeightSmaller,
      height: logoHeightSmaller,
    },

  },
  socialButtons: {
    marginBottom:5,
    marginLeft:20,
    '@media (max-width: 800px)': {
    },
  }
}

const linkStyles = StyleSheet.create({
  link: {
    color: colors.color2,
    fontFamily: 'BodyFont',
    marginRight: 20,
    marginBottom:8,
    fontSize: 18,
    textDecorationLine: 'none',
  },
  activeLink: {
    color: colors.color1,
  },
});

const LinkItem = ({to, children}) => {
  return (
    <Link
      component={Text}
      style={linkStyles.link}
      activeStyle={linkStyles.activeLink}
      to={to}
    >
      {children}
    </Link>
  );
}

const HeaderBar = () => {
  const [styleIds, styles] = useMediaQuery(mediaStyles);
  return (
    <View style={styles.container} dataSet={{ media: styleIds.container }}>
      <View style={styles.navMain} dataSet={{ media: styleIds.navMain }}>
        <Image
          style={styles.logoImg}
          dataSet={{ media: styleIds.logoImg }}
          source={{uri:'/marc-logo.png'}}
        />
        <View style={styles.linkCollection} dataSet={{ media: styleIds.linkCollection }}>
          <LinkItem to="/">Home</LinkItem>
          {/* <LinkItem to="/books">Books</LinkItem> */}
          <LinkItem to="/lifecast">LIFECAST</LinkItem>
          {/* <LinkItem to="/newsletter">Newsletter</LinkItem> */}
          {/* <LinkItem to="/press">Press</LinkItem> */}
          <LinkItem to="/about">About Marc</LinkItem>
          {/* <LinkItem to="/blog">Blog</LinkItem> */}
          {/* <LinkItem to="/contact">Contact</LinkItem> */}
          {/* <LinkItem to="/merch">Merch</LinkItem> */}
        </View>
      </View>
      <SocialButtons
        style={styles.socialButtons}
        dataSet={{ media: styleIds.socialButtons }}
      />
    </View>
  );
}

export default HeaderBar;
