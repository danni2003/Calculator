(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Output__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_css_Layout_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_css_Layout_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_Layout_css__WEBPACK_IMPORTED_MODULE_6__),Layout=function(_Component){Object(D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Layout,_Component);var _super=Object(D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Layout);function Layout(props){var _this;return Object(D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Layout),_this=_super.call(this,props),_this.handleClick=function(_){_this.setState({value:_this.state.value+=_.target.name,clicked:!1})},_this.clear=function(){_this.setState({value:""})},_this.calculate=function(){_this.setState({value:eval(_this.state.value),clicked:!0},(function(){_this.state.value=""}))},_this.state={value:"",clicked:!1},_this}return Object(D_Users_Daniel_Documents_VS_Code_Projects_Calculator_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Layout,[{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Output__WEBPACK_IMPORTED_MODULE_5__.a,{value:this.state.value}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"AC",onClick:function(){return _.clear()}},"AC"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"/",onClick:this.handleClick},"/")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"1",onClick:this.handleClick},"1"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"2",onClick:this.handleClick},"2"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"3",onClick:this.handleClick},"3"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"*",onClick:this.handleClick},"*")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"4",onClick:this.handleClick},"4"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"5",onClick:this.handleClick},"5"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"6",onClick:this.handleClick},"6"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"-",onClick:this.handleClick},"-")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"7",onClick:this.handleClick},"7"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"8",onClick:this.handleClick},"8"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"9",onClick:this.handleClick},"9"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"+",onClick:this.handleClick},"+")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"0",onClick:this.handleClick},"0"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"item",name:"=",onClick:this.calculate},"=")))}}]),Layout}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Layout},function(_,e,t){"use strict";var a=t(0),l=t.n(a);e.a=function(_){return l.a.createElement("h1",{style:{padding:"5px",textAlign:"right"}},""===_.value?0:_.value)}},function(_,e,t){_.exports=t(15)},,,,,function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),n=t(6),c=t.n(n),r=t(1),s=t(2),o=t(4),u=t(3),i=t(7),E=function(_){Object(o.a)(t,_);var e=Object(u.a)(t);function t(_){var a;return Object(r.a)(this,t),(a=e.call(this,_)).state={},a}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(i.a,null))}}]),t}(a.Component);var m=function(){return l.a.createElement("div",null,l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4b6fdd04.chunk.js.map