(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[4226],{200456:e=>{e.exports={"link-item":"link-item-eIA09f0e"}},610399:e=>{e.exports={"arrow-icon":"arrow-icon-NIrWNOPk",dropped:"dropped-NIrWNOPk","size-xsmall":"size-xsmall-NIrWNOPk","size-small":"size-small-NIrWNOPk","size-medium":"size-medium-NIrWNOPk","size-large":"size-large-NIrWNOPk","size-xlarge":"size-xlarge-NIrWNOPk"}},324554:e=>{e.exports={"underline-tab":"underline-tab-cfYYXvwA","disable-focus-outline":"disable-focus-outline-cfYYXvwA","enable-cursor-pointer":"enable-cursor-pointer-cfYYXvwA",selected:"selected-cfYYXvwA","disable-active-state-styles":"disable-active-state-styles-cfYYXvwA","size-xsmall":"size-xsmall-cfYYXvwA","size-small":"size-small-cfYYXvwA","size-medium":"size-medium-cfYYXvwA","size-large":"size-large-cfYYXvwA","size-xlarge":"size-xlarge-cfYYXvwA",fake:"fake-cfYYXvwA","margin-xsmall":"margin-xsmall-cfYYXvwA","margin-small":"margin-small-cfYYXvwA","margin-medium":"margin-medium-cfYYXvwA","margin-large":"margin-large-cfYYXvwA","margin-xlarge":"margin-xlarge-cfYYXvwA",collapse:"collapse-cfYYXvwA","ellipsis-children":"ellipsis-children-cfYYXvwA"}},707633:e=>{e.exports={"scroll-wrap":"scroll-wrap-SmxgjhBJ","size-xlarge":"size-xlarge-SmxgjhBJ","enable-scroll":"enable-scroll-SmxgjhBJ","underline-tabs":"underline-tabs-SmxgjhBJ","size-large":"size-large-SmxgjhBJ","size-medium":"size-medium-SmxgjhBJ","size-small":"size-small-SmxgjhBJ","size-xsmall":"size-xsmall-SmxgjhBJ","make-grid-column":"make-grid-column-SmxgjhBJ","stretch-tabs":"stretch-tabs-SmxgjhBJ","equal-tab-size":"equal-tab-size-SmxgjhBJ"}},329662:e=>{e.exports={underline:"underline-Pun8HxCz",center:"center-Pun8HxCz",corner:"corner-Pun8HxCz",disabled:"disabled-Pun8HxCz"}},254226:(e,t,l)=>{"use strict";l.d(t,{UnderlineButtonTabs:()=>q});var a,i=l(50959),n=l(497754),s=l.n(n),r=l(609838),o=l(429510),c=l(525388),u=l(269842),d=l(892412),m=l(984164),f=l(953517);!function(e){e.XSmall="xsmall",e.Small="small",e.Medium="medium",e.Large="large",e.XLarge="xlarge"}(a||(a={}));const v=(0,i.createContext)({size:"small",overflowBehaviour:void 0});var b=l(234539),g=l(324554);function h(e){const{size:t="xsmall",active:l,fake:a,enableActiveStateStyles:i,anchor:s=!1,hideFocusOutline:r=!1,equalTabSize:o,className:c,overflowBehaviour:u}=e;return n(g["underline-tab"],g[`size-${t}`],l&&g.selected,!i&&g["disable-active-state-styles"],r&&g["disable-focus-outline"],a&&g.fake,s&&g["enable-cursor-pointer"],o&&g[`margin-${t}`],"collapse"===u&&g.collapse,c)}const p=(0,i.forwardRef)(((e,t)=>{const{size:l,overflowBehaviour:a}=(0,i.useContext)(v),n=(0,i.useContext)(b.CustomBehaviourContext),{active:r,fake:o,className:c,enableActiveStateStyles:u=n.enableActiveStateStyles,hideFocusOutline:d=!1,equalTabSize:m,children:f,...p}=e;return i.createElement("button",{...p,ref:t,className:h({size:l,active:r,fake:o,enableActiveStateStyles:u,hideFocusOutline:d,equalTabSize:m,className:c,overflowBehaviour:a})},m&&"string"==typeof f?i.createElement("span",{
className:s()(g["ellipsis-children"],"apply-overflow-tooltip")},f):f)}));p.displayName="UnderlineTabsBaseButton";const x=(0,i.forwardRef)(((e,t)=>{const{item:l,highlighted:a,handleItemRef:n,onClick:s,"aria-disabled":r,...o}=e,c=(0,i.useCallback)((()=>{s&&s(l)}),[s,l]),u=(0,i.useCallback)((e=>{n&&n(l,e),t&&"object"==typeof t?t.current=e:"function"==typeof t&&t(e)}),[l,n,t]);return i.createElement(p,{...o,id:l.id,onClick:c,ref:u},l.label)}));x.displayName="UnderlineButtonTab";var w=l(650151),C=l(192063),k=l(904925),z=l(72571),S=l(347531),y=l(602948),A=l(863509),B=l(168874),N=l(610399);function Y(e){switch(e){case"xsmall":return S;case"small":return y;case"medium":case"large":return A;case"xlarge":return B}}function E(e){const{size:t,isDropped:l=!1}=e;return i.createElement(z.Icon,{icon:Y(t),className:n(N["arrow-icon"],N[`size-${t}`],l&&N.dropped)})}var R=l(200456);function X(e){const{size:t,disabled:l,isOpened:a,enableActiveStateStyles:n,hideFocusOutline:s,fake:r,items:o,buttonContent:u,buttonRef:d,isAnchorTabs:m,isHighlighted:f,onButtonClick:v,onItemClick:b,onClose:g}=e,h=(0,i.useRef)(null),x=(0,c.useMergedRefs)([d,h]),z=function(e,t){const l=(0,i.useRef)(O);return(0,i.useEffect)((()=>{const e=getComputedStyle((0,w.ensureNotNull)(t.current));l.current={xsmall:I(e,"xsmall"),small:I(e,"small"),medium:I(e,"medium"),large:I(e,"large"),xlarge:I(e,"xlarge")}}),[t]),(0,i.useCallback)((()=>{const a=(0,w.ensureNotNull)(t.current).getBoundingClientRect(),i=l.current[e];return{x:a.left,y:a.top+a.height+i+4,indentFromWindow:{top:4,bottom:4,left:4,right:4}}}),[t,e])}(t,h);return i.createElement(k.PopupMenuDisclosureView,{buttonRef:h,listboxTabIndex:-1,isOpened:a,onClose:g,listboxAria:{"aria-hidden":!0},popupPosition:z,button:i.createElement(p,{"aria-hidden":!0,disabled:l,active:a,onClick:v,ref:x,tabIndex:-1,enableActiveStateStyles:n,hideFocusOutline:s,fake:r},u,i.createElement(E,{size:t,isDropped:a})),popupChildren:o.map((e=>i.createElement(C.PopupMenuItem,{key:e.id,className:m?R["link-item"]:void 0,onClick:b,onClickArg:e,isActive:f(e),label:e.label,isDisabled:e.disabled,link:"href"in e?e.href:void 0,rel:"rel"in e?e.rel:void 0,target:"target"in e?e.target:void 0,renderComponent:"renderComponent"in e?e.renderComponent:void 0,dontClosePopup:!0})))})}function I(e,t){return parseInt(e.getPropertyValue(`--ui-lib-underline-tabs-tab-margin-bottom-${t}`),10)}const O={xsmall:0,small:0,medium:0,large:0,xlarge:0};var P=l(804395),T=l(737402),j=l(586240),D=l(707633);function H(e){const{size:t,overflowBehaviour:l,className:a}=e;return n(D["scroll-wrap"],D[`size-${t}`],"scroll"===l&&D["enable-scroll"],a)}function J(){const[e,t]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{t(P.mobiletouch)}),[]),e}var M=l(12481),$=l(431520),F=l(329662),L=l.n(F);function W(e){const{disabled:t,translateX:l,transitionDuration:a}=e,s=e.scale/100;return i.createElement("div",{className:n(L().underline,t&&L().disabled),style:{transform:`translateX(${l}px) scaleX(${s})`,transitionDuration:`${a}ms`}},i.createElement("div",{className:L().corner,style:{
transform:`scaleX(${1/s})`}}),i.createElement("div",{className:L().center,style:{transform:`scaleX(${1-30/e.scale})`}}),i.createElement("div",{className:L().corner,style:{transform:`scaleX(${1/s})`}}))}function q(e){const{id:t,items:a,activationType:n,orientation:b,disabled:g,moreButtonContent:h=r.t(null,void 0,l(437117)),size:p="small",onActivate:w,isActive:C,className:k,style:z,overflowBehaviour:S,enableActiveStateStyles:y,tablistLabelId:A,tablistLabel:B,"data-name":N="underline-tabs-buttons",stretchTabs:Y,equalTabSize:E}=e,R=J(),I=function(e){const t=(0,T.useSafeMatchMedia)(j["media-mf-phone-landscape"],!0),l=J();return null!=e?e:l||!t?"scroll":"collapse"}(S),O=(0,i.useRef)(!1),P=(0,i.useCallback)((e=>e.id),[]),F="none"===I&&Y,L="none"===I&&E,q=null!=y?y:!R,{visibleItems:K,hiddenItems:U,containerRefCallback:V,innerContainerRefCallback:Z,moreButtonRef:G,setItemRef:Q}=(0,o.useCollapsible)(a,P,C),_="collapse"===I?K:a,ee="collapse"===I?U:[],te=(0,i.useCallback)((e=>ee.includes(e)),[ee]),le=(0,i.useRef)(new Map),{isOpened:ae,open:ie,close:ne,onButtonClick:se}=(0,d.useDisclosure)({id:t,disabled:g}),re=function(e="xsmall"){switch(e){case"xsmall":case"small":return 12;case"medium":return 16;case"large":case"xlarge":return 20}}(p),{tabsBindings:oe,tablistBinding:ce,scrollWrapBinding:ue,onActivate:de,onHighlight:me,isHighlighted:fe}=(0,m.useTabs)({id:t,items:[..._,...ee],activationType:n,orientation:b,disabled:g,tablistLabelId:A,tablistLabel:B,onActivate:w,isActive:C,isCollapsed:te,isRtl:$.isRtl,itemsRefs:le,isDisclosureOpened:ae,scrollIntoViewOptions:{additionalScroll:re}}),ve=a.find(C),be=ee.find(fe),ge=(0,i.useCallback)((()=>{ve&&me(ve)}),[me,ve]),he=(0,i.useCallback)((e=>{var t;return null!==(t=oe.find((t=>t.id===e.id)))&&void 0!==t?t:{}}),[oe]),pe=(0,i.useCallback)((()=>{ne(),ge(),O.current=!0}),[ne,ge]),xe=(0,i.useCallback)((()=>{be&&(de(be),me(be,200))}),[de,me,be]);ue.ref=(0,c.useMergedRefs)([ue.ref,V]),ce.ref=(0,c.useMergedRefs)([ce.ref,Z]),ce.onKeyDown=(0,u.createSafeMulticastEventHandler)((0,f.useKeyboardEventHandler)([(0,f.useKeyboardClose)(ae,pe),(0,f.useKeyboardActionHandler)([13,32],xe,(0,i.useCallback)((()=>Boolean(be)),[be]))]),ce.onKeyDown);const we=(0,i.useCallback)((e=>{O.current=!0,se(e)}),[O,se]),Ce=(0,i.useCallback)((e=>{e&&de(e)}),[de]);(0,i.useEffect)((()=>{O.current?O.current=!1:(be&&!ae&&ie(),!be&&ae&&ne())}),[be,ae,ie,ne]);const ke=function(e,t,l=[]){const[a,n]=(0,i.useState)(),s=(0,i.useRef)(),r=(0,i.useRef)(),o=e=>{var t;const l=null!==(t=e.parentElement)&&void 0!==t?t:void 0;if(void 0===l)return;const a=void 0===r.current||r.current===e?0:100;r.current=e;const{left:i,right:s,width:o}=e.getBoundingClientRect(),{left:c,right:u}=l.getBoundingClientRect(),d=(0,$.isRtl)()?s-u:i-c;n({translateX:d,scale:o,transitionDuration:a})};return(0,i.useEffect)((()=>{const e=(0,M.default)((e=>{const t=e[0].target;void 0!==t&&o(t)}),50);s.current=new ResizeObserver(e)}),[]),(0,i.useEffect)((()=>{var l;if(void 0===t)return;const a=e.get(t);return void 0!==a?(o(a),null===(l=s.current)||void 0===l||l.observe(a),
()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.disconnect()}):void 0}),l),a}(le.current,null!=ve?ve:be,[null!=ve?ve:be,_,p,F,I]);return i.createElement(v.Provider,{value:{size:p,overflowBehaviour:I}},i.createElement("div",{...ue,className:H({size:p,overflowBehaviour:I,className:k}),style:z,"data-name":N},i.createElement("div",{...ce,className:s()(D["underline-tabs"],{[D["make-grid-column"]]:F||L,[D["stretch-tabs"]]:F,[D["equal-tab-size"]]:L})},_.map((e=>i.createElement(x,{...he(e),key:e.id,item:e,onClick:de,enableActiveStateStyles:q,hideFocusOutline:R,ref:Q(P(e)),...e.dataId&&{"data-id":e.dataId},equalTabSize:L}))),ee.map((e=>i.createElement(x,{...he(e),ref:Q(P(e)),key:e.id,item:e,fake:!0}))),"collapse"===I&&i.createElement(X,{size:p,disabled:g,isOpened:ae,items:ee,buttonContent:h,buttonRef:G,isHighlighted:fe,onButtonClick:we,onItemClick:Ce,onClose:ne,enableActiveStateStyles:q,hideFocusOutline:R,fake:0===ee.length}),ke?i.createElement(W,{...ke,disabled:g}):i.createElement("div",null))))}var K=l(409245);function U(e){return i.createElement("a",{...(0,K.renameRef)(e)})}(0,i.forwardRef)(((e,t)=>{var l;const{size:a,overflowBehaviour:n}=(0,i.useContext)(v),s=(0,i.useContext)(b.CustomBehaviourContext),{item:r,highlighted:o,handleItemRef:c,onClick:u,active:d,fake:m,className:f,enableActiveStateStyles:g=s.enableActiveStateStyles,hideFocusOutline:p=!1,disabled:x,"aria-disabled":w,...C}=e,k=(0,i.useCallback)((e=>{w?e.preventDefault():u&&u(r)}),[u,w,r]),z=(0,i.useCallback)((e=>{c&&c(r,e),t&&"object"==typeof t?t.current=e:"function"==typeof t&&t(e)}),[r,c,t]),S=null!==(l=r.renderComponent)&&void 0!==l?l:U;return i.createElement(S,{...C,id:r.id,"aria-disabled":w,onClick:k,reference:z,href:r.href,rel:r.rel,target:r.target,className:h({size:a,active:d,fake:m,enableActiveStateStyles:g,anchor:!0,hideFocusOutline:p,className:f,overflowBehaviour:n})},r.label)})).displayName="UnderlineAnchorTab"},347531:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="m4.67 7.38.66-.76L9 9.84l3.67-3.22.66.76L9 11.16 4.67 7.38Z"/></svg>'},863509:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.57 7.85 9 12.62l5.43-4.77-1.32-1.5L9 9.95l-4.11-3.6-1.32 1.5Z"/></svg>'},168874:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="m14 18.41-6.7-6.7 1.4-1.42 5.3 5.3 5.3-5.3 1.4 1.41-6.7 6.71Z"/></svg>'}}]);