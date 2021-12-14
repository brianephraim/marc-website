(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "Oaqn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/PageLayout.js + 7 modules
var PageLayout = __webpack_require__("5zSb");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__("IIls");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./src/StyleSheet.js + 13 modules
var StyleSheet = __webpack_require__("D5zv");

// EXTERNAL MODULE: ./node_modules/react-native-media-query/index.web.js + 4 modules
var index_web = __webpack_require__("nBU6");

// EXTERNAL MODULE: ./src/Image.js
var Image = __webpack_require__("eHYQ");

// CONCATENATED MODULE: ./src/LifecastBookImage.js
var aspectRatio=1593/1179;var LifecastBookImage_LifecastBookImage=function LifecastBookImage(_ref){var style=_ref.style,width=_ref.width,dataSet=_ref.dataSet;return react_default.a.createElement(Image["a" /* default */],{style:[{width:width,height:width*aspectRatio},style],source:{uri:'/lifecast-book.png'},dataSet:dataSet});};/* harmony default export */ var src_LifecastBookImage = (LifecastBookImage_LifecastBookImage);
// CONCATENATED MODULE: ./src/LifecastDetails.js
var mediaStyles={columns:{marginTop:30,marginHorizontal:30,maxWidth:1000,flexDirection:'row','@media (max-width: 800px)':{flexDirection:'column-reverse',alignItems:'center'}},bookImage:{marginHorizontal:20,marginTop:20,'@media (max-width: 500px)':{display:'none'}},bookImageSmaller:{marginHorizontal:20,marginTop:20,display:'none','@media (max-width: 500px)':{marginHorizontal:0,display:'block'}},column:{marginHorizontal:40,'@media (max-width: 500px)':{marginHorizontal:15}}};var basicStyles=StyleSheet["b" /* default */].create({container:{alignItems:'center',alignSelf:'stretch',paddingBottom:30},h1:{fontFamily:'HeaderFont',fontSize:50,color:'$color5',textAlign:'center',marginBottom:6,marginTop:30},hr:{backgroundColor:'$color5',width:100,height:4},subtitle:{fontSize:25,marginTop:15,fontFamily:'BodyFont',color:'$color5'},genre:{marginTop:10,fontSize:18,fontFamily:'BodyFont',color:'$color5'},columnText:{flexShrink:1},column:{marginHorizontal:40},blurb:{fontFamily:'BodyFont',lineHeight:30,fontSize:22,color:'$color5',textAlign:'center',marginBottom:30},buyNowWrap:{marginBottom:15,textDecorationLine:'none',alignSelf:'center'},buyNow:{backgroundColor:'$color2',color:'$color6',fontFamily:'HeaderFont',fontSize:40,fontWeight:'bold',padding:20,textDecorationLine:'none',display:'flex',borderWidth:4,borderColor:'$color4'},italic:{fontStyle:'italic'}});var blurbs=["Welcome to LifeCast.\n\nThere is no government...\n\nThere is no law\u2026\n\nThere is no choice...\n\nThere is only the Idol.\n\nExtreme urban sprawl has resulted in one massive megalopolis simply called, \u201CThe City.\u201D The City\u2019s wealthiest families live in the Highland, above a freezing layer of indigo mist.\n\nNoble Valet Bear was born in the lowland, but now lives and works in the Highland as the sole servant of House Telladyne. Bear\u2019s best friend, Aleks, was born to House Yukita, but has resisted her Noble grooming since she was young.\n\nUntil now, Bear has kept Aleks at a distance for fear his love might put them both in danger. Little does he know that they are about to stumble upon deeply-hidden secrets of the Idol that will threaten both of their lives.\n\nIn the fight to save themselves, Bear and Aleks must join forces with dangerous allies, face off against a foe who wields unimaginable power, and make the impossible choice between desire and survival. "];var LifecastDetails_LifecastDetails=function LifecastDetails(){var _useMediaQuery=Object(index_web["a" /* useMediaQuery */])(mediaStyles),_useMediaQuery2=slicedToArray_default()(_useMediaQuery,2),styleIds=_useMediaQuery2[0],styles=_useMediaQuery2[1];return react_default.a.createElement(View["a" /* default */],{style:basicStyles.container},react_default.a.createElement(Text["a" /* default */],{style:basicStyles.h1},"LIFECAST"),react_default.a.createElement(View["a" /* default */],{style:basicStyles.hr}),react_default.a.createElement(Text["a" /* default */],{style:basicStyles.subtitle},"Book 1 of the"," ",react_default.a.createElement(Text["a" /* default */],{style:basicStyles.italic},"The Neurogem Saga")),react_default.a.createElement(View["a" /* default */],{style:styles.columns,dataSet:{media:styleIds.columns}},react_default.a.createElement(View["a" /* default */],{style:styles.column,dataSet:{media:styleIds.column}},react_default.a.createElement(src_LifecastBookImage,{style:basicStyles.bookImage,dataSet:{media:styleIds.bookImage},width:380}),react_default.a.createElement(src_LifecastBookImage,{style:styles.bookImageSmaller,dataSet:{media:styleIds.bookImageSmaller},width:180})),react_default.a.createElement(View["a" /* default */],{style:basicStyles.columnText},blurbs.map(function(text){return react_default.a.createElement(Text["a" /* default */],{style:basicStyles.blurb,key:text},text);}))));};/* harmony default export */ var src_LifecastDetails = (LifecastDetails_LifecastDetails);
// CONCATENATED MODULE: ./src/pages/lifecast.js
var lifecast_Lifecast=function Lifecast(){return react_default.a.createElement(PageLayout["a" /* default */],null,react_default.a.createElement(src_LifecastDetails,null));};/* harmony default export */ var lifecast = __webpack_exports__["default"] = (lifecast_Lifecast);

/***/ })

}]);
//# sourceMappingURL=22-735270909ba7ead2f35b.js.map