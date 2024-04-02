// LICENSE_CODE ZON
"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[331],{6331:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,{init:()=>init});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4850);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5380);var react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);var _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(726);var _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2075);var _util_url_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5305);var _util_url_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_4__);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6386);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_5__);var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6357);
// LICENSE_CODE ZON
function _extends(){_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}const useState=react__WEBPACK_IMPORTED_MODULE_0___default().useState,useEffect=react__WEBPACK_IMPORTED_MODULE_0___default().useEffect;const T=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__.Z.T;const REPORT_HASH="#report_issue";const Report_problem=()=>{const _useState=useState(false),_useState2=_slicedToArray(_useState,2),modal=_useState2[0],set_modal=_useState2[1];const _useState3=useState(""),_useState4=_slicedToArray(_useState3,2),url=_useState4[0],set_url=_useState4[1];const _useState5=useState(""),_useState6=_slicedToArray(_useState5,2),subj=_useState6[0],set_subj=_useState6[1];useEffect((()=>{const on_hash_change=()=>set_modal(window.location.hash==REPORT_HASH);window.addEventListener("hashchange",on_hash_change,false);on_hash_change();let qs=_util_url_js__WEBPACK_IMPORTED_MODULE_4___default().qs_parse(window.location.search.replace(/^\?/,""));set_url(qs.url);set_subj(qs.subj);return()=>window.removeEventListener("hashchange",on_hash_change)}),[]);const hide_modal=()=>window.location.hash="";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section report-problem"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"title",href:"#report_issue"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,null,"Report a problem")),modal&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.zv,{url,init_subj:subj,close_cb:hide_modal}))};let dev_mode_counter=0,dev_mode_first_ts=0;const About_details=()=>{const _useState7=useState(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_dev_mode()),_useState8=_slicedToArray(_useState7,2),dev_mode=_useState8[0],set_dev_mode=_useState8[1];const info=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__.Z.use_etask((()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_product_info()),[]);useEffect((()=>{const update=()=>set_dev_mode(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_dev_mode());_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.on("dev_mode_changed",update);return()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.off("dev_mode_changed",update)}),[]);const on_title_click=()=>{let now=Date.now();if(!dev_mode_first_ts||now-dev_mode_first_ts>5e3){dev_mode_first_ts=now;dev_mode_counter=0}dev_mode_counter++;if(dev_mode_counter!=5)return;dev_mode_counter=0;dev_mode_first_ts=0;_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.set_dev_mode(!dev_mode)};const send_email=e=>{_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.perr("be_report_problem",{email:1},{with_log:true,rate_limit:{count:1}})};let s=dev_mode?" (Dev mode)":"";return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.$0,{title:T("About Hola")+s,on_click:on_title_click},info.map((line=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.PH,{key:line.name,label:T(line.name)+":"},line.value))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.PH,null,"Send email to ",react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_3__.Z.Link_mailto,{on_click:send_email})))};const About_layout=()=>{const get_user_info=()=>({user:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_user(),is_plus:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.get_is_premium()});const _useState9=useState(get_user_info()),_useState10=_slicedToArray(_useState9,2),user_info=_useState10[0],set_user_info=_useState10[1];useEffect((()=>{const update=()=>set_user_info(get_user_info());_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.on("user_changed",update);return()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_6__.Z.off("user_changed",update)}),[]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.f6,_extends({},user_info,{title:T("About"),cls:"about"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Report_problem,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About_details,null),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.St,null))};const init=()=>_util_etask_js__WEBPACK_IMPORTED_MODULE_5___default()((function*(){yield(0,_bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_2__.VV)();let root=react_dom__WEBPACK_IMPORTED_MODULE_1___default().createRoot(document.querySelector(".react-root"));root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(About_layout,null))}))},726:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$0:()=>Section,PH:()=>Label_line,St:()=>Legal_section,VV:()=>init_api,f6:()=>Page_layout,zv:()=>Report_problem_modal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4850);var react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);var react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5380);var react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);var classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(793);var classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);var _util_url_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5305);var _util_url_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_3__);var _util_util_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1291);var _util_util_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_4__);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6386);var _util_etask_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_5__);var _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2075);var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6357);var conf__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9641);
// LICENSE_CODE ZON
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}const useState=react__WEBPACK_IMPORTED_MODULE_0___default().useState,useEffect=react__WEBPACK_IMPORTED_MODULE_0___default().useEffect;const T=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__.Z.T,Btn=_bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__.Z.Btn;const www_host=conf__WEBPACK_IMPORTED_MODULE_8__.www_host;const Header=props=>{let logo_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/?utm_source=holaext&utm_content=settings";let cp_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/cp?utm_source=holaext&utm_content=settings";let login_url=_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/signin?utm_source=holaext&utm_content=settings";let logo_cls="logo "+(props.is_plus?"logo-plus":"logo-free");return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-left"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"spacer"}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:logo_cls,target:"_blank",rel:"noopener noreferrer",href:logo_url})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-content"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"title"},props.title),!props.is_plus&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"upgrade-btn"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"",onClick:()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.open_plus_page("","ext_settings_upgrade")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,null,"Upgrade to Premium")))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-right"},props.user&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"user-name",target:"_blank",rel:"noopener noreferrer",href:cp_url},props.user.displayName),!props.user&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"login-btn",target:"_blank",rel:"noopener noreferrer",href:login_url},"Sign in"),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"spacer"})))};const Page_layout=({user,is_plus,title,cls,children,trial})=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("page-layout",cls)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header,{user,is_plus,title}),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"content"},children));const Section=props=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("section",props.cls)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"title",onClick:props.on_click},props.title),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"card"},props.children));const Label_line=props=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{className:"label-line"},props.label&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"label-line-label"},props.label),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"label-line-children"},props.children));const Modal=({action,title,on_close,children,className})=>react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-layout"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("page-modal",className)},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-body"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-title"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",null,title),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"icon-remove",title:T("Close"),onClick:on_close})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-content"},children),action&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page-modal-actions"},action)))),document.body);const Legal_section=props=>react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section,{title:T("Legal")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label_line,{label:T("Privacy Policy")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/legal/privacy"},"https://",www_host,"/legal/privacy")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Label_line,{label:T("End User License")},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url()+"/legal/sla"},"https://",www_host,"/legal/sla")),props.children);const Report_problem_modal=({url,init_subj,close_cb})=>{useEffect((()=>void _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.perr("be_report_problem",{perr:1},{with_log:true,rate_limit:{count:1}})),[]);const _useState=useState(true),_useState2=_slicedToArray(_useState,2),valid_email=_useState2[0],set_valid_email=_useState2[1];const _useState3=useState((()=>_util_util_js__WEBPACK_IMPORTED_MODULE_4___default().get(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_user(),"emails.0.value",""))),_useState4=_slicedToArray(_useState3,2),email=_useState4[0],set_email=_useState4[1];const _useState5=useState(init_subj||""),_useState6=_slicedToArray(_useState5,2),subj=_useState6[0],set_subj=_useState6[1];const _useState7=useState(""),_useState8=_slicedToArray(_useState7,2),desc=_useState8[0],set_desc=_useState8[1];const _useState9=useState(""),_useState10=_slicedToArray(_useState9,2),error=_useState10[0],set_error=_useState10[1];const can_submit=desc&&subj&&email&&valid_email;useEffect((()=>{if(error&&can_submit)set_error("")}),[can_submit]);const verify_email=()=>set_valid_email(_util_url_js__WEBPACK_IMPORTED_MODULE_3___default().is_valid_email(email));const on_change=setter=>ev=>setter(ev.target.value);const send_click=()=>{if(!can_submit)return void set_error("Please fill all fields");_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.send_issue_report({email,subj,desc,url});close_cb()};const send_report=react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Btn,{disabled:!can_submit,arrow:true,onClick:send_click},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T,null,"Send"));return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Modal,{title:T("Report a problem"),on_close:close_cb,action:send_report},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("form-group",{"has-error":!valid_email})},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",placeholder:"Your e-mail",className:"form-control",onBlur:verify_email,value:email,onChange:on_change(set_email)}),!valid_email&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"help-block"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:"./bext/vpn/ui/img/icon_warning.svg"})," ","Please enter a valid email.")),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"text",placeholder:"Subject",className:"form-control",value:subj,onChange:on_change(set_subj)})),react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea",{placeholder:"Description",rows:"10",className:"form-control",onChange:on_change(set_desc)})),error&&react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"has-error"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"help-block"},react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:"./bext/vpn/ui/img/icon_warning.svg"})," ",error)))};const init_api=()=>_util_etask_js__WEBPACK_IMPORTED_MODULE_5___default()((function*(){window.addEventListener("unload",uninit);yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.init()}));const uninit=()=>_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.uninit()}}]);
//# sourceMappingURL=https://hola.org/be_source_map/1.222.83/331.bundle.js.map?build=nopeer_v2