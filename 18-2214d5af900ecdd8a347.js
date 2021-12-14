(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "3XHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__("IIls");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./node_modules/react-native-media-query/index.web.js + 4 modules
var index_web = __webpack_require__("nBU6");

// EXTERNAL MODULE: ./src/PageLayout.js + 7 modules
var PageLayout = __webpack_require__("5zSb");

// EXTERNAL MODULE: ./src/StyleSheet.js + 13 modules
var StyleSheet = __webpack_require__("D5zv");

// EXTERNAL MODULE: ./src/gatsby-link/index.js
var gatsby_link = __webpack_require__("lnzl");

// EXTERNAL MODULE: ./src/Image.js
var Image = __webpack_require__("eHYQ");

// CONCATENATED MODULE: ./src/MarcPortraitImage.js
var aspectRatio=1786/1427;var MarcPortraitImage_MarcPortraitImage=function MarcPortraitImage(_ref){var style=_ref.style,width=_ref.width;return react_default.a.createElement(Image["a" /* default */],{style:[{width:width,height:width*aspectRatio},style],source:{uri:'/marc-portrait.jpg'}});};/* harmony default export */ var src_MarcPortraitImage = (MarcPortraitImage_MarcPortraitImage);
// EXTERNAL MODULE: ./node_modules/react-native-markdown-display/src/index.js + 19 modules
var src = __webpack_require__("OpOx");

// CONCATENATED MODULE: ./src/pages/about.js
var about_aspectRatio=1786/1427;var mediaStyles={marcImage:{'@media (max-width: 500px)':{display:'none'}},marcImageSmaller:{display:'none','@media (max-width: 500px)':{display:'block'}}};var markdownStyles=StyleSheet["b" /* default */].create({body:{fontFamily:'BodyFont',lineHeight:30,fontSize:21,color:'$color5',textAlign:'left',marginBottom:30},link:{color:'$color2',textDecorationLine:'none'}});var basicStyles=StyleSheet["b" /* default */].create({container:{maxWidth:1000,marginVertical:30,marginHorizontal:30,alignItems:'center'},h1:{fontFamily:'HeaderFont',fontSize:50,color:'$color5',textAlign:'center',marginBottom:6,marginTop:30},markdownWrap:{marginBottom:16,marginTop:30,maxWidth:400}});var markdownContent="MARC OPSAL was born and raised in the Inland Northwest. After graduating from Western Washington University, he moved to New York City to work in the book publishing industry. Eventually, he relocated to Pasadena, CA with his wife.\n\nMarc loves to hike with his family, bike around town, and create cocktails with whatever ingredients are available. For updates on Marc\u2019s writing, follow him on Instagram [@MarcOpsal](https://www.instagram.com/marcopsal/).";var about_About=function About(){var _useMediaQuery=Object(index_web["a" /* useMediaQuery */])(mediaStyles),_useMediaQuery2=slicedToArray_default()(_useMediaQuery,2),styleIds=_useMediaQuery2[0],styles=_useMediaQuery2[1];return react_default.a.createElement(PageLayout["a" /* default */],null,react_default.a.createElement(View["a" /* default */],{style:basicStyles.container},react_default.a.createElement(Text["a" /* default */],{style:basicStyles.h1},"About Marc"),react_default.a.createElement(View["a" /* default */],{style:basicStyles.markdownWrap},react_default.a.createElement(src["a" /* default */],{style:markdownStyles},markdownContent)),react_default.a.createElement(Image["a" /* default */],{style:[{width:400,height:400*about_aspectRatio},styles.marcImage],dataSet:{media:styleIds.marcImage},source:{uri:'/marc-portrait.jpg'}}),react_default.a.createElement(Image["a" /* default */],{style:[{width:300,height:300*about_aspectRatio},styles.marcImageSmaller],dataSet:{media:styleIds.marcImageSmaller},source:{uri:'/marc-portrait.jpg'}})));};/* harmony default export */ var about = __webpack_exports__["default"] = (about_About);

/***/ })

}]);
//# sourceMappingURL=18-2214d5af900ecdd8a347.js.map