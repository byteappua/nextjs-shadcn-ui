(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[4681],{36136:e=>{e.exports={"nav-button":"nav-button-znwuaSC1",link:"link-znwuaSC1",background:"background-znwuaSC1",icon:"icon-znwuaSC1","flip-icon":"flip-icon-znwuaSC1","size-large":"size-large-znwuaSC1","preserve-paddings":"preserve-paddings-znwuaSC1","size-medium":"size-medium-znwuaSC1","size-small":"size-small-znwuaSC1","size-xsmall":"size-xsmall-znwuaSC1","size-xxsmall":"size-xxsmall-znwuaSC1","visually-hidden":"visually-hidden-znwuaSC1"}},253330:e=>{e.exports={"tablet-normal-breakpoint":"screen and (max-width: 768px)","small-height-breakpoint":"screen and (max-height: 360px)","tablet-small-breakpoint":"screen and (max-width: 430px)"}},808473:e=>{e.exports={dialog:"dialog-b8SxMnzX",wrapper:"wrapper-b8SxMnzX",separator:"separator-b8SxMnzX",bounded:"bounded-b8SxMnzX"}},780822:e=>{e.exports={"small-height-breakpoint":"screen and (max-height: 360px)",container:"container-BZKENkhT",unsetAlign:"unsetAlign-BZKENkhT",title:"title-BZKENkhT",subtitle:"subtitle-BZKENkhT",textWrap:"textWrap-BZKENkhT",ellipsis:"ellipsis-BZKENkhT",close:"close-BZKENkhT",icon:"icon-BZKENkhT"}},547625:e=>{e.exports={separator:"separator-Pf4rIzEt"}},546740:e=>{e.exports={"link-item":"link-item-zMVwkifW"}},628881:e=>{e.exports={"round-tab-button":"round-tab-button-JbssaNvk","disable-focus-outline":"disable-focus-outline-JbssaNvk","enable-cursor-pointer":"enable-cursor-pointer-JbssaNvk","size-large":"size-large-JbssaNvk","with-start-icon":"with-start-icon-JbssaNvk","icon-only":"icon-only-JbssaNvk","with-end-icon":"with-end-icon-JbssaNvk","start-icon-wrap":"start-icon-wrap-JbssaNvk","end-icon-wrap":"end-icon-wrap-JbssaNvk","size-small":"size-small-JbssaNvk","size-xsmall":"size-xsmall-JbssaNvk","variant-primary":"variant-primary-JbssaNvk",selected:"selected-JbssaNvk","disable-active-state-styles":"disable-active-state-styles-JbssaNvk","variant-ghost":"variant-ghost-JbssaNvk",fake:"fake-JbssaNvk",caret:"caret-JbssaNvk","visually-hidden":"visually-hidden-JbssaNvk"}},861944:e=>{e.exports={"scroll-wrap":"scroll-wrap-vgCB17hK","overflow-scroll":"overflow-scroll-vgCB17hK","round-tabs":"round-tabs-vgCB17hK","overflow-wrap":"overflow-wrap-vgCB17hK","align-start":"align-start-vgCB17hK","align-center":"align-center-vgCB17hK"}},862794:e=>{e.exports={icon:"icon-WB2y0EnP",dropped:"dropped-WB2y0EnP"}},389986:(e,t,n)=>{"use strict";n.d(t,{CloseButton:()=>d});var a=n(50959),o=n(270762),i=n(117105),s=n(315130),r=n(238822),l=n(663346),c=n(534983);function u(e="large"){switch(e){case"large":return i;case"medium":default:return s;case"small":return r;case"xsmall":return l;case"xxsmall":return c}}const d=a.forwardRef(((e,t)=>a.createElement(o.NavButton,{...e,ref:t,icon:u(e.size)})))},270762:(e,t,n)=>{"use strict";n.d(t,{NavButton:()=>c});var a=n(50959),o=n(497754),i=n(72571),s=(n(15378),n(36136));function r(e){const{size:t="large",preservePaddings:n,isLink:a,flipIconOnRtl:i,className:r}=e;return o(s["nav-button"],s[`size-${t}`],n&&s["preserve-paddings"],i&&s["flip-icon"],a&&s.link,r)}function l(e){
const{children:t,icon:n}=e;return a.createElement(a.Fragment,null,a.createElement("span",{className:s.background}),a.createElement(i.Icon,{icon:n,className:s.icon,"aria-hidden":!0}),t&&a.createElement("span",{className:s["visually-hidden"]},t))}const c=(0,a.forwardRef)(((e,t)=>{const{icon:n,type:o="button",preservePaddings:i,flipIconOnRtl:s,size:c,"aria-label":u,...d}=e;return a.createElement("button",{...d,className:r({...e,children:u}),ref:t,type:o},a.createElement(l,{icon:n},u))}));c.displayName="NavButton";var u=n(591365),d=n(273388);(0,a.forwardRef)(((e,t)=>{const{icon:n,renderComponent:o,"aria-label":i,...s}=e,c=null!=o?o:u.CustomComponentDefaultLink;return a.createElement(c,{...s,className:r({...e,children:i,isLink:!0}),reference:(0,d.isomorphicRef)(t)},a.createElement(l,{icon:n},i))})).displayName="NavAnchorButton"},15378:(e,t,n)=>{"use strict";var a,o,i,s;!function(e){e.Primary="primary",e.QuietPrimary="quiet-primary",e.Secondary="secondary",e.Ghost="ghost"}(a||(a={})),function(e){e.XXSmall="xxsmall",e.XSmall="xsmall",e.Small="small",e.Medium="medium",e.Large="large",e.XLarge="xlarge",e.XXLarge="xxlarge"}(o||(o={})),function(e){e.Brand="brand",e.Gray="gray",e.LightGray="light-gray",e.Green="green",e.Red="red",e.Black="black",e.Gradient="gradient",e.BlackFriday="black-friday",e.CyberMonday="cyber-monday"}(i||(i={})),function(e){e.Semibold18px="semibold18px",e.Semibold16px="semibold16px",e.Semibold14px="semibold14px",e.Medium16px="medium16px",e.Regular16px="regular16px",e.Regular14px="regular14px"}(s||(s={}))},380327:(e,t,n)=>{"use strict";n.d(t,{ControlGroupContext:()=>a});const a=n(50959).createContext({isGrouped:!1,cellState:{isTop:!0,isRight:!0,isBottom:!0,isLeft:!0}})},409245:(e,t,n)=>{"use strict";function a(e){const{reference:t,...n}=e;return{...n,ref:t}}n.d(t,{renameRef:()=>a})},591365:(e,t,n)=>{"use strict";n.d(t,{CustomComponentDefaultLink:()=>i});var a=n(50959),o=n(409245);function i(e){return a.createElement("a",{...(0,o.renameRef)(e)})}a.PureComponent},234539:(e,t,n)=>{"use strict";n.d(t,{CustomBehaviourContext:()=>a});const a=(0,n(50959).createContext)({enableActiveStateStyles:!0});a.displayName="CustomBehaviourContext"},813550:(e,t,n)=>{"use strict";n.d(t,{useForceUpdate:()=>o});var a=n(50959);const o=()=>{const[,e]=(0,a.useReducer)((e=>e+1),0);return e}},718736:(e,t,n)=>{"use strict";n.d(t,{useFunctionalRefObject:()=>i});var a=n(50959),o=n(855393);function i(e){const t=(0,a.useMemo)((()=>function(e){const t=n=>{e(n),t.current=n};return t.current=null,t}((e=>{r.current(e)}))),[]),n=(0,a.useRef)(null),i=t=>{if(null===t)return s(n.current,t),void(n.current=null);n.current!==e&&(n.current=e,s(n.current,t))},r=(0,a.useRef)(i);return r.current=i,(0,o.useIsomorphicLayoutEffect)((()=>{if(null!==t.current)return r.current(t.current),()=>r.current(null)}),[e]),t}function s(e,t){null!==e&&("function"==typeof e?e(t):e.current=t)}},855393:(e,t,n)=>{"use strict";n.d(t,{useIsomorphicLayoutEffect:()=>o});var a=n(50959);function o(e,t){("undefined"==typeof window?a.useEffect:a.useLayoutEffect)(e,t)}},
72571:(e,t,n)=>{"use strict";n.d(t,{Icon:()=>o});var a=n(50959);const o=a.forwardRef(((e,t)=>{const{icon:n="",title:o,ariaLabel:i,ariaLabelledby:s,ariaHidden:r,...l}=e,c=!!(o||i||s);return a.createElement("span",{...l,ref:t,role:"img","aria-label":i,"aria-labelledby":s,"aria-hidden":r||!c,title:o,dangerouslySetInnerHTML:{__html:n}})}))},672511:(e,t,n)=>{"use strict";n.d(t,{Spinner:()=>s});var a=n(50959),o=n(497754),i=n(843442);n(907727);function s(e){const t=o(e.className,"tv-spinner","tv-spinner--shown",`tv-spinner--size_${i.spinnerSizeMap[e.size||i.DEFAULT_SIZE]}`);return a.createElement("div",{className:t,style:e.style,role:"progressbar"})}},273388:(e,t,n)=>{"use strict";function a(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}function o(e){return a([e])}n.d(t,{isomorphicRef:()=>o,mergeRefs:()=>a})},651674:(e,t,n)=>{"use strict";n.d(t,{createReactRoot:()=>g});var a=n(50959),o=n(632227),i=n(904237);const s=(0,a.createContext)({isOnMobileAppPage:()=>!1,isRtl:!1,locale:{language:"en"}});var r=n(69111),l=n(431520),c=n(887859);const u={iOs:"old",android:"new",old:"old",new:"new",any:"any"};function d(e){const[t]=(0,a.useState)({isOnMobileAppPage:e=>(0,r.isOnMobileAppPage)(u[e]),isRtl:(0,l.isRtl)(),locale:(0,c.getLocale)()});return a.createElement(s.Provider,{value:t},e.children)}function g(e,t,n="legacy"){const s=a.createElement(d,null,e);if("modern"===n){const e=(0,i.createRoot)(t);return e.render(s),{render(t){e.render(a.createElement(d,null,t))},unmount(){e.unmount()}}}return o.render(s,t),{render(e){o.render(a.createElement(d,null,e),t)},unmount(){o.unmountComponentAtNode(t)}}}},887859:(e,t,n)=>{"use strict";n.d(t,{getLocale:()=>s,getLocaleIso:()=>r});var a=n(650151)
;const o=JSON.parse('{"ar_AE":{"language":"ar","language_name":"العربية","flag":"sa","geoip_code":"sa","countries_with_this_language":["ae","bh","dj","dz","eg","er","iq","jo","km","kw","lb","ly","ma","mr","om","qa","sa","sd","so","sy","td","tn","ye"],"priority":500,"dir":"rtl","iso":"ar","iso_639_3":"arb","show_on_widgets":true,"global_name":"Arabic"},"br":{"language":"pt","language_name":"Português","flag":"br","geoip_code":"br","priority":650,"iso":"pt","iso_639_3":"por","show_on_widgets":true,"global_name":"Portuguese"},"ca_ES":{"language":"ca_ES","language_name":"Català","flag":"es","geoip_code":"es","priority":745,"iso":"ca","iso_639_3":"cat","disabled":true,"show_on_widgets":true,"global_name":"Catalan"},"cs":{"language":"cs","language_name":"Czech","flag":"cz","geoip_code":"cz","priority":718,"iso":"cs","iso_639_3":"ces","show_on_widgets":true,"global_name":"Czech","is_in_european_union":true,"isBattle":true},"de_DE":{"language":"de","language_name":"Deutsch","flag":"de","geoip_code":"de","countries_with_this_language":["at","ch"],"priority":756,"iso":"de","iso_639_3":"deu","show_on_widgets":true,"global_name":"German","is_in_european_union":true},"en":{"language":"en","language_name":"English","flag":"us","geoip_code":"us","priority":1000,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"English","is_only_recommended_tw_autorepost":true},"es":{"language":"es","language_name":"Español","flag":"es","geoip_code":"es","countries_with_this_language":["mx","ar","ve","cl","co","pe","uy","py","cr","gt","c","bo","pa","pr"],"priority":744,"iso":"es","iso_639_3":"spa","show_on_widgets":true,"global_name":"Spanish","is_in_european_union":true},"fa_IR":{"language":"fa","language_name":"فارسى","flag":"ir","geoip_code":"ir","priority":480,"dir":"rtl","iso":"fa","iso_639_3":"fas","show_on_widgets":false,"global_name":"Iranian","disabled":true},"fr":{"language":"fr","language_name":"Français","flag":"fr","geoip_code":"fr","priority":750,"iso":"fr","iso_639_3":"fra","show_on_widgets":true,"global_name":"French","is_in_european_union":true},"he_IL":{"language":"he_IL","language_name":"עברית","flag":"il","geoip_code":"il","priority":490,"dir":"rtl","iso":"he","iso_639_3":"heb","show_on_widgets":true,"global_name":"Israeli"},"hu_HU":{"language":"hu_HU","language_name":"Magyar","flag":"hu","geoip_code":"hu","priority":724,"iso":"hu","iso_639_3":"hun","show_on_widgets":true,"global_name":"Hungarian","is_in_european_union":true,"disabled":true},"id":{"language":"id_ID","language_name":"Bahasa Indonesia","flag":"id","geoip_code":"id","priority":648,"iso":"id","iso_639_3":"ind","show_on_widgets":true,"global_name":"Indonesian"},"in":{"language":"en","language_name":"English ‎(India)‎","flag":"in","geoip_code":"in","priority":800,"iso":"en","iso_639_3":"eng","show_on_widgets":true,"global_name":"Indian"},"it":{"language":"it","language_name":"Italiano","flag":"it","geoip_code":"it","priority":737,"iso":"it","iso_639_3":"ita","show_on_widgets":true,"global_name":"Italian","is_in_european_union":true},"ja":{"language":"ja","language_name":"日本語","flag":"jp","geoip_code":"jp","priority":600,"iso":"ja","iso_639_3":"jpn","show_on_widgets":true,"global_name":"Japanese"},"kr":{"language":"ko","language_name":"한국어","flag":"kr","geoip_code":"kr","priority":550,"iso":"ko","iso_639_3":"kor","show_on_widgets":true,"global_name":"Korean"},"ms_MY":{"language":"ms_MY","language_name":"Bahasa Melayu","flag":"my","geoip_code":"my","priority":647,"iso":"ms","iso_639_3":"zlm","show_on_widgets":true,"global_name":"Malaysian"},"pl":{"language":"pl","language_name":"Polski","flag":"pl","geoip_code":"pl","priority":725,"iso":"pl","iso_639_3":"pol","show_on_widgets":true,"global_name":"Polish","is_in_european_union":true},"ru":{"language":"ru","language_name":"Русский","flag":"ru","geoip_code":"ru","countries_with_this_language":["am","by","kg","kz","md","tj","tm","uz"],"priority":700,"iso":"ru","iso_639_3":"rus","show_on_widgets":true,"global_name":"Russian","is_only_recommended_tw_autorepost":true},"sv_SE":{"language":"sv","language_name":"Svenska","flag":"se","geoip_code":"se","priority":723,"iso":"sv","iso_639_3":"swe","show_on_widgets":true,"global_name":"Swedish","is_in_european_union":true},"th_TH":{"language":"th","language_name":"ภาษาไทย","flag":"th","geoip_code":"th","priority":646,"iso":"th","iso_639_3":"tha","show_on_widgets":true,"global_name":"Thai"},"tr":{"language":"tr","language_name":"Türkçe","flag":"tr","geoip_code":"tr","priority":713,"iso":"tr","iso_639_3":"tur","show_on_widgets":true,"global_name":"Turkish","is_only_recommended_tw_autorepost":true},"vi_VN":{"language":"vi","language_name":"Tiếng Việt","flag":"vn","geoip_code":"vn","priority":645,"iso":"vi","iso_639_3":"vie","show_on_widgets":true,"global_name":"Vietnamese"},"zh_CN":{"language":"zh","language_name":"简体中文","flag":"cn","geoip_code":"cn","countries_with_this_language":["zh"],"priority":537,"iso":"zh-Hans","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Chinese"},"zh_TW":{"language":"zh_TW","language_name":"繁體中文","flag":"tw","geoip_code":"tw","countries_with_this_language":["hk"],"priority":536,"iso":"zh-Hant","iso_639_3":"cmn","show_on_widgets":true,"global_name":"Taiwanese"},"el":{"language":"el","language_name":"Greek","flag":"gr","geoip_code":"gr","priority":625,"iso":"el","iso_639_3":"ell","global_name":"Greek","is_in_european_union":true,"isBattle":true},"nl_NL":{"language":"nl_NL","language_name":"Dutch","flag":"nl","geoip_code":"nl","priority":731,"iso":"nl","iso_639_3":"nld","global_name":"Dutch","is_in_european_union":true,"isBattle":true},"ro":{"language":"ro","language_name":"Romanian","flag":"ro","geoip_code":"ro","priority":707,"iso":"ro","iso_639_3":"ron","global_name":"Romanian","is_in_european_union":true,"isBattle":true}}'),i=function(){
const e=document.querySelectorAll("link[rel~=link-locale][data-locale]");if(0===e.length)return o;const t={};return e.forEach((e=>{const n=(0,a.ensureNotNull)(e.getAttribute("data-locale"));t[n]={...o[n],href:e.href}})),t}();function s(e){return e=e||window.locale,i[e]}function r(e){var t;return e=e||window.locale,null===(t=i[e])||void 0===t?void 0:t.iso}},996038:(e,t,n)=>{"use strict";n.d(t,{DialogBreakpoints:()=>o});var a=n(253330);const o={SmallHeight:a["small-height-breakpoint"],TabletSmall:a["tablet-small-breakpoint"],TabletNormal:a["tablet-normal-breakpoint"]}},533408:(e,t,n)=>{"use strict";n.d(t,{AdaptivePopupDialog:()=>B});var a=n(50959),o=n(650151),i=n(497754),s=n.n(i),r=n(180185),l=n(431520),c=n(698043),u=n(59216),d=n(494707),g=n(996038),p=n(930052),m=n(910549);var h=n(206594),_=n(559410),b=n(609838),f=n(389986),v=n(190410),w=n(780822);function y(e){const{title:t,titleTextWrap:o=!1,subtitle:i,showCloseIcon:r=!0,onClose:l,onCloseButtonKeyDown:c,renderBefore:u,renderAfter:d,draggable:g,className:p,unsetAlign:m,closeAriaLabel:h=b.t(null,void 0,n(47742)),closeButtonReference:_}=e,[y,C]=(0,a.useState)(!1);return a.createElement(v.DialogHeaderContext.Provider,{value:{setHideClose:C}},a.createElement("div",{className:s()(w.container,p,(i||m)&&w.unsetAlign)},u,a.createElement("div",{"data-dragg-area":g,className:w.title},a.createElement("div",{className:s()(o?w.textWrap:w.ellipsis)},t),i&&a.createElement("div",{className:s()(w.ellipsis,w.subtitle)},i)),d,r&&!y&&a.createElement(f.CloseButton,{className:w.close,"data-name":"close","aria-label":h,onClick:l,onKeyDown:c,ref:_,size:"medium",preservePaddings:!0})))}var C=n(273388),x=n(800417),k=n(440891),E=n(808473);const S={vertical:20},N={vertical:0};class B extends a.PureComponent{constructor(){super(...arguments),this._controller=null,this._reference=null,this._orientationMediaQuery=null,this._embedResizerOverridesEnabled=k.enabled("embed_resizer_overrides"),this._renderChildren=(e,t)=>(this._controller=e,this.props.render({requestResize:this._requestResize,centerAndFit:this._centerAndFit,isSmallWidth:t})),this._handleReference=e=>this._reference=e,this._handleCloseBtnClick=()=>{this.props.onKeyboardClose&&this.props.onKeyboardClose(),this._handleClose()},this._handleClose=()=>{this.props.onClose()},this._handleOpen=()=>{void 0!==this.props.onOpen&&this.props.isOpened&&this.props.onOpen(this.props.fullScreen||window.matchMedia(g.DialogBreakpoints.TabletSmall).matches)},this._handleKeyDown=e=>{if(!e.defaultPrevented){if(this.props.onKeyDown&&this.props.onKeyDown(e),27===(0,r.hashFromEvent)(e)){if(e.defaultPrevented)return;if(this.props.forceCloseOnEsc&&this.props.forceCloseOnEsc())return this.props.onKeyboardClose&&this.props.onKeyboardClose(),void this._handleClose();const{activeElement:n}=document;if(null!==n){if(e.preventDefault(),"true"===(t=n).getAttribute("data-haspopup")&&"true"!==t.getAttribute("data-expanded"))return void this._handleClose();const a=this._reference;if(null!==a&&(0,c.isTextEditingField)(n))return void a.focus()
;if(null==a?void 0:a.contains(n))return this.props.onKeyboardClose&&this.props.onKeyboardClose(),void this._handleClose()}}var t,n;(function(e){if("function"==typeof e)return e();return Boolean(e)})(this.props.disableTabNavigationContainment)||(n=e,[9,r.Modifiers.Shift+9].includes((0,r.hashFromEvent)(n))&&n.stopPropagation())}},this._requestResize=()=>{null!==this._controller&&this._controller.recalculateBounds()},this._centerAndFit=()=>{null!==this._controller&&this._controller.centerAndFit()},this._calculatePositionWithOffsets=(e,t)=>{const n=(0,o.ensureDefined)(this.props.fullScreenViewOffsets).value();return{top:n.top,left:(0,l.isRtl)()?-n.right:n.left,width:t.clientWidth-n.left-n.right,height:t.clientHeight-n.top-n.bottom}}}componentDidMount(){this.props.ignoreClosePopupsAndDialog||_.subscribe(h.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null),this._handleOpen(),void 0!==this.props.onOpen&&(this._orientationMediaQuery=window.matchMedia("(orientation: portrait)"),this._orientationMediaQuery.addEventListener("change",this._handleOpen)),this.props.fullScreenViewOffsets&&this.props.fullScreen&&this.props.fullScreenViewOffsets.subscribe(this._requestResize)}componentWillUnmount(){this.props.ignoreClosePopupsAndDialog||_.unsubscribe(h.CLOSE_POPUPS_AND_DIALOGS_COMMAND,this._handleClose,null),null!==this._orientationMediaQuery&&this._orientationMediaQuery.removeEventListener("change",this._handleOpen),this.props.fullScreenViewOffsets&&this.props.fullScreen&&this.props.fullScreenViewOffsets.unsubscribe(this._requestResize)}focus(){(0,o.ensureNotNull)(this._reference).focus()}getElement(){return this._reference}contains(e){var t,n;return null!==(n=null===(t=this._reference)||void 0===t?void 0:t.contains(e))&&void 0!==n&&n}render(){const{className:e,wrapperClassName:t,headerClassName:n,isOpened:o,title:i,titleTextWrap:r,dataName:l,onClickOutside:c,additionalElementPos:h,additionalHeaderElement:_,backdrop:b,shouldForceFocus:f=!0,shouldReturnFocus:v,onForceFocus:w,showSeparator:k,subtitle:B,draggable:z=!0,fullScreen:I=!1,showCloseIcon:O=!0,rounded:R=!0,isAnimationEnabled:A,growPoint:D,dialogTooltip:M,unsetHeaderAlign:T,onDragStart:P,dataDialogName:L,closeAriaLabel:K,containerAriaLabel:F,reference:H,containerTabIndex:Q,closeButtonReference:G,onCloseButtonKeyDown:W,shadowed:U,fullScreenViewOffsets:J,fixedBody:V,onClick:j}=this.props,X="after"!==h?_:void 0,q="after"===h?_:void 0,Z="string"==typeof i?i:L||"",$=(0,x.filterDataProps)(this.props),Y=(0,C.mergeRefs)([this._handleReference,H]);return a.createElement(p.MatchMedia,{rule:g.DialogBreakpoints.SmallHeight},(h=>a.createElement(p.MatchMedia,{rule:g.DialogBreakpoints.TabletSmall},(g=>a.createElement(u.PopupDialog,{rounded:!(g||I)&&R,className:s()(E.dialog,I&&J&&E.bounded,e),isOpened:o,reference:Y,onKeyDown:this._handleKeyDown,onClickOutside:c,onClickBackdrop:c,fullscreen:g||I,guard:h?N:S,boundByScreen:g||I,shouldForceFocus:f,onForceFocus:w,shouldReturnFocus:v,backdrop:b,draggable:z,isAnimationEnabled:A,growPoint:D,name:this.props.dataName,dialogTooltip:M,onDragStart:P,
containerAriaLabel:F,containerTabIndex:Q,calculateDialogPosition:I&&J?this._calculatePositionWithOffsets:void 0,shadowed:U,fixedBody:V,onClick:j,...$},a.createElement("div",{className:s()(E.wrapper,t),"data-name":l,"data-dialog-name":Z},void 0!==i&&a.createElement(y,{draggable:z&&!(g||I),onClose:this._handleCloseBtnClick,renderAfter:q,renderBefore:X,subtitle:B,title:i,titleTextWrap:r,showCloseIcon:O,className:n,unsetAlign:T,closeAriaLabel:K,closeButtonReference:G,onCloseButtonKeyDown:W}),k&&a.createElement(d.Separator,{className:E.separator}),a.createElement(m.PopupContext.Consumer,null,(e=>this._renderChildren(e,g||I)))))))))}}},190410:(e,t,n)=>{"use strict";n.d(t,{DialogHeaderContext:()=>a});const a=n(50959).createContext({setHideClose:()=>{}})},904925:(e,t,n)=>{"use strict";n.d(t,{PopupMenuDisclosureView:()=>u});var a=n(50959),o=n(624216),i=n(650151);const s={x:0,y:0};function r(e,t,n){return(0,a.useCallback)((()=>function(e,t,{x:n=s.x,y:a=s.y}=s){const o=(0,i.ensureNotNull)(e).getBoundingClientRect(),r={x:o.left+n,y:o.top+o.height+a,indentFromWindow:{top:4,bottom:4,left:4,right:4}};return t&&(r.overrideWidth=o.width),r}(e.current,t,n)),[e,t])}var l=n(586240);const c=parseInt(l["size-header-height"]);function u(e){const{button:t,popupChildren:n,buttonRef:i,listboxId:s,listboxClassName:l,listboxTabIndex:u,matchButtonAndListboxWidths:d,isOpened:g,scrollWrapReference:p,listboxReference:m,onClose:h,onOpen:_,onListboxFocus:b,onListboxBlur:f,onListboxKeyDown:v,listboxAria:w,repositionOnScroll:y=!0,closeOnHeaderOverlap:C=!1,popupPositionCorrection:x={x:0,y:0},popupPosition:k}=e,E=r(i,d,x),S=C?c:0;return a.createElement(a.Fragment,null,t,a.createElement(o.PopupMenu,{...w,id:s,className:l,tabIndex:u,isOpened:g,position:k||E,repositionOnScroll:y,onClose:h,onOpen:_,doNotCloseOn:i.current,reference:m,scrollWrapReference:p,onFocus:b,onBlur:f,onKeyDown:v,closeOnScrollOutsideOffset:S},n))}},892412:(e,t,n)=>{"use strict";n.d(t,{useDisclosure:()=>a.useDisclosure});var a=n(772069)},953517:(e,t,n)=>{"use strict";n.d(t,{useKeyboardActionHandler:()=>a.useKeyboardActionHandler,useKeyboardClose:()=>a.useKeyboardClose,useKeyboardEventHandler:()=>a.useKeyboardEventHandler,useKeyboardOpen:()=>a.useKeyboardOpen,useKeyboardToggle:()=>a.useKeyboardToggle});var a=n(865968)},585938:(e,t,n)=>{"use strict";n.d(t,{useForceUpdate:()=>a.useForceUpdate});var a=n(813550)},737402:(e,t,n)=>{"use strict";n.d(t,{useSafeMatchMedia:()=>a.useSafeMatchMedia});var a=n(671129)},297265:(e,t,n)=>{"use strict";n.d(t,{useWatchedValueReadonly:()=>o});var a=n(50959);const o=(e,t=!1)=>{const n="watchedValue"in e?e.watchedValue:void 0,o="defaultValue"in e?e.defaultValue:e.watchedValue.value(),[i,s]=(0,a.useState)(n?n.value():o);return(t?a.useLayoutEffect:a.useEffect)((()=>{if(n){s(n.value());const e=e=>s(e);return n.subscribe(e),()=>n.unsubscribe(e)}return()=>{}}),[n]),i}},494707:(e,t,n)=>{"use strict";n.d(t,{Separator:()=>s});var a=n(50959),o=n(497754),i=n(547625);function s(e){return a.createElement("div",{className:o(i.separator,e.className)})}},509247:(e,t,n)=>{
"use strict";n.d(t,{RoundButtonTabs:()=>J});var a,o,i,s,r=n(50959),l=n(609838),c=(n(897107),n(525388)),u=n(429510),d=n(269842),g=n(892412),p=n(984164),m=n(953517);!function(e){e.Primary="primary",e.Ghost="ghost"}(a||(a={})),function(e){e.XSmall="xsmall",e.Small="small",e.Large="large"}(o||(o={})),function(e){e.Start="start",e.Center="center"}(i||(i={})),function(e){e.Text="text",e.Meatballs="meatballs"}(s||(s={}));var h=n(273388),_=n(497754),b=n.n(_),f=n(234539),v=n(72571),w=n(602948),y=n(628881);const C="xsmall",x="primary";function k(e){const t=(0,r.useContext)(f.CustomBehaviourContext),{size:n="xsmall",variant:a="primary",active:o,fake:i,startIcon:s,endIcon:l,showCaret:c,iconOnly:u,anchor:d,enableActiveStateStyles:g=t.enableActiveStateStyles,disableFocusOutline:p=!1,tooltip:m}=e;return _(y["round-tab-button"],y[`size-${n}`],y[`variant-${a}`],s&&y["with-start-icon"],(l||c)&&y["with-end-icon"],u&&y["icon-only"],o&&y.selected,i&&y.fake,d&&y["enable-cursor-pointer"],!g&&y["disable-active-state-styles"],p&&y["disable-focus-outline"],m&&"apply-common-tooltip")}function E(e){const{startIcon:t,endIcon:n,showCaret:a,iconOnly:o,children:i}=e;return r.createElement(r.Fragment,null,t&&r.createElement(v.Icon,{icon:t,className:y["start-icon-wrap"],"aria-hidden":!0}),i&&r.createElement("span",{className:_(y.content,o&&y["visually-hidden"])},i),(!o&&n||a)&&r.createElement(S,{icon:n,showCaret:a}))}function S(e){const{icon:t,showCaret:n}=e;return r.createElement(v.Icon,{className:_(y["end-icon-wrap"],n&&y.caret),icon:n?w:t,"aria-hidden":!0})}const N=(0,r.forwardRef)(((e,t)=>{const{id:n,size:a,variant:o,active:i,fake:s,startIcon:l,endIcon:c,showCaret:u,iconOnly:d,children:g,enableActiveStateStyles:p,disableFocusOutline:m,tooltip:h,..._}=e;return r.createElement("button",{..._,id:n,ref:t,"data-tooltip":h,className:k({size:a,variant:o,active:i,fake:s,startIcon:l,endIcon:c,showCaret:u,iconOnly:d,enableActiveStateStyles:p,disableFocusOutline:m,tooltip:h})},r.createElement(E,{startIcon:l,endIcon:c,showCaret:u,iconOnly:d},g))}));N.displayName="RoundTabsBaseButton";const B=(0,r.createContext)({size:"small",variant:"primary",isHighlighted:!1,isCollapsed:!1,disabled:!1});function z(e){var t,n,a;const{item:o,highlighted:i,handleItemRef:s,reference:l,onClick:c,"aria-disabled":u,...d}=e,g=(0,r.useCallback)((e=>{d.disabled&&e.preventDefault(),c&&c(o)}),[c,o,d.disabled]),p=(0,r.useCallback)((e=>{s&&s(o,e),(0,h.isomorphicRef)(l)(e)}),[o,s]),m={size:null!==(t=d.size)&&void 0!==t?t:C,variant:null!==(n=d.variant)&&void 0!==n?n:x,isHighlighted:Boolean(d.active),isCollapsed:!1,disabled:null!==(a=d.disabled)&&void 0!==a&&a};return r.createElement(N,{...d,id:o.id,onClick:g,ref:p,startIcon:o.startIcon,endIcon:o.endIcon,tooltip:o.tooltip},r.createElement(B.Provider,{value:m},o.children))}var I=n(192063),O=n(904925),R=n(722426),A=n(789882),D=n(602057),M=n(546740);function T(e){
const{disabled:t,isOpened:n,enableActiveStateStyles:a,disableFocusOutline:o,fake:i,items:s,buttonText:l,buttonPreset:u="text",buttonRef:d,size:g,variant:p,isAnchorTabs:m,isHighlighted:h,onButtonClick:_,onItemClick:b,onClose:f}=e,w=(0,r.useRef)(null),y=(0,c.useMergedRefs)([d,w]),C="text"===u?void 0:"xsmall"===g?A:D;return r.createElement(O.PopupMenuDisclosureView,{buttonRef:w,listboxTabIndex:-1,isOpened:n,onClose:f,listboxAria:{"aria-hidden":!0},button:r.createElement(N,{"aria-hidden":!0,disabled:t,active:n,onClick:_,ref:y,tabIndex:-1,size:g,variant:p,startIcon:C,showCaret:"text"===u,iconOnly:"meatballs"===u,enableActiveStateStyles:a,disableFocusOutline:o,fake:i},l),popupChildren:r.createElement(r.Fragment,null,"meatballs"===u&&r.createElement(R.ToolWidgetMenuSummary,null,l),s.map((e=>r.createElement(I.PopupMenuItem,{key:e.id,className:m?M["link-item"]:void 0,onClick:b,onClickArg:e,isActive:h(e),label:r.createElement(P,{isHighlighted:h(e),size:g,variant:p,disabled:e.disabled},e.children),isDisabled:e.disabled,link:"href"in e?e.href:void 0,rel:"rel"in e?e.rel:void 0,target:"target"in e?e.target:void 0,icon:e.startIcon,toolbox:e.endIcon&&r.createElement(v.Icon,{icon:e.endIcon}),renderComponent:"renderComponent"in e?e.renderComponent:void 0,dontClosePopup:!0}))))})}function P(e){const{isHighlighted:t,size:n,variant:a,children:o,disabled:i}=e,s={size:null!=n?n:C,variant:null!=a?a:x,isHighlighted:t,isCollapsed:!0,disabled:null!=i&&i};return r.createElement(B.Provider,{value:s},o)}var L=n(737402),K=n(972535),F=n(586240),H=n(861944);function Q(e){const{overflowBehaviour:t}=e;return _(H["scroll-wrap"],"scroll"===t&&H["overflow-scroll"],"wrap"===t&&H["overflow-wrap"])}function G(e){const{align:t="start",overflowBehaviour:n}=e;return _(H["round-tabs"],("center"!==t||"scroll"!==n)&&H[`align-${t}`])}function W(){const[e,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{t(K.mobiletouch)}),[]),e}var U=n(431520);function J(e){const{id:t,items:a,children:o,activationType:i,orientation:s,disabled:h,moreButtonText:_=l.t(null,void 0,n(437117)),moreButtonPreset:f,className:v,size:w,variant:y,align:C,onActivate:x,isActive:k,style:E={},overflowBehaviour:S,enableActiveStateStyles:N,tablistLabelId:B,tablistLabel:I,"data-name":O="round-tabs-buttons"}=e,R=W(),A=function(e){const t=(0,L.useSafeMatchMedia)(F["media-mf-phone-landscape"],!0),n=W();return null!=e?e:n||!t?"scroll":"collapse"}(S),D=(0,r.useRef)(!1),M=(0,r.useCallback)((e=>e.id),[]),P=function(e="xsmall"){switch(e){case"small":return 8;case"xsmall":return 4;default:return 16}}(w),K=null!=N?N:!R,{containerRefCallback:H,innerContainerRefCallback:J,moreButtonRef:V,setItemRef:j,visibleItems:X,hiddenItems:q}=(0,u.useCollapsible)(a,M,k),Z="collapse"===A?X:a,$="collapse"===A?q:[],Y=(0,r.useCallback)((e=>$.includes(e)),[$]),{isOpened:ee,open:te,close:ne,onButtonClick:ae}=(0,g.useDisclosure)({id:t,disabled:h}),{tabsBindings:oe,tablistBinding:ie,scrollWrapBinding:se,onActivate:re,onHighlight:le,isHighlighted:ce}=(0,p.useTabs)({id:t,items:[...Z,...$],activationType:i,orientation:s,disabled:h,
tablistLabelId:B,tablistLabel:I,scrollIntoViewOptions:{additionalScroll:P},onActivate:x,isActive:k,isCollapsed:Y,isRtl:U.isRtl,isDisclosureOpened:ee}),ue=$.find(ce),de=(0,r.useCallback)((()=>{const e=a.find(k);e&&le(e)}),[le,k,a]),ge=(0,r.useCallback)((e=>{var t;return null!==(t=oe.find((t=>t.id===e.id)))&&void 0!==t?t:{}}),[a,oe]),pe=(0,r.useCallback)((()=>{ne(),de(),D.current=!0}),[ne,de]),me=(0,r.useCallback)((()=>{ue&&(re(ue),le(ue,250))}),[re,le,ue]);ie.ref=(0,c.useMergedRefs)([ie.ref,J]),se.ref=(0,c.useMergedRefs)([se.ref,H]),ie.onKeyDown=(0,d.createSafeMulticastEventHandler)((0,m.useKeyboardEventHandler)([(0,m.useKeyboardClose)(ee,pe),(0,m.useKeyboardActionHandler)([13,32],me,(0,r.useCallback)((()=>Boolean(ue)),[ue]))]),ie.onKeyDown);const he=(0,r.useCallback)((e=>{D.current=!0,ae(e)}),[D,ae]),_e=(0,r.useCallback)((e=>{e&&re(e)}),[re]);return(0,r.useEffect)((()=>{D.current?D.current=!1:(ue&&!ee&&te(),!ue&&ee&&ne())}),[ue,ee,te,ne]),r.createElement("div",{...se,className:b()(Q({overflowBehaviour:A}),v),style:{...E,"--ui-lib-round-tabs-gap":`${P}px`},"data-name":O},r.createElement("div",{...ie,className:G({align:C,overflowBehaviour:A})},Z.map((e=>r.createElement(z,{...ge(e),key:e.id,item:e,onClick:()=>re(e),variant:y,size:w,enableActiveStateStyles:K,disableFocusOutline:R,reference:j(M(e)),...e.dataId&&{"data-id":e.dataId}}))),$.map((e=>r.createElement(z,{...ge(e),key:e.id,item:e,variant:y,size:w,reference:j(M(e)),fake:!0}))),"collapse"===A&&r.createElement(T,{disabled:h,isOpened:ee,items:$,buttonText:_,buttonPreset:f,buttonRef:V,isHighlighted:ce,onButtonClick:he,onItemClick:_e,onClose:ne,variant:y,size:w,enableActiveStateStyles:K,disableFocusOutline:R,fake:0===$.length}),o))}n(591365)},132455:(e,t,n)=>{"use strict";n.d(t,{Spinner:()=>a.Spinner});var a=n(672511)},515783:(e,t,n)=>{"use strict";n.d(t,{ToolWidgetCaret:()=>l});var a=n(50959),o=n(497754),i=n(72571),s=n(862794),r=n(100578);function l(e){const{dropped:t,className:n}=e;return a.createElement(i.Icon,{className:o(n,s.icon,{[s.dropped]:t}),icon:r})}},904237:(e,t,n)=>{"use strict";var a=n(632227);t.createRoot=a.createRoot,a.hydrateRoot},638177:e=>{e.exports={button:"button-GwQQdU8S",hover:"hover-GwQQdU8S",clicked:"clicked-GwQQdU8S",isInteractive:"isInteractive-GwQQdU8S",accessible:"accessible-GwQQdU8S",isGrouped:"isGrouped-GwQQdU8S",isActive:"isActive-GwQQdU8S",isOpened:"isOpened-GwQQdU8S",isDisabled:"isDisabled-GwQQdU8S",text:"text-GwQQdU8S",icon:"icon-GwQQdU8S",endIcon:"endIcon-GwQQdU8S"}},33532:e=>{e.exports={title:"title-u3QJgF_p"}},155352:(e,t,n)=>{"use strict";n.d(t,{DEFAULT_TOOL_WIDGET_BUTTON_THEME:()=>r,ToolWidgetButton:()=>l});var a=n(50959),o=n(497754),i=n(72571),s=n(638177);const r=s,l=a.forwardRef(((e,t)=>{const{tag:n="div",icon:r,endIcon:l,isActive:c,isOpened:u,isDisabled:d,isGrouped:g,isHovered:p,isClicked:m,onClick:h,text:_,textBeforeIcon:b,title:f,theme:v=s,className:w,forceInteractive:y,inactive:C,"data-name":x,"data-tooltip":k,...E}=e,S=o(w,v.button,(f||k)&&"apply-common-tooltip",{[v.isActive]:c,[v.isOpened]:u,
[v.isInteractive]:(y||Boolean(h))&&!d&&!C,[v.isDisabled]:Boolean(d||C),[v.isGrouped]:g,[v.hover]:p,[v.clicked]:m}),N=r&&("string"==typeof r?a.createElement(i.Icon,{className:v.icon,icon:r}):a.cloneElement(r,{className:o(v.icon,r.props.className)}));return"button"===n?a.createElement("button",{...E,ref:t,type:"button",className:o(S,v.accessible),disabled:d&&!C,onClick:h,title:f,"data-name":x,"data-tooltip":k},b&&_&&a.createElement("div",{className:o("js-button-text",v.text)},_),N,!b&&_&&a.createElement("div",{className:o("js-button-text",v.text)},_)):a.createElement("div",{...E,ref:t,"data-role":"button",className:S,onClick:d?void 0:h,title:f,"data-name":x,"data-tooltip":k},b&&_&&a.createElement("div",{className:o("js-button-text",v.text)},_),N,!b&&_&&a.createElement("div",{className:o("js-button-text",v.text)},_),l&&a.createElement(i.Icon,{icon:l,className:s.endIcon}))}))},722426:(e,t,n)=>{"use strict";n.d(t,{ToolWidgetMenuSummary:()=>s});var a=n(50959),o=n(497754),i=n(33532);function s(e){return a.createElement("div",{className:o(e.className,i.title)},e.children)}},789882:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M5 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>'},602057:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm8 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>'},117105:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>'},315130:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>'},238822:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>'},663346:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>'},534983:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>'},100578:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'},569533:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 5l3.5 3.5L8 12"/></svg>'}}]);