import React, {Component} from 'react'
import { Text, View } from 'react-native'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import PageLayout from '../PageLayout';
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'

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
  h2: {
    fontFamily: 'BodyFont',
    fontSize: 27,
    fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 16,
    marginTop: 30,
    lineHeight:30,
  },
  h3: {
    fontFamily: 'BodyFont',
    fontSize: 22,
    // fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginBottom: 16,
    marginTop: 30,
    lineHeight:30,
  },
  emailStuff: {
    // flexDirection:'row',
    alignItems: 'flex-start',
    alignSelf: 'center',

  },
  emailMainRow: {
    flexDirection: 'row',
    // alignItem:'center',
    // justifyContent:'center',

  },
  borderRow: {
    borderWidth: 1,
    borderColor: '$color2',
    flexDirection: 'row',
    borderRadius: 5,
    paddingLeft: 20,
    alignItems: 'stretch',
    height: 41,
  },
  email: {
    fontFamily: 'BodyFont',
    fontSize: 25,
    // fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    marginRight: 20,
    // textDecorationLine: 'underline',
    borderBottomWidth: 1,
    borderBottomColor: '$color2',
    // backgroundColor:'green',
    alignSelf:'center',
    // height: 31,
    paddingBottom:3,
    // paddingTop:13,



    // lineHeight:30,
  },
  copied: {
    fontFamily: 'BodyFont',
    color: '$color2',
    marginLeft: 10,
    height: 40,
    lineHeight: 40,
  },
  copyButtonText: {
    cursor: 'pointer',
    fontFamily: 'BodyFont',
    color: '$color6',
    backgroundColor: '$color2',
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 40,
    fontSize: 15,
    lineHeight: 40,
  },

  formContainer: {
    backgroundColor:'white',
    padding: 30,
    borderRadius: 5,
    margin: 0,
  },
  hidden: {
    opacity: 0,
  },


})

const email = 'goldshifpublishing@gmail.com'
// const Contact = () => null;
class Contact extends Component{

  // state = {};
  constructor(){
    super();
  }
  // asdf = () => {};
  // state = {};
  render(){
    return null;
  }
  // }
//   flickerCopiedMessage = () => {
//     this.setState({copied: true});
//     this.timeout = setTimeout(() => this.setState({copied: false}), 2000);
//   };
//   componentWillUnmount(){
//     !!this.timeout && clearTimeout(this.timeout);
//   }
//   render(){
//     return (
//       <PageLayout>
//         <View style={styles.container}>
//           <Text style={styles.h1}>Contact</Text>
//           <Text style={styles.h2}>Have a professional inquiry?</Text>
//           <View style={styles.emailStuff}>
//             <Text style={styles.h3}>Email to get in touch:</Text>
//             <View style={styles.emailMainRow}>
//               <View style={styles.borderRow}>
//                 <Text
//                   style={styles.email}
//                   accessibilityRole='link'
//                   href={`mailto:${email}`}
//                   target="_blank"
//                 >
//                   {email}
//                 </Text>
//                 <CopyToClipboard text={email}
//                   onCopy={this.flickerCopiedMessage}
//                 >
//                   <Text style={styles.copyButtonText}>Copy to clipboard</Text>
//                 </CopyToClipboard>
//               </View>
//               <Text style={[styles.copied,!this.state.copied && styles.hidden]}>copied!</Text>
//             </View>
//             <Text style={styles.h3}>or use this form:</Text>
//           </View>
//
//           <View style={styles.formContainer}>
//             <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSRfsaTxMQYdxBk5bot0yYYdy3GSIcIZj3wEpX1JdyGDPJEg/viewform?embedded=true" width="640" height="700" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
//           </View>
//         </View>
//       </PageLayout>
//     );
//   }

}

export default Contact;
