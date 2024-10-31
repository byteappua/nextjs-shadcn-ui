"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[7539],{633149:(e,s,t)=>{t.r(s),t.d(s,{Sessions:()=>g});var i=t(650151),r=t(762293),a=t(197066),o=t(949652),n=t(172912),h=t(568007),l=t(851068),d=t(114658),u=t(440891),c=t(162172),p=t(352020),_=t(934135),b=t(676725);const S=new n.PriceFormatter,y="sessions";class g extends d.CustomSourceBase{constructor(e,s,t){super(e,s),this._studySource=null,this._paneViews=[],this._metaInfo=null,this._destroyed=!1,this._isStarted=!1,this._loadedGraphics=null,this._doubleClickHandler=t,this._properties=new h.DefaultProperty({defaultName:"sessions"}),(0,l.applyDefaultsOverrides)(this._properties.childs().graphics,void 0,!1,y),this._removeDuplicateProperties(),this._properties.subscribe(this,this._onPropertiesChanged),this._requestAndProcessMetaInfo(),s.timeScale().onReset().subscribe(this,this._clearData),s.timeScale().logicalRangeChanged().subscribe(this,this.updateAllViews.bind(this,(0,_.viewportChangeEvent)())),s.mainSeries().sessionIdProxyProperty().subscribe(this,this._updateVisibleOfPreAndPostMarketBackground),s.mainSeries().properties().childs().interval.subscribe(this,this._processHibernate),this._updateVisibleOfPreAndPostMarketBackground(s.mainSeries().properties().childs().sessionId)}applyOverrides(e){(0,l.applyPropertiesOverrides)(this._properties.childs().graphics,void 0,!1,e,y),this._model.updateSource(this)}start(){this._isStarted=!0,this._processHibernate()}restart(){this._clearData(),u.enabled("stop_study_on_restart")&&this.stop(),this.start()}isStarted(){return this._isStarted}stop(){this._isStarted=!1,null!==this._studySource&&this._studySource.stop()}isHoveredEnabled(){return!1}paneViews(e){return this._paneViews}updateAllViews(e){this._paneViews.forEach((s=>s.update(e)))}updateViewsForPane(e,s){this.updateAllViews(s)}destroy(){this._destroyed=!0,null!==this._studySource&&(this._studySource.dataCleared().unsubscribeAll(this),this._studySource.dataUpdated().unsubscribeAll(this),this._studySource.destroy(),this._studySource=null),this._model.timeScale().logicalRangeChanged().unsubscribeAll(this),this._model.timeScale().onReset().unsubscribeAll(this),this._model.mainSeries().sessionIdProxyProperty().unsubscribeAll(this),this._model.mainSeries().properties().childs().interval.unsubscribeAll(this),this._properties.unsubscribeAll(this)}series(){return this._model.mainSeries()}priceScale(){return this.series().priceScale()}graphics(){return this._loadedGraphics||(0,i.ensureNotNull)(this._studySource).graphics()}valueAt(e,s){return null}properties(){return this._properties}graphicsInfo(){return(0,i.ensureNotNull)(this._metaInfo).graphics}firstValue(e){return this._model.mainSeries().firstValue()}formatter(){return S}state(e){const s={properties:this._properties.state()};return e&&null!==this._metaInfo&&(s.data={graphics:(0,o.saveStudyGraphics)(this.graphics(),this._model.timeScale().visibleBarsStrictRange()),metaInfo:this._metaInfo.state()}),s}restoreState(e,s){e.oldState&&(e=function(e,s){const t={properties:{graphics:e.state.graphics}}
;return void 0!==e.data&&void 0!==e.metaInfo&&s&&(t.data={metaInfo:e.metaInfo,graphics:e.data.graphics}),t}(e,s));const t=e.properties;this._migrateOutOfSessionProperty(t),this._properties.mergeAndFire(t),this._removeDuplicateProperties(),this._updateVisibleOfPreAndPostMarketBackground(this._model.mainSeries().properties().childs().sessionId),void 0!==e.data&&s&&(this._loadStudyGraphics(e.data.graphics),this._setMetaInfo(new r.StudyMetaInfo(e.data.metaInfo)),this._createPaneViews())}metaInfo(){return(0,i.ensureNotNull)(this._metaInfo)}async _requestAndProcessMetaInfo(){if(this._model.isSnapshot())return;const e=await(0,b.studyMetaInfoRepository)().findById({type:"java",studyId:"Sessions@tv-basicstudies"});this._destroyed||null===this._loadedGraphics&&(this._setMetaInfo(e),null!==this._metaInfo&&(this._studySource=new a.StudyDataSource(this._model.chartApi(),this._model.mainSeries().seriesSource(),"sessions_",this._metaInfo),this._createPaneViews(),this._studySource.dataCleared().subscribe(this,this.updateAllViews.bind(this,(0,_.sourceChangeEvent)(this.id()))),this._studySource.dataUpdated().subscribe(this,this.updateAllViews.bind(this,(0,_.sourceChangeEvent)(this.id()))),this._studySource.setInputs({}),this._processHibernate()))}_loadStudyGraphics(e){const s=e.backgrounds;if(void 0!==s){const e=s.findIndex((e=>"inSession"===e.styleId));-1!==e&&s.splice(e,1)}this._loadedGraphics=(0,o.loadStudyGraphics)(e)}_setMetaInfo(e){const s=e.graphics.backgrounds;void 0!==s&&void 0!==s.inSession&&delete s.inSession,this._metaInfo=e}_updateVisibleOfPreAndPostMarketBackground(e){const s=!(0,c.isRegularSessionId)(e.value());this._outOfSessionVisibilityProperty().setValue(s),this._preMarketVisibilityProperty().setValue(s),this._postMarketVisibilityProperty().setValue(s)}_clearData(){null!==this._studySource&&this._studySource.clearData()}_createPaneViews(){const e={doubleClickHandler:this._doubleClickHandler};(0,o.createGraphicsPaneViews)(this,this._model,e).then((e=>{this._paneViews=e.regularPaneViews,this._model.lightUpdate()}))}_onPropertiesChanged(){this._processHibernate(),this.updateAllViews((0,_.sourceChangeEvent)(this.id()))}_processHibernate(){if(null!==this._studySource){const e=this._canBeHibernated(),s=this._isHibernated(),t=this._studySource.isStarted();!s&&e&&t?this._studySource.stop():!s||e||t||this._studySource.start()}}_canBeHibernated(){const e=this._model.mainSeries(),s=this._preMarketVisibilityProperty().value()&&this._postMarketVisibilityProperty().value()&&this._outOfSessionVisibilityProperty().value();return e.isDWM()||!s&&!this._vertLinesVisibleProperty().value()}_isHibernated(){return this._isStarted&&(null===this._studySource||!this._studySource.isStarted())}_outOfSessionVisibilityProperty(){return this._properties.childs().graphics.childs().backgrounds.childs().outOfSession.childs().visible}_preMarketVisibilityProperty(){return this._properties.childs().graphics.childs().backgrounds.childs().preMarket.childs().visible}_postMarketVisibilityProperty(){
return this._properties.childs().graphics.childs().backgrounds.childs().postMarket.childs().visible}_vertLinesVisibleProperty(){return this._properties.childs().graphics.childs().vertlines.childs().sessBreaks.childs().visible}_removeDuplicateProperties(){this._properties.hasChild("properties")&&(this._properties.removeProperty("properties"),(0,h.allowSavingDefaults)(!0),this._properties.childChanged(null,""),(0,h.allowSavingDefaults)(!1))}_migrateOutOfSessionProperty(e){const s=e.graphics.backgrounds;if(void 0!==s){const t=s.outOfSession;t.color===(0,i.ensureDefined)(p.sessionsPreferencesDefault.graphics.backgrounds).outOfSession.color||"postMarket"in s||(e.graphics.backgrounds={...s,postMarket:{color:t.color,transparency:t.transparency},preMarket:{color:t.color,transparency:t.transparency}},"visible"in t&&(e.graphics.backgrounds.preMarket.visible=t.visible,e.graphics.backgrounds.postMarket.visible=t.visible))}}}}}]);