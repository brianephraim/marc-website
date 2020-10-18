import React from 'react'
import { Text, View } from 'react-native'
import StyleSheet from './StyleSheet'
import HeaderBar from './HeaderBar';




const styles = StyleSheet.create({
  container: {
    backgroundColor: '$color6',
    // backgroundColor: 'green',
    flex: 1,
    justifyContent: 'space-between',
    minWidth: 850,
  },
  body: {
    alignItems: 'center',
  },
  footer: {
    backgroundColor:'$color4',
    height:100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 3,
    borderTopColor: '$color3'
  },
  copyright: {
    margin: 15,
    color: '$color5',
    fontFamily: 'BodyFont',
    fontSize: 11,
  },

})


const PageLayout = ({children}) => (
  <View style={styles.container}>
    <View style={styles.notFooter}>
      <HeaderBar />
      <View style={styles.body}>
        {children}
      </View>
    </View>
    <View style={styles.footer}>
      <Text style={styles.copyright}>©2020 Marc Opsal</Text>
    </View>
  </View>
)

export default PageLayout;
