(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[5613],{268976:e=>{e.exports={button:"button-D4RPB3ZC",content:"content-D4RPB3ZC",iconOnly:"iconOnly-D4RPB3ZC",link:"link-D4RPB3ZC",brand:"brand-D4RPB3ZC",primary:"primary-D4RPB3ZC",secondary:"secondary-D4RPB3ZC",gray:"gray-D4RPB3ZC",green:"green-D4RPB3ZC",red:"red-D4RPB3ZC",black:"black-D4RPB3ZC","black-friday":"black-friday-D4RPB3ZC","cyber-monday":"cyber-monday-D4RPB3ZC",xsmall:"xsmall-D4RPB3ZC",startIconWrap:"startIconWrap-D4RPB3ZC",endIconWrap:"endIconWrap-D4RPB3ZC",withStartIcon:"withStartIcon-D4RPB3ZC",withEndIcon:"withEndIcon-D4RPB3ZC",small:"small-D4RPB3ZC",medium:"medium-D4RPB3ZC",large:"large-D4RPB3ZC",xlarge:"xlarge-D4RPB3ZC",animated:"animated-D4RPB3ZC",stretch:"stretch-D4RPB3ZC",grouped:"grouped-D4RPB3ZC",adjustPosition:"adjustPosition-D4RPB3ZC",firstRow:"firstRow-D4RPB3ZC",firstCol:"firstCol-D4RPB3ZC","no-corner-top-left":"no-corner-top-left-D4RPB3ZC","no-corner-top-right":"no-corner-top-right-D4RPB3ZC","no-corner-bottom-right":"no-corner-bottom-right-D4RPB3ZC","no-corner-bottom-left":"no-corner-bottom-left-D4RPB3ZC",textWrap:"textWrap-D4RPB3ZC",multilineContent:"multilineContent-D4RPB3ZC",secondaryText:"secondaryText-D4RPB3ZC",primaryText:"primaryText-D4RPB3ZC"}},957723:e=>{e.exports={wrapper:"wrapper-GZajBGIm",input:"input-GZajBGIm",view:"view-GZajBGIm",danger:"danger-GZajBGIm"}},431542:e=>{e.exports={box:"box-ywH2tsV_",noOutline:"noOutline-ywH2tsV_",disabled:"disabled-ywH2tsV_","intent-danger":"intent-danger-ywH2tsV_",checked:"checked-ywH2tsV_",check:"check-ywH2tsV_",icon:"icon-ywH2tsV_",dot:"dot-ywH2tsV_",disableActiveStyles:"disableActiveStyles-ywH2tsV_"}},494996:e=>{e.exports={container:"container-mdcOkvbj",sectionTitle:"sectionTitle-mdcOkvbj",separator:"separator-mdcOkvbj",customButton:"customButton-mdcOkvbj",accessible:"accessible-mdcOkvbj"}},811988:e=>{e.exports={container:"container-iiEYaqPD",form:"form-iiEYaqPD",swatch:"swatch-iiEYaqPD",inputWrap:"inputWrap-iiEYaqPD",inputHash:"inputHash-iiEYaqPD",input:"input-iiEYaqPD",buttonWrap:"buttonWrap-iiEYaqPD",hueSaturationWrap:"hueSaturationWrap-iiEYaqPD",saturation:"saturation-iiEYaqPD",hue:"hue-iiEYaqPD"}},130338:e=>{e.exports={hue:"hue-r4uo5Wn6",pointer:"pointer-r4uo5Wn6",accessible:"accessible-r4uo5Wn6",pointerContainer:"pointerContainer-r4uo5Wn6"}},303252:e=>{e.exports={opacity:"opacity-EnWts7Xu",opacitySlider:"opacitySlider-EnWts7Xu",opacitySliderGradient:"opacitySliderGradient-EnWts7Xu",pointer:"pointer-EnWts7Xu",dragged:"dragged-EnWts7Xu",opacityPointerWrap:"opacityPointerWrap-EnWts7Xu",opacityInputWrap:"opacityInputWrap-EnWts7Xu",opacityInput:"opacityInput-EnWts7Xu",opacityInputPercent:"opacityInputPercent-EnWts7Xu",accessible:"accessible-EnWts7Xu"}},52650:e=>{e.exports={saturation:"saturation-NFNfqP2w",pointer:"pointer-NFNfqP2w",accessible:"accessible-NFNfqP2w"}},806294:e=>{e.exports={swatches:"swatches-sfn7Lezv",swatch:"swatch-sfn7Lezv",hover:"hover-sfn7Lezv",empty:"empty-sfn7Lezv",white:"white-sfn7Lezv",selected:"selected-sfn7Lezv",contextItem:"contextItem-sfn7Lezv",
row:"row-sfn7Lezv"}},805184:(e,t,n)=>{"use strict";var o,r,a;function s(e="default"){switch(e){case"default":return"primary";case"stroke":return"secondary"}}function i(e="primary"){switch(e){case"primary":return"brand";case"success":return"green";case"default":return"gray";case"danger":return"red"}}function c(e="m"){switch(e){case"s":return"xsmall";case"m":return"small";case"l":return"large"}}n.d(t,{Button:()=>m}),function(e){e.Primary="primary",e.Success="success",e.Default="default",e.Danger="danger"}(o||(o={})),function(e){e.Small="s",e.Medium="m",e.Large="l"}(r||(r={})),function(e){e.Default="default",e.Stroke="stroke"}(a||(a={}));var l=n(50959),u=n(171529);function d(e){const{intent:t,size:n,appearance:o,useFullWidth:r,icon:a,...l}=e;return{...l,color:i(t),size:c(n),variant:s(o),stretch:r,startIcon:a}}function m(e){return l.createElement(u.SquareButton,{...d(e)})}},171529:(e,t,n)=>{"use strict";n.d(t,{SquareButton:()=>f});var o=n(50959),r=n(497754),a=n(331774),s=n(72571),i=n(268976),c=n.n(i);const l="apply-overflow-tooltip apply-overflow-tooltip--check-children-recursively apply-overflow-tooltip--allow-text apply-common-tooltip";function u(e){const{color:t="brand",size:n="medium",variant:o="primary",stretch:s=!1,icon:i,startIcon:u,endIcon:d,iconOnly:m=!1,className:h,isGrouped:p,cellState:v,disablePositionAdjustment:f=!1,primaryText:y,secondaryText:b,isAnchor:g=!1}=e,E=function(e){let t="";return 0!==e&&(1&e&&(t=r(t,c()["no-corner-top-left"])),2&e&&(t=r(t,c()["no-corner-top-right"])),4&e&&(t=r(t,c()["no-corner-bottom-right"])),8&e&&(t=r(t,c()["no-corner-bottom-left"]))),t}((0,a.getGroupCellRemoveRoundBorders)(v));return r(h,c().button,c()[n],c()[t],c()[o],s&&c().stretch,(i||u)&&c().withStartIcon,d&&c().withEndIcon,m&&c().iconOnly,E,p&&c().grouped,p&&!f&&c().adjustPosition,p&&v.isTop&&c().firstRow,p&&v.isLeft&&c().firstCol,y&&b&&c().multilineContent,g&&c().link,l)}function d(e){const{startIcon:t,icon:n,iconOnly:a,children:i,endIcon:u,primaryText:d,secondaryText:m}=e,h=null!=t?t:n,p=!(t||n||u||a)&&!i&&d&&m;return o.createElement(o.Fragment,null,h&&o.createElement(s.Icon,{icon:h,className:c().startIconWrap}),i&&o.createElement("span",{className:c().content},i),u&&!a&&o.createElement(s.Icon,{icon:u,className:c().endIconWrap}),p&&function(e){return e.primaryText&&e.secondaryText&&o.createElement("div",{className:r(c().textWrap,l)},o.createElement("span",{className:c().primaryText}," ",e.primaryText," "),"string"==typeof e.secondaryText?o.createElement("span",{className:c().secondaryText}," ",e.secondaryText," "):o.createElement("span",{className:c().secondaryText},o.createElement("span",null,e.secondaryText.firstLine),o.createElement("span",null,e.secondaryText.secondLine)))}(e))}var m=n(601198),h=n(380327),p=n(800417);function v(e){const{className:t,color:n,variant:o,size:r,stretch:a,animated:s,icon:i,iconOnly:c,startIcon:l,endIcon:u,primaryText:d,secondaryText:m,...h}=e;return{...h,...(0,p.filterDataProps)(e),...(0,p.filterAriaProps)(e)}}function f(e){
const{reference:t,tooltipText:n,...r}=e,{isGrouped:a,cellState:s,disablePositionAdjustment:i}=(0,o.useContext)(h.ControlGroupContext),c=u({...r,isGrouped:a,cellState:s,disablePositionAdjustment:i});return o.createElement("button",{...v(r),className:c,ref:t,"data-overflow-tooltip-text":null!=n?n:e.primaryText?[e.primaryText,e.secondaryText].join(" "):(0,m.getTextForTooltip)(e.children)},o.createElement(d,{...r}))}n(15378)},408323:(e,t,n)=>{"use strict";n.d(t,{CheckboxInput:()=>l});var o=n(50959),r=n(497754),a=n(800417),s=n(611031),i=n(957723),c=n.n(i);function l(e){const t=r(c().wrapper,e.className);return o.createElement("span",{className:t,title:e.title,style:e.style},o.createElement("input",{id:e.id,tabIndex:e.tabIndex,className:r(e.intent&&c()[e.intent],c().input),type:"checkbox",name:e.name,checked:e.checked,disabled:e.disabled,value:e.value,autoFocus:e.autoFocus,role:e.role,onChange:function(){var t;null===(t=e.onChange)||void 0===t||t.call(e,e.value)},ref:e.reference,"aria-required":e["aria-required"],"aria-describedby":e["aria-describedby"],"aria-invalid":e["aria-invalid"],...(0,a.filterDataProps)(e)}),o.createElement(s.CheckboxView,{className:c().view,indeterminate:e.indeterminate,checked:e.checked,disabled:e.disabled,intent:e.intent,tabIndex:e.tabIndex}))}},611031:(e,t,n)=>{"use strict";n.d(t,{CheckboxView:()=>l});var o=n(50959),r=n(497754),a=n(72571),s=n(465890),i=n(431542),c=n.n(i);function l(e){const{indeterminate:t,checked:n,tabIndex:i,className:l,disabled:u,disableActiveStyles:d,intent:m,hideIcon:h,...p}=e,v=t||!n||h?"":s,f=r(c().box,c()[`intent-${m}`],!t&&c().check,!!t&&c().dot,-1===i&&c().noOutline,l,n&&c().checked,u&&c().disabled,d&&c().disableActiveStyles);return o.createElement("span",{className:f,...p},o.createElement(a.Icon,{icon:v,className:c().icon}))}},331774:(e,t,n)=>{"use strict";function o(e){let t=0;return e.isTop&&e.isLeft||(t+=1),e.isTop&&e.isRight||(t+=2),e.isBottom&&e.isLeft||(t+=8),e.isBottom&&e.isRight||(t+=4),t}n.d(t,{getGroupCellRemoveRoundBorders:()=>o})},738036:(e,t,n)=>{"use strict";n.d(t,{OutsideEvent:()=>r});var o=n(908783);function r(e){const{children:t,...n}=e;return t((0,o.useOutsideEvent)(n))}},865266:(e,t,n)=>{"use strict";n.d(t,{useRovingTabindexElement:()=>a});var o=n(50959),r=n(718736);function a(e,t=[]){const[n,a]=(0,o.useState)(!1),s=(0,r.useFunctionalRefObject)(e);return(0,o.useLayoutEffect)((()=>{const e=s.current;if(null===e)return;const t=e=>{switch(e.type){case"roving-tabindex:main-element":a(!0);break;case"roving-tabindex:secondary-element":a(!1)}};return e.addEventListener("roving-tabindex:main-element",t),e.addEventListener("roving-tabindex:secondary-element",t),()=>{e.removeEventListener("roving-tabindex:main-element",t),e.removeEventListener("roving-tabindex:secondary-element",t)}}),t),[s,n?0:-1]}},578601:(e,t,n)=>{"use strict";n.d(t,{useRowsNavigation:()=>l});var o=n(50959),r=n(650151),a=n(442092),s=n(180185),i=n(333086);const c=[37,39,38,40];function l(e){const t=(0,o.useRef)(null);return(0,o.useLayoutEffect)((()=>{const e=(0,
r.ensureNotNull)(t.current),n=()=>{const n=(0,a.queryTabbableElements)(e).sort(a.navigationOrderComparator);if(0===n.length||n[0].parentElement&&!m(n[0].parentElement,(0,r.ensureNotNull)(t.current))){const o=function(e){const n=d(e).sort(a.navigationOrderComparator).find((e=>m(e,(0,r.ensureNotNull)(t.current))));if(!n)return null;const o=Array.from(n.children);if(!o.length)return null;return o[0]}(e);if(null===o)return;if((0,i.becomeMainElement)(o),n.length>0)for(const e of n)(0,i.becomeSecondaryElement)(e)}};return window.addEventListener("keyboard-navigation-activation",n),n(),()=>window.removeEventListener("keyboard-navigation-activation",n)}),[]),[t,function(t){if(t.defaultPrevented)return;const n=(0,s.hashFromEvent)(t);if(!c.includes(n))return;const o=document.activeElement;if(!(o instanceof HTMLElement))return;const r=t.currentTarget;let i,l;if(e){const e=o.parentElement;i=e?Array.from(e.children):[],l=i.indexOf(o)}else i=(m=r,Array.from(m.querySelectorAll("button:not([disabled]):not([aria-disabled])")).filter((0,a.createScopedVisibleElementFilter)(m))).sort(a.navigationOrderComparator),l=i.indexOf(o);var m;if(0===i.length||-1===l)return;const p=(0,a.mapKeyCodeToDirection)(n);switch(p){case"inlinePrev":if(t.preventDefault(),!e&&0===l)break;h(u(i,l,-1));break;case"inlineNext":if(t.preventDefault(),!e&&l===i.length-1)break;h(u(i,l,1));break;case"blockPrev":case"blockNext":(n=>{if(!document.activeElement)return;const o=d(r),a=document.activeElement.parentElement;if(!a)return;const s=Array.from(a.children).indexOf(document.activeElement);if(-1===s)return;const i=o["blockNext"===n?o.indexOf(a)+1:o.indexOf(a)-1];if(!i)return;t.preventDefault();const c=Array.from(i.children);c.length&&(!e&&s<=c.length-1?h(c[s]):h(c[0]))})(p)}}]}function u(e,t,n){return e[(t+e.length+n)%e.length]}function d(e){return Array.from(e.querySelectorAll('[data-role="row"]')).filter((0,a.createScopedVisibleElementFilter)(e))}function m(e,t){const n=(0,r.ensureNotNull)(e.parentElement).offsetTop,o=n+(0,r.ensureNotNull)(e.parentElement).clientHeight,a=t.scrollTop,s=a+t.clientHeight;return n>=a&&o<=s}function h(e){document.activeElement&&(0,i.becomeSecondaryElement)(document.activeElement),(0,i.becomeMainElement)(e),e.focus()}},972646:(e,t,n)=>{"use strict";n.d(t,{ColorPicker:()=>V});var o=n(50959),r=n(497754),a=n.n(r),s=n(609838),i=n(578601),c=n(43688),l=n(793532),u=n(745582),d=Math.ceil,m=Math.max;const h=function(e,t,n){t=(n?(0,l.default)(e,t,n):void 0===t)?1:m((0,u.default)(t),0);var o=null==e?0:e.length;if(!o||t<1)return[];for(var r=0,a=0,s=Array(d(o/t));r<o;)s[a++]=(0,c.default)(e,r,r+=t);return s};var p=n(724377),v=n(650151),f=n(601227),y=n(624216),b=n(192063),g=n(860184),E=n(865266),C=n(993544),w=n(806294);function _(e){const{color:t,selected:a,onSelect:i,onSwatchRemove:c}=e,[l,u]=(0,o.useState)(!1),[d,m]=(0,E.useRovingTabindexElement)(null),h=Boolean(c)&&!f.CheckMobile.any();return o.createElement(o.Fragment,null,o.createElement("button",{ref:d,style:t?{color:t}:void 0,
className:r(w.swatch,l&&w.hover,a&&w.selected,!t&&w.empty,String(t).toLowerCase()===g.white&&w.white),onClick:function(){i(t)},onContextMenu:h?p:void 0,tabIndex:m,"data-role":"swatch"}),h&&o.createElement(y.PopupMenu,{isOpened:l,onClose:p,position:function(){const e=(0,v.ensureNotNull)(d.current).getBoundingClientRect();return{x:e.left,y:e.top+e.height+4}},onClickOutside:p},o.createElement(b.PopupMenuItem,{className:w.contextItem,label:s.t(null,void 0,n(989984)),icon:C,onClick:function(){p(),(0,v.ensureDefined)(c)()},dontClosePopup:!0})));function p(){u(!l)}}function x(e){const{colors:t,color:n,children:r,onSelect:a,onRemoveCustomColor:s}=e;if(!t)return null;const i=n?(0,p.parseRgb)(String(n)):void 0,c=h(t,10);return o.createElement("div",{className:w.swatches},c.map(((e,t)=>o.createElement("div",{className:w.row,"data-role":"row",key:t},e.map(((e,n)=>o.createElement(_,{key:String(e)+n,color:e,selected:i&&(0,p.areEqualRgb)(i,(0,p.parseRgb)(String(e))),onSelect:l,onSwatchRemove:s?()=>function(e,t){const n=10*e+t;null==s||s(n)}(t,n):void 0})))))),r);function l(e){a&&a(e)}}var P=n(939075),N=n(805184);function k(e){const t=`Invalid RGB color: ${e}`;if(null===e)throw new Error(t);const n=e.match(/^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i);if(null===n)throw new Error(t);const[,o,r,a]=n;if(!o||!r||!a)throw new Error(t);const s=parseInt(o,16)/255,i=parseInt(r,16)/255,c=parseInt(a,16)/255,l=Math.max(s,i,c),u=Math.min(s,i,c);let d;const m=l,h=l-u,p=0===l?0:h/l;if(l===u)d=0;else{switch(l){case s:d=(i-c)/h+(i<c?6:0);break;case i:d=(c-s)/h+2;break;case c:d=(s-i)/h+4;break;default:d=0}d/=6}return{h:d,s:p,v:m}}var D=n(343370),S=n(180185),R=n(822960),I=n(52650);const T=[37,39,38,40],B=.01;class O extends o.PureComponent{constructor(){super(...arguments),this._container=null,this._refContainer=e=>{this._container=e},this._handlePosition=e=>{const{hsv:{h:t},onChange:n}=this.props;if(!n)return;const o=(0,v.ensureNotNull)(this._container).getBoundingClientRect(),r=e.clientX-o.left,a=e.clientY-o.top;n({h:t,s:(0,R.clamp)(r/o.width,0,1),v:(0,R.clamp)(1-a/o.height,0,1)})},this._handleKeyDown=e=>{const{hsv:{h:t,s:n,v:o},onChange:r}=this.props,a=(0,S.hashFromEvent)(e);if(!r||!T.includes(a))return;if(37===a||39===a){return void r({h:t,s:(0,R.clamp)(37===a?n-B:n+B,0,1),v:o})}r({h:t,s:n,v:(0,R.clamp)(40===a?o-B:o+B,0,1)})},this._mouseDown=e=>{window.addEventListener("mouseup",this._mouseUp),window.addEventListener("mousemove",this._mouseMove)},this._mouseUp=e=>{window.removeEventListener("mousemove",this._mouseMove),window.removeEventListener("mouseup",this._mouseUp),this._handlePosition(e)},this._mouseMove=(0,D.default)(this._handlePosition,100),this._handleTouch=e=>{this._handlePosition(e.nativeEvent.touches[0])}}render(){const{className:e,hsv:{h:t,s:n,v:r}}=this.props,s=`hsl(${360*t}, 100%, 50%)`;return o.createElement("div",{tabIndex:0,className:a()(I.accessible,e),onKeyDown:this._handleKeyDown},o.createElement("div",{className:I.saturation,style:{backgroundColor:s},ref:this._refContainer,onMouseDown:this._mouseDown,
onTouchStart:this._handleTouch,onTouchMove:this._handleTouch},o.createElement("div",{className:I.pointer,style:{left:100*n+"%",top:100*(1-r)+"%"}})))}}var W=n(130338);class Z extends o.PureComponent{constructor(){super(...arguments),this._container=null,this._refContainer=e=>{this._container=e},this._handlePosition=e=>{const{hsv:{s:t,v:n},onChange:o}=this.props;if(!o)return;const r=(0,v.ensureNotNull)(this._container).getBoundingClientRect(),a=e.clientY-r.top;o({h:(0,R.clamp)(a/r.height,0,1),s:t,v:n})},this._handleKeyDown=e=>{const{hsv:{h:t,s:n,v:o},onChange:r}=this.props,a=(0,S.hashFromEvent)(e);if(!r||38!==a&&40!==a)return;r({h:(0,R.clamp)(38===a?t-.01:t+.01,0,1),s:n,v:o})},this._mouseDown=e=>{window.addEventListener("mouseup",this._mouseUp),window.addEventListener("mousemove",this._mouseMove)},this._mouseUp=e=>{window.removeEventListener("mousemove",this._mouseMove),window.removeEventListener("mouseup",this._mouseUp),this._handlePosition(e)},this._mouseMove=(0,D.default)(this._handlePosition,100),this._handleTouch=e=>{this._handlePosition(e.nativeEvent.touches[0])}}render(){const{className:e,hsv:{h:t}}=this.props;return o.createElement("div",{className:a()(W.hue,W.accessible,e),tabIndex:0,onKeyDown:this._handleKeyDown},o.createElement("div",{className:W.pointerContainer,ref:this._refContainer,onMouseDown:this._mouseDown,onTouchStart:this._handleTouch,onTouchMove:this._handleTouch},o.createElement("div",{className:W.pointer,style:{top:100*t+"%"}})))}}var L=n(811988);const M="#000000",A=s.t(null,{context:"Color Picker"},n(155517));class q extends o.PureComponent{constructor(e){super(e),this._inputRef=o.createRef(),this._handleHSV=e=>{const t=function(e){const{h:t,s:n,v:o}=e;let r,a,s;const i=Math.floor(6*t),c=6*t-i,l=o*(1-n),u=o*(1-c*n),d=o*(1-(1-c)*n);switch(i%6){case 0:r=o,a=d,s=l;break;case 1:r=u,a=o,s=l;break;case 2:r=l,a=o,s=d;break;case 3:r=l,a=u,s=o;break;case 4:r=d,a=l,s=o;break;case 5:r=o,a=l,s=u;break;default:r=0,a=0,s=0}return"#"+[255*r,255*a,255*s].map((e=>("0"+Math.round(e).toString(16)).replace(/.+?([a-f0-9]{2})$/i,"$1"))).join("")}(e)||M;this.setState({color:t,inputColor:F(t),hsv:e}),this.props.onSelect(t)},this._handleInput=e=>{const t=F(e.currentTarget.value);try{const e=k(t),n=`#${t}`;this.setState({color:n,inputColor:t,hsv:e}),this.props.onSelect(n)}catch(e){this.setState({inputColor:t})}},this._handleAddColor=()=>this.props.onAdd(this.state.color);const t=e.color||M;this.state={color:t,inputColor:F(t),hsv:k(t)}}componentDidMount(){var e;f.CheckMobile.any()||null===(e=this._inputRef.current)||void 0===e||e.focus()}render(){const{color:e,hsv:t,inputColor:n}=this.state;return o.createElement("div",{className:L.container},o.createElement("div",{className:L.form},o.createElement("div",{className:L.swatch,style:{backgroundColor:e}}),o.createElement("div",{className:L.inputWrap},o.createElement("span",{className:L.inputHash},"#"),o.createElement("input",{ref:this._inputRef,type:"text",className:L.input,value:n,onChange:this._handleInput})),o.createElement("div",{className:L.buttonWrap
},o.createElement(N.Button,{size:"s",onClick:this._handleAddColor},A))),o.createElement("div",{className:L.hueSaturationWrap},o.createElement(O,{className:L.saturation,hsv:t,onChange:this._handleHSV}),o.createElement(Z,{className:L.hue,hsv:t,onChange:this._handleHSV})))}}function F(e){return e.replace(/^#/,"")}var G=n(494996);const j=s.t(null,{context:"Color Picker"},n(329619)),H=s.t(null,{context:"Color Picker"},n(980936));function V(e){const{color:t,opacity:n,selectCustom:r,selectOpacity:s,customColors:c,onRemoveCustomColor:l,onToggleCustom:u,onOpacityChange:d,menu:m}=e,[h,p]=(0,o.useState)(!1),v="number"==typeof n?n:1,[f,y]=(0,i.useRowsNavigation)();return(0,o.useLayoutEffect)((()=>{m&&m.update()}),[s,m]),h?o.createElement(q,{color:t,onSelect:b,onAdd:function(t){p(!1),null==u||u(!1);const{onAddColor:n}=e;n&&n(t)}}):o.createElement("div",{className:G.container},o.createElement("div",{ref:f,onKeyDown:y},o.createElement(x,{colors:g.basic,color:t,onSelect:b}),o.createElement(x,{colors:g.extended,color:t,onSelect:b}),o.createElement("div",{className:G.separator}),o.createElement(x,{colors:c,color:t,onSelect:b,onRemoveCustomColor:l},r&&o.createElement(o.Fragment,null,(null==c?void 0:c.length)?o.createElement("button",{title:j,onClick:E,className:a()(G.customButton,G.accessible,"apply-common-tooltip"),tabIndex:-1}):o.createElement("div",{"data-role":"row"},o.createElement("button",{title:j,onClick:E,className:a()(G.customButton,G.accessible,"apply-common-tooltip"),tabIndex:-1}))))),s&&o.createElement(o.Fragment,null,o.createElement("div",{className:G.sectionTitle},H),o.createElement(P.Opacity,{color:t,opacity:v,onChange:function(e){d&&d(e)}})));function b(t){const{onColorChange:n}=e;n&&n(t,h)}function E(e){p(!0),null==u||u(!0)}}},939075:(e,t,n)=>{"use strict";n.d(t,{Opacity:()=>l});var o=n(50959),r=n(497754),a=n(650151),s=n(822960),i=n(180185),c=n(303252);class l extends o.PureComponent{constructor(e){super(e),this._container=null,this._pointer=null,this._raf=null,this._refContainer=e=>{this._container=e},this._refPointer=e=>{this._pointer=e},this._handlePosition=e=>{null===this._raf&&(this._raf=requestAnimationFrame((()=>{const t=(0,a.ensureNotNull)(this._container),n=(0,a.ensureNotNull)(this._pointer),o=t.getBoundingClientRect(),r=n.offsetWidth,i=e.clientX-r/2-o.left,c=(0,s.clamp)(i/(o.width-r),0,1);this.setState({inputOpacity:Math.round(100*c).toString()}),this.props.onChange(c),this._raf=null})))},this._onSliderClick=e=>{this._handlePosition(e.nativeEvent),this._dragSubscribe()},this._mouseUp=e=>{this.setState({isPointerDragged:!1}),this._dragUnsubscribe(),this._handlePosition(e)},this._mouseMove=e=>{this.setState({isPointerDragged:!0}),this._handlePosition(e)},this._onTouchStart=e=>{this._handlePosition(e.nativeEvent.touches[0])},this._handleTouch=e=>{this.setState({isPointerDragged:!0}),this._handlePosition(e.nativeEvent.touches[0])},this._handleTouchEnd=()=>{this.setState({isPointerDragged:!1})},this._handleInput=e=>{const t=e.currentTarget.value,n=Number(t)/100;this.setState({inputOpacity:t}),
Number.isNaN(n)||n>1||this.props.onChange(n)},this._handleKeyDown=e=>{const t=(0,i.hashFromEvent)(e);if(37!==t&&39!==t)return;e.preventDefault();const n=Number(this.state.inputOpacity);37===t&&0!==n&&this._changeOpacity(n-1),39===t&&100!==n&&this._changeOpacity(n+1)},this.state={inputOpacity:Math.round(100*e.opacity).toString(),isPointerDragged:!1}}componentWillUnmount(){null!==this._raf&&(cancelAnimationFrame(this._raf),this._raf=null),this._dragUnsubscribe()}render(){const{color:e,opacity:t,hideInput:n,disabled:a}=this.props,{inputOpacity:s,isPointerDragged:i}=this.state,l={color:e||void 0};return o.createElement("div",{className:c.opacity},o.createElement("div",{className:r(c.opacitySlider,c.accessible),style:l,tabIndex:a?-1:0,ref:this._refContainer,onMouseDown:this._onSliderClick,onTouchStart:this._onTouchStart,onTouchMove:this._handleTouch,onTouchEnd:this._handleTouchEnd,onKeyDown:this._handleKeyDown,"aria-disabled":a},o.createElement("div",{className:c.opacitySliderGradient,style:{backgroundImage:`linear-gradient(90deg, transparent, ${e})`}}),o.createElement("div",{className:c.opacityPointerWrap},o.createElement("div",{className:r(c.pointer,i&&c.dragged),style:{left:100*t+"%"},ref:this._refPointer}))),!n&&o.createElement("div",{className:c.opacityInputWrap},o.createElement("input",{type:"text",className:c.opacityInput,value:s,onChange:this._handleInput}),o.createElement("span",{className:c.opacityInputPercent},"%")))}_dragSubscribe(){const e=(0,a.ensureNotNull)(this._container).ownerDocument;e&&(e.addEventListener("mouseup",this._mouseUp),e.addEventListener("mousemove",this._mouseMove))}_dragUnsubscribe(){const e=(0,a.ensureNotNull)(this._container).ownerDocument;e&&(e.removeEventListener("mousemove",this._mouseMove),e.removeEventListener("mouseup",this._mouseUp))}_changeOpacity(e){this.setState({inputOpacity:e.toString()}),this.props.onChange(e/100)}}},860184:(e,t,n)=>{"use strict";n.d(t,{basic:()=>i,extended:()=>l,white:()=>r});var o=n(926048);const r=o.colorsPalette["color-white"],a=["ripe-red","tan-orange","banana-yellow","iguana-green","minty-green","sky-blue","tv-blue","deep-blue","grapes-purple","berry-pink"],s=[200,300,400,500,600,700,800,900].map((e=>`color-cold-gray-${e}`));s.unshift("color-white"),s.push("color-black"),a.forEach((e=>{s.push(`color-${e}-500`)}));const i=s.map((e=>o.colorsPalette[e])),c=[];[100,200,300,400,700,900].forEach((e=>{a.forEach((t=>{c.push(`color-${t}-${e}`)}))}));const l=c.map((e=>o.colorsPalette[e]))},206397:(e,t,n)=>{"use strict";n.d(t,{useCustomColors:()=>l});var o=n(50959),r=n(870122),a=n(559410);function s(e,t){(0,o.useEffect)((()=>(a.subscribe(e,t,null),()=>{a.unsubscribe(e,t,null)})),[e,t])}var i,c=n(724377);function l(){const[e,t]=(0,o.useState)((0,r.getJSON)("pickerCustomColors",[]));s("add_new_custom_color",(n=>t(u(n,e)))),s("remove_custom_color",(n=>t(d(n,e))));const n=(0,o.useCallback)((t=>{const n=t?(0,c.parseRgb)(t):null;e.some((e=>null!==e&&null!==n&&(0,c.areEqualRgb)((0,c.parseRgb)(e),n)))||(a.emit("add_new_custom_color",t),(0,
r.setJSON)("pickerCustomColors",u(t,e)))}),[e]),i=(0,o.useCallback)((t=>{(t>=0||t<e.length)&&(a.emit("remove_custom_color",t),(0,r.setJSON)("pickerCustomColors",d(t,e)))}),[e]);return[e,n,i]}function u(e,t){const n=t.slice();return n.push(e),n.length>29&&n.shift(),n}function d(e,t){return t.filter(((t,n)=>e!==n))}!function(e){e.SettingsKey="pickerCustomColors",e.GlobalAddEventName="add_new_custom_color",e.GlobalRemoveEventName="remove_custom_color",e[e.MaxColors=29]="MaxColors"}(i||(i={}))},874485:(e,t,n)=>{"use strict";n.d(t,{makeOverlapable:()=>a});var o=n(50959),r=n(813113);function a(e,t){return class extends o.PureComponent{render(){const{isOpened:n,root:a}=this.props;if(!n)return null;const s=o.createElement(e,{...this.props,zIndex:150});return"parent"===a?s:o.createElement(r.Portal,{shouldTrapFocus:t},s)}}}},333086:(e,t,n)=>{"use strict";var o;function r(e){e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"))}function a(e){e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"))}n.d(t,{becomeMainElement:()=>r,becomeSecondaryElement:()=>a}),function(e){e.MainElement="roving-tabindex:main-element",e.SecondaryElement="roving-tabindex:secondary-element"}(o||(o={}))},465890:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke="currentColor" stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'}}]);