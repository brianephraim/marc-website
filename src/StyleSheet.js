import EStyleSheet from 'react-native-extended-stylesheet';

// const fontFamilies = {
//   // mainFont: {
//   //   variationA: 'SFProDisplay-Regular',
//   //   variationB: 'SFProText-Regular',
//   // },
// };
/* eslint-disable import/no-mutable-exports */
const colors = {
  color1: '#FDDBC9',// peach
  color2: '#50C7E6',// aqua
  color3: '#CC7DB3',// purple
  color4: '#1A184F',// dark blue
  color5: '#FFE58D',// yellow
  color6: '#0D1315',// black


};

export {colors}

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
