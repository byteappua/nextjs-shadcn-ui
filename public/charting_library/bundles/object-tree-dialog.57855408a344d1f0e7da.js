(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[4862,3285],{204914:e=>{e.exports={itemRow:"itemRow-BadjY5sX",active:"active-BadjY5sX",selected:"selected-BadjY5sX",mobile:"mobile-BadjY5sX",itemInfo:"itemInfo-BadjY5sX",title:"title-BadjY5sX",details:"details-BadjY5sX",itemInfoWithPadding:"itemInfoWithPadding-BadjY5sX",favoriteButton:"favoriteButton-BadjY5sX",favorite:"favorite-BadjY5sX",removeButton:"removeButton-BadjY5sX"}},568016:e=>{e.exports={title:"title-QPktCwTY",container:"container-QPktCwTY",mobile:"mobile-QPktCwTY",empty:"empty-QPktCwTY",image:"image-QPktCwTY",spinner:"spinner-QPktCwTY",contentList:"contentList-QPktCwTY",item:"item-QPktCwTY"}},690684:e=>{e.exports={dialog:"dialog-VUnQLSMH",buttons:"buttons-VUnQLSMH",button:"button-VUnQLSMH",disabled:"disabled-VUnQLSMH"}},975228:(e,t,o)=>{"use strict";o.d(t,{hoverMouseEventFilter:()=>i,useAccurateHover:()=>s,useHover:()=>r});var n=o(50959);function r(){const[e,t]=(0,n.useState)(!1);return[e,{onMouseOver:function(e){i(e)&&t(!0)},onMouseOut:function(e){i(e)&&t(!1)}}]}function i(e){return!e.currentTarget.contains(e.relatedTarget)}function s(e){const[t,o]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const t=t=>{if(null===e.current)return;const n=e.current.contains(t.target);o(n)};return document.addEventListener("mouseover",t),()=>document.removeEventListener("mouseover",t)}),[]),t}},252130:(e,t,o)=>{"use strict";o.d(t,{useIsMounted:()=>r});var n=o(50959);const r=()=>{const e=(0,n.useRef)(!1);return(0,n.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},247465:(e,t,o)=>{"use strict";o.d(t,{isCancelled:()=>i,makeCancelable:()=>r});class n extends Error{constructor(){super("CancelToken")}}function r(e){let t=!1;return{promise:new Promise(((o,r)=>{e.then((e=>t?r(new n):o(e))),e.catch((e=>r(t?new n:e)))})),cancel(){t=!0}}}function i(e){return e instanceof n}},73572:(e,t,o)=>{"use strict";o.d(t,{DialogContentItem:()=>h});var n=o(50959),r=o(497754),i=o.n(r),s=o(601227),a=o(577687),l=o(72621);function c(e){const{url:t,...o}=e;return t?n.createElement("a",{...o,href:t}):n.createElement("div",{...o})}var u=o(460925),d=o(204914);function h(e){const{title:t,subtitle:o,removeBtnLabel:r,onClick:h,onClickFavorite:m,onClickRemove:p,isActive:g,isSelected:f,isFavorite:b,isMobile:w=!1,showFavorite:E=!0,className:y,...T}=e;return n.createElement(c,{...T,className:i()(d.itemRow,g&&!f&&d.active,w&&d.mobile,f&&d.selected,y),onClick:v.bind(null,h),"data-role":"list-item","data-active":g},E&&m&&n.createElement(a.FavoriteButton,{className:i()(d.favoriteButton,b&&d.favorite,s.CheckMobile.any()&&d.mobile),isActive:g&&!f,isFilled:b,onClick:v.bind(null,m),"data-name":"list-item-favorite-button","data-favorite":b}),n.createElement("div",{className:i()(d.itemInfo,!E&&d.itemInfoWithPadding)},n.createElement("div",{className:i()(d.title,g&&!f&&d.active,w&&d.mobile),"data-name":"list-item-title"},t),n.createElement("div",{className:i()(d.details,g&&!f&&d.active,w&&d.mobile)},o)),n.createElement(l.RemoveButton,{className:d.removeButton,isActive:g&&!f,
onClick:v.bind(null,p),"data-name":"list-item-remove-button",title:r,icon:u}))}function v(e,t){t.defaultPrevented||(t.preventDefault(),e(t))}},650075:(e,t,o)=>{"use strict";o.d(t,{ManageDrawings:()=>_});var n=o(50959),r=o(343370),i=o(497754),s=o.n(i),a=o(72571),l=o(609838),c=o(272047),u=o(240534),d=o(937778),h=o(868674),v=o(73572),m=o(41899),p=o(132455),g=o(509247);const f=l.t(null,void 0,o(592931)),b=l.t(null,void 0,o(241870)),w=l.t(null,void 0,o(780996));function E(e){const{sharingMode:t,onTabClick:o}=e,r=n.useMemo((()=>[{children:f,id:"2"},{children:b,id:"1"},{children:w,id:"0"}]),[]);return n.createElement(g.RoundButtonTabs,{id:"manage-drawings-tabs",isActive:e=>parseInt(e.id)===t,onActivate:function(e){o(parseInt(e.id))},overflowBehaviour:"scroll",items:r})}var y=o(229540),T=o(568016);const C=(0,d.getLogger)("Chart.ManageDrawings"),S=new Map;function M(e){let t=S.get(e);return void 0===t&&(t=new u.WatchedValue([]),S.set(e,t)),t}const O=new c.TranslatedString("remove all line tools for {symbol}",l.t(null,void 0,o(858407))),D=l.t(null,void 0,o(708182)),k=l.t(null,void 0,o(284212));function N(e){const[t,o]=n.useState(null),[i,s]=n.useState(null),[a,l]=n.useState(null),[c,u]=(n.useRef(null),n.useState([]));return n.useEffect((()=>{let t;const n=()=>{t&&s(t.mainSeries().proSymbol())};return e.withModel(null,(()=>{t=e.model(),o(t),n(),t.mainSeries().symbolResolved().subscribe(null,n)})),()=>{null==t||t.mainSeries().symbolResolved().unsubscribe(null,n),o(null)}}),[e]),n.useEffect((()=>{if(null!==t){const e={},o=(0,r.default)(g,250,{leading:!1});return g(),t.model().dataSourceCollectionChanged().subscribe(e,o),()=>{t.model().dataSourceCollectionChanged().unsubscribe(e,o)}}}),[t]),n.useEffect((()=>{if(null!==t){const e=M(t.model().id()).spawn();return u([...e.value()]),e.subscribe((()=>u([...e.value()]))),()=>null==e?void 0:e.destroy()}}),[t]),n.useMemo((()=>({currentSymbol:i,symbolDrawingsMaps:a,removeSymbolDrawings:d,changeSymbol:v,hiddenSymbols:c})),[i,a,d,v,c]);async function d(e,o){if(t&&a){const n=a[o].get(e);if(n){const o=Array.from(n).map((e=>t.model().dataSourceForId(e))).filter(m.notNull);o.length>0&&t.removeSources(o,!1,O.format({symbol:e}));const r=M(t.model().id());r.setValue([...r.value(),e]);try{await g()}catch(e){C.logError(`Error removing line tools: ${e}`)}r.setValue(r.value().filter((t=>t!==e)))}}}function v(o){e.setSymbol(o),null!==t&&s(o)}async function p(e){const t=function(e){const t=[new Map,new Map,new Map];return e.forEach((e=>{var o;if((0,h.isLineTool)(e)&&e.showInObjectTree()){const n=null!==(o=e.symbol())&&void 0!==o?o:"",r=e.sharingMode().value();t[r].set(n,(t[r].get(n)||new Set).add(e.id()))}})),t}(e);return(await async function(){return[new Map,new Map,new Map]}()).forEach(((e,o)=>{const n=t[o];e.forEach(((e,t)=>{const o=n.get(t)||new Set;e.forEach((e=>o.add(e))),n.set(t,o)}))})),t}async function g(){null!==t&&l(await p(t.dataSources()))}}function _(e){
const{isMobile:t,isSmallWidth:r,chartWidget:i,onClose:c,onInitialized:u}=e,{currentSymbol:d,symbolDrawingsMaps:h,removeSymbolDrawings:m,changeSymbol:g,hiddenSymbols:f}=N(i),[b,w]=n.useState(null),[C,S]=n.useMemo((()=>{var e;if(null!==d&&null!==h){const t=[];let o=b;if(null===o)for(o=2;o>0&&!(((null===(e=h[o].get(d))||void 0===e?void 0:e.size)||0)>0);)o--;return h[o].forEach(((e,o)=>{f.includes(o)||t.push({symbol:o,drawingsCount:e.size,onRemove:()=>function(e){m(e,S)}(o),onClick:()=>function(e){""!==e&&(g(e),null==c||c())}(o)})})),t.sort(((e,t)=>e.drawingsCount===t.drawingsCount?e.symbol.localeCompare(t.symbol):e.drawingsCount>t.drawingsCount?-1:1)),[t,o]}return[[],0]}),[d,b,h,f]);return n.useEffect((()=>{null!==h&&(null==u||u())}),[h]),n.createElement(n.Fragment,null,n.createElement("div",{className:s()(T.container,(r||t)&&T.mobile)},n.createElement(E,{sharingMode:S,onTabClick:w})),0===C.length?null===h?n.createElement(p.Spinner,{className:T.spinner}):n.createElement("div",{className:T.empty},n.createElement(a.Icon,{className:T.image,icon:y}),n.createElement("span",null,k)):C.map((({symbol:e,drawingsCount:r,onRemove:i,onClick:s})=>{return n.createElement(v.DialogContentItem,{key:e,title:e,subtitle:(a=r,l.t(null,{plural:"{drawingsCount} drawings",count:a},o(290755)).format({drawingsCount:a.toString()})),removeBtnLabel:D,isActive:e===d,isMobile:t,onClick:s,onClickRemove:i,showFavorite:!1,className:T.item});var a})))}},134388:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ObjectTreeDialogRenderer:()=>k});var n=o(50959),r=o(112295),i=o(609838),s=o(497754),a=o(813550),l=o(252130),c=o(759339),u=o(163694),d=o(930052),h=o(533408),v=o(996038),m=o(650075),p=(o(344955),o(993321)),g=o(420779),f=o(535842),b=o(511349),w=o(80465),E=o(690684);function y(e){const{viewModel:t,onClose:r,activeChartWidget:p}=e,[g,f]=(0,n.useState)(!1),[y,C]=(0,n.useState)(!1),[S,M]=(0,n.useState)(!1),O=(0,n.useRef)(null),D=(0,a.useForceUpdate)(),k=((0,l.useIsMounted)(),t.selection()),N=t.canSelectionBeGrouped();return(0,n.useEffect)((()=>{const e=window.matchMedia(v.DialogBreakpoints.TabletSmall);return e.addEventListener("change",_),()=>e.removeEventListener("change",_)}),[]),(0,n.useEffect)((()=>(k.onChange().subscribe(null,(()=>D())),()=>{k.onChange().unsubscribeAll(null)})),[k]),(0,n.useEffect)((()=>{const e=e=>M(e);return t.isContextMenuOpened().subscribe(e),()=>{t.isContextMenuOpened().unsubscribe(e)}}),[t]),n.createElement(n.Fragment,null,n.createElement(d.MatchMedia,{rule:v.DialogBreakpoints.TabletSmall},(e=>n.createElement(h.AdaptivePopupDialog,{additionalElementPos:"after",additionalHeaderElement:n.createElement("div",{className:E.buttons},n.createElement(b.ToolWidgetIconButton,{className:s(E.button,!N&&E.disabled),icon:w,onClick:B,isDisabled:!N,title:i.t(null,void 0,o(183390)),"data-name":"group-button"}),!1),className:E.dialog,dataName:"object-tree-dialog",isOpened:!0,onClickOutside:y||e||S?()=>{}:r,onClose:r,ref:O,render:()=>n.createElement(T,{isSmallTablet:e,viewModel:t}),title:i.t(null,void 0,o(888616)),showSeparator:!0
}))),n.createElement(u.DrawerManager,null,g&&n.createElement(c.Drawer,{onClose:R,position:"Bottom"},n.createElement(m.ManageDrawings,{onClose:R,chartWidget:p,isMobile:!0}))));function _(){g&&!window.matchMedia(v.DialogBreakpoints.TabletSmall).matches&&f(!1)}function R(){f(!1)}function B(){t.createGroupFromSelection()}}function T(e){const{isSmallTablet:t,viewModel:o}=e,r=(0,n.useMemo)((()=>({size:t?1:0,smallSizeTreeNodeAction:0})),[t]);return n.createElement(f.SizeContext.Provider,{value:r},n.createElement(p.ObjectTree,{nodeRenderer:g.NodeRenderer,showHeader:!1,viewModel:o,isDialog:!0}))}var C=o(33290),S=o(311804),M=o(69649),O=o(995553),D=o(651674);class k extends O.DialogRenderer{constructor(){super(),this._handleClose=()=>{var e;null===(e=this._rootInstance)||void 0===e||e.unmount(),this._setVisibility(!1),null!==this._viewModel&&(this._viewModel.destroy(),this._viewModel=null)};const e=(0,C.service)(S.CHART_WIDGET_COLLECTION_SERVICE);this._activeChartWidget=e.activeChartWidget.value(),this._viewModel=new M.ObjectTree(e.activeChartWidget)}hide(){this._handleClose()}isVisible(){return this.visible().value()}show(){this.isVisible()||(0,r.loadAllSourcesIcons)().then((()=>{null!==this._viewModel&&(this._rootInstance=(0,D.createReactRoot)(n.createElement(y,{onClose:this._handleClose,viewModel:this._viewModel,activeChartWidget:this._activeChartWidget}),this._container),this._setVisibility(!0))}))}}},522224:(e,t,o)=>{"use strict";o.d(t,{hoverMouseEventFilter:()=>n.hoverMouseEventFilter,useAccurateHover:()=>n.useAccurateHover,useHover:()=>n.useHover});var n=o(975228)},377145:(e,t,o)=>{"use strict";function n(e,t){return e===t}function r(e,t,o){if(null===t||null===o||t.length!==o.length)return!1;for(var n=t.length,r=0;r<n;r++)if(!e(t[r],o[r]))return!1;return!0}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var o=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+o+"]")}return t}o.d(t,{createSelector:()=>s});var s=function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=0,a=n.pop(),l=i(n),c=e.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat(o)),u=e((function(){for(var e=[],t=l.length,o=0;o<t;o++)e.push(l[o].apply(null,arguments));return c.apply(null,e)}));return u.resultFunc=a,u.dependencies=l,u.recomputations=function(){return s},u.resetRecomputations=function(){return s=0},u}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,o=null,i=null;return function(){return r(t,o,arguments)||(i=e.apply(null,arguments)),o=arguments,i}}))},194878:e=>{e.exports={button:"button-merBkM5y",hover:"hover-merBkM5y",clicked:"clicked-merBkM5y",accessible:"accessible-merBkM5y",arrow:"arrow-merBkM5y",arrowWrap:"arrowWrap-merBkM5y",isOpened:"isOpened-merBkM5y"}},162458:(e,t,o)=>{"use strict";o.d(t,{
HorizontalAttachEdge:()=>r,HorizontalDropDirection:()=>s,VerticalAttachEdge:()=>n,VerticalDropDirection:()=>i,getPopupPositioner:()=>c});var n,r,i,s,a=o(650151);!function(e){e[e.Top=0]="Top",e[e.Bottom=1]="Bottom",e[e.AutoStrict=2]="AutoStrict"}(n||(n={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.FromTopToBottom=0]="FromTopToBottom",e[e.FromBottomToTop=1]="FromBottomToTop"}(i||(i={})),function(e){e[e.FromLeftToRight=0]="FromLeftToRight",e[e.FromRightToLeft=1]="FromRightToLeft"}(s||(s={}));const l={verticalAttachEdge:n.Bottom,horizontalAttachEdge:r.Left,verticalDropDirection:i.FromTopToBottom,horizontalDropDirection:s.FromLeftToRight,verticalMargin:0,horizontalMargin:0,matchButtonAndListboxWidths:!1};function c(e,t){return o=>{var c,u;const{contentWidth:d,contentHeight:h,availableHeight:v}=o,m=(0,a.ensureNotNull)(e).getBoundingClientRect(),{horizontalAttachEdge:p=l.horizontalAttachEdge,horizontalDropDirection:g=l.horizontalDropDirection,horizontalMargin:f=l.horizontalMargin,verticalMargin:b=l.verticalMargin,matchButtonAndListboxWidths:w=l.matchButtonAndListboxWidths}=t;let E=null!==(c=t.verticalAttachEdge)&&void 0!==c?c:l.verticalAttachEdge,y=null!==(u=t.verticalDropDirection)&&void 0!==u?u:l.verticalDropDirection;E===n.AutoStrict&&(v<m.y+m.height+b+h?(E=n.Top,y=i.FromBottomToTop):(E=n.Bottom,y=i.FromTopToBottom));const T=E===n.Top?-1*b:b,C=p===r.Right?m.right:m.left,S=E===n.Top?m.top:m.bottom,M={x:C-(g===s.FromRightToLeft?d:0)+f,y:S-(y===i.FromBottomToTop?h:0)+T};return w&&(M.overrideWidth=m.width),M}}},679458:(e,t,o)=>{"use strict";o.d(t,{DEFAULT_TOOL_WIDGET_MENU_THEME:()=>g,ToolWidgetMenu:()=>b});var n=o(50959),r=o(497754),i=o(930202),s=o(624216),a=o(515783),l=o(800417),c=o(163694),u=o(759339),d=o(162458),h=o(930052),v=o(440891),m=o(111706),p=o(194878);const g=p;var f;!function(e){e[e.Vertical=2]="Vertical",e[e.Horizontal=0]="Horizontal"}(f||(f={}));class b extends n.PureComponent{constructor(e){super(e),this._wrapperRef=null,this._controller=n.createRef(),this._onPopupCloseOnClick=e=>{"keyboard"===e.detail.clickType&&this.focus()},this._handleMenuFocus=e=>{var t,o;e.relatedTarget===this._wrapperRef&&this.setState((e=>({...e,isOpenedByButton:!0}))),null===(o=(t=this.props).onMenuFocus)||void 0===o||o.call(t,e)},this._handleWrapperRef=e=>{this._wrapperRef=e,this.props.reference&&this.props.reference(e)},this._handleOpen=()=>{var e,t,o;"div"!==this.props.tag&&(this.setState((e=>({...e,isOpenedByButton:!1}))),null===(t=null===(e=this.props.menuReference)||void 0===e?void 0:e.current)||void 0===t||t.addEventListener("popup-menu-close-event",this._onPopupCloseOnClick),null===(o=this._controller.current)||void 0===o||o.focus())},this._handleClick=e=>{(v.enabled("skip_event_target_check")||e.target instanceof Node)&&e.currentTarget.contains(e.target)&&(this._handleToggleDropdown(void 0,(0,m.isKeyboardClick)(e)),this.props.onClick&&this.props.onClick(e,!this.state.isOpened))},this._handleToggleDropdown=(e,t=!1)=>{
const{onClose:o,onOpen:n}=this.props,{isOpened:r}=this.state,i="boolean"==typeof e?e:!r;this.setState({isOpened:i,shouldReturnFocus:!!i&&t}),i&&n&&n(),!i&&o&&o()},this._handleClose=()=>{this.close()},this._handleKeyDown=e=>{var t;const{orientation:o="horizontal"}=this.props;if(e.defaultPrevented)return;if(!(e.target instanceof Node))return;const n=(0,i.hashFromEvent)(e);if(e.currentTarget.contains(e.target))switch(n){case 40:if("div"===this.props.tag||"horizontal"!==o)return;if(this.state.isOpened)return;e.preventDefault(),this._handleToggleDropdown(!0,!0);break;case 27:if(!this.state.isOpened||!this.props.closeOnEsc)return;e.preventDefault(),e.stopPropagation(),this._handleToggleDropdown(!1)}else{if("div"===this.props.tag)return;switch(n){case 27:{e.preventDefault();const{shouldReturnFocus:o,isOpenedByButton:n}=this.state;this._handleToggleDropdown(!1),o&&n&&(null===(t=this._wrapperRef)||void 0===t||t.focus());break}}}},this.state={isOpened:!1,shouldReturnFocus:!1,isOpenedByButton:!1}}render(){const{tag:e="div",id:t,arrow:o,content:i,isDisabled:s,isDrawer:c,isShowTooltip:u,title:d,className:v,hotKey:m,theme:p,drawerBreakpoint:g,tabIndex:f,isClicked:b}=this.props,{isOpened:E}=this.state,y=r(v,p.button,{"apply-common-tooltip":u||!s,[p.isDisabled]:s,[p.isOpened]:E,[p.clicked]:b}),T=w(i)?i({isOpened:E}):i;return"button"===e?n.createElement("button",{type:"button",id:t,className:r(y,p.accessible),disabled:s,onClick:this._handleClick,title:d,"data-tooltip-hotkey":m,ref:this._handleWrapperRef,onKeyDown:this._handleKeyDown,tabIndex:f,...(0,l.filterDataProps)(this.props),...(0,l.filterAriaProps)(this.props)},T,o&&n.createElement("div",{className:p.arrow},n.createElement("div",{className:p.arrowWrap},n.createElement(a.ToolWidgetCaret,{dropped:E}))),this.state.isOpened&&(g?n.createElement(h.MatchMedia,{rule:g},(e=>this._renderContent(e))):this._renderContent(c))):n.createElement("div",{id:t,className:y,onClick:s?void 0:this._handleClick,title:d,"data-tooltip-hotkey":m,ref:this._handleWrapperRef,"data-role":"button",tabIndex:f,onKeyDown:this._handleKeyDown,...(0,l.filterDataProps)(this.props)},T,o&&n.createElement("div",{className:p.arrow},n.createElement("div",{className:p.arrowWrap},n.createElement(a.ToolWidgetCaret,{dropped:E}))),this.state.isOpened&&this._renderContent(c))}close(){var e,t;null===(t=null===(e=this.props.menuReference)||void 0===e?void 0:e.current)||void 0===t||t.removeEventListener("popup-menu-close-event",this._onPopupCloseOnClick),this._handleToggleDropdown(!1)}focus(){var e;null===(e=this._wrapperRef)||void 0===e||e.focus()}update(){null!==this._controller.current&&this._controller.current.update()}_renderContent(e){const{menuDataName:t,minWidth:o,menuClassName:r,maxHeight:i,drawerPosition:a="Bottom",children:l}=this.props,{isOpened:h}=this.state,v={horizontalMargin:this.props.horizontalMargin||0,verticalMargin:this.props.verticalMargin||2,verticalAttachEdge:this.props.verticalAttachEdge,horizontalAttachEdge:this.props.horizontalAttachEdge,verticalDropDirection:this.props.verticalDropDirection,
horizontalDropDirection:this.props.horizontalDropDirection,matchButtonAndListboxWidths:this.props.matchButtonAndListboxWidths},m=Boolean(h&&e&&a),p=w(l)?l({isDrawer:m}):l;return m?n.createElement(c.DrawerManager,null,n.createElement(u.Drawer,{reference:this.props.drawerReference,onClose:this._handleClose,position:a,"data-name":t},p)):n.createElement(s.PopupMenu,{reference:this.props.menuReference,controller:this._controller,closeOnClickOutside:this.props.closeOnClickOutside,doNotCloseOn:this,isOpened:h,minWidth:o,onClose:this._handleClose,position:(0,d.getPopupPositioner)(this._wrapperRef,v),className:r,maxHeight:i,"data-name":t,tabIndex:"div"!==this.props.tag?-1:void 0,onOpen:this._handleOpen,onKeyDown:this.props.onMenuKeyDown,onFocus:this._handleMenuFocus},p)}}function w(e){return"function"==typeof e}b.defaultProps={arrow:!0,closeOnClickOutside:!0,theme:p}},602069:(e,t,o)=>{"use strict";o.d(t,{Toolbar:()=>d});var n=o(50959),r=o(650151),i=o(269842),s=o(930202),a=o(442092),l=o(333086),c=o(718736),u=o(74336);const d=(0,n.forwardRef)((function(e,t){const{onKeyDown:o,orientation:d,blurOnEscKeydown:h=!0,blurOnClick:v=!0,...m}=e,p=(0,c.useFunctionalRefObject)(t);return(0,n.useLayoutEffect)((()=>{const e=(0,r.ensureNotNull)(p.current),t=()=>{const t=(0,a.queryTabbableElements)(e).sort(a.navigationOrderComparator);if(0===t.length){const[t]=(0,a.queryFocusableElements)(e).sort(a.navigationOrderComparator);if(void 0===t)return;(0,l.becomeMainElement)(t)}if(t.length>1){const[,...e]=t;for(const t of e)(0,l.becomeSecondaryElement)(t)}};return window.addEventListener("keyboard-navigation-activation",t),()=>window.removeEventListener("keyboard-navigation-activation",t)}),[]),n.createElement("div",{...u.MouseClickAutoBlurHandler.attributes(v),...m,role:"toolbar","aria-orientation":d,ref:p,onKeyDown:(0,i.createSafeMulticastEventHandler)((function(e){if(e.defaultPrevented)return;if(!(document.activeElement instanceof HTMLElement))return;const t=(0,s.hashFromEvent)(e);if(h&&27===t)return e.preventDefault(),void document.activeElement.blur();if("vertical"!==d&&37!==t&&39!==t)return;if("vertical"===d&&38!==t&&40!==t)return;const o=e.currentTarget,n=(0,a.queryFocusableElements)(o).sort(a.navigationOrderComparator);if(0===n.length)return;const r=n.indexOf(document.activeElement);if(-1===r)return;e.preventDefault();const i=()=>{const e=(r+n.length-1)%n.length;(0,l.becomeSecondaryElement)(n[r]),(0,l.becomeMainElement)(n[e]),n[e].focus()},c=()=>{const e=(r+n.length+1)%n.length;(0,l.becomeSecondaryElement)(n[r]),(0,l.becomeMainElement)(n[e]),n[e].focus()};switch((0,a.mapKeyCodeToDirection)(t)){case"inlinePrev":"vertical"!==d&&i();break;case"inlineNext":"vertical"!==d&&c();break;case"blockPrev":"vertical"===d&&i();break;case"blockNext":"vertical"===d&&c()}}),o)})}))},112295:(e,t,o)=>{"use strict";async function n(e,t,o){let n;for(let r=0;r<t;++r)try{return await e(n)}catch(e){n=e,await o(r)}throw n}async function r(e,t){return n(e,t,(()=>Promise.resolve()))}o.d(t,{getAllSourcesIcons:()=>d,loadAllSourcesIcons:()=>u});const i=(0,
o(937778).getLogger)("DataSourcesIcons");let s=null;function a(){const e=o.c[89935];return e?Promise.resolve(e.exports.lineToolsIcons):o.e(1890).then(o.bind(o,89935)).then((e=>e.lineToolsIcons))}function l(){const e=o.c[50296];return e?Promise.resolve(e.exports.SERIES_ICONS):o.e(9685).then(o.bind(o,50296)).then((e=>e.SERIES_ICONS))}let c=null;function u(){return null===c&&(c=function(){const e=r(a,2).then((e=>e)).catch((e=>(i.logWarn(e),{}))),t=r(l,2).then((e=>e)).catch((e=>(i.logWarn(e),{})));return Promise.all([e,t])}()),c.then((e=>(s={linetool:e[0],series:e[1]},s)))}function d(){return s}},229540:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="72" height="72"><path fill="currentColor" d="M15 24a21 21 0 1 1 42 0v7.41l8.97 5.01 1.08.6-.82.94-7.77 8.82 2.34 2.53-1.47 1.36L57 48.15V69H46v-7h-6v5h-9V56h-6v13H15V48.15l-2.33 2.52-1.47-1.36 2.35-2.53-7.78-8.82-.82-.93 1.08-.6L15 31.4V24Zm0 9.7-6.9 3.87L15 45.4V33.7Zm42 11.7 6.91-7.83-6.9-3.87v11.7ZM36 5a19 19 0 0 0-19 19v43h6V54h10v11h5v-5h10v7h7V24A19 19 0 0 0 36 5Zm-5 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM42.5 26a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/></svg>'},207809:(e,t,o)=>{"use strict";o.d(t,{TouchBackend:()=>m});var n,r=o(6346);!function(e){e.mouse="mouse",e.touch="touch",e.keyboard="keyboard"}(n||(n={}));class i{get delay(){var e;return null!==(e=this.args.delay)&&void 0!==e?e:0}get scrollAngleRanges(){return this.args.scrollAngleRanges}get getDropTargetElementsAtPoint(){return this.args.getDropTargetElementsAtPoint}get ignoreContextMenu(){var e;return null!==(e=this.args.ignoreContextMenu)&&void 0!==e&&e}get enableHoverOutsideTarget(){var e;return null!==(e=this.args.enableHoverOutsideTarget)&&void 0!==e&&e}get enableKeyboardEvents(){var e;return null!==(e=this.args.enableKeyboardEvents)&&void 0!==e&&e}get enableMouseEvents(){var e;return null!==(e=this.args.enableMouseEvents)&&void 0!==e&&e}get enableTouchEvents(){var e;return null===(e=this.args.enableTouchEvents)||void 0===e||e}get touchSlop(){return this.args.touchSlop||0}get delayTouchStart(){var e,t,o,n;return null!==(n=null!==(o=null===(e=this.args)||void 0===e?void 0:e.delayTouchStart)&&void 0!==o?o:null===(t=this.args)||void 0===t?void 0:t.delay)&&void 0!==n?n:0}get delayMouseStart(){var e,t,o,n;return null!==(n=null!==(o=null===(e=this.args)||void 0===e?void 0:e.delayMouseStart)&&void 0!==o?o:null===(t=this.args)||void 0===t?void 0:t.delay)&&void 0!==n?n:0}get window(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0}get document(){var e;return(null===(e=this.context)||void 0===e?void 0:e.document)?this.context.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.args)||void 0===e?void 0:e.rootElement)||this.document}constructor(e,t){this.args=e,this.context=t}}const s=1,a=0;function l(e){return void 0===e.button||e.button===a}function c(e){return!!e.targetTouches}function u(e,t){return c(e)?function(e,t){
return 1===e.targetTouches.length?u(e.targetTouches[0]):t&&1===e.touches.length&&e.touches[0].target===t.target?u(e.touches[0]):void 0}(e,t):{x:e.clientX,y:e.clientY}}const d=(()=>{let e=!1;try{addEventListener("test",(()=>{}),Object.defineProperty({},"passive",{get:()=>(e=!0,!0)}))}catch(e){}return e})(),h={[n.mouse]:{start:"mousedown",move:"mousemove",end:"mouseup",contextmenu:"contextmenu"},[n.touch]:{start:"touchstart",move:"touchmove",end:"touchend"},[n.keyboard]:{keydown:"keydown"}};class v{profile(){var e;return{sourceNodes:this.sourceNodes.size,sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,targetNodes:this.targetNodes.size,dragOverTargetIds:(null===(e=this.dragOverTargetIds)||void 0===e?void 0:e.length)||0}}get document(){return this.options.document}setup(){const e=this.options.rootElement;e&&((0,r.invariant)(!v.isSetUp,"Cannot have two Touch backends at the same time."),v.isSetUp=!0,this.addEventListener(e,"start",this.getTopMoveStartHandler()),this.addEventListener(e,"start",this.handleTopMoveStartCapture,!0),this.addEventListener(e,"move",this.handleTopMove),this.addEventListener(e,"move",this.handleTopMoveCapture,!0),this.addEventListener(e,"end",this.handleTopMoveEndCapture,!0),this.options.enableMouseEvents&&!this.options.ignoreContextMenu&&this.addEventListener(e,"contextmenu",this.handleTopMoveEndCapture),this.options.enableKeyboardEvents&&this.addEventListener(e,"keydown",this.handleCancelOnEscape,!0))}teardown(){const e=this.options.rootElement;e&&(v.isSetUp=!1,this._mouseClientOffset={},this.removeEventListener(e,"start",this.handleTopMoveStartCapture,!0),this.removeEventListener(e,"start",this.handleTopMoveStart),this.removeEventListener(e,"move",this.handleTopMoveCapture,!0),this.removeEventListener(e,"move",this.handleTopMove),this.removeEventListener(e,"end",this.handleTopMoveEndCapture,!0),this.options.enableMouseEvents&&!this.options.ignoreContextMenu&&this.removeEventListener(e,"contextmenu",this.handleTopMoveEndCapture),this.options.enableKeyboardEvents&&this.removeEventListener(e,"keydown",this.handleCancelOnEscape,!0),this.uninstallSourceNodeRemovalObserver())}addEventListener(e,t,o,n=!1){const r=d?{capture:n,passive:!1}:n;this.listenerTypes.forEach((function(n){const i=h[n][t];i&&e.addEventListener(i,o,r)}))}removeEventListener(e,t,o,n=!1){const r=d?{capture:n,passive:!1}:n;this.listenerTypes.forEach((function(n){const i=h[n][t];i&&e.removeEventListener(i,o,r)}))}connectDragSource(e,t){const o=this.handleMoveStart.bind(this,e);return this.sourceNodes.set(e,t),this.addEventListener(t,"start",o),()=>{this.sourceNodes.delete(e),this.removeEventListener(t,"start",o)}}connectDragPreview(e,t,o){return this.sourcePreviewNodeOptions.set(e,o),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDropTarget(e,t){const o=this.options.rootElement;if(!this.document||!o)return()=>{};const n=n=>{if(!this.document||!o||!this.monitor.isDragging())return;let r;switch(n.type){
case h.mouse.move:r={x:n.clientX,y:n.clientY};break;case h.touch.move:var i,s;r={x:(null===(i=n.touches[0])||void 0===i?void 0:i.clientX)||0,y:(null===(s=n.touches[0])||void 0===s?void 0:s.clientY)||0}}const a=null!=r?this.document.elementFromPoint(r.x,r.y):void 0,l=a&&t.contains(a);return a===t||l?this.handleMove(n,e):void 0};return this.addEventListener(this.document.body,"move",n),this.targetNodes.set(e,t),()=>{this.document&&(this.targetNodes.delete(e),this.removeEventListener(this.document.body,"move",n))}}getTopMoveStartHandler(){return this.options.delayTouchStart||this.options.delayMouseStart?this.handleTopMoveStartDelay:this.handleTopMoveStart}installSourceNodeRemovalObserver(e){this.uninstallSourceNodeRemovalObserver(),this.draggedSourceNode=e,this.draggedSourceNodeRemovalObserver=new MutationObserver((()=>{e&&!e.parentElement&&(this.resurrectSourceNode(),this.uninstallSourceNodeRemovalObserver())})),e&&e.parentElement&&this.draggedSourceNodeRemovalObserver.observe(e.parentElement,{childList:!0})}resurrectSourceNode(){this.document&&this.draggedSourceNode&&(this.draggedSourceNode.style.display="none",this.draggedSourceNode.removeAttribute("data-reactid"),this.document.body.appendChild(this.draggedSourceNode))}uninstallSourceNodeRemovalObserver(){this.draggedSourceNodeRemovalObserver&&this.draggedSourceNodeRemovalObserver.disconnect(),this.draggedSourceNodeRemovalObserver=void 0,this.draggedSourceNode=void 0}constructor(e,t,o){this.getSourceClientOffset=e=>{const t=this.sourceNodes.get(e);return t&&function(e){const t=1===e.nodeType?e:e.parentElement;if(!t)return;const{top:o,left:n}=t.getBoundingClientRect();return{x:n,y:o}}(t)},this.handleTopMoveStartCapture=e=>{l(e)&&(this.moveStartSourceIds=[])},this.handleMoveStart=e=>{Array.isArray(this.moveStartSourceIds)&&this.moveStartSourceIds.unshift(e)},this.handleTopMoveStart=e=>{if(!l(e))return;const t=u(e);t&&(c(e)&&(this.lastTargetTouchFallback=e.targetTouches[0]),this._mouseClientOffset=t),this.waitingForDelay=!1},this.handleTopMoveStartDelay=e=>{if(!l(e))return;const t=e.type===h.touch.start?this.options.delayTouchStart:this.options.delayMouseStart;this.timeout=setTimeout(this.handleTopMoveStart.bind(this,e),t),this.waitingForDelay=!0},this.handleTopMoveCapture=()=>{this.dragOverTargetIds=[]},this.handleMove=(e,t)=>{this.dragOverTargetIds&&this.dragOverTargetIds.unshift(t)},this.handleTopMove=e=>{if(this.timeout&&clearTimeout(this.timeout),!this.document||this.waitingForDelay)return;const{moveStartSourceIds:t,dragOverTargetIds:o}=this,n=this.options.enableHoverOutsideTarget,r=u(e,this.lastTargetTouchFallback);if(!r)return;if(this._isScrolling||!this.monitor.isDragging()&&function(e,t,o,n,r){if(!r)return!1;const i=180*Math.atan2(n-t,o-e)/Math.PI+180;for(let e=0;e<r.length;++e){const t=r[e];if(t&&(null==t.start||i>=t.start)&&(null==t.end||i<=t.end))return!0}return!1}(this._mouseClientOffset.x||0,this._mouseClientOffset.y||0,r.x,r.y,this.options.scrollAngleRanges))return void(this._isScrolling=!0);var i,s,a,l
;if(!this.monitor.isDragging()&&this._mouseClientOffset.hasOwnProperty("x")&&t&&(i=this._mouseClientOffset.x||0,s=this._mouseClientOffset.y||0,a=r.x,l=r.y,Math.sqrt(Math.pow(Math.abs(a-i),2)+Math.pow(Math.abs(l-s),2))>(this.options.touchSlop?this.options.touchSlop:0))&&(this.moveStartSourceIds=void 0,this.actions.beginDrag(t,{clientOffset:this._mouseClientOffset,getSourceClientOffset:this.getSourceClientOffset,publishSource:!1})),!this.monitor.isDragging())return;const c=this.sourceNodes.get(this.monitor.getSourceId());this.installSourceNodeRemovalObserver(c),this.actions.publishDragSource(),e.cancelable&&e.preventDefault();const d=(o||[]).map((e=>this.targetNodes.get(e))).filter((e=>!!e)),h=this.options.getDropTargetElementsAtPoint?this.options.getDropTargetElementsAtPoint(r.x,r.y,d):this.document.elementsFromPoint(r.x,r.y),v=[];for(const e in h){if(!h.hasOwnProperty(e))continue;let t=h[e];for(null!=t&&v.push(t);t;)t=t.parentElement,t&&-1===v.indexOf(t)&&v.push(t)}const m=v.filter((e=>d.indexOf(e)>-1)).map((e=>this._getDropTargetId(e))).filter((e=>!!e)).filter(((e,t,o)=>o.indexOf(e)===t));if(n)for(const e in this.targetNodes){const t=this.targetNodes.get(e);if(c&&t&&t.contains(c)&&-1===m.indexOf(e)){m.unshift(e);break}}m.reverse(),this.actions.hover(m,{clientOffset:r})},this._getDropTargetId=e=>{const t=this.targetNodes.keys();let o=t.next();for(;!1===o.done;){const n=o.value;if(e===this.targetNodes.get(n))return n;o=t.next()}},this.handleTopMoveEndCapture=e=>{this._isScrolling=!1,this.lastTargetTouchFallback=void 0,function(e){return void 0===e.buttons||0==(e.buttons&s)}(e)&&(this.monitor.isDragging()&&!this.monitor.didDrop()?(e.cancelable&&e.preventDefault(),this._mouseClientOffset={},this.uninstallSourceNodeRemovalObserver(),this.actions.drop(),this.actions.endDrag()):this.moveStartSourceIds=void 0)},this.handleCancelOnEscape=e=>{"Escape"===e.key&&this.monitor.isDragging()&&(this._mouseClientOffset={},this.uninstallSourceNodeRemovalObserver(),this.actions.endDrag())},this.options=new i(o,t),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.sourceNodes=new Map,this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.targetNodes=new Map,this.listenerTypes=[],this._mouseClientOffset={},this._isScrolling=!1,this.options.enableMouseEvents&&this.listenerTypes.push(n.mouse),this.options.enableTouchEvents&&this.listenerTypes.push(n.touch),this.options.enableKeyboardEvents&&this.listenerTypes.push(n.keyboard)}}const m=function(e,t={},o={}){return new v(e,t,o)}},365982:(e,t,o)=>{"use strict";o.d(t,{useDragLayer:()=>s});var n=o(50959),r=o(971690),i=o(868788);function s(e){const t=(0,i.useDragDropManager)().getMonitor(),[o,s]=(0,r.useCollector)(t,e);return(0,n.useEffect)((()=>t.subscribeToOffsetChange(s))),(0,n.useEffect)((()=>t.subscribeToStateChange(s))),o}}}]);