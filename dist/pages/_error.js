"use strict";var _interopRequireDefault=require("@babel/runtime-corejs2/helpers/interopRequireDefault");exports.__esModule=true;exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _head=_interopRequireDefault(require("../next-server/lib/head"));var statusCodes={400:'Bad Request',404:'This page could not be found',405:'Method Not Allowed',500:'Internal Server Error'};/**
 * `Error` component used for handling errors.
*/class Error extends _react.default.Component{static getInitialProps(_ref) {var { req, res, err } = _ref;var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;console.log(req.headers.host);return { statusCode, redirectUrl: `https://${req.headers.host}${res.req.originalUrl}?noapp=true`};}render(){var{statusCode, redirectUrl}=this.props;var title=this.props.title||statusCodes[statusCode]||'An unexpected error has occurred';setTimeout(function(){try{window.location = redirectUrl;}catch(e){}},2000); return _react.default.createElement("div",{style:styles.error},_react.default.createElement(_head.default,null,_react.default.createElement("title",null,statusCode,": ",title)),_react.default.createElement("div",null,statusCode?_react.default.createElement("h1",{style:styles.h1},statusCode):null,_react.default.createElement("div",{style:styles.desc},_react.default.createElement("h2",{style:styles.h2},title,"."))));}}exports.default=Error;Error.displayName='ErrorPage';var styles={error:{color:'#000',background:'#fff',fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:'100vh',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'},desc:{display:'inline-block',textAlign:'left',lineHeight:'49px',height:'49px',verticalAlign:'middle'},h1:{display:'inline-block',borderRight:'1px solid rgba(0, 0, 0,.3)',margin:0,marginRight:'20px',padding:'10px 23px 10px 0',fontSize:'24px',fontWeight:500,verticalAlign:'top'},h2:{fontSize:'14px',fontWeight:'normal',lineHeight:'inherit',margin:0,padding:0}}

