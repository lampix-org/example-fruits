(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.WatchersRemoved="lx/watchers-removed",e.WatchersAdded="lx/watchers-added",e.WatchersPaused="lx/watchers-paused",e.WatchersResumed="lx/watchers-resumed",e.WatcherUpdated="lx/watcher-updated",e.LampixInfo="lx/lampix-info",e.GetApps="lx/get-apps",e.TransformCoordinates="lx/transform-coordinates",e.AppConfig="lx/app-config",e.Classification="lx/classification",e.Location="lx/location",e.FileWritten="lx/file-written",e.FileRead="lx/file-read",e.SwitchToApp="lx/switch-to-app"}(i=t.LampixEvents||(t.LampixEvents={})),t.eventToCallbackMap=((r={})[i.WatchersAdded]="onWatchersAdded",r[i.WatchersRemoved]="onWatchersRemoved",r[i.WatchersPaused]="onWatchersPaused",r[i.WatchersResumed]="onWatchersResumed",r[i.WatcherUpdated]="onWatcherUpdated",r[i.Classification]="onClassification",r[i.Location]="onLocation",r[i.LampixInfo]="onLampixInfo",r[i.GetApps]="onGetApps",r[i.AppConfig]="onAppConfig",r[i.TransformCoordinates]="onTransformCoordinates",r[i.FileRead]="onFileRead",r[i.FileWritten]="onFileWritten",r[i.SwitchToApp]="onSwitchApp",r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=!1,i=[],o=setInterval(function(){console.log("Checking periodically for JS bindings..."),(r=!!window._lampix_internal)&&(console.log("Bindings received"),i.forEach(function(e){return e()}),i=null,clearInterval(o))},25);t.waitForAPI=function(){return new Promise(function(e){r&&e(),i.push(e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n(0),o=n(14),a={};t.listen=function(e,t){void 0===t&&(t=null);var n=i.eventToCallbackMap[e],u=o.request(n,t);a[e]=a[e]||{};var s=a[e][u.request_id]={},c=new Promise(function(e,t){s.resolve=e,s.reject=t}),l=r.publisher.subscribe(e,function(t){var n=t.request_id,r=t.error,i=t.data;u.request_id===n&&(r?s.reject(r):s.resolve(i),s=null,delete a[e][n])});return c.then(function(e){return l(),e}),c.catch(function(e){throw l(),e}),{promise:c,request:u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){!function(e){e.NNClassifier="NeuralNetworkClassifier",e.NNSegmenter="NeuralNetworkSegmenter",e.DepthClassifier="DepthClassifier"}(e.Names||(e.Names={})),function(e){!function(e){e.Polygon="polygon",e.Rectangle="rectangle"}(e.Type||(e.Type={}))}(e.Shape||(e.Shape={}))}(t.Watcher||(t.Watcher={})),function(e){e.Fingers="fingers"}(t.StandardNeuralNetworks||(t.StandardNeuralNetworks={}))},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(13)).default();t.publisher=i},function(e,t){e.exports=function(){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return("0"+e.toString(16)).substr(-2)};t.generateId=function(e){void 0===e&&(e=40);var t=new Uint8Array(e/2);return window.crypto.getRandomValues(t),Array.from(t,r).join("")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APP_SWITCHER_NAME="app-switcher",t.WINDOW_WIDTH=1280,t.WINDOW_HEIGHT=800},function(e,t,n){var r=n(30).Symbol;e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.rectangle=function(e,t,n,i){return{type:r.Watcher.Shape.Type.Rectangle,data:{width:n,height:i,posX:e,posY:t}}}},function(e,t,n){"use strict";var r=n(11);e.exports=new r.LampixBridge},function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),o=n(15),a=n(17),u=n(18),s=n(19),c=n(20),l=n(21),f=n(22),p=n(23),d=n(24),h=r(n(7)),v=n(9),m=n(41),_=n(42);p.bindEvents();var w=function(){this.constants=h,this.helpers={rectangle:v.rectangle,polygon:m.polygon},this.presets={button:_.button},this.getLampixInfo=i.getLampixInfo(),this.switchToApp=o.switchToApp(),this.exit=a.exit(),this.getApps=u.getApps(),this.getAppConfig=s.getAppConfig(),this.writeJsonToFile=c.writeJsonToFile(),this.readJsonFromFile=l.readJsonFromFile(),this.transformRectCoords=f.transformRectCoords(),this.watchers={add:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return d.watcherManager.addWatchers(e)},remove:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return d.watcherManager.removeWatchers(e)},pauseAll:function(){return d.watcherManager.pauseAllWatchers()},resumeAll:function(){return d.watcherManager.resumeAllWatchers()}}};t.LampixBridge=w;var b=n(3);t.Watcher=b.Watcher},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.getLampixInfo=function(){return function(){return r.waitForAPI().then(function(){var e=o.listen(i.LampixEvents.LampixInfo),t=e.promise,n=e.request;return window._lampix_internal.get_lampix_info(JSON.stringify(n)),t}).then(function(e){return e.info})}}},function(e,t,n){"use strict";var r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return void 0===e&&(e={}),{subscribe:function(t,n,r){void 0===r&&(r=n),Object.prototype.hasOwnProperty.call(e,t)||(e[t]={listeners:{},queue:[]});var i=(+new Date*Math.random()).toString(36).substring(0,8),o=n.bind(r);return e[t].listeners[i]=o,e[t].queue.push(i),function(){delete e[t].listeners[i],e[t].queue.splice(e[t].queue.indexOf(i),1)}},publish:function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(Object.prototype.hasOwnProperty.call(e,t)){var o=e[t];i(o.queue).forEach(function(e){if(o.listeners[e]){var t=o.listeners[e];t.apply(t,n)}})}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6);t.request=function(e,t){return{callback:e,data:t,request_id:r.generateId()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(16),o=n(2),a=n(0);t.switchToApp=function(){return function(e,t){return void 0===t&&(t={}),r.waitForAPI().then(function(){var n={};Object.keys(t).forEach(function(e){n[i.camelCaseToKebabCase(e)]=t[e]});var r=o.listen(a.LampixEvents.SwitchToApp,{name:e,params:n}),u=r.promise,s=r.request;return window._lampix_internal.switch_to_app(JSON.stringify(s)),u}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.camelCaseToKebabCase=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(7),o=n(2),a=n(0);t.exit=function(){return function(){return r.waitForAPI().then(function(){var e=new URLSearchParams(window.location.search).get("switch-back-to")||i.APP_SWITCHER_NAME,t=o.listen(a.LampixEvents.SwitchToApp,{name:e}),n=t.promise,r=t.request;return window._lampix_internal.switch_to_app(JSON.stringify(r)),n}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.getApps=function(){return function(){return r.waitForAPI().then(function(){var e=o.listen(i.LampixEvents.GetApps),t=e.promise,n=e.request;return window._lampix_internal.get_apps(JSON.stringify(n)),t}).then(function(e){return e.apps})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAppConfig=function(){return function(){return fetch("./config.json").then(function(e){return e.ok?e.text():null}).then(function(e){if(!e)return null;try{return JSON.parse(e)}catch(e){return null}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.writeJsonToFile=function(){return function(e,t){return r.waitForAPI().then(function(){var n=o.listen(i.LampixEvents.FileWritten,{filename:e,data:t}),r=n.promise,a=n.request;return window._lampix_internal.write_file(JSON.stringify(a)),r}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.readJsonFromFile=function(){return function(e){return r.waitForAPI().then(function(){var t=o.listen(i.LampixEvents.FileRead,{filename:e}),n=t.promise,r=t.request;return window._lampix_internal.read_file(JSON.stringify(r)),n}).then(function(e){return e.data})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.transformRectCoords=function(){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.waitForAPI().then(function(){var t=o.listen(i.LampixEvents.TransformCoordinates,{rectangles:e}),n=t.promise,r=t.request;return window._lampix_internal.transform_coordinates(JSON.stringify(r)),n}).then(function(e){return e.rectangles})}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(5)),o=n(4),a=n(0),u=function(){t.bindEvents=u=i.default,window.onObjectsClassified=function(e,t){o.publisher.publish(a.LampixEvents.Classification,{error:null,data:{watcher_id:e,objects:t}})},window.onObjectsLocated=function(e,t){o.publisher.publish(a.LampixEvents.Location,{error:null,data:{watcher_id:e,objects:t}})},window.onWatchersAdded=function(e){o.publisher.publish(a.LampixEvents.WatchersAdded,e)},window.onWatchersRemoved=function(e){o.publisher.publish(a.LampixEvents.WatchersRemoved,e)},window.onWatchersPaused=function(e){o.publisher.publish(a.LampixEvents.WatchersPaused,e)},window.onWatchersResumed=function(e){o.publisher.publish(a.LampixEvents.WatchersResumed,e)},window.onWatcherUpdated=function(e){o.publisher.publish(a.LampixEvents.WatcherUpdated,e)},window.onLampixInfo=function(e){o.publisher.publish(a.LampixEvents.LampixInfo,e)},window.onGetApps=function(e){o.publisher.publish(a.LampixEvents.GetApps,e)},window.onTransformCoordinates=function(e){o.publisher.publish(a.LampixEvents.TransformCoordinates,e)},window.onAppConfig=function(e){o.publisher.publish(a.LampixEvents.AppConfig,{error:null,data:{config:e}})},window.onFileWritten=function(e){o.publisher.publish(a.LampixEvents.FileWritten,e)},window.onFileRead=function(e){o.publisher.publish(a.LampixEvents.FileRead,e)}};t.bindEvents=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(25),i=n(36),o=n(37),a=n(38),u=n(39),s=n(40),c=n(0),l={};t.watcherManager=l,l.watchers={},l.pendingAddition={},l.pendingRemoval={},l.pendingPausing={},l.pendingResuming={},l.pendingUpdate={},l.addWatchers=r.addWatchersInitializer(l),l.removeWatchers=i.removeWatchersInitializer(l),l.pauseWatchers=o.pauseWatchersInitializer(),l.resumeWatchers=a.resumeWatchersInitializer(),l.updateWatcherShape=u.updateWatcherShapeInitializer();var f=function(){return Object.keys(l.watchers).map(function(e){return l.watchers[e]})};l.pauseAllWatchers=function(){return l.pauseWatchers(f())},l.resumeAllWatchers=function(){return l.resumeWatchers(f())},s.watcherActionHandler("onClassification",l,c.LampixEvents.Classification),s.watcherActionHandler("onLocation",l,c.LampixEvents.Location)},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(26),o=n(1),a=n(0),u=n(2),s=function(e){return r({id:e.state._id},e.source)};t.addWatchersInitializer=function(e){return function(t){var n=t.map(function(t){return i.createRegisteredWatcher(t,e)}),r=u.listen(a.LampixEvents.WatchersAdded,{watchers:n.map(s)}),c=r.promise,l=r.request;return c.then(function(){return n.forEach(function(t){return e.watchers[t.state._id]=t,t})}),o.waitForAPI().then(function(){return window._lampix_internal.add_watchers(JSON.stringify(l)),c}).then(function(){return n})}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(27)),o=r(n(28)),a=r(n(5)),u=n(3),s=n(6);t.createRegisteredWatcher=function(e,t){var n=Object.defineProperties({},{_id:{value:s.generateId(),writable:!1,configurable:!1},active:{value:!0,writable:!0,configurable:!1}}),r={state:n,source:e,onClassification:e.onClassification||a.default,onLocation:e.onLocation||a.default,resume:function(){return n.active?Promise.resolve():t.resumeWatchers([r])},pause:function(e){return void 0===e&&(e=0),i.default(o.default(e)&&e>=0,"pause() takes an optional positive number as milliseconds"),e>0&&setTimeout(r.resume,e),n.active?t.pauseWatchers([r]):Promise.resolve()},remove:function(){return t.removeWatchers([r]).then(function(){})},updateShape:function(e){return t.updateWatcherShape(n._id,e).then(function(){e.type===u.Watcher.Shape.Type.Rectangle&&(r.source.shape=e)})}};return r}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i,o,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,u],l=0;(s=new Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){var r=n(29),i=n(35);e.exports=function(e){return"number"==typeof e||i(e)&&"[object Number]"==r(e)}},function(e,t,n){var r=n(8),i=n(33),o=n(34),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},function(e,t,n){var r=n(31),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(32))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(8),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var i=a.call(e);return r&&(t?e[u]=n:delete e[u]),i}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.removeWatchersInitializer=function(e){return function(t){var n=o.listen(i.LampixEvents.WatchersRemoved,{watcher_ids:t.map(function(e){return e.state._id})}),a=n.promise,u=n.request;return a.then(function(){return t.forEach(function(t){delete e.watchers[t.state._id]})}),r.waitForAPI().then(function(){return window._lampix_internal.remove_watchers(JSON.stringify(u)),a}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.pauseWatchersInitializer=function(){return function(e){var t=o.listen(i.LampixEvents.WatchersPaused,{watcher_ids:e.map(function(e){return e.state._id})}),n=t.promise,a=t.request;return n.then(function(){return e.forEach(function(e){e.state.active=!1})}),r.waitForAPI().then(function(){return window._lampix_internal.pause_watchers(JSON.stringify(a)),n}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.resumeWatchersInitializer=function(){return function(e){var t=o.listen(i.LampixEvents.WatchersResumed,{watcher_ids:e.map(function(e){return e.state._id})}),n=t.promise,a=t.request;return n.then(function(){return e.forEach(function(e){e.state.active=!0})}),r.waitForAPI().then(function(){return window._lampix_internal.resume_watchers(JSON.stringify(a)),n}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=n(2);t.updateWatcherShapeInitializer=function(){return function(e,t){var n=o.listen(i.LampixEvents.WatcherUpdated,{watcher_id:e,shape:t}),a=n.promise,u=n.request;return r.waitForAPI().then(function(){return window._lampix_internal.update_watcher_shape(JSON.stringify(u)),a}).then(function(){})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.watcherActionHandler=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];function o(n){var r=n.data,i=r.watcher_id,o=r.objects,a=t.watchers[i];if(!a)throw new Error("RegisteredWatcher "+i+" does not exist.");a[e].call(a[e],o)}n.forEach(function(e){r.publisher.subscribe(e,o)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3);t.polygon=function(e){return{type:r.Watcher.Shape.Type.Polygon,data:e}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),o=r(n(5)),a=n(3);t.button=function(e,t,n){return void 0===n&&(n=o.default),{onClassification:n,shape:i.rectangle(e,t,50,50),name:a.Watcher.Names.NNClassifier,params:{neural_network_name:a.StandardNeuralNetworks.Fingers}}}}])}]]);