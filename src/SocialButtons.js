import React from 'react'
import { View } from 'react-native'
import Image from './Image';
import Link from './gatsby-link'
import StyleSheet from './StyleSheet';
import FacebookIcon from './svgs/facebook';
import TumblrIcon from './svgs/tumblr';
import TwitterIcon from './svgs/twitter';
import InstagramIcon from './svgs/instagram';
import {colors} from './StyleSheet';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  iconItem: {
    marginHorizontal: 10,
  },
})

const size = '20';
const config = [
  {
    Icon: FacebookIcon,
    props: {
      height: size,
      width: size,
      fill: colors.color2,
    },
    url: 'https://www.facebook.com/welcometolifecast',
  },
  {
    Icon: TwitterIcon,
    props: {
      height: size,
      width: size,
      fill: colors.color2,
    },
    url: 'https://twitter.com/marcopsal'
  },
  {
    Icon: InstagramIcon,
    props: {
      height: size,
      width: size,
      fill: colors.color2,
    },
    url: 'https://www.instagram.com/marcopsal'
  },
  {
    Icon: TumblrIcon,
    props: {
      height: size,
      width: size,
      fill: colors.color2,
    },
    url: 'https://marcopsal.tumblr.com/'
  },
];

const socialIconsComponents = config.map(({Icon,props,url}) => {
  return {
    key: url,
    Comp: ({style,...rest}) => {
      return (
        <View style={style}>
          <a href={url} target="_blank" style={{display:'block'}}>
            <Icon
              {...props}
              {...rest}
            />
          </a>
        </View>
      );
    },
  }
});
const [Facebook,Twitter,Instagram,Tumblr] = socialIconsComponents;
export {Facebook,Twitter,Instagram,Tumblr};


const SocialButtons = ({style}) => (
  <View style={[styles.container,style]}>
    {
      socialIconsComponents.map(({Comp,key}) => (
        <Comp
          key={key}
          style={styles.iconItem}
        />
      ))
    }
  </View>
)

export default SocialButtons;
