var e=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},t=Object.prototype.toString;function n(e){return"[object Array]"===t.call(e)}function r(e){return void 0===e}function o(e){return null!==e&&"object"==typeof e}function i(e){if("[object Object]"!==t.call(e))return!1;var n=Object.getPrototypeOf(e);return null===n||n===Object.prototype}function a(e){return"[object Function]"===t.call(e)}function s(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var u={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===t.call(e)},isBuffer:function(e){return null!==e&&!r(e)&&null!==e.constructor&&!r(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isPlainObject:i,isUndefined:r,isDate:function(e){return"[object Date]"===t.call(e)},isFile:function(e){return"[object File]"===t.call(e)},isBlob:function(e){return"[object Blob]"===t.call(e)},isFunction:a,isStream:function(e){return o(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:s,merge:function e(){var t={};function r(r,o){i(t[o])&&i(r)?t[o]=e(t[o],r):i(r)?t[o]=e({},r):n(r)?t[o]=r.slice():t[o]=r}for(var o=0,a=arguments.length;o<a;o++)s(arguments[o],r);return t},extend:function(t,n,r){return s(n,(function(n,o){t[o]=r&&"function"==typeof n?e(n,r):n})),t},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function c(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var f=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(u.isURLSearchParams(t))r=t.toString();else{var o=[];u.forEach(t,(function(e,t){null!=e&&(u.isArray(e)?t+="[]":e=[e],u.forEach(e,(function(e){u.isDate(e)?e=e.toISOString():u.isObject(e)&&(e=JSON.stringify(e)),o.push(c(t)+"="+c(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function p(){this.handlers=[]}p.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},p.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},p.prototype.forEach=function(e){u.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var d=p,l=function(e,t,n){return u.forEach(n,(function(n){e=n(e,t)})),e},h=function(e){return!(!e||!e.__CANCEL__)},m=function(e,t){u.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},g=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},y=u.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),u.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),u.isString(r)&&a.push("path="+r),u.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},v=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],w=u.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=u.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},b=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;u.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(a+":"+s)}var c,p,d=(c=e.baseURL,p=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(p)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,p):p);if(i.open(e.method.toUpperCase(),f(d,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,a,s,c,f="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(u.forEach(r.split("\n"),(function(e){if(s=e.indexOf(":"),o=u.trim(e.substr(0,s)).toLowerCase(),a=u.trim(e.substr(s+1)),o){if(c[o]&&v.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}})),c):c):null,p={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:f,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(g("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,p),i=null}},i.onabort=function(){i&&(n(g("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(g("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(g(t,e,"ECONNABORTED",i)),i=null},u.isStandardBrowserEnv()){var l=(e.withCredentials||w(d))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in i&&u.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),u.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(h){if("json"!==e.responseType)throw h}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},E={"Content-Type":"application/x-www-form-urlencoded"};function x(e,t){!u.isUndefined(e)&&u.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var C,j={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(C=b),C),transformRequest:[function(e,t){return m(t,"Accept"),m(t,"Content-Type"),u.isFormData(e)||u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e)?e:u.isArrayBufferView(e)?e.buffer:u.isURLSearchParams(e)?(x(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):u.isObject(e)?(x(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};j.headers={common:{Accept:"application/json, text/plain, */*"}},u.forEach(["delete","get","head"],(function(e){j.headers[e]={}})),u.forEach(["post","put","patch"],(function(e){j.headers[e]=u.merge(E)}));var A=j;function S(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var R=function(e){return S(e),e.headers=e.headers||{},e.data=l(e.data,e.headers,e.transformRequest),e.headers=u.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),u.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||A.adapter)(e).then((function(t){return S(e),t.data=l(t.data,t.headers,e.transformResponse),t}),(function(t){return h(t)||(S(e),t&&t.response&&(t.response.data=l(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},O=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return u.isPlainObject(e)&&u.isPlainObject(t)?u.merge(e,t):u.isPlainObject(t)?u.merge({},t):u.isArray(t)?t.slice():t}function c(r){u.isUndefined(t[r])?u.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(e[r],t[r])}u.forEach(r,(function(e){u.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),u.forEach(o,c),u.forEach(i,(function(r){u.isUndefined(t[r])?u.isUndefined(e[r])||(n[r]=s(void 0,e[r])):n[r]=s(void 0,t[r])})),u.forEach(a,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var f=r.concat(o).concat(i).concat(a),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return u.forEach(p,c),n};function N(e){this.defaults=e,this.interceptors={request:new d,response:new d}}N.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=O(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[R,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},N.prototype.getUri=function(e){return e=O(this.defaults,e),f(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},u.forEach(["delete","get","head","options"],(function(e){N.prototype[e]=function(t,n){return this.request(O(n||{},{method:e,url:t,data:(n||{}).data}))}})),u.forEach(["post","put","patch"],(function(e){N.prototype[e]=function(t,n,r){return this.request(O(r||{},{method:e,url:t,data:n}))}}));var U=N;function B(e){this.message=e}B.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},B.prototype.__CANCEL__=!0;var T=B;function P(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new T(e),t(n.reason))}))}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},P.source=function(){var e;return{token:new P((function(t){e=t})),cancel:e}};var L=P;function k(t){var n=new U(t),r=e(U.prototype.request,n);return u.extend(r,U.prototype,n),u.extend(r,n),r}var q=k(A);q.Axios=U,q.create=function(e){return k(O(q.defaults,e))},q.Cancel=T,q.CancelToken=L,q.isCancel=h,q.all=function(e){return Promise.all(e)},q.spread=function(e){return function(t){return e.apply(null,t)}},q.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var D=q,F=q;D.default=F;var H=D;H.defaults.timeout=1e4;const z=(e,t,n)=>function(e,t,n){switch(e){case 2:t="https://api.uomg.com/api/rand.music?format=json&sort=%E7%83%AD%E6%AD%8C%E6%A6%9C"+t;break;case 3:t="https://api.imjad.cn/cloudmusic/"+t}return new Promise(((e,r)=>{H.get(t,{params:n}).then((t=>{e(t)})).catch((e=>{r(e)}))}))}(e,t,n);export{z as g};
