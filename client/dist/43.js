webpackJsonp([43],{59:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(85),u=l(a);t.default=u.default,e.exports=t.default},67:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(79),u=l(a),r=n(149),o=l(r);u.default.Group=o.default,t.default=u.default,e.exports=t.default},75:function(e,t,n){"use strict";function l(e,t,n){return!a(e.props,t)||!a(e.state,n)}var a=n(86),u={shouldComponentUpdate:function(e,t){return l(this,e,t)}};e.exports=u},79:function(e,t,n){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(9),r=a(u),o=n(6),c=a(o),i=n(3),s=a(i),d=n(8),f=a(d),p=n(5),h=a(p),v=n(4),b=a(v),y=n(1),g=l(y),m=n(2),k=a(m),C=n(7),x=a(C),O=n(59),E=a(O),j=n(22),_=a(j),P=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,l=Object.getOwnPropertySymbols(e);a<l.length;a++)t.indexOf(l[a])<0&&(n[l[a]]=e[l[a]]);return n},A=function(e){function t(){(0,s.default)(this,t);var e=(0,h.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.saveCheckbox=function(t){e.rcCheckbox=t},e}return(0,b.default)(t,e),(0,f.default)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){return!(0,_.default)(this.props,e)||!(0,_.default)(this.state,t)||!(0,_.default)(this.context.checkboxGroup,n.checkboxGroup)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){var e=this.props,t=this.context,n=e.prefixCls,l=e.className,a=e.children,u=e.indeterminate,o=e.style,i=e.onMouseEnter,s=e.onMouseLeave,d=P(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),f=t.checkboxGroup,p=(0,c.default)({},d);f&&(p.onChange=function(){return f.toggleOption({label:a,value:e.value})},p.checked=f.value.indexOf(e.value)!==-1,p.disabled=e.disabled||f.disabled);var h=(0,x.default)(l,(0,r.default)({},n+"-wrapper",!0)),v=(0,x.default)((0,r.default)({},n+"-indeterminate",u));return g.createElement("label",{className:h,style:o,onMouseEnter:i,onMouseLeave:s},g.createElement(E.default,(0,c.default)({},p,{prefixCls:n,className:v,ref:this.saveCheckbox})),void 0!==a?g.createElement("span",null,a):null)}}]),t}(g.Component);t.default=A,A.defaultProps={prefixCls:"ant-checkbox",indeterminate:!1},A.contextTypes={checkboxGroup:k.default.any},e.exports=t.default},80:function(e,t){function n(e){return!!e&&"object"==typeof e}function l(e,t){var n=null==e?void 0:e[t];return r(n)?n:void 0}function a(e){return u(e)&&f.call(e)==o}function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return null!=e&&(a(e)?p.test(s.call(e)):n(e)&&c.test(e))}var o="[object Function]",c=/^\[object .+?Constructor\]$/,i=Object.prototype,s=Function.prototype.toString,d=i.hasOwnProperty,f=i.toString,p=RegExp("^"+s.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=l},81:function(e,t){function n(e){return a(e)&&h.call(e,"callee")&&(!b.call(e,"callee")||v.call(e)==s)}function l(e){return null!=e&&r(e.length)&&!u(e)}function a(e){return c(e)&&l(e)}function u(e){var t=o(e)?v.call(e):"";return t==d||t==f}function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function c(e){return!!e&&"object"==typeof e}var i=9007199254740991,s="[object Arguments]",d="[object Function]",f="[object GeneratorFunction]",p=Object.prototype,h=p.hasOwnProperty,v=p.toString,b=p.propertyIsEnumerable;e.exports=n},82:function(e,t){function n(e){return!!e&&"object"==typeof e}function l(e,t){var n=null==e?void 0:e[t];return o(n)?n:void 0}function a(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=y}function u(e){return r(e)&&h.call(e)==i}function r(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return null!=e&&(u(e)?v.test(f.call(e)):n(e)&&s.test(e))}var c="[object Array]",i="[object Function]",s=/^\[object .+?Constructor\]$/,d=Object.prototype,f=Function.prototype.toString,p=d.hasOwnProperty,h=d.toString,v=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),b=l(Array,"isArray"),y=9007199254740991,g=b||function(e){return n(e)&&a(e.length)&&h.call(e)==c};e.exports=g},83:function(e,t,n){function l(e){return function(t){return null==t?void 0:t[e]}}function a(e){return null!=e&&r(g(e))}function u(e,t){return e="number"==typeof e||p.test(e)?+e:-1,t=null==t?y:t,e>-1&&e%1==0&&e<t}function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=y}function o(e){for(var t=i(e),n=t.length,l=n&&e.length,a=!!l&&r(l)&&(f(e)||d(e)),o=-1,c=[];++o<n;){var s=t[o];(a&&u(s,l)||v.call(e,s))&&c.push(s)}return c}function c(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){if(null==e)return[];c(e)||(e=Object(e));var t=e.length;t=t&&r(t)&&(f(e)||d(e))&&t||0;for(var n=e.constructor,l=-1,a="function"==typeof n&&n.prototype===e,o=Array(t),i=t>0;++l<t;)o[l]=l+"";for(var s in e)i&&u(s,t)||"constructor"==s&&(a||!v.call(e,s))||o.push(s);return o}var s=n(80),d=n(81),f=n(82),p=/^\d+$/,h=Object.prototype,v=h.hasOwnProperty,b=s(Object,"keys"),y=9007199254740991,g=l("length"),m=b?function(e){var t=null==e?void 0:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&a(e)?o(e):c(e)?b(e):[]}:o;e.exports=m},85:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(6),u=l(a),r=n(16),o=l(r),c=n(3),i=l(c),s=n(5),d=l(s),f=n(4),p=l(f),h=n(1),v=l(h),b=n(2),y=l(b),g=n(75),m=l(g),k=n(7),C=l(k),x=function(e){function t(n){(0,i.default)(this,t);var l=(0,d.default)(this,e.call(this,n));O.call(l);var a="checked"in n?n.checked:n.defaultChecked;return l.state={checked:a},l}return(0,p.default)(t,e),t.prototype.componentWillReceiveProps=function(e){"checked"in e&&this.setState({checked:e.checked})},t.prototype.shouldComponentUpdate=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return m.default.shouldComponentUpdate.apply(this,t)},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,l=t.className,a=t.style,r=t.name,c=t.id,i=t.type,s=t.disabled,d=t.readOnly,f=t.tabIndex,p=t.onClick,h=t.onFocus,b=t.onBlur,y=t.autoFocus,g=t.value,m=(0,o.default)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),k=Object.keys(m).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=m[t]),e},{}),x=this.state.checked,O=(0,C.default)(n,l,(e={},e[n+"-checked"]=x,e[n+"-disabled"]=s,e));return v.default.createElement("span",{className:O,style:a},v.default.createElement("input",(0,u.default)({name:r,id:c,type:i,readOnly:d,disabled:s,tabIndex:f,className:n+"-input",checked:!!x,onClick:p,onFocus:h,onBlur:b,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:g},k)),v.default.createElement("span",{className:n+"-inner"}))},t}(v.default.Component);x.propTypes={prefixCls:y.default.string,className:y.default.string,style:y.default.object,name:y.default.string,id:y.default.string,type:y.default.string,defaultChecked:y.default.oneOfType([y.default.number,y.default.bool]),checked:y.default.oneOfType([y.default.number,y.default.bool]),disabled:y.default.bool,onFocus:y.default.func,onBlur:y.default.func,onChange:y.default.func,onClick:y.default.func,tabIndex:y.default.string,readOnly:y.default.bool,autoFocus:y.default.bool,value:y.default.any},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var O=function(){var e=this;this.handleChange=function(t){var n=e.props;n.disabled||("checked"in n||e.setState({checked:t.target.checked}),n.onChange({target:(0,u.default)({},n,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},this.saveInput=function(t){e.input=t}};t.default=x,e.exports=t.default},86:function(e,t,n){"use strict";var l=n(83);e.exports=function(e,t,n,a){var u=n?n.call(a,e,t):void 0;if(void 0!==u)return!!u;if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=l(e),o=l(t),c=r.length;if(c!==o.length)return!1;a=a||null;for(var i=Object.prototype.hasOwnProperty.bind(t),s=0;s<c;s++){var d=r[s];if(!i(d))return!1;var f=e[d],p=t[d],h=n?n.call(a,f,p,d):void 0;if(h===!1||void 0===h&&f!==p)return!1}return!0}},120:[1970,139],139:11,149:function(e,t,n){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(118),r=a(u),o=n(3),c=a(o),i=n(8),s=a(i),d=n(5),f=a(d),p=n(4),h=a(p),v=n(1),b=l(v),y=n(2),g=a(y),m=n(7),k=a(m),C=n(22),x=a(C),O=n(79),E=a(O),j=function(e){function t(e){(0,c.default)(this,t);var n=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleOption=function(e){var t=n.state.value.indexOf(e.value),l=[].concat((0,r.default)(n.state.value));t===-1?l.push(e.value):l.splice(t,1),"value"in n.props||n.setState({value:l});var a=n.props.onChange;a&&a(l)},n.state={value:e.value||e.defaultValue||[]},n}return(0,h.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled}}}},{key:"componentWillReceiveProps",value:function(e){"value"in e&&this.setState({value:e.value||[]})}},{key:"shouldComponentUpdate",value:function(e,t){return!(0,x.default)(this.props,e)||!(0,x.default)(this.state,t)}},{key:"getOptions",value:function(){var e=this.props.options;return e.map(function(e){return"string"==typeof e?{label:e,value:e}:e})}},{key:"render",value:function(){var e=this,t=this.props,n=this.state,l=t.prefixCls,a=t.className,u=t.style,r=t.options,o=l+"-group",c=t.children;r&&r.length>0&&(c=this.getOptions().map(function(a){return b.createElement(E.default,{prefixCls:l,key:a.value.toString(),disabled:"disabled"in a?a.disabled:t.disabled,value:a.value,checked:n.value.indexOf(a.value)!==-1,onChange:function(){return e.toggleOption(a)},className:o+"-item"},a.label)}));var i=(0,k.default)(o,a);return b.createElement("div",{className:i,style:u},c)}}]),t}(b.Component);t.default=j,j.defaultProps={options:[],prefixCls:"ant-checkbox"},j.propTypes={defaultValue:g.default.array,value:g.default.array,options:g.default.array.isRequired,onChange:g.default.func},j.childContextTypes={checkboxGroup:g.default.any},e.exports=t.default},1245:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e){console.log("checked = "+e.target.checked)}function a(e){console.log("checked = ",e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(37),r=l(u),o=n(42),c=l(o),i=n(47),s=l(i),d=n(31),f=l(d),p=n(67),h=l(p);n(40),n(43),n(48),n(34),n(120);var v=n(1),b=l(v),y=h.default.Group,g=["Apple","Pear","Orange"],m=["Apple","Orange"],k=b.default.createClass({displayName:"App",getInitialState:function(){return{checkedList:m,indeterminate:!0,checkAll:!1}},render:function(){return b.default.createElement("div",null,b.default.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},b.default.createElement(h.default,{indeterminate:this.state.indeterminate,onChange:this.onCheckAllChange,checked:this.state.checkAll},"Check all")),b.default.createElement("br",null),b.default.createElement(y,{options:g,value:this.state.checkedList,onChange:this.onChange}))},onChange:function(e){this.setState({checkedList:e,indeterminate:!!e.length&&e.length<g.length,checkAll:e.length===g.length})},onCheckAllChange:function(e){this.setState({checkedList:e.target.checked?g:[],indeterminate:!1,checkAll:e.target.checked})}}),C=b.default.createClass({displayName:"App1",getInitialState:function(){return{checked:!0,disabled:!1}},render:function(){var e=(this.state.checked?"Checked":"Unchecked")+"-"+(this.state.disabled?"Disabled":"Enabled");return b.default.createElement("div",null,b.default.createElement("p",{style:{marginBottom:"20px"}},b.default.createElement(h.default,{checked:this.state.checked,disabled:this.state.disabled,onChange:this.onChange},e)),b.default.createElement("p",null,b.default.createElement(f.default,{type:"primary",size:"small",onClick:this.toggleChecked},this.state.checked?"Uncheck":"Check"),b.default.createElement(f.default,{style:{marginLeft:"10px"},type:"primary",size:"small",onClick:this.toggleDisable},this.state.disabled?"Enable":"Disable")))},toggleChecked:function(){this.setState({checked:!this.state.checked})},toggleDisable:function(){this.setState({disabled:!this.state.disabled})},onChange:function(e){console.log("checked = ",e.target.checked),this.setState({checked:e.target.checked})}}),x=["Apple","Pear","Orange"],O=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],E=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}],j=function(){return b.default.createElement("div",null,b.default.createElement(r.default,{gutter:10},b.default.createElement(c.default,{xs:24,md:12,lg:12},b.default.createElement(s.default,{title:"Basic Checkbox"},b.default.createElement(h.default,{onChange:a},"Checkbox")),b.default.createElement(s.default,{title:"Check All"},b.default.createElement("div",null,b.default.createElement(k,null)))),b.default.createElement(c.default,{xs:24,md:12,lg:12},b.default.createElement(s.default,{title:"Controlled Checkbox"},b.default.createElement("div",null,b.default.createElement(C,null))),b.default.createElement(s.default,{title:"Checkbox Group"},b.default.createElement("div",null,b.default.createElement("div",null,b.default.createElement(y,{options:x,defaultValue:["Apple"],onChange:a}),b.default.createElement("br",null),b.default.createElement(y,{options:O,defaultValue:["Pear"],onChange:a}),b.default.createElement("br",null),b.default.createElement(y,{options:E,disabled:!0,defaultValue:["Apple"],onChange:a})))))))};t.default=j,e.exports=t.default}});