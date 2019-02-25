(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/boot-server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/Globals.ts":
/*!******************************!*\
  !*** ./ClientApp/Globals.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nserializejson */ "./node_modules/nserializejson/dist/cjs/index.js");
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nserializejson__WEBPACK_IMPORTED_MODULE_0__);
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};/**
 * Contains global isomorphic session.
 */var Globals=/** @class */function(){function Globals(){}Globals.reset=function(){this.isInitialized=false;this.data={};};Globals.init=function(data){if(this.isInitialized){throw Error("Globals is already initialized.");}this.data=data||{public:{},private:{}};this.isInitialized=true;// Use dot notation in name of the form inputs.
nserializejson__WEBPACK_IMPORTED_MODULE_0__["NSerializeJson"].options.useDotSeparatorInPath=true;};Globals.throwIfNotInitialized=function(){if(!this.isInitialized)throw Error("Globals is not initialized. You have to call Session.init before.");};Globals.getData=function(){this.throwIfNotInitialized();return this.data;};Globals.setData=function(data){this.throwIfNotInitialized();var oldData=this.data;this.data=__assign({},oldData,data);};Object.defineProperty(Globals,"serviceUser",{get:function(){return this.getData().public.serviceUser;},set:function(serviceUser){this.setData({public:{serviceUser:serviceUser}});},enumerable:true,configurable:true});Object.defineProperty(Globals,"isAuthenticated",{get:function(){return this.serviceUser!=null;},enumerable:true,configurable:true});Globals.isInitialized=false;Globals.data={};return Globals;}();/* harmony default export */ __webpack_exports__["default"] = (Globals);

/***/ }),

/***/ "./ClientApp/Ui.ts":
/*!*************************!*\
  !*** ./ClientApp/Ui.ts ***!
  \*************************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
var Ui=/** @class */function(){function Ui(){}Ui.showErrors=function(){var messages=[];for(var _i=0;_i<arguments.length;_i++){messages[_i]=arguments[_i];}messages.forEach(function(x){if(!Array.isArray(x)){react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(x);}else{x.forEach(function(y){return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(y);});}});};Ui.showInfo=function(message){react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].info(message);};return Ui;}();

/***/ }),

/***/ "./ClientApp/boot-server.tsx":
/*!***********************************!*\
  !*** ./ClientApp/boot-server.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aspnet-prerendering */ "./node_modules/aspnet-prerendering/index.js");
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./ClientApp/routes.tsx");
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configureStore */ "./ClientApp/configureStore.ts");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_11__);
var renderHelmet=function(){var helmetData=react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"].renderStatic();var helmetStrings="";for(var key in helmetData){if(helmetData.hasOwnProperty(key)){helmetStrings+=helmetData[key].toString();}}return helmetStrings;};var createGlobals=function(nodeSession,initialReduxState,helmetStrings){return{completedTasks:domain_wait__WEBPACK_IMPORTED_MODULE_11__["completedTasks"],nodeSession:nodeSession,initialReduxState:initialReduxState,helmetStrings:helmetStrings};};/* harmony default export */ __webpack_exports__["default"] = (Object(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__["createServerRenderer"])(function(params){_Globals__WEBPACK_IMPORTED_MODULE_10__["default"].reset();_Globals__WEBPACK_IMPORTED_MODULE_10__["default"].init(params.data);return new Promise(function(resolve,reject){// Prepare Redux store with in-memory history, and dispatch a navigation event.
// corresponding to the incoming URL.
var basename=params.baseUrl.substring(0,params.baseUrl.length-1);// Remove trailing slash.
var urlAfterBasename=params.url.substring(basename.length);var store=Object(_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(history__WEBPACK_IMPORTED_MODULE_5__["createMemoryHistory"])());store.dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__["replace"])(urlAfterBasename));// Prepare an instance of the application and perform an inital render that will
// cause any async tasks (e.g., data access) to begin.
var routerContext={};var app=react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],{store:store},react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"],{basename:basename,context:routerContext,location:params.location.path,children:_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]}));var renderApp=function(){return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(app);};renderApp();// If there's a redirection, just send this information back to the host application.
if(routerContext.url){resolve({redirectUrl:routerContext.url,globals:createGlobals(params.data,store.getState(),renderHelmet())});return;}// Once any async tasks are done, we can perform the final render.
// We also send the redux store state, so the client can continue execution where the server left off.
params.domainTasks.then(function(){resolve({html:renderApp(),globals:createGlobals(params.data,store.getState(),renderHelmet())});},reject);// Also propagate any errors back into the host application.
});}));

/***/ }),

/***/ "./ClientApp/components/person/PersonEditor.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/person/PersonEditor.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var PersonEditor=/** @class */function(_super){__extends(PersonEditor,_super);function PersonEditor(props){return _super.call(this,props)||this;}PersonEditor.prototype.emptyForm=function(){if(this.elForm){this.elForm.emptyForm();}};PersonEditor.prototype.componentDidMount=function(){};PersonEditor.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"],{enableReinitialize:true,initialValues:{firstName:this.props.data.firstName||'',lastName:this.props.data.lastName||''},onSubmit:function(values,_a){var setSubmitting=_a.setSubmitting;}},function(_a){var values=_a.values,errors=_a.errors,touched=_a.touched,handleChange=_a.handleChange,handleBlur=_a.handleBlur,handleSubmit=_a.handleSubmit,isSubmitting=_a.isSubmitting;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__["Form"],{className:"form",ref:function(x){return _this.elForm=x;}},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"hidden",name:"id",defaultValue:(_this.props.data.id||0).toString()}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label",{className:"control-label required",htmlFor:"person__firstName"},"First name"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"text",className:"form-control",id:"person__firstName",name:"firstName","data-value-type":"string","data-val-required":"true","data-msg-required":"First name is required.",value:values.firstName,onChange:handleChange,onBlur:handleBlur})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label",{className:"control-label required",htmlFor:"person__lastName"},"Last name"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"text",className:"form-control",id:"person__lastName",name:"lastName","data-value-type":"string","data-val-required":"true","data-msg-required":"Last name is required.",value:values.lastName,onChange:handleChange,onBlur:handleBlur})));});};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a],PersonEditor.prototype,"emptyForm",null);return PersonEditor;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (PersonEditor);

/***/ }),

/***/ "./ClientApp/components/shared/AppComponent.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/shared/AppComponent.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};/**
 * This component contains helpful method which
 * allows you to make "force update" of the stuck elements.
 */var AppComponent=/** @class */function(_super){__extends(AppComponent,_super);function AppComponent(props){var _this=_super.call(this,props)||this;/**
         * Place it into the "key" attribute of an element.
         */_this.renderKey=0;return _this;}/**
     * Call this if component state is stuck.
     * But you should set the renderKey to the element's attribute.
     */AppComponent.prototype.forceUpdate=function(){this.renderKey=Math.random();};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a],AppComponent.prototype,"forceUpdate",null);return AppComponent;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

/***/ }),

/***/ "./ClientApp/components/shared/AppRoute.tsx":
/*!**************************************************!*\
  !*** ./ClientApp/components/shared/AppRoute.tsx ***!
  \**************************************************/
/*! exports provided: AppRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoute", function() { return AppRoute; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)if(e.indexOf(p[i])<0)t[p[i]]=s[p[i]];return t;};var AppRoute=function(_a){var Component=_a.component,Layout=_a.layout,Path=_a.path,rest=__rest(_a,["component","layout","path"]);var isLoginPath=Path==="/login";if(!_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated&&!isLoginPath){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"],{to:"/login"});}if(_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated&&isLoginPath){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"],{to:"/"});}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Route"],__assign({},rest,{render:function(props){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Layout,null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component,__assign({},props)));}}));};

/***/ }),

/***/ "./ClientApp/components/shared/Footer.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Footer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Footer=/** @class */function(_super){__extends(Footer,_super);function Footer(props){return _super.call(this,props)||this;}Footer.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer",{className:"footer text-center"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,"View on ",react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"https://github.com/NickMaev/react-core-boilerplate"},"GitHub")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,"Copyright (c) 2018 Nikolay Maev"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"https://en.wikipedia.org/wiki/MIT_License"},"MIT License")));};return Footer;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./ClientApp/components/shared/Form.tsx":
/*!**********************************************!*\
  !*** ./ClientApp/components/shared/Form.tsx ***!
  \**********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nserializejson */ "./node_modules/nserializejson/dist/cjs/index.js");
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nserializejson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nval-tippy */ "./node_modules/nval-tippy/dist/cjs/index.js");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nval_tippy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_4__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var Form=/** @class */function(_super){__extends(Form,_super);function Form(props){return _super.call(this,props)||this;}Form.prototype.isValid=function(){return this.validator.isValid();};Form.prototype.emptyForm=function(){Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["emptyForm"])(this.elForm);};Form.prototype.getData=function(){return nserializejson__WEBPACK_IMPORTED_MODULE_1__["NSerializeJson"].serializeForm(this.elForm);};Form.prototype.componentDidMount=function(){this.validator=new nval_tippy__WEBPACK_IMPORTED_MODULE_3__["NValTippy"](this.elForm);};Form.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form",__assign({},this.props,{ref:function(x){return _this.elForm=x;}}),this.props.children);};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"isValid",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"emptyForm",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"getData",null);return Form;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/Loader.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Loader.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/loader.scss */ "./ClientApp/styles/loader.scss");
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppComponent */ "./ClientApp/components/shared/AppComponent.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Loader=/** @class */function(_super){__extends(Loader,_super);function Loader(props){return _super.call(this,props)||this;}Loader.prototype.render=function(){var css={"display":"none"};if(!Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isNode"])()){css={"display":this.props.show?"block":"none"};}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{key:this.renderKey,className:"loader-bg",style:css},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle1 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle2 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle3 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle4 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle5 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle6 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle7 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle8 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle9 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle10 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle11 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle12 sk-child"})));};return Loader;}(_Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./ClientApp/components/shared/ModalComponent.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/components/shared/ModalComponent.tsx ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var ModalComponent=/** @class */function(_super){__extends(ModalComponent,_super);function ModalComponent(props){return _super.call(this,props)||this;}ModalComponent.prototype.show=function(){this.modalPlugin.show();};ModalComponent.prototype.hide=function(){this.modalPlugin.hide();};ModalComponent.prototype.componentDidMount=function(){var _this=this;this.modalPlugin=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__["Modal"](this.elModal);if(this.props.onShow){this.elModal.addEventListener("show.bs.modal",function(){return _this.props.onShow();});}if(this.props.onHide){this.elModal.addEventListener("hide.bs.modal",function(){return _this.props.onHide();});}};ModalComponent.prototype.componentWillUnmount=function(){this.modalPlugin.hide();};ModalComponent.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal fade",tabIndex:-1,role:"dialog",ref:function(x){return _this.elModal=x;}},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-dialog",role:"document"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-content"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-header"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{"aria-hidden":"true"},"\u00D7")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4",{className:"modal-title"},this.props.title)),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-body"},this.props.children),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-footer"},this.props.buttons))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],ModalComponent.prototype,"show",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],ModalComponent.prototype,"hide",null);return ModalComponent;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/PagingBar.tsx":
/*!***************************************************!*\
  !*** ./ClientApp/components/shared/PagingBar.tsx ***!
  \***************************************************/
/*! exports provided: PagingBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingBar", function() { return PagingBar; });
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/index.js");
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_paginating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};/* Below code of the 'Pagination' component was taken
from the https://github.com/ChoTotOSS/react-paginating
and remaked for the Bootstrap style. */var PagingBar=/** @class */function(_super){__extends(PagingBar,_super);function PagingBar(props){return _super.call(this,props)||this;}PagingBar.prototype.setFirstPage=function(){this.elFirstPageBtn.click();};PagingBar.prototype.setLastPage=function(){this.elLastPageBtn.click();};PagingBar.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_paginating__WEBPACK_IMPORTED_MODULE_0___default.a,{total:this.props.totalResults,limit:this.props.limitPerPage,currentPage:this.props.currentPage},function(_a){var pages=_a.pages,currentPage=_a.currentPage,hasNextPage=_a.hasNextPage,hasPreviousPage=_a.hasPreviousPage,previousPage=_a.previousPage,nextPage=_a.nextPage,totalPages=_a.totalPages,getPageItemProps=_a.getPageItemProps;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul",{className:"pagination"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:1,onPageChange:_this.props.onChangePage}),{ref:function(x){return _this.elFirstPageBtn=x;}}),"first")),hasPreviousPage&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:previousPage,onPageChange:_this.props.onChangePage})),'<')),pages.map(function(page){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",{key:page,className:page===currentPage?'active':''},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:page,onPageChange:_this.props.onChangePage})),page));}),hasNextPage&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:nextPage,onPageChange:_this.props.onChangePage})),'>')),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:totalPages,onPageChange:_this.props.onChangePage}),{ref:function(x){return _this.elLastPageBtn=x;}}),"last")));});};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],PagingBar.prototype,"setFirstPage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],PagingBar.prototype,"setLastPage",null);return PagingBar;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/TopMenu.tsx":
/*!*************************************************!*\
  !*** ./ClientApp/components/shared/TopMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_6__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var TopMenu=/** @class */function(_super){__extends(TopMenu,_super);function TopMenu(props){var _this=_super.call(this,props)||this;_this.state={logoutAction:false};return _this;}TopMenu.prototype.onClickSignOut=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:e.preventDefault();return[4/*yield*/,_Services_AccountService__WEBPACK_IMPORTED_MODULE_4__["default"].logout()];case 1:_a.sent();this.setState({logoutAction:true});return[2/*return*/];}});});};TopMenu.prototype.componentDidMount=function(){var dropdown=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__["Dropdown"](this.elDropdown);var collapse=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__["Collapse"](this.elCollapseButton);};TopMenu.prototype.componentDidUpdate=function(){};TopMenu.prototype.render=function(){var _this=this;if(this.state.logoutAction)return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"],{to:"/login"});return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"navbar navbar-default"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"container-fluid"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"navbar-header"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button",{ref:function(x){return _this.elCollapseButton=x;},type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"sr-only"},"Toggle navigation"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{className:"navbar-brand",href:"#"},"RCB")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{id:"navbar",className:"navbar-collapse collapse nav navbar-nav navbar-right"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul",{className:"nav navbar-nav"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/',activeClassName:"active"},"Home")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/example',activeClassName:"active"},"Example")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"#",ref:function(x){return _this.elDropdown=x;},className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].serviceUser.login,"\u00A0",react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"caret"})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul",{className:"dropdown-menu"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"#",onClick:this.onClickSignOut},"Sign out"))))))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_6___default.a],TopMenu.prototype,"onClickSignOut",null);return TopMenu;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TopMenu));

/***/ }),

/***/ "./ClientApp/configureStore.ts":
/*!*************************************!*\
  !*** ./ClientApp/configureStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./ClientApp/store/index.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function configureStore(history,initialState){// Build middleware. These are functions that can process the actions before they reach the store.
var windowIfDefined=typeof window==='undefined'?null:window;// If devTools is installed, connect to it
var devToolsExtension=windowIfDefined&&windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;var createStoreWithMiddleware=Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a,Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)),devToolsExtension?devToolsExtension():function(next){return next;})(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);// Combine all reducers and instantiate the app-wide store instance
var allReducers=buildRootReducer(_store__WEBPACK_IMPORTED_MODULE_3__["reducers"],history);var store=createStoreWithMiddleware(allReducers,initialState);// Enable Webpack hot module replacement for reducers
if(false){}return store;}var routerReducer=function(history){var initialState={location:history.location,action:history.action};return function(state,arg){if(state===void 0){state=initialState;}if(arg===void 0){arg={};}if(arg.type===connected_react_router__WEBPACK_IMPORTED_MODULE_2__["LOCATION_CHANGE"]){return __assign({},state,arg.payload);}return state;};};function buildRootReducer(allReducers,history){return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(__assign({},allReducers,{router:routerReducer(history)}));}

/***/ }),

/***/ "./ClientApp/images/logo.png":
/*!***********************************!*\
  !*** ./ClientApp/images/logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41b61ebfee29e470850ed2d2d889e33f.png";

/***/ }),

/***/ "./ClientApp/layouts/AuthorizedLayout.tsx":
/*!************************************************!*\
  !*** ./ClientApp/layouts/AuthorizedLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/TopMenu */ "./ClientApp/components/shared/TopMenu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/authorizedLayout.scss */ "./ClientApp/styles/authorizedLayout.scss");
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/shared/Footer */ "./ClientApp/components/shared/Footer.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AuthorizedLayout=/** @class */function(_super){__extends(AuthorizedLayout,_super);function AuthorizedLayout(){return _super!==null&&_super.apply(this,arguments)||this;}AuthorizedLayout.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{id:"authorizedLayout",className:"layout"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__["default"],null),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"container container-content"},this.props.children),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"],null),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],null));};return AuthorizedLayout;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (AuthorizedLayout);

/***/ }),

/***/ "./ClientApp/layouts/GuestLayout.tsx":
/*!*******************************************!*\
  !*** ./ClientApp/layouts/GuestLayout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/guestLayout.scss */ "./ClientApp/styles/guestLayout.scss");
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var GuestLayout=/** @class */function(_super){__extends(GuestLayout,_super);function GuestLayout(){return _super!==null&&_super.apply(this,arguments)||this;}GuestLayout.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{id:"guestLayout",className:"layout"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"container container-content"},this.props.children),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"],null));};return GuestLayout;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (GuestLayout);

/***/ }),

/***/ "./ClientApp/models/Result.ts":
/*!************************************!*\
  !*** ./ClientApp/models/Result.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Result=/** @class */function(){function Result(value){var errors=[];for(var _i=1;_i<arguments.length;_i++){errors[_i-1]=arguments[_i];}this.value=value;this.errors=errors[0]==undefined||errors[0]==null?[]:errors;}Object.defineProperty(Result.prototype,"hasErrors",{get:function(){return this.errors!=null&&Array.isArray(this.errors)&&this.errors.length>0;},enumerable:true,configurable:true});return Result;}();/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./ClientApp/pages/ExamplePage.tsx":
/*!*****************************************!*\
  !*** ./ClientApp/pages/ExamplePage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/shared/PagingBar */ "./ClientApp/components/shared/PagingBar.tsx");
/* harmony import */ var _Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/person/PersonEditor */ "./ClientApp/components/person/PersonEditor.tsx");
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/shared/ModalComponent */ "./ClientApp/components/shared/ModalComponent.tsx");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var ExamplePage=/** @class */function(_super){__extends(ExamplePage,_super);function ExamplePage(props){var _this=_super.call(this,props)||this;_this.state={searchTerm:"",pageNum:1,limitPerPage:5,rowOffset:0,modelForEdit:{}};_this.debouncedSearch=awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default()(function(term){props.searchRequest(term);},500);return _this;}ExamplePage.prototype.componentWillMount=function(){this.props.searchRequest();};ExamplePage.prototype.componentWillUnmount=function(){if(this.elModalAdd){this.elModalAdd.hide();}if(this.elModalEdit){this.elModalEdit.hide();}if(this.elModalDelete){this.elModalDelete.hide();}};ExamplePage.prototype.onChangePage=function(pageNum){var rowOffset=Math.ceil((pageNum-1)*this.state.limitPerPage);this.setState({pageNum:pageNum,rowOffset:rowOffset});};ExamplePage.prototype.onClickShowAddModal=function(e){this.elModalAdd.show();};ExamplePage.prototype.onClickShowEditModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalEdit.show();};ExamplePage.prototype.onClickShowDeleteModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalDelete.show();};ExamplePage.prototype.onClickPersonEditorAdd__saveBtn=function(e){return __awaiter(this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:e.preventDefault();if(!this.personEditorAdd.elForm.isValid()){// Form is not valid.
return[2/*return*/];}return[4/*yield*/,Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["getPromiseFromAction"])(this.props.addRequest(this.personEditorAdd.elForm.getData()))];case 1:result=_a.sent();if(!result.hasErrors){this.pagingBar.setLastPage();this.elModalAdd.hide();}return[2/*return*/];}});});};ExamplePage.prototype.onClickPersonEditorEdit__saveBtn=function(e){return __awaiter(this,void 0,void 0,function(){var data,result;return __generator(this,function(_a){switch(_a.label){case 0:if(!this.personEditorEdit.elForm.isValid()){// Form is not valid.
return[2/*return*/];}data=this.personEditorEdit.elForm.getData();return[4/*yield*/,Object(_Utils__WEBPACK_IMPORTED_MODULE_12__["getPromiseFromAction"])(this.props.updateRequest(data))];case 1:result=_a.sent();if(!result.hasErrors){this.elModalEdit.hide();}return[2/*return*/];}});});};ExamplePage.prototype.onClickPersonEditorDelete__saveBtn=function(e){this.props.deleteRequest(this.state.modelForEdit.id);this.elModalDelete.hide();};ExamplePage.prototype.renderRow=function(person){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",{key:person.id},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.firstName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.lastName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-info",onClick:function(x){return _this.onClickShowEditModal(x,person);}},"Edit"),"\u00A0",react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-danger",onClick:function(x){return _this.onClickShowDeleteModal(x,person);}},"Delete")));};ExamplePage.prototype.renderRows=function(data){var _this=this;return data.slice(this.state.rowOffset,this.state.rowOffset+this.state.limitPerPage).map(function(x){return _this.renderRow(x);});};ExamplePage.prototype.onChangeSearchInput=function(e){var val=e.currentTarget.value;this.debouncedSearch(val);this.pagingBar.setFirstPage();};ExamplePage.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title",null,"Example - RCB")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__["default"],{show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel panel-default"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel-body row"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-1"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickShowAddModal},"Add")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-11"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input",{type:"text",className:"form-control",defaultValue:"",onChange:this.onChangeSearchInput,placeholder:"Search for people..."})))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table",{className:"table"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"First name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"Last name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody",null,this.renderRows(this.props.people))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalAdd=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorAdd__saveBtn},"Save")),title:"Add person",onHide:function(){if(_this.personEditorAdd){_this.personEditorAdd.emptyForm();}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorAdd=x;},data:{}})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalEdit=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorEdit__saveBtn},"Save")),title:"Edit person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName,onHide:function(){if(_this.personEditorEdit){_this.setState({modelForEdit:{}});}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorEdit=x;},data:this.state.modelForEdit})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalDelete=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-danger",onClick:this.onClickPersonEditorDelete__saveBtn},"Delete")),title:"Delete person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p",null,"Do you really want to delete this person?")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__["PagingBar"],{ref:function(x){return _this.pagingBar=x;},totalResults:this.props.people.length,limitPerPage:this.state.limitPerPage,currentPage:this.state.pageNum,onChangePage:this.onChangePage}));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onChangePage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickShowAddModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickShowEditModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickShowDeleteModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickPersonEditorAdd__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickPersonEditorEdit__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onClickPersonEditorDelete__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"renderRow",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"renderRows",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],ExamplePage.prototype,"onChangeSearchInput",null);return ExamplePage;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.person;},// Selects which state properties are merged into the component's props.
_Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__["PersonStore"].actionCreators// Selects which action creators are merged into the component's props.
)(ExamplePage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/pages/HomePage.tsx":
/*!**************************************!*\
  !*** ./ClientApp/pages/HomePage.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Images/logo.png */ "./ClientApp/images/logo.png");
/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Images_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var HomePage=/** @class */function(_super){__extends(HomePage,_super);function HomePage(props){return _super.call(this,props)||this;}HomePage.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title",null,"Home page - RCB")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img",{style:{"margin":"0 auto","display":"block","width":"100%"},src:_Images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",{className:"text-center",style:{"fontSize":"52px"}},"Happy coding!"));};return HomePage;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./ClientApp/pages/LoginPage.tsx":
/*!***************************************!*\
  !*** ./ClientApp/pages/LoginPage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};;var LoginPage=/** @class */function(_super){__extends(LoginPage,_super);function LoginPage(props){return _super.call(this,props)||this;}LoginPage.prototype.componentDidMount=function(){this.props.init();if(this.elLoader){this.elLoader.forceUpdate();}};LoginPage.prototype.onClickSubmitBtn=function(e){return __awaiter(this,void 0,void 0,function(){var data;return __generator(this,function(_a){e.preventDefault();if(this.elForm.isValid()){data=this.elForm.getData();this.props.loginRequest(data);}return[2/*return*/];});});};LoginPage.prototype.render=function(){var _this=this;if(this.props.indicators.loginSuccess){return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_6__["Redirect"],{to:"/"});}return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{id:"loginPage"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("title",null,"Login page - RCB")),react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__["default"],{ref:function(x){return _this.elLoader=x;},show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{id:"loginContainer"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p",{className:"text-center"},"Type any login and password to enter."),react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__["Form"],{ref:function(x){return _this.elForm=x;}},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label",{htmlFor:"inputLogin"},"Login"),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input",{type:"text",name:"login","data-value-type":"string",className:"form-control",id:"inputLogin","data-val-required":"true","data-msg-required":"Login is required."})),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label",{htmlFor:"inputLogin"},"Password"),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input",{type:"password",name:"password","data-value-type":"string",className:"form-control",id:"inputPassword","data-val-required":"true","data-msg-required":"Password is required."})),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-inline"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickSubmitBtn},"Sign in")))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_7___default.a],LoginPage.prototype,"onClickSubmitBtn",null);return LoginPage;}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.login;},// Selects which state properties are merged into the component's props
_Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__["LoginStore"].actionCreators// Selects which action creators are merged into the component's props
)(LoginPage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/routes.tsx":
/*!******************************!*\
  !*** ./ClientApp/routes.tsx ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Layouts/AuthorizedLayout */ "./ClientApp/layouts/AuthorizedLayout.tsx");
/* harmony import */ var _Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Layouts/GuestLayout */ "./ClientApp/layouts/GuestLayout.tsx");
/* harmony import */ var _Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Pages/LoginPage */ "./ClientApp/pages/LoginPage.tsx");
/* harmony import */ var _Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppRoute */ "./ClientApp/components/shared/AppRoute.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Pages/HomePage */ "./ClientApp/pages/HomePage.tsx");
/* harmony import */ var _Pages_ExamplePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Pages/ExamplePage */ "./ClientApp/pages/ExamplePage.tsx");
var routes=react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"],null,react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__["default"],exact:true,path:"/login",component:_Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],exact:true,path:"/",component:_Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],exact:true,path:"/example",component:_Pages_ExamplePage__WEBPACK_IMPORTED_MODULE_7__["default"]}));

/***/ }),

/***/ "./ClientApp/services/AccountService.ts":
/*!**********************************************!*\
  !*** ./ClientApp/services/AccountService.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceBase */ "./ClientApp/services/ServiceBase.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var AccountService=/** @class */function(_super){__extends(AccountService,_super);function AccountService(){return _super!==null&&_super.apply(this,arguments)||this;}AccountService.login=function(loginModel){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"api/Account/Login",method:"POST",data:loginModel})];case 1:result=_a.sent();if(!result.hasErrors){_Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser=result.value;}return[2/*return*/,result];}});});};AccountService.logout=function(){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"api/Account/Logout",method:"POST"})];case 1:result=_a.sent();if(!result.hasErrors){_Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser=null;}return[2/*return*/,result];}});});};return AccountService;}(_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);/* harmony default export */ __webpack_exports__["default"] = (AccountService);

/***/ }),

/***/ "./ClientApp/services/PersonService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/services/PersonService.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Services/ServiceBase */ "./ClientApp/services/ServiceBase.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var PersonService=/** @class */function(_super){__extends(PersonService,_super);function PersonService(){return _super!==null&&_super.apply(this,arguments)||this;}PersonService.search=function(term){if(term===void 0){term=null;}return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:if(term==null){term="";}return[4/*yield*/,this.requestJson({url:"/api/Person/Search?term="+term,method:"GET"})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.update=function(model){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/"+model.id,method:"PATCH",data:model})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.delete=function(id){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/"+id,method:"DELETE"})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.add=function(model){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/Add",method:"POST",data:model})];case 1:result=_a.sent();return[2/*return*/,result];}});});};return PersonService;}(_Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);/* harmony default export */ __webpack_exports__["default"] = (PersonService);

/***/ }),

/***/ "./ClientApp/services/ServiceBase.ts":
/*!*******************************************!*\
  !*** ./ClientApp/services/ServiceBase.ts ***!
  \*******************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Ui */ "./ClientApp/Ui.ts");
/* harmony import */ var _Models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Models/Result */ "./ClientApp/models/Result.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json-to-url */ "./node_modules/json-to-url/index.js");
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_to_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};/**
 * Represents base class of the isomorphic service.
 */var ServiceBase=/** @class */function(){function ServiceBase(){}/**
     * Make request with JSON data.
     * @param opts
     */ServiceBase.requestJson=function(opts){return __awaiter(this,void 0,Promise,function(){var axiosResult,result,processQuery,axiosRequestConfig,_a,error_1;return __generator(this,function(_b){switch(_b.label){case 0:axiosResult=null;result=null;opts.url=Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url);// Allow requests also for Node.
processQuery=function(url,data){if(data){return url+"?"+json_to_url__WEBPACK_IMPORTED_MODULE_4___default()(data);}return url;};if(Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["isNode"])()){// Used for SSR requests from the web server to NodeServices.
axiosRequestConfig={headers:{Cookie:_Globals__WEBPACK_IMPORTED_MODULE_6__["default"].getData().private.cookie}};}_b.label=1;case 1:_b.trys.push([1,13,,14]);_a=opts.method;switch(_a){case"GET":return[3/*break*/,2];case"POST":return[3/*break*/,4];case"PUT":return[3/*break*/,6];case"PATCH":return[3/*break*/,8];case"DELETE":return[3/*break*/,10];}return[3/*break*/,12];case 2:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(processQuery(opts.url,opts.data),axiosRequestConfig)];case 3:axiosResult=_b.sent();return[3/*break*/,12];case 4:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url,opts.data,axiosRequestConfig)];case 5:axiosResult=_b.sent();return[3/*break*/,12];case 6:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url,opts.data,axiosRequestConfig)];case 7:axiosResult=_b.sent();return[3/*break*/,12];case 8:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url,opts.data,axiosRequestConfig)];case 9:axiosResult=_b.sent();return[3/*break*/,12];case 10:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(processQuery(opts.url,opts.data),axiosRequestConfig)];case 11:axiosResult=_b.sent();return[3/*break*/,12];case 12:result=new(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"],[void 0,axiosResult.data.value].concat(axiosResult.data.errors)))();return[3/*break*/,14];case 13:error_1=_b.sent();result=new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null,error_1.message);return[3/*break*/,14];case 14:if(result.hasErrors){_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"],result.errors);}return[2/*return*/,result];}});});};/**
     * Allows you to send files to the server.
     * @param opts
     */ServiceBase.sendFormData=function(opts){return __awaiter(this,void 0,Promise,function(){var axiosResult,result,axiosOpts,_a,error_2;return __generator(this,function(_b){switch(_b.label){case 0:axiosResult=null;result=null;opts.url=Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url);// Allow requests also for Node.
axiosOpts={headers:{'Content-Type':'multipart/form-data'}};_b.label=1;case 1:_b.trys.push([1,9,,10]);_a=opts.method;switch(_a){case"POST":return[3/*break*/,2];case"PUT":return[3/*break*/,4];case"PATCH":return[3/*break*/,6];}return[3/*break*/,8];case 2:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url,opts.data,axiosOpts)];case 3:axiosResult=_b.sent();return[3/*break*/,8];case 4:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url,opts.data,axiosOpts)];case 5:axiosResult=_b.sent();return[3/*break*/,8];case 6:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url,opts.data,axiosOpts)];case 7:axiosResult=_b.sent();return[3/*break*/,8];case 8:result=new(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"],[void 0,axiosResult.data.value].concat(axiosResult.data.errors)))();return[3/*break*/,10];case 9:error_2=_b.sent();result=new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null,error_2.message);return[3/*break*/,10];case 10:if(result.hasErrors){_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"],result.errors);}return[2/*return*/,result];}});});};return ServiceBase;}();

/***/ }),

/***/ "./ClientApp/store/LoginStore.ts":
/*!***************************************!*\
  !*** ./ClientApp/store/LoginStore.ts ***!
  \***************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var LoginStore;(function(LoginStore){var _this=this;var Actions;(function(Actions){/**
         * You need to have the initial state to
         * reset the indicators (e.g. loginSuccess)
         * that call redirect or any other actions.
         * It must be called in method 'componentDidMount'
         * of a component.
         */Actions["Init"]="LOGIN_INIT";Actions["Request"]="LOGIN_REQUEST";Actions["Success"]="LOGIN_SUCCESS";Actions["Failure"]="LOGIN_FAILURE";})(Actions=LoginStore.Actions||(LoginStore.Actions={}));LoginStore.actionCreators={init:function(){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(_a){dispatch({type:Actions.Init});return[2/*return*/];});});};},loginRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.Request});return[4/*yield*/,_Services_AccountService__WEBPACK_IMPORTED_MODULE_1__["default"].login(model)];case 1:result=_a.sent();if(result.hasErrors){dispatch({type:Actions.Failure});return[2/*return*/];}dispatch({type:Actions.Success,payload:result.value});return[2/*return*/];}});});};}};var initialState={indicators:{operationLoading:false,loginSuccess:false}};LoginStore.reducer=function(currentState,incomingAction){var action=incomingAction;var cloneIndicators=function(){return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);};switch(action.type){case Actions.Init:return initialState;case Actions.Request:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.Success:var indicators=cloneIndicators();indicators.operationLoading=false;indicators.loginSuccess=true;return __assign({},currentState,{indicators:indicators});case Actions.Failure:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators});default:// The following line guarantees that every action in the KnownAction union has been covered by a case above
var exhaustiveCheck=action;}return currentState||initialState;};})(LoginStore||(LoginStore={}));

/***/ }),

/***/ "./ClientApp/store/PersonStore.ts":
/*!****************************************!*\
  !*** ./ClientApp/store/PersonStore.ts ***!
  \****************************************/
/*! exports provided: PersonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonStore", function() { return PersonStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/PersonService */ "./ClientApp/services/PersonService.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_2__);
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var PersonStore;(function(PersonStore){var _this=this;var Actions;(function(Actions){Actions["FailureResponse"]="PERSON_FAILURE_RESPONSE";Actions["SearchRequest"]="PERSON_SEARCH_REQUEST";Actions["SearchResponse"]="PERSON_SEARCH_RESPONSE";Actions["AddRequest"]="PERSON_ADD_REQUEST";Actions["AddResponse"]="PERSON_ADD_RESPONSE";Actions["UpdateRequest"]="PERSON_UPDATE_REQUEST";Actions["UpdateResponse"]="PERSON_UPDATE_RESPONSE";Actions["DeleteRequest"]="PERSON_DELETE_REQUEST";Actions["DeleteResponse"]="PERSON_DELETE_RESPONSE";})(Actions=PersonStore.Actions||(PersonStore.Actions={}));PersonStore.actionCreators={searchRequest:function(term){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,Object(domain_wait__WEBPACK_IMPORTED_MODULE_2__["wait"])(function(transformUrl){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:// Wait for server prerendering.
dispatch({type:Actions.SearchRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].search(term)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.SearchResponse,payload:result.value});}else{dispatch({type:Actions.FailureResponse});}return[2/*return*/];}});});})];case 1:_a.sent();return[2/*return*/];}});});};},addRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.AddRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].add(model)];case 1:result=_a.sent();if(!result.hasErrors){model.id=result.value;dispatch({type:Actions.AddResponse,payload:model});}else{dispatch({type:Actions.FailureResponse});}return[2/*return*/,result];}});});};},updateRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.UpdateRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].update(model)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.UpdateResponse,payload:model});}else{dispatch({type:Actions.FailureResponse});}return[2/*return*/,result];}});});};},deleteRequest:function(id){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.DeleteRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].delete(id)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.DeleteResponse,id:id});}else{dispatch({type:Actions.FailureResponse});}return[2/*return*/];}});});};}};var initialState={people:[],indicators:{operationLoading:false}};PersonStore.reducer=function(currentState,incomingAction){var action=incomingAction;var cloneIndicators=function(){return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);};switch(action.type){case Actions.FailureResponse:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators});case Actions.SearchRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.SearchResponse:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators,people:action.payload});case Actions.UpdateRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.UpdateResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);var itemToUpdate=data.filter(function(x){return x.id===action.payload.id;})[0];itemToUpdate.firstName=action.payload.firstName;itemToUpdate.lastName=action.payload.lastName;return __assign({},currentState,{indicators:indicators,people:data});case Actions.AddRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.AddResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);data.push(action.payload);return __assign({},currentState,{indicators:indicators,people:data});case Actions.DeleteRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.DeleteResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people).filter(function(x){return x.id!==action.id;});return __assign({},currentState,{indicators:indicators,people:data});default:// The following line guarantees that every action in the KnownAction union has been covered by a case above
var exhaustiveCheck=action;}return currentState||initialState;};})(PersonStore||(PersonStore={}));

/***/ }),

/***/ "./ClientApp/store/index.ts":
/*!**********************************!*\
  !*** ./ClientApp/store/index.ts ***!
  \**********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers={login:_Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__["LoginStore"].reducer,person:_Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__["PersonStore"].reducer};

/***/ }),

/***/ "./ClientApp/styles/authorizedLayout.scss":
/*!************************************************!*\
  !*** ./ClientApp/styles/authorizedLayout.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/guestLayout.scss":
/*!*******************************************!*\
  !*** ./ClientApp/styles/guestLayout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/loader.scss":
/*!**************************************!*\
  !*** ./ClientApp/styles/loader.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/main.scss":
/*!************************************!*\
  !*** ./ClientApp/styles/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/utils.ts":
/*!****************************!*\
  !*** ./ClientApp/utils.ts ***!
  \****************************/
/*! exports provided: clone, getPromiseFromAction, isNode, isObjectEmpty, emptyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromiseFromAction", function() { return getPromiseFromAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyForm", function() { return emptyForm; });
function clone(object){return JSON.parse(JSON.stringify(object));}function getPromiseFromAction(asyncActionCreator){return asyncActionCreator;}/**
 * Is server prerendering by Node.js.
 * There can't be any DOM: window, document, etc.
 */function isNode(){return typeof process==='object'&&process.versions&&!!process.versions.node;}function isObjectEmpty(obj){for(var key in obj){if(obj.hasOwnProperty(key))return false;}return true;}function emptyForm(form){var inputs=Array.from(form.querySelectorAll("input, select, textarea"));inputs.forEach(function(x){var inputType=x.getAttribute("type");if(inputType==="checkbox"||inputType==="radio"){x.checked=false;}else{x.value="";}});}

/***/ }),

/***/ "./node_modules/aspnet-prerendering/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/aspnet-prerendering/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/aspnet-prerendering/index.js");

/***/ }),

/***/ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/awesome-debounce-promise/awesome-debounce-promise.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceCache = exports.onlyResolvesLast = exports.debounce = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _debouncePromise = __webpack_require__(/*! debounce-promise */ "./node_modules/debounce-promise/dist/index.js");

var _debouncePromise2 = _interopRequireDefault(_debouncePromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// We use DebouncePromise as a dependency as it does a great low-level job
// The behavior of the lib is to return the same promise for all function calls
var debounce = exports.debounce = function debounce(func, wait, options) {
  return (0, _debouncePromise2.default)(func, wait, options);
};

// Given a function returning promises, wrap it so that only the promise returned from last call will actually resolve
// This is useful to ignore former async results and handle concurrency issues
var onlyResolvesLast = exports.onlyResolvesLast = function onlyResolvesLast(asyncFunction) {
  // Inspired from https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
  var makeCancelable = function makeCancelable(promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
      promise.then(function (val) {
        return hasCanceled_ ? undefined : resolve(val);
      }, function (error) {
        return hasCanceled_ ? undefined : reject(error);
      });
    });
    return {
      promise: wrappedPromise,
      cancel: function cancel() {
        hasCanceled_ = true;
      }
    };
  };

  var cancelPrevious = void 0;
  return function () {
    cancelPrevious && cancelPrevious();

    var _makeCancelable = makeCancelable(asyncFunction.apply(undefined, arguments)),
        promise = _makeCancelable.promise,
        cancel = _makeCancelable.cancel;

    cancelPrevious = cancel;
    return promise;
  };
};

// We create a debouncing function cache, because when wrapping the original function,
// we may actually want to route the function call to different debounced functions depending function paameters

var DebounceCache = exports.DebounceCache = function DebounceCache() {
  var _this = this;

  _classCallCheck(this, DebounceCache);

  this.getDebouncedFunction = function (func, wait, options, args) {
    var keyOptions = options.key,
        onlyResolvesLastOption = options.onlyResolvesLast,
        otherOptions = _objectWithoutProperties(options, ['key', 'onlyResolvesLast']);

    var key = keyOptions.apply(undefined, _toConsumableArray(args));
    // If the debounced function does not exist for this key, we create one on the fly and return it
    if (!_this.debounceCache[key]) {
      var debouncedFunc = debounce(func, wait, otherOptions);
      if (onlyResolvesLastOption) {
        debouncedFunc = onlyResolvesLast(debouncedFunc);
      }
      _this.debounceCache[key] = debouncedFunc;
    }
    return _this.debounceCache[key];
  };

  this.debounceCache = {};
};

var DefaultOptions = {
  // By default, the key is null, which means that all the function calls
  // will share the same debounced function
  // Providing a key function permit to use the call arguments
  // and route to a distinct debounced function
  key: function key() {
    return null;
  },

  // By default, a debounced function will only resolve
  // the last promise it returned
  // Former calls will stay unresolved, so that you don't have
  // to handle concurrency issues in your code
  onlyResolvesLast: true
};

function AwesomeDebouncePromise(func, wait, options) {
  var finalOptions = _extends({}, DefaultOptions, options);
  var debounceCache = new DebounceCache();
  return function AwesomeDebouncePromiseWrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var debouncedFn = debounceCache.getDebouncedFunction(func, wait, finalOptions, args);
    return debouncedFn.apply(undefined, args);
  };
}

exports.default = AwesomeDebouncePromise;


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/bind-decorator/index.js":
/*!**********************************************!*\
  !*** ./node_modules/bind-decorator/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),

/***/ "./node_modules/bootstrap3-native/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap3-native/index.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/bootstrap3-native/index.js");

/***/ }),

/***/ "./node_modules/connected-react-router/lib/index.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/connected-react-router/lib/index.js from dll-reference ./vendor ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/connected-react-router/lib/index.js");

/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/debounce-promise/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debounce-promise/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global setTimeout, clearTimeout */

module.exports = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastCallAt = void 0;
  var deferred = void 0;
  var timer = void 0;
  var pendingArgs = [];
  return function debounced() {
    var currentWait = getWait(wait);
    var currentTime = new Date().getTime();

    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

    lastCallAt = currentTime;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCold && options.leading) {
      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
        return result[0];
      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }

    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), currentWait);

    if (options.accumulate) {
      var _ret = function () {
        var argsIndex = pendingArgs.length - 1;
        return {
          v: deferred.promise.then(function (results) {
            return results[argsIndex];
          })
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    return deferred.promise;
  };

  function flush() {
    var thisDeferred = deferred;
    clearTimeout(timer);

    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

    pendingArgs = [];
    deferred = null;
  }
};

function getWait(wait) {
  return typeof wait === 'function' ? wait() : wait;
}

function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/deepmerge/dist/umd.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/umd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

return deepmerge_1;

})));


/***/ }),

/***/ "./node_modules/domain-wait/dist/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/domain-wait/dist/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/domain-wait/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/formik/dist/formik.cjs.development.js":
/*!************************************************************!*\
  !*** ./node_modules/formik/dist/formik.cjs.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var isEqual = _interopDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));
var deepmerge = _interopDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/umd.js"));
var hoistNonReactStatics = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));
var createContext = _interopDefault(__webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js"));
var warning = _interopDefault(__webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.cjs.js"));
var cloneDeep = _interopDefault(__webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"));
var toPath = _interopDefault(__webpack_require__(/*! lodash/toPath */ "./node_modules/lodash/toPath.js"));

var _a;
var FormikProvider = (_a = createContext({}), _a.Provider), FormikConsumer = _a.Consumer;
function connect(Comp) {
    var C = function (props) { return (React.createElement(FormikConsumer, null, function (formik) { return React.createElement(Comp, tslib_1.__assign({}, props, { formik: formik })); })); };
    var componentDisplayName = Comp.displayName ||
        Comp.name ||
        (Comp.constructor && Comp.constructor.name) ||
        'Component';
    C.WrappedComponent = Comp;
    C.displayName = "FormikConnect(" + componentDisplayName + ")";
    return hoistNonReactStatics(C, Comp);
}

function getIn(obj, key, def, p) {
    if (p === void 0) { p = 0; }
    var path = toPath(key);
    while (obj && p < path.length) {
        obj = obj[path[p++]];
    }
    return obj === undefined ? def : obj;
}
function setIn(obj, path, value) {
    var res = {};
    var resVal = res;
    var i = 0;
    var pathArray = toPath(path);
    for (; i < pathArray.length - 1; i++) {
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));
        if (resVal[currentPath]) {
            resVal = resVal[currentPath];
        }
        else if (currentObj) {
            resVal = resVal[currentPath] = cloneDeep(currentObj);
        }
        else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] =
                isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    }
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
    if (value === undefined) {
        delete resVal[pathArray[i]];
    }
    else {
        resVal[pathArray[i]] = value;
    }
    var result = tslib_1.__assign({}, obj, res);
    if (i === 0 && value === undefined) {
        delete result[pathArray[i]];
    }
    return result;
}
function setNestedObjectValues(object, value, visited, response) {
    if (visited === void 0) { visited = new WeakMap(); }
    if (response === void 0) { response = {}; }
    for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
        var k = _a[_i];
        var val = object[k];
        if (isObject(val)) {
            if (!visited.get(val)) {
                visited.set(val, true);
                response[k] = Array.isArray(val) ? [] : {};
                setNestedObjectValues(val, value, visited, response[k]);
            }
        }
        else {
            response[k] = value;
        }
    }
    return response;
}
var isFunction = function (obj) {
    return typeof obj === 'function';
};
var isObject = function (obj) {
    return obj !== null && typeof obj === 'object';
};
var isInteger = function (obj) {
    return String(Math.floor(Number(obj))) === obj;
};
var isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
};
var isNaN = function (obj) { return obj !== obj; };
var isEmptyChildren = function (children) {
    return React.Children.count(children) === 0;
};
var isPromise = function (value) {
    return isObject(value) && isFunction(value.then);
};
function getActiveElement(doc) {
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
        return null;
    }
    try {
        return doc.activeElement || doc.body;
    }
    catch (e) {
        return doc.body;
    }
}
function makeCancelable(promise) {
    var hasCanceled = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
        promise.then(function (val) { return (hasCanceled ? reject({ isCanceled: true }) : resolve(val)); }, function (error) { return (hasCanceled ? reject({ isCanceled: true }) : reject(error)); });
    });
    return [
        wrappedPromise,
        function cancel() {
            hasCanceled = true;
        },
    ];
}

var Formik = (function (_super) {
    tslib_1.__extends(Formik, _super);
    function Formik(props) {
        var _this = _super.call(this, props) || this;
        _this.hcCache = {};
        _this.hbCache = {};
        _this.registerField = function (name, Comp) {
            _this.fields[name] = Comp;
        };
        _this.unregisterField = function (name) {
            delete _this.fields[name];
        };
        _this.setErrors = function (errors) {
            _this.setState({ errors: errors });
        };
        _this.setTouched = function (touched) {
            _this.setState({ touched: touched }, function () {
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setValues = function (values) {
            _this.setState({ values: values }, function () {
                if (_this.props.validateOnChange) {
                    _this.runValidations(values);
                }
            });
        };
        _this.setStatus = function (status) {
            _this.setState({ status: status });
        };
        _this.setError = function (error) {
            {
                console.warn("Warning: Formik's setError(error) is deprecated and may be removed in future releases. Please use Formik's setStatus(status) instead. It works identically. For more info see https://github.com/jaredpalmer/formik#setstatus-status-any--void");
            }
            _this.setState({ error: error });
        };
        _this.setSubmitting = function (isSubmitting) {
            if (_this.didMount) {
                _this.setState({ isSubmitting: isSubmitting });
            }
        };
        _this.validateField = function (field) {
            _this.setState({ isValidating: true });
            return _this.runSingleFieldLevelValidation(field, getIn(_this.state.values, field)).then(function (error) {
                if (_this.didMount) {
                    _this.setState({
                        errors: setIn(_this.state.errors, field, error),
                        isValidating: false,
                    });
                }
                return error;
            });
        };
        _this.runSingleFieldLevelValidation = function (field, value) {
            return new Promise(function (resolve) {
                return resolve(_this.fields[field].props.validate(value));
            }).then(function (x) { return x; }, function (e) { return e; });
        };
        _this.runValidationSchema = function (values) {
            return new Promise(function (resolve) {
                var validationSchema = _this.props.validationSchema;
                var schema = isFunction(validationSchema)
                    ? validationSchema()
                    : validationSchema;
                validateYupSchema(values, schema).then(function () {
                    resolve({});
                }, function (err) {
                    resolve(yupToFormErrors(err));
                });
            });
        };
        _this.runValidations = function (values) {
            if (values === void 0) { values = _this.state.values; }
            if (_this.validator) {
                _this.validator();
            }
            var _a = makeCancelable(Promise.all([
                _this.runFieldLevelValidations(values),
                _this.props.validationSchema ? _this.runValidationSchema(values) : {},
                _this.props.validate ? _this.runValidateHandler(values) : {},
            ]).then(function (_a) {
                var fieldErrors = _a[0], schemaErrors = _a[1], handlerErrors = _a[2];
                return deepmerge.all([fieldErrors, schemaErrors, handlerErrors], { arrayMerge: arrayMerge });
            })), promise = _a[0], cancel = _a[1];
            _this.validator = cancel;
            return promise
                .then(function (errors) {
                _this.setState(function (prevState) {
                    if (!isEqual(prevState.errors, errors)) {
                        return { errors: errors };
                    }
                    return null;
                });
                return errors;
            })
                .catch(function (x) { return x; });
        };
        _this.handleChange = function (eventOrPath) {
            var executeChange = function (eventOrTextValue, maybePath) {
                var field = maybePath;
                var val = eventOrTextValue;
                var parsed;
                if (!isString(eventOrTextValue)) {
                    if (eventOrTextValue.persist) {
                        eventOrTextValue.persist();
                    }
                    var _a = eventOrTextValue.target, type = _a.type, name_1 = _a.name, id = _a.id, value = _a.value, checked = _a.checked, outerHTML = _a.outerHTML;
                    field = maybePath ? maybePath : name_1 ? name_1 : id;
                    if (!field && "development" !== 'production') {
                        warnAboutMissingIdentifier({
                            htmlContent: outerHTML,
                            documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
                            handlerName: 'handleChange',
                        });
                    }
                    val = /number|range/.test(type)
                        ? ((parsed = parseFloat(value)), isNaN(parsed) ? '' : parsed)
                        : /checkbox/.test(type) ? checked : value;
                }
                if (field) {
                    _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, field, val) })); }, function () {
                        if (_this.props.validateOnChange) {
                            _this.runValidations(setIn(_this.state.values, field, val));
                        }
                    });
                }
            };
            if (isString(eventOrPath)) {
                return isFunction(_this.hcCache[eventOrPath])
                    ? _this.hcCache[eventOrPath]
                    : (_this.hcCache[eventOrPath] = function (event) {
                        return executeChange(event, eventOrPath);
                    });
            }
            else {
                executeChange(eventOrPath);
            }
        };
        _this.setFieldValue = function (field, value, shouldValidate) {
            if (shouldValidate === void 0) { shouldValidate = true; }
            if (_this.didMount) {
                _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, field, value) })); }, function () {
                    if (_this.props.validateOnChange && shouldValidate) {
                        _this.runValidations(_this.state.values);
                    }
                });
            }
        };
        _this.handleSubmit = function (e) {
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            if (typeof document !== 'undefined') {
                var activeElement = getActiveElement();
                if (activeElement !== null &&
                    activeElement instanceof HTMLButtonElement) {
                    warning(!!(activeElement.attributes &&
                        activeElement.attributes.getNamedItem('type')), 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.');
                }
            }
            _this.submitForm();
        };
        _this.submitForm = function () {
            _this.setState(function (prevState) { return ({
                touched: setNestedObjectValues(prevState.values, true),
                isSubmitting: true,
                isValidating: true,
                submitCount: prevState.submitCount + 1,
            }); });
            return _this.runValidations(_this.state.values).then(function (combinedErrors) {
                _this.setState({ isValidating: false });
                var isValid = Object.keys(combinedErrors).length === 0;
                if (isValid) {
                    _this.executeSubmit();
                }
                else if (_this.didMount) {
                    _this.setState({ isSubmitting: false });
                }
            });
        };
        _this.executeSubmit = function () {
            _this.props.onSubmit(_this.state.values, _this.getFormikActions());
        };
        _this.handleBlur = function (eventOrString) {
            var executeBlur = function (e, path) {
                if (e.persist) {
                    e.persist();
                }
                var _a = e.target, name = _a.name, id = _a.id, outerHTML = _a.outerHTML;
                var field = path ? path : name ? name : id;
                if (!field && "development" !== 'production') {
                    warnAboutMissingIdentifier({
                        htmlContent: outerHTML,
                        documentationAnchorLink: 'handleblur-e-any--void',
                        handlerName: 'handleBlur',
                    });
                }
                _this.setState(function (prevState) { return ({
                    touched: setIn(prevState.touched, field, true),
                }); });
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            };
            if (isString(eventOrString)) {
                return isFunction(_this.hbCache[eventOrString])
                    ? _this.hbCache[eventOrString]
                    : (_this.hbCache[eventOrString] = function (event) {
                        return executeBlur(event, eventOrString);
                    });
            }
            else {
                executeBlur(eventOrString);
            }
        };
        _this.setFieldTouched = function (field, touched, shouldValidate) {
            if (touched === void 0) { touched = true; }
            if (shouldValidate === void 0) { shouldValidate = true; }
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { touched: setIn(prevState.touched, field, touched) })); }, function () {
                if (_this.props.validateOnBlur && shouldValidate) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setFieldError = function (field, message) {
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { errors: setIn(prevState.errors, field, message) })); });
        };
        _this.resetForm = function (nextValues) {
            var values = nextValues ? nextValues : _this.props.initialValues;
            _this.initialValues = values;
            _this.setState({
                isSubmitting: false,
                isValidating: false,
                errors: {},
                touched: {},
                error: undefined,
                status: undefined,
                values: values,
                submitCount: 0,
            });
        };
        _this.handleReset = function () {
            if (_this.props.onReset) {
                var maybePromisedOnReset = _this.props.onReset(_this.state.values, _this.getFormikActions());
                if (isPromise(maybePromisedOnReset)) {
                    maybePromisedOnReset.then(_this.resetForm);
                }
                else {
                    _this.resetForm();
                }
            }
            else {
                _this.resetForm();
            }
        };
        _this.setFormikState = function (s, callback) {
            return _this.setState(s, callback);
        };
        _this.validateForm = function (values) {
            _this.setState({ isValidating: true });
            return _this.runValidations(values).then(function (errors) {
                _this.setState({ isValidating: false });
                return errors;
            });
        };
        _this.getFormikActions = function () {
            return {
                resetForm: _this.resetForm,
                submitForm: _this.submitForm,
                validateForm: _this.validateForm,
                validateField: _this.validateField,
                setError: _this.setError,
                setErrors: _this.setErrors,
                setFieldError: _this.setFieldError,
                setFieldTouched: _this.setFieldTouched,
                setFieldValue: _this.setFieldValue,
                setStatus: _this.setStatus,
                setSubmitting: _this.setSubmitting,
                setTouched: _this.setTouched,
                setValues: _this.setValues,
                setFormikState: _this.setFormikState,
            };
        };
        _this.getFormikComputedProps = function () {
            var isInitialValid = _this.props.isInitialValid;
            var dirty = !isEqual(_this.initialValues, _this.state.values);
            return {
                dirty: dirty,
                isValid: dirty
                    ? _this.state.errors && Object.keys(_this.state.errors).length === 0
                    : isInitialValid !== false && isFunction(isInitialValid)
                        ? isInitialValid(_this.props)
                        : isInitialValid,
                initialValues: _this.initialValues,
            };
        };
        _this.getFormikBag = function () {
            return tslib_1.__assign({}, _this.state, _this.getFormikActions(), _this.getFormikComputedProps(), { registerField: _this.registerField, unregisterField: _this.unregisterField, handleBlur: _this.handleBlur, handleChange: _this.handleChange, handleReset: _this.handleReset, handleSubmit: _this.handleSubmit, validateOnChange: _this.props.validateOnChange, validateOnBlur: _this.props.validateOnBlur });
        };
        _this.getFormikContext = function () {
            return tslib_1.__assign({}, _this.getFormikBag(), { validationSchema: _this.props.validationSchema, validate: _this.props.validate, initialValues: _this.initialValues });
        };
        _this.state = {
            values: props.initialValues || {},
            errors: {},
            touched: {},
            isSubmitting: false,
            isValidating: false,
            submitCount: 0,
        };
        _this.didMount = false;
        _this.fields = {};
        _this.initialValues = props.initialValues || {};
        warning(!(props.component && props.render), 'You should not use <Formik component> and <Formik render> in the same <Formik> component; <Formik render> will be ignored');
        warning(!(props.component && props.children && !isEmptyChildren(props.children)), 'You should not use <Formik component> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        warning(!(props.render && props.children && !isEmptyChildren(props.children)), 'You should not use <Formik render> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        return _this;
    }
    Formik.prototype.componentDidMount = function () {
        this.didMount = true;
    };
    Formik.prototype.componentWillUnmount = function () {
        this.didMount = false;
        if (this.validator) {
            this.validator();
        }
    };
    Formik.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.enableReinitialize &&
            !isEqual(prevProps.initialValues, this.props.initialValues)) {
            this.initialValues = this.props.initialValues;
            this.resetForm(this.props.initialValues);
        }
    };
    Formik.prototype.runFieldLevelValidations = function (values) {
        var _this = this;
        var fieldKeysWithValidation = Object.keys(this.fields).filter(function (f) {
            return _this.fields &&
                _this.fields[f] &&
                _this.fields[f].props.validate &&
                isFunction(_this.fields[f].props.validate);
        });
        var fieldValidations = fieldKeysWithValidation.length > 0
            ? fieldKeysWithValidation.map(function (f) {
                return _this.runSingleFieldLevelValidation(f, getIn(values, f));
            })
            : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')];
        return Promise.all(fieldValidations).then(function (fieldErrorsList) {
            return fieldErrorsList.reduce(function (prev, curr, index) {
                if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
                    return prev;
                }
                if (!!curr) {
                    prev = setIn(prev, fieldKeysWithValidation[index], curr);
                }
                return prev;
            }, {});
        });
    };
    Formik.prototype.runValidateHandler = function (values) {
        var _this = this;
        return new Promise(function (resolve) {
            var maybePromisedErrors = _this.props.validate(values);
            if (maybePromisedErrors === undefined) {
                resolve({});
            }
            else if (isPromise(maybePromisedErrors)) {
                maybePromisedErrors.then(function () {
                    resolve({});
                }, function (errors) {
                    resolve(errors);
                });
            }
            else {
                resolve(maybePromisedErrors);
            }
        });
    };
    Formik.prototype.render = function () {
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children;
        var props = this.getFormikBag();
        var ctx = this.getFormikContext();
        return (React.createElement(FormikProvider, { value: ctx }, component
            ? React.createElement(component, props)
            : render
                ? render(props)
                : children
                    ? isFunction(children)
                        ? children(props)
                        : !isEmptyChildren(children)
                            ? React.Children.only(children)
                            : null
                    : null));
    };
    Formik.defaultProps = {
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: false,
        enableReinitialize: false,
    };
    return Formik;
}(React.Component));
function warnAboutMissingIdentifier(_a) {
    var htmlContent = _a.htmlContent, documentationAnchorLink = _a.documentationAnchorLink, handlerName = _a.handlerName;
    console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n\n    " + htmlContent + "\n\n    Formik cannot determine which value to update. For more info see https://github.com/jaredpalmer/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
    var errors = {};
    if (yupError.inner.length === 0) {
        return setIn(errors, yupError.path, yupError.message);
    }
    for (var _i = 0, _a = yupError.inner; _i < _a.length; _i++) {
        var err = _a[_i];
        if (!errors[err.path]) {
            errors = setIn(errors, err.path, err.message);
        }
    }
    return errors;
}
function validateYupSchema(values, schema, sync, context) {
    if (sync === void 0) { sync = false; }
    if (context === void 0) { context = {}; }
    var validateData = {};
    for (var k in values) {
        if (values.hasOwnProperty(k)) {
            var key = String(k);
            validateData[key] = values[key] !== '' ? values[key] : undefined;
        }
    }
    return schema[sync ? 'validateSync' : 'validate'](validateData, {
        abortEarly: false,
        context: context,
    });
}
function arrayMerge(target, source, options) {
    var destination = target.slice();
    source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
            var cloneRequested = options.clone !== false;
            var shouldClone = cloneRequested && options.isMergeableObject(e);
            destination[i] = shouldClone
                ? deepmerge(Array.isArray(e) ? [] : {}, e, options)
                : e;
        }
        else if (options.isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, options);
        }
        else if (target.indexOf(e) === -1) {
            destination.push(e);
        }
    });
    return destination;
}

var FieldInner = (function (_super) {
    tslib_1.__extends(FieldInner, _super);
    function FieldInner(props) {
        var _this = _super.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component;
        warning(!(component && render), 'You should not use <Field component> and <Field render> in the same <Field> component; <Field component> will be ignored');
        warning(!(component && children && isFunction(children)), 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.');
        warning(!(render && children && !isEmptyChildren(children)), 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored');
        return _this;
    }
    FieldInner.prototype.componentDidMount = function () {
        this.props.formik.registerField(this.props.name, this);
    };
    FieldInner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, this);
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, this);
        }
    };
    FieldInner.prototype.componentWillUnmount = function () {
        this.props.formik.unregisterField(this.props.name);
    };
    FieldInner.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, formik = _a.formik, props = tslib_1.__rest(_a, ["validate", "name", "render", "children", "component", "formik"]);
        var _validate = formik.validate, _validationSchema = formik.validationSchema, restOfFormik = tslib_1.__rest(formik, ["validate", "validationSchema"]);
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        };
        var bag = { field: field, form: restOfFormik };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = tslib_1.__rest(props, ["innerRef"]);
            return React.createElement(component, tslib_1.__assign({ ref: innerRef }, field, rest, { children: children }));
        }
        return React.createElement(component, tslib_1.__assign({}, bag, props, { children: children }));
    };
    return FieldInner;
}(React.Component));
var Field = connect(FieldInner);

var Form = connect(function (_a) {
    var _b = _a.formik, handleReset = _b.handleReset, handleSubmit = _b.handleSubmit, props = tslib_1.__rest(_a, ["formik"]);
    return (React.createElement("form", tslib_1.__assign({ onReset: handleReset, onSubmit: handleSubmit }, props)));
});
Form.displayName = 'Form';

function withFormik(_a) {
    var _b = _a.mapPropsToValues, mapPropsToValues = _b === void 0 ? function (vanillaProps) {
        var val = {};
        for (var k in vanillaProps) {
            if (vanillaProps.hasOwnProperty(k) &&
                typeof vanillaProps[k] !== 'function') {
                val[k] = vanillaProps[k];
            }
        }
        return val;
    } : _b, config = tslib_1.__rest(_a, ["mapPropsToValues"]);
    return function createFormik(Component) {
        var componentDisplayName = Component.displayName ||
            Component.name ||
            (Component.constructor && Component.constructor.name) ||
            'Component';
        var C = (function (_super) {
            tslib_1.__extends(C, _super);
            function C() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.validate = function (values) {
                    return config.validate(values, _this.props);
                };
                _this.validationSchema = function () {
                    return isFunction(config.validationSchema)
                        ? config.validationSchema(_this.props)
                        : config.validationSchema;
                };
                _this.handleSubmit = function (values, actions) {
                    return config.handleSubmit(values, tslib_1.__assign({}, actions, { props: _this.props }));
                };
                _this.renderFormComponent = function (formikProps) {
                    return React.createElement(Component, tslib_1.__assign({}, _this.props, formikProps));
                };
                return _this;
            }
            C.prototype.render = function () {
                var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
                return (React.createElement(Formik, tslib_1.__assign({}, props, config, { validate: config.validate && this.validate, validationSchema: config.validationSchema && this.validationSchema, initialValues: mapPropsToValues(this.props), onSubmit: this.handleSubmit, render: this.renderFormComponent })));
            };
            C.displayName = "WithFormik(" + componentDisplayName + ")";
            return C;
        }(React.Component));
        return hoistNonReactStatics(C, Component);
    };
}

var move = function (array, from, to) {
    var copy = (array || []).slice();
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
};
var swap = function (array, indexA, indexB) {
    var copy = (array || []).slice();
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
};
var insert = function (array, index, value) {
    var copy = (array || []).slice();
    copy.splice(index, 0, value);
    return copy;
};
var replace = function (array, index, value) {
    var copy = (array || []).slice();
    copy[index] = value;
    return copy;
};
var FieldArrayInner = (function (_super) {
    tslib_1.__extends(FieldArrayInner, _super);
    function FieldArrayInner(props) {
        var _this = _super.call(this, props) || this;
        _this.updateArrayField = function (fn, alterTouched, alterErrors) {
            var _a = _this.props, name = _a.name, validateOnChange = _a.validateOnChange, _b = _a.formik, setFormikState = _b.setFormikState, validateForm = _b.validateForm;
            setFormikState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, name, fn(getIn(prevState.values, name))), errors: alterErrors
                    ? setIn(prevState.errors, name, fn(getIn(prevState.errors, name)))
                    : prevState.errors, touched: alterTouched
                    ? setIn(prevState.touched, name, fn(getIn(prevState.touched, name)))
                    : prevState.touched })); }, function () {
                if (validateOnChange) {
                    validateForm();
                }
            });
        };
        _this.push = function (value) {
            return _this.updateArrayField(function (array) { return (array || []).concat([cloneDeep(value)]); }, false, false);
        };
        _this.handlePush = function (value) { return function () { return _this.push(value); }; };
        _this.swap = function (indexA, indexB) {
            return _this.updateArrayField(function (array) { return swap(array, indexA, indexB); }, true, true);
        };
        _this.handleSwap = function (indexA, indexB) { return function () {
            return _this.swap(indexA, indexB);
        }; };
        _this.move = function (from, to) {
            return _this.updateArrayField(function (array) { return move(array, from, to); }, true, true);
        };
        _this.handleMove = function (from, to) { return function () { return _this.move(from, to); }; };
        _this.insert = function (index, value) {
            return _this.updateArrayField(function (array) { return insert(array, index, value); }, true, true);
        };
        _this.handleInsert = function (index, value) { return function () { return _this.insert(index, value); }; };
        _this.replace = function (index, value) {
            return _this.updateArrayField(function (array) { return replace(array, index, value); }, false, false);
        };
        _this.handleReplace = function (index, value) { return function () {
            return _this.replace(index, value);
        }; };
        _this.unshift = function (value) {
            var length = -1;
            _this.updateArrayField(function (array) {
                var arr = array ? [value].concat(array) : [value];
                if (length < 0) {
                    length = arr.length;
                }
                return arr;
            }, true, true);
            return length;
        };
        _this.handleUnshift = function (value) { return function () { return _this.unshift(value); }; };
        _this.handleRemove = function (index) { return function () { return _this.remove(index); }; };
        _this.handlePop = function () { return function () { return _this.pop(); }; };
        _this.remove = _this.remove.bind(_this);
        _this.pop = _this.pop.bind(_this);
        return _this;
    }
    FieldArrayInner.prototype.remove = function (index) {
        var result;
        this.updateArrayField(function (array) {
            var copy = array ? array.slice() : [];
            if (!result) {
                result = copy[index];
            }
            if (isFunction(copy.splice)) {
                copy.splice(index, 1);
            }
            return copy;
        }, true, true);
        return result;
    };
    FieldArrayInner.prototype.pop = function () {
        var result;
        this.updateArrayField(function (array) {
            var tmp = array;
            if (!result) {
                result = tmp && tmp.pop && tmp.pop();
            }
            return tmp;
        }, true, true);
        return result;
    };
    FieldArrayInner.prototype.render = function () {
        var arrayHelpers = {
            push: this.push,
            pop: this.pop,
            swap: this.swap,
            move: this.move,
            insert: this.insert,
            replace: this.replace,
            unshift: this.unshift,
            remove: this.remove,
            handlePush: this.handlePush,
            handlePop: this.handlePop,
            handleSwap: this.handleSwap,
            handleMove: this.handleMove,
            handleInsert: this.handleInsert,
            handleReplace: this.handleReplace,
            handleUnshift: this.handleUnshift,
            handleRemove: this.handleRemove,
        };
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children, name = _a.name, _b = _a.formik, _validate = _b.validate, _validationSchema = _b.validationSchema, restOfFormik = tslib_1.__rest(_b, ["validate", "validationSchema"]);
        var props = tslib_1.__assign({}, arrayHelpers, { form: restOfFormik, name: name });
        return component
            ? React.createElement(component, props)
            : render
                ? render(props)
                : children
                    ? typeof children === 'function'
                        ? children(props)
                        : !isEmptyChildren(children) ? React.Children.only(children) : null
                    : null;
    };
    FieldArrayInner.defaultProps = {
        validateOnChange: true,
    };
    return FieldArrayInner;
}(React.Component));
var FieldArray = connect(FieldArrayInner);

var FastFieldInner = (function (_super) {
    tslib_1.__extends(FastFieldInner, _super);
    function FastFieldInner(props) {
        var _this = _super.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component;
        warning(!(component && render), 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored');
        warning(!(component && children && isFunction(children)), 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.');
        warning(!(render && children && !isEmptyChildren(children)), 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored');
        return _this;
    }
    FastFieldInner.prototype.shouldComponentUpdate = function (props) {
        if (this.props.shouldUpdate) {
            return this.props.shouldUpdate(props, this.props);
        }
        else if (getIn(this.props.formik.values, this.props.name) !==
            getIn(props.formik.values, this.props.name) ||
            getIn(this.props.formik.errors, this.props.name) !==
                getIn(props.formik.errors, this.props.name) ||
            getIn(this.props.formik.touched, this.props.name) !==
                getIn(props.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(props).length ||
            this.props.formik.isSubmitting !== props.formik.isSubmitting) {
            return true;
        }
        else {
            return false;
        }
    };
    FastFieldInner.prototype.componentDidMount = function () {
        this.props.formik.registerField(this.props.name, this);
    };
    FastFieldInner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, this);
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, this);
        }
    };
    FastFieldInner.prototype.componentWillUnmount = function () {
        this.props.formik.unregisterField(this.props.name);
    };
    FastFieldInner.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, formik = _a.formik, props = tslib_1.__rest(_a, ["validate", "name", "render", "children", "component", "formik"]);
        var _validate = formik.validate, _validationSchema = formik.validationSchema, restOfFormik = tslib_1.__rest(formik, ["validate", "validationSchema"]);
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        };
        var bag = { field: field, form: restOfFormik };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = tslib_1.__rest(props, ["innerRef"]);
            return React.createElement(component, tslib_1.__assign({ ref: innerRef }, field, rest, { children: children }));
        }
        return React.createElement(component, tslib_1.__assign({}, bag, props, { children: children }));
    };
    return FastFieldInner;
}(React.Component));
var FastField = connect(FastFieldInner);

var ErrorMessageImpl = (function (_super) {
    tslib_1.__extends(ErrorMessageImpl, _super);
    function ErrorMessageImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMessageImpl.prototype.shouldComponentUpdate = function (props) {
        if (getIn(this.props.formik.errors, this.props.name) !==
            getIn(props.formik.errors, this.props.name) ||
            getIn(this.props.formik.touched, this.props.name) !==
                getIn(props.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(props).length) {
            return true;
        }
        else {
            return false;
        }
    };
    ErrorMessageImpl.prototype.render = function () {
        var _a = this.props, component = _a.component, formik = _a.formik, render = _a.render, children = _a.children, name = _a.name, rest = tslib_1.__rest(_a, ["component", "formik", "render", "children", "name"]);
        var touch = getIn(formik.touched, name);
        var error = getIn(formik.errors, name);
        return !!touch && !!error
            ? render
                ? isFunction(render) ? render(error) : null
                : children
                    ? isFunction(children) ? children(error) : null
                    : component
                        ? React.createElement(component, rest, error)
                        : error
            : null;
    };
    return ErrorMessageImpl;
}(React.Component));
var ErrorMessage = connect(ErrorMessageImpl);

exports.Formik = Formik;
exports.yupToFormErrors = yupToFormErrors;
exports.validateYupSchema = validateYupSchema;
exports.Field = Field;
exports.Form = Form;
exports.withFormik = withFormik;
exports.move = move;
exports.swap = swap;
exports.insert = insert;
exports.replace = replace;
exports.FieldArray = FieldArray;
exports.getIn = getIn;
exports.setIn = setIn;
exports.setNestedObjectValues = setNestedObjectValues;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isInteger = isInteger;
exports.isString = isString;
exports.isNaN = isNaN;
exports.isEmptyChildren = isEmptyChildren;
exports.isPromise = isPromise;
exports.getActiveElement = getActiveElement;
exports.makeCancelable = makeCancelable;
exports.FastField = FastField;
exports.FormikProvider = FormikProvider;
exports.FormikConsumer = FormikConsumer;
exports.connect = connect;
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=formik.cjs.development.js.map


/***/ }),

/***/ "./node_modules/formik/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/formik/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./formik.cjs.development.js */ "./node_modules/formik/dist/formik.cjs.development.js");
}

/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};


/***/ }),

/***/ "./node_modules/history/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/history/index.js from dll-reference ./vendor ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/history/index.js");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!************************************************************************************************************************!*\
  !*** delegated ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js from dll-reference ./vendor ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/invariant/invariant.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/invariant/invariant.js");

/***/ }),

/***/ "./node_modules/json-to-url/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/json-to-url/index.js from dll-reference ./vendor ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/json-to-url/index.js");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPath.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/toPath.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/nserializejson/dist/cjs/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/nserializejson/dist/cjs/index.js from dll-reference ./vendor ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/nserializejson/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/nval-tippy/dist/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/nval-tippy/dist/cjs/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/nval-tippy/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/react-dom/server.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/server.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-dom/server.js");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-helmet/lib/Helmet.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-helmet/lib/Helmet.js");

/***/ }),

/***/ "./node_modules/react-paginating/dist/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-paginating/dist/index.js from dll-reference ./vendor ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-paginating/dist/index.js");

/***/ }),

/***/ "./node_modules/react-redux/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-redux/lib/index.js");

/***/ }),

/***/ "./node_modules/react-router-dom/BrowserRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/BrowserRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = BrowserRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/HashRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/HashRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};
exports.default = HashRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router-dom/Link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/history/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Link;

/***/ }),

/***/ "./node_modules/react-router-dom/MemoryRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/MemoryRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MemoryRouter = __webpack_require__(/*! react-router/MemoryRouter */ "./node_modules/react-router/MemoryRouter.js");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/NavLink.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/NavLink.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;

/***/ }),

/***/ "./node_modules/react-router-dom/Prompt.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Prompt.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Prompt = __webpack_require__(/*! react-router/Prompt */ "./node_modules/react-router/Prompt.js");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Redirect.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/Redirect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Redirect = __webpack_require__(/*! react-router/Redirect */ "./node_modules/react-router/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Route.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/Route.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Route = __webpack_require__(/*! react-router/Route */ "./node_modules/react-router/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Router.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Router = __webpack_require__(/*! react-router/Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/StaticRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/StaticRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(/*! react-router/StaticRouter */ "./node_modules/react-router/StaticRouter.js");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Switch.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Switch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Switch = __webpack_require__(/*! react-router/Switch */ "./node_modules/react-router/Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/generatePath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/generatePath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _generatePath = __webpack_require__(/*! react-router/generatePath */ "./node_modules/react-router/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/BrowserRouter.js");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/HashRouter.js");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/NavLink.js");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/generatePath.js");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/matchPath.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/matchPath.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _matchPath = __webpack_require__(/*! react-router/matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/warning/warning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/warning/warning.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/withRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/withRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withRouter = __webpack_require__(/*! react-router/withRouter */ "./node_modules/react-router/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router/MemoryRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/MemoryRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/MemoryRouter.js");

/***/ }),

/***/ "./node_modules/react-router/Prompt.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Prompt.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Prompt.js");

/***/ }),

/***/ "./node_modules/react-router/Redirect.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-router/Redirect.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Redirect.js");

/***/ }),

/***/ "./node_modules/react-router/Route.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Route.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Route.js");

/***/ }),

/***/ "./node_modules/react-router/Router.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Router.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Router.js");

/***/ }),

/***/ "./node_modules/react-router/StaticRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/StaticRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/StaticRouter.js");

/***/ }),

/***/ "./node_modules/react-router/Switch.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Switch.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Switch.js");

/***/ }),

/***/ "./node_modules/react-router/generatePath.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/generatePath.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/generatePath.js");

/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/index.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/index.js");

/***/ }),

/***/ "./node_modules/react-router/matchPath.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/react-router/matchPath.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/matchPath.js");

/***/ }),

/***/ "./node_modules/react-router/withRouter.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-router/withRouter.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/withRouter.js");

/***/ }),

/***/ "./node_modules/react-toastify/lib/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/react-toastify/lib/index.js from dll-reference ./vendor ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-toastify/lib/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/redux-thunk/lib/index.js");

/***/ }),

/***/ "./node_modules/redux/lib/redux.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/redux/lib/redux.js from dll-reference ./vendor ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/redux/lib/redux.js");

/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/tslib/tslib.js":
/*!*************************************!*\
  !*** ./node_modules/tslib/tslib.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/webpack/buildin/module.js");

/***/ }),

/***/ "dll-reference ./vendor":
/*!***************************!*\
  !*** external "./vendor" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL1VpLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvcGVyc29uL1BlcnNvbkVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcFJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvUGFnaW5nQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvVG9wTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvQXV0aG9yaXplZExheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvR3Vlc3RMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9tb2RlbHMvUmVzdWx0LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wYWdlcy9FeGFtcGxlUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3BhZ2VzL0hvbWVQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcGFnZXMvTG9naW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc2VydmljZXMvQWNjb3VudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL1BlcnNvblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL1NlcnZpY2VCYXNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9Mb2dpblN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9QZXJzb25TdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3V0aWxzLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZS9hd2Vzb21lLWRlYm91bmNlLXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpbmQtZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwMy1uYXRpdmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29ubmVjdGVkLXJlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVib3VuY2UtcHJvbWlzZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC91bWQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4td2FpdC9kaXN0L2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2Zvcm1pay5janMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanNvbi10by11cmwvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9jbG9uZURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tZW1vaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uc2VyaWFsaXplanNvbi9kaXN0L2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9udmFsLXRpcHB5L2Rpc3QvY2pzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZhc3QtY29tcGFyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWhlbG1ldC9saWIvSGVsbWV0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXBhZ2luYXRpbmcvZGlzdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL0Jyb3dzZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vSGFzaFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9MaW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL01lbW9yeVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9OYXZMaW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1Byb21wdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9SZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vU3RhdGljUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9nZW5lcmF0ZVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vbWF0Y2hQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vd2l0aFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9NZW1vcnlSb3V0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1Byb21wdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUmVkaXJlY3QuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Sb3V0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3dpdGNoLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9nZW5lcmF0ZVBhdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9tYXRjaFBhdGguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL3dpdGhSb3V0ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvcmVkdXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LXdhcm5pbmcvZGlzdC90aW55LXdhcm5pbmcuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs4UUM5RUE7O0dBR0EsdURBbURDLENBN0NpQixjQUFkLFdBQ0ksS0FBSyxhQUFMLENBQXFCLEtBQXJCLENBQ0EsS0FBSyxJQUFMLENBQVksRUFBWixDQUNILENBSGEsQ0FLQSxhQUFkLFNBQW1CLElBQW5CLENBQXFDLENBQ2pDLEdBQUksS0FBSyxhQUFULENBQXdCLENBQ3BCLEtBQU0sTUFBSyxDQUFDLGlDQUFE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O0FBQ0E7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNsUEQsMkk7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoibWFpbi1zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzeFwiKTtcbiIsImltcG9ydCB7IElTZXJ2aWNlVXNlciB9IGZyb20gXCJATW9kZWxzL0lTZXJ2aWNlVXNlclwiO1xyXG5pbXBvcnQgeyBOU2VyaWFsaXplSnNvbiB9IGZyb20gXCJuc2VyaWFsaXplanNvblwiO1xyXG5pbXBvcnQgeyBJTm9kZVNlc3Npb24gfSBmcm9tIFwiQE1vZGVscy9JTm9kZVNlc3Npb25cIjtcclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBnbG9iYWwgaXNvbW9ycGhpYyBzZXNzaW9uLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFscyB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGRhdGE6IElOb2RlU2Vzc2lvbiA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KGRhdGE6IElOb2RlU2Vzc2lvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJHbG9iYWxzIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGEgPSAoZGF0YSB8fCB7XHJcbiAgICAgICAgICAgIHB1YmxpYzoge30sIHByaXZhdGU6IHt9XHJcbiAgICAgICAgfSkgYXMgSU5vZGVTZXNzaW9uO1xyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFVzZSBkb3Qgbm90YXRpb24gaW4gbmFtZSBvZiB0aGUgZm9ybSBpbnB1dHMuXHJcbiAgICAgICAgTlNlcmlhbGl6ZUpzb24ub3B0aW9ucy51c2VEb3RTZXBhcmF0b3JJblBhdGggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHRocm93SWZOb3RJbml0aWFsaXplZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXplZClcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJHbG9iYWxzIGlzIG5vdCBpbml0aWFsaXplZC4gWW91IGhhdmUgdG8gY2FsbCBTZXNzaW9uLmluaXQgYmVmb3JlLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGEoKTogSU5vZGVTZXNzaW9uIHtcclxuICAgICAgICB0aGlzLnRocm93SWZOb3RJbml0aWFsaXplZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXREYXRhKGRhdGE6IElOb2RlU2Vzc2lvbikge1xyXG4gICAgICAgIHRoaXMudGhyb3dJZk5vdEluaXRpYWxpemVkKCk7XHJcbiAgICAgICAgdmFyIG9sZERhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgdGhpcy5kYXRhID0geyAuLi5vbGREYXRhLCAuLi5kYXRhIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc2VydmljZVVzZXIoKTogSVNlcnZpY2VVc2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhKCkucHVibGljLnNlcnZpY2VVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNlcnZpY2VVc2VyKHNlcnZpY2VVc2VyOiBJU2VydmljZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoeyBwdWJsaWM6IHsgc2VydmljZVVzZXIgfSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZVVzZXIgIT0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7dG9hc3R9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVpIHtcclxuICAgIFxyXG4gICAgc3RhdGljIHNob3dFcnJvcnMoLi4ubWVzc2FnZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWVzc2FnZXMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcih4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICh4IGFzIGFueSkuZm9yRWFjaCgoeTogc3RyaW5nKSA9PiB0b2FzdC5lcnJvcih5KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hvd0luZm8obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdG9hc3QuaW5mbyhtZXNzYWdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZXBsYWNlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcbmltcG9ydCB7IElOb2RlU2Vzc2lvbiB9IGZyb20gXCJATW9kZWxzL0lOb2RlU2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBjb21wbGV0ZWRUYXNrcyB9IGZyb20gXCJkb21haW4td2FpdFwiO1xyXG5cclxudmFyIHJlbmRlckhlbG1ldCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgdmFyIGhlbG1ldERhdGEgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XHJcbiAgICB2YXIgaGVsbWV0U3RyaW5ncyA9IFwiXCI7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gaGVsbWV0RGF0YSkge1xyXG4gICAgICAgIGlmIChoZWxtZXREYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgaGVsbWV0U3RyaW5ncyArPSBoZWxtZXREYXRhW2tleV0udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVsbWV0U3RyaW5ncztcclxufTtcclxuXHJcbnZhciBjcmVhdGVHbG9iYWxzID0gKG5vZGVTZXNzaW9uLCBpbml0aWFsUmVkdXhTdGF0ZSwgaGVsbWV0U3RyaW5ncykgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBub2RlU2Vzc2lvbixcclxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZSxcclxuICAgICAgICBoZWxtZXRTdHJpbmdzXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIoKHBhcmFtcykgPT4ge1xyXG5cclxuICAgIEdsb2JhbHMucmVzZXQoKTtcclxuICAgIEdsb2JhbHMuaW5pdChwYXJhbXMuZGF0YSBhcyBJTm9kZVNlc3Npb24pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW5kZXJSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBSZWR1eCBzdG9yZSB3aXRoIGluLW1lbW9yeSBoaXN0b3J5LCBhbmQgZGlzcGF0Y2ggYSBuYXZpZ2F0aW9uIGV2ZW50LlxyXG4gICAgICAgIC8vIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGluY29taW5nIFVSTC5cclxuICAgICAgICBjb25zdCBiYXNlbmFtZSA9IHBhcmFtcy5iYXNlVXJsLnN1YnN0cmluZygwLCBwYXJhbXMuYmFzZVVybC5sZW5ndGggLSAxKTsgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoLlxyXG4gICAgICAgIGNvbnN0IHVybEFmdGVyQmFzZW5hbWUgPSBwYXJhbXMudXJsLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHVybEFmdGVyQmFzZW5hbWUpKTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHBlcmZvcm0gYW4gaW5pdGFsIHJlbmRlciB0aGF0IHdpbGxcclxuICAgICAgICAvLyBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpbi5cclxuICAgICAgICBjb25zdCByb3V0ZXJDb250ZXh0OiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBhcHAgPSAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPFN0YXRpY1JvdXRlciBiYXNlbmFtZT17YmFzZW5hbWV9IGNvbnRleHQ9e3JvdXRlckNvbnRleHR9IGxvY2F0aW9uPXtwYXJhbXMubG9jYXRpb24ucGF0aH0gY2hpbGRyZW49e3JvdXRlc30gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZW5kZXJBcHAgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVuZGVyQXBwKCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgICAgICBpZiAocm91dGVyQ29udGV4dC51cmwpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybDogcm91dGVyQ29udGV4dC51cmwsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiBjcmVhdGVHbG9iYWxzKHBhcmFtcy5kYXRhLCBzdG9yZS5nZXRTdGF0ZSgpLCByZW5kZXJIZWxtZXQoKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyLlxyXG4gICAgICAgIC8vIFdlIGFsc28gc2VuZCB0aGUgcmVkdXggc3RvcmUgc3RhdGUsIHNvIHRoZSBjbGllbnQgY2FuIGNvbnRpbnVlIGV4ZWN1dGlvbiB3aGVyZSB0aGUgc2VydmVyIGxlZnQgb2ZmLlxyXG4gICAgICAgIHBhcmFtcy5kb21haW5UYXNrcy50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyQXBwKCksXHJcbiAgICAgICAgICAgICAgICBnbG9iYWxzOiBjcmVhdGVHbG9iYWxzKHBhcmFtcy5kYXRhLCBzdG9yZS5nZXRTdGF0ZSgpLCByZW5kZXJIZWxtZXQoKSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0sIHJlamVjdCk7IC8vIEFsc28gcHJvcGFnYXRlIGFueSBlcnJvcnMgYmFjayBpbnRvIHRoZSBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBJUGVyc29uTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JUGVyc29uTW9kZWxcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvRm9ybVwiO1xyXG5pbXBvcnQgeyBGb3JtaWsgfSBmcm9tICdmb3JtaWsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgZGF0YTogSVBlcnNvbk1vZGVsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVsRm9ybTogRm9ybTtcclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGVtcHR5Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbEZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbEZvcm0uZW1wdHlGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxGb3JtaWtcclxuICAgICAgICAgICAgZW5hYmxlUmVpbml0aWFsaXplPXt0cnVlfVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHRoaXMucHJvcHMuZGF0YS5maXJzdE5hbWUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogdGhpcy5wcm9wcy5kYXRhLmxhc3ROYW1lIHx8ICcnXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQmx1cixcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZyxcclxuICAgICAgICAgICAgICAgIC8qIGFuZCBvdGhlciBnb29kaWVzICovXHJcbiAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgcmVmPXt4ID0+IHRoaXMuZWxGb3JtID0geH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgZGVmYXVsdFZhbHVlPXsodGhpcy5wcm9wcy5kYXRhLmlkIHx8IDApLnRvU3RyaW5nKCl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgcmVxdWlyZWRcIiBodG1sRm9yPVwicGVyc29uX19maXJzdE5hbWVcIj5GaXJzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGVyc29uX19maXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiZmlyc3ROYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbXNnLXJlcXVpcmVkPVwiRmlyc3QgbmFtZSBpcyByZXF1aXJlZC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgcmVxdWlyZWRcIiBodG1sRm9yPVwicGVyc29uX19sYXN0TmFtZVwiPkxhc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcnNvbl9fbGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wibGFzdE5hbWVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlLXR5cGU9XCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsLXJlcXVpcmVkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tc2ctcmVxdWlyZWQ9XCJMYXN0IG5hbWUgaXMgcmVxdWlyZWQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPil9XHJcbiAgICAgICAgPC9Gb3JtaWs+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNvbXBvbmVudCBjb250YWlucyBoZWxwZnVsIG1ldGhvZCB3aGljaFxyXG4gKiBhbGxvd3MgeW91IHRvIG1ha2UgXCJmb3JjZSB1cGRhdGVcIiBvZiB0aGUgc3R1Y2sgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBcHBDb21wb25lbnQ8VFByb3BzID0ge30sIFRTdGF0ZSA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUUHJvcHMsIFRTdGF0ZT4ge1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIFBsYWNlIGl0IGludG8gdGhlIFwia2V5XCIgYXR0cmlidXRlIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZW5kZXJLZXkgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbCB0aGlzIGlmIGNvbXBvbmVudCBzdGF0ZSBpcyBzdHVjay5cclxuICAgICAqIEJ1dCB5b3Ugc2hvdWxkIHNldCB0aGUgcmVuZGVyS2V5IHRvIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlLlxyXG4gICAgICovXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGZvcmNlVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyS2V5ID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFJvdXRlLCBSb3V0ZVByb3BzLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSb3V0ZVByb3BzIHtcclxuICAgIGxheW91dDogUmVhY3QuQ29tcG9uZW50Q2xhc3M8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFJvdXRlID0gKHsgY29tcG9uZW50OiBDb21wb25lbnQsIGxheW91dDogTGF5b3V0LCBwYXRoOiBQYXRoLCAuLi5yZXN0IH06IElQcm9wcykgPT4ge1xyXG5cclxuICAgIHZhciBpc0xvZ2luUGF0aCA9IFBhdGggPT09IFwiL2xvZ2luXCI7XHJcbiAgICBpZiAoIUdsb2JhbHMuaXNBdXRoZW50aWNhdGVkICYmICFpc0xvZ2luUGF0aCkge1xyXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvbG9naW5cIiAvPjtcclxuICAgIH1cclxuICAgIGlmIChHbG9iYWxzLmlzQXV0aGVudGljYXRlZCAmJiBpc0xvZ2luUGF0aCkge1xyXG4gICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxSb3V0ZSB7Li4ucmVzdH0gcmVuZGVyPXtwcm9wcyA9PiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApfSAvPjtcclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxwPlZpZXcgb24gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9OaWNrTWFldi9yZWFjdC1jb3JlLWJvaWxlcnBsYXRlXCI+R2l0SHViPC9hPjwvcD5cclxuICAgICAgICAgICAgPHA+Q29weXJpZ2h0IChjKSAyMDE4IE5pa29sYXkgTWFldjwvcD5cclxuICAgICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlXCI+TUlUIExpY2Vuc2U8L2E+PC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPjtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOU2VyaWFsaXplSnNvbiB9IGZyb20gXCJuc2VyaWFsaXplanNvblwiO1xyXG5pbXBvcnQgeyBlbXB0eUZvcm0gfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCB7IE5WYWxUaXBweSB9IGZyb20gXCJudmFsLXRpcHB5XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuRm9ybUhUTUxBdHRyaWJ1dGVzPEhUTUxGb3JtRWxlbWVudD4sIEhUTUxGb3JtRWxlbWVudD4ge1xyXG4gICAgY2hpbGRyZW46IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRvcjogTlZhbFRpcHB5O1xyXG4gICAgcHJvdGVjdGVkIGVsRm9ybTogSFRNTEZvcm1FbGVtZW50O1xyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuaXNWYWxpZCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGVtcHR5Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICBlbXB0eUZvcm0odGhpcy5lbEZvcm0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGdldERhdGE8VD4oKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIE5TZXJpYWxpemVKc29uLnNlcmlhbGl6ZUZvcm0odGhpcy5lbEZvcm0pIGFzIGFueSBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IE5WYWxUaXBweSh0aGlzLmVsRm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Zm9ybSB7Li4udGhpcy5wcm9wc30gcmVmPXt4ID0+IHRoaXMuZWxGb3JtID0geH0+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9mb3JtPjtcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvbG9hZGVyLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlzTm9kZSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IEFwcENvbXBvbmVudCBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0FwcENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgc2hvdzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVyIGV4dGVuZHMgQXBwQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBjc3MgPSB7XCJkaXNwbGF5XCI6IFwibm9uZVwifTtcclxuXHJcbiAgICAgICAgaWYgKCFpc05vZGUoKSkge1xyXG4gICAgICAgICAgICBjc3MgPSB7IFwiZGlzcGxheVwiOiAodGhpcy5wcm9wcy5zaG93ID8gXCJibG9ja1wiIDogXCJub25lXCIpIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGtleT17dGhpcy5yZW5kZXJLZXl9IGNsYXNzTmFtZT1cImxvYWRlci1iZ1wiIHN0eWxlPXtjc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTIgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTMgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTQgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTUgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTYgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTcgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTggc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTkgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEwIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxMSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMTIgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwMy1uYXRpdmVcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdGl0bGU6IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB8IGFueTtcclxuICAgIGJ1dHRvbnM/OiBhbnk7XHJcbiAgICBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB8IGFueTtcclxuICAgIG9uU2hvdz86ICgpID0+IHZvaWQ7XHJcbiAgICBvbkhpZGU/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBtb2RhbFBsdWdpbjogTW9kYWw7XHJcbiAgICBwcm90ZWN0ZWQgZWxNb2RhbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBzaG93KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxQbHVnaW4uc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luID0gbmV3IE1vZGFsKHRoaXMuZWxNb2RhbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25TaG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwic2hvdy5icy5tb2RhbFwiIGFzIGFueSwgKCkgPT4gdGhpcy5wcm9wcy5vblNob3coKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uSGlkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImhpZGUuYnMubW9kYWxcIiBhcyBhbnksICgpID0+IHRoaXMucHJvcHMub25IaWRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIHRhYkluZGV4PXstMX0gcm9sZT1cImRpYWxvZ1wiIHJlZj17eCA9PiB0aGlzLmVsTW9kYWwgPSB4fT5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCBQYWdpbmF0aW9uLCB7IFBhZ2luYXRpb25Qcm9wcyB9IGZyb20gXCJyZWFjdC1wYWdpbmF0aW5nXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0b3RhbFJlc3VsdHM6IG51bWJlcjtcclxuICAgIGxpbWl0UGVyUGFnZTogbnVtYmVyO1xyXG4gICAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICAgIG9uQ2hhbmdlUGFnZTogKHBhZ2VOdW06IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuLyogQmVsb3cgY29kZSBvZiB0aGUgJ1BhZ2luYXRpb24nIGNvbXBvbmVudCB3YXMgdGFrZW4gXHJcbmZyb20gdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9DaG9Ub3RPU1MvcmVhY3QtcGFnaW5hdGluZyBcclxuYW5kIHJlbWFrZWQgZm9yIHRoZSBCb290c3RyYXAgc3R5bGUuICovXHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5nQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZWxGaXJzdFBhZ2VCdG46IEhUTUxFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGVsTGFzdFBhZ2VCdG46IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgc2V0Rmlyc3RQYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxGaXJzdFBhZ2VCdG4uY2xpY2soKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBzZXRMYXN0UGFnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsTGFzdFBhZ2VCdG4uY2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIHRvdGFsPXt0aGlzLnByb3BzLnRvdGFsUmVzdWx0c31cclxuICAgICAgICAgICAgbGltaXQ9e3RoaXMucHJvcHMubGltaXRQZXJQYWdlfVxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZT17dGhpcy5wcm9wcy5jdXJyZW50UGFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXMsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgIGhhc05leHRQYWdlLFxyXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICAgICAgbmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0UGFnZUl0ZW1Qcm9wc1xyXG4gICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ggPT4gdGhpcy5lbEZpcnN0UGFnZUJ0biA9IHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNQcmV2aW91c1BhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IHByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JzwnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwYWdlfSBjbGFzc05hbWU9e3BhZ2UgPT09IGN1cnJlbnRQYWdlID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNOZXh0UGFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiBuZXh0UGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Jz4nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRQYWdlSXRlbVByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiB0b3RhbFBhZ2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2VQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWxMYXN0UGFnZUJ0biA9IHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9QYWdpbmF0aW9uPlxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdkxpbmssIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcbmltcG9ydCBBY2NvdW50U2VydmljZSBmcm9tIFwiQFNlcnZpY2VzL0FjY291bnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyb3Bkb3duLCBDb2xsYXBzZSB9IGZyb20gXCJib290c3RyYXAzLW5hdGl2ZVwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcblxyXG5jbGFzcyBUb3BNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7IGxvZ291dEFjdGlvbjogYm9vbGVhbiB9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbG9nb3V0QWN0aW9uOiBmYWxzZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBhc3luYyBvbkNsaWNrU2lnbk91dChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50Pikge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgQWNjb3VudFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ291dEFjdGlvbjogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVsRHJvcGRvd246IEhUTUxBbmNob3JFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBlbENvbGxhcHNlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgZHJvcGRvd24gPSBuZXcgRHJvcGRvd24odGhpcy5lbERyb3Bkb3duKTtcclxuICAgICAgICB2YXIgY29sbGFwc2UgPSBuZXcgQ29sbGFwc2UodGhpcy5lbENvbGxhcHNlQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvZ291dEFjdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+O1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gcmVmPXt4ID0+IHRoaXMuZWxDb2xsYXBzZUJ1dHRvbiA9IHh9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlJDQjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIGV4YWN0IHRvPXsnLyd9IGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiPkhvbWU8L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIGV4YWN0IHRvPXsnL2V4YW1wbGUnfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5FeGFtcGxlPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiByZWY9e3ggPT4gdGhpcy5lbERyb3Bkb3duID0geH0gY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHbG9iYWxzLnNlcnZpY2VVc2VyLmxvZ2lufSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmV0XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTaWduT3V0fT5TaWduIG91dDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihUb3BNZW51IGFzIGFueSk7IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBTdG9yZUVuaGFuY2VyLCBTdG9yZSwgU3RvcmVFbmhhbmNlclN0b3JlQ3JlYXRvciwgUmVkdWNlcnNNYXBPYmplY3QgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUsIExPQ0FUSU9OX0NIQU5HRSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xyXG4vL3ZhciByb3V0ZXJSZWR1Y2VyID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvbGliL3JlZHVjZXJcIik7XHJcbi8vaW1wb3J0IHtyb3V0ZXJSZWR1Y2VyfSBmcm9tIFwicmVhY3Qtcm91dGVyLXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIFN0b3JlTW9kdWxlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlLCByZWR1Y2VycyB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gYXMgKCkgPT4gU3RvcmVFbmhhbmNlcjtcclxuICAgIGNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBjb21wb3NlKFxyXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2VycywgaGlzdG9yeSk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSBhcyBhbnkpIGFzIFN0b3JlPEFwcGxpY2F0aW9uU3RhdGU+O1xyXG5cclxuICAgIC8vIEVuYWJsZSBXZWJwYWNrIGhvdCBtb2R1bGUgcmVwbGFjZW1lbnQgZm9yIHJlZHVjZXJzXHJcbiAgICBpZiAobW9kdWxlLmhvdCkge1xyXG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3N0b3JlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0Um9vdFJlZHVjZXIgPSByZXF1aXJlPHR5cGVvZiBTdG9yZU1vZHVsZT4oJy4vc3RvcmUnKTtcclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIoYnVpbGRSb290UmVkdWNlcihuZXh0Um9vdFJlZHVjZXIucmVkdWNlcnMsIGhpc3RvcnkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbmNvbnN0IHJvdXRlclJlZHVjZXIgPSAoaGlzdG9yeSkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxyXG4gICAgICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYXJnOiBhbnkgPSB7fSkgPT4ge1xyXG4gICAgICAgIGlmIChhcmcudHlwZSA9PT0gTE9DQVRJT05fQ0hBTkdFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hcmcucGF5bG9hZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBidWlsZFJvb3RSZWR1Y2VyKGFsbFJlZHVjZXJzOiBSZWR1Y2Vyc01hcE9iamVjdCwgaGlzdG9yeSkge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVSZWR1Y2VyczxBcHBsaWNhdGlvblN0YXRlPih7Li4uYWxsUmVkdWNlcnMsIC4uLnsgcm91dGVyOiByb3V0ZXJSZWR1Y2VyKGhpc3RvcnkpIH19IGFzIGFueSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDFiNjFlYmZlZTI5ZTQ3MDg1MGVkMmQyZDg4OWUzM2YucG5nXCI7IiwiaW1wb3J0IFRvcE1lbnUgZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Ub3BNZW51XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAU3R5bGVzL2F1dGhvcml6ZWRMYXlvdXQuc2Nzc1wiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvRm9vdGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gSVByb3BzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXplZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywge30+IHtcclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPVwiYXV0aG9yaXplZExheW91dFwiIGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgICAgICA8VG9wTWVudSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvZ3Vlc3RMYXlvdXQuc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBhbnk7XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBJUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPGFueT4gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3Vlc3RMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cImd1ZXN0TGF5b3V0XCIgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0PFQ+IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogVDtcclxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGdldCBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmVycm9ycykgJiYgdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCwgLi4uZXJyb3JzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yc1swXSA9PSB1bmRlZmluZWQgfHwgZXJyb3JzWzBdID09IG51bGwgPyBbXSA6IGVycm9ycztcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5pbXBvcnQgeyBQZXJzb25TdG9yZSB9IGZyb20gXCJAU3RvcmUvUGVyc29uU3RvcmVcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tIFwiQFN0b3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGFnaW5nQmFyIH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9QYWdpbmdCYXJcIjtcclxuaW1wb3J0IFBlcnNvbkVkaXRvciBmcm9tIFwiQENvbXBvbmVudHMvcGVyc29uL1BlcnNvbkVkaXRvclwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvTG9hZGVyXCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL01vZGFsQ29tcG9uZW50XCI7XHJcbmltcG9ydCBBd2Vzb21lRGVib3VuY2VQcm9taXNlIGZyb20gXCJhd2Vzb21lLWRlYm91bmNlLXByb21pc2VcIjtcclxuaW1wb3J0IHsgZ2V0UHJvbWlzZUZyb21BY3Rpb24gfSBmcm9tIFwiQFV0aWxzXCI7XHJcblxyXG50eXBlIFByb3BzID0gUm91dGVDb21wb25lbnRQcm9wczx7fT4gJiB0eXBlb2YgUGVyc29uU3RvcmUuYWN0aW9uQ3JlYXRvcnMgJiBQZXJzb25TdG9yZS5JU3RhdGU7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgIHNlYXJjaFRlcm06IHN0cmluZztcclxuICAgIHBhZ2VOdW06IG51bWJlcjtcclxuICAgIGxpbWl0UGVyUGFnZTogbnVtYmVyO1xyXG4gICAgcm93T2Zmc2V0OiBudW1iZXI7XHJcbiAgICBtb2RlbEZvckVkaXQ6IElQZXJzb25Nb2RlbDtcclxufVxyXG5cclxuXHJcbmNsYXNzIEV4YW1wbGVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBJU3RhdGU+IHtcclxuXHJcbiAgICBwcml2YXRlIHBhZ2luZ0JhcjogUGFnaW5nQmFyO1xyXG5cclxuICAgIHByaXZhdGUgZWxNb2RhbEFkZDogTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGVsTW9kYWxFZGl0OiBNb2RhbENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZWxNb2RhbERlbGV0ZTogTW9kYWxDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBwZXJzb25FZGl0b3JBZGQ6IFBlcnNvbkVkaXRvcjtcclxuICAgIHByaXZhdGUgcGVyc29uRWRpdG9yRWRpdDogUGVyc29uRWRpdG9yO1xyXG5cclxuICAgIHByaXZhdGUgZGVib3VuY2VkU2VhcmNoOiAodGVybTogc3RyaW5nKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VhcmNoVGVybTogXCJcIixcclxuICAgICAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICAgICAgbGltaXRQZXJQYWdlOiA1LFxyXG4gICAgICAgICAgICByb3dPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIG1vZGVsRm9yRWRpdDoge31cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRlYm91bmNlZFNlYXJjaCA9IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UoKHRlcm06IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5zZWFyY2hSZXF1ZXN0KHRlcm0pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2VhcmNoUmVxdWVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsTW9kYWxBZGQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsQWRkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWxNb2RhbEVkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsRWRpdC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVsTW9kYWxEZWxldGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsRGVsZXRlLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2hhbmdlUGFnZShwYWdlTnVtOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcm93T2Zmc2V0ID0gTWF0aC5jZWlsKChwYWdlTnVtIC0gMSkgKiB0aGlzLnN0YXRlLmxpbWl0UGVyUGFnZSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhZ2VOdW0sIHJvd09mZnNldCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1Nob3dBZGRNb2RhbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbEFkZC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tTaG93RWRpdE1vZGFsKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBtb2RlbEZvckVkaXQ6IElQZXJzb25Nb2RlbCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQgfSk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRWRpdC5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tTaG93RGVsZXRlTW9kYWwoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIG1vZGVsRm9yRWRpdDogSVBlcnNvbk1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsRm9yRWRpdCB9KTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxEZWxldGUuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBhc3luYyBvbkNsaWNrUGVyc29uRWRpdG9yQWRkX19zYXZlQnRuKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMucGVyc29uRWRpdG9yQWRkLmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgLy8gRm9ybSBpcyBub3QgdmFsaWQuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPVxyXG4gICAgICAgICAgICBhd2FpdCBnZXRQcm9taXNlRnJvbUFjdGlvbihcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkUmVxdWVzdCh0aGlzLnBlcnNvbkVkaXRvckFkZC5lbEZvcm0uZ2V0RGF0YSgpKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmdCYXIuc2V0TGFzdFBhZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsQWRkLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIGFzeW5jIG9uQ2xpY2tQZXJzb25FZGl0b3JFZGl0X19zYXZlQnRuKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBlcnNvbkVkaXRvckVkaXQuZWxGb3JtLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICAvLyBGb3JtIGlzIG5vdCB2YWxpZC5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnBlcnNvbkVkaXRvckVkaXQuZWxGb3JtLmdldERhdGEoKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IGdldFByb21pc2VGcm9tQWN0aW9uKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVJlcXVlc3QoZGF0YSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsRWRpdC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrUGVyc29uRWRpdG9yRGVsZXRlX19zYXZlQnRuKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVSZXF1ZXN0KHRoaXMuc3RhdGUubW9kZWxGb3JFZGl0LmlkKTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxEZWxldGUuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICByZW5kZXJSb3cocGVyc29uOiBJUGVyc29uTW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gPHRyIGtleT17cGVyc29uLmlkfT5cclxuICAgICAgICAgICAgPHRkPntwZXJzb24uZmlyc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cGVyc29uLmxhc3ROYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgb25DbGljaz17eCA9PiB0aGlzLm9uQ2xpY2tTaG93RWRpdE1vZGFsKHgsIHBlcnNvbil9PkVkaXQ8L2J1dHRvbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt4ID0+IHRoaXMub25DbGlja1Nob3dEZWxldGVNb2RhbCh4LCBwZXJzb24pfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPjtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgcmVuZGVyUm93cyhkYXRhOiBJUGVyc29uTW9kZWxbXSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIC5zbGljZSh0aGlzLnN0YXRlLnJvd09mZnNldCwgdGhpcy5zdGF0ZS5yb3dPZmZzZXQgKyB0aGlzLnN0YXRlLmxpbWl0UGVyUGFnZSlcclxuICAgICAgICAgICAgLm1hcCh4ID0+IHRoaXMucmVuZGVyUm93KHgpKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DaGFuZ2VTZWFyY2hJbnB1dChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xyXG4gICAgICAgIHZhciB2YWwgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRTZWFyY2godmFsKTtcclxuICAgICAgICB0aGlzLnBhZ2luZ0Jhci5zZXRGaXJzdFBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkV4YW1wbGUgLSBSQ0I8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuXHJcbiAgICAgICAgICAgIDxMb2FkZXIgc2hvdz17dGhpcy5wcm9wcy5pbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmd9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keSByb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5vbkNsaWNrU2hvd0FkZE1vZGFsfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiU2VhcmNoIGZvciBwZW9wbGUuLi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IG5hbWU8L3RoPjx0aD5MYXN0IG5hbWU8L3RoPjx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvd3ModGhpcy5wcm9wcy5wZW9wbGUpfVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBBZGQgbW9kYWwgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWxNb2RhbEFkZCA9IHh9XHJcbiAgICAgICAgICAgICAgICBidXR0b25zPXs8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tQZXJzb25FZGl0b3JBZGRfX3NhdmVCdG59PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHBlcnNvblwiXHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzb25FZGl0b3JBZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzb25FZGl0b3JBZGQuZW1wdHlGb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uRWRpdG9yIHJlZj17eCA9PiB0aGlzLnBlcnNvbkVkaXRvckFkZCA9IHh9IGRhdGE9e3t9fSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsQ29tcG9uZW50PlxyXG5cclxuICAgICAgICAgICAgey8qIEVkaXQgbW9kYWwgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWxNb2RhbEVkaXQgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vbkNsaWNrUGVyc29uRWRpdG9yRWRpdF9fc2F2ZUJ0bn0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BFZGl0IHBlcnNvbjogJHt0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5maXJzdE5hbWV9ICR7dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQubGFzdE5hbWV9YH1cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlcnNvbkVkaXRvckVkaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsRm9yRWRpdDoge30gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8UGVyc29uRWRpdG9yIHJlZj17eCA9PiB0aGlzLnBlcnNvbkVkaXRvckVkaXQgPSB4fSBkYXRhPXt0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdH0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbENvbXBvbmVudD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZWxldGUgbW9kYWwgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWxNb2RhbERlbGV0ZSA9IHh9XHJcbiAgICAgICAgICAgICAgICBidXR0b25zPXs8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1BlcnNvbkVkaXRvckRlbGV0ZV9fc2F2ZUJ0bn0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17YERlbGV0ZSBwZXJzb246ICR7dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuZmlyc3ROYW1lfSAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0Lmxhc3ROYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPHA+RG8geW91IHJlYWxseSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBlcnNvbj88L3A+XHJcbiAgICAgICAgICAgIDwvTW9kYWxDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgICA8UGFnaW5nQmFyXHJcbiAgICAgICAgICAgICAgICByZWY9e3ggPT4gdGhpcy5wYWdpbmdCYXIgPSB4fVxyXG4gICAgICAgICAgICAgICAgdG90YWxSZXN1bHRzPXt0aGlzLnByb3BzLnBlb3BsZS5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICBsaW1pdFBlclBhZ2U9e3RoaXMuc3RhdGUubGltaXRQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e3RoaXMuc3RhdGUucGFnZU51bX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17dGhpcy5vbkNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY29tcG9uZW50ID0gY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUucGVyc29uLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wcy5cclxuICAgIFBlcnNvblN0b3JlLmFjdGlvbkNyZWF0b3JzIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHMuXHJcbikoRXhhbXBsZVBhZ2UgYXMgYW55KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh3aXRoUm91dGVyKGNvbXBvbmVudCBhcyBhbnkpIGFzIGFueSBhcyB0eXBlb2YgRXhhbXBsZVBhZ2UpIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIkBJbWFnZXMvbG9nby5wbmdcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkhvbWUgcGFnZSAtIFJDQjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt7XCJtYXJnaW5cIjogXCIwIGF1dG9cIiwgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiwgXCJ3aWR0aFwiOiBcIjEwMCVcIn19IHNyYz17bG9nb30gLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3tcImZvbnRTaXplXCI6IFwiNTJweFwifX0+SGFwcHkgY29kaW5nITwvcD5cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUxvZ2luTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JTG9naW5Nb2RlbFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvTG9hZGVyXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQFN0b3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IExvZ2luU3RvcmUgfSBmcm9tIFwiQFN0b3JlL0xvZ2luU3RvcmVcIjtcclxuaW1wb3J0IFwiQFN0eWxlcy9tYWluLnNjc3NcIjs7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlQ29tcG9uZW50UHJvcHMsIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvRm9ybVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM8e30+ICYgdHlwZW9mIExvZ2luU3RvcmUuYWN0aW9uQ3JlYXRvcnMgJiBMb2dpblN0b3JlLklTdGF0ZTtcclxuXHJcbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxMb2FkZXI6IExvYWRlcjtcclxuICAgIGVsRm9ybTogRm9ybTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByb3BzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5lbExvYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmVsTG9hZGVyLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwcml2YXRlIGFzeW5jIG9uQ2xpY2tTdWJtaXRCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxGb3JtLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZWxGb3JtLmdldERhdGE8SUxvZ2luTW9kZWw+KCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubG9naW5SZXF1ZXN0KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmluZGljYXRvcnMubG9naW5TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIvPjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPVwibG9naW5QYWdlXCI+XHJcblxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luIHBhZ2UgLSBSQ0I8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMb2FkZXIgcmVmPXt4ID0+IHRoaXMuZWxMb2FkZXIgPSB4fSBzaG93PXt0aGlzLnByb3BzLmluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZ30gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpbkNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+VHlwZSBhbnkgbG9naW4gYW5kIHBhc3N3b3JkIHRvIGVudGVyLjwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybSByZWY9e3ggPT4gdGhpcy5lbEZvcm0gPSB4fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dExvZ2luXCI+TG9naW48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcImxvZ2luXCJ9IGRhdGEtdmFsdWUtdHlwZT1cInN0cmluZ1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaW5wdXRMb2dpblwiIGRhdGEtdmFsLXJlcXVpcmVkPVwidHJ1ZVwiIGRhdGEtbXNnLXJlcXVpcmVkPVwiTG9naW4gaXMgcmVxdWlyZWQuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnB1dExvZ2luXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT17XCJwYXNzd29yZFwifSBkYXRhLXZhbHVlLXR5cGU9XCJzdHJpbmdcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlucHV0UGFzc3dvcmRcIiBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIiBkYXRhLW1zZy1yZXF1aXJlZD1cIlBhc3N3b3JkIGlzIHJlcXVpcmVkLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja1N1Ym1pdEJ0bn0+U2lnbiBpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgY29tcG9uZW50ID0gY29ubmVjdChcclxuICAgIChzdGF0ZTogQXBwbGljYXRpb25TdGF0ZSkgPT4gc3RhdGUubG9naW4sIC8vIFNlbGVjdHMgd2hpY2ggc3RhdGUgcHJvcGVydGllcyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbiAgICBMb2dpblN0b3JlLmFjdGlvbkNyZWF0b3JzIC8vIFNlbGVjdHMgd2hpY2ggYWN0aW9uIGNyZWF0b3JzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuKShMb2dpblBhZ2UgYXMgYW55KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh3aXRoUm91dGVyKGNvbXBvbmVudCBhcyBhbnkpIGFzIGFueSBhcyB0eXBlb2YgTG9naW5QYWdlKSIsImltcG9ydCBBdXRob3JpemVkTGF5b3V0IGZyb20gJ0BMYXlvdXRzL0F1dGhvcml6ZWRMYXlvdXQnO1xyXG5pbXBvcnQgR3Vlc3RMYXlvdXQgZnJvbSBcIkBMYXlvdXRzL0d1ZXN0TGF5b3V0XCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnQFBhZ2VzL0xvZ2luUGFnZSc7XHJcbmltcG9ydCB7IEFwcFJvdXRlIH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9BcHBSb3V0ZVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnQFBhZ2VzL0hvbWVQYWdlJztcclxuaW1wb3J0IEV4YW1wbGVQYWdlIGZyb20gJ0BQYWdlcy9FeGFtcGxlUGFnZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gPFN3aXRjaD5cclxuICAgIDxBcHBSb3V0ZSBsYXlvdXQ9e0d1ZXN0TGF5b3V0fSBleGFjdCBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpblBhZ2V9IC8+XHJcbiAgICA8QXBwUm91dGUgbGF5b3V0PXtBdXRob3JpemVkTGF5b3V0fSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICA8QXBwUm91dGUgbGF5b3V0PXtBdXRob3JpemVkTGF5b3V0fSBleGFjdCBwYXRoPVwiL2V4YW1wbGVcIiBjb21wb25lbnQ9e0V4YW1wbGVQYWdlfSAvPlxyXG48L1N3aXRjaD47IiwiaW1wb3J0IHsgSUxvZ2luTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JTG9naW5Nb2RlbFwiO1xyXG5pbXBvcnQgeyBJU2VydmljZVVzZXIgfSBmcm9tIFwiQE1vZGVscy9JU2VydmljZVVzZXJcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiQE1vZGVscy9SZXN1bHRcIjtcclxuaW1wb3J0IHsgU2VydmljZUJhc2UgfSBmcm9tIFwiLi9TZXJ2aWNlQmFzZVwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiQEdsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnRTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgYXN5bmMgbG9naW4obG9naW5Nb2RlbDogSUxvZ2luTW9kZWwpIDogUHJvbWlzZTxSZXN1bHQ8SVNlcnZpY2VVc2VyPj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uPElTZXJ2aWNlVXNlcj4oe1xyXG4gICAgICAgICAgICB1cmw6IFwiYXBpL0FjY291bnQvTG9naW5cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogbG9naW5Nb2RlbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgR2xvYmFscy5zZXJ2aWNlVXNlciA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlPFJlc3VsdDx7fT4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxJU2VydmljZVVzZXI+KHtcclxuICAgICAgICAgICAgdXJsOiBcImFwaS9BY2NvdW50L0xvZ291dFwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBHbG9iYWxzLnNlcnZpY2VVc2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTZXJ2aWNlQmFzZSB9IGZyb20gXCJAU2VydmljZXMvU2VydmljZUJhc2VcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiQE1vZGVscy9SZXN1bHRcIjtcclxuaW1wb3J0IHsgSVBlcnNvbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSVBlcnNvbk1vZGVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25TZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZWFyY2godGVybTogc3RyaW5nID0gbnVsbCk6IFByb21pc2U8UmVzdWx0PElQZXJzb25Nb2RlbFtdPj4ge1xyXG4gICAgICAgIGlmICh0ZXJtID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGVybSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uPElQZXJzb25Nb2RlbFtdPih7XHJcbiAgICAgICAgICAgIHVybDogYC9hcGkvUGVyc29uL1NlYXJjaD90ZXJtPSR7dGVybX1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB1cGRhdGUobW9kZWw6IElQZXJzb25Nb2RlbCk6IFByb21pc2U8UmVzdWx0PHt9Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uKHtcclxuICAgICAgICAgICAgdXJsOiBgL2FwaS9QZXJzb24vJHttb2RlbC5pZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgZGF0YTogbW9kZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8UmVzdWx0PHt9Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uKHtcclxuICAgICAgICAgICAgdXJsOiBgL2FwaS9QZXJzb24vJHtpZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhZGQobW9kZWw6IElQZXJzb25Nb2RlbCk6IFByb21pc2U8UmVzdWx0PG51bWJlcj4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxudW1iZXI+KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvUGVyc29uL0FkZFwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBtb2RlbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVaSB9IGZyb20gXCJAVWlcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiQE1vZGVscy9SZXN1bHRcIjtcclxuaW1wb3J0IEF4aW9zLCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1VcmwgfSBmcm9tIFwiZG9tYWluLXdhaXRcIjtcclxuaW1wb3J0IGpzb25Ub1VybCBmcm9tIFwianNvbi10by11cmxcIjtcclxuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIkBVdGlsc1wiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiQEdsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcXVlc3RPcHRpb25zIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgZGF0YT86IGFueTtcclxuICAgIG1ldGhvZDogXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiUEFUQ0hcIiB8IFwiREVMRVRFXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbmRGb3JtRGF0YU9wdGlvbnMge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBGb3JtRGF0YTtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBiYXNlIGNsYXNzIG9mIHRoZSBpc29tb3JwaGljIHNlcnZpY2UuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VydmljZUJhc2Uge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSByZXF1ZXN0IHdpdGggSlNPTiBkYXRhLlxyXG4gICAgICogQHBhcmFtIG9wdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZXF1ZXN0SnNvbjxUPihvcHRzOiBJUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPFJlc3VsdDxUPj4ge1xyXG5cclxuICAgICAgICB2YXIgYXhpb3NSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG5cclxuICAgICAgICBvcHRzLnVybCA9IHRyYW5zZm9ybVVybChvcHRzLnVybCk7IC8vIEFsbG93IHJlcXVlc3RzIGFsc28gZm9yIE5vZGUuXHJcblxyXG4gICAgICAgIHZhciBwcm9jZXNzUXVlcnkgPSAodXJsOiBzdHJpbmcsIGRhdGE6IGFueSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dXJsfT8ke2pzb25Ub1VybChkYXRhKX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGF4aW9zUmVxdWVzdENvbmZpZyA6IEF4aW9zUmVxdWVzdENvbmZpZztcclxuXHJcbiAgICAgICAgaWYgKGlzTm9kZSgpKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZWQgZm9yIFNTUiByZXF1ZXN0cyBmcm9tIHRoZSB3ZWIgc2VydmVyIHRvIE5vZGVTZXJ2aWNlcy5cclxuICAgICAgICAgICAgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZTogR2xvYmFscy5nZXREYXRhKCkucHJpdmF0ZS5jb29raWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3dpdGNoIChvcHRzLm1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MuZ2V0KHByb2Nlc3NRdWVyeShvcHRzLnVybCwgb3B0cy5kYXRhKSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wb3N0KG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wdXQob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucGF0Y2gob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLmRlbGV0ZShwcm9jZXNzUXVlcnkob3B0cy51cmwsIG9wdHMuZGF0YSksIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChheGlvc1Jlc3VsdC5kYXRhLnZhbHVlLCAuLi5heGlvc1Jlc3VsdC5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChudWxsLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIFVpLnNob3dFcnJvcnMoLi4ucmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBzZW5kIGZpbGVzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0gb3B0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNlbmRGb3JtRGF0YTxUPihvcHRzOiBJU2VuZEZvcm1EYXRhT3B0aW9ucyk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XHJcbiAgICAgICAgdmFyIGF4aW9zUmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgb3B0cy51cmwgPSB0cmFuc2Zvcm1Vcmwob3B0cy51cmwpOyAvLyBBbGxvdyByZXF1ZXN0cyBhbHNvIGZvciBOb2RlLlxyXG5cclxuICAgICAgICB2YXIgYXhpb3NPcHRzID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMubWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucG9zdChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc09wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucHV0KG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zT3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUEFUQ0hcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnBhdGNoKG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zT3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChheGlvc1Jlc3VsdC5kYXRhLnZhbHVlLCAuLi5heGlvc1Jlc3VsdC5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChudWxsLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIFVpLnNob3dFcnJvcnMoLi4ucmVzdWx0LmVycm9ycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUxvZ2luTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JTG9naW5Nb2RlbFwiO1xyXG5pbXBvcnQgeyBJU2VydmljZVVzZXIgfSBmcm9tIFwiQE1vZGVscy9JU2VydmljZVVzZXJcIjtcclxuaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgQWNjb3VudFNlcnZpY2UgZnJvbSBcIkBTZXJ2aWNlcy9BY2NvdW50U2VydmljZVwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIExvZ2luU3RvcmUge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgICAgICBpbmRpY2F0b3JzOiB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICAgICAgICAgIGxvZ2luU3VjY2VzczogYm9vbGVhbjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEFjdGlvbnMge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFlvdSBuZWVkIHRvIGhhdmUgdGhlIGluaXRpYWwgc3RhdGUgdG9cclxuICAgICAgICAgKiByZXNldCB0aGUgaW5kaWNhdG9ycyAoZS5nLiBsb2dpblN1Y2Nlc3MpXHJcbiAgICAgICAgICogdGhhdCBjYWxsIHJlZGlyZWN0IG9yIGFueSBvdGhlciBhY3Rpb25zLlxyXG4gICAgICAgICAqIEl0IG11c3QgYmUgY2FsbGVkIGluIG1ldGhvZCAnY29tcG9uZW50RGlkTW91bnQnXHJcbiAgICAgICAgICogb2YgYSBjb21wb25lbnQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgSW5pdCA9IFwiTE9HSU5fSU5JVFwiLFxyXG4gICAgICAgIFJlcXVlc3QgPSBcIkxPR0lOX1JFUVVFU1RcIixcclxuICAgICAgICBTdWNjZXNzID0gXCJMT0dJTl9TVUNDRVNTXCIsXHJcbiAgICAgICAgRmFpbHVyZSA9IFwiTE9HSU5fRkFJTFVSRVwiXHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElJbml0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkluaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElSZXF1ZXN0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElTdWNjZXNzIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlN1Y2Nlc3M7XHJcbiAgICAgICAgcGF5bG9hZDogSVNlcnZpY2VVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRmFpbHVyZSB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5GYWlsdXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgS25vd25BY3Rpb24gPSBJSW5pdCB8IElSZXF1ZXN0IHwgSVN1Y2Nlc3MgfCBJRmFpbHVyZTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICAgICAgaW5pdDogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5Jbml0IH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpblJlcXVlc3Q6IChtb2RlbDogSUxvZ2luTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgQWNjb3VudFNlcnZpY2UubG9naW4obW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkZhaWx1cmUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5TdWNjZXNzLCBwYXlsb2FkOiByZXN1bHQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlOiBJU3RhdGUgPSB7XHJcbiAgICAgICAgaW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9naW5TdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8SVN0YXRlPiA9IChjdXJyZW50U3RhdGU6IElTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGluY29taW5nQWN0aW9uIGFzIEtub3duQWN0aW9uO1xyXG5cclxuICAgICAgICB2YXIgY2xvbmVJbmRpY2F0b3JzID0gKCkgPT4gY2xvbmUoY3VycmVudFN0YXRlLmluZGljYXRvcnMpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5Jbml0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlJlcXVlc3Q6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IGNsb25lSW5kaWNhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuU3VjY2VzczpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMubG9naW5TdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRmFpbHVyZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZSB8fCBpbml0aWFsU3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjbG9uZSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uLCBBcHBUaHVua0FjdGlvbkFzeW5jIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IFBlcnNvblNlcnZpY2UgZnJvbSBcIkBTZXJ2aWNlcy9QZXJzb25TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5pbXBvcnQgeyB3YWl0IH0gZnJvbSBcImRvbWFpbi13YWl0XCI7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIkBNb2RlbHMvUmVzdWx0XCI7XHJcblxyXG5leHBvcnQgbW9kdWxlIFBlcnNvblN0b3JlIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICAgICAgcGVvcGxlOiBJUGVyc29uTW9kZWxbXSxcclxuICAgICAgICBpbmRpY2F0b3JzOiB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBBY3Rpb25zIHtcclxuICAgICAgICBGYWlsdXJlUmVzcG9uc2UgPSBcIlBFUlNPTl9GQUlMVVJFX1JFU1BPTlNFXCIsXHJcbiAgICAgICAgU2VhcmNoUmVxdWVzdCA9IFwiUEVSU09OX1NFQVJDSF9SRVFVRVNUXCIsXHJcbiAgICAgICAgU2VhcmNoUmVzcG9uc2UgPSBcIlBFUlNPTl9TRUFSQ0hfUkVTUE9OU0VcIixcclxuICAgICAgICBBZGRSZXF1ZXN0ID0gXCJQRVJTT05fQUREX1JFUVVFU1RcIixcclxuICAgICAgICBBZGRSZXNwb25zZSA9IFwiUEVSU09OX0FERF9SRVNQT05TRVwiLFxyXG4gICAgICAgIFVwZGF0ZVJlcXVlc3QgPSBcIlBFUlNPTl9VUERBVEVfUkVRVUVTVFwiLFxyXG4gICAgICAgIFVwZGF0ZVJlc3BvbnNlID0gXCJQRVJTT05fVVBEQVRFX1JFU1BPTlNFXCIsXHJcbiAgICAgICAgRGVsZXRlUmVxdWVzdCA9IFwiUEVSU09OX0RFTEVURV9SRVFVRVNUXCIsXHJcbiAgICAgICAgRGVsZXRlUmVzcG9uc2UgPSBcIlBFUlNPTl9ERUxFVEVfUkVTUE9OU0VcIlxyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRmFpbHVyZVJlc3BvbnNlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkZhaWx1cmVSZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUdldEFsbFJlcXVlc3Qge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuU2VhcmNoUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUdldEFsbFJlc3BvbnNlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlNlYXJjaFJlc3BvbnNlO1xyXG4gICAgICAgIHBheWxvYWQ6IElQZXJzb25Nb2RlbFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJQWRkUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5BZGRSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJQWRkUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuQWRkUmVzcG9uc2U7XHJcbiAgICAgICAgcGF5bG9hZDogSVBlcnNvbk1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJVXBkYXRlUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJVXBkYXRlUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuVXBkYXRlUmVzcG9uc2U7XHJcbiAgICAgICAgcGF5bG9hZDogSVBlcnNvbk1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRGVsZXRlUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5EZWxldGVSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRGVsZXRlUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVzcG9uc2U7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlIEtub3duQWN0aW9uID1cclxuICAgICAgICBJRmFpbHVyZVJlc3BvbnNlIHxcclxuICAgICAgICBJR2V0QWxsUmVxdWVzdCB8IElHZXRBbGxSZXNwb25zZSB8XHJcbiAgICAgICAgSUFkZFJlcXVlc3QgfCBJQWRkUmVzcG9uc2UgfFxyXG4gICAgICAgIElVcGRhdGVSZXF1ZXN0IHwgSVVwZGF0ZVJlc3BvbnNlIHxcclxuICAgICAgICBJRGVsZXRlUmVxdWVzdCB8IElEZWxldGVSZXNwb25zZTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICAgICAgc2VhcmNoUmVxdWVzdDogKHRlcm0/OiBzdHJpbmcpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgd2FpdChhc3luYyAodHJhbnNmb3JtVXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFdhaXQgZm9yIHNlcnZlciBwcmVyZW5kZXJpbmcuXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuU2VhcmNoUmVxdWVzdCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS5zZWFyY2godGVybSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlNlYXJjaFJlc3BvbnNlLCBwYXlsb2FkOiByZXN1bHQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5GYWlsdXJlUmVzcG9uc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkUmVxdWVzdDogKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBBcHBUaHVua0FjdGlvbkFzeW5jPEtub3duQWN0aW9uLCBSZXN1bHQ8bnVtYmVyPj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFkZFJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS5hZGQobW9kZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5pZCA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5BZGRSZXNwb25zZSwgcGF5bG9hZDogbW9kZWwgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRmFpbHVyZVJlc3BvbnNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUmVxdWVzdDogKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBBcHBUaHVua0FjdGlvbkFzeW5jPEtub3duQWN0aW9uLCBSZXN1bHQ8e30+PiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuVXBkYXRlUmVxdWVzdCB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBQZXJzb25TZXJ2aWNlLnVwZGF0ZShtb2RlbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXNwb25zZSwgcGF5bG9hZDogbW9kZWwgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRmFpbHVyZVJlc3BvbnNlIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlUmVxdWVzdDogKGlkOiBudW1iZXIpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkRlbGV0ZVJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS5kZWxldGUoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVzcG9uc2UsIGlkIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkZhaWx1cmVSZXNwb25zZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZSA9IHtcclxuICAgICAgICBwZW9wbGU6IFtdLFxyXG4gICAgICAgIGluZGljYXRvcnM6IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uTG9hZGluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPElTdGF0ZT4gPSAoY3VycmVudFN0YXRlOiBJU3RhdGUsIGluY29taW5nQWN0aW9uOiBBY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBpbmNvbWluZ0FjdGlvbiBhcyBLbm93bkFjdGlvbjtcclxuXHJcbiAgICAgICAgdmFyIGNsb25lSW5kaWNhdG9ycyA9ICgpID0+IGNsb25lKGN1cnJlbnRTdGF0ZS5pbmRpY2F0b3JzKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRmFpbHVyZVJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5TZWFyY2hSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlNlYXJjaFJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzLCBwZW9wbGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5VcGRhdGVSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlVwZGF0ZVJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjbG9uZShjdXJyZW50U3RhdGUucGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtVG9VcGRhdGUgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXTtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub1VwZGF0ZS5maXJzdE5hbWUgPSBhY3Rpb24ucGF5bG9hZC5maXJzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9VcGRhdGUubGFzdE5hbWUgPSBhY3Rpb24ucGF5bG9hZC5sYXN0TmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBkYXRhIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5BZGRSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkFkZFJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjbG9uZShjdXJyZW50U3RhdGUucGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMsIHBlb3BsZTogZGF0YSB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRGVsZXRlUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5EZWxldGVSZXNwb25zZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY2xvbmUoY3VycmVudFN0YXRlLnBlb3BsZSkuZmlsdGVyKHggPT4geC5pZCAhPT0gYWN0aW9uLmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBkYXRhIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlIHx8IGluaXRpYWxTdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExvZ2luU3RvcmUgfSBmcm9tIFwiQFN0b3JlL0xvZ2luU3RvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uU3RvcmUgfSBmcm9tIFwiQFN0b3JlL1BlcnNvblN0b3JlXCI7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgbG9naW46IExvZ2luU3RvcmUuSVN0YXRlO1xyXG4gICAgcGVyc29uOiBQZXJzb25TdG9yZS5JU3RhdGU7XHJcbn1cclxuXHJcbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgbG9naW46IExvZ2luU3RvcmUucmVkdWNlcixcclxuICAgIHBlcnNvbjogUGVyc29uU3RvcmUucmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uQXN5bmM8VEFjdGlvbiwgVFJlc3VsdD4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSkgOiBQcm9taXNlPFRSZXN1bHQ+XHJcbn0iLCJpbXBvcnQgeyBBcHBUaHVua0FjdGlvbkFzeW5jIH0gZnJvbSBcIkBTdG9yZS9pbmRleFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgcHJvY2VzczogYW55O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lPFQ+KG9iamVjdDogVCk6IFQge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9taXNlRnJvbUFjdGlvbjxULCBWPihhc3luY0FjdGlvbkNyZWF0b3I6IEFwcFRodW5rQWN0aW9uQXN5bmM8VCwgVj4pOiBQcm9taXNlPFY+IHtcclxuICAgIHJldHVybiAoYXN5bmNBY3Rpb25DcmVhdG9yIGFzIGFueSkgYXMgUHJvbWlzZTxWPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHNlcnZlciBwcmVyZW5kZXJpbmcgYnkgTm9kZS5qcy5cclxuICogVGhlcmUgY2FuJ3QgYmUgYW55IERPTTogd2luZG93LCBkb2N1bWVudCwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiAhIXByb2Nlc3MudmVyc2lvbnMubm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Rm9ybShmb3JtOiBIVE1MRm9ybUVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHZhciBpbnB1dHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpKTtcclxuICAgIGlucHV0cy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIHZhciBpbnB1dFR5cGUgPSB4LmdldEF0dHJpYnV0ZShcInR5cGVcIik7XHJcbiAgICAgICAgaWYgKGlucHV0VHlwZSA9PT0gXCJjaGVja2JveFwiIHx8IGlucHV0VHlwZSA9PT0gXCJyYWRpb1wiKSB7XHJcbiAgICAgICAgICAgICh4IGFzIGFueSkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICh4IGFzIGFueSkudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qc1wiKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRlYm91bmNlQ2FjaGUgPSBleHBvcnRzLm9ubHlSZXNvbHZlc0xhc3QgPSBleHBvcnRzLmRlYm91bmNlID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2RlYm91bmNlUHJvbWlzZSA9IHJlcXVpcmUoJ2RlYm91bmNlLXByb21pc2UnKTtcblxudmFyIF9kZWJvdW5jZVByb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVib3VuY2VQcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gV2UgdXNlIERlYm91bmNlUHJvbWlzZSBhcyBhIGRlcGVuZGVuY3kgYXMgaXQgZG9lcyBhIGdyZWF0IGxvdy1sZXZlbCBqb2Jcbi8vIFRoZSBiZWhhdmlvciBvZiB0aGUgbGliIGlzIHRvIHJldHVybiB0aGUgc2FtZSBwcm9taXNlIGZvciBhbGwgZnVuY3Rpb24gY2FsbHNcbnZhciBkZWJvdW5jZSA9IGV4cG9ydHMuZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHJldHVybiAoMCwgX2RlYm91bmNlUHJvbWlzZTIuZGVmYXVsdCkoZnVuYywgd2FpdCwgb3B0aW9ucyk7XG59O1xuXG4vLyBHaXZlbiBhIGZ1bmN0aW9uIHJldHVybmluZyBwcm9taXNlcywgd3JhcCBpdCBzbyB0aGF0IG9ubHkgdGhlIHByb21pc2UgcmV0dXJuZWQgZnJvbSBsYXN0IGNhbGwgd2lsbCBhY3R1YWxseSByZXNvbHZlXG4vLyBUaGlzIGlzIHVzZWZ1bCB0byBpZ25vcmUgZm9ybWVyIGFzeW5jIHJlc3VsdHMgYW5kIGhhbmRsZSBjb25jdXJyZW5jeSBpc3N1ZXNcbnZhciBvbmx5UmVzb2x2ZXNMYXN0ID0gZXhwb3J0cy5vbmx5UmVzb2x2ZXNMYXN0ID0gZnVuY3Rpb24gb25seVJlc29sdmVzTGFzdChhc3luY0Z1bmN0aW9uKSB7XG4gIC8vIEluc3BpcmVkIGZyb20gaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTUvMTIvMTYvaXNtb3VudGVkLWFudGlwYXR0ZXJuLmh0bWxcbiAgdmFyIG1ha2VDYW5jZWxhYmxlID0gZnVuY3Rpb24gbWFrZUNhbmNlbGFibGUocHJvbWlzZSkge1xuICAgIHZhciBoYXNDYW5jZWxlZF8gPSBmYWxzZTtcbiAgICB2YXIgd3JhcHBlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gaGFzQ2FuY2VsZWRfID8gdW5kZWZpbmVkIDogcmVzb2x2ZSh2YWwpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPyB1bmRlZmluZWQgOiByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb21pc2U6IHdyYXBwZWRQcm9taXNlLFxuICAgICAgY2FuY2VsOiBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgICAgIGhhc0NhbmNlbGVkXyA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY2FuY2VsUHJldmlvdXMgPSB2b2lkIDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2FuY2VsUHJldmlvdXMgJiYgY2FuY2VsUHJldmlvdXMoKTtcblxuICAgIHZhciBfbWFrZUNhbmNlbGFibGUgPSBtYWtlQ2FuY2VsYWJsZShhc3luY0Z1bmN0aW9uLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSksXG4gICAgICAgIHByb21pc2UgPSBfbWFrZUNhbmNlbGFibGUucHJvbWlzZSxcbiAgICAgICAgY2FuY2VsID0gX21ha2VDYW5jZWxhYmxlLmNhbmNlbDtcblxuICAgIGNhbmNlbFByZXZpb3VzID0gY2FuY2VsO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xufTtcblxuLy8gV2UgY3JlYXRlIGEgZGVib3VuY2luZyBmdW5jdGlvbiBjYWNoZSwgYmVjYXVzZSB3aGVuIHdyYXBwaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbixcbi8vIHdlIG1heSBhY3R1YWxseSB3YW50IHRvIHJvdXRlIHRoZSBmdW5jdGlvbiBjYWxsIHRvIGRpZmZlcmVudCBkZWJvdW5jZWQgZnVuY3Rpb25zIGRlcGVuZGluZyBmdW5jdGlvbiBwYWFtZXRlcnNcblxudmFyIERlYm91bmNlQ2FjaGUgPSBleHBvcnRzLkRlYm91bmNlQ2FjaGUgPSBmdW5jdGlvbiBEZWJvdW5jZUNhY2hlKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZWJvdW5jZUNhY2hlKTtcblxuICB0aGlzLmdldERlYm91bmNlZEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIHdhaXQsIG9wdGlvbnMsIGFyZ3MpIHtcbiAgICB2YXIga2V5T3B0aW9ucyA9IG9wdGlvbnMua2V5LFxuICAgICAgICBvbmx5UmVzb2x2ZXNMYXN0T3B0aW9uID0gb3B0aW9ucy5vbmx5UmVzb2x2ZXNMYXN0LFxuICAgICAgICBvdGhlck9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0aW9ucywgWydrZXknLCAnb25seVJlc29sdmVzTGFzdCddKTtcblxuICAgIHZhciBrZXkgPSBrZXlPcHRpb25zLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAvLyBJZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIGRvZXMgbm90IGV4aXN0IGZvciB0aGlzIGtleSwgd2UgY3JlYXRlIG9uZSBvbiB0aGUgZmx5IGFuZCByZXR1cm4gaXRcbiAgICBpZiAoIV90aGlzLmRlYm91bmNlQ2FjaGVba2V5XSkge1xuICAgICAgdmFyIGRlYm91bmNlZEZ1bmMgPSBkZWJvdW5jZShmdW5jLCB3YWl0LCBvdGhlck9wdGlvbnMpO1xuICAgICAgaWYgKG9ubHlSZXNvbHZlc0xhc3RPcHRpb24pIHtcbiAgICAgICAgZGVib3VuY2VkRnVuYyA9IG9ubHlSZXNvbHZlc0xhc3QoZGVib3VuY2VkRnVuYyk7XG4gICAgICB9XG4gICAgICBfdGhpcy5kZWJvdW5jZUNhY2hlW2tleV0gPSBkZWJvdW5jZWRGdW5jO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXMuZGVib3VuY2VDYWNoZVtrZXldO1xuICB9O1xuXG4gIHRoaXMuZGVib3VuY2VDYWNoZSA9IHt9O1xufTtcblxudmFyIERlZmF1bHRPcHRpb25zID0ge1xuICAvLyBCeSBkZWZhdWx0LCB0aGUga2V5IGlzIG51bGwsIHdoaWNoIG1lYW5zIHRoYXQgYWxsIHRoZSBmdW5jdGlvbiBjYWxsc1xuICAvLyB3aWxsIHNoYXJlIHRoZSBzYW1lIGRlYm91bmNlZCBmdW5jdGlvblxuICAvLyBQcm92aWRpbmcgYSBrZXkgZnVuY3Rpb24gcGVybWl0IHRvIHVzZSB0aGUgY2FsbCBhcmd1bWVudHNcbiAgLy8gYW5kIHJvdXRlIHRvIGEgZGlzdGluY3QgZGVib3VuY2VkIGZ1bmN0aW9uXG4gIGtleTogZnVuY3Rpb24ga2V5KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIC8vIEJ5IGRlZmF1bHQsIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHdpbGwgb25seSByZXNvbHZlXG4gIC8vIHRoZSBsYXN0IHByb21pc2UgaXQgcmV0dXJuZWRcbiAgLy8gRm9ybWVyIGNhbGxzIHdpbGwgc3RheSB1bnJlc29sdmVkLCBzbyB0aGF0IHlvdSBkb24ndCBoYXZlXG4gIC8vIHRvIGhhbmRsZSBjb25jdXJyZW5jeSBpc3N1ZXMgaW4geW91ciBjb2RlXG4gIG9ubHlSZXNvbHZlc0xhc3Q6IHRydWVcbn07XG5cbmZ1bmN0aW9uIEF3ZXNvbWVEZWJvdW5jZVByb21pc2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgZmluYWxPcHRpb25zID0gX2V4dGVuZHMoe30sIERlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgdmFyIGRlYm91bmNlQ2FjaGUgPSBuZXcgRGVib3VuY2VDYWNoZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gQXdlc29tZURlYm91bmNlUHJvbWlzZVdyYXBwZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRlYm91bmNlZEZuID0gZGVib3VuY2VDYWNoZS5nZXREZWJvdW5jZWRGdW5jdGlvbihmdW5jLCB3YWl0LCBmaW5hbE9wdGlvbnMsIGFyZ3MpO1xuICAgIHJldHVybiBkZWJvdW5jZWRGbi5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBBd2Vzb21lRGVib3VuY2VQcm9taXNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzO1xuKGZ1bmN0aW9uIChjb25zdGFudHMpIHtcbiAgICBjb25zdGFudHMudHlwZU9mRnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0YW50cy5ib29sVHJ1ZSA9IHRydWU7XG59KShjb25zdGFudHMgfHwgKGNvbnN0YW50cyA9IHt9KSk7XG5mdW5jdGlvbiBiaW5kKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoIWRlc2NyaXB0b3IgfHwgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlICE9PSBjb25zdGFudHMudHlwZU9mRnVuY3Rpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1ldGhvZHMgY2FuIGJlIGRlY29yYXRlZCB3aXRoIEBiaW5kLiA8XCIgKyBwcm9wZXJ0eUtleSArIFwiPiBpcyBub3QgYSBtZXRob2QhXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb25maWd1cmFibGU6IGNvbnN0YW50cy5ib29sVHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYm91bmQgPSBkZXNjcmlwdG9yLnZhbHVlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBDcmVkaXRzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL2F1dG9iaW5kLWRlY29yYXRvciBmb3IgbWVtb2l6aW5nIHRoZSByZXN1bHQgb2YgYmluZCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eUtleSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBib3VuZCxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGNvbnN0YW50cy5ib29sVHJ1ZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogY29uc3RhbnRzLmJvb2xUcnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBib3VuZDtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmJpbmQgPSBiaW5kO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmluZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcDMtbmF0aXZlL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzXCIpOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9ndWQgPSByZXF1aXJlKCdndWQnKTtcblxudmFyIF9ndWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3VkKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE1BWF9TSUdORURfMzFfQklUX0lOVCA9IDEwNzM3NDE4MjM7XG5cbi8vIElubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG5mdW5jdGlvbiBvYmplY3RJcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyKHZhbHVlKSB7XG4gIHZhciBoYW5kbGVycyA9IFtdO1xuICByZXR1cm4ge1xuICAgIG9uOiBmdW5jdGlvbiBvbihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2ZmOiBmdW5jdGlvbiBvZmYoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIGggIT09IGhhbmRsZXI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlcih2YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBvbmx5Q2hpbGQoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW5bMF0gOiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVhY3RDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlO1xuXG4gIHZhciBjb250ZXh0UHJvcCA9ICdfX2NyZWF0ZS1yZWFjdC1jb250ZXh0LScgKyAoMCwgX2d1ZDIuZGVmYXVsdCkoKSArICdfXyc7XG5cbiAgdmFyIFByb3ZpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZW1pdHRlciA9IGNyZWF0ZUV2ZW50RW1pdHRlcihfdGhpcy5wcm9wcy52YWx1ZSksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltjb250ZXh0UHJvcF0gPSB0aGlzLmVtaXR0ZXIsIF9yZWY7XG4gICAgfTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBuZXh0UHJvcHMudmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgY2hhbmdlZEJpdHMgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKG9iamVjdElzKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjaGFuZ2VkQml0cyA9IDA7IC8vIE5vIGNoYW5nZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSgoY2hhbmdlZEJpdHMgJiBNQVhfU0lHTkVEXzMxX0JJVF9JTlQpID09PSBjaGFuZ2VkQml0cywgJ2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBFeHBlY3RlZCB0aGUgcmV0dXJuIHZhbHVlIHRvIGJlIGEgJyArICczMS1iaXQgaW50ZWdlci4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hhbmdlZEJpdHMgfD0gMDtcblxuICAgICAgICAgIGlmIChjaGFuZ2VkQml0cyAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnNldChuZXh0UHJvcHMudmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvdmlkZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLCBfUHJvdmlkZXIkY2hpbGRDb250ZXgpO1xuXG4gIHZhciBDb25zdW1lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhDb25zdW1lciwgX0NvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgICB2YXIgX3RlbXAyLCBfdGhpczIsIF9yZXQyO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc3VtZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0MiA9IChfdGVtcDIgPSAoX3RoaXMyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudDIuY2FsbC5hcHBseShfQ29tcG9uZW50MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKVxuICAgICAgfSwgX3RoaXMyLm9uVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gX3RoaXMyLm9ic2VydmVkQml0cyB8IDA7XG4gICAgICAgIGlmICgob2JzZXJ2ZWRCaXRzICYgY2hhbmdlZEJpdHMpICE9PSAwKSB7XG4gICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpIH0pO1xuICAgICAgICB9XG4gICAgICB9LCBfdGVtcDIpLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpczIsIF9yZXQyKTtcbiAgICB9XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gbmV4dFByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub24odGhpcy5vblVwZGF0ZSk7XG4gICAgICB9XG4gICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gdGhpcy5wcm9wcy5vYnNlcnZlZEJpdHM7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZWRCaXRzID0gb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQgfHwgb2JzZXJ2ZWRCaXRzID09PSBudWxsID8gTUFYX1NJR05FRF8zMV9CSVRfSU5UIC8vIFN1YnNjcmliZSB0byBhbGwgY2hhbmdlcyBieSBkZWZhdWx0XG4gICAgICA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLm9mZih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gb25seUNoaWxkKHRoaXMucHJvcHMuY2hpbGRyZW4pKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ29uc3VtZXI7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgQ29uc3VtZXIuY29udGV4dFR5cGVzID0gKF9Db25zdW1lciRjb250ZXh0VHlwZSA9IHt9LCBfQ29uc3VtZXIkY29udGV4dFR5cGVbY29udGV4dFByb3BdID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIF9Db25zdW1lciRjb250ZXh0VHlwZSk7XG5cblxuICByZXR1cm4ge1xuICAgIFByb3ZpZGVyOiBQcm92aWRlcixcbiAgICBDb25zdW1lcjogQ29uc3VtZXJcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUmVhY3RDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbnZhciBfaW1wbGVtZW50YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW1wbGVtZW50YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ29udGV4dCB8fCBfaW1wbGVtZW50YXRpb24yLmRlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyogZ2xvYmFsIHNldFRpbWVvdXQsIGNsZWFyVGltZW91dCAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlKGZuKSB7XG4gIHZhciB3YWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgdmFyIGxhc3RDYWxsQXQgPSB2b2lkIDA7XG4gIHZhciBkZWZlcnJlZCA9IHZvaWQgMDtcbiAgdmFyIHRpbWVyID0gdm9pZCAwO1xuICB2YXIgcGVuZGluZ0FyZ3MgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgY3VycmVudFdhaXQgPSBnZXRXYWl0KHdhaXQpO1xuICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgdmFyIGlzQ29sZCA9ICFsYXN0Q2FsbEF0IHx8IGN1cnJlbnRUaW1lIC0gbGFzdENhbGxBdCA+IGN1cnJlbnRXYWl0O1xuXG4gICAgbGFzdENhbGxBdCA9IGN1cnJlbnRUaW1lO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29sZCAmJiBvcHRpb25zLmxlYWRpbmcpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmFjY3VtdWxhdGUgPyBQcm9taXNlLnJlc29sdmUoZm4uY2FsbCh0aGlzLCBbYXJnc10pKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFswXTtcbiAgICAgIH0pIDogUHJvbWlzZS5yZXNvbHZlKGZuLmNhbGwuYXBwbHkoZm4sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcbiAgICB9XG5cbiAgICBpZiAoZGVmZXJyZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmVycmVkID0gZGVmZXIoKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nQXJncy5wdXNoKGFyZ3MpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmbHVzaC5iaW5kKHRoaXMpLCBjdXJyZW50V2FpdCk7XG5cbiAgICBpZiAob3B0aW9ucy5hY2N1bXVsYXRlKSB7XG4gICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3NJbmRleCA9IHBlbmRpbmdBcmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdjogZGVmZXJyZWQucHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0c1thcmdzSW5kZXhdO1xuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICB9KCk7XG5cbiAgICAgIGlmICgodHlwZW9mIF9yZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKF9yZXQpKSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbiAgfTtcblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB2YXIgdGhpc0RlZmVycmVkID0gZGVmZXJyZWQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIFByb21pc2UucmVzb2x2ZShvcHRpb25zLmFjY3VtdWxhdGUgPyBmbi5jYWxsKHRoaXMsIHBlbmRpbmdBcmdzKSA6IGZuLmFwcGx5KHRoaXMsIHBlbmRpbmdBcmdzW3BlbmRpbmdBcmdzLmxlbmd0aCAtIDFdKSkudGhlbih0aGlzRGVmZXJyZWQucmVzb2x2ZSwgdGhpc0RlZmVycmVkLnJlamVjdCk7XG5cbiAgICBwZW5kaW5nQXJncyA9IFtdO1xuICAgIGRlZmVycmVkID0gbnVsbDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0V2FpdCh3YWl0KSB7XG4gIHJldHVybiB0eXBlb2Ygd2FpdCA9PT0gJ2Z1bmN0aW9uJyA/IHdhaXQoKSA6IHdhaXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmVyKCkge1xuICB2YXIgZGVmZXJyZWQgPSB7fTtcbiAgZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBkZWZlcnJlZC5yZWplY3QgPSByZWplY3Q7XG4gIH0pO1xuICByZXR1cm4gZGVmZXJyZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuZGVlcG1lcmdlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSk7XG5cdH1cblx0T2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdGlmICghb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5yZXR1cm4gZGVlcG1lcmdlXzE7XG5cbn0pKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9kb21haW4td2FpdC9kaXN0L2Nqcy9pbmRleC5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9lbXB0eUZ1bmN0aW9uJyk7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZW1wdHlGdW5jdGlvbjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xuXG4gIHdhcm5pbmcgPSBmdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQuaW5kZXhPZignRmFpbGVkIENvbXBvc2l0ZSBwcm9wVHlwZTogJykgPT09IDApIHtcbiAgICAgIHJldHVybjsgLy8gSWdub3JlIENvbXBvc2l0ZUNvbXBvbmVudCBwcm9wdHlwZSBjaGVjay5cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciB0c2xpYl8xID0gcmVxdWlyZSgndHNsaWInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgaXNFcXVhbCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdyZWFjdC1mYXN0LWNvbXBhcmUnKSk7XG52YXIgZGVlcG1lcmdlID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2RlZXBtZXJnZScpKTtcbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpKTtcbnZhciBjcmVhdGVDb250ZXh0ID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jb250ZXh0JykpO1xudmFyIHdhcm5pbmcgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgndGlueS13YXJuaW5nJykpO1xudmFyIGNsb25lRGVlcCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdsb2Rhc2gvY2xvbmVEZWVwJykpO1xudmFyIHRvUGF0aCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdsb2Rhc2gvdG9QYXRoJykpO1xuXG52YXIgX2E7XG52YXIgRm9ybWlrUHJvdmlkZXIgPSAoX2EgPSBjcmVhdGVDb250ZXh0KHt9KSwgX2EuUHJvdmlkZXIpLCBGb3JtaWtDb25zdW1lciA9IF9hLkNvbnN1bWVyO1xuZnVuY3Rpb24gY29ubmVjdChDb21wKSB7XG4gICAgdmFyIEMgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1pa0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoZm9ybWlrKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXAsIHRzbGliXzEuX19hc3NpZ24oe30sIHByb3BzLCB7IGZvcm1pazogZm9ybWlrIH0pKTsgfSkpOyB9O1xuICAgIHZhciBjb21wb25lbnREaXNwbGF5TmFtZSA9IENvbXAuZGlzcGxheU5hbWUgfHxcbiAgICAgICAgQ29tcC5uYW1lIHx8XG4gICAgICAgIChDb21wLmNvbnN0cnVjdG9yICYmIENvbXAuY29uc3RydWN0b3IubmFtZSkgfHxcbiAgICAgICAgJ0NvbXBvbmVudCc7XG4gICAgQy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcDtcbiAgICBDLmRpc3BsYXlOYW1lID0gXCJGb3JtaWtDb25uZWN0KFwiICsgY29tcG9uZW50RGlzcGxheU5hbWUgKyBcIilcIjtcbiAgICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoQywgQ29tcCk7XG59XG5cbmZ1bmN0aW9uIGdldEluKG9iaiwga2V5LCBkZWYsIHApIHtcbiAgICBpZiAocCA9PT0gdm9pZCAwKSB7IHAgPSAwOyB9XG4gICAgdmFyIHBhdGggPSB0b1BhdGgoa2V5KTtcbiAgICB3aGlsZSAob2JqICYmIHAgPCBwYXRoLmxlbmd0aCkge1xuICAgICAgICBvYmogPSBvYmpbcGF0aFtwKytdXTtcbiAgICB9XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkID8gZGVmIDogb2JqO1xufVxuZnVuY3Rpb24gc2V0SW4ob2JqLCBwYXRoLCB2YWx1ZSkge1xuICAgIHZhciByZXMgPSB7fTtcbiAgICB2YXIgcmVzVmFsID0gcmVzO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aEFycmF5ID0gdG9QYXRoKHBhdGgpO1xuICAgIGZvciAoOyBpIDwgcGF0aEFycmF5Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2YXIgY3VycmVudFBhdGggPSBwYXRoQXJyYXlbaV07XG4gICAgICAgIHZhciBjdXJyZW50T2JqID0gZ2V0SW4ob2JqLCBwYXRoQXJyYXkuc2xpY2UoMCwgaSArIDEpKTtcbiAgICAgICAgaWYgKHJlc1ZhbFtjdXJyZW50UGF0aF0pIHtcbiAgICAgICAgICAgIHJlc1ZhbCA9IHJlc1ZhbFtjdXJyZW50UGF0aF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VycmVudE9iaikge1xuICAgICAgICAgICAgcmVzVmFsID0gcmVzVmFsW2N1cnJlbnRQYXRoXSA9IGNsb25lRGVlcChjdXJyZW50T2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBuZXh0UGF0aCA9IHBhdGhBcnJheVtpICsgMV07XG4gICAgICAgICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdID1cbiAgICAgICAgICAgICAgICBpc0ludGVnZXIobmV4dFBhdGgpICYmIE51bWJlcihuZXh0UGF0aCkgPj0gMCA/IFtdIDoge307XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKChpID09PSAwID8gb2JqIDogcmVzVmFsKVtwYXRoQXJyYXlbaV1dID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgcmVzVmFsW3BhdGhBcnJheVtpXV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXNWYWxbcGF0aEFycmF5W2ldXSA9IHZhbHVlO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gdHNsaWJfMS5fX2Fzc2lnbih7fSwgb2JqLCByZXMpO1xuICAgIGlmIChpID09PSAwICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHJlc3VsdFtwYXRoQXJyYXlbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gc2V0TmVzdGVkT2JqZWN0VmFsdWVzKG9iamVjdCwgdmFsdWUsIHZpc2l0ZWQsIHJlc3BvbnNlKSB7XG4gICAgaWYgKHZpc2l0ZWQgPT09IHZvaWQgMCkgeyB2aXNpdGVkID0gbmV3IFdlYWtNYXAoKTsgfVxuICAgIGlmIChyZXNwb25zZSA9PT0gdm9pZCAwKSB7IHJlc3BvbnNlID0ge307IH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMob2JqZWN0KTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgIHZhciB2YWwgPSBvYmplY3Rba107XG4gICAgICAgIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2l0ZWQuZ2V0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICB2aXNpdGVkLnNldCh2YWwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlW2tdID0gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fTtcbiAgICAgICAgICAgICAgICBzZXROZXN0ZWRPYmplY3RWYWx1ZXModmFsLCB2YWx1ZSwgdmlzaXRlZCwgcmVzcG9uc2Vba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2Vba10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2U7XG59XG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn07XG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG52YXIgaXNJbnRlZ2VyID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBTdHJpbmcoTWF0aC5mbG9vcihOdW1iZXIob2JqKSkpID09PSBvYmo7XG59O1xudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xudmFyIGlzTmFOID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICE9PSBvYmo7IH07XG52YXIgaXNFbXB0eUNoaWxkcmVuID0gZnVuY3Rpb24gKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMDtcbn07XG52YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLnRoZW4pO1xufTtcbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoZG9jKSB7XG4gICAgZG9jID0gZG9jIHx8ICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiB1bmRlZmluZWQpO1xuICAgIGlmICh0eXBlb2YgZG9jID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRvYy5hY3RpdmVFbGVtZW50IHx8IGRvYy5ib2R5O1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZG9jLmJvZHk7XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZUNhbmNlbGFibGUocHJvbWlzZSkge1xuICAgIHZhciBoYXNDYW5jZWxlZCA9IGZhbHNlO1xuICAgIHZhciB3cmFwcGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIChoYXNDYW5jZWxlZCA/IHJlamVjdCh7IGlzQ2FuY2VsZWQ6IHRydWUgfSkgOiByZXNvbHZlKHZhbCkpOyB9LCBmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIChoYXNDYW5jZWxlZCA/IHJlamVjdCh7IGlzQ2FuY2VsZWQ6IHRydWUgfSkgOiByZWplY3QoZXJyb3IpKTsgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgd3JhcHBlZFByb21pc2UsXG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgICAgIGhhc0NhbmNlbGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICBdO1xufVxuXG52YXIgRm9ybWlrID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGb3JtaWssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRm9ybWlrKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5oY0NhY2hlID0ge307XG4gICAgICAgIF90aGlzLmhiQ2FjaGUgPSB7fTtcbiAgICAgICAgX3RoaXMucmVnaXN0ZXJGaWVsZCA9IGZ1bmN0aW9uIChuYW1lLCBDb21wKSB7XG4gICAgICAgICAgICBfdGhpcy5maWVsZHNbbmFtZV0gPSBDb21wO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy51bnJlZ2lzdGVyRmllbGQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgZGVsZXRlIF90aGlzLmZpZWxkc1tuYW1lXTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0RXJyb3JzID0gZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvcnM6IGVycm9ycyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0VG91Y2hlZCA9IGZ1bmN0aW9uICh0b3VjaGVkKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoZWQ6IHRvdWNoZWQgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQmx1cikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyhfdGhpcy5zdGF0ZS52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHZhbHVlczogdmFsdWVzIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsaWRhdGVPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyh2YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHN0YXR1czogc3RhdHVzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IEZvcm1paydzIHNldEVycm9yKGVycm9yKSBpcyBkZXByZWNhdGVkIGFuZCBtYXkgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgcmVsZWFzZXMuIFBsZWFzZSB1c2UgRm9ybWlrJ3Mgc2V0U3RhdHVzKHN0YXR1cykgaW5zdGVhZC4gSXQgd29ya3MgaWRlbnRpY2FsbHkuIEZvciBtb3JlIGluZm8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXJlZHBhbG1lci9mb3JtaWsjc2V0c3RhdHVzLXN0YXR1cy1hbnktLXZvaWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0U3VibWl0dGluZyA9IGZ1bmN0aW9uIChpc1N1Ym1pdHRpbmcpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5kaWRNb3VudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNTdWJtaXR0aW5nOiBpc1N1Ym1pdHRpbmcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnZhbGlkYXRlRmllbGQgPSBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNWYWxpZGF0aW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uKGZpZWxkLCBnZXRJbihfdGhpcy5zdGF0ZS52YWx1ZXMsIGZpZWxkKSkudGhlbihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBzZXRJbihfdGhpcy5zdGF0ZS5lcnJvcnMsIGZpZWxkLCBlcnJvciksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoX3RoaXMuZmllbGRzW2ZpZWxkXS5wcm9wcy52YWxpZGF0ZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGU7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25TY2hlbWEgPSBfdGhpcy5wcm9wcy52YWxpZGF0aW9uU2NoZW1hO1xuICAgICAgICAgICAgICAgIHZhciBzY2hlbWEgPSBpc0Z1bmN0aW9uKHZhbGlkYXRpb25TY2hlbWEpXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWRhdGlvblNjaGVtYSgpXG4gICAgICAgICAgICAgICAgICAgIDogdmFsaWRhdGlvblNjaGVtYTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVl1cFNjaGVtYSh2YWx1ZXMsIHNjaGVtYSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh5dXBUb0Zvcm1FcnJvcnMoZXJyKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHsgdmFsdWVzID0gX3RoaXMuc3RhdGUudmFsdWVzOyB9XG4gICAgICAgICAgICBpZiAoX3RoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsaWRhdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EgPSBtYWtlQ2FuY2VsYWJsZShQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgX3RoaXMucnVuRmllbGRMZXZlbFZhbGlkYXRpb25zKHZhbHVlcyksXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMudmFsaWRhdGlvblNjaGVtYSA/IF90aGlzLnJ1blZhbGlkYXRpb25TY2hlbWEodmFsdWVzKSA6IHt9LFxuICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLnZhbGlkYXRlID8gX3RoaXMucnVuVmFsaWRhdGVIYW5kbGVyKHZhbHVlcykgOiB7fSxcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkRXJyb3JzID0gX2FbMF0sIHNjaGVtYUVycm9ycyA9IF9hWzFdLCBoYW5kbGVyRXJyb3JzID0gX2FbMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZXBtZXJnZS5hbGwoW2ZpZWxkRXJyb3JzLCBzY2hlbWFFcnJvcnMsIGhhbmRsZXJFcnJvcnNdLCB7IGFycmF5TWVyZ2U6IGFycmF5TWVyZ2UgfSk7XG4gICAgICAgICAgICB9KSksIHByb21pc2UgPSBfYVswXSwgY2FuY2VsID0gX2FbMV07XG4gICAgICAgICAgICBfdGhpcy52YWxpZGF0b3IgPSBjYW5jZWw7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNFcXVhbChwcmV2U3RhdGUuZXJyb3JzLCBlcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBlcnJvcnM6IGVycm9ycyB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudE9yUGF0aCkge1xuICAgICAgICAgICAgdmFyIGV4ZWN1dGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnRPclRleHRWYWx1ZSwgbWF5YmVQYXRoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gbWF5YmVQYXRoO1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBldmVudE9yVGV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQ7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1N0cmluZyhldmVudE9yVGV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRPclRleHRWYWx1ZS5wZXJzaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudE9yVGV4dFZhbHVlLnBlcnNpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBldmVudE9yVGV4dFZhbHVlLnRhcmdldCwgdHlwZSA9IF9hLnR5cGUsIG5hbWVfMSA9IF9hLm5hbWUsIGlkID0gX2EuaWQsIHZhbHVlID0gX2EudmFsdWUsIGNoZWNrZWQgPSBfYS5jaGVja2VkLCBvdXRlckhUTUwgPSBfYS5vdXRlckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkID0gbWF5YmVQYXRoID8gbWF5YmVQYXRoIDogbmFtZV8xID8gbmFtZV8xIDogaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGQgJiYgXCJkZXZlbG9wbWVudFwiICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sQ29udGVudDogb3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb25BbmNob3JMaW5rOiAnaGFuZGxlY2hhbmdlLWUtcmVhY3RjaGFuZ2VldmVudGFueS0tdm9pZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlck5hbWU6ICdoYW5kbGVDaGFuZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsID0gL251bWJlcnxyYW5nZS8udGVzdCh0eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAoKHBhcnNlZCA9IHBhcnNlRmxvYXQodmFsdWUpKSwgaXNOYU4ocGFyc2VkKSA/ICcnIDogcGFyc2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAvY2hlY2tib3gvLnRlc3QodHlwZSkgPyBjaGVja2VkIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAodHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7IHZhbHVlczogc2V0SW4ocHJldlN0YXRlLnZhbHVlcywgZmllbGQsIHZhbCkgfSkpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsaWRhdGVPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1blZhbGlkYXRpb25zKHNldEluKF90aGlzLnN0YXRlLnZhbHVlcywgZmllbGQsIHZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGV2ZW50T3JQYXRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKF90aGlzLmhjQ2FjaGVbZXZlbnRPclBhdGhdKVxuICAgICAgICAgICAgICAgICAgICA/IF90aGlzLmhjQ2FjaGVbZXZlbnRPclBhdGhdXG4gICAgICAgICAgICAgICAgICAgIDogKF90aGlzLmhjQ2FjaGVbZXZlbnRPclBhdGhdID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY3V0ZUNoYW5nZShldmVudCwgZXZlbnRPclBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4ZWN1dGVDaGFuZ2UoZXZlbnRPclBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRGaWVsZFZhbHVlID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFZhbGlkYXRlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKF90aGlzLmRpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gKHRzbGliXzEuX19hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB2YWx1ZXM6IHNldEluKHByZXZTdGF0ZS52YWx1ZXMsIGZpZWxkLCB2YWx1ZSkgfSkpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlICYmIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyhfdGhpcy5zdGF0ZS52YWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGdldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZyghIShhY3RpdmVFbGVtZW50LmF0dHJpYnV0ZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ3R5cGUnKSksICdZb3Ugc3VibWl0dGVkIGEgRm9ybWlrIGZvcm0gdXNpbmcgYSBidXR0b24gd2l0aCBhbiB1bnNwZWNpZmllZCBgdHlwZWAgYXR0cmlidXRlLiAgTW9zdCBicm93c2VycyBkZWZhdWx0IGJ1dHRvbiBlbGVtZW50cyB0byBgdHlwZT1cInN1Ym1pdFwiYC4gSWYgdGhpcyBpcyBub3QgYSBzdWJtaXQgYnV0dG9uLCBwbGVhc2UgYWRkIGB0eXBlPVwiYnV0dG9uXCJgLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgdG91Y2hlZDogc2V0TmVzdGVkT2JqZWN0VmFsdWVzKHByZXZTdGF0ZS52YWx1ZXMsIHRydWUpLFxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IHByZXZTdGF0ZS5zdWJtaXRDb3VudCArIDEsXG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucnVuVmFsaWRhdGlvbnMoX3RoaXMuc3RhdGUudmFsdWVzKS50aGVuKGZ1bmN0aW9uIChjb21iaW5lZEVycm9ycykge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB2YXIgaXNWYWxpZCA9IE9iamVjdC5rZXlzKGNvbWJpbmVkRXJyb3JzKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZXhlY3V0ZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5kaWRNb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzU3VibWl0dGluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmV4ZWN1dGVTdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vblN1Ym1pdChfdGhpcy5zdGF0ZS52YWx1ZXMsIF90aGlzLmdldEZvcm1pa0FjdGlvbnMoKSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnRPclN0cmluZykge1xuICAgICAgICAgICAgdmFyIGV4ZWN1dGVCbHVyID0gZnVuY3Rpb24gKGUsIHBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5wZXJzaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBlLnRhcmdldCwgbmFtZSA9IF9hLm5hbWUsIGlkID0gX2EuaWQsIG91dGVySFRNTCA9IF9hLm91dGVySFRNTDtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBwYXRoID8gcGF0aCA6IG5hbWUgPyBuYW1lIDogaWQ7XG4gICAgICAgICAgICAgICAgaWYgKCFmaWVsZCAmJiBcImRldmVsb3BtZW50XCIgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB3YXJuQWJvdXRNaXNzaW5nSWRlbnRpZmllcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sQ29udGVudDogb3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRhdGlvbkFuY2hvckxpbms6ICdoYW5kbGVibHVyLWUtYW55LS12b2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJOYW1lOiAnaGFuZGxlQmx1cicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkOiBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgZmllbGQsIHRydWUpLFxuICAgICAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsaWRhdGVPbkJsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMoX3RoaXMuc3RhdGUudmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKGV2ZW50T3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRnVuY3Rpb24oX3RoaXMuaGJDYWNoZVtldmVudE9yU3RyaW5nXSlcbiAgICAgICAgICAgICAgICAgICAgPyBfdGhpcy5oYkNhY2hlW2V2ZW50T3JTdHJpbmddXG4gICAgICAgICAgICAgICAgICAgIDogKF90aGlzLmhiQ2FjaGVbZXZlbnRPclN0cmluZ10gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlQmx1cihldmVudCwgZXZlbnRPclN0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZUJsdXIoZXZlbnRPclN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldEZpZWxkVG91Y2hlZCA9IGZ1bmN0aW9uIChmaWVsZCwgdG91Y2hlZCwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgICAgIGlmICh0b3VjaGVkID09PSB2b2lkIDApIHsgdG91Y2hlZCA9IHRydWU7IH1cbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZSA9PT0gdm9pZCAwKSB7IHNob3VsZFZhbGlkYXRlID0gdHJ1ZTsgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gKHRzbGliXzEuX19hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB0b3VjaGVkOiBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgZmllbGQsIHRvdWNoZWQpIH0pKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQmx1ciAmJiBzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyhfdGhpcy5zdGF0ZS52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRGaWVsZEVycm9yID0gZnVuY3Rpb24gKGZpZWxkLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAodHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7IGVycm9yczogc2V0SW4ocHJldlN0YXRlLmVycm9ycywgZmllbGQsIG1lc3NhZ2UpIH0pKTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlc2V0Rm9ybSA9IGZ1bmN0aW9uIChuZXh0VmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gbmV4dFZhbHVlcyA/IG5leHRWYWx1ZXMgOiBfdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzO1xuICAgICAgICAgICAgX3RoaXMuaW5pdGlhbFZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgICAgICB0b3VjaGVkOiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHN0YXR1czogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgICAgICAgIHN1Ym1pdENvdW50OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uUmVzZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlZE9uUmVzZXQgPSBfdGhpcy5wcm9wcy5vblJlc2V0KF90aGlzLnN0YXRlLnZhbHVlcywgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucygpKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZWRPblJlc2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2VkT25SZXNldC50aGVuKF90aGlzLnJlc2V0Rm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0Rm9ybWlrU3RhdGUgPSBmdW5jdGlvbiAocywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZShzLCBjYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnZhbGlkYXRlRm9ybSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNWYWxpZGF0aW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJ1blZhbGlkYXRpb25zKHZhbHVlcykudGhlbihmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc1ZhbGlkYXRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzZXRGb3JtOiBfdGhpcy5yZXNldEZvcm0sXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybTogX3RoaXMuc3VibWl0Rm9ybSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm06IF90aGlzLnZhbGlkYXRlRm9ybSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkOiBfdGhpcy52YWxpZGF0ZUZpZWxkLFxuICAgICAgICAgICAgICAgIHNldEVycm9yOiBfdGhpcy5zZXRFcnJvcixcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnM6IF90aGlzLnNldEVycm9ycyxcbiAgICAgICAgICAgICAgICBzZXRGaWVsZEVycm9yOiBfdGhpcy5zZXRGaWVsZEVycm9yLFxuICAgICAgICAgICAgICAgIHNldEZpZWxkVG91Y2hlZDogX3RoaXMuc2V0RmllbGRUb3VjaGVkLFxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU6IF90aGlzLnNldEZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzOiBfdGhpcy5zZXRTdGF0dXMsXG4gICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZzogX3RoaXMuc2V0U3VibWl0dGluZyxcbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkOiBfdGhpcy5zZXRUb3VjaGVkLFxuICAgICAgICAgICAgICAgIHNldFZhbHVlczogX3RoaXMuc2V0VmFsdWVzLFxuICAgICAgICAgICAgICAgIHNldEZvcm1pa1N0YXRlOiBfdGhpcy5zZXRGb3JtaWtTdGF0ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0NvbXB1dGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaXNJbml0aWFsVmFsaWQgPSBfdGhpcy5wcm9wcy5pc0luaXRpYWxWYWxpZDtcbiAgICAgICAgICAgIHZhciBkaXJ0eSA9ICFpc0VxdWFsKF90aGlzLmluaXRpYWxWYWx1ZXMsIF90aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpcnR5OiBkaXJ0eSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBkaXJ0eVxuICAgICAgICAgICAgICAgICAgICA/IF90aGlzLnN0YXRlLmVycm9ycyAmJiBPYmplY3Qua2V5cyhfdGhpcy5zdGF0ZS5lcnJvcnMpLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICA6IGlzSW5pdGlhbFZhbGlkICE9PSBmYWxzZSAmJiBpc0Z1bmN0aW9uKGlzSW5pdGlhbFZhbGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBpc0luaXRpYWxWYWxpZChfdGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXNJbml0aWFsVmFsaWQsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlczogX3RoaXMuaW5pdGlhbFZhbHVlcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0JhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXNzaWduKHt9LCBfdGhpcy5zdGF0ZSwgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucygpLCBfdGhpcy5nZXRGb3JtaWtDb21wdXRlZFByb3BzKCksIHsgcmVnaXN0ZXJGaWVsZDogX3RoaXMucmVnaXN0ZXJGaWVsZCwgdW5yZWdpc3RlckZpZWxkOiBfdGhpcy51bnJlZ2lzdGVyRmllbGQsIGhhbmRsZUJsdXI6IF90aGlzLmhhbmRsZUJsdXIsIGhhbmRsZUNoYW5nZTogX3RoaXMuaGFuZGxlQ2hhbmdlLCBoYW5kbGVSZXNldDogX3RoaXMuaGFuZGxlUmVzZXQsIGhhbmRsZVN1Ym1pdDogX3RoaXMuaGFuZGxlU3VibWl0LCB2YWxpZGF0ZU9uQ2hhbmdlOiBfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQ2hhbmdlLCB2YWxpZGF0ZU9uQmx1cjogX3RoaXMucHJvcHMudmFsaWRhdGVPbkJsdXIgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldEZvcm1pa0NvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2Fzc2lnbih7fSwgX3RoaXMuZ2V0Rm9ybWlrQmFnKCksIHsgdmFsaWRhdGlvblNjaGVtYTogX3RoaXMucHJvcHMudmFsaWRhdGlvblNjaGVtYSwgdmFsaWRhdGU6IF90aGlzLnByb3BzLnZhbGlkYXRlLCBpbml0aWFsVmFsdWVzOiBfdGhpcy5pbml0aWFsVmFsdWVzIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczogcHJvcHMuaW5pdGlhbFZhbHVlcyB8fCB7fSxcbiAgICAgICAgICAgIGVycm9yczoge30sXG4gICAgICAgICAgICB0b3VjaGVkOiB7fSxcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3VibWl0Q291bnQ6IDAsXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmRpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmZpZWxkcyA9IHt9O1xuICAgICAgICBfdGhpcy5pbml0aWFsVmFsdWVzID0gcHJvcHMuaW5pdGlhbFZhbHVlcyB8fCB7fTtcbiAgICAgICAgd2FybmluZyghKHByb3BzLmNvbXBvbmVudCAmJiBwcm9wcy5yZW5kZXIpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGb3JtaWsgY29tcG9uZW50PiBhbmQgPEZvcm1payByZW5kZXI+IGluIHRoZSBzYW1lIDxGb3JtaWs+IGNvbXBvbmVudDsgPEZvcm1payByZW5kZXI+IHdpbGwgYmUgaWdub3JlZCcpO1xuICAgICAgICB3YXJuaW5nKCEocHJvcHMuY29tcG9uZW50ICYmIHByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4ocHJvcHMuY2hpbGRyZW4pKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8Rm9ybWlrIGNvbXBvbmVudD4gYW5kIDxGb3JtaWsgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGb3JtaWs+IGNvbXBvbmVudDsgPEZvcm1payBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHdhcm5pbmcoIShwcm9wcy5yZW5kZXIgJiYgcHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihwcm9wcy5jaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGb3JtaWsgcmVuZGVyPiBhbmQgPEZvcm1payBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZvcm1paz4gY29tcG9uZW50OyA8Rm9ybWlrIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGb3JtaWsucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRpZE1vdW50ID0gdHJ1ZTtcbiAgICB9O1xuICAgIEZvcm1pay5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGb3JtaWsucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlUmVpbml0aWFsaXplICYmXG4gICAgICAgICAgICAhaXNFcXVhbChwcmV2UHJvcHMuaW5pdGlhbFZhbHVlcywgdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWVzID0gdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzO1xuICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0odGhpcy5wcm9wcy5pbml0aWFsVmFsdWVzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRm9ybWlrLnByb3RvdHlwZS5ydW5GaWVsZExldmVsVmFsaWRhdGlvbnMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbiA9IE9iamVjdC5rZXlzKHRoaXMuZmllbGRzKS5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5maWVsZHMgJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5maWVsZHNbZl0gJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5maWVsZHNbZl0ucHJvcHMudmFsaWRhdGUgJiZcbiAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKF90aGlzLmZpZWxkc1tmXS5wcm9wcy52YWxpZGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZmllbGRWYWxpZGF0aW9ucyA9IGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZmllbGRLZXlzV2l0aFZhbGlkYXRpb24ubWFwKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uKGYsIGdldEluKHZhbHVlcywgZikpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW1Byb21pc2UucmVzb2x2ZSgnRE9fTk9UX0RFTEVURV9ZT1VfV0lMTF9CRV9GSVJFRCcpXTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGZpZWxkVmFsaWRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGZpZWxkRXJyb3JzTGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkRXJyb3JzTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnIgPT09ICdET19OT1RfREVMRVRFX1lPVV9XSUxMX0JFX0ZJUkVEJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCEhY3Vycikge1xuICAgICAgICAgICAgICAgICAgICBwcmV2ID0gc2V0SW4ocHJldiwgZmllbGRLZXlzV2l0aFZhbGlkYXRpb25baW5kZXhdLCBjdXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRm9ybWlrLnByb3RvdHlwZS5ydW5WYWxpZGF0ZUhhbmRsZXIgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZWRFcnJvcnMgPSBfdGhpcy5wcm9wcy52YWxpZGF0ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZWRFcnJvcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKG1heWJlUHJvbWlzZWRFcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlZEVycm9ycy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVycm9ycyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1heWJlUHJvbWlzZWRFcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZvcm1pay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBjb21wb25lbnQgPSBfYS5jb21wb25lbnQsIHJlbmRlciA9IF9hLnJlbmRlciwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5nZXRGb3JtaWtCYWcoKTtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuZ2V0Rm9ybWlrQ29udGV4dCgpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrUHJvdmlkZXIsIHsgdmFsdWU6IGN0eCB9LCBjb21wb25lbnRcbiAgICAgICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKVxuICAgICAgICAgICAgOiByZW5kZXJcbiAgICAgICAgICAgICAgICA/IHJlbmRlcihwcm9wcylcbiAgICAgICAgICAgICAgICA6IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgID8gaXNGdW5jdGlvbihjaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW4ocHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IG51bGwpKTtcbiAgICB9O1xuICAgIEZvcm1pay5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHZhbGlkYXRlT25DaGFuZ2U6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuICAgICAgICBpc0luaXRpYWxWYWxpZDogZmFsc2UsXG4gICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZTogZmFsc2UsXG4gICAgfTtcbiAgICByZXR1cm4gRm9ybWlrO1xufShSZWFjdC5Db21wb25lbnQpKTtcbmZ1bmN0aW9uIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKF9hKSB7XG4gICAgdmFyIGh0bWxDb250ZW50ID0gX2EuaHRtbENvbnRlbnQsIGRvY3VtZW50YXRpb25BbmNob3JMaW5rID0gX2EuZG9jdW1lbnRhdGlvbkFuY2hvckxpbmssIGhhbmRsZXJOYW1lID0gX2EuaGFuZGxlck5hbWU7XG4gICAgY29uc29sZS53YXJuKFwiV2FybmluZzogRm9ybWlrIGNhbGxlZCBgXCIgKyBoYW5kbGVyTmFtZSArIFwiYCwgYnV0IHlvdSBmb3Jnb3QgdG8gcGFzcyBhbiBgaWRgIG9yIGBuYW1lYCBhdHRyaWJ1dGUgdG8geW91ciBpbnB1dDpcXG5cXG4gICAgXCIgKyBodG1sQ29udGVudCArIFwiXFxuXFxuICAgIEZvcm1payBjYW5ub3QgZGV0ZXJtaW5lIHdoaWNoIHZhbHVlIHRvIHVwZGF0ZS4gRm9yIG1vcmUgaW5mbyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phcmVkcGFsbWVyL2Zvcm1payNcIiArIGRvY3VtZW50YXRpb25BbmNob3JMaW5rICsgXCJcXG4gIFwiKTtcbn1cbmZ1bmN0aW9uIHl1cFRvRm9ybUVycm9ycyh5dXBFcnJvcikge1xuICAgIHZhciBlcnJvcnMgPSB7fTtcbiAgICBpZiAoeXVwRXJyb3IuaW5uZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzZXRJbihlcnJvcnMsIHl1cEVycm9yLnBhdGgsIHl1cEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0geXVwRXJyb3IuaW5uZXI7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBlcnIgPSBfYVtfaV07XG4gICAgICAgIGlmICghZXJyb3JzW2Vyci5wYXRoXSkge1xuICAgICAgICAgICAgZXJyb3JzID0gc2V0SW4oZXJyb3JzLCBlcnIucGF0aCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlcnJvcnM7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVl1cFNjaGVtYSh2YWx1ZXMsIHNjaGVtYSwgc3luYywgY29udGV4dCkge1xuICAgIGlmIChzeW5jID09PSB2b2lkIDApIHsgc3luYyA9IGZhbHNlOyB9XG4gICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0ge307IH1cbiAgICB2YXIgdmFsaWRhdGVEYXRhID0ge307XG4gICAgZm9yICh2YXIgayBpbiB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFN0cmluZyhrKTtcbiAgICAgICAgICAgIHZhbGlkYXRlRGF0YVtrZXldID0gdmFsdWVzW2tleV0gIT09ICcnID8gdmFsdWVzW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYVtzeW5jID8gJ3ZhbGlkYXRlU3luYycgOiAndmFsaWRhdGUnXSh2YWxpZGF0ZURhdGEsIHtcbiAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBjbG9uZVJlcXVlc3RlZCA9IG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHNob3VsZENsb25lID0gY2xvbmVSZXF1ZXN0ZWQgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChlKTtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gc2hvdWxkQ2xvbmVcbiAgICAgICAgICAgICAgICA/IGRlZXBtZXJnZShBcnJheS5pc0FycmF5KGUpID8gW10gOiB7fSwgZSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICA6IGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLnB1c2goZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59XG5cbnZhciBGaWVsZElubmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGaWVsZElubmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZpZWxkSW5uZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIHZhciByZW5kZXIgPSBwcm9wcy5yZW5kZXIsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudDtcbiAgICAgICAgd2FybmluZyghKGNvbXBvbmVudCAmJiByZW5kZXIpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmllbGQgcmVuZGVyPiBpbiB0aGUgc2FtZSA8RmllbGQ+IGNvbXBvbmVudDsgPEZpZWxkIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHdhcm5pbmcoIShjb21wb25lbnQgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgICAgICAgd2FybmluZyghKHJlbmRlciAmJiBjaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIHJlbmRlcj4gYW5kIDxGaWVsZCBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmllbGRJbm5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB0aGlzKTtcbiAgICB9O1xuICAgIEZpZWxkSW5uZXIucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gcHJldlByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnVucmVnaXN0ZXJGaWVsZChwcmV2UHJvcHMubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGUgIT09IHByZXZQcm9wcy52YWxpZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGaWVsZElubmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSk7XG4gICAgfTtcbiAgICBGaWVsZElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHZhbGlkYXRlID0gX2EudmFsaWRhdGUsIG5hbWUgPSBfYS5uYW1lLCByZW5kZXIgPSBfYS5yZW5kZXIsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIF9iID0gX2EuY29tcG9uZW50LCBjb21wb25lbnQgPSBfYiA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9iLCBmb3JtaWsgPSBfYS5mb3JtaWssIHByb3BzID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcInZhbGlkYXRlXCIsIFwibmFtZVwiLCBcInJlbmRlclwiLCBcImNoaWxkcmVuXCIsIFwiY29tcG9uZW50XCIsIFwiZm9ybWlrXCJdKTtcbiAgICAgICAgdmFyIF92YWxpZGF0ZSA9IGZvcm1pay52YWxpZGF0ZSwgX3ZhbGlkYXRpb25TY2hlbWEgPSBmb3JtaWsudmFsaWRhdGlvblNjaGVtYSwgcmVzdE9mRm9ybWlrID0gdHNsaWJfMS5fX3Jlc3QoZm9ybWlrLCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuICAgICAgICB2YXIgZmllbGQgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudHlwZSA9PT0gJ3JhZGlvJyB8fCBwcm9wcy50eXBlID09PSAnY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgPyBwcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIDogZ2V0SW4oZm9ybWlrLnZhbHVlcywgbmFtZSksXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZvcm1pay5oYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkJsdXI6IGZvcm1pay5oYW5kbGVCbHVyLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYmFnID0geyBmaWVsZDogZmllbGQsIGZvcm06IHJlc3RPZkZvcm1payB9O1xuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oYmFnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgdHNsaWJfMS5fX2Fzc2lnbih7IHJlZjogaW5uZXJSZWYgfSwgZmllbGQsIHJlc3QsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHRzbGliXzEuX19hc3NpZ24oe30sIGJhZywgcHJvcHMsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBGaWVsZElubmVyO1xufShSZWFjdC5Db21wb25lbnQpKTtcbnZhciBGaWVsZCA9IGNvbm5lY3QoRmllbGRJbm5lcik7XG5cbnZhciBGb3JtID0gY29ubmVjdChmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5mb3JtaWssIGhhbmRsZVJlc2V0ID0gX2IuaGFuZGxlUmVzZXQsIGhhbmRsZVN1Ym1pdCA9IF9iLmhhbmRsZVN1Ym1pdCwgcHJvcHMgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1wiZm9ybWlrXCJdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHRzbGliXzEuX19hc3NpZ24oeyBvblJlc2V0OiBoYW5kbGVSZXNldCwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9LCBwcm9wcykpKTtcbn0pO1xuRm9ybS5kaXNwbGF5TmFtZSA9ICdGb3JtJztcblxuZnVuY3Rpb24gd2l0aEZvcm1payhfYSkge1xuICAgIHZhciBfYiA9IF9hLm1hcFByb3BzVG9WYWx1ZXMsIG1hcFByb3BzVG9WYWx1ZXMgPSBfYiA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHZhbmlsbGFQcm9wcykge1xuICAgICAgICB2YXIgdmFsID0ge307XG4gICAgICAgIGZvciAodmFyIGsgaW4gdmFuaWxsYVByb3BzKSB7XG4gICAgICAgICAgICBpZiAodmFuaWxsYVByb3BzLmhhc093blByb3BlcnR5KGspICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHZhbmlsbGFQcm9wc1trXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhbFtrXSA9IHZhbmlsbGFQcm9wc1trXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0gOiBfYiwgY29uZmlnID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcIm1hcFByb3BzVG9WYWx1ZXNcIl0pO1xuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVGb3JtaWsoQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBjb21wb25lbnREaXNwbGF5TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fFxuICAgICAgICAgICAgQ29tcG9uZW50Lm5hbWUgfHxcbiAgICAgICAgICAgIChDb21wb25lbnQuY29uc3RydWN0b3IgJiYgQ29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUpIHx8XG4gICAgICAgICAgICAnQ29tcG9uZW50JztcbiAgICAgICAgdmFyIEMgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICAgICAgdHNsaWJfMS5fX2V4dGVuZHMoQywgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIEMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgICAgICAgICAgX3RoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcudmFsaWRhdGUodmFsdWVzLCBfdGhpcy5wcm9wcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy52YWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihjb25maWcudmFsaWRhdGlvblNjaGVtYSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29uZmlnLnZhbGlkYXRpb25TY2hlbWEoX3RoaXMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKHZhbHVlcywgYWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLmhhbmRsZVN1Ym1pdCh2YWx1ZXMsIHRzbGliXzEuX19hc3NpZ24oe30sIGFjdGlvbnMsIHsgcHJvcHM6IF90aGlzLnByb3BzIH0pKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbmRlckZvcm1Db21wb25lbnQgPSBmdW5jdGlvbiAoZm9ybWlrUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCB0c2xpYl8xLl9fYXNzaWduKHt9LCBfdGhpcy5wcm9wcywgZm9ybWlrUHJvcHMpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBwcm9wcyA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1paywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJvcHMsIGNvbmZpZywgeyB2YWxpZGF0ZTogY29uZmlnLnZhbGlkYXRlICYmIHRoaXMudmFsaWRhdGUsIHZhbGlkYXRpb25TY2hlbWE6IGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hICYmIHRoaXMudmFsaWRhdGlvblNjaGVtYSwgaW5pdGlhbFZhbHVlczogbWFwUHJvcHNUb1ZhbHVlcyh0aGlzLnByb3BzKSwgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0LCByZW5kZXI6IHRoaXMucmVuZGVyRm9ybUNvbXBvbmVudCB9KSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEMuZGlzcGxheU5hbWUgPSBcIldpdGhGb3JtaWsoXCIgKyBjb21wb25lbnREaXNwbGF5TmFtZSArIFwiKVwiO1xuICAgICAgICAgICAgcmV0dXJuIEM7XG4gICAgICAgIH0oUmVhY3QuQ29tcG9uZW50KSk7XG4gICAgICAgIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhDLCBDb21wb25lbnQpO1xuICAgIH07XG59XG5cbnZhciBtb3ZlID0gZnVuY3Rpb24gKGFycmF5LCBmcm9tLCB0bykge1xuICAgIHZhciBjb3B5ID0gKGFycmF5IHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciB2YWx1ZSA9IGNvcHlbZnJvbV07XG4gICAgY29weS5zcGxpY2UoZnJvbSwgMSk7XG4gICAgY29weS5zcGxpY2UodG8sIDAsIHZhbHVlKTtcbiAgICByZXR1cm4gY29weTtcbn07XG52YXIgc3dhcCA9IGZ1bmN0aW9uIChhcnJheSwgaW5kZXhBLCBpbmRleEIpIHtcbiAgICB2YXIgY29weSA9IChhcnJheSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgYSA9IGNvcHlbaW5kZXhBXTtcbiAgICBjb3B5W2luZGV4QV0gPSBjb3B5W2luZGV4Ql07XG4gICAgY29weVtpbmRleEJdID0gYTtcbiAgICByZXR1cm4gY29weTtcbn07XG52YXIgaW5zZXJ0ID0gZnVuY3Rpb24gKGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgICB2YXIgY29weSA9IChhcnJheSB8fCBbXSkuc2xpY2UoKTtcbiAgICBjb3B5LnNwbGljZShpbmRleCwgMCwgdmFsdWUpO1xuICAgIHJldHVybiBjb3B5O1xufTtcbnZhciByZXBsYWNlID0gZnVuY3Rpb24gKGFycmF5LCBpbmRleCwgdmFsdWUpIHtcbiAgICB2YXIgY29weSA9IChhcnJheSB8fCBbXSkuc2xpY2UoKTtcbiAgICBjb3B5W2luZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiBjb3B5O1xufTtcbnZhciBGaWVsZEFycmF5SW5uZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZpZWxkQXJyYXlJbm5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWVsZEFycmF5SW5uZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnVwZGF0ZUFycmF5RmllbGQgPSBmdW5jdGlvbiAoZm4sIGFsdGVyVG91Y2hlZCwgYWx0ZXJFcnJvcnMpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLCBuYW1lID0gX2EubmFtZSwgdmFsaWRhdGVPbkNoYW5nZSA9IF9hLnZhbGlkYXRlT25DaGFuZ2UsIF9iID0gX2EuZm9ybWlrLCBzZXRGb3JtaWtTdGF0ZSA9IF9iLnNldEZvcm1pa1N0YXRlLCB2YWxpZGF0ZUZvcm0gPSBfYi52YWxpZGF0ZUZvcm07XG4gICAgICAgICAgICBzZXRGb3JtaWtTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAodHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7IHZhbHVlczogc2V0SW4ocHJldlN0YXRlLnZhbHVlcywgbmFtZSwgZm4oZ2V0SW4ocHJldlN0YXRlLnZhbHVlcywgbmFtZSkpKSwgZXJyb3JzOiBhbHRlckVycm9yc1xuICAgICAgICAgICAgICAgICAgICA/IHNldEluKHByZXZTdGF0ZS5lcnJvcnMsIG5hbWUsIGZuKGdldEluKHByZXZTdGF0ZS5lcnJvcnMsIG5hbWUpKSlcbiAgICAgICAgICAgICAgICAgICAgOiBwcmV2U3RhdGUuZXJyb3JzLCB0b3VjaGVkOiBhbHRlclRvdWNoZWRcbiAgICAgICAgICAgICAgICAgICAgPyBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgbmFtZSwgZm4oZ2V0SW4ocHJldlN0YXRlLnRvdWNoZWQsIG5hbWUpKSlcbiAgICAgICAgICAgICAgICAgICAgOiBwcmV2U3RhdGUudG91Y2hlZCB9KSk7IH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiAoYXJyYXkgfHwgW10pLmNvbmNhdChbY2xvbmVEZWVwKHZhbHVlKV0pOyB9LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVQdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wdXNoKHZhbHVlKTsgfTsgfTtcbiAgICAgICAgX3RoaXMuc3dhcCA9IGZ1bmN0aW9uIChpbmRleEEsIGluZGV4Qikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiBzd2FwKGFycmF5LCBpbmRleEEsIGluZGV4Qik7IH0sIHRydWUsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVTd2FwID0gZnVuY3Rpb24gKGluZGV4QSwgaW5kZXhCKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuc3dhcChpbmRleEEsIGluZGV4Qik7XG4gICAgICAgIH07IH07XG4gICAgICAgIF90aGlzLm1vdmUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gbW92ZShhcnJheSwgZnJvbSwgdG8pOyB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubW92ZShmcm9tLCB0byk7IH07IH07XG4gICAgICAgIF90aGlzLmluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gaW5zZXJ0KGFycmF5LCBpbmRleCwgdmFsdWUpOyB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlSW5zZXJ0ID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaW5zZXJ0KGluZGV4LCB2YWx1ZSk7IH07IH07XG4gICAgICAgIF90aGlzLnJlcGxhY2UgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIHJlcGxhY2UoYXJyYXksIGluZGV4LCB2YWx1ZSk7IH0sIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVJlcGxhY2UgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucmVwbGFjZShpbmRleCwgdmFsdWUpO1xuICAgICAgICB9OyB9O1xuICAgICAgICBfdGhpcy51bnNoaWZ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gLTE7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBhcnJheSA/IFt2YWx1ZV0uY29uY2F0KGFycmF5KSA6IFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgIH0sIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlVW5zaGlmdCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudW5zaGlmdCh2YWx1ZSk7IH07IH07XG4gICAgICAgIF90aGlzLmhhbmRsZVJlbW92ZSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucmVtb3ZlKGluZGV4KTsgfTsgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUG9wID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucG9wKCk7IH07IH07XG4gICAgICAgIF90aGlzLnJlbW92ZSA9IF90aGlzLnJlbW92ZS5iaW5kKF90aGlzKTtcbiAgICAgICAgX3RoaXMucG9wID0gX3RoaXMucG9wLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZpZWxkQXJyYXlJbm5lci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gYXJyYXkgPyBhcnJheS5zbGljZSgpIDogW107XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGNvcHlbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oY29weS5zcGxpY2UpKSB7XG4gICAgICAgICAgICAgICAgY29weS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgRmllbGRBcnJheUlubmVyLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgIHZhciB0bXAgPSBhcnJheTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdG1wICYmIHRtcC5wb3AgJiYgdG1wLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRtcDtcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBGaWVsZEFycmF5SW5uZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFycmF5SGVscGVycyA9IHtcbiAgICAgICAgICAgIHB1c2g6IHRoaXMucHVzaCxcbiAgICAgICAgICAgIHBvcDogdGhpcy5wb3AsXG4gICAgICAgICAgICBzd2FwOiB0aGlzLnN3YXAsXG4gICAgICAgICAgICBtb3ZlOiB0aGlzLm1vdmUsXG4gICAgICAgICAgICBpbnNlcnQ6IHRoaXMuaW5zZXJ0LFxuICAgICAgICAgICAgcmVwbGFjZTogdGhpcy5yZXBsYWNlLFxuICAgICAgICAgICAgdW5zaGlmdDogdGhpcy51bnNoaWZ0LFxuICAgICAgICAgICAgcmVtb3ZlOiB0aGlzLnJlbW92ZSxcbiAgICAgICAgICAgIGhhbmRsZVB1c2g6IHRoaXMuaGFuZGxlUHVzaCxcbiAgICAgICAgICAgIGhhbmRsZVBvcDogdGhpcy5oYW5kbGVQb3AsXG4gICAgICAgICAgICBoYW5kbGVTd2FwOiB0aGlzLmhhbmRsZVN3YXAsXG4gICAgICAgICAgICBoYW5kbGVNb3ZlOiB0aGlzLmhhbmRsZU1vdmUsXG4gICAgICAgICAgICBoYW5kbGVJbnNlcnQ6IHRoaXMuaGFuZGxlSW5zZXJ0LFxuICAgICAgICAgICAgaGFuZGxlUmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgICAgICAgaGFuZGxlVW5zaGlmdDogdGhpcy5oYW5kbGVVbnNoaWZ0LFxuICAgICAgICAgICAgaGFuZGxlUmVtb3ZlOiB0aGlzLmhhbmRsZVJlbW92ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgY29tcG9uZW50ID0gX2EuY29tcG9uZW50LCByZW5kZXIgPSBfYS5yZW5kZXIsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIG5hbWUgPSBfYS5uYW1lLCBfYiA9IF9hLmZvcm1paywgX3ZhbGlkYXRlID0gX2IudmFsaWRhdGUsIF92YWxpZGF0aW9uU2NoZW1hID0gX2IudmFsaWRhdGlvblNjaGVtYSwgcmVzdE9mRm9ybWlrID0gdHNsaWJfMS5fX3Jlc3QoX2IsIFtcInZhbGlkYXRlXCIsIFwidmFsaWRhdGlvblNjaGVtYVwiXSk7XG4gICAgICAgIHZhciBwcm9wcyA9IHRzbGliXzEuX19hc3NpZ24oe30sIGFycmF5SGVscGVycywgeyBmb3JtOiByZXN0T2ZGb3JtaWssIG5hbWU6IG5hbWUgfSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRcbiAgICAgICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKVxuICAgICAgICAgICAgOiByZW5kZXJcbiAgICAgICAgICAgICAgICA/IHJlbmRlcihwcm9wcylcbiAgICAgICAgICAgICAgICA6IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgID8gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoaWxkcmVuKHByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSA/IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICBGaWVsZEFycmF5SW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkQXJyYXlJbm5lcjtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG52YXIgRmllbGRBcnJheSA9IGNvbm5lY3QoRmllbGRBcnJheUlubmVyKTtcblxudmFyIEZhc3RGaWVsZElubmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhGYXN0RmllbGRJbm5lciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGYXN0RmllbGRJbm5lcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgdmFyIHJlbmRlciA9IHByb3BzLnJlbmRlciwgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgICAgICB3YXJuaW5nKCEoY29tcG9uZW50ICYmIHJlbmRlciksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmFzdEZpZWxkIHJlbmRlcj4gaW4gdGhlIHNhbWUgPEZhc3RGaWVsZD4gY29tcG9uZW50OyA8RmFzdEZpZWxkIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHdhcm5pbmcoIShjb21wb25lbnQgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgY29tcG9uZW50PiBhbmQgPEZhc3RGaWVsZCBjaGlsZHJlbj4gYXMgYSBmdW5jdGlvbiBpbiB0aGUgc2FtZSA8RmFzdEZpZWxkPiBjb21wb25lbnQ7IDxGYXN0RmllbGQgY29tcG9uZW50PiB3aWxsIGJlIGlnbm9yZWQuJyk7XG4gICAgICAgIHdhcm5pbmcoIShyZW5kZXIgJiYgY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgcmVuZGVyPiBhbmQgPEZhc3RGaWVsZCBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZhc3RGaWVsZD4gY29tcG9uZW50OyA8RmFzdEZpZWxkIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGYXN0RmllbGRJbm5lci5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2hvdWxkVXBkYXRlKHByb3BzLCB0aGlzLnByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnZXRJbih0aGlzLnByb3BzLmZvcm1pay52YWx1ZXMsIHRoaXMucHJvcHMubmFtZSkgIT09XG4gICAgICAgICAgICBnZXRJbihwcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpIHx8XG4gICAgICAgICAgICBnZXRJbih0aGlzLnByb3BzLmZvcm1pay5lcnJvcnMsIHRoaXMucHJvcHMubmFtZSkgIT09XG4gICAgICAgICAgICAgICAgZ2V0SW4ocHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSB8fFxuICAgICAgICAgICAgZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSAhPT1cbiAgICAgICAgICAgICAgICBnZXRJbihwcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSB8fFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoIHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5pc1N1Ym1pdHRpbmcgIT09IHByb3BzLmZvcm1pay5pc1N1Ym1pdHRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBGYXN0RmllbGRJbm5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB0aGlzKTtcbiAgICB9O1xuICAgIEZhc3RGaWVsZElubmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHByZXZQcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay51bnJlZ2lzdGVyRmllbGQocHJldlByb3BzLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZhbGlkYXRlICE9PSBwcmV2UHJvcHMudmFsaWRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRmFzdEZpZWxkSW5uZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb3BzLmZvcm1pay51bnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB9O1xuICAgIEZhc3RGaWVsZElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHZhbGlkYXRlID0gX2EudmFsaWRhdGUsIG5hbWUgPSBfYS5uYW1lLCByZW5kZXIgPSBfYS5yZW5kZXIsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIF9iID0gX2EuY29tcG9uZW50LCBjb21wb25lbnQgPSBfYiA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9iLCBmb3JtaWsgPSBfYS5mb3JtaWssIHByb3BzID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcInZhbGlkYXRlXCIsIFwibmFtZVwiLCBcInJlbmRlclwiLCBcImNoaWxkcmVuXCIsIFwiY29tcG9uZW50XCIsIFwiZm9ybWlrXCJdKTtcbiAgICAgICAgdmFyIF92YWxpZGF0ZSA9IGZvcm1pay52YWxpZGF0ZSwgX3ZhbGlkYXRpb25TY2hlbWEgPSBmb3JtaWsudmFsaWRhdGlvblNjaGVtYSwgcmVzdE9mRm9ybWlrID0gdHNsaWJfMS5fX3Jlc3QoZm9ybWlrLCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuICAgICAgICB2YXIgZmllbGQgPSB7XG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudHlwZSA9PT0gJ3JhZGlvJyB8fCBwcm9wcy50eXBlID09PSAnY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgPyBwcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIDogZ2V0SW4oZm9ybWlrLnZhbHVlcywgbmFtZSksXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZvcm1pay5oYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkJsdXI6IGZvcm1pay5oYW5kbGVCbHVyLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgYmFnID0geyBmaWVsZDogZmllbGQsIGZvcm06IHJlc3RPZkZvcm1payB9O1xuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyKGJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oYmFnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgdHNsaWJfMS5fX2Fzc2lnbih7IHJlZjogaW5uZXJSZWYgfSwgZmllbGQsIHJlc3QsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHRzbGliXzEuX19hc3NpZ24oe30sIGJhZywgcHJvcHMsIHsgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiAgICB9O1xuICAgIHJldHVybiBGYXN0RmllbGRJbm5lcjtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG52YXIgRmFzdEZpZWxkID0gY29ubmVjdChGYXN0RmllbGRJbm5lcik7XG5cbnZhciBFcnJvck1lc3NhZ2VJbXBsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhFcnJvck1lc3NhZ2VJbXBsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVycm9yTWVzc2FnZUltcGwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRXJyb3JNZXNzYWdlSW1wbC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIGlmIChnZXRJbih0aGlzLnByb3BzLmZvcm1pay5lcnJvcnMsIHRoaXMucHJvcHMubmFtZSkgIT09XG4gICAgICAgICAgICBnZXRJbihwcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpIHx8XG4gICAgICAgICAgICBnZXRJbih0aGlzLnByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpICE9PVxuICAgICAgICAgICAgICAgIGdldEluKHByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpIHx8XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFcnJvck1lc3NhZ2VJbXBsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGNvbXBvbmVudCA9IF9hLmNvbXBvbmVudCwgZm9ybWlrID0gX2EuZm9ybWlrLCByZW5kZXIgPSBfYS5yZW5kZXIsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIG5hbWUgPSBfYS5uYW1lLCByZXN0ID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcImNvbXBvbmVudFwiLCBcImZvcm1pa1wiLCBcInJlbmRlclwiLCBcImNoaWxkcmVuXCIsIFwibmFtZVwiXSk7XG4gICAgICAgIHZhciB0b3VjaCA9IGdldEluKGZvcm1pay50b3VjaGVkLCBuYW1lKTtcbiAgICAgICAgdmFyIGVycm9yID0gZ2V0SW4oZm9ybWlrLmVycm9ycywgbmFtZSk7XG4gICAgICAgIHJldHVybiAhIXRvdWNoICYmICEhZXJyb3JcbiAgICAgICAgICAgID8gcmVuZGVyXG4gICAgICAgICAgICAgICAgPyBpc0Z1bmN0aW9uKHJlbmRlcikgPyByZW5kZXIoZXJyb3IpIDogbnVsbFxuICAgICAgICAgICAgICAgIDogY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgPyBpc0Z1bmN0aW9uKGNoaWxkcmVuKSA/IGNoaWxkcmVuKGVycm9yKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHJlc3QsIGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvclxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEVycm9yTWVzc2FnZUltcGw7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xudmFyIEVycm9yTWVzc2FnZSA9IGNvbm5lY3QoRXJyb3JNZXNzYWdlSW1wbCk7XG5cbmV4cG9ydHMuRm9ybWlrID0gRm9ybWlrO1xuZXhwb3J0cy55dXBUb0Zvcm1FcnJvcnMgPSB5dXBUb0Zvcm1FcnJvcnM7XG5leHBvcnRzLnZhbGlkYXRlWXVwU2NoZW1hID0gdmFsaWRhdGVZdXBTY2hlbWE7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLkZvcm0gPSBGb3JtO1xuZXhwb3J0cy53aXRoRm9ybWlrID0gd2l0aEZvcm1paztcbmV4cG9ydHMubW92ZSA9IG1vdmU7XG5leHBvcnRzLnN3YXAgPSBzd2FwO1xuZXhwb3J0cy5pbnNlcnQgPSBpbnNlcnQ7XG5leHBvcnRzLnJlcGxhY2UgPSByZXBsYWNlO1xuZXhwb3J0cy5GaWVsZEFycmF5ID0gRmllbGRBcnJheTtcbmV4cG9ydHMuZ2V0SW4gPSBnZXRJbjtcbmV4cG9ydHMuc2V0SW4gPSBzZXRJbjtcbmV4cG9ydHMuc2V0TmVzdGVkT2JqZWN0VmFsdWVzID0gc2V0TmVzdGVkT2JqZWN0VmFsdWVzO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNJbnRlZ2VyID0gaXNJbnRlZ2VyO1xuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuZXhwb3J0cy5pc05hTiA9IGlzTmFOO1xuZXhwb3J0cy5pc0VtcHR5Q2hpbGRyZW4gPSBpc0VtcHR5Q2hpbGRyZW47XG5leHBvcnRzLmlzUHJvbWlzZSA9IGlzUHJvbWlzZTtcbmV4cG9ydHMuZ2V0QWN0aXZlRWxlbWVudCA9IGdldEFjdGl2ZUVsZW1lbnQ7XG5leHBvcnRzLm1ha2VDYW5jZWxhYmxlID0gbWFrZUNhbmNlbGFibGU7XG5leHBvcnRzLkZhc3RGaWVsZCA9IEZhc3RGaWVsZDtcbmV4cG9ydHMuRm9ybWlrUHJvdmlkZXIgPSBGb3JtaWtQcm92aWRlcjtcbmV4cG9ydHMuRm9ybWlrQ29uc3VtZXIgPSBGb3JtaWtDb25zdW1lcjtcbmV4cG9ydHMuY29ubmVjdCA9IGNvbm5lY3Q7XG5leHBvcnRzLkVycm9yTWVzc2FnZSA9IEVycm9yTWVzc2FnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1pay5janMuZGV2ZWxvcG1lbnQuanMubWFwXG4iLCIndXNlIHN0cmljdCdcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Zvcm1pay5janMucHJvZHVjdGlvbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Zvcm1pay5janMuZGV2ZWxvcG1lbnQuanMnKTtcbn0iLCIvLyBAZmxvd1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5ID0gJ19fZ2xvYmFsX3VuaXF1ZV9pZF9fJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGdsb2JhbFtrZXldID0gKGdsb2JhbFtrZXldIHx8IDApICsgMTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvanNvbi10by11cmwvaW5kZXguanNcIik7IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG4iLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc01hcCA9IHJlcXVpcmUoJy4vaXNNYXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1NldCA9IHJlcXVpcmUoJy4vaXNTZXQnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoaXNNYXAodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG4iLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcbiIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG4iLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTWFwYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBgU2V0YCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcjtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcbiIsInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCJ2YXIgYmFzZUlzTWFwID0gcmVxdWlyZSgnLi9fYmFzZUlzTWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc01hcCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzTWFwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTWFwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc01hcChuZXcgTWFwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTWFwKG5ldyBXZWFrTWFwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc01hcCA9IG5vZGVJc01hcCA/IGJhc2VVbmFyeShub2RlSXNNYXApIDogYmFzZUlzTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFwO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9QYXRoKCdhLmIuYycpO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddXG4gKlxuICogXy50b1BhdGgoJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnMCcsICdiJywgJ2MnXVxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCB0b0tleSk7XG4gIH1cbiAgcmV0dXJuIGlzU3ltYm9sKHZhbHVlKSA/IFt2YWx1ZV0gOiBjb3B5QXJyYXkoc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvUGF0aDtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU3RyaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvbnNlcmlhbGl6ZWpzb24vZGlzdC9janMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvbnZhbC10aXBweS9kaXN0L2Nqcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanNcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIga2V5TGlzdCA9IE9iamVjdC5rZXlzO1xudmFyIGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc0VsZW1lbnRUeXBlID0gdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIC8vIGZhc3QtZGVlcC1lcXVhbCBpbmRleC5qcyAyLjAuMVxuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIHZhciBhcnJBID0gaXNBcnJheShhKVxuICAgICAgLCBhcnJCID0gaXNBcnJheShiKVxuICAgICAgLCBpXG4gICAgICAsIGxlbmd0aFxuICAgICAgLCBrZXk7XG5cbiAgICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFyckEgIT0gYXJyQikgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGVcbiAgICAgICwgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgICBpZiAoZGF0ZUEgIT0gZGF0ZUIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZGF0ZUEgJiYgZGF0ZUIpIHJldHVybiBhLmdldFRpbWUoKSA9PSBiLmdldFRpbWUoKTtcblxuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICAgLCByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG5cbiAgICB2YXIga2V5cyA9IGtleUxpc3QoYSk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoICE9PSBrZXlMaXN0KGIpLmxlbmd0aClcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghaGFzUHJvcC5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG4gICAgLy8gc3RhcnQgcmVhY3QtZmFzdC1jb21wYXJlXG4gICAgLy8gY3VzdG9tIGhhbmRsaW5nIGZvciBET00gZWxlbWVudHNcbiAgICBpZiAoaGFzRWxlbWVudFR5cGUgJiYgYSBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgYiBpbnN0YW5jZW9mIEVsZW1lbnQpXG4gICAgICByZXR1cm4gYSA9PT0gYjtcblxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgUmVhY3RcbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBpZiAoa2V5ID09PSAnX293bmVyJyAmJiBhLiQkdHlwZW9mKSB7XG4gICAgICAgIC8vIFJlYWN0LXNwZWNpZmljOiBhdm9pZCB0cmF2ZXJzaW5nIFJlYWN0IGVsZW1lbnRzJyBfb3duZXIuXG4gICAgICAgIC8vICBfb3duZXIgY29udGFpbnMgY2lyY3VsYXIgcmVmZXJlbmNlc1xuICAgICAgICAvLyBhbmQgaXMgbm90IG5lZWRlZCB3aGVuIGNvbXBhcmluZyB0aGUgYWN0dWFsIGVsZW1lbnRzIChhbmQgbm90IHRoZWlyIG93bmVycylcbiAgICAgICAgLy8gLiQkdHlwZW9mIGFuZCAuX3N0b3JlIG9uIGp1c3QgcmVhc29uYWJsZSBtYXJrZXJzIG9mIGEgcmVhY3QgZWxlbWVudFxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFsbCBvdGhlciBwcm9wZXJ0aWVzIHNob3VsZCBiZSB0cmF2ZXJzZWQgYXMgdXN1YWxcbiAgICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZW5kIHJlYWN0LWZhc3QtY29tcGFyZVxuXG4gICAgLy8gZmFzdC1kZWVwLWVxdWFsIGluZGV4LmpzIDIuMC4xXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xufVxuLy8gZW5kIGZhc3QtZGVlcC1lcXVhbFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cG9ydGVkRXF1YWwoYSwgYikge1xuICB0cnkge1xuICAgIHJldHVybiBlcXVhbChhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoKGVycm9yLm1lc3NhZ2UgJiYgZXJyb3IubWVzc2FnZS5tYXRjaCgvc3RhY2t8cmVjdXJzaW9uL2kpKSB8fCAoZXJyb3IubnVtYmVyID09PSAtMjE0NjgyODI2MCkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogcmVhY3QtZmFzdC1jb21wYXJlIGRvZXMgbm90IGhhbmRsZSBjaXJjdWxhciByZWZlcmVuY2VzLicsIGVycm9yLm5hbWUsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1wYWdpbmF0aW5nL2Rpc3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cbnZhciBCcm93c2VyUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcm93c2VyUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gKDAsIF9oaXN0b3J5LmNyZWF0ZUJyb3dzZXJIaXN0b3J5KShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8QnJvd3NlclJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKTtcbiAgfTtcblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXIyLmRlZmF1bHQsIHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgfTtcblxuICByZXR1cm4gQnJvd3NlclJvdXRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBiYXNlbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZvcmNlUmVmcmVzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGtleUxlbmd0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBCcm93c2VyUm91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG52YXIgSGFzaFJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGlzdG9yeSA9ICgwLCBfaGlzdG9yeS5jcmVhdGVIYXNoSGlzdG9yeSkoX3RoaXMucHJvcHMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIik7XG4gIH07XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyMi5kZWZhdWx0LCB7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5IYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGhhc2hUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKSxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEhhc2hSb3V0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGlzTW9kaWZpZWRFdmVudCA9IGZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59O1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG52YXIgTGluayA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsaWNrKSBfdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICAgIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAgICFfdGhpcy5wcm9wcy50YXJnZXQgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAgICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIGlnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgdmFyIGhpc3RvcnkgPSBfdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xuICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICByZXBsYWNlID0gX3RoaXMkcHJvcHMucmVwbGFjZSxcbiAgICAgICAgICAgICAgdG8gPSBfdGhpcyRwcm9wcy50bztcblxuXG4gICAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh0byk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCh0byk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBMaW5rLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHJlcGxhY2UgPSBfcHJvcHMucmVwbGFjZSxcbiAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgIGlubmVyUmVmID0gX3Byb3BzLmlubmVyUmVmLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFtcInJlcGxhY2VcIiwgXCJ0b1wiLCBcImlubmVyUmVmXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuY29udGV4dC5yb3V0ZXIsIFwiWW91IHNob3VsZCBub3QgdXNlIDxMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIik7XG5cbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodG8gIT09IHVuZGVmaW5lZCwgJ1lvdSBtdXN0IHNwZWNpZnkgdGhlIFwidG9cIiBwcm9wZXJ0eScpO1xuXG4gICAgdmFyIGhpc3RvcnkgPSB0aGlzLmNvbnRleHQucm91dGVyLmhpc3Rvcnk7XG5cbiAgICB2YXIgbG9jYXRpb24gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyAoMCwgX2hpc3RvcnkuY3JlYXRlTG9jYXRpb24pKHRvLCBudWxsLCBudWxsLCBoaXN0b3J5LmxvY2F0aW9uKSA6IHRvO1xuXG4gICAgdmFyIGhyZWYgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIGhyZWY6IGhyZWYsIHJlZjogaW5uZXJSZWYgfSkpO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGFyZ2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgcmVwbGFjZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0bzogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY10pXG59O1xuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcGxhY2U6IGZhbHNlXG59O1xuTGluay5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgaGlzdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgICBwdXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlcGxhY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY3JlYXRlSHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX01lbW9yeVJvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvTWVtb3J5Um91dGVyXCIpO1xuXG52YXIgX01lbW9yeVJvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW1vcnlSb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfTWVtb3J5Um91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1JvdXRlID0gcmVxdWlyZShcIi4vUm91dGVcIik7XG5cbnZhciBfUm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUpO1xuXG52YXIgX0xpbmsgPSByZXF1aXJlKFwiLi9MaW5rXCIpO1xuXG52YXIgX0xpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xudmFyIE5hdkxpbmsgPSBmdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIHRvID0gX3JlZi50byxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGdldElzQWN0aXZlID0gX3JlZi5pc0FjdGl2ZSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widG9cIiwgXCJleGFjdFwiLCBcInN0cmljdFwiLCBcImxvY2F0aW9uXCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiY2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJzdHlsZVwiLCBcImlzQWN0aXZlXCIsIFwiYXJpYS1jdXJyZW50XCJdKTtcblxuICB2YXIgcGF0aCA9ICh0eXBlb2YgdG8gPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0bykpID09PSBcIm9iamVjdFwiID8gdG8ucGF0aG5hbWUgOiB0bztcblxuICAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuICB2YXIgZXNjYXBlZFBhdGggPSBwYXRoICYmIHBhdGgucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGUyLmRlZmF1bHQsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcblxuICAgICAgdmFyIGlzQWN0aXZlID0gISEoZ2V0SXNBY3RpdmUgPyBnZXRJc0FjdGl2ZShtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xpbmsyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgdG86IHRvLFxuICAgICAgICBjbGFzc05hbWU6IGlzQWN0aXZlID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSkuam9pbihcIiBcIikgOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpIDogc3R5bGUsXG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGxcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuTmF2TGluay5wcm9wVHlwZXMgPSB7XG4gIHRvOiBfTGluazIuZGVmYXVsdC5wcm9wVHlwZXMudG8sXG4gIGV4YWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0cmljdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsb2NhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGFjdGl2ZUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBpc0FjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBcImFyaWEtY3VycmVudFwiOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pXG59O1xuXG5OYXZMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiBcImFjdGl2ZVwiLFxuICBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIlxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2TGluazsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Qcm9tcHQgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1Byb21wdFwiKTtcblxudmFyIF9Qcm9tcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvbXB0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1Byb21wdDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9SZWRpcmVjdCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUmVkaXJlY3RcIik7XG5cbnZhciBfUmVkaXJlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVkaXJlY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUmVkaXJlY3QyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUm91dGUgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JvdXRlMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1N0YXRpY1JvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvU3RhdGljUm91dGVyXCIpO1xuXG52YXIgX1N0YXRpY1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0aWNSb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3RhdGljUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1N3aXRjaCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvU3dpdGNoXCIpO1xuXG52YXIgX1N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2l0Y2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3dpdGNoMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dlbmVyYXRlUGF0aCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvZ2VuZXJhdGVQYXRoXCIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZVBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZ2VuZXJhdGVQYXRoMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53aXRoUm91dGVyID0gZXhwb3J0cy5tYXRjaFBhdGggPSBleHBvcnRzLmdlbmVyYXRlUGF0aCA9IGV4cG9ydHMuU3dpdGNoID0gZXhwb3J0cy5TdGF0aWNSb3V0ZXIgPSBleHBvcnRzLlJvdXRlciA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLlJlZGlyZWN0ID0gZXhwb3J0cy5Qcm9tcHQgPSBleHBvcnRzLk5hdkxpbmsgPSBleHBvcnRzLk1lbW9yeVJvdXRlciA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IGV4cG9ydHMuQnJvd3NlclJvdXRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Ccm93c2VyUm91dGVyMiA9IHJlcXVpcmUoXCIuL0Jyb3dzZXJSb3V0ZXJcIik7XG5cbnZhciBfQnJvd3NlclJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ccm93c2VyUm91dGVyMik7XG5cbnZhciBfSGFzaFJvdXRlcjIgPSByZXF1aXJlKFwiLi9IYXNoUm91dGVyXCIpO1xuXG52YXIgX0hhc2hSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGFzaFJvdXRlcjIpO1xuXG52YXIgX0xpbmsyID0gcmVxdWlyZShcIi4vTGlua1wiKTtcblxudmFyIF9MaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmsyKTtcblxudmFyIF9NZW1vcnlSb3V0ZXIyID0gcmVxdWlyZShcIi4vTWVtb3J5Um91dGVyXCIpO1xuXG52YXIgX01lbW9yeVJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW1vcnlSb3V0ZXIyKTtcblxudmFyIF9OYXZMaW5rMiA9IHJlcXVpcmUoXCIuL05hdkxpbmtcIik7XG5cbnZhciBfTmF2TGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZMaW5rMik7XG5cbnZhciBfUHJvbXB0MiA9IHJlcXVpcmUoXCIuL1Byb21wdFwiKTtcblxudmFyIF9Qcm9tcHQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvbXB0Mik7XG5cbnZhciBfUmVkaXJlY3QyID0gcmVxdWlyZShcIi4vUmVkaXJlY3RcIik7XG5cbnZhciBfUmVkaXJlY3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVkaXJlY3QyKTtcblxudmFyIF9Sb3V0ZTIgPSByZXF1aXJlKFwiLi9Sb3V0ZVwiKTtcblxudmFyIF9Sb3V0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZTIpO1xuXG52YXIgX1JvdXRlcjIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcjIpO1xuXG52YXIgX1N0YXRpY1JvdXRlcjIgPSByZXF1aXJlKFwiLi9TdGF0aWNSb3V0ZXJcIik7XG5cbnZhciBfU3RhdGljUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRpY1JvdXRlcjIpO1xuXG52YXIgX1N3aXRjaDIgPSByZXF1aXJlKFwiLi9Td2l0Y2hcIik7XG5cbnZhciBfU3dpdGNoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N3aXRjaDIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDIgPSByZXF1aXJlKFwiLi9nZW5lcmF0ZVBhdGhcIik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlUGF0aDIpO1xuXG52YXIgX21hdGNoUGF0aDIgPSByZXF1aXJlKFwiLi9tYXRjaFBhdGhcIik7XG5cbnZhciBfbWF0Y2hQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoUGF0aDIpO1xuXG52YXIgX3dpdGhSb3V0ZXIyID0gcmVxdWlyZShcIi4vd2l0aFJvdXRlclwiKTtcblxudmFyIF93aXRoUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhSb3V0ZXIyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Ccm93c2VyUm91dGVyID0gX0Jyb3dzZXJSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLkhhc2hSb3V0ZXIgPSBfSGFzaFJvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuTGluayA9IF9MaW5rMy5kZWZhdWx0O1xuZXhwb3J0cy5NZW1vcnlSb3V0ZXIgPSBfTWVtb3J5Um91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5OYXZMaW5rID0gX05hdkxpbmszLmRlZmF1bHQ7XG5leHBvcnRzLlByb21wdCA9IF9Qcm9tcHQzLmRlZmF1bHQ7XG5leHBvcnRzLlJlZGlyZWN0ID0gX1JlZGlyZWN0My5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZSA9IF9Sb3V0ZTMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGVyID0gX1JvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuU3RhdGljUm91dGVyID0gX1N0YXRpY1JvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuU3dpdGNoID0gX1N3aXRjaDMuZGVmYXVsdDtcbmV4cG9ydHMuZ2VuZXJhdGVQYXRoID0gX2dlbmVyYXRlUGF0aDMuZGVmYXVsdDtcbmV4cG9ydHMubWF0Y2hQYXRoID0gX21hdGNoUGF0aDMuZGVmYXVsdDtcbmV4cG9ydHMud2l0aFJvdXRlciA9IF93aXRoUm91dGVyMy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX21hdGNoUGF0aCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvbWF0Y2hQYXRoXCIpO1xuXG52YXIgX21hdGNoUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfbWF0Y2hQYXRoMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93aXRoUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci93aXRoUm91dGVyXCIpO1xuXG52YXIgX3dpdGhSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFJvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF93aXRoUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9NZW1vcnlSb3V0ZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1Byb21wdC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUmVkaXJlY3QuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Sb3V0ZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3dpdGNoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9nZW5lcmF0ZVBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9tYXRjaFBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL3dpdGhSb3V0ZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvcmVkdXguanNcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIGdsb2JhbCwgZGVmaW5lLCBTeXN0ZW0sIFJlZmxlY3QsIFByb21pc2UgKi9cclxudmFyIF9fZXh0ZW5kcztcclxudmFyIF9fYXNzaWduO1xyXG52YXIgX19yZXN0O1xyXG52YXIgX19kZWNvcmF0ZTtcclxudmFyIF9fcGFyYW07XHJcbnZhciBfX21ldGFkYXRhO1xyXG52YXIgX19hd2FpdGVyO1xyXG52YXIgX19nZW5lcmF0b3I7XHJcbnZhciBfX2V4cG9ydFN0YXI7XHJcbnZhciBfX3ZhbHVlcztcclxudmFyIF9fcmVhZDtcclxudmFyIF9fc3ByZWFkO1xyXG52YXIgX19hd2FpdDtcclxudmFyIF9fYXN5bmNHZW5lcmF0b3I7XHJcbnZhciBfX2FzeW5jRGVsZWdhdG9yO1xyXG52YXIgX19hc3luY1ZhbHVlcztcclxudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0O1xyXG52YXIgX19pbXBvcnRTdGFyO1xyXG52YXIgX19pbXBvcnREZWZhdWx0O1xyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFwidHNsaWJcIiwgW1wiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHsgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihleHBvcnRzKSkpOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihtb2R1bGUuZXhwb3J0cykpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoY3JlYXRlRXhwb3J0ZXIocm9vdCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0ZXIoZXhwb3J0cywgcHJldmlvdXMpIHtcclxuICAgICAgICBpZiAoZXhwb3J0cyAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCB2KSB7IHJldHVybiBleHBvcnRzW2lkXSA9IHByZXZpb3VzID8gcHJldmlvdXMoaWQsIHYpIDogdjsgfTtcclxuICAgIH1cclxufSlcclxuKGZ1bmN0aW9uIChleHBvcnRlcikge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3Jlc3QgPSBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgIHZhciB0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcblxyXG4gICAgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgICAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcGFyYW0gPSBmdW5jdGlvbiAocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fbWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2F3YWl0ZXIgPSBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX19nZW5lcmF0b3IgPSBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICAgICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2V4cG9ydFN0YXIgPSBmdW5jdGlvbiAobSwgZXhwb3J0cykge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxuICAgIH07XHJcblxyXG4gICAgX192YWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVhZCA9IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgX19zcHJlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXdhaXQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgICAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY0RlbGVnYXRvciA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgdmFyIGksIHA7XHJcbiAgICAgICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNWYWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgICAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgICAgIHJldHVybiBjb29rZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9faW1wb3J0U3RhciA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnREZWZhdWx0ID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnRlcihcIl9fZXh0ZW5kc1wiLCBfX2V4dGVuZHMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2Fzc2lnblwiLCBfX2Fzc2lnbik7XHJcbiAgICBleHBvcnRlcihcIl9fcmVzdFwiLCBfX3Jlc3QpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2RlY29yYXRlXCIsIF9fZGVjb3JhdGUpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3BhcmFtXCIsIF9fcGFyYW0pO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ldGFkYXRhXCIsIF9fbWV0YWRhdGEpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0ZXJcIiwgX19hd2FpdGVyKTtcclxuICAgIGV4cG9ydGVyKFwiX19nZW5lcmF0b3JcIiwgX19nZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2V4cG9ydFN0YXJcIiwgX19leHBvcnRTdGFyKTtcclxuICAgIGV4cG9ydGVyKFwiX192YWx1ZXNcIiwgX192YWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3JlYWRcIiwgX19yZWFkKTtcclxuICAgIGV4cG9ydGVyKFwiX19zcHJlYWRcIiwgX19zcHJlYWQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0XCIsIF9fYXdhaXQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jR2VuZXJhdG9yXCIsIF9fYXN5bmNHZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jRGVsZWdhdG9yXCIsIF9fYXN5bmNEZWxlZ2F0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jVmFsdWVzXCIsIF9fYXN5bmNWYWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ha2VUZW1wbGF0ZU9iamVjdFwiLCBfX21ha2VUZW1wbGF0ZU9iamVjdCk7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0U3RhclwiLCBfX2ltcG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2ltcG9ydERlZmF1bHRcIiwgX19pbXBvcnREZWZhdWx0KTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9tb2R1bGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==