"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[6212,6898],{746212:(n,t,e)=>{e.d(t,{buffers:()=>i.I,default:()=>J,eventChannel:()=>x});var r=e(45807),c=e(315882),a=e(330950),o=e(617443),i=e(943705);function u(){var n={};return n.promise=new Promise((function(t,e){n.resolve=t,n.reject=e})),n}const f=u;var s=[],l=0;function v(n){try{p(),n()}finally{g()}}function d(n){s.push(n),l||(p(),y())}function h(n){try{return p(),n()}finally{y()}}function p(){l++}function g(){l--}function y(){var n;for(g();!l&&void 0!==(n=s.shift());)v(n)}var E=function(n){return function(t){return n.some((function(n){return b(n)(t)}))}},k=function(n){return function(t){return n(t)}},m=function(n){return function(t){return t.type===String(n)}},C=function(n){return function(t){return t.type===n}},A=function(){return i.k};function b(n){var t="*"===n?A:(0,o.string)(n)?m:(0,o.array)(n)?E:(0,o.stringableFunc)(n)?m:(0,o.func)(n)?k:(0,o.symbol)(n)?C:null;if(null===t)throw new Error("invalid pattern: "+n);return t(n)}var T={type:r.CHANNEL_END_TYPE},S=function(n){return n&&n.type===r.CHANNEL_END_TYPE};function j(n){void 0===n&&(n=(0,i.e)());var t=!1,e=[];return{take:function(r){t&&n.isEmpty()?r(T):n.isEmpty()?(e.push(r),r.cancel=function(){(0,i.r)(e,r)}):r(n.take())},put:function(r){if(!t){if(0===e.length)return n.put(r);e.shift()(r)}},flush:function(e){t&&n.isEmpty()?e(T):e(n.flush())},close:function(){if(!t){t=!0;var n=e;e=[];for(var r=0,c=n.length;r<c;r++){(0,n[r])(T)}}}}}function x(n,t){void 0===t&&(t=(0,i.n)());var e,r=!1,c=j(t),a=function(){r||(r=!0,(0,o.func)(e)&&e(),c.close())};return e=n((function(n){S(n)?a():c.put(n)})),e=(0,i.o)(e),r&&e(),{take:c.take,flush:c.flush,close:a}}function N(){var n,t,e,c,a,o,u=(t=!1,c=e=[],a=function(){c===e&&(c=e.slice())},o=function(){t=!0;var n=e=c;c=[],n.forEach((function(n){n(T)}))},(n={})[r.MULTICAST]=!0,n.put=function(n){if(!t)if(S(n))o();else for(var a=e=c,i=0,u=a.length;i<u;i++){var f=a[i];f[r.MATCH](n)&&(f.cancel(),f(n))}},n.take=function(n,e){void 0===e&&(e=A),t?n(T):(n[r.MATCH]=e,a(),c.push(n),n.cancel=(0,i.o)((function(){a(),(0,i.r)(c,n)})))},n.close=o,n),f=u.put;return u.put=function(n){n[r.SAGA_ACTION]?f(n):d((function(){f(n)}))},u}function R(n,t){var e=n[r.CANCEL];(0,o.func)(e)&&(t.cancel=e),n.then(t,(function(n){t(n,!0)}))}var M,w=0,L=function(){return++w};function O(n){n.isRunning()&&n.cancel()}var _=((M={})[i.T]=function(n,t,e){var c=t.channel,a=void 0===c?n.channel:c,i=t.pattern,u=t.maybe,f=function(n){n instanceof Error?e(n,!0):!S(n)||u?e(n):e(r.TERMINATE)};try{a.take(f,(0,o.notUndef)(i)?b(i):null)}catch(n){return void e(n,!0)}e.cancel=f.cancel},M[i.P]=function(n,t,e){var r=t.channel,c=t.action,a=t.resolve;d((function(){var t;try{t=(r?r.put:n.dispatch)(c)}catch(n){return void e(n,!0)}a&&(0,o.promise)(t)?R(t,e):e(t)}))},M[i.A]=function(n,t,e,r){var c=r.digestEffect,a=w,u=Object.keys(t);if(0!==u.length){var f=(0,i.l)(t,e);u.forEach((function(n){c(t[n],a,f[n],n)}))}else e((0,o.array)(t)?[]:{})},M[i.R]=function(n,t,e,r){
var c=r.digestEffect,a=w,u=Object.keys(t),f=(0,o.array)(t)?(0,i.m)(u.length):{},s={},l=!1;u.forEach((function(n){var t=function(t,r){l||(r||(0,i.s)(t)?(e.cancel(),e(t,r)):(e.cancel(),l=!0,f[n]=t,e(f)))};t.cancel=i.t,s[n]=t})),e.cancel=function(){l||(l=!0,u.forEach((function(n){return s[n].cancel()})))},u.forEach((function(n){l||c(t[n],a,s[n],n)}))},M[i.C]=function(n,t,e,r){var c=t.context,a=t.fn,u=t.args,f=r.task;try{var s=a.apply(c,u);if((0,o.promise)(s))return void R(s,e);if((0,o.iterator)(s))return void U(n,s,f.context,w,(0,i.j)(a),!1,e);e(s)}catch(n){e(n,!0)}},M[i.a]=function(n,t,e){var r=t.context,c=t.fn,a=t.args;try{var i=function(n,t){(0,o.undef)(n)?e(t):e(n,!0)};c.apply(r,a.concat(i)),i.cancel&&(e.cancel=i.cancel)}catch(n){e(n,!0)}},M[i.F]=function(n,t,e,r){var c=t.context,a=t.fn,u=t.args,f=t.detached,s=r.task,l=function(n){var t=n.context,e=n.fn,r=n.args;try{var c=e.apply(t,r);if((0,o.iterator)(c))return c;var a=!1;return(0,i.q)((function(n){return a?{value:n,done:!0}:(a=!0,{value:c,done:!(0,o.promise)(c)})}))}catch(n){return(0,i.q)((function(){throw n}))}}({context:c,fn:a,args:u}),v=function(n,t){return n.isSagaIterator?{name:n.meta.name}:(0,i.j)(t)}(l,a);h((function(){var t=U(n,l,s.context,w,v,f,void 0);f?e(t):t.isRunning()?(s.queue.addTask(t),e(t)):t.isAborted()?s.queue.abort(t.error()):e(t)}))},M[i.J]=function(n,t,e,r){var c=r.task,a=function(n,t){if(n.isRunning()){var e={task:c,cb:t};t.cancel=function(){n.isRunning()&&(0,i.r)(n.joiners,e)},n.joiners.push(e)}else n.isAborted()?t(n.error(),!0):t(n.result())};if((0,o.array)(t)){if(0===t.length)return void e([]);var u=(0,i.l)(t,e);t.forEach((function(n,t){a(n,u[t])}))}else a(t,e)},M[i.b]=function(n,t,e,c){var a=c.task;t===r.SELF_CANCELLATION?O(a):(0,o.array)(t)?t.forEach(O):O(t),e()},M[i.S]=function(n,t,e){var r=t.selector,c=t.args;try{e(r.apply(void 0,[n.getState()].concat(c)))}catch(n){e(n,!0)}},M[i.d]=function(n,t,e){var r=t.pattern,c=j(t.buffer),a=b(r),o=function t(e){S(e)||n.channel.take(t,a),c.put(e)},i=c.close;c.close=function(){o.cancel(),i()},n.channel.take(o,a),e(c)},M[i.f]=function(n,t,e,r){e(r.task.isCancelled())},M[i.g]=function(n,t,e){t.flush(e)},M[i.G]=function(n,t,e,r){e(r.task.context[t])},M[i.h]=function(n,t,e,r){var c=r.task;(0,i.p)(c.context,t),e()},M);function I(n,t){return n+"?"+t}function D(n){var t=n.name,e=n.location;return e?t+"  "+I(e.fileName,e.lineNumber):t}function K(n){var t=(0,i.u)((function(n){return n.cancelledTasks}),n);return t.length?["Tasks cancelled due to error:"].concat(t).join("\n"):""}var P=null,q=[],H=function(n){n.crashedEffect=P,q.push(n)},z=function(){P=null,q.length=0},F=function(){var n,t,e=q[0],r=q.slice(1),c=e.crashedEffect?(n=e.crashedEffect,(t=(0,i.v)(n))?t.code+"  "+I(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+D(e.meta)+(c?" \n when executing effect "+c:"")].concat(r.map((function(n){return"    created by "+D(n.meta)})),[K(q)]).join("\n")};function G(n,t,e,c,a,o,u){var s;void 0===u&&(u=i.t);var l,v,d=0,h=null,p=[],g=Object.create(e),y=function(n,t,e){var r,c=[],a=!1
;function o(n){t(),f(),e(n,!0)}function u(t){c.push(t),t.cont=function(u,f){a||((0,i.r)(c,t),t.cont=i.t,f?o(u):(t===n&&(r=u),c.length||(a=!0,e(r))))}}function f(){a||(a=!0,c.forEach((function(n){n.cont=i.t,n.cancel()})),c=[])}return u(n),{addTask:u,cancelAll:f,abort:o,getTasks:function(){return c}}}(t,(function(){p.push.apply(p,y.getTasks().map((function(n){return n.meta.name})))}),E);function E(t,e){if(e){if(d=2,H({meta:a,cancelledTasks:p}),k.isRoot){var c=F();z(),n.onError(t,{sagaStack:c})}v=t,h&&h.reject(t)}else t===r.TASK_CANCEL?d=1:1!==d&&(d=3),l=t,h&&h.resolve(t);k.cont(t,e),k.joiners.forEach((function(n){n.cb(t,e)})),k.joiners=null}var k=((s={})[r.TASK]=!0,s.id=c,s.meta=a,s.isRoot=o,s.context=g,s.joiners=[],s.queue=y,s.cancel=function(){0===d&&(d=1,y.cancelAll(),E(r.TASK_CANCEL,!1))},s.cont=u,s.end=E,s.setContext=function(n){(0,i.p)(g,n)},s.toPromise=function(){return h||(h=f(),2===d?h.reject(v):0!==d&&h.resolve(l)),h.promise},s.isRunning=function(){return 0===d},s.isCancelled=function(){return 1===d||0===d&&1===t.status},s.isAborted=function(){return 2===d},s.result=function(){return l},s.error=function(){return v},s);return k}function U(n,t,e,c,a,u,f){var s=n.finalizeRunEffect((function(t,e,c){if((0,o.promise)(t))R(t,c);else if((0,o.iterator)(t))U(n,t,v.context,e,a,!1,c);else if(t&&t[r.IO]){(0,_[t.type])(n,t.payload,c,d)}else c(t)}));h.cancel=i.t;var l={meta:a,cancel:function(){0===l.status&&(l.status=1,h(r.TASK_CANCEL))},status:0},v=G(n,l,e,c,a,u,f),d={task:v,digestEffect:p};return f&&(f.cancel=v.cancel),h(),v;function h(n,e){try{var a;e?(a=t.throw(n),z()):(0,i.y)(n)?(l.status=1,h.cancel(),a=(0,o.func)(t.return)?t.return(r.TASK_CANCEL):{done:!0,value:r.TASK_CANCEL}):a=(0,i.z)(n)?(0,o.func)(t.return)?t.return():{done:!0}:t.next(n),a.done?(1!==l.status&&(l.status=3),l.cont(a.value)):p(a.value,c,h)}catch(n){if(1===l.status)throw n;l.status=2,l.cont(n,!0)}}function p(t,e,r,c){void 0===c&&(c="");var a,o=L();function u(e,c){a||(a=!0,r.cancel=i.t,n.sagaMonitor&&(c?n.sagaMonitor.effectRejected(o,e):n.sagaMonitor.effectResolved(o,e)),c&&function(n){P=n}(t),r(e,c))}n.sagaMonitor&&n.sagaMonitor.effectTriggered({effectId:o,parentEffectId:e,label:c,effect:t}),u.cancel=i.t,r.cancel=function(){a||(a=!0,u.cancel(),u.cancel=i.t,n.sagaMonitor&&n.sagaMonitor.effectCancelled(o))},s(t,o,u)}}function Y(n,t){var e=n.channel,r=void 0===e?N():e,c=n.dispatch,a=n.getState,o=n.context,u=void 0===o?{}:o,f=n.sagaMonitor,s=n.effectMiddlewares,l=n.onError,v=void 0===l?i.D:l;for(var d=arguments.length,p=new Array(d>2?d-2:0),g=2;g<d;g++)p[g-2]=arguments[g];var y=t.apply(void 0,p);var E,k=L();if(f&&(f.rootSagaStarted=f.rootSagaStarted||i.t,f.effectTriggered=f.effectTriggered||i.t,f.effectResolved=f.effectResolved||i.t,f.effectRejected=f.effectRejected||i.t,f.effectCancelled=f.effectCancelled||i.t,f.actionDispatched=f.actionDispatched||i.t,f.rootSagaStarted({effectId:k,saga:t,args:p})),s){var m=i.B.apply(void 0,s);E=function(n){return function(t,e,r){return m((function(t){return n(t,e,r)}))(t)}}}else E=i.H;var C={channel:r,dispatch:(0,
i.E)(c),getState:a,sagaMonitor:f,onError:v,finalizeRunEffect:E};return h((function(){var n=U(C,y,u,k,(0,i.j)(t),!0,void 0);return f&&f.effectResolved(k,n),n}))}const B=function(n){var t,e=void 0===n?{}:n,r=e.context,o=void 0===r?{}:r,u=e.channel,f=void 0===u?N():u,s=e.sagaMonitor,l=(0,a.default)(e,["context","channel","sagaMonitor"]);function v(n){var e=n.getState,r=n.dispatch;return t=Y.bind(null,(0,c.default)({},l,{context:o,channel:f,dispatch:r,getState:e,sagaMonitor:s})),function(n){return function(t){s&&s.actionDispatched&&s.actionDispatched(t);var e=n(t);return f.put(t),e}}}return v.run=function(){return t.apply(void 0,arguments)},v.setContext=function(n){(0,i.p)(o,n)},v},J=B},315882:(n,t,e)=>{function r(){return r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},r.apply(this,arguments)}e.d(t,{default:()=>r})},330950:(n,t,e)=>{function r(n,t){if(null==n)return{};var e,r,c={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}e.d(t,{default:()=>r})}}]);