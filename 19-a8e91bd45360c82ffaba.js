(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "ZsSW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/PageLayout.js + 7 modules
var PageLayout = __webpack_require__("5zSb");

// EXTERNAL MODULE: ./src/StyleSheet.js + 13 modules
var StyleSheet = __webpack_require__("D5zv");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__("IIls");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./src/Image.js
var Image = __webpack_require__("eHYQ");

// EXTERNAL MODULE: ./src/gatsby-link/index.js
var gatsby_link = __webpack_require__("lnzl");

// CONCATENATED MODULE: ./src/LifecastCoverImage.js
var aspectRatio=2107/1378;var LifecastCoverImage_LifecastCoverImage=function LifecastCoverImage(_ref){var style=_ref.style,width=_ref.width;return react_default.a.createElement(Image["a" /* default */],{style:[{width:width,height:width*aspectRatio},style],source:{uri:'/lifecast-cover.png'}});};/* harmony default export */ var src_LifecastCoverImage = (LifecastCoverImage_LifecastCoverImage);
// CONCATENATED MODULE: ./src/AllBooks.js
var styles=StyleSheet["b" /* default */].create({container:{flexDirection:'row',maxWidth:1000,alignItems:'flex-start',marginVertical:30,marginHorizontal:30},column:{margin:10},title:{fontFamily:'HeaderFont',fontSize:25,fontWeight:'bold',color:'$color5',textAlign:'center',paddingBottom:10,marginTop:20,marginBottom:16,borderBottomWidth:1,borderBottomColor:'$color5'},subtitle:{fontFamily:'BodyFont',fontSize:16,color:'$color5',textAlign:'center',marginBottom:15},italic:{fontStyle:'italic'},bookImage:{marginHorizontal:20,marginTop:20},buyNow:{backgroundColor:'$color2',color:'black',fontFamily:'HeaderFont',fontSize:29,fontWeight:'bold',padding:10,alignSelf:'center',textDecorationLine:'none',marginBottom:15},learnMore:{backgroundColor:'$color2',color:'$color4',fontFamily:'HeaderFont',fontSize:18,padding:8,alignSelf:'center',textDecorationLine:'none',marginBottom:15},soon:{color:'$color1',fontFamily:'HeaderFont',fontSize:20,fontWeight:'bold',padding:10,alignSelf:'center',textDecorationLine:'none',marginBottom:15}});var AllBooks_AllBooks=function AllBooks(){return react_default.a.createElement(View["a" /* default */],{style:styles.container},[{title:'Lifecast',imageUrl:'/book.png',outNow:true,subtitle:react_default.a.createElement(react_default.a.Fragment,null,"Book 1 of"," ",react_default.a.createElement(Text["a" /* default */],{style:styles.italic},"The Neurogem Saga"))}].map(function(_ref){var title=_ref.title,subtitle=_ref.subtitle,buyNowUrl=_ref.buyNowUrl,imageUrl=_ref.imageUrl,outNow=_ref.outNow;return react_default.a.createElement(View["a" /* default */],{style:styles.column},react_default.a.createElement(src_LifecastCoverImage,{style:styles.bookImage,width:180}),react_default.a.createElement(Text["a" /* default */],{style:styles.title},title),react_default.a.createElement(Text["a" /* default */],{style:styles.subtitle},subtitle),outNow?react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(gatsby_link["a" /* default */],{to:"/lifecast/",style:styles.learnMore},"LEARN MORE")):react_default.a.createElement(Text["a" /* default */],{style:styles.soon},"COMING SOON"));}));};/* harmony default export */ var src_AllBooks = (AllBooks_AllBooks);
// CONCATENATED MODULE: ./src/pages/books.js
var books_Books=function Books(_ref){var children=_ref.children;return react_default.a.createElement(PageLayout["a" /* default */],null,react_default.a.createElement(src_AllBooks,null));};/* harmony default export */ var books = __webpack_exports__["default"] = (books_Books);

/***/ })

}]);
//# sourceMappingURL=19-a8e91bd45360c82ffaba.js.map