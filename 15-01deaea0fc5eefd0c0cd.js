(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15,20],{

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gHPf");
/* harmony default export */ __webpack_exports__["default"] = (_home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "gHPf":
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

// EXTERNAL MODULE: ./node_modules/react-native-markdown-display/src/index.js + 19 modules
var src = __webpack_require__("OpOx");

// EXTERNAL MODULE: ./node_modules/react-native-media-query/index.web.js + 4 modules
var index_web = __webpack_require__("nBU6");

// EXTERNAL MODULE: ./src/Image.js
var Image = __webpack_require__("eHYQ");

// CONCATENATED MODULE: ./src/LifecastProductImage.js
var aspectRatio=1660/1686;var LifecastProductImage_LifecastProductImage=function LifecastProductImage(_ref){var style=_ref.style,width=_ref.width,dataSet=_ref.dataSet;return react_default.a.createElement(Image["a" /* default */],{style:[{width:width,height:width*aspectRatio},style],source:{uri:'/lifecast-product.png'},dataSet:dataSet});};/* harmony default export */ var src_LifecastProductImage = (LifecastProductImage_LifecastProductImage);
// EXTERNAL MODULE: ./src/StyleSheet.js + 13 modules
var StyleSheet = __webpack_require__("D5zv");

// EXTERNAL MODULE: ./src/gatsby-link/index.js
var gatsby_link = __webpack_require__("lnzl");

// CONCATENATED MODULE: ./src/BookPromo.js
var mediaStyles={container:{flexDirection:'row',maxWidth:1000,alignItems:'center',marginVertical:80,marginHorizontal:30,'@media (max-width: 800px)':{flexDirection:'column-reverse'}},leftSide:{flexShrink:1,marginHorizontal:20,marginTop:50},bookImage:{marginHorizontal:20,marginTop:20,'@media (max-width: 500px)':{display:'none'}},bookImageSmaller:{marginHorizontal:20,marginTop:20,display:'none','@media (max-width: 500px)':{display:'block'}}};var basicStyles=StyleSheet["b" /* default */].create({h1:{fontFamily:'HeaderFont',fontSize:50,fontWeight:'bold',color:'$color5',textAlign:'center',marginBottom:20},bodyTextWrap:{marginBottom:30},learnMore:{backgroundColor:'$color2',color:'black',fontFamily:'HeaderFont',fontSize:24,fontWeight:'bold',padding:10,alignSelf:'center',textDecorationLine:'none'}});var textContent="*BRAVE NEW WORLD*"+" "+" meets *FEED*"+" "+" in this thrilling adventure that pits one man against a pleasure-obsessed society that threatens to take everything from him.\n";var markdownStyles=StyleSheet["b" /* default */].create({text:{fontFamily:'BodyFont',lineHeight:40,fontSize:25,color:'$color5',textAlign:'center',marginBottom:30},textgroup:{textAlign:'center'}});var BookPromo_BookPromo=function BookPromo(){var _useMediaQuery=Object(index_web["a" /* useMediaQuery */])(mediaStyles),_useMediaQuery2=slicedToArray_default()(_useMediaQuery,2),styleIds=_useMediaQuery2[0],styles=_useMediaQuery2[1];return react_default.a.createElement(View["a" /* default */],{style:styles.container,dataSet:{media:styleIds.container}},react_default.a.createElement(View["a" /* default */],{style:styles.leftSide,dataSet:{media:styleIds.leftSide}},react_default.a.createElement(Text["a" /* default */],{style:basicStyles.h1},"Welcome To Lifecast"),react_default.a.createElement(View["a" /* default */],{style:basicStyles.bodyTextWrap},react_default.a.createElement(src["a" /* default */],{style:markdownStyles},textContent)),react_default.a.createElement(gatsby_link["a" /* default */],{to:"/lifecast/",style:basicStyles.learnMore},"LEARN MORE")),react_default.a.createElement(src_LifecastProductImage,{style:styles.bookImage,width:380,dataSet:{media:styleIds.bookImage}}),react_default.a.createElement(src_LifecastProductImage,{style:styles.bookImageSmaller,dataSet:{media:styleIds.bookImageSmaller},width:280}));};/* harmony default export */ var src_BookPromo = (BookPromo_BookPromo);
// CONCATENATED MODULE: ./src/pages/home.js
var home_Home=function Home(){return react_default.a.createElement(PageLayout["a" /* default */],null,react_default.a.createElement(src_BookPromo,null));};/* harmony default export */ var home = __webpack_exports__["default"] = (home_Home);

/***/ })

}]);
//# sourceMappingURL=15-01deaea0fc5eefd0c0cd.js.map