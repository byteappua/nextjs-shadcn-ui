(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[92],{36136:e=>{e.exports={"nav-button":"nav-button-znwuaSC1",link:"link-znwuaSC1",background:"background-znwuaSC1",icon:"icon-znwuaSC1","flip-icon":"flip-icon-znwuaSC1","size-large":"size-large-znwuaSC1","preserve-paddings":"preserve-paddings-znwuaSC1","size-medium":"size-medium-znwuaSC1","size-small":"size-small-znwuaSC1","size-xsmall":"size-xsmall-znwuaSC1","size-xxsmall":"size-xxsmall-znwuaSC1","visually-hidden":"visually-hidden-znwuaSC1"}},700377:e=>{e.exports={container:"container-TCHLKPuQ","container-danger":"container-danger-TCHLKPuQ","light-title":"light-title-TCHLKPuQ","light-icon":"light-icon-TCHLKPuQ",icon:"icon-TCHLKPuQ",header:"header-TCHLKPuQ","light-container-danger":"light-container-danger-TCHLKPuQ","container-warning":"container-warning-TCHLKPuQ","light-container-warning":"light-container-warning-TCHLKPuQ","container-success":"container-success-TCHLKPuQ","light-container-success":"light-container-success-TCHLKPuQ","container-default":"container-default-TCHLKPuQ","light-container-default":"light-container-default-TCHLKPuQ","text-wrap":"text-wrap-TCHLKPuQ","light-text-wrap":"light-text-wrap-TCHLKPuQ","close-button":"close-button-TCHLKPuQ","light-close-button":"light-close-button-TCHLKPuQ",informerBody:"informerBody-TCHLKPuQ",mainProblem:"mainProblem-TCHLKPuQ","header-inline":"header-inline-TCHLKPuQ","header-new-line":"header-new-line-TCHLKPuQ"}},706388:e=>{e.exports={container:"container-Q8oybhDM",centerElement:"centerElement-Q8oybhDM",notice:"notice-Q8oybhDM",noticeShowed:"noticeShowed-Q8oybhDM"}},389986:(e,t,n)=>{"use strict";n.d(t,{CloseButton:()=>d});var r=n(50959),i=n(270762),a=n(117105),o=n(315130),s=n(238822),l=n(663346),c=n(534983);function u(e="large"){switch(e){case"large":return a;case"medium":default:return o;case"small":return s;case"xsmall":return l;case"xxsmall":return c}}const d=r.forwardRef(((e,t)=>r.createElement(i.NavButton,{...e,ref:t,icon:u(e.size)})))},270762:(e,t,n)=>{"use strict";n.d(t,{NavButton:()=>c});var r=n(50959),i=n(497754),a=n(72571),o=(n(15378),n(36136));function s(e){const{size:t="large",preservePaddings:n,isLink:r,flipIconOnRtl:a,className:s}=e;return i(o["nav-button"],o[`size-${t}`],n&&o["preserve-paddings"],a&&o["flip-icon"],r&&o.link,s)}function l(e){const{children:t,icon:n}=e;return r.createElement(r.Fragment,null,r.createElement("span",{className:o.background}),r.createElement(a.Icon,{icon:n,className:o.icon,"aria-hidden":!0}),t&&r.createElement("span",{className:o["visually-hidden"]},t))}const c=(0,r.forwardRef)(((e,t)=>{const{icon:n,type:i="button",preservePaddings:a,flipIconOnRtl:o,size:c,"aria-label":u,...d}=e;return r.createElement("button",{...d,className:s({...e,children:u}),ref:t,type:i},r.createElement(l,{icon:n},u))}));c.displayName="NavButton";var u=n(591365),d=n(273388);(0,r.forwardRef)(((e,t)=>{const{icon:n,renderComponent:i,"aria-label":a,...o}=e,c=null!=i?i:u.CustomComponentDefaultLink;return r.createElement(c,{...o,className:s({...e,children:a,isLink:!0}),reference:(0,
d.isomorphicRef)(t)},r.createElement(l,{icon:n},a))})).displayName="NavAnchorButton"},15378:(e,t,n)=>{"use strict";var r,i,a,o;!function(e){e.Primary="primary",e.QuietPrimary="quiet-primary",e.Secondary="secondary",e.Ghost="ghost"}(r||(r={})),function(e){e.XXSmall="xxsmall",e.XSmall="xsmall",e.Small="small",e.Medium="medium",e.Large="large",e.XLarge="xlarge",e.XXLarge="xxlarge"}(i||(i={})),function(e){e.Brand="brand",e.Gray="gray",e.LightGray="light-gray",e.Green="green",e.Red="red",e.Black="black",e.Gradient="gradient",e.BlackFriday="black-friday",e.CyberMonday="cyber-monday"}(a||(a={})),function(e){e.Semibold18px="semibold18px",e.Semibold16px="semibold16px",e.Semibold14px="semibold14px",e.Medium16px="medium16px",e.Regular16px="regular16px",e.Regular14px="regular14px"}(o||(o={}))},409245:(e,t,n)=>{"use strict";function r(e){const{reference:t,...n}=e;return{...n,ref:t}}n.d(t,{renameRef:()=>r})},591365:(e,t,n)=>{"use strict";n.d(t,{CustomComponentDefaultLink:()=>a});var r=n(50959),i=n(409245);function a(e){return r.createElement("a",{...(0,i.renameRef)(e)})}r.PureComponent},72571:(e,t,n)=>{"use strict";n.d(t,{Icon:()=>i});var r=n(50959);const i=r.forwardRef(((e,t)=>{const{icon:n="",title:i,ariaLabel:a,ariaLabelledby:o,ariaHidden:s,...l}=e,c=!!(i||a||o);return r.createElement("span",{...l,ref:t,role:"img","aria-label":a,"aria-labelledby":o,"aria-hidden":s||!c,title:i,dangerouslySetInnerHTML:{__html:n}})}))},918460:(e,t,n)=>{"use strict";n.d(t,{Informer:()=>p});var r,i,a=n(50959),o=n(497754),s=n(72571),l=n(389986),c=n(800417),u=n(530162),d=n(527941),m=n(499084),h=n(700377),g=n.n(h);!function(e){e.Danger="danger",e.Warning="warning",e.Success="success",e.Default="default"}(r||(r={})),function(e){e.Inline="inline",e.NewLine="new-line"}(i||(i={}));const w={danger:u,warning:u,success:m,default:d};function p(e){const{informerIntent:t,content:n,className:r,header:i,isIconShown:u=!0,isCloseButtonShown:d,icon:m,onCloseClick:h,closeButtonLabel:p="Close",headerPlacement:f="inline",children:v,isLight:x}=e;return a.createElement("div",{className:o(g().container,g()[`container-${t}`],x&&g()[`light-container-${t}`],r),...(0,c.filterDataProps)(e),...(0,c.filterAriaProps)(e)},a.createElement("div",{className:g().informerBody},n&&a.createElement("div",{className:g().mainProblem},u&&a.createElement(s.Icon,{className:o(g().icon,x&&g()["light-icon"]),icon:null!=m?m:w[t]}),a.createElement("div",{className:o(g()["text-wrap"],x&&g()["light-text-wrap"])},i&&a.createElement("span",{className:o(x&&g()["light-title"],g().header,g()[`header-${x?"new-line":f}`])},i),a.createElement("span",{"aria-live":"assertive"}," ",n))),v),d&&a.createElement(l.CloseButton,{"aria-label":p,onClick:h,className:o(x&&g()["light-close-button"],g()["close-button"]),size:x?"xxsmall":"xsmall",preservePaddings:!x}))}},800417:(e,t,n)=>{"use strict";function r(e){return a(e,o)}function i(e){return a(e,s)}function a(e,t){const n=Object.entries(e).filter(t),r={};for(const[e,t]of n)r[e]=t;return r}function o(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}
function s(e){return 0===e[0].indexOf("aria-")}n.d(t,{filterAriaProps:()=>i,filterDataProps:()=>r,filterProps:()=>a,isAriaAttribute:()=>s,isDataAttribute:()=>o})},273388:(e,t,n)=>{"use strict";function r(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}function i(e){return r([e])}n.d(t,{isomorphicRef:()=>i,mergeRefs:()=>r})},808965:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ChartScreenshotHintRenderer:()=>d});var r=n(50959),i=n(632227),a=n(12481),o=n(497754),s=n(918460),l=n(110963),c=n(706388);function u(e){const{text:t,style:n,hideTimeout:i,informerIntent:a="success"}=e,u=(0,l.useHintShowAnimation)(i);return r.createElement("div",{className:c.container,style:n},r.createElement("div",{className:c.centerElement},r.createElement(s.Informer,{content:t,informerIntent:a,className:o(c.notice,u&&c.noticeShowed)})))}class d{constructor(e,t){this._showed=!1,this._wrap=document.createElement("div"),this._container=e,this._debouncedHide=(0,a.default)((()=>this.hide()),3e3),this._bottomPadding=t.bottomPadding}show(e){this._wrap&&!this._showed&&(this._showed=!0,this._container.append(this._wrap),i.render(r.createElement(u,{text:e,style:this._bottomPadding?{bottom:70}:void 0}),this._wrap),this._debouncedHide())}hide(){this._wrap&&(this._showed=!1,i.unmountComponentAtNode(this._wrap),this._wrap.remove())}destroy(){this.hide(),delete this._wrap}}},110963:(e,t,n)=>{"use strict";n.d(t,{useHintShowAnimation:()=>i});var r=n(50959);function i(e){const[t,n]=(0,r.useState)(!1);return(0,r.useLayoutEffect)((()=>{const t=setTimeout((()=>n(!0)),50),r=setTimeout((()=>n(!1)),null!=e?e:2500);return()=>{clearTimeout(t),clearTimeout(r)}}),[]),t}},499084:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16Zm3.87-12.15c.36.2.49.66.28 1.02l-4 7a.75.75 0 0 1-1.18.16l-3-3a.75.75 0 1 1 1.06-1.06l2.3 2.3 3.52-6.14a.75.75 0 0 1 1.02-.28Z"/></svg>'},530162:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4Zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>'},527941:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM8 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 2c.49 0 1 .59 1 1v3.01c0 .42-.51.99-1 .99s-1-.57-1-.99V9c0-.41.51-1 1-1Z"/></svg>'},117105:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 21 21m0-21-21 21"/></svg>'},315130:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 15 15m0-15-15 15"/></svg>'},238822:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 11 11m0-11-11 11"/></svg>'},663346:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 9 9m0-9-9 9"/></svg>'},534983:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10"><path stroke="currentColor" stroke-width="1.2" d="m1.5 1.5 7 7m0-7-7 7"/></svg>'}}]);