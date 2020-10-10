import EStyleSheet from 'react-native-extended-stylesheet';

// const fontFamilies = {
//   // mainFont: {
//   //   variationA: 'SFProDisplay-Regular',
//   //   variationB: 'SFProText-Regular',
//   // },
// };
/* eslint-disable import/no-mutable-exports */
const colors = {
  bg1: '#dddddd',
  // https://lz12v4f1p8c1cumxnbiqvm10-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/pink-green-white-color-scheme-2020.png
  color1: '#E3E7D3',
  color2: '#BDC2BF',
  color3: '#989C94',
  color4: '#25291C',
  color5: '#E6E49F',


};

const styleVariables = {
  // always call EStyleSheet.build() even if you don't use global variables!
  // $textColor: '#0275d8',
  ...Object.keys(colors).reduce((accum, colorKey) => {
    const colorVal = colors[colorKey];
    accum[`$${colorKey}`] = colorVal;
    return accum;
  }, {}),
  // ...Object.keys(fontFamilies).reduce((accum, fontFamilyKey) => {
  //   const fontFamily = fontFamilies[fontFamilyKey];
  //   Object.keys(fontFamily).forEach(fontTypeKey => {
  //     const fontFileName = fontFamily[fontTypeKey];
  //     accum[`$${fontFamilyKey}_${fontTypeKey}`] = fontFileName;
  //   });
  //   return accum;
  // }, {}),
};
EStyleSheet.build(styleVariables);

function styleify(someStyle) {
  const toReturn = EStyleSheet.create({
    someStyle,
  }).someStyle;
  return toReturn;
}

export { styleify };
console.log('EStyleSheet',EStyleSheet);
export default EStyleSheet;
