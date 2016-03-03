/*! jQuery v2.0.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.2",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+xt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function pt(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function ft(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.parentWindow;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.frameElement&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",ft,"#"===e.firstChild.getAttribute("href")),ct(R,pt,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),p=bt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[bt(wt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}f.push(n)}return wt(f)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(f));y=Tt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,p,f=vt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");
try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/**
* @version: 2.1.18
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: https://www.improvely.com/
*/

(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['moment', 'jquery', 'exports'], function(momentjs, $, exports) {
      root.daterangepicker = factory(root, exports, momentjs, $);
    });

  } else if (typeof exports !== 'undefined') {
      var momentjs = require('moment');
      var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;  //isomorphic issue
      if (!jQuery) {
          try {
              jQuery = require('jquery');
              if (!jQuery.fn) jQuery.fn = {}; //isomorphic issue
          } catch (err) {
              if (!jQuery) throw new Error('jQuery dependency not found');
          }
      }

    factory(root, exports, momentjs, jQuery);

  // Finally, as a browser global.
  } else {
    root.daterangepicker = factory(root, {}, root.moment || moment, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this || {}, function(root, daterangepicker, moment, $) { // 'this' doesn't exist on a server

    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.dateLimit = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyClass = 'btn-success';
        this.cancelClass = 'btn-default';

        this.locale = {
            format: 'MM/DD/YYYY',
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof jQuery))
            options.template = '<div class="daterangepicker dropdown-menu">' +
                '<div class="calendar left">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="calendar right">' +
                    '<div class="daterangepicker_input">' +
                      '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' +
                      '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
                      '<div class="calendar-time">' +
                        '<div></div>' +
                        '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
                      '</div>' +
                    '</div>' +
                    '<div class="calendar-table"></div>' +
                '</div>' +
                '<div class="ranges">' +
                    '<div class="range_inputs">' +
                        '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                        '<button class="cancelBtn" type="button"></button>' +
                    '</div>' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string')
              this.locale.customRangeLabel = options.locale.customRangeLabel;

        }

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyClass === 'string')
            this.applyClass = options.applyClass;

        if (typeof options.cancelClass === 'string')
            this.cancelClass = options.cancelClass;

        if (typeof options.dateLimit === 'object')
            this.dateLimit = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is('input[type=text]')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {

                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or dateLimit
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.dateLimit && start.clone().add(this.dateLimit).isAfter(maxDate))
                    maxDate = start.clone().add(this.dateLimit);
                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate)) || (maxDate && start.isAfter(maxDate)))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li>' + range + '</li>';
            }
            list += '<li>' + this.locale.customRangeLabel + '</li>';
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply && typeof options.ranges !== 'object') {
            this.container.find('.ranges').hide();
        } else if (this.autoApply) {
            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
        }

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.calendar.left').addClass('single');
            this.container.find('.calendar.left').show();
            this.container.find('.calendar.right').hide();
            this.container.find('.daterangepicker_input input, .daterangepicker_input i').hide();
            if (!this.timePicker) {
                this.container.find('.ranges').hide();
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //swap the position of the predefined ranges if opens right
        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
            var ranges = this.container.find('.ranges');
            var html = ranges.clone();
            ranges.remove();
            this.container.find('.calendar.left').parent().prepend(html);
        }

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyClass.length)
            this.container.find('.applyBtn').addClass(this.applyClass);
        if (this.cancelClass.length)
            this.container.find('.cancelBtn').addClass(this.cancelClass);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
            //.on('keyup.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

        this.container.find('.ranges')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

        if (this.element.is('input')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this)
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.element.trigger('change');
        } else if (this.element.is('input') && this.autoUpdateInput) {
            this.element.val(this.startDate.format(this.locale.format));
            this.element.trigger('change');
        }

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate))
                this.startDate = this.minDate;

            if (this.maxDate && this.startDate.isAfter(this.maxDate))
                this.startDate = this.maxDate;

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.endOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate;

            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.dateLimit);

            this.previousRightTime = this.endDate.clone();

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate) {
                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
                this.container.find('input[name="daterangepicker_start"]').addClass('active');
            } else {
                this.container.find('input[name="daterangepicker_end"]').addClass('active');
                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
            }
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
                var minYear = (minDate && minDate.year()) || (currentYear - 50);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the dateLimit setting in order to
            //grey out end dates beyond the dateLimit
            if (this.endDate == null && this.dateLimit) {
                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.dateLimit);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate ? this.endDate.clone() : this.previousRightTime.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.calendar.right .calendar-time div');
                if (timeSelector.html() != '') {

                    selected.hour(timeSelector.find('.hourselect option:selected').val() || selected.hour());
                    selected.minute(timeSelector.find('.minuteselect option:selected').val() || selected.minute());
                    selected.second(timeSelector.find('.secondselect option:selected').val() || selected.second());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                    if (selected.isBefore(this.startDate))
                        selected = this.startDate.clone();

                    if (selected.isAfter(maxDate))
                        selected = maxDate.clone();

                }
            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

        },

        updateFormInputs: function() {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
            if (this.endDate)
                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate, this.endDate, this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        hoverRange: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            var label = e.target.innerHTML;
            if (label == this.locale.customRangeLabel) {
                this.updateView();
            } else {
                var dates = this.ranges[label];
                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
            }

        },

        clickRange: function(e) {
            var label = e.target.innerHTML;
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore mouse movements while an above-calendar text input has focus
            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
                return;

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            //have the text inputs above calendars reflect the date being hovered over
            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            if (this.endDate) {
                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
            } else {
                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
            }

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.calendar td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if (dt.isAfter(startDate) && dt.isBefore(date)) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else {
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

        },

        calculateChosenLabel: function() {
          var customRange = true;
          var i = 0;
          for (var range in this.ranges) {
              if (this.timePicker) {
                  if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
                      customRange = false;
                      this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                      break;
                  }
              } else {
                  //ignore times when comparing dates if time picker is not enabled
                  if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                      customRange = false;
                      this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
                      break;
                  }
              }
              i++;
          }
          if (customRange) {
              this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
              this.showCalendars();
          }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        formInputsChanged: function(e) {
            var isRight = $(e.target).closest('.calendar').hasClass('right');
            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

            if (start.isValid() && end.isValid()) {

                if (isRight && end.isBefore(start))
                    start = end.clone();

                this.setStartDate(start);
                this.setEndDate(end);

                if (isRight) {
                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
                } else {
                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
                }

            }

            this.updateCalendars();
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
            }
        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;
            if (this.element.val().length < this.locale.format.length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
                this.element.trigger('change');
            } else if (this.element.is('input') && this.autoUpdateInput) {
                this.element.val(this.startDate.format(this.locale.format));
                this.element.trigger('change');
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, options, callback));
        });
        return this;
    };

    return DateRangePicker;

}));

/*
 CanvasJS HTML5 & JavaScript Charts - v1.8.0 GA - http://canvasjs.com/
 Copyright 2013 fenopix
*/
(function(){function O(a,b){a.prototype=Ca(b.prototype);a.prototype.constructor=a;a.base=b.prototype}function Ca(a){function b(){}b.prototype=a;return new b}function ta(a,b,c){"millisecond"===c?a.setMilliseconds(a.getMilliseconds()+1*b):"second"===c?a.setSeconds(a.getSeconds()+1*b):"minute"===c?a.setMinutes(a.getMinutes()+1*b):"hour"===c?a.setHours(a.getHours()+1*b):"day"===c?a.setDate(a.getDate()+1*b):"week"===c?a.setDate(a.getDate()+7*b):"month"===c?a.setMonth(a.getMonth()+1*b):"year"===c&&a.setFullYear(a.getFullYear()+
1*b);return a}function L(a,b){var c=!1;0>a&&(c=!0,a*=-1);a=""+a;for(b=b?b:1;a.length<b;)a="0"+a;return c?"-"+a:a}function $(a){if(!a)return a;a=a.replace(/^\s\s*/,"");for(var b=/\s/,c=a.length;b.test(a.charAt(--c)););return a.slice(0,c+1)}function Da(a){a.roundRect=function(a,c,d,e,f,g,k,p){k&&(this.fillStyle=k);p&&(this.strokeStyle=p);"undefined"===typeof f&&(f=5);this.lineWidth=g;this.beginPath();this.moveTo(a+f,c);this.lineTo(a+d-f,c);this.quadraticCurveTo(a+d,c,a+d,c+f);this.lineTo(a+d,c+e-f);
this.quadraticCurveTo(a+d,c+e,a+d-f,c+e);this.lineTo(a+f,c+e);this.quadraticCurveTo(a,c+e,a,c+e-f);this.lineTo(a,c+f);this.quadraticCurveTo(a,c,a+f,c);this.closePath();k&&this.fill();p&&0<g&&this.stroke()}}function ua(a,b){return a-b}function va(a,b){return a.x-b.x}function B(a){var b=((a&16711680)>>16).toString(16),c=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);b=2>b.length?"0"+b:b;c=2>c.length?"0"+c:c;a=2>a.length?"0"+a:a;return"#"+b+c+a}function Ea(a,b){var c=this.length>>>0,d=Number(b)||
0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d<c;d++)if(d in this&&this[d]===a)return d;return-1}function P(a){return null===a||"undefined"===typeof a}function ea(a,b,c){c=c||"normal";var d=a+"_"+b+"_"+c,e=wa[d];if(isNaN(e)){try{a="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+a+"; font-size:"+b+"px; font-weight:"+c+";";if(!U){var f=document.body;U=document.createElement("span");U.innerHTML="";var g=document.createTextNode("Mpgyi");
U.appendChild(g);f.appendChild(U)}U.style.display="";U.setAttribute("style",a);e=Math.round(U.offsetHeight);U.style.display="none"}catch(k){e=Math.ceil(1.1*b)}e=Math.max(e,b);wa[d]=e}return e}function M(a,b){var c=[];lineDashTypeMap={solid:[],shortDash:[3,1],shortDot:[1,1],shortDashDot:[3,1,1,1],shortDashDotDot:[3,1,1,1,1,1],dot:[1,2],dash:[4,2],dashDot:[4,2,1,2],longDash:[8,2],longDashDot:[8,2,1,2],longDashDotDot:[8,2,1,2,1,2]};if(c=lineDashTypeMap[a||"solid"])for(var d=0;d<c.length;d++)c[d]*=b;
else c=[];return c}function F(a,b,c,d){if(a.addEventListener)a.addEventListener(b,c,d||!1);else if(a.attachEvent)a.attachEvent("on"+b,function(b){b=b||window.event;b.preventDefault=b.preventDefault||function(){b.returnValue=!1};b.stopPropagation=b.stopPropagation||function(){b.cancelBubble=!0};c.call(a,b)});else return!1}function xa(a,b,c){a*=J;b*=J;a=c.getImageData(a,b,2,2).data;b=!0;for(c=0;4>c;c++)if(a[c]!==a[c+4]|a[c]!==a[c+8]|a[c]!==a[c+12]){b=!1;break}return b?a[0]<<16|a[1]<<8|a[2]:0}function N(a,
b,c){return a in b?b[a]:c[a]}function fa(a,b,c){if(t&&ya){var d=a.getContext("2d");ga=d.webkitBackingStorePixelRatio||d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||d.backingStorePixelRatio||1;J=oa/ga;a.width=b*J;a.height=c*J;oa!==ga&&(a.style.width=b+"px",a.style.height=c+"px",d.scale(J,J))}else a.width=b,a.height=c}function V(a,b){var c=document.createElement("canvas");c.setAttribute("class","canvasjs-chart-canvas");fa(c,a,b);t||"undefined"===typeof G_vmlCanvasManager||
G_vmlCanvasManager.initElement(c);return c}function za(a,b,c){if(a&&b&&c){c=c+"."+b;var d="image/"+b;a=a.toDataURL(d);var e=!1,f=document.createElement("a");f.download=c;f.href=a;f.target="_blank";if("undefined"!==typeof Blob&&new Blob){for(var g=a.replace(/^data:[a-z/]*;base64,/,""),g=atob(g),k=new ArrayBuffer(g.length),k=new Uint8Array(k),p=0;p<g.length;p++)k[p]=g.charCodeAt(p);b=new Blob([k.buffer],{type:"image/"+b});try{window.navigator.msSaveBlob(b,c),e=!0}catch(h){f.dataset.downloadurl=[d,f.download,
f.href].join(":"),f.href=window.URL.createObjectURL(b)}}if(!e)try{event=document.createEvent("MouseEvents"),event.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),f.dispatchEvent?f.dispatchEvent(event):f.fireEvent&&f.fireEvent("onclick")}catch(l){b=window.open(),b.document.write("<img src='"+a+"'></img><div>Please right click on the image and save it to your device</div>"),b.document.close()}}}function Q(a,b,c){b.getAttribute("state")!==c&&(b.setAttribute("state",c),b.setAttribute("type",
"button"),b.style.position="relative",b.style.margin="0px 0px 0px 0px",b.style.padding="3px 4px 0px 4px",b.style.cssFloat="left",b.setAttribute("title",a._cultureInfo[c+"Text"]),b.innerHTML="<img style='height:16px;' src='"+Fa[c].image+"' alt='"+a._cultureInfo[c+"Text"]+"' />")}function ha(){for(var a=null,b=0;b<arguments.length;b++)a=arguments[b],a.style&&(a.style.display="inline")}function S(){for(var a=null,b=0;b<arguments.length;b++)(a=arguments[b])&&a.style&&(a.style.display="none")}function G(a,
b,c,d){this._defaultsKey=a;this.parent=d;this._eventListeners=[];d={};c&&(Y[c]&&Y[c][a])&&(d=Y[c][a]);this._options=b?b:{};this.setOptions(this._options,d)}function u(a,b,c){this._publicChartReference=c;b=b||{};u.base.constructor.call(this,"Chart",b,b.theme?b.theme:"theme1");var d=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this._lastTouchData=null;this.isAnimating=!1;this.renderCount=
0;this.panEnabled=this.disableToolTip=this.animatedRender=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];(this._container="string"===typeof this._containerId?document.getElementById(this._containerId):this._containerId)?(this._container.innerHTML="",b=a=0,a=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,b=this._options.height?this.height:0<this._container.clientHeight?
this._container.clientHeight:this.height,this.width=a,this.height=b,this.x1=this.y1=0,this.x2=this.width,this.y2=this.height,this._selectedColorSet="undefined"!==typeof W[this.colorSet]?W[this.colorSet]:W.colorSet1,this._canvasJSContainer=document.createElement("div"),this._canvasJSContainer.setAttribute("class","canvasjs-chart-container"),this._canvasJSContainer.style.position="relative",this._canvasJSContainer.style.textAlign="left",this._canvasJSContainer.style.cursor="auto",t||(this._canvasJSContainer.style.height=
"0px"),this._container.appendChild(this._canvasJSContainer),this.canvas=V(a,b),this.canvas.style.position="absolute",this.canvas.getContext&&(this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",Da(this.ctx),t?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=V(a,b),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=
this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=V(a,b),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new aa(this),F(window,"resize",function(){d._updateSize()&&d.render()}),this._toolBar=document.createElement("div"),this._toolBar.setAttribute("class","canvasjs-chart-toolbar"),this._toolBar.style.cssText="position: absolute; right: 1px; top: 1px;",
this._canvasJSContainer.appendChild(this._toolBar),this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},F(this.overlaidCanvas,"click",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,"mousemove",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,"mouseup",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,"mousedown",function(a){d._mouseEventHandler(a);S(d._dropdownMenu)}),F(this.overlaidCanvas,"mouseout",function(a){d._mouseEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerDown":"touchstart",function(a){d._touchEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){d._touchEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",function(a){d._touchEventHandler(a)}),F(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){d._touchEventHandler(a)}),this._creditLink||(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("class",
"canvasjs-chart-credit"),this._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:3px;top:"+(this.height-14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("target","_blank")),this._toolTip=new R(this,this._options.toolTip,this.theme),this.axisY2=this.axisY=this.axisX=this.data=null,this.sessionVariables={axisX:{},axisY:{},
axisY2:{}})):window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function ia(a,b){for(var c=[],d=0;d<a.length;d++)if(0==d)c.push(a[0]);else{var e,f,g;g=d-1;e=0===g?0:g-1;f=g===a.length-1?g:g+1;c[c.length]={x:a[g].x+(a[f].x-a[e].x)/b/3,y:a[g].y+(a[f].y-a[e].y)/b/3};g=d;e=0===g?0:g-1;f=g===a.length-1?g:g+1;c[c.length]={x:a[g].x-(a[f].x-a[e].x)/b/3,y:a[g].y-(a[f].y-a[e].y)/b/3};c[c.length]=a[d]}return c}function Aa(a,b){if(null===a||"undefined"===
typeof a)return b;var c=parseFloat(a.toString())*(0<=a.toString().indexOf("%")?b/100:1);return!isNaN(c)&&c<=b&&0<=c?c:b}function Z(a,b,c,d,e){"undefined"===typeof e&&(e=0);this._padding=e;this._x1=a;this._y1=b;this._x2=c;this._y2=d;this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding}function H(a,b){H.base.constructor.call(this,"TextBlock",b);this.ctx=a;this._isDirty=!0;this._wrappedText=null;this._lineHeight=ea(this.fontFamily,this.fontSize,this.fontWeight)}
function ba(a,b){ba.base.constructor.call(this,"Title",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function ja(a,b){ja.base.constructor.call(this,"Subtitle",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));
this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function ka(a,b,c){ka.base.constructor.call(this,"Legend",b,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.ghostCtx=this.chart._eventManager.ghostCtx;this.items=[];this.height=this.width=0;this.orientation=null;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=ea(this.fontFamily,
this.fontSize,this.fontWeight);this.horizontalSpacing=this.fontSize}function pa(a,b){pa.base.constructor.call(this,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}function T(a,b,c,d,e){T.base.constructor.call(this,"DataSeries",b,c);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=d;this.noDataPointsInPlotArea=0;this.id=e;this.chart._eventManager.objectMap[e]={id:e,objectType:"dataSeries",dataSeriesIndex:d};this.dataPointIds=[];this.plotUnit=[];this.axisY=this.axisX=
null;null===this.fillOpacity&&(this.type.match(/area/i)?this.fillOpacity=0.7:this.fillOpacity=1);this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function C(a,b,c,d){C.base.constructor.call(this,"Axis",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this._labels=null;this.dataInfo=
{min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===c?(this.sessionVariables=this.chart.sessionVariables[c],this._options.interval||(this.intervalType=null)):this.sessionVariables="left"===d||"top"===d?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=
this.chart.getAutoFontSize(this.labelFontSize));this.type=c;"axisX"!==c||b&&"undefined"!==typeof b.gridThickness||(this.gridThickness=0);this._position=d;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:180<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);if(this._options.stripLines&&0<this._options.stripLines.length)for(this.stripLines=
[],b=0;b<this._options.stripLines.length;b++)this.stripLines.push(new la(this.chart,this._options.stripLines[b],a.theme,++this.chart._eventManager.lastObjectId,this));this._titleTextBlock=null;this.hasOptionChanged("viewportMinimum")&&null===this.viewportMinimum&&(this._options.viewportMinimum=void 0,this.sessionVariables.viewportMinimum=null);this.hasOptionChanged("viewportMinimum")||isNaN(this.sessionVariables.newViewportMinimum)||null===this.sessionVariables.newViewportMinimum?this.sessionVariables.newViewportMinimum=
null:this.viewportMinimum=this.sessionVariables.newViewportMinimum;this.hasOptionChanged("viewportMaximum")&&null===this.viewportMaximum&&(this._options.viewportMaximum=void 0,this.sessionVariables.viewportMaximum=null);this.hasOptionChanged("viewportMaximum")||isNaN(this.sessionVariables.newViewportMaximum)||null===this.sessionVariables.newViewportMaximum?this.sessionVariables.newViewportMaximum=null:this.viewportMaximum=this.sessionVariables.newViewportMaximum;null!==this.minimum&&null!==this.viewportMinimum&&
(this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum));null!==this.maximum&&null!==this.viewportMaximum&&(this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum));this.trackChanges("viewportMinimum");this.trackChanges("viewportMaximum")}function la(a,b,c,d,e){la.base.constructor.call(this,"StripLine",b,c,e);this.id=d;this.chart=a;this.ctx=this.chart.ctx;this.label=this.label;this._thicknessType="pixel";null!==this.startValue&&null!==this.endValue&&(this.value=((this.startValue.getTime?
this.startValue.getTime():this.startValue)+(this.endValue.getTime?this.endValue.getTime():this.endValue))/2,this.thickness=Math.max(this.endValue-this.startValue),this._thicknessType="value")}function R(a,b,c){R.base.constructor.call(this,"ToolTip",b,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this._initialize()}function aa(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=
[];this.previousDataPointEventObject=null;this.ghostCanvas=V(this.chart.width,this.chart.height);this.ghostCtx=this.ghostCanvas.getContext("2d");this.mouseoveredObjectMaps=[]}function ca(a){var b;a&&da[a]&&(b=da[a]);ca.base.constructor.call(this,"CultureInfo",b)}function qa(a){this.chart=a;this.ctx=this.chart.plotArea.ctx;this.animations=[];this.animationRequestId=null}var t=!!document.createElement("canvas").getContext,ma={Chart:{width:500,height:400,zoomEnabled:!1,zoomType:"x",backgroundColor:"white",
theme:"theme1",animationEnabled:!1,animationDuration:1200,dataPointWidth:null,dataPointMinWidth:null,dataPointMaxWidth:null,colorSet:"colorSet1",culture:"en",creditText:"",interactivityEnabled:!0,exportEnabled:!1,exportFileName:"Chart",rangeChanging:null,rangeChanged:null},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,
backgroundColor:null,margin:5,wrap:!0,maxWidth:null,dockInsidePlotArea:!1},Subtitle:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:2,wrap:!0,maxWidth:null,dockInsidePlotArea:!1},Legend:{name:null,verticalAlign:"center",horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",
fontStyle:"normal",cursor:null,itemmouseover:null,itemmouseout:null,itemmousemove:null,itemclick:null,dockInsidePlotArea:!1,reversed:!1,maxWidth:null,maxHeight:null,itemMaxWidth:null,itemWidth:null,itemWrap:!0,itemTextFormatter:null},ToolTip:{enabled:!0,shared:!1,animationEnabled:!0,content:null,contentFormatter:null,reversed:!1,backgroundColor:null,borderColor:null,borderThickness:2,cornerRadius:5,fontSize:14,fontColor:null,fontFamily:"Calibri, Arial, Georgia, serif;",fontWeight:"normal",fontStyle:"italic"},
Axis:{minimum:null,maximum:null,viewportMinimum:null,viewportMaximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!1,labelWrap:!0,labelMaxWidth:null,labelFormatter:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,
lineColor:"black",lineThickness:1,lineDashType:"solid",gridColor:"A0A0A0",gridThickness:0,gridDashType:"solid",interlacedColor:null,valueFormatString:null,margin:2,stripLines:[]},StripLine:{value:null,startValue:null,endValue:null,color:"orange",opacity:null,thickness:2,lineDashType:"solid",label:"",labelBackgroundColor:"#EEEEEE",labelFontFamily:"arial",labelFontColor:"orange",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelFormatter:null,showOnTop:!1},DataSeries:{name:null,
dataPoints:null,label:"",bevelEnabled:!1,highlightEnabled:!0,cursor:null,indexLabel:"",indexLabelPlacement:"auto",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelLineDashType:"solid",indexLabelMaxWidth:null,indexLabelWrap:!0,indexLabelFormatter:null,lineThickness:2,lineDashType:"solid",
color:null,risingColor:"white",fillOpacity:null,startAngle:0,radius:null,innerRadius:null,type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,zValueFormatString:null,percentFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,legendMarkerBorderColor:null,legendMarkerBorderThickness:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,
mousemove:null,click:null,toolTipContent:null,visible:!0},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",zoomText:"Zoom",panText:"Pan",resetText:"Reset",menuText:"More Options",saveJPGText:"Save as JPEG",
savePNGText:"Save as PNG",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},da={en:{}},W={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),
colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},Y={theme1:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",
margin:5},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:t?"monospace, sans-serif,arial black":"calibri"},DataSeries:{indexLabelFontColor:"grey",
indexLabelFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:5},Subtitle:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:14,fontColor:"#333333",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:t?"monospace, sans-serif,arial black":
"arial",titleFontWeight:"bold",labelFontFamily:t?"monospace, Courier New, Courier":"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:t?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:t?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,
indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:t?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Subtitle:{fontFamily:t?"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:16,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:5},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",
titleFontFamily:t?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:t?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:t?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:t?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":
"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},D={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},wa={},U=null,ra=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,b="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
c="Sun Mon Tue Wed Thu Fri Sat".split(" "),d="January February March April May June July August September October November December".split(" "),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),f=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,g=/[^-+\dA-Z]/g;return function(k,p,h){var l=h?h.days:b,m=h?h.months:d,n=h?h.shortDays:c,q=h?h.shortMonths:e;h="";var r=!1;k=k&&k.getTime?k:k?new Date(k):new Date;
if(isNaN(k))throw SyntaxError("invalid date");"UTC:"===p.slice(0,4)&&(p=p.slice(4),r=!0);h=r?"getUTC":"get";var s=k[h+"Date"](),w=k[h+"Day"](),v=k[h+"Month"](),x=k[h+"FullYear"](),t=k[h+"Hours"](),y=k[h+"Minutes"](),z=k[h+"Seconds"](),u=k[h+"Milliseconds"](),A=r?0:k.getTimezoneOffset();return h=p.replace(a,function(a){switch(a){case "D":return s;case "DD":return L(s,2);case "DDD":return n[w];case "DDDD":return l[w];case "M":return v+1;case "MM":return L(v+1,2);case "MMM":return q[v];case "MMMM":return m[v];
case "Y":return parseInt(String(x).slice(-2));case "YY":return L(String(x).slice(-2),2);case "YYY":return L(String(x).slice(-3),3);case "YYYY":return L(x,4);case "h":return t%12||12;case "hh":return L(t%12||12,2);case "H":return t;case "HH":return L(t,2);case "m":return y;case "mm":return L(y,2);case "s":return z;case "ss":return L(z,2);case "f":return String(u).slice(0,1);case "ff":return L(String(u).slice(0,2),2);case "fff":return L(String(u).slice(0,3),3);case "t":return 12>t?"a":"p";case "tt":return 12>
t?"am":"pm";case "T":return 12>t?"A":"P";case "TT":return 12>t?"AM":"PM";case "K":return r?"UTC":(String(k).match(f)||[""]).pop().replace(g,"");case "z":return(0<A?"-":"+")+Math.floor(Math.abs(A)/60);case "zz":return(0<A?"-":"+")+L(Math.floor(Math.abs(A)/60),2);case "zzz":return(0<A?"-":"+")+L(Math.floor(Math.abs(A)/60),2)+L(Math.abs(A)%60,2);default:return a.slice(1,a.length-1)}})}}(),X=function(a,b,c){if(null===a)return"";a=Number(a);var d=0>a?!0:!1;d&&(a*=-1);var e=c?c.decimalSeparator:".",f=c?
c.digitGroupSeparator:",",g="";b=String(b);var g=1,k=c="",p=-1,h=[],l=[],m=0,n=0,q=0,r=!1,s=0,k=b.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);b=null;for(var w=0;k&&w<k.length;w++)if(b=k[w],"."===b&&0>p)p=w;else{if("%"===b)g*=100;else if("\u2030"===b){g*=1E3;continue}else if(","===b[0]&&"."===b[b.length-1]){g/=Math.pow(1E3,b.length-1);p=w+b.length-1;continue}else"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||(r=!0);0>p?(h.push(b),"#"===b||"0"===b?m++:","===b&&q++):(l.push(b),"#"!==b&&"0"!==
b||n++)}r&&(b=Math.floor(a),s=(0===b?"":String(b)).length-m,g/=Math.pow(10,s));0>p&&(p=w);g=(a*g).toFixed(n);b=g.split(".");g=(b[0]+"").split("");a=(b[1]+"").split("");g&&"0"===g[0]&&g.shift();for(w=r=k=n=p=0;0<h.length;)if(b=h.pop(),"#"===b||"0"===b)if(p++,p===m){var v=g,g=[];if("0"===b)for(b=m-n-(v?v.length:0);0<b;)v.unshift("0"),b--;for(;0<v.length;)c=v.pop()+c,w++,0===w%r&&(k===q&&0<v.length)&&(c=f+c);d&&(c="-"+c)}else 0<g.length?(c=g.pop()+c,n++,w++):"0"===b&&(c="0"+c,n++,w++),0===w%r&&(k===
q&&0<g.length)&&(c=f+c);else"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||!/[eE][+-]*[0]+/.test(b)?","===b?(k++,r=w,w=0,0<g.length&&(c=f+c)):c=1<b.length&&('"'===b[0]&&'"'===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1])?b.slice(1,b.length-1)+c:b+c:(b=0>s?b.replace("+","").replace("-",""):b.replace("-",""),c+=b.replace(/[0]+/,function(a){return L(s,a.length)}));d="";for(f=!1;0<l.length;)b=l.shift(),"#"===b||"0"===b?0<a.length&&0!==Number(a.join(""))?(d+=a.shift(),f=!0):"0"===b&&(d+="0",f=!0):1<b.length&&
('"'===b[0]&&'"'===b[b.length-1]||"'"===b[0]&&"'"===b[b.length-1])?d+=b.slice(1,b.length-1):"E"!==b[0]&&"e"!==b[0]||"0"!==b[b.length-1]||!/[eE][+-]*[0]+/.test(b)?d+=b:(b=0>s?b.replace("+","").replace("-",""):b.replace("-",""),d+=b.replace(/[0]+/,function(a){return L(s,a.length)}));return c+((f?e:"")+d)},na=function(a){var b=0,c=0;a=a||window.event;a.offsetX||0===a.offsetX?(b=a.offsetX,c=a.offsetY):a.layerX||0==a.layerX?(b=a.layerX,c=a.layerY):(b=a.pageX-a.target.offsetLeft,c=a.pageY-a.target.offsetTop);
return{x:b,y:c}},ya=!0,oa=window.devicePixelRatio||1,ga=1,J=ya?oa/ga:1,Fa={reset:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAKRSURBVEiJrdY/iF1FFMfxzwnZrGISUSR/JLGIhoh/QiRNBLWxMLIWEkwbgiAoFgoW2mhlY6dgpY2IlRBRxBSKhSAKIklWJRYuMZKAhiyopAiaTY7FvRtmZ+/ed9/zHRjezLw5v/O9d86cuZGZpmURAfdn5o9DfdZNLXpjz+LziPgyIl6MiG0jPTJzZBuyDrP4BVm0P/AKbljTb4ToY/gGewYA7KyCl+1b3DUYANvwbiHw0gCAGRzBOzjTAXEOu0cC4Ch+r5x/HrpdrcZmvIDFSucMtnYCYC++6HmNDw8FKDT34ETrf639/azOr5vwRk/g5fbeuABtgC04XWk9VQLciMP4EH/3AFzErRNC7MXlQmsesSoHsGPE23hmEoBW+61K66HMXFmIMvN8myilXS36R01ub+KfYvw43ZXwYDX+AHP4BAci4pFJomfmr/ihmNofESsBImJGk7mlncrM45n5JPbhz0kAWpsv+juxaX21YIPmVJS2uNzJMS6ZNexC0d+I7fUWXLFyz2kSZlpWPvASlmqAf/FXNXf3FAF2F/1LuFifAlionB6dRuSI2IwHi6lzmXmp6xR8XY0fiIh7psAwh+3FuDkRHQVjl+a8lkXjo0kLUKH7XaV5oO86PmZ1FTzyP4K/XGl9v/zwfbW7BriiuETGCP5ch9bc9f97HF/vcFzCa5gdEPgWq+t/4v0V63oE1uF4h0DiFJ7HnSWMppDdh1dxtsPvJ2wcBNAKbsJXa0Ck5opdaBPsRNu/usba09i1KsaAVzmLt3sghrRjuK1Tf4xkegInxwy8gKf7dKMVH2QRsV5zXR/Cftyu+aKaKbbkQrsdH+PTzLzcqzkOQAVzM+7FHdiqqe2/YT4zF/t8S/sPmawyvC974vcAAAAASUVORK5CYII="},
pan:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAJVSURBVFiFvZe7a1RBGMV/x2hWI4JpfKCIiSBKOoOCkID/wP4BFqIIFkE02ChIiC8QDKlSiI3YqRBsBVGwUNAUdiIEUgjiAzQIIsuKJsfizsXr5t7d+8jmwLDfzHz3nLOzc7+ZxTZlGyDgZiWOCuJ9wH2gCUyuqQFgF/AGcKJNrYkBYBj40CIet+muGQi/96kM4WS7C/Tm5VUg7whJg8BkEGkCR4BDYfodsADUgP6wErO5iCtswsuJb32hdbXy8qzL5TIdmzJinHdZoZIBZcSFkGlAKs1Z3YCketZcBtouuaQNkrblMiBpBrhme7mAgU4wMCvpcFsDkq4C54DFVRTH9h+i6vlE0r5UA5ImgCuh28jB28iIs7BIVCOeStoZD64P4uPAjUTygKSx2FsK2TIwkugfk9Qkfd/E+yMWHQCeSRqx/R3gOp3LazfaS2C4B5gHDgD7U9x3E3uAH7KNpC3AHHAwTL4FHgM9GQ8vAaPA0dB/Abxqk2/gBLA9MXba9r1k/d4LfA3JtwueBeM58ucS+edXnAW23wP10N3advEi9CXizTnyN4bPS7Zn4sH/dq3t18AY4e1YLYSy3g/csj2VnFshZPuOpOeSKHCodUINuGj7YetE6je1PV9QoNPJ9StNHKodx7nRbiWrGHBGXAi5DUiqtQwtpcWK0Jubt8CltA5MEV1IfwO7+VffPwGfia5m34CT4bXujIIX0Qna1/cGMNqV/wUJE2czxD8CQ4X5Sl7Jz7SILwCDpbjKPBRMHAd+EtX4HWV5Spdc2w8kDQGPbH8py/MXMygM69/FKz4AAAAASUVORK5CYII="},
zoom:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAMqSURBVFiFvdfbj91TFMDxz57U6GUEMS1aYzyMtCSSDhWjCZMInpAI3khE/QHtgzdRkXgSCS8SES9epKLi0oRKNETjRahREq2KS1stdRujtDPtbA97n5zdn9+5zJxTK9k5v3POXmt991p7r71+IcaoGwkhTOIebMRqzOBTvIG3Y4zTXRmqSoyx5cAKbMJOHMFJnMZ8/jyFaXyMR7G6nb1aH22cP4BvcBxziG3GKfyTIR9D6BYg1KUghPBCDveFlb/24Av8iuUYw41YVsz5G7uxKcZ4aMEpwGt5NY3V/YbHsQ6rcAHOw/kYxigewr5CZw4fYGxBKcCLOFEYehXrMdRhr5yLETxVScsOLOkKAPfn1TYMPIvLFrShUlS2FDZm8XRHACzFAWl3R2xbqPMCYhmeLCAOYEMngAczbcTvuHYxzguIy/FesR9e6gSwU/OoPYHBHgHgviIKX2Flq7k34KhmcVnbi/PC8JX4MgMcxb118wZwdz5aISscqx7VRcox7MrPQ7i+btIAJrAkf9+bI9EPmZY2IAxiTSuAldLq4Y9+AcSUh78KP0tbAcwU35cXMD1JCIFUoGiehlqAz6TNB1f1C0DK+0h+nsNPrQC2a4bqGmlD9kOGcWt+Po6pVgDvSxfJaSkFd4UQBvoAsBYbCoB3a2flM7slA0R8iyt6rAFDeDPbm8eOTpVwGD9qVq7nLbIaZnmksPU1JtsCZMXNmpdRxFasWITzh6Xj3LCzra1OxcD2QjHiGVzdpfORnMqZio2PcF23ABdJF1Np4BPptlyPi6WzPYBzpJZtHe7A6xW9cnyP8TqA//SEIYRL8Bxul7rihvwgtVn78WcGGZXa9HGd5TDujDHuOePXNiHdKjWgZX/YbsxLx/ktqbjVzTlcjUSnvI5JrdlUVp6WesZZ6R1hRrpq9+EVTGS9jTjYAuKIouGpbcurEkIYxC051KNSamazsc+xK8b4S0VnEi/j0hqTP+M27O258egQwZuzs7pI7Mf4WQXIEDc5s9sux+5+1Py2EmP8UOq6GvWhIScxfdYjUERiAt9Jd84J6a16zf8JEKT3yCm8g1UxRv8CC4pyRhzR1uUAAAAASUVORK5CYII="},
menu:{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAgCAYAAAAbifjMAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDcvMTUvMTTPsvU0AAAAP0lEQVRIie2SMQoAIBDDUvH/X667g8sJJ9KOhYYOkW0qGaU1MPdC0vGSbV19EACo3YMPAFH5BUBUjsqfAPpVXtNgGDfxEDCtAAAAAElFTkSuQmCC"}};G.prototype.setOptions=function(a,b){if(ma[this._defaultsKey]){var c=ma[this._defaultsKey],d;for(d in c)c.hasOwnProperty(d)&&(this[d]=a&&d in a?a[d]:b&&d in
b?b[d]:c[d])}};G.prototype.updateOption=function(a){var b=ma[this._defaultsKey],c=this._options.theme?this._options.theme:this.chart&&this.chart._options.theme?this.chart._options.theme:"theme1",d={},e=this[a];c&&(Y[c]&&Y[c][this._defaultsKey])&&(d=Y[c][this._defaultsKey]);a in b&&(e=a in this._options?this._options[a]:d&&a in d?d[a]:b[a]);if(e===this[a])return!1;this[a]=e;return!0};G.prototype.trackChanges=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";this.sessionVariables[a]=
this._options[a]};G.prototype.isBeingTracked=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};G.prototype.hasOptionChanged=function(a){if(!this.sessionVariables)throw"Session Variable Store not set";return this.sessionVariables[a]!==this._options[a]};G.prototype.addEventListener=function(a,b,c){a&&b&&(this._eventListeners[a]=this._eventListeners[a]||[],this._eventListeners[a].push({context:c||this,eventHandler:b}))};G.prototype.removeEventListener=
function(a,b){if(a&&b&&this._eventListeners[a])for(var c=this._eventListeners[a],d=0;d<c.length;d++)if(c[d].eventHandler===b){c[d].splice(d,1);break}};G.prototype.removeAllEventListeners=function(){this._eventListeners=[]};G.prototype.dispatchEvent=function(a,b,c){if(a&&this._eventListeners[a]){b=b||{};for(var d=this._eventListeners[a],e=0;e<d.length;e++)d[e].eventHandler.call(d[e].context,b)}"function"===typeof this[a]&&this[a].call(c||this.chart._publicChartReference,b)};O(u,G);u.prototype._updateOptions=
function(){var a=this;this.updateOption("width");this.updateOption("height");this.updateOption("dataPointWidth");this.updateOption("dataPointMinWidth");this.updateOption("dataPointMaxWidth");this.updateOption("interactivityEnabled");this.updateOption("theme");this.updateOption("colorSet")&&(this._selectedColorSet="undefined"!==typeof W[this.colorSet]?W[this.colorSet]:W.colorSet1);this.updateOption("backgroundColor");this.backgroundColor||(this.backgroundColor="rgba(0,0,0,0)");this.updateOption("culture");
this._cultureInfo=new ca(this._options.culture);this.updateOption("animationEnabled");this.animationEnabled=this.animationEnabled&&t;this.updateOption("animationDuration");this.updateOption("rangeChanging");this.updateOption("rangeChanged");this.updateOption("exportEnabled");this.updateOption("exportFileName");this.updateOption("zoomType");this._options.zoomEnabled?(this._zoomButton||(S(this._zoomButton=document.createElement("button")),Q(this,this._zoomButton,"pan"),this._toolBar.appendChild(this._zoomButton),
F(this._zoomButton,"click",function(){a.zoomEnabled?(a.zoomEnabled=!1,a.panEnabled=!0,Q(a,a._zoomButton,"zoom")):(a.zoomEnabled=!0,a.panEnabled=!1,Q(a,a._zoomButton,"pan"));a.render()})),this._resetButton||(S(this._resetButton=document.createElement("button")),Q(this,this._resetButton,"reset"),this._toolBar.appendChild(this._resetButton),F(this._resetButton,"click",function(){a._toolTip.hide();a.zoomEnabled||a.panEnabled?(a.zoomEnabled=!0,a.panEnabled=!1,Q(a,a._zoomButton,"pan"),a._defaultCursor=
"default",a.overlaidCanvas.style.cursor=a._defaultCursor):(a.zoomEnabled=!1,a.panEnabled=!1);a.sessionVariables.axisX&&(a.sessionVariables.axisX.newViewportMinimum=null,a.sessionVariables.axisX.newViewportMaximum=null);a.sessionVariables.axisY&&(a.sessionVariables.axisY.newViewportMinimum=null,a.sessionVariables.axisY.newViewportMaximum=null);a.sessionVariables.axisY2&&(a.sessionVariables.axisY2.newViewportMinimum=null,a.sessionVariables.axisY2.newViewportMaximum=null);a.resetOverlayedCanvas();S(a._zoomButton,
a._resetButton);a._dispatchRangeEvent("rangeChanging","reset");a.render();a._dispatchRangeEvent("rangeChanged","reset")}),this.overlaidCanvas.style.cursor=a._defaultCursor),this.zoomEnabled||this.panEnabled||(this._zoomButton?(a._zoomButton.getAttribute("state")===a._cultureInfo.zoomText?(this.panEnabled=!0,this.zoomEnabled=!1):(this.zoomEnabled=!0,this.panEnabled=!1),ha(a._zoomButton,a._resetButton)):(this.zoomEnabled=!0,this.panEnabled=!1))):this.panEnabled=this.zoomEnabled=!1;this._menuButton?
this.exportEnabled?ha(this._menuButton):S(this._menuButton):this.exportEnabled&&t&&(this._menuButton=document.createElement("button"),Q(this,this._menuButton,"menu"),this._toolBar.appendChild(this._menuButton),F(this._menuButton,"click",function(){"none"!==a._dropdownMenu.style.display||a._dropDownCloseTime&&500>=(new Date).getTime()-a._dropDownCloseTime.getTime()||(a._dropdownMenu.style.display="block",a._menuButton.blur(),a._dropdownMenu.focus())},!0));if(!this._dropdownMenu&&this.exportEnabled&&
t){this._dropdownMenu=document.createElement("div");this._dropdownMenu.setAttribute("tabindex",-1);this._dropdownMenu.style.cssText="position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 1px;top: 25px;min-width: 120px;outline: 0;border: 1px solid silver;font-size: 14px;font-family: Calibri, Verdana, sans-serif;padding: 5px 0px 5px 0px;text-align: left;background-color: #fff;line-height: 20px;box-shadow: 2px 2px 10px #888888;";
a._dropdownMenu.style.display="none";this._toolBar.appendChild(this._dropdownMenu);F(this._dropdownMenu,"blur",function(){S(a._dropdownMenu);a._dropDownCloseTime=new Date},!0);var b=document.createElement("div");b.style.cssText="padding: 2px 15px 2px 10px";b.innerHTML=this._cultureInfo.saveJPGText;this._dropdownMenu.appendChild(b);F(b,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);F(b,"mouseout",function(){this.style.backgroundColor="transparent"},!0);F(b,"click",function(){za(a.canvas,
"jpeg",a.exportFileName);S(a._dropdownMenu)},!0);b=document.createElement("div");b.style.cssText="padding: 2px 15px 2px 10px";b.innerHTML=this._cultureInfo.savePNGText;this._dropdownMenu.appendChild(b);F(b,"mouseover",function(){this.style.backgroundColor="#EEEEEE"},!0);F(b,"mouseout",function(){this.style.backgroundColor="transparent"},!0);F(b,"click",function(){za(a.canvas,"png",a.exportFileName);S(a._dropdownMenu)},!0)}"none"!==this._toolBar.style.display&&this._zoomButton&&(this.panEnabled?Q(a,
a._zoomButton,"zoom"):Q(a,a._zoomButton,"pan"),a._resetButton.getAttribute("state")!==a._cultureInfo.resetText&&Q(a,a._resetButton,"reset"));if("undefined"===typeof ma.Chart.creditHref)this.creditHref="",this.creditText="";else var c=this.updateOption("creditText"),d=this.updateOption("creditHref");if(0===this.renderCount||c||d)this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText;this.creditHref&&this.creditText?this._creditLink.parentElement||
this._canvasJSContainer.appendChild(this._creditLink):this._creditLink.parentElement&&this._canvasJSContainer.removeChild(this._creditLink);this._options.toolTip&&this._toolTip._options!==this._options.toolTip&&(this._toolTip._options=this._options.toolTip);for(var e in this._toolTip._options)this._toolTip._options.hasOwnProperty(e)&&this._toolTip.updateOption(e)};u.prototype._updateSize=function(){var a=0,b=0;this._options.width?a=this.width:this.width=a=0<this._container.clientWidth?this._container.clientWidth:
this.width;this._options.height?b=this.height:this.height=b=0<this._container.clientHeight?this._container.clientHeight:this.height;return this.canvas.width!==a*J||this.canvas.height!==b*J?(fa(this.canvas,a,b),fa(this.overlaidCanvas,a,b),fa(this._eventManager.ghostCanvas,a,b),!0):!1};u.prototype._initialize=function(){this._animator?this._animator.cancelAllAnimations():this._animator=new qa(this);this.removeAllEventListeners();this.disableToolTip=!1;this._axes=[];this.pieDoughnutClickHandler=null;
this.animationRequestId&&this.cancelRequestAnimFrame.call(window,this.animationRequestId);this._updateOptions();this.animatedRender=t&&this.animationEnabled&&0===this.renderCount;this._updateSize();this.clearCanvas();this.ctx.beginPath();this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager=new Z(0,0,this.width,this.height,
2);this.plotArea.layoutManager&&this.plotArea.layoutManager.reset();this.data=[];for(var a=0,b=0;b<this._options.data.length;b++)if(a++,!this._options.data[b].type||0<=u._supportedChartTypes.indexOf(this._options.data[b].type)){var c=new T(this,this._options.data[b],this.theme,a-1,++this._eventManager.lastObjectId);null===c.name&&(c.name="DataSeries "+a);null===c.color?1<this._options.data.length?(c._colorSet=[this._selectedColorSet[c.index%this._selectedColorSet.length]],c.color=this._selectedColorSet[c.index%
this._selectedColorSet.length]):c._colorSet="line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type||"candlestick"===c.type||"ohlc"===c.type?[this._selectedColorSet[0]]:this._selectedColorSet:c._colorSet=[c.color];null===c.markerSize&&(("line"===c.type||"stepLine"===c.type||"spline"===c.type)&&c.dataPoints&&c.dataPoints.length<this.width/
16||"scatter"===c.type)&&(c.markerSize=8);"bubble"!==c.type&&"scatter"!==c.type||!c.dataPoints||(c.dataPoints.some?c.dataPoints.some(function(a){return a.x})&&c.dataPoints.sort(va):c.dataPoints.sort(va));this.data.push(c);var d=c.axisPlacement,e;"normal"===d?"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement=
"normal"):"xySwapped"===d?"normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==d&&("normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+c.type+
'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(e&&window.console){window.console.log(e);return}}this._objectsInitialized=!0};u._supportedChartTypes=function(a){a.indexOf||(a.indexOf=Ea);return a}("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc rangeColumn rangeBar rangeArea rangeSplineArea pie doughnut funnel".split(" "));u.prototype.render=
function(a){a&&(this._options=a);this._initialize();var b=[];for(a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.data[a].axisYType&&"primary"!==this.data[a].axisYType?"secondary"===this.data[a].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY2=new C(this,this._options.axisY2,"axisY","right")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY2=new C(this,this._options.axisY2,
"axisY","top"))),this.data[a].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisY=new C(this,this._options.axisY,"axisY","left")):"xySwapped"===this.plotInfo.axisPlacement&&this._axes.push(this.axisY=new C(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?this._axes.push(this.axisX=new C(this,this._options.axisX,"axisX","bottom")):"xySwapped"===this.plotInfo.axisPlacement&&
this._axes.push(this.axisX=new C(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this.axisY&&this.axisY2&&(0<this.axisY.gridThickness&&"undefined"===typeof this.axisY2._options.gridThickness?this.axisY2.gridThickness=0:0<this.axisY2.gridThickness&&"undefined"===typeof this.axisY._options.gridThickness&&(this.axisY.gridThickness=0));var c=!1;if(0<this._axes.length&&(this.zoomEnabled||this.panEnabled))for(a=0;a<this._axes.length;a++)if(null!==this._axes[a].viewportMinimum||
null!==this._axes[a].viewportMaximum){c=!0;break}c?ha(this._zoomButton,this._resetButton):(S(this._zoomButton,this._resetButton),this._options.zoomEnabled&&(this.zoomEnabled=!0,this.panEnabled=!1));this._processData();this._options.title&&(this._title=new ba(this,this._options.title),this._title.dockInsidePlotArea?b.push(this._title):this._title.render());if(this._options.subtitles)for(a=0;a<this._options.subtitles.length;a++)this.subtitles=[],c=new ja(this,this._options.subtitles[a]),this.subtitles.push(c),
c.dockInsidePlotArea?b.push(c):c.render();this.legend=new ka(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)(this.data[a].showInLegend||"pie"===this.data[a].type||"doughnut"===this.data[a].type)&&this.legend.dataSeries.push(this.data[a]);this.legend.dockInsidePlotArea?b.push(this.legend):this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)C.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());
else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<b.length;a++)b[a].render();var d=[];if(this.animatedRender){var e=V(this.width,this.height);e.getContext("2d").drawImage(this.canvas,0,0,this.width,this.height)}for(a=0;a<this.plotInfo.plotTypes.length;a++)for(b=this.plotInfo.plotTypes[a],c=0;c<b.plotUnits.length;c++){var f=b.plotUnits[c],g=null;f.targetCanvas=null;this.animatedRender&&(f.targetCanvas=V(this.width,this.height),f.targetCanvasCtx=f.targetCanvas.getContext("2d"));
"line"===f.type?g=this.renderLine(f):"stepLine"===f.type?g=this.renderStepLine(f):"spline"===f.type?g=this.renderSpline(f):"column"===f.type?g=this.renderColumn(f):"bar"===f.type?g=this.renderBar(f):"area"===f.type?g=this.renderArea(f):"stepArea"===f.type?g=this.renderStepArea(f):"splineArea"===f.type?g=this.renderSplineArea(f):"stackedColumn"===f.type?g=this.renderStackedColumn(f):"stackedColumn100"===f.type?g=this.renderStackedColumn100(f):"stackedBar"===f.type?g=this.renderStackedBar(f):"stackedBar100"===
f.type?g=this.renderStackedBar100(f):"stackedArea"===f.type?g=this.renderStackedArea(f):"stackedArea100"===f.type?g=this.renderStackedArea100(f):"bubble"===f.type?g=g=this.renderBubble(f):"scatter"===f.type?g=this.renderScatter(f):"pie"===f.type?this.renderPie(f):"doughnut"===f.type?this.renderPie(f):"candlestick"===f.type?g=this.renderCandlestick(f):"ohlc"===f.type?g=this.renderCandlestick(f):"rangeColumn"===f.type?g=this.renderRangeColumn(f):"rangeBar"===f.type?g=this.renderRangeBar(f):"rangeArea"===
f.type?g=this.renderRangeArea(f):"rangeSplineArea"===f.type&&(g=this.renderRangeSplineArea(f));for(var k=0;k<f.dataSeriesIndexes.length;k++)this._dataInRenderedOrder.push(this.data[f.dataSeriesIndexes[k]]);this.animatedRender&&g&&d.push(g)}this.animatedRender&&0<this._indexLabels.length&&(a=V(this.width,this.height).getContext("2d"),d.push(this.renderIndexLabels(a)));var p=this;0<d.length?(p.disableToolTip=!0,p._animator.animate(200,p.animationDuration,function(a){p.ctx.clearRect(0,0,p.width,p.height);
p.ctx.drawImage(e,0,0,Math.floor(p.width*J),Math.floor(p.height*J),0,0,p.width,p.height);for(var c=0;c<d.length;c++)g=d[c],1>a&&"undefined"!==typeof g.startTimePercent?a>=g.startTimePercent&&g.animationCallback(g.easingFunction(a-g.startTimePercent,0,1,1-g.startTimePercent),g):g.animationCallback(g.easingFunction(a,0,1,1),g);p.dispatchEvent("dataAnimationIterationEnd",{chart:p})},function(){d=[];for(var a=0;a<p.plotInfo.plotTypes.length;a++)for(var c=p.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++)c.plotUnits[b].targetCanvas=
null;e=null;p.disableToolTip=!1})):(0<p._indexLabels.length&&p.renderIndexLabels(),p.dispatchEvent("dataAnimationIterationEnd",{chart:p}));this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||!this._zoomButton||"none"===this._zoomButton.style.display)||S(this._zoomButton,this._resetButton);this._toolTip._updateToolTip();this.renderCount++};u.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,
mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};u.prototype.categoriseDataSeries=function(){for(var a="",b=0;b<this.data.length;b++)if(a=this.data[b],a.dataPoints&&(0!==a.dataPoints.length&&a.visible)&&0<=u._supportedChartTypes.indexOf(a.type)){for(var c=null,d=!1,e=null,f=!1,g=0;g<this.plotInfo.plotTypes.length;g++)if(this.plotInfo.plotTypes[g].type===a.type){d=!0;c=this.plotInfo.plotTypes[g];
break}d||(c={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(c));for(g=0;g<c.plotUnits.length;g++)if(c.plotUnits[g].axisYType===a.axisYType){f=!0;e=c.plotUnits[g];break}f||(e={type:a.type,previousDataSeriesCount:0,index:c.plotUnits.length,plotType:c,axisYType:a.axisYType,axisY:"primary"===a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[],yTotals:[]},c.plotUnits.push(e));c.totalDataSeries++;e.dataSeriesIndexes.push(b);a.plotUnit=e}for(b=0;b<this.plotInfo.plotTypes.length;b++)for(c=
this.plotInfo.plotTypes[b],g=a=0;g<c.plotUnits.length;g++)c.plotUnits[g].previousDataSeriesCount=a,a+=c.plotUnits[g].dataSeriesIndexes.length};u.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var b=this.data[a];if(b.dataPoints)for(var c=b.dataPoints.length,d=0;d<c;d++)b.dataPointIds[d]=++this._eventManager.lastObjectId}};u.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var b=
this.plotInfo.plotTypes[a],c=0;c<b.plotUnits.length;c++){var d=b.plotUnits[c];"line"===d.type||"stepLine"===d.type||"spline"===d.type||"column"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"bar"===d.type||"bubble"===d.type||"scatter"===d.type?this._processMultiseriesPlotUnit(d):"stackedColumn"===d.type||"stackedBar"===d.type||"stackedArea"===d.type?this._processStackedPlotUnit(d):"stackedColumn100"===d.type||"stackedBar100"===d.type||"stackedArea100"===d.type?this._processStacked100PlotUnit(d):
"candlestick"!==d.type&&"ohlc"!==d.type&&"rangeColumn"!==d.type&&"rangeBar"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==d.type||this._processMultiYPlotUnit(d)}};u.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f=!1,g=0;g<a.dataSeriesIndexes.length;g++){var k=this.data[a.dataSeriesIndexes[g]],p=0,h=!1,l=!1;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var m=this.sessionVariables.axisX.newViewportMinimum?
this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,n=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;
if(k.dataPoints[p].x&&k.dataPoints[p].x.getTime||"dateTime"===k.xValueType)f=!0;for(p=0;p<k.dataPoints.length;p++){"undefined"===typeof k.dataPoints[p].x&&(k.dataPoints[p].x=p);k.dataPoints[p].x.getTime?(f=!0,d=k.dataPoints[p].x.getTime()):d=k.dataPoints[p].x;e=k.dataPoints[p].y;d<c.min&&(c.min=d);d>c.max&&(c.max=d);e<b.min&&(b.min=e);e>b.max&&(b.max=e);if(0<p){var q=d-k.dataPoints[p-1].x;0>q&&(q*=-1);c.minDiff>q&&0!==q&&(c.minDiff=q);null!==e&&null!==k.dataPoints[p-1].y&&(q=e-k.dataPoints[p-1].y,
0>q&&(q*=-1),b.minDiff>q&&0!==q&&(b.minDiff=q))}if(!(d<m)||h){if(!h&&(h=!0,0<p)){p-=2;continue}if(d>n&&!l)l=!0;else if(d>n&&l)continue;k.dataPoints[p].label&&(a.axisX.labels[d]=k.dataPoints[p].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&(c.viewPortMax=d);null!==e&&(e<b.viewPortMin&&(b.viewPortMin=e),e>b.viewPortMax&&(b.viewPortMax=e))}}this.plotInfo.axisXValueType=k.xValueType=f?"dateTime":"number"}};u.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var b=
a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f=!1,g=[],k=[],p=Infinity,h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],m=0,n=!1,q=!1;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var r=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,s=
this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(l.dataPoints[m].x&&l.dataPoints[m].x.getTime||"dateTime"===l.xValueType)f=!0;for(m=0;m<l.dataPoints.length;m++){"undefined"===typeof l.dataPoints[m].x&&(l.dataPoints[m].x=m);l.dataPoints[m].x.getTime?(f=!0,d=l.dataPoints[m].x.getTime()):
d=l.dataPoints[m].x;P(l.dataPoints[m].y)?e=0:(e=l.dataPoints[m].y,0===h&&(p=Math.min(e,p)));d<c.min&&(c.min=d);d>c.max&&(c.max=d);if(0<m){var w=d-l.dataPoints[m-1].x;0>w&&(w*=-1);c.minDiff>w&&0!==w&&(c.minDiff=w);null!==e&&null!==l.dataPoints[m-1].y&&(w=e-l.dataPoints[m-1].y,0>w&&(w*=-1),b.minDiff>w&&0!==w&&(b.minDiff=w))}if(!(d<r)||n){if(!n&&(n=!0,0<m)){m-=2;continue}if(d>s&&!q)q=!0;else if(d>s&&q)continue;l.dataPoints[m].label&&(a.axisX.labels[d]=l.dataPoints[m].label);d<c.viewPortMin&&(c.viewPortMin=
d);d>c.viewPortMax&&(c.viewPortMax=d);null!==e&&(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g[d]=g[d]?g[d]+e:e:k[d]=k[d]?k[d]+e:e)}}this.plotInfo.axisXValueType=l.xValueType=f?"dateTime":"number"}for(m in g)g.hasOwnProperty(m)&&!isNaN(m)&&(a=g[m],a<b.min&&(b.min=Math.min(a,p)),a>b.max&&(b.max=a),m<c.viewPortMin||m>c.viewPortMax||(a<b.viewPortMin&&(b.viewPortMin=Math.min(a,p)),a>b.viewPortMax&&(b.viewPortMax=a)));for(m in k)k.hasOwnProperty(m)&&!isNaN(m)&&(a=k[m],a<b.min&&(b.min=Math.min(a,
p)),a>b.max&&(b.max=a),m<c.viewPortMin||m>c.viewPortMax||(a<b.viewPortMin&&(b.viewPortMin=Math.min(a,p)),a>b.viewPortMax&&(b.viewPortMax=a)))}};u.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f=!1,g=!1,k=!1,p=[],h=0;h<a.dataSeriesIndexes.length;h++){var l=this.data[a.dataSeriesIndexes[h]],m=0,n=!1,q=!1;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var r=this.sessionVariables.axisX.newViewportMinimum?
this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,s=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;
if(l.dataPoints[m].x&&l.dataPoints[m].x.getTime||"dateTime"===l.xValueType)f=!0;for(m=0;m<l.dataPoints.length;m++){"undefined"===typeof l.dataPoints[m].x&&(l.dataPoints[m].x=m);l.dataPoints[m].x.getTime?(f=!0,d=l.dataPoints[m].x.getTime()):d=l.dataPoints[m].x;e=P(l.dataPoints[m].y)?null:l.dataPoints[m].y;d<c.min&&(c.min=d);d>c.max&&(c.max=d);if(0<m){var w=d-l.dataPoints[m-1].x;0>w&&(w*=-1);c.minDiff>w&&0!==w&&(c.minDiff=w);P(e)||null===l.dataPoints[m-1].y||(w=e-l.dataPoints[m-1].y,0>w&&(w*=-1),b.minDiff>
w&&0!==w&&(b.minDiff=w))}if(!(d<r)||n){if(!n&&(n=!0,0<m)){m-=2;continue}if(d>s&&!q)q=!0;else if(d>s&&q)continue;l.dataPoints[m].label&&(a.axisX.labels[d]=l.dataPoints[m].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&(c.viewPortMax=d);null!==e&&(a.yTotals[d]=(a.yTotals[d]?a.yTotals[d]:0)+Math.abs(e),0<=e?g=!0:0>e&&(k=!0),p[d]=p[d]?p[d]+Math.abs(e):Math.abs(e))}}this.plotInfo.axisXValueType=l.xValueType=f?"dateTime":"number"}g&&!k?(b.max=P(b.viewPortMax)?99:Math.max(b.viewPortMax,99),b.min=
P(b.viewPortMin)?1:Math.min(b.viewPortMin,1)):g&&k?(b.max=P(b.viewPortMax)?99:Math.max(b.viewPortMax,99),b.min=P(b.viewPortMin)?-99:Math.min(b.viewPortMin,-99)):!g&&k&&(b.max=P(b.viewPortMax)?-1:Math.max(b.viewPortMax,-1),b.min=P(b.viewPortMin)?-99:Math.min(b.viewPortMin,-99));b.viewPortMin=b.min;b.viewPortMax=b.max;a.dataPointYSums=p}};u.prototype._processMultiYPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var b=a.axisY.dataInfo,c=a.axisX.dataInfo,d,e,f,g,k=!1,
p=0;p<a.dataSeriesIndexes.length;p++){var h=this.data[a.dataSeriesIndexes[p]],l=0,m=!1,n=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var q=this.sessionVariables.axisX.newViewportMinimum?this.sessionVariables.axisX.newViewportMinimum:this._options.axisX&&this._options.axisX.viewportMinimum?this._options.axisX.viewportMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,r=this.sessionVariables.axisX.newViewportMaximum?this.sessionVariables.axisX.newViewportMaximum:
this._options.axisX&&this._options.axisX.viewportMaximum?this._options.axisX.viewportMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(h.dataPoints[l].x&&h.dataPoints[l].x.getTime||"dateTime"===h.xValueType)k=!0;for(l=0;l<h.dataPoints.length;l++){"undefined"===typeof h.dataPoints[l].x&&(h.dataPoints[l].x=l);h.dataPoints[l].x.getTime?(k=!0,d=h.dataPoints[l].x.getTime()):d=h.dataPoints[l].x;(e=h.dataPoints[l].y)&&e.length&&(f=Math.min.apply(null,e),g=Math.max.apply(null,
e));d<c.min&&(c.min=d);d>c.max&&(c.max=d);f<b.min&&(b.min=f);g>b.max&&(b.max=g);if(0<l){var s=d-h.dataPoints[l-1].x;0>s&&(s*=-1);c.minDiff>s&&0!==s&&(c.minDiff=s);null!==e[0]&&null!==h.dataPoints[l-1].y[0]&&(s=e[0]-h.dataPoints[l-1].y[0],0>s&&(s*=-1),b.minDiff>s&&0!==s&&(b.minDiff=s))}if(!(d<q)||m){if(!m&&(m=!0,0<l)){l-=2;continue}if(d>r&&!n)n=!0;else if(d>r&&n)continue;h.dataPoints[l].label&&(a.axisX.labels[d]=h.dataPoints[l].label);d<c.viewPortMin&&(c.viewPortMin=d);d>c.viewPortMax&&(c.viewPortMax=
d);null!==e&&(f<b.viewPortMin&&(b.viewPortMin=f),g>b.viewPortMax&&(b.viewPortMax=g))}}this.plotInfo.axisXValueType=h.xValueType=k?"dateTime":"number"}};u.prototype.getDataPointAtXY=function(a,b,c){c=c||!1;for(var d=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var f=null;(f=this._dataInRenderedOrder[e].getDataPointAtXY(a,b,c))&&d.push(f)}a=null;b=!1;for(c=0;c<d.length;c++)if("line"===d[c].dataSeries.type||"stepLine"===d[c].dataSeries.type||"area"===d[c].dataSeries.type||"stepArea"===d[c].dataSeries.type)if(e=
N("markerSize",d[c].dataPoint,d[c].dataSeries)||8,d[c].distance<=e/2){b=!0;break}for(c=0;c<d.length;c++)b&&"line"!==d[c].dataSeries.type&&"stepLine"!==d[c].dataSeries.type&&"area"!==d[c].dataSeries.type&&"stepArea"!==d[c].dataSeries.type||(a?d[c].distance<=a.distance&&(a=d[c]):a=d[c]);return a};u.prototype.getObjectAtXY=function(a,b,c){var d=null;if(c=this.getDataPointAtXY(a,b,c||!1))d=c.dataSeries.dataPointIds[c.dataPointIndex];else if(t)d=xa(a,b,this._eventManager.ghostCtx);else for(c=0;c<this.legend.items.length;c++){var e=
this.legend.items[c];a>=e.x1&&(a<=e.x2&&b>=e.y1&&b<=e.y2)&&(d=e.id)}return d};u.prototype.getAutoFontSize=function(a,b,c){a/=400;return Math.round(Math.min(this.width,this.height)*a)};u.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};u.prototype.clearCanvas=function(){this.ctx.clearRect(0,0,this.width,this.height);this.backgroundColor&&(this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height))};u.prototype.attachEvent=
function(a){this._events.push(a)};u.prototype._touchEventHandler=function(a){if(a.changedTouches&&this.interactivityEnabled){var b=[],c=a.changedTouches,d=c?c[0]:a,e=null;switch(a.type){case "touchstart":case "MSPointerDown":b=["mousemove","mousedown"];this._lastTouchData=na(d);this._lastTouchData.time=new Date;break;case "touchmove":case "MSPointerMove":b=["mousemove"];break;case "touchend":case "MSPointerUp":b="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup",
"click"]:["mouseup"];break;default:return}if(!(c&&1<c.length)){e=na(d);e.time=new Date;try{var f=e.y-this._lastTouchData.y,g=e.time-this._lastTouchData.time;if(15<Math.abs(f)&&(this._lastTouchData.scroll||200>g)){this._lastTouchData.scroll=!0;var k=window.parent||window;k&&k.scrollBy&&k.scrollBy(0,-f)}}catch(p){}this._lastTouchEventType=a.type;if(this._lastTouchData.scroll&&this.zoomEnabled)this.isDrag&&this.resetOverlayedCanvas(),this.isDrag=!1;else for(c=0;c<b.length;c++)e=b[c],f=document.createEvent("MouseEvent"),
f.initMouseEvent(e,!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),d.target.dispatchEvent(f),a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()}}};u.prototype._dispatchRangeEvent=function(a,b){var c={};c.chart=this._publicChartReference;c.type=a;c.trigger=b;var d=[];this.axisX&&d.push("axisX");this.axisY&&d.push("axisY");this.axisY2&&d.push("axisY2");for(var e=0;e<d.length;e++)c[d[e]]={viewportMinimum:this[d[e]].sessionVariables.newViewportMinimum,
viewportMaximum:this[d[e]].sessionVariables.newViewportMaximum};this.dispatchEvent(a,c,this._publicChartReference)};u.prototype._mouseEventHandler=function(a){if(this.interactivityEnabled)if(this._ignoreNextEvent)this._ignoreNextEvent=!1;else{a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault();"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var b=na(a),c=a.type,d,e;a.which?e=3==a.which:a.button&&(e=2==a.button);if(!e){if(u.capturedEventParam)d=
u.capturedEventParam,"mouseup"===c&&(u.capturedEventParam=null,d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",d.chart._mouseEventHandler,!1)),d.hasOwnProperty(c)&&d[c].call(d.context,b.x,b.y);else if(this._events){for(e=0;e<this._events.length;e++)if(this._events[e].hasOwnProperty(c)){d=this._events[e];var f=d.bounds;if(b.x>=f.x1&&b.x<=f.x2&&b.y>=f.y1&&b.y<=f.y2){d[c].call(d.context,b.x,b.y);"mousedown"===c&&!0===d.capture?
(u.capturedEventParam=d,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===c&&(d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else d=null}a.target.style.cursor=d&&d.cursor?d.cursor:this._defaultCursor}this._toolTip&&this._toolTip.enabled&&(c=this.plotArea,(b.x<c.x1||b.x>c.x2||b.y<c.y1||b.y>c.y2)&&
this._toolTip.hide());this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}}};u.prototype._plotAreaMouseDown=function(a,b){this.isDrag=!0;this.dragStartPoint={x:a,y:b}};u.prototype._plotAreaMouseUp=function(a,b){if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var c=b-this.dragStartPoint.y,d=a-this.dragStartPoint.x,e=0<=this.zoomType.indexOf("x"),f=0<=this.zoomType.indexOf("y"),g=!1;this.resetOverlayedCanvas();
if("xySwapped"===this.plotInfo.axisPlacement)var k=f,f=e,e=k;if(this.panEnabled||this.zoomEnabled){if(this.panEnabled)for(e=f=0;e<this._axes.length;e++)c=this._axes[e],c.viewportMinimum<c.minimum?(f=c.minimum-c.viewportMinimum,c.sessionVariables.newViewportMinimum=c.viewportMinimum+f,c.sessionVariables.newViewportMaximum=c.viewportMaximum+f,g=!0):c.viewportMaximum>c.maximum&&(f=c.viewportMaximum-c.maximum,c.sessionVariables.newViewportMinimum=c.viewportMinimum-f,c.sessionVariables.newViewportMaximum=
c.viewportMaximum-f,g=!0);else if((!e||2<Math.abs(d))&&(!f||2<Math.abs(c))&&this.zoomEnabled){if(!this.dragStartPoint)return;c=e?this.dragStartPoint.x:this.plotArea.x1;d=f?this.dragStartPoint.y:this.plotArea.y1;e=e?a:this.plotArea.x2;f=f?b:this.plotArea.y2;2<Math.abs(c-e)&&2<Math.abs(d-f)&&this._zoomPanToSelectedRegion(c,d,e,f)&&(g=!0)}g&&(this._ignoreNextEvent=!0,this._dispatchRangeEvent("rangeChanging","zoom"),this.render(),this._dispatchRangeEvent("rangeChanged","zoom"),g&&(this.zoomEnabled&&"none"===
this._zoomButton.style.display)&&(ha(this._zoomButton,this._resetButton),Q(this,this._zoomButton,"pan"),Q(this,this._resetButton,"reset")))}}this.isDrag=!1};u.prototype._plotAreaMouseMove=function(a,b){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var c=0,d=0,e=c=null,e=0<=this.zoomType.indexOf("x"),f=0<=this.zoomType.indexOf("y");"xySwapped"===this.plotInfo.axisPlacement&&(c=f,f=e,e=c);c=this.dragStartPoint.x-a;d=this.dragStartPoint.y-b;2<Math.abs(c)&&8>Math.abs(c)&&(this.panEnabled||this.zoomEnabled)?
this._toolTip.hide():this.panEnabled||this.zoomEnabled||this._toolTip.mouseMoveHandler(a,b);(!e||2<Math.abs(c)||!f||2<Math.abs(d))&&(this.panEnabled||this.zoomEnabled)&&(this.panEnabled?(e={x1:e?this.plotArea.x1+c:this.plotArea.x1,y1:f?this.plotArea.y1+d:this.plotArea.y1,x2:e?this.plotArea.x2+c:this.plotArea.x2,y2:f?this.plotArea.y2+d:this.plotArea.y2},this._zoomPanToSelectedRegion(e.x1,e.y1,e.x2,e.y2,!0)&&(this._dispatchRangeEvent("rangeChanging","pan"),this.render(),this._dispatchRangeEvent("rangeChanged",
"pan"),this.dragStartPoint.x=a,this.dragStartPoint.y=b)):this.zoomEnabled&&(this.resetOverlayedCanvas(),c=this.overlaidCanvasCtx.globalAlpha,this.overlaidCanvasCtx.globalAlpha=0.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8",this.overlaidCanvasCtx.fillRect(e?this.dragStartPoint.x:this.plotArea.x1,f?this.dragStartPoint.y:this.plotArea.y1,e?a-this.dragStartPoint.x:this.plotArea.x2-this.plotArea.x1,f?b-this.dragStartPoint.y:this.plotArea.y2-this.plotArea.y1),this.overlaidCanvasCtx.globalAlpha=c))}else this._toolTip.mouseMoveHandler(a,
b)};u.prototype._zoomPanToSelectedRegion=function(a,b,c,d,e){e=e||!1;var f=0<=this.zoomType.indexOf("x"),g=0<=this.zoomType.indexOf("y"),k=!1,p=[],h=[];this.axisX&&f&&p.push(this.axisX);this.axisY&&g&&p.push(this.axisY);this.axisY2&&g&&p.push(this.axisY2);f=[];for(g=0;g<p.length;g++){var l=p[g],m=l.convertPixelToValue({x:a,y:b}),n=l.convertPixelToValue({x:c,y:d});if(m>n)var q=n,n=m,m=q;if(isFinite(l.dataInfo.minDiff))if(!(Math.abs(n-m)<3*Math.abs(l.dataInfo.minDiff)||m<l.minimum||n>l.maximum))h.push(l),
f.push({val1:m,val2:n}),k=!0;else if(!e){k=!1;break}}if(k)for(g=0;g<h.length;g++)l=h[g],a=f[g],l.setViewPortRange(a.val1,a.val2);return k};u.prototype.preparePlotArea=function(){var a=this.plotArea,b=this.axisY?this.axisY:this.axisY2;!t&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);this.axisX&&b?(a.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:b.lineCoordinates.x1,a.y1=this.axisX.lineCoordinates.y1<b.lineCoordinates.y1?this.axisX.lineCoordinates.y1:b.lineCoordinates.y1,
a.x2=this.axisX.lineCoordinates.x2>b.lineCoordinates.x2?this.axisX.lineCoordinates.x2:b.lineCoordinates.x2,a.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:b.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1):(b=this.layoutManager.getFreeSpace(),a.x1=b.x1,a.x2=b.x2,a.y1=b.y1,a.y2=b.y2,a.width=b.width,a.height=b.height);t||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&
a.ctx.translate(-a.x1,-a.y1));a.layoutManager=new Z(a.x1,a.y1,a.x2,a.y2,2)};u.prototype.getPixelCoordinatesOnPlotArea=function(a,b){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(b).y}};u.prototype.renderIndexLabels=function(a){a=a||this.plotArea.ctx;for(var b=this.plotArea,c=0,d=0,e=0,f=0,g=0,k=d=f=e=0,p=0;p<this._indexLabels.length;p++){var h=this._indexLabels[p],g=h.chartType.toLowerCase(),l,m,n=N("indexLabelFontColor",h.dataPoint,h.dataSeries),k=N("indexLabelFontSize",
h.dataPoint,h.dataSeries);l=N("indexLabelFontFamily",h.dataPoint,h.dataSeries);m=N("indexLabelFontStyle",h.dataPoint,h.dataSeries);var f=N("indexLabelFontWeight",h.dataPoint,h.dataSeries),d=N("indexLabelBackgroundColor",h.dataPoint,h.dataSeries),e=N("indexLabelMaxWidth",h.dataPoint,h.dataSeries),q=N("indexLabelWrap",h.dataPoint,h.dataSeries),r={percent:null,total:null},s=null;if(0<=h.dataSeries.type.indexOf("stacked")||"pie"===h.dataSeries.type||"doughnut"===h.dataSeries.type)r=this.getPercentAndTotal(h.dataSeries,
h.dataPoint);if(h.dataSeries.indexLabelFormatter||h.dataPoint.indexLabelFormatter)s={chart:this._publicChartReference,dataSeries:h.dataSeries,dataPoint:h.dataPoint,index:h.indexKeyword,total:r.total,percent:r.percent};var w=h.dataPoint.indexLabelFormatter?h.dataPoint.indexLabelFormatter(s):h.dataPoint.indexLabel?this.replaceKeywordsWithValue(h.dataPoint.indexLabel,h.dataPoint,h.dataSeries,null,h.indexKeyword):h.dataSeries.indexLabelFormatter?h.dataSeries.indexLabelFormatter(s):h.dataSeries.indexLabel?
this.replaceKeywordsWithValue(h.dataSeries.indexLabel,h.dataPoint,h.dataSeries,null,h.indexKeyword):null;if(null!==w&&""!==w){var c=N("indexLabelPlacement",h.dataPoint,h.dataSeries),r=N("indexLabelOrientation",h.dataPoint,h.dataSeries),s=h.direction,v=h.dataSeries.axisX,x=h.dataSeries.axisY,n=new H(a,{x:0,y:0,maxWidth:e?e:0.5*this.width,maxHeight:q?5*k:1.5*k,angle:"horizontal"===r?0:-90,text:w,padding:0,backgroundColor:d,horizontalAlign:"left",fontSize:k,fontFamily:l,fontWeight:f,fontColor:n,fontStyle:m,
textBaseline:"top"});n.measureText();if(0<=g.indexOf("line")||0<=g.indexOf("area")||0<=g.indexOf("bubble")||0<=g.indexOf("scatter")){if(h.dataPoint.x<v.viewportMinimum||h.dataPoint.x>v.viewportMaximum||h.dataPoint.y<x.viewportMinimum||h.dataPoint.y>x.viewportMaximum)continue}else if(0<=g.indexOf("column")){if(h.dataPoint.x<v.viewportMinimum||h.dataPoint.x>v.viewportMaximum||h.bounds.y1>b.y2||h.bounds.y2<b.y1)continue}else if(0<=g.indexOf("bar")){if(h.dataPoint.x<v.viewportMinimum||h.dataPoint.x>v.viewportMaximum||
h.bounds.x1>b.x2||h.bounds.x2<b.x1)continue}else if(h.dataPoint.x<v.viewportMinimum||h.dataPoint.x>v.viewportMaximum)continue;e=f=2;"horizontal"===r?(d=n.width,k=n.height):(k=n.width,d=n.height);if("normal"===this.plotInfo.axisPlacement){if(0<=g.indexOf("line")||0<=g.indexOf("area"))c="auto",f=4;else if(0<=g.indexOf("stacked"))"auto"===c&&(c="inside");else if("bubble"===g||"scatter"===g)c="inside";l=h.point.x-d/2;"inside"!==c?(d=b.y1,e=b.y2,0<s?(m=h.point.y-k-f,m<d&&(m="auto"===c?Math.max(h.point.y,
d)+f:d+f)):(m=h.point.y+f,m>e-k-f&&(m="auto"===c?Math.min(h.point.y,e)-k-f:e-k-f))):(d=Math.max(h.bounds.y1,b.y1),e=Math.min(h.bounds.y2,b.y2),c=0<=g.indexOf("range")?0<s?Math.max(h.bounds.y1,b.y1)+k/2+f:Math.min(h.bounds.y2,b.y2)-k/2-f:(Math.max(h.bounds.y1,b.y1)+Math.min(h.bounds.y2,b.y2))/2,0<s?(m=Math.max(h.point.y,c)-k/2,m<d&&("bubble"===g||"scatter"===g)&&(m=Math.max(h.point.y-k-f,b.y1+f))):(m=Math.min(h.point.y,c)-k/2,m>e-k-f&&("bubble"===g||"scatter"===g)&&(m=Math.min(h.point.y+f,b.y2-k-f))),
m=Math.min(m,e-k))}else 0<=g.indexOf("line")||0<=g.indexOf("area")||0<=g.indexOf("scatter")?(c="auto",e=4):0<=g.indexOf("stacked")?"auto"===c&&(c="inside"):"bubble"===g&&(c="inside"),m=h.point.y-k/2,"inside"!==c?(f=b.x1,g=b.x2,0>s?(l=h.point.x-d-e,l<f&&(l="auto"===c?Math.max(h.point.x,f)+e:f+e)):(l=h.point.x+e,l>g-d-e&&(l="auto"===c?Math.min(h.point.x,g)-d-e:g-d-e))):(f=Math.max(h.bounds.x1,b.x1),Math.min(h.bounds.x2,b.x2),c=0<=g.indexOf("range")?0>s?Math.max(h.bounds.x1,b.x1)+d/2+e:Math.min(h.bounds.x2,
b.x2)-d/2-e:(Math.max(h.bounds.x1,b.x1)+Math.min(h.bounds.x2,b.x2))/2,l=0>s?Math.max(h.point.x,c)-d/2:Math.min(h.point.x,c)-d/2,l=Math.max(l,f));"vertical"===r&&(m+=k);n.x=l;n.y=m;n.render(!0)}}return{source:a,dest:this.plotArea.ctx,animationCallback:A.fadeInAnimation,easingFunction:A.easing.easeInQuad,animationBase:0,startTimePercent:0.7}};u.prototype.renderLine=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();
var d=this.plotArea;b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];b.lineWidth=g.lineThickness;var k=g.dataPoints;b.setLineDash&&b.setLineDash(M(g.lineDashType,g.lineThickness));var p=g.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:f};p=B(p);c.strokeStyle=p;c.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;p=g._colorSet[0];b.strokeStyle=p;var h=!0,l=0,m,
n;b.beginPath();if(0<k.length){for(var q=!1,l=0;l<k.length;l++)if(m=k[l].x.getTime?k[l].x.getTime():k[l].x,!(m<a.axisX.dataInfo.viewPortMin||m>a.axisX.dataInfo.viewPortMax))if("number"!==typeof k[l].y)0<l&&(b.stroke(),t&&c.stroke()),q=!0;else{m=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(m-a.axisX.conversionParameters.minimum)+0.5<<0;n=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(k[l].y-a.axisY.conversionParameters.minimum)+
0.5<<0;var r=g.dataPointIds[l];this._eventManager.objectMap[r]={id:r,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:l,x1:m,y1:n};h||q?(b.beginPath(),b.moveTo(m,n),t&&(c.beginPath(),c.moveTo(m,n)),q=h=!1):(b.lineTo(m,n),t&&c.lineTo(m,n),0==l%500&&(b.stroke(),b.beginPath(),b.moveTo(m,n),t&&(c.stroke(),c.beginPath(),c.moveTo(m,n))));if(0<k[l].markerSize||0<g.markerSize){var s=g.getMarkerProperties(l,m,n,b);d.push(s);r=B(r);t&&d.push({x:m,y:n,ctx:c,type:s.type,size:s.size,color:r,borderColor:r,
borderThickness:s.borderThickness})}(k[l].indexLabel||g.indexLabel||k[l].indexLabelFormatter||g.indexLabelFormatter)&&this._indexLabels.push({chartType:"line",dataPoint:k[l],dataSeries:g,point:{x:m,y:n},direction:0<=k[l].y?1:-1,color:p})}b.stroke();t&&c.stroke()}}K.drawMarkers(d);b.restore();b.beginPath();t&&c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderStepLine=function(a){var b=a.targetCanvasCtx||
this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=this._eventManager.ghostCtx;b.save();var d=this.plotArea;b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];b.lineWidth=g.lineThickness;var k=g.dataPoints;b.setLineDash&&b.setLineDash(M(g.lineDashType,g.lineThickness));var p=g.id;this._eventManager.objectMap[p]={objectType:"dataSeries",dataSeriesIndex:f};p=B(p);c.strokeStyle=p;c.lineWidth=
0<g.lineThickness?Math.max(g.lineThickness,4):0;p=g._colorSet[0];b.strokeStyle=p;var h=!0,l=0,m,n;b.beginPath();if(0<k.length){for(var q=!1,l=0;l<k.length;l++)if(m=k[l].getTime?k[l].x.getTime():k[l].x,!(m<a.axisX.dataInfo.viewPortMin||m>a.axisX.dataInfo.viewPortMax))if("number"!==typeof k[l].y)0<l&&(b.stroke(),t&&c.stroke()),q=!0;else{var r=n;m=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(m-a.axisX.conversionParameters.minimum)+0.5<<0;n=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(k[l].y-a.axisY.conversionParameters.minimum)+0.5<<0;var s=g.dataPointIds[l];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:l,x1:m,y1:n};h||q?(b.beginPath(),b.moveTo(m,n),t&&(c.beginPath(),c.moveTo(m,n)),q=h=!1):(b.lineTo(m,r),t&&c.lineTo(m,r),b.lineTo(m,n),t&&c.lineTo(m,n),0==l%500&&(b.stroke(),b.beginPath(),b.moveTo(m,n),t&&(c.stroke(),c.beginPath(),c.moveTo(m,n))));if(0<k[l].markerSize||0<g.markerSize)r=g.getMarkerProperties(l,
m,n,b),d.push(r),s=B(s),t&&d.push({x:m,y:n,ctx:c,type:r.type,size:r.size,color:s,borderColor:s,borderThickness:r.borderThickness});(k[l].indexLabel||g.indexLabel||k[l].indexLabelFormatter||g.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepLine",dataPoint:k[l],dataSeries:g,point:{x:m,y:n},direction:0<=k[l].y?1:-1,color:p})}b.stroke();t&&c.stroke()}}K.drawMarkers(d);b.restore();b.beginPath();t&&c.beginPath();return{source:b,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,
animationBase:0}}};u.prototype.renderSpline=function(a){function b(a){a=ia(a,2);if(0<a.length){c.beginPath();t&&d.beginPath();c.moveTo(a[0].x,a[0].y);t&&d.moveTo(a[0].x,a[0].y);for(var b=0;b<a.length-3;b+=3)c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),t&&d.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y),0<b&&0===b%3E3&&(c.stroke(),c.beginPath(),c.moveTo(a[b+3].x,a[b+3].y),t&&(d.stroke(),d.beginPath(),d.moveTo(a[b+3].x,a[b+3].y)));c.stroke();t&&d.stroke()}}
var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx;c.save();var e=this.plotArea;c.beginPath();c.rect(e.x1,e.y1,e.width,e.height);c.clip();for(var e=[],f=0;f<a.dataSeriesIndexes.length;f++){var g=a.dataSeriesIndexes[f],k=this.data[g];c.lineWidth=k.lineThickness;var p=k.dataPoints;c.setLineDash&&c.setLineDash(M(k.lineDashType,k.lineThickness));var h=k.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:g};h=B(h);
d.strokeStyle=h;d.lineWidth=0<k.lineThickness?Math.max(k.lineThickness,4):0;h=k._colorSet[0];c.strokeStyle=h;var l=0,m,n,q=[];c.beginPath();if(0<p.length)for(l=0;l<p.length;l++)if(m=p[l].getTime?p[l].x.getTime():p[l].x,!(m<a.axisX.dataInfo.viewPortMin||m>a.axisX.dataInfo.viewPortMax))if("number"!==typeof p[l].y)0<l&&(b(q),q=[]);else{m=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(m-a.axisX.conversionParameters.minimum)+0.5<<0;n=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(p[l].y-a.axisY.conversionParameters.minimum)+0.5<<0;var r=k.dataPointIds[l];this._eventManager.objectMap[r]={id:r,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:l,x1:m,y1:n};q[q.length]={x:m,y:n};if(0<p[l].markerSize||0<k.markerSize){var s=k.getMarkerProperties(l,m,n,c);e.push(s);r=B(r);t&&e.push({x:m,y:n,ctx:d,type:s.type,size:s.size,color:r,borderColor:r,borderThickness:s.borderThickness})}(p[l].indexLabel||k.indexLabel||p[l].indexLabelFormatter||
k.indexLabelFormatter)&&this._indexLabels.push({chartType:"spline",dataPoint:p[l],dataSeries:k,point:{x:m,y:n},direction:0<=p[l].y?1:-1,color:h})}b(q)}K.drawMarkers(e);c.restore();c.beginPath();t&&d.beginPath();return{source:c,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};var I=function(a,b,c,d,e,f,g,k,p,h,l,m,n){"undefined"===typeof n&&(n=1);g=g||0;k=k||"black";var q=15<d-b&&15<e-c?8:0.35*Math.min(d-b,e-c);a.beginPath();a.moveTo(b,c);
a.save();a.fillStyle=f;a.globalAlpha=n;a.fillRect(b,c,d-b,e-c);a.globalAlpha=1;0<g&&(n=0===g%2?0:0.5,a.beginPath(),a.lineWidth=g,a.strokeStyle=k,a.moveTo(b,c),a.rect(b-n,c-n,d-b+2*n,e-c+2*n),a.stroke());a.restore();!0===p&&(a.save(),a.beginPath(),a.moveTo(b,c),a.lineTo(b+q,c+q),a.lineTo(d-q,c+q),a.lineTo(d,c),a.closePath(),g=a.createLinearGradient((d+b)/2,c+q,(d+b)/2,c),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===h&&(a.save(),a.beginPath(),
a.moveTo(b,e),a.lineTo(b+q,e-q),a.lineTo(d-q,e-q),a.lineTo(d,e),a.closePath(),g=a.createLinearGradient((d+b)/2,e-q,(d+b)/2,e),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, .4)"),a.fillStyle=g,a.fill(),a.restore());!0===l&&(a.save(),a.beginPath(),a.moveTo(b,c),a.lineTo(b+q,c+q),a.lineTo(b+q,e-q),a.lineTo(b,e),a.closePath(),g=a.createLinearGradient(b+q,(e+c)/2,b,(e+c)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.restore());!0===m&&(a.save(),
a.beginPath(),a.moveTo(d,c),a.lineTo(d-q,c+q),a.lineTo(d-q,e-q),a.lineTo(d,e),g=a.createLinearGradient(d-q,(e+c)/2,d,(e+c)/2),g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,g.addColorStop(0,f),g.addColorStop(1,"rgba(255, 255, 255, 0.1)"),a.fillStyle=g,a.fill(),a.closePath(),a.restore())};u.prototype.renderColumn=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,k,p=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.width,0.9*(this.plotArea.width/a.plotType.totalDataSeries))<<0,l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));l=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/
Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(l)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>h&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<e)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));l<e&&(l=e);l>h&&(l=h);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),
this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var h=a.dataSeriesIndexes[d],m=this.data[h],n=m.dataPoints;if(0<n.length)for(var q=5<l&&m.bevelEnabled?!0:!1,e=0;e<n.length;e++)if(n[e].getTime?k=n[e].x.getTime():k=n[e].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(n[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;f=f-a.plotType.totalDataSeries*l/2+(a.previousDataSeriesCount+d)*l<<0;var r=f+l<<0,s;0<=n[e].y?s=p:(s=g,g=p);g>s&&(s=g=s);c=n[e].color?n[e].color:m._colorSet[e%m._colorSet.length];I(b,f,g,r,s,c,0,null,q&&0<=n[e].y,0>n[e].y&&q,!1,!1,m.fillOpacity);c=m.dataPointIds[e];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:f,y1:g,x2:r,y2:s};c=B(c);t&&I(this._eventManager.ghostCtx,
f,g,r,s,c,0,null,!1,!1,!1,!1);(n[e].indexLabel||m.indexLabel||n[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"column",dataPoint:n[e],dataSeries:m,point:{x:f+(r-f)/2,y:0<=n[e].y?g:s},direction:0<=n[e].y?1:-1,bounds:{x1:f,y1:Math.min(g,s),x2:r,y2:Math.max(g,s)},color:c})}}b.restore();t&&this._eventManager.ghostCtx.restore();a=Math.min(p,a.axisY.boundingRect.y2);return{source:b,dest:this.plotArea.ctx,animationCallback:A.yScaleAnimation,easingFunction:A.easing.easeOutQuart,
animationBase:a}}};u.prototype.renderStackedColumn=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,k,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<
0,l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));l=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(l)/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));l<g&&(l=g);l>h&&(l=h);
b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var m=a.dataSeriesIndexes[h],n=this.data[m],q=n.dataPoints;if(0<q.length){var r=5<l&&n.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<q.length;g++)if(c=q[g].x.getTime?q[g].x.getTime():q[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof q[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;k=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(q[g].y-a.axisY.conversionParameters.minimum);var s=d-a.plotType.plotUnits.length*l/2+a.index*l<<0,w=s+l<<0,v;if(0<=q[g].y){var x=e[c]?e[c]:0;k-=x;v=p-x;e[c]=x+(v-k)}else x=f[c]?f[c]:0,v=k+x,k=p+x,f[c]=x+(v-k);c=q[g].color?q[g].color:n._colorSet[g%n._colorSet.length];
I(b,s,k,w,v,c,0,null,r&&0<=q[g].y,0>q[g].y&&r,!1,!1,n.fillOpacity);c=n.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:s,y1:k,x2:w,y2:v};c=B(c);t&&I(this._eventManager.ghostCtx,s,k,w,v,c,0,null,!1,!1,!1,!1);(q[g].indexLabel||n.indexLabel||q[g].indexLabelFormatter||n.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:q[g],dataSeries:n,point:{x:d,y:0<=q[g].y?k:v},direction:0<=q[g].y?1:-1,bounds:{x1:s,y1:Math.min(k,
v),x2:w,y2:Math.max(k,v)},color:c})}}}b.restore();t&&this._eventManager.ghostCtx.restore();a=Math.min(p,a.axisY.boundingRect.y2);return{source:b,dest:this.plotArea.ctx,animationCallback:A.yScaleAnimation,easingFunction:A.easing.easeOutQuart,animationBase:a}}};u.prototype.renderStackedColumn100=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,k,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.width<<0,l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));l=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(l)/a.plotType.plotUnits.length)<<
0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));l<g&&(l=g);l>h&&(l=h);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var m=a.dataSeriesIndexes[h],
n=this.data[m],q=n.dataPoints;if(0<q.length)for(var r=5<l&&n.bevelEnabled?!0:!1,g=0;g<q.length;g++)if(c=q[g].x.getTime?q[g].x.getTime():q[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;k=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*((0!==a.dataPointYSums[c]?100*(q[g].y/a.dataPointYSums[c]):
0)-a.axisY.conversionParameters.minimum);var s=d-a.plotType.plotUnits.length*l/2+a.index*l<<0,w=s+l<<0,v;if(0<=q[g].y){var x=e[c]?e[c]:0;k-=x;v=p-x;e[c]=x+(v-k)}else x=f[c]?f[c]:0,v=k+x,k=p+x,f[c]=x+(v-k);c=q[g].color?q[g].color:n._colorSet[g%n._colorSet.length];I(b,s,k,w,v,c,0,null,r&&0<=q[g].y,0>q[g].y&&r,!1,!1,n.fillOpacity);c=n.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:s,y1:k,x2:w,y2:v};c=B(c);t&&I(this._eventManager.ghostCtx,
s,k,w,v,c,0,null,!1,!1,!1,!1);(q[g].indexLabel||n.indexLabel||q[g].indexLabelFormatter||n.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:q[g],dataSeries:n,point:{x:d,y:0<=q[g].y?k:v},direction:0<=q[g].y?1:-1,bounds:{x1:s,y1:Math.min(k,v),x2:w,y2:Math.max(k,v)},color:c})}}b.restore();t&&this._eventManager.ghostCtx.restore();a=Math.min(p,a.axisY.boundingRect.y2);return{source:b,dest:this.plotArea.ctx,animationCallback:A.yScaleAnimation,easingFunction:A.easing.easeOutQuart,
animationBase:a}}};u.prototype.renderBar=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,k,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:Math.min(0.15*this.height,
0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0,l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));l=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(l)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>h&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<e)&&(h=Math.max(this.dataPointWidth?
this.dataPointWidth:-Infinity,e));l<e&&(l=e);l>h&&(l=h);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var h=a.dataSeriesIndexes[d],m=this.data[h],n=m.dataPoints;if(0<n.length){var q=5<l&&m.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(e=0;e<n.length;e++)if(n[e].getTime?k=n[e].x.getTime():k=n[e].x,
!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){g=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;g=g-a.plotType.totalDataSeries*l/2+(a.previousDataSeriesCount+d)*l<<0;var r=g+l<<0,s;0<=n[e].y?s=p:(s=f,f=p);c=n[e].color?n[e].color:m._colorSet[e%
m._colorSet.length];I(b,s,g,f,r,c,0,null,q,!1,!1,!1,m.fillOpacity);c=m.dataPointIds[e];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:s,y1:g,x2:f,y2:r};c=B(c);t&&I(this._eventManager.ghostCtx,s,g,f,r,c,0,null,!1,!1,!1,!1);(n[e].indexLabel||m.indexLabel||n[e].indexLabelFormatter||m.indexLabelFormatter)&&this._indexLabels.push({chartType:"bar",dataPoint:n[e],dataSeries:m,point:{x:0<=n[e].y?f:s,y:g+(r-g)/2},direction:0<=n[e].y?1:-1,bounds:{x1:Math.min(s,
f),y1:g,x2:Math.max(s,f),y2:r},color:c})}}}b.restore();t&&this._eventManager.ghostCtx.restore();a=Math.max(p,a.axisX.boundingRect.x2);return{source:b,dest:this.plotArea.ctx,animationCallback:A.xScaleAnimation,easingFunction:A.easing.easeOutQuart,animationBase:a}}};u.prototype.renderStackedBar=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,k,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));l=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(l)/a.plotType.plotUnits.length)<<
0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));l<g&&(l=g);l>h&&(l=h);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var m=a.dataSeriesIndexes[h],
n=this.data[m],q=n.dataPoints;if(0<q.length){var r=5<l&&n.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<q.length;g++)if(c=q[g].x.getTime?q[g].x.getTime():q[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(c-a.axisX.conversionParameters.minimum)+0.5<<0;k=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(q[g].y-a.axisY.conversionParameters.minimum);
var s=d-a.plotType.plotUnits.length*l/2+a.index*l<<0,w=s+l<<0,v;if(0<=q[g].y){var x=e[c]?e[c]:0;v=p+x;k+=x;e[c]=x+(k-v)}else x=f[c]?f[c]:0,v=k-x,k=p-x,f[c]=x+(k-v);c=q[g].color?q[g].color:n._colorSet[g%n._colorSet.length];I(b,v,s,k,w,c,0,null,r,!1,!1,!1,n.fillOpacity);c=n.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:v,y1:s,x2:k,y2:w};c=B(c);t&&I(this._eventManager.ghostCtx,v,s,k,w,c,0,null,!1,!1,!1,!1);(q[g].indexLabel||n.indexLabel||
q[g].indexLabelFormatter||n.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar",dataPoint:q[g],dataSeries:n,point:{x:0<=q[g].y?k:v,y:d},direction:0<=q[g].y?1:-1,bounds:{x1:Math.min(v,k),y1:s,x2:Math.max(v,k),y2:w},color:c})}}}b.restore();t&&this._eventManager.ghostCtx.restore();a=Math.max(p,a.axisX.boundingRect.x2);return{source:b,dest:this.plotArea.ctx,animationCallback:A.xScaleAnimation,easingFunction:A.easing.easeOutQuart,animationBase:a}}};u.prototype.renderStackedBar100=function(a){var b=
a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=0,k,p=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,g=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1,h=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.15*this.height<<0,l=a.axisX.dataInfo.minDiff;isFinite(l)||(l=0.3*Math.abs(a.axisX.viewportMaximum-
a.axisX.viewportMinimum));l=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(l)/a.plotType.plotUnits.length)<<0;this.dataPointMaxWidth&&g>h&&(g=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,h));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&h<g)&&(h=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,g));l<g&&(l=g);l>h&&(l=h);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,
d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(h=0;h<a.dataSeriesIndexes.length;h++){var m=a.dataSeriesIndexes[h],n=this.data[m],q=n.dataPoints;if(0<q.length){var r=5<l&&n.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(g=0;g<q.length;g++)if(c=q[g].x.getTime?q[g].x.getTime():q[g].x,!(c<a.axisX.dataInfo.viewPortMin||c>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[g].y){d=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*
(c-a.axisX.conversionParameters.minimum)+0.5<<0;k=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*((0!==a.dataPointYSums[c]?100*(q[g].y/a.dataPointYSums[c]):0)-a.axisY.conversionParameters.minimum);var s=d-a.plotType.plotUnits.length*l/2+a.index*l<<0,w=s+l<<0,v;if(0<=q[g].y){var x=e[c]?e[c]:0;v=p+x;k+=x;e[c]=x+(k-v)}else x=f[c]?f[c]:0,v=k-x,k=p-x,f[c]=x+(k-v);c=q[g].color?q[g].color:n._colorSet[g%n._colorSet.length];I(b,v,s,k,w,c,0,null,r,!1,!1,!1,n.fillOpacity);c=
n.dataPointIds[g];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:g,x1:v,y1:s,x2:k,y2:w};c=B(c);t&&I(this._eventManager.ghostCtx,v,s,k,w,c,0,null,!1,!1,!1,!1);(q[g].indexLabel||n.indexLabel||q[g].indexLabelFormatter||n.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedBar100",dataPoint:q[g],dataSeries:n,point:{x:0<=q[g].y?k:v,y:d},direction:0<=q[g].y?1:-1,bounds:{x1:Math.min(v,k),y1:s,x2:Math.max(v,k),y2:w},color:c})}}}b.restore();t&&this._eventManager.ghostCtx.restore();
a=Math.max(p,a.axisX.boundingRect.x2);return{source:b,dest:this.plotArea.ctx,animationCallback:A.xScaleAnimation,easingFunction:A.easing.easeOutQuart,animationBase:a}}};u.prototype.renderArea=function(a){function b(){x&&(0<h.lineThickness&&c.stroke(),0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?v=w:0>a.axisY.viewportMaximum?v=f.y1:0<a.axisY.viewportMinimum&&(v=e.y2),c.lineTo(q,v),c.lineTo(x.x,v),c.closePath(),c.globalAlpha=h.fillOpacity,c.fill(),c.globalAlpha=1,t&&(d.lineTo(q,v),d.lineTo(x.x,
v),d.closePath(),d.fill()),c.beginPath(),c.moveTo(q,r),d.beginPath(),d.moveTo(q,r),x={x:q,y:r})}var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],k=this.plotArea;c.save();t&&d.save();c.beginPath();c.rect(k.x1,k.y1,k.width,k.height);c.clip();t&&(d.beginPath(),d.rect(k.x1,k.y1,k.width,k.height),d.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var p=a.dataSeriesIndexes[k],h=this.data[p],
l=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=B(g);d.fillStyle=g;var g=[],m=!0,n=0,q,r,s,w=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,v,x=null;if(0<l.length){var E=h._colorSet[n%h._colorSet.length];c.fillStyle=E;c.strokeStyle=E;c.lineWidth=h.lineThickness;c.setLineDash&&c.setLineDash(M(h.lineDashType,h.lineThickness));for(var y=!0;n<l.length;n++)if(s=l[n].x.getTime?
l[n].x.getTime():l[n].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax))if("number"!==typeof l[n].y)b(),y=!0;else{q=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(s-a.axisX.conversionParameters.minimum)+0.5<<0;r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[n].y-a.axisY.conversionParameters.minimum)+0.5<<0;m||y?(c.beginPath(),c.moveTo(q,r),x={x:q,y:r},t&&(d.beginPath(),d.moveTo(q,r)),y=m=!1):(c.lineTo(q,r),
t&&d.lineTo(q,r),0==n%250&&b());var z=h.dataPointIds[n];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:n,x1:q,y1:r};0!==l[n].markerSize&&(0<l[n].markerSize||0<h.markerSize)&&(s=h.getMarkerProperties(n,q,r,c),g.push(s),z=B(z),t&&g.push({x:q,y:r,ctx:d,type:s.type,size:s.size,color:z,borderColor:z,borderThickness:s.borderThickness}));(l[n].indexLabel||h.indexLabel||l[n].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"area",
dataPoint:l[n],dataSeries:h,point:{x:q,y:r},direction:0<=l[n].y?1:-1,color:E})}b();K.drawMarkers(g)}}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderSplineArea=function(a){function b(){var b=ia(v,2);if(0<b.length){c.beginPath();c.moveTo(b[0].x,b[0].y);t&&(d.beginPath(),d.moveTo(b[0].x,b[0].y));for(var g=0;g<b.length-3;g+=3)c.bezierCurveTo(b[g+1].x,b[g+
1].y,b[g+2].x,b[g+2].y,b[g+3].x,b[g+3].y),t&&d.bezierCurveTo(b[g+1].x,b[g+1].y,b[g+2].x,b[g+2].y,b[g+3].x,b[g+3].y);0<h.lineThickness&&c.stroke();0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?s=r:0>a.axisY.viewportMaximum?s=f.y1:0<a.axisY.viewportMinimum&&(s=e.y2);w={x:b[0].x,y:b[0].y};c.lineTo(b[b.length-1].x,s);c.lineTo(w.x,s);c.closePath();c.globalAlpha=h.fillOpacity;c.fill();c.globalAlpha=1;t&&(d.lineTo(b[b.length-1].x,s),d.lineTo(w.x,s),d.closePath(),d.fill())}}var c=a.targetCanvasCtx||
this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],k=this.plotArea;c.save();t&&d.save();c.beginPath();c.rect(k.x1,k.y1,k.width,k.height);c.clip();t&&(d.beginPath(),d.rect(k.x1,k.y1,k.width,k.height),d.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var p=a.dataSeriesIndexes[k],h=this.data[p],l=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=B(g);d.fillStyle=
g;var g=[],m=0,n,q,r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,s,w=null,v=[];if(0<l.length){color=h._colorSet[m%h._colorSet.length];c.fillStyle=color;c.strokeStyle=color;c.lineWidth=h.lineThickness;for(c.setLineDash&&c.setLineDash(M(h.lineDashType,h.lineThickness));m<l.length;m++)if(n=l[m].x.getTime?l[m].x.getTime():l[m].x,!(n<a.axisX.dataInfo.viewPortMin||n>a.axisX.dataInfo.viewPortMax))if("number"!==typeof l[m].y)0<
m&&(b(),v=[]);else{n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(n-a.axisX.conversionParameters.minimum)+0.5<<0;q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[m].y-a.axisY.conversionParameters.minimum)+0.5<<0;var x=h.dataPointIds[m];this._eventManager.objectMap[x]={id:x,objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:m,x1:n,y1:q};v[v.length]={x:n,y:q};if(0!==l[m].markerSize&&(0<l[m].markerSize||0<h.markerSize)){var E=
h.getMarkerProperties(m,n,q,c);g.push(E);x=B(x);t&&g.push({x:n,y:q,ctx:d,type:E.type,size:E.size,color:x,borderColor:x,borderThickness:E.borderThickness})}(l[m].indexLabel||h.indexLabel||l[m].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"splineArea",dataPoint:l[m],dataSeries:h,point:{x:n,y:q},direction:0<=l[m].y?1:-1,color:color})}b();K.drawMarkers(g)}}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,
easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderStepArea=function(a){function b(){x&&(0<h.lineThickness&&c.stroke(),0>=a.axisY.viewportMinimum&&0<=a.axisY.viewportMaximum?v=w:0>a.axisY.viewportMaximum?v=f.y1:0<a.axisY.viewportMinimum&&(v=e.y2),c.lineTo(q,v),c.lineTo(x.x,v),c.closePath(),c.globalAlpha=h.fillOpacity,c.fill(),c.globalAlpha=1,t&&(d.lineTo(q,v),d.lineTo(x.x,v),d.closePath(),d.fill()),c.beginPath(),c.moveTo(q,r),d.beginPath(),d.moveTo(q,r),x={x:q,y:r})}var c=a.targetCanvasCtx||
this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=a.axisX.lineCoordinates,f=a.axisY.lineCoordinates,g=[],k=this.plotArea;c.save();t&&d.save();c.beginPath();c.rect(k.x1,k.y1,k.width,k.height);c.clip();t&&(d.beginPath(),d.rect(k.x1,k.y1,k.width,k.height),d.clip());for(k=0;k<a.dataSeriesIndexes.length;k++){var p=a.dataSeriesIndexes[k],h=this.data[p],l=h.dataPoints,g=h.id;this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:p};g=B(g);d.fillStyle=
g;var g=[],m=!0,n=0,q,r,s,w=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)+0.5<<0,v,x=null,E=!1;if(0<l.length){var y=h._colorSet[n%h._colorSet.length];c.fillStyle=y;c.strokeStyle=y;c.lineWidth=h.lineThickness;for(c.setLineDash&&c.setLineDash(M(h.lineDashType,h.lineThickness));n<l.length;n++)if(s=l[n].x.getTime?l[n].x.getTime():l[n].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax)){var z=r;"number"!==typeof l[n].y?
(b(),E=!0):(q=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(s-a.axisX.conversionParameters.minimum)+0.5<<0,r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(l[n].y-a.axisY.conversionParameters.minimum)+0.5<<0,m||E?(c.beginPath(),c.moveTo(q,r),x={x:q,y:r},t&&(d.beginPath(),d.moveTo(q,r)),E=m=!1):(c.lineTo(q,z),t&&d.lineTo(q,z),c.lineTo(q,r),t&&d.lineTo(q,r),0==n%250&&b()),z=h.dataPointIds[n],this._eventManager.objectMap[z]={id:z,
objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:n,x1:q,y1:r},0!==l[n].markerSize&&(0<l[n].markerSize||0<h.markerSize)&&(s=h.getMarkerProperties(n,q,r,c),g.push(s),z=B(z),t&&g.push({x:q,y:r,ctx:d,type:s.type,size:s.size,color:z,borderColor:z,borderThickness:s.borderThickness})),(l[n].indexLabel||h.indexLabel||l[n].indexLabelFormatter||h.indexLabelFormatter)&&this._indexLabels.push({chartType:"stepArea",dataPoint:l[n],dataSeries:h,point:{x:q,y:r},direction:0<=l[n].y?1:-1,color:y}))}b();K.drawMarkers(g)}}c.restore();
t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderStackedArea=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=[],e=this.plotArea,f=[],g=[],k=0,p,h,l,m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(0-a.axisY.conversionParameters.minimum)<<0,n=this._eventManager.ghostCtx;t&&n.beginPath();
b.save();t&&n.save();b.beginPath();b.rect(e.x1,e.y1,e.width,e.height);b.clip();t&&(n.beginPath(),n.rect(e.x1,e.y1,e.width,e.height),n.clip());xValuePresent=[];for(e=0;e<a.dataSeriesIndexes.length;e++){var q=a.dataSeriesIndexes[e],r=this.data[q],s=r.dataPoints;r.dataPointIndexes=[];for(k=0;k<s.length;k++)q=s[k].x.getTime?s[k].x.getTime():s[k].x,r.dataPointIndexes[q]=k,xValuePresent[q]||(g.push(q),xValuePresent[q]=!0);g.sort(ua)}for(e=0;e<a.dataSeriesIndexes.length;e++){var q=a.dataSeriesIndexes[e],
r=this.data[q],s=r.dataPoints,w=!0,v=[],k=r.id;this._eventManager.objectMap[k]={objectType:"dataSeries",dataSeriesIndex:q};k=B(k);n.fillStyle=k;if(0<g.length){c=r._colorSet[0];b.fillStyle=c;b.strokeStyle=c;b.lineWidth=r.lineThickness;b.setLineDash&&b.setLineDash(M(r.lineDashType,r.lineThickness));for(k=0;k<g.length;k++){l=g[k];var x=null,x=0<=r.dataPointIndexes[l]?s[r.dataPointIndexes[l]]:{x:l,y:0};if(!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof x.y){p=a.axisX.conversionParameters.reference+
a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(x.y-a.axisY.conversionParameters.minimum);var E=f[l]?f[l]:0;h-=E;v.push({x:p,y:m-E});f[l]=m-h;if(w)b.beginPath(),b.moveTo(p,h),t&&(n.beginPath(),n.moveTo(p,h)),w=!1;else if(b.lineTo(p,h),t&&n.lineTo(p,h),0==k%250){for(0<r.lineThickness&&b.stroke();0<v.length;){var y=v.pop();b.lineTo(y.x,y.y);t&&n.lineTo(y.x,y.y)}b.closePath();
b.globalAlpha=r.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,h);t&&(n.closePath(),n.fill(),n.beginPath(),n.moveTo(p,h));v.push({x:p,y:m-E})}if(0<=r.dataPointIndexes[l]){var z=r.dataPointIds[r.dataPointIndexes[l]];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:r.dataPointIndexes[l],x1:p,y1:h}}0<=r.dataPointIndexes[l]&&0!==x.markerSize&&(0<x.markerSize||0<r.markerSize)&&(l=r.getMarkerProperties(k,p,h,b),d.push(l),markerColor=B(z),t&&d.push({x:p,
y:h,ctx:n,type:l.type,size:l.size,color:markerColor,borderColor:markerColor,borderThickness:l.borderThickness}));(x.indexLabel||r.indexLabel||x.indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:x,dataSeries:r,point:{x:p,y:h},direction:0<=s[k].y?1:-1,color:c})}}for(0<r.lineThickness&&b.stroke();0<v.length;)y=v.pop(),b.lineTo(y.x,y.y),t&&n.lineTo(y.x,y.y);b.closePath();b.globalAlpha=r.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,
h);t&&(n.closePath(),n.fill(),n.beginPath(),n.moveTo(p,h))}delete r.dataPointIndexes}K.drawMarkers(d);b.restore();t&&n.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderStackedArea100=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=[],f=[],g=[],k=0,p,h,l,m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(0-a.axisY.conversionParameters.minimum)<<0,n=this.dataPointMaxWidth?this.dataPointMaxWidth:0.15*this.width<<0,q=a.axisX.dataInfo.minDiff,q=0.9*d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(q)<<0,r=this._eventManager.ghostCtx;b.save();t&&r.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(r.beginPath(),r.rect(d.x1,d.y1,d.width,d.height),r.clip());xValuePresent=[];for(d=0;d<a.dataSeriesIndexes.length;d++){var s=a.dataSeriesIndexes[d],w=this.data[s],v=
w.dataPoints;w.dataPointIndexes=[];for(k=0;k<v.length;k++)s=v[k].x.getTime?v[k].x.getTime():v[k].x,w.dataPointIndexes[s]=k,xValuePresent[s]||(g.push(s),xValuePresent[s]=!0);g.sort(ua)}for(d=0;d<a.dataSeriesIndexes.length;d++){var s=a.dataSeriesIndexes[d],w=this.data[s],v=w.dataPoints,x=!0,c=w.id;this._eventManager.objectMap[c]={objectType:"dataSeries",dataSeriesIndex:s};c=B(c);r.fillStyle=c;1==v.length&&(q=n);1>q?q=1:q>n&&(q=n);var E=[];if(0<g.length){c=w._colorSet[k%w._colorSet.length];b.fillStyle=
c;b.strokeStyle=c;b.lineWidth=w.lineThickness;b.setLineDash&&b.setLineDash(M(w.lineDashType,w.lineThickness));for(k=0;k<g.length;k++){l=g[k];var y=null,y=0<=w.dataPointIndexes[l]?v[w.dataPointIndexes[l]]:{x:l,y:0};if(!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof y.y){h=0!==a.dataPointYSums[l]?100*(y.y/a.dataPointYSums[l]):0;p=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(h-a.axisY.conversionParameters.minimum);var z=f[l]?f[l]:0;h-=z;E.push({x:p,y:m-z});f[l]=m-h;if(x)b.beginPath(),b.moveTo(p,h),t&&(r.beginPath(),r.moveTo(p,h)),x=!1;else if(b.lineTo(p,h),t&&r.lineTo(p,h),0==k%250){for(0<w.lineThickness&&b.stroke();0<E.length;){var u=E.pop();b.lineTo(u.x,u.y);t&&r.lineTo(u.x,u.y)}b.closePath();b.globalAlpha=w.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,h);t&&(r.closePath(),r.fill(),r.beginPath(),r.moveTo(p,
h));E.push({x:p,y:m-z})}if(0<=w.dataPointIndexes[l]){var D=w.dataPointIds[w.dataPointIndexes[l]];this._eventManager.objectMap[D]={id:D,objectType:"dataPoint",dataSeriesIndex:s,dataPointIndex:w.dataPointIndexes[l],x1:p,y1:h}}0<=w.dataPointIndexes[l]&&0!==y.markerSize&&(0<y.markerSize||0<w.markerSize)&&(l=w.getMarkerProperties(k,p,h,b),e.push(l),markerColor=B(D),t&&e.push({x:p,y:h,ctx:r,type:l.type,size:l.size,color:markerColor,borderColor:markerColor,borderThickness:l.borderThickness}));(y.indexLabel||
w.indexLabel||y.indexLabelFormatter||w.indexLabelFormatter)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:y,dataSeries:w,point:{x:p,y:h},direction:0<=v[k].y?1:-1,color:c})}}for(0<w.lineThickness&&b.stroke();0<E.length;)u=E.pop(),b.lineTo(u.x,u.y),t&&r.lineTo(u.x,u.y);b.closePath();b.globalAlpha=w.fillOpacity;b.fill();b.globalAlpha=1;b.beginPath();b.moveTo(p,h);t&&(r.closePath(),r.fill(),r.beginPath(),r.moveTo(p,h))}delete w.dataPointIndexes}K.drawMarkers(e);b.restore();t&&r.restore();
return{source:b,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderBubble=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx,c=a.dataSeriesIndexes.length;if(!(0>=c)){var d=this.plotArea,e=0,f,g,k=this.dataPointMaxWidth?this.dataPointMaxWidth:0.15*this.width<<0,e=a.axisX.dataInfo.minDiff,c=0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(e)/c)<<0;b.save();t&&this._eventManager.ghostCtx.save();
b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=-Infinity,h=Infinity,l=0;l<a.dataSeriesIndexes.length;l++)for(var m=a.dataSeriesIndexes[l],n=this.data[m],q=n.dataPoints,r=0,e=0;e<q.length;e++)f=q[e].getTime?f=q[e].x.getTime():f=q[e].x,f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax||"undefined"===typeof q[e].z||(r=q[e].z,r>p&&(p=r),r<h&&(h=r));for(var s=25*Math.PI,
d=Math.max(Math.pow(0.25*Math.min(d.height,d.width)/2,2)*Math.PI,s),l=0;l<a.dataSeriesIndexes.length;l++)if(m=a.dataSeriesIndexes[l],n=this.data[m],q=n.dataPoints,1==q.length&&(c=k),1>c?c=1:c>k&&(c=k),0<q.length)for(b.strokeStyle="#4572A7 ",e=0;e<q.length;e++)if(f=q[e].getTime?f=q[e].x.getTime():f=q[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[e].y){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(f-a.axisX.conversionParameters.minimum)+
0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(q[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;var r=q[e].z,w=2*Math.max(Math.sqrt((p===h?d/2:s+(d-s)/(p-h)*(r-h))/Math.PI)<<0,1),r=n.getMarkerProperties(e,b);r.size=w;b.globalAlpha=n.fillOpacity;K.drawMarker(f,g,b,r.type,r.size,r.color,r.borderColor,r.borderThickness);b.globalAlpha=1;var v=n.dataPointIds[e];this._eventManager.objectMap[v]={id:v,objectType:"dataPoint",dataSeriesIndex:m,dataPointIndex:e,
x1:f,y1:g,size:w};w=B(v);t&&K.drawMarker(f,g,this._eventManager.ghostCtx,r.type,r.size,w,w,r.borderThickness);(q[e].indexLabel||n.indexLabel||q[e].indexLabelFormatter||n.indexLabelFormatter)&&this._indexLabels.push({chartType:"bubble",dataPoint:q[e],dataSeries:n,point:{x:f,y:g},direction:1,bounds:{x1:f-r.size/2,y1:g-r.size/2,x2:f+r.size/2,y2:g+r.size/2},color:null})}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:A.fadeInAnimation,easingFunction:A.easing.easeInQuad,
animationBase:0}}};u.prototype.renderScatter=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx,c=a.dataSeriesIndexes.length;if(!(0>=c)){var d=this.plotArea,e=0,f,g,k=this.dataPointMaxWidth?this.dataPointMaxWidth:0.15*this.width<<0,e=a.axisX.dataInfo.minDiff,c=0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(e)/c)<<0;b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,
d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var h=a.dataSeriesIndexes[p],l=this.data[h],m=l.dataPoints;1==m.length&&(c=k);1>c?c=1:c>k&&(c=k);if(0<m.length){b.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(d.height,d.width)/2,2);for(var n=0,q=0,e=0;e<m.length;e++)if(f=m[e].getTime?f=m[e].x.getTime():f=m[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof m[e].y){f=a.axisX.conversionParameters.reference+
a.axisX.conversionParameters.pixelPerUnit*(f-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y-a.axisY.conversionParameters.minimum)+0.5<<0;var r=l.getMarkerProperties(e,f,g,b);b.globalAlpha=l.fillOpacity;K.drawMarker(r.x,r.y,r.ctx,r.type,r.size,r.color,r.borderColor,r.borderThickness);b.globalAlpha=1;Math.sqrt((n-f)*(n-f)+(q-g)*(q-g))<Math.min(r.size,5)&&m.length>Math.min(this.plotArea.width,this.plotArea.height)||
(n=l.dataPointIds[e],this._eventManager.objectMap[n]={id:n,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:f,y1:g},n=B(n),t&&K.drawMarker(r.x,r.y,this._eventManager.ghostCtx,r.type,r.size,n,n,r.borderThickness),(m[e].indexLabel||l.indexLabel||m[e].indexLabelFormatter||l.indexLabelFormatter)&&this._indexLabels.push({chartType:"scatter",dataPoint:m[e],dataSeries:l,point:{x:f,y:g},direction:1,bounds:{x1:f-r.size/2,y1:g-r.size/2,x2:f+r.size/2,y2:g+r.size/2},color:null}),n=f,q=g)}}}b.restore();
t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:A.fadeInAnimation,easingFunction:A.easing.easeInQuad,animationBase:0}}};u.prototype.renderCandlestick=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx,c=this._eventManager.ghostCtx;if(!(0>=a.dataSeriesIndexes.length)){var d=null,d=this.plotArea,e=0,f,g,k,p,h,l,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:
this.dataPointWidth?this.dataPointWidth:0.015*this.width;var m=a.axisX.dataInfo.minDiff;isFinite(m)||(m=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));m=this.dataPointWidth?this.dataPointWidth:0.7*d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(m)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,
e));m<e&&(m=e);m>f&&(m=f);b.save();t&&c.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(c.rect(d.x1,d.y1,d.width,d.height),c.clip());for(var n=0;n<a.dataSeriesIndexes.length;n++){var q=a.dataSeriesIndexes[n],r=this.data[q],s=r.dataPoints;if(0<s.length)for(var w=5<m&&r.bevelEnabled?!0:!1,e=0;e<s.length;e++)if(s[e].getTime?l=s[e].x.getTime():l=s[e].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&null!==s[e].y&&s[e].y.length&&"number"===typeof s[e].y[0]&&"number"===
typeof s[e].y[1]&&"number"===typeof s[e].y[2]&&"number"===typeof s[e].y[3]){f=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;g=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;k=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;p=a.axisY.conversionParameters.reference+
a.axisY.conversionParameters.pixelPerUnit*(s[e].y[2]-a.axisY.conversionParameters.minimum)+0.5<<0;h=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(s[e].y[3]-a.axisY.conversionParameters.minimum)+0.5<<0;var v=f-m/2<<0,x=v+m<<0,d=s[e].color?s[e].color:r._colorSet[0],E=Math.round(Math.max(1,0.15*m)),u=0===E%2?0:0.5,z=r.dataPointIds[e];this._eventManager.objectMap[z]={id:z,objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:e,x1:v,y1:g,x2:x,y2:k,x3:f,y3:p,x4:f,y4:h,
borderThickness:E,color:d};b.strokeStyle=d;b.beginPath();b.lineWidth=E;c.lineWidth=Math.max(E,4);"candlestick"===r.type?(b.moveTo(f-u,k),b.lineTo(f-u,Math.min(g,h)),b.stroke(),b.moveTo(f-u,Math.max(g,h)),b.lineTo(f-u,p),b.stroke(),I(b,v,Math.min(g,h),x,Math.max(g,h),s[e].y[0]<=s[e].y[3]?r.risingColor:d,E,d,w,w,!1,!1,r.fillOpacity),t&&(d=B(z),c.strokeStyle=d,c.moveTo(f-u,k),c.lineTo(f-u,Math.min(g,h)),c.stroke(),c.moveTo(f-u,Math.max(g,h)),c.lineTo(f-u,p),c.stroke(),I(c,v,Math.min(g,h),x,Math.max(g,
h),d,0,null,!1,!1,!1,!1))):"ohlc"===r.type&&(b.moveTo(f-u,k),b.lineTo(f-u,p),b.stroke(),b.beginPath(),b.moveTo(f,g),b.lineTo(v,g),b.stroke(),b.beginPath(),b.moveTo(f,h),b.lineTo(x,h),b.stroke(),t&&(d=B(z),c.strokeStyle=d,c.moveTo(f-u,k),c.lineTo(f-u,p),c.stroke(),c.beginPath(),c.moveTo(f,g),c.lineTo(v,g),c.stroke(),c.beginPath(),c.moveTo(f,h),c.lineTo(x,h),c.stroke()));(s[e].indexLabel||r.indexLabel||s[e].indexLabelFormatter||r.indexLabelFormatter)&&this._indexLabels.push({chartType:r.type,dataPoint:s[e],
dataSeries:r,point:{x:v+(x-v)/2,y:k},direction:1,bounds:{x1:v,y1:Math.min(k,p),x2:x,y2:Math.max(k,p)},color:d})}}b.restore();t&&c.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:A.fadeInAnimation,easingFunction:A.easing.easeInQuad,animationBase:0}}};u.prototype.renderRangeColumn=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:
1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?this.dataPointWidth:0.03*this.width;var k=a.axisX.dataInfo.minDiff;isFinite(k)||(k=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));k=this.dataPointWidth?this.dataPointWidth:0.9*(d.width/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(k)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&
f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));k<e&&(k=e);k>f&&(k=f);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var p=0;p<a.dataSeriesIndexes.length;p++){var h=a.dataSeriesIndexes[p],l=this.data[h],m=l.dataPoints;if(0<m.length)for(var n=5<k&&l.bevelEnabled?!0:!1,e=0;e<m.length;e++)if(m[e].getTime?g=m[e].x.getTime():
g=m[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&null!==m[e].y&&m[e].y.length&&"number"===typeof m[e].y[0]&&"number"===typeof m[e].y[1]){c=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(g-a.axisX.conversionParameters.minimum)+0.5<<0;d=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(m[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*
(m[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;var q=c-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+p)*k<<0,r=q+k<<0,c=m[e].color?m[e].color:l._colorSet[e%l._colorSet.length];if(d>f){var s=d,d=f;f=s}s=l.dataPointIds[e];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:e,x1:q,y1:d,x2:r,y2:f};I(b,q,d,r,f,c,0,c,n,n,!1,!1,l.fillOpacity);c=B(s);t&&I(this._eventManager.ghostCtx,q,d,r,f,c,0,null,!1,!1,!1,!1);if(m[e].indexLabel||l.indexLabel||
m[e].indexLabelFormatter||l.indexLabelFormatter)this._indexLabels.push({chartType:"rangeColumn",dataPoint:m[e],dataSeries:l,indexKeyword:0,point:{x:q+(r-q)/2,y:m[e].y[1]>=m[e].y[0]?f:d},direction:m[e].y[1]>=m[e].y[0]?-1:1,bounds:{x1:q,y1:Math.min(d,f),x2:r,y2:Math.max(d,f)},color:c}),this._indexLabels.push({chartType:"rangeColumn",dataPoint:m[e],dataSeries:l,indexKeyword:1,point:{x:q+(r-q)/2,y:m[e].y[1]>=m[e].y[0]?d:f},direction:m[e].y[1]>=m[e].y[0]?1:-1,bounds:{x1:q,y1:Math.min(d,f),x2:r,y2:Math.max(d,
f)},color:c})}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:A.fadeInAnimation,easingFunction:A.easing.easeInQuad,animationBase:0}}};u.prototype.renderRangeBar=function(a){var b=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var c=null,d=this.plotArea,e=0,f,g,k,e=this.dataPointMinWidth?this.dataPointMinWidth:this.dataPointWidth?this.dataPointWidth:1;f=this.dataPointMaxWidth?this.dataPointMaxWidth:this.dataPointWidth?
this.dataPointWidth:Math.min(0.15*this.height,0.9*(this.plotArea.height/a.plotType.totalDataSeries))<<0;var p=a.axisX.dataInfo.minDiff;isFinite(p)||(p=0.3*Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum));p=this.dataPointWidth?this.dataPointWidth:0.9*(d.height/Math.abs(a.axisX.viewportMaximum-a.axisX.viewportMinimum)*Math.abs(p)/a.plotType.totalDataSeries)<<0;this.dataPointMaxWidth&&e>f&&(e=Math.min(this.dataPointWidth?this.dataPointWidth:Infinity,f));!this.dataPointMaxWidth&&(this.dataPointMinWidth&&
f<e)&&(f=Math.max(this.dataPointWidth?this.dataPointWidth:-Infinity,e));p<e&&(p=e);p>f&&(p=f);b.save();t&&this._eventManager.ghostCtx.save();b.beginPath();b.rect(d.x1,d.y1,d.width,d.height);b.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var h=0;h<a.dataSeriesIndexes.length;h++){var l=a.dataSeriesIndexes[h],m=this.data[l],n=m.dataPoints;if(0<n.length){var q=5<p&&m.bevelEnabled?!0:!1;b.strokeStyle="#4572A7 ";for(e=0;e<n.length;e++)if(n[e].getTime?
k=n[e].x.getTime():k=n[e].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&null!==n[e].y&&n[e].y.length&&"number"===typeof n[e].y[0]&&"number"===typeof n[e].y[1]){d=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[e].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;f=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(n[e].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;g=a.axisX.conversionParameters.reference+
a.axisX.conversionParameters.pixelPerUnit*(k-a.axisX.conversionParameters.minimum)+0.5<<0;g=g-a.plotType.totalDataSeries*p/2+(a.previousDataSeriesCount+h)*p<<0;var r=g+p<<0;d>f&&(c=d,d=f,f=c);c=n[e].color?n[e].color:m._colorSet[e%m._colorSet.length];I(b,d,g,f,r,c,0,null,q,!1,!1,!1,m.fillOpacity);c=m.dataPointIds[e];this._eventManager.objectMap[c]={id:c,objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:e,x1:d,y1:g,x2:f,y2:r};c=B(c);t&&I(this._eventManager.ghostCtx,d,g,f,r,c,0,null,!1,!1,!1,!1);
if(n[e].indexLabel||m.indexLabel||n[e].indexLabelFormatter||m.indexLabelFormatter)this._indexLabels.push({chartType:"rangeBar",dataPoint:n[e],dataSeries:m,indexKeyword:0,point:{x:n[e].y[1]>=n[e].y[0]?d:f,y:g+(r-g)/2},direction:n[e].y[1]>=n[e].y[0]?-1:1,bounds:{x1:Math.min(d,f),y1:g,x2:Math.max(d,f),y2:r},color:c}),this._indexLabels.push({chartType:"rangeBar",dataPoint:n[e],dataSeries:m,indexKeyword:1,point:{x:n[e].y[1]>=n[e].y[0]?f:d,y:g+(r-g)/2},direction:n[e].y[1]>=n[e].y[0]?1:-1,bounds:{x1:Math.min(d,
f),y1:g,x2:Math.max(d,f),y2:r},color:c})}}}b.restore();t&&this._eventManager.ghostCtx.restore();return{source:b,dest:this.plotArea.ctx,animationCallback:A.fadeInAnimation,easingFunction:A.easing.easeInQuad,animationBase:0}}};u.prototype.renderRangeArea=function(a){function b(){if(w){var a=null;0<p.lineThickness&&c.stroke();for(var b=g.length-1;0<=b;b--)a=g[b],c.lineTo(a.x,a.y),d.lineTo(a.x,a.y);c.closePath();c.globalAlpha=p.fillOpacity;c.fill();c.globalAlpha=1;d.fill();if(0<p.lineThickness){c.beginPath();
c.moveTo(a.x,a.y);for(b=0;b<g.length;b++)a=g[b],c.lineTo(a.x,a.y);c.stroke()}c.beginPath();c.moveTo(n,q);d.beginPath();d.moveTo(n,q);w={x:n,y:q};g=[];g.push({x:n,y:r})}}var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=[],f=this.plotArea;c.save();t&&d.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();t&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=[],k=a.dataSeriesIndexes[f],
p=this.data[k],h=p.dataPoints,e=p.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:k};e=B(e);d.fillStyle=e;var e=[],l=!0,m=0,n,q,r,s,w=null;if(0<h.length){var v=p._colorSet[m%p._colorSet.length];c.fillStyle=v;c.strokeStyle=v;c.lineWidth=p.lineThickness;c.setLineDash&&c.setLineDash(M(p.lineDashType,p.lineThickness));for(var x=!0;m<h.length;m++)if(s=h[m].x.getTime?h[m].x.getTime():h[m].x,!(s<a.axisX.dataInfo.viewPortMin||s>a.axisX.dataInfo.viewPortMax))if(null!==h[m].y&&h[m].y.length&&
"number"===typeof h[m].y[0]&&"number"===typeof h[m].y[1]){n=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(s-a.axisX.conversionParameters.minimum)+0.5<<0;q=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h[m].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;r=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(h[m].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;l||x?(c.beginPath(),c.moveTo(n,q),
w={x:n,y:q},g=[],g.push({x:n,y:r}),t&&(d.beginPath(),d.moveTo(n,q)),x=l=!1):(c.lineTo(n,q),g.push({x:n,y:r}),t&&d.lineTo(n,q),0==m%250&&b());s=p.dataPointIds[m];this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:m,x1:n,y1:q,y2:r};if(0!==h[m].markerSize&&(0<h[m].markerSize||0<p.markerSize)){var u=p.getMarkerProperties(m,n,r,c);e.push(u);var y=B(s);t&&e.push({x:n,y:r,ctx:d,type:u.type,size:u.size,color:y,borderColor:y,borderThickness:u.borderThickness});u=
p.getMarkerProperties(m,n,q,c);e.push(u);y=B(s);t&&e.push({x:n,y:q,ctx:d,type:u.type,size:u.size,color:y,borderColor:y,borderThickness:u.borderThickness})}if(h[m].indexLabel||p.indexLabel||h[m].indexLabelFormatter||p.indexLabelFormatter)this._indexLabels.push({chartType:"rangeArea",dataPoint:h[m],dataSeries:p,indexKeyword:0,point:{x:n,y:q},direction:h[m].y[0]<=h[m].y[1]?-1:1,color:v}),this._indexLabels.push({chartType:"rangeArea",dataPoint:h[m],dataSeries:p,indexKeyword:1,point:{x:n,y:r},direction:h[m].y[0]<=
h[m].y[1]?1:-1,color:v})}else b(),x=!0;b();K.drawMarkers(e)}}c.restore();t&&this._eventManager.ghostCtx.restore();return{source:c,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};u.prototype.renderRangeSplineArea=function(a){function b(){var a=ia(q,2);if(0<a.length){c.beginPath();c.moveTo(a[0].x,a[0].y);t&&(d.beginPath(),d.moveTo(a[0].x,a[0].y));for(var b=0;b<a.length-3;b+=3)c.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+
3].y),t&&d.bezierCurveTo(a[b+1].x,a[b+1].y,a[b+2].x,a[b+2].y,a[b+3].x,a[b+3].y);0<k.lineThickness&&c.stroke();a=ia(r,2);c.lineTo(r[r.length-1].x,r[r.length-1].y);for(b=a.length-1;2<b;b-=3)c.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y),t&&d.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y);c.closePath();c.globalAlpha=k.fillOpacity;c.fill();c.globalAlpha=1;if(0<k.lineThickness){c.beginPath();c.moveTo(r[r.length-1].x,r[r.length-1].y);for(b=a.length-1;2<b;b-=
3)c.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y),t&&d.bezierCurveTo(a[b-1].x,a[b-1].y,a[b-2].x,a[b-2].y,a[b-3].x,a[b-3].y);c.stroke()}c.beginPath();t&&(d.closePath(),d.fill())}}var c=a.targetCanvasCtx||this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var d=this._eventManager.ghostCtx,e=[],f=this.plotArea;c.save();t&&d.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();t&&(d.beginPath(),d.rect(f.x1,f.y1,f.width,f.height),d.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var g=
a.dataSeriesIndexes[f],k=this.data[g],p=k.dataPoints,e=k.id;this._eventManager.objectMap[e]={objectType:"dataSeries",dataSeriesIndex:g};e=B(e);d.fillStyle=e;var e=[],h=0,l,m,n,q=[],r=[];if(0<p.length){color=k._colorSet[h%k._colorSet.length];c.fillStyle=color;c.strokeStyle=color;c.lineWidth=k.lineThickness;for(c.setLineDash&&c.setLineDash(M(k.lineDashType,k.lineThickness));h<p.length;h++)if(l=p[h].x.getTime?p[h].x.getTime():p[h].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax))if(null!==
p[h].y&&p[h].y.length&&"number"===typeof p[h].y[0]&&"number"===typeof p[h].y[1]){l=a.axisX.conversionParameters.reference+a.axisX.conversionParameters.pixelPerUnit*(l-a.axisX.conversionParameters.minimum)+0.5<<0;m=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[h].y[0]-a.axisY.conversionParameters.minimum)+0.5<<0;n=a.axisY.conversionParameters.reference+a.axisY.conversionParameters.pixelPerUnit*(p[h].y[1]-a.axisY.conversionParameters.minimum)+0.5<<0;var s=k.dataPointIds[h];
this._eventManager.objectMap[s]={id:s,objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:h,x1:l,y1:m,y2:n};q[q.length]={x:l,y:m};r[r.length]={x:l,y:n};if(0!==p[h].markerSize&&(0<p[h].markerSize||0<k.markerSize)){var w=k.getMarkerProperties(h,l,m,c);e.push(w);var v=B(s);t&&e.push({x:l,y:m,ctx:d,type:w.type,size:w.size,color:v,borderColor:v,borderThickness:w.borderThickness});w=k.getMarkerProperties(h,l,n,c);e.push(w);v=B(s);t&&e.push({x:l,y:n,ctx:d,type:w.type,size:w.size,color:v,borderColor:v,
borderThickness:w.borderThickness})}if(p[h].indexLabel||k.indexLabel||p[h].indexLabelFormatter||k.indexLabelFormatter)this._indexLabels.push({chartType:"splineArea",dataPoint:p[h],dataSeries:k,indexKeyword:0,point:{x:l,y:m},direction:p[h].y[0]<=p[h].y[1]?-1:1,color:color}),this._indexLabels.push({chartType:"splineArea",dataPoint:p[h],dataSeries:k,indexKeyword:1,point:{x:l,y:n},direction:p[h].y[0]<=p[h].y[1]?1:-1,color:color})}else 0<h&&(b(),q=[],r=[]);b();K.drawMarkers(e)}}c.restore();t&&this._eventManager.ghostCtx.restore();
return{source:c,dest:this.plotArea.ctx,animationCallback:A.xClipAnimation,easingFunction:A.easing.linear,animationBase:0}}};var sa=function(a,b,c,d,e,f,g,k,p){"undefined"===typeof k&&(k=1);if(!t){var h=Number((g%(2*Math.PI)).toFixed(8));Number((f%(2*Math.PI)).toFixed(8))===h&&(g-=1E-4)}a.save();a.globalAlpha=k;"pie"===e?(a.beginPath(),a.moveTo(b.x,b.y),a.arc(b.x,b.y,c,f,g,!1),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(b.x,b.y,c,f,
g,!1),a.arc(b.x,b.y,p*c,g,f,!0),a.closePath(),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.fill());a.globalAlpha=1;a.restore()};u.prototype.renderPie=function(a){function b(){if(h&&l){var a=0,b=0,c=0,d=0;for(y=0;y<l.length;y++){var e=l[y],f=h.dataPointIds[y],g={id:f,objectType:"dataPoint",dataPointIndex:y,dataSeriesIndex:0};q.push(g);var k={percent:null,total:null},m=null,k=p.getPercentAndTotal(h,e);if(h.indexLabelFormatter||e.indexLabelFormatter)m={chart:p._options,dataSeries:h,dataPoint:e,
total:k.total,percent:k.percent};k=e.indexLabelFormatter?e.indexLabelFormatter(m):e.indexLabel?p.replaceKeywordsWithValue(e.indexLabel,e,h,y):h.indexLabelFormatter?h.indexLabelFormatter(m):h.indexLabel?p.replaceKeywordsWithValue(h.indexLabel,e,h,y):e.label?e.label:"";p._eventManager.objectMap[f]=g;g.center={x:x.x,y:x.y};g.y=e.y;g.radius=z;g.percentInnerRadius=D;g.indexLabelText=k;g.indexLabelPlacement=h.indexLabelPlacement;g.indexLabelLineColor=e.indexLabelLineColor?e.indexLabelLineColor:h.indexLabelLineColor?
h.indexLabelLineColor:e.color?e.color:h._colorSet[y%h._colorSet.length];g.indexLabelLineThickness=P(e.indexLabelLineThickness)?h.indexLabelLineThickness:e.indexLabelLineThickness;g.indexLabelLineDashType=e.indexLabelLineDashType?e.indexLabelLineDashType:h.indexLabelLineDashType;g.indexLabelFontColor=e.indexLabelFontColor?e.indexLabelFontColor:h.indexLabelFontColor;g.indexLabelFontStyle=e.indexLabelFontStyle?e.indexLabelFontStyle:h.indexLabelFontStyle;g.indexLabelFontWeight=e.indexLabelFontWeight?
e.indexLabelFontWeight:h.indexLabelFontWeight;g.indexLabelFontSize=e.indexLabelFontSize?e.indexLabelFontSize:h.indexLabelFontSize;g.indexLabelFontFamily=e.indexLabelFontFamily?e.indexLabelFontFamily:h.indexLabelFontFamily;g.indexLabelBackgroundColor=e.indexLabelBackgroundColor?e.indexLabelBackgroundColor:h.indexLabelBackgroundColor?h.indexLabelBackgroundColor:null;g.indexLabelMaxWidth=e.indexLabelMaxWidth?e.indexLabelMaxWidth:h.indexLabelMaxWidth?h.indexLabelMaxWidth:0.33*n.width;g.indexLabelWrap=
"undefined"!==typeof e.indexLabelWrap?e.indexLabelWrap:h.indexLabelWrap;g.startAngle=0===y?h.startAngle?h.startAngle/180*Math.PI:0:q[y-1].endAngle;g.startAngle=(g.startAngle+2*Math.PI)%(2*Math.PI);g.endAngle=g.startAngle+2*Math.PI/u*Math.abs(e.y);e=(g.endAngle+g.startAngle)/2;e=(e+2*Math.PI)%(2*Math.PI);g.midAngle=e;if(g.midAngle>Math.PI/2-t&&g.midAngle<Math.PI/2+t){if(0===a||q[c].midAngle>g.midAngle)c=y;a++}else if(g.midAngle>3*Math.PI/2-t&&g.midAngle<3*Math.PI/2+t){if(0===b||q[d].midAngle>g.midAngle)d=
y;b++}g.hemisphere=e>Math.PI/2&&e<=3*Math.PI/2?"left":"right";g.indexLabelTextBlock=new H(p.plotArea.ctx,{fontSize:g.indexLabelFontSize,fontFamily:g.indexLabelFontFamily,fontColor:g.indexLabelFontColor,fontStyle:g.indexLabelFontStyle,fontWeight:g.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:g.indexLabelBackgroundColor,maxWidth:g.indexLabelMaxWidth,maxHeight:g.indexLabelWrap?5*g.indexLabelFontSize:1.5*g.indexLabelFontSize,text:g.indexLabelText,padding:0,textBaseline:"top"});g.indexLabelTextBlock.measureText()}f=
e=0;k=!1;for(y=0;y<l.length;y++)g=q[(c+y)%l.length],1<a&&(g.midAngle>Math.PI/2-t&&g.midAngle<Math.PI/2+t)&&(e<=a/2&&!k?(g.hemisphere="right",e++):(g.hemisphere="left",k=!0));k=!1;for(y=0;y<l.length;y++)g=q[(d+y)%l.length],1<b&&(g.midAngle>3*Math.PI/2-t&&g.midAngle<3*Math.PI/2+t)&&(f<=b/2&&!k?(g.hemisphere="left",f++):(g.hemisphere="right",k=!0))}}function c(a){var b=p.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=p.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);for(b=0;b<
l.length;b++){var c=q[b].startAngle,d=q[b].endAngle;if(d>c){var e=0.07*z*Math.cos(q[b].midAngle),f=0.07*z*Math.sin(q[b].midAngle),g=!1;if(l[b].exploded){if(1E-9<Math.abs(q[b].center.x-(x.x+e))||1E-9<Math.abs(q[b].center.y-(x.y+f)))q[b].center.x=x.x+e*a,q[b].center.y=x.y+f*a,g=!0}else if(0<Math.abs(q[b].center.x-x.x)||0<Math.abs(q[b].center.y-x.y))q[b].center.x=x.x+e*(1-a),q[b].center.y=x.y+f*(1-a),g=!0;g&&(e={},e.dataSeries=h,e.dataPoint=h.dataPoints[b],e.index=b,p._toolTip.highlightObjects([e]));
sa(p.plotArea.ctx,q[b].center,q[b].radius,l[b].color?l[b].color:h._colorSet[b%h._colorSet.length],h.type,c,d,h.fillOpacity,q[b].percentInnerRadius)}}a=p.plotArea.ctx;a.save();a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<l.length;b++)c=q[b],c.indexLabelText&&(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,d=0,d="left"===c.hemisphere?"inside"!==h.indexLabelPlacement?-(c.indexLabelTextBlock.width+m):-c.indexLabelTextBlock.width/2:"inside"!==
h.indexLabelPlacement?m:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=d,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=d,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"inside"!==c.indexLabelPlacement&&0<c.indexLabelLineThickness&&(d=c.center.x+z*Math.cos(c.midAngle),e=c.center.y+z*Math.sin(c.midAngle),a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,a.setLineDash&&a.setLineDash(M(c.indexLabelLineDashType,c.indexLabelLineThickness)),a.beginPath(),
a.moveTo(d,e),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-m:m),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");a.save()}function d(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/2,f=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?
e-d:c-f}function e(a){for(var b=null,c=1;c<l.length;c++)if(b=(a+c+q.length)%q.length,q[b].hemisphere!==q[a].hemisphere){b=null;break}else if(q[b].indexLabelText&&b!==a&&(0>d(q[b],q[a])||("right"===q[a].hemisphere?q[b].indexLabelTextBlock.y>=q[a].indexLabelTextBlock.y:q[b].indexLabelTextBlock.y<=q[a].indexLabelTextBlock.y)))break;else b=null;return b}function f(a,b,c){c=(c||0)+1;if(1E3<c)return 0;b=b||0;var g=0,h=x.y-1*indexLabelRadius,k=x.y+1*indexLabelRadius;if(0<=a&&a<l.length){var m=q[a];if(0>
b&&m.indexLabelTextBlock.y<h||0<b&&m.indexLabelTextBlock.y>k)return 0;var n=0,p=0,p=n=n=0;0>b?m.indexLabelTextBlock.y-m.indexLabelTextBlock.height/2>h&&m.indexLabelTextBlock.y-m.indexLabelTextBlock.height/2+b<h&&(b=-(h-(m.indexLabelTextBlock.y-m.indexLabelTextBlock.height/2+b))):m.indexLabelTextBlock.y+m.indexLabelTextBlock.height/2<h&&m.indexLabelTextBlock.y+m.indexLabelTextBlock.height/2+b>k&&(b=m.indexLabelTextBlock.y+m.indexLabelTextBlock.height/2+b-k);b=m.indexLabelTextBlock.y+b;h=0;h="right"===
m.hemisphere?x.x+Math.sqrt(Math.pow(indexLabelRadius,2)-Math.pow(b-x.y,2)):x.x-Math.sqrt(Math.pow(indexLabelRadius,2)-Math.pow(b-x.y,2));p=x.x+z*Math.cos(m.midAngle);n=x.y+z*Math.sin(m.midAngle);n=Math.sqrt(Math.pow(h-p,2)+Math.pow(b-n,2));p=Math.acos(z/indexLabelRadius);n=Math.acos((indexLabelRadius*indexLabelRadius+z*z-n*n)/(2*z*indexLabelRadius));b=n<p?b-m.indexLabelTextBlock.y:0;h=null;for(k=1;k<l.length;k++)if(h=(a-k+q.length)%q.length,q[h].hemisphere!==q[a].hemisphere){h=null;break}else if(q[h].indexLabelText&&
q[h].hemisphere===q[a].hemisphere&&h!==a&&(0>d(q[h],q[a])||("right"===q[a].hemisphere?q[h].indexLabelTextBlock.y<=q[a].indexLabelTextBlock.y:q[h].indexLabelTextBlock.y>=q[a].indexLabelTextBlock.y)))break;else h=null;p=h;n=e(a);k=h=0;0>b?(k="right"===m.hemisphere?p:n,g=b,null!==k&&(p=-b,b=m.indexLabelTextBlock.y-m.indexLabelTextBlock.height/2-(q[k].indexLabelTextBlock.y+q[k].indexLabelTextBlock.height/2),b-p<r&&(h=-p,k=f(k,h,c+1),+k.toFixed(v)>+h.toFixed(v)&&(g=b>r?-(b-r):-(p-(k-h)))))):0<b&&(k="right"===
m.hemisphere?n:p,g=b,null!==k&&(p=b,b=q[k].indexLabelTextBlock.y-q[k].indexLabelTextBlock.height/2-(m.indexLabelTextBlock.y+m.indexLabelTextBlock.height/2),b-p<r&&(h=p,k=f(k,h,c+1),+k.toFixed(v)<+h.toFixed(v)&&(g=b>r?b-r:p-(h-k)))));g&&(c=m.indexLabelTextBlock.y+g,b=0,b="right"===m.hemisphere?x.x+Math.sqrt(Math.pow(indexLabelRadius,2)-Math.pow(c-x.y,2)):x.x-Math.sqrt(Math.pow(indexLabelRadius,2)-Math.pow(c-x.y,2)),m.midAngle>Math.PI/2-t&&m.midAngle<Math.PI/2+t?(h=(a-1+q.length)%q.length,h=q[h],a=
q[(a+1+q.length)%q.length],"left"===m.hemisphere&&"right"===h.hemisphere&&b>h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x-15:"right"===m.hemisphere&&("left"===a.hemisphere&&b<a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x+15)):m.midAngle>3*Math.PI/2-t&&m.midAngle<3*Math.PI/2+t&&(h=(a-1+q.length)%q.length,h=q[h],a=q[(a+1+q.length)%q.length],"right"===m.hemisphere&&"left"===h.hemisphere&&b<h.indexLabelTextBlock.x?b=h.indexLabelTextBlock.x+15:"left"===m.hemisphere&&("right"===a.hemisphere&&
b>a.indexLabelTextBlock.x)&&(b=a.indexLabelTextBlock.x-15)),m.indexLabelTextBlock.y=c,m.indexLabelTextBlock.x=b,m.indexLabelAngle=Math.atan2(m.indexLabelTextBlock.y-x.y,m.indexLabelTextBlock.x-x.x))}return g}function g(){var a=p.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=a=0,c=0,g=!0,b=0;10>b&&(1>b||0<c);b++){if(h.radius||!h.radius&&"undefined"!==typeof h.innerRadius&&null!==h.innerRadius&&z-c<=A)g=!1;g&&(z-=c);c=0;if("inside"!==h.indexLabelPlacement){indexLabelRadius=
z*s;for(a=0;a<l.length;a++){var k=q[a];k.indexLabelTextBlock.x=x.x+indexLabelRadius*Math.cos(k.midAngle);k.indexLabelTextBlock.y=x.y+indexLabelRadius*Math.sin(k.midAngle);k.indexLabelAngle=k.midAngle;k.radius=z;k.percentInnerRadius=D}for(var t,w,a=0;a<l.length;a++){var k=q[a],u=e(a);if(null!==u){t=q[a];w=q[u];var y=0,y=d(t,w)-r;if(0>y){for(var B=w=0,C=0;C<l.length;C++)C!==a&&q[C].hemisphere===k.hemisphere&&(q[C].indexLabelTextBlock.y<k.indexLabelTextBlock.y?w++:B++);w=y/(w+B||1)*B;var B=-1*(y-w),
E=C=0;"right"===k.hemisphere?(C=f(a,w),B=-1*(y-C),E=f(u,B),+E.toFixed(v)<+B.toFixed(v)&&+C.toFixed(v)<=+w.toFixed(v)&&f(a,-(B-E))):(C=f(u,w),B=-1*(y-C),E=f(a,B),+E.toFixed(v)<+B.toFixed(v)&&+C.toFixed(v)<=+w.toFixed(v)&&f(u,-(B-E)))}}}}else for(a=0;a<l.length;a++)k=q[a],indexLabelRadius="pie"===h.type?0.7*z:0.8*z,u=x.x+indexLabelRadius*Math.cos(k.midAngle),w=x.y+indexLabelRadius*Math.sin(k.midAngle),k.indexLabelTextBlock.x=u,k.indexLabelTextBlock.y=w;for(a=0;a<l.length;a++)if(k=q[a],u=k.indexLabelTextBlock.measureText(),
0!==u.height&&0!==u.width)u=u=0,"right"===k.hemisphere?(u=n.x2-(k.indexLabelTextBlock.x+k.indexLabelTextBlock.width+m),u*=-1):u=n.x1-(k.indexLabelTextBlock.x-k.indexLabelTextBlock.width-m),0<u&&(!g&&k.indexLabelText&&(w="right"===k.hemisphere?n.x2-k.indexLabelTextBlock.x:k.indexLabelTextBlock.x-n.x1,0.3*k.indexLabelTextBlock.maxWidth>w?k.indexLabelText="":k.indexLabelTextBlock.maxWidth=0.85*w,0.3*k.indexLabelTextBlock.maxWidth<w&&(k.indexLabelTextBlock.x-="right"===k.hemisphere?2:-2)),Math.abs(k.indexLabelTextBlock.y-
k.indexLabelTextBlock.height/2-x.y)<z||Math.abs(k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2-x.y)<z)&&(u/=Math.abs(Math.cos(k.indexLabelAngle)),9<u&&(u*=0.3),u>c&&(c=u)),u=u=0,0<k.indexLabelAngle&&k.indexLabelAngle<Math.PI?(u=n.y2-(k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2+5),u*=-1):u=n.y1-(k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2-5),0<u&&(!g&&k.indexLabelText&&(w=0<k.indexLabelAngle&&k.indexLabelAngle<Math.PI?-1:1,0===f(a,u*w)&&f(a,2*w)),Math.abs(k.indexLabelTextBlock.x-
x.x)<z&&(u/=Math.abs(Math.sin(k.indexLabelAngle)),9<u&&(u*=0.3),u>c&&(c=u)));var F=function(a,b,c){for(var d=[],e=0;d.push(q[b]),b!==c;b=(b+1+l.length)%l.length);d.sort(function(a,b){return a.y-b.y});for(b=0;b<d.length;b++)if(c=d[b],e<0.7*a)e+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};(function(){for(var a=-1,b=-1,c=0,f=!1,g=0;g<l.length;g++)if(f=!1,t=q[g],t.indexLabelText){var h=e(g);if(null!==h){var k=q[h];y=0;
y=d(t,k);var n;if(n=0>y){n=t.indexLabelTextBlock.x;var p=t.indexLabelTextBlock.y-t.indexLabelTextBlock.height/2,r=t.indexLabelTextBlock.y+t.indexLabelTextBlock.height/2,s=k.indexLabelTextBlock.y-k.indexLabelTextBlock.height/2,w=k.indexLabelTextBlock.x+k.indexLabelTextBlock.width,v=k.indexLabelTextBlock.y+k.indexLabelTextBlock.height/2;n=t.indexLabelTextBlock.x+t.indexLabelTextBlock.width<k.indexLabelTextBlock.x-m||n>w+m||p>v+m||r<s-m?!1:!0}n?(0>a&&(a=g),h!==a&&(b=h,c+=-y),0===g%Math.max(l.length/
10,3)&&(f=!0)):f=!0;f&&(0<c&&0<=a&&0<=b)&&(F(c,a,b),b=a=-1,c=0)}}0<c&&F(c,a,b)})()}}function k(){p.plotArea.layoutManager.reset();p._title&&(p._title.dockInsidePlotArea||"center"===p._title.horizontalAlign&&"center"===p._title.verticalAlign)&&p._title.render();if(p.subtitles)for(var a=0;a<p.subtitles.length;a++){var b=p.subtitles[a];(b.dockInsidePlotArea||"center"===b.horizontalAlign&&"center"===b.verticalAlign)&&b.render()}p.legend&&(p.legend.dockInsidePlotArea||"center"===p.legend.horizontalAlign&&
"center"===p.legend.verticalAlign)&&p.legend.render()}var p=this;if(!(0>=a.dataSeriesIndexes.length)){var h=this.data[a.dataSeriesIndexes[0]],l=h.dataPoints,m=10,n=this.plotArea,q=[],r=2,s=1.3,t=20/180*Math.PI,v=6,x={x:(n.x2+n.x1)/2,y:(n.y2+n.y1)/2},u=0;a=!1;for(var y=0;y<l.length;y++)u+=Math.abs(l[y].y),!a&&("undefined"!==typeof l[y].indexLabel&&null!==l[y].indexLabel&&0<l[y].indexLabel.toString().length)&&(a=!0),!a&&("undefined"!==typeof l[y].label&&null!==l[y].label&&0<l[y].label.toString().length)&&
(a=!0);if(0!==u){a=a||"undefined"!==typeof h.indexLabel&&null!==h.indexLabel&&0<h.indexLabel.toString().length;var z="inside"!==h.indexLabelPlacement&&a?0.75*Math.min(n.width,n.height)/2:0.92*Math.min(n.width,n.height)/2;h.radius&&(z=Aa(h.radius,z));var A="undefined"!==typeof h.innerRadius&&null!==h.innerRadius?Aa(h.innerRadius,z):0.7*z,D=Math.min(A/z,(z-1)/z);this.pieDoughnutClickHandler=function(a){p.isAnimating||(a=a.dataPoint,a.exploded=a.exploded?!1:!0,1<this.dataPoints.length&&p._animator.animate(0,
500,function(a){c(a);k()}))};b();g();g();g();g();this.disableToolTip=!0;this._animator.animate(0,this.animatedRender?this.animationDuration:0,function(a){var b=p.plotArea.ctx;b.clearRect(n.x1,n.y1,n.width,n.height);b.fillStyle=p.backgroundColor;b.fillRect(n.x1,n.y1,n.width,n.height);a=q[0].startAngle+2*Math.PI*a;for(b=0;b<l.length;b++){var c=0===b?q[b].startAngle:d,d=c+(q[b].endAngle-q[b].startAngle),e=!1;d>a&&(d=a,e=!0);var f=l[b].color?l[b].color:h._colorSet[b%h._colorSet.length];d>c&&sa(p.plotArea.ctx,
q[b].center,q[b].radius,f,h.type,c,d,h.fillOpacity,q[b].percentInnerRadius);if(e)break}k()},function(){p.disableToolTip=!1;p._animator.animate(0,p.animatedRender?500:0,function(a){c(a);k()})})}}};u.prototype.animationRequestId=null;u.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();u.prototype.cancelRequestAnimFrame=
window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;Z.prototype.registerSpace=function(a,b){"top"===a?this._topOccupied+=b.height:"bottom"===a?this._bottomOccupied+=b.height:"left"===a?this._leftOccupied+=b.width:"right"===a&&(this._rightOccupied+=b.width)};Z.prototype.unRegisterSpace=function(a,b){"top"===a?this._topOccupied-=b.height:"bottom"===a?this._bottomOccupied-=
b.height:"left"===a?this._leftOccupied-=b.width:"right"===a&&(this._rightOccupied-=b.width)};Z.prototype.getFreeSpace=function(){return{x1:this._x1+this._leftOccupied,y1:this._y1+this._topOccupied,x2:this._x2-this._rightOccupied,y2:this._y2-this._bottomOccupied,width:this._x2-this._x1-this._rightOccupied-this._leftOccupied,height:this._y2-this._y1-this._bottomOccupied-this._topOccupied}};Z.prototype.reset=function(){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=this._padding};
O(H,G);H.prototype.render=function(a){a&&this.ctx.save();var b=this.ctx.font;this.ctx.textBaseline=this.textBaseline;var c=0;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y+c);"middle"===this.textBaseline&&(c=-this._lineHeight/2);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var d=0,e=this.padding,f=null;(0<this.borderThickness&&this.borderColor||this.backgroundColor)&&this.ctx.roundRect(0,c,this.width,this.height,this.cornerRadius,this.borderThickness,
this.backgroundColor,this.borderColor);this.ctx.fillStyle=this.fontColor;for(c=0;c<this._wrappedText.lines.length;c++)f=this._wrappedText.lines[c],"right"===this.horizontalAlign?d=this.width-f.width-this.padding:"left"===this.horizontalAlign?d=this.padding:"center"===this.horizontalAlign&&(d=(this.width-2*this.padding)/2-f.width/2+this.padding),this.ctx.fillText(f.text,d,e),e+=f.height;this.ctx.font=b;a&&this.ctx.restore()};H.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=
null};H.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};H.prototype._getLineWithWidth=function(a,b,c){a=String(a);if(!a)return{text:"",width:0};var d=c=0,e=a.length-1,f=Infinity;for(this.ctx.font=this._getFontString();d<=e;){var f=Math.floor((d+e)/2),g=a.substr(0,f+1);c=this.ctx.measureText(g).width;if(c<b)d=f+1;else if(c>b)e=f-1;else break}c>b&&1<g.length&&
(g=g.substr(0,g.length-1),c=this.ctx.measureText(g).width);b=!0;if(g.length===a.length||" "===a[g.length])b=!1;b&&(a=g.split(" "),1<a.length&&a.pop(),g=a.join(" "),c=this.ctx.measureText(g).width);return{text:g,width:c}};H.prototype._wrapText=function(){var a=new String($(String(this.text))),b=[],c=this.ctx.font,d=0,e=0;for(this.ctx.font=this._getFontString();0<a.length;){var f=this.maxHeight-2*this.padding,g=this._getLineWithWidth(a,this.maxWidth-2*this.padding,!1);g.height=this._lineHeight;b.push(g);
e=Math.max(e,g.width);d+=g.height;a=$(a.slice(g.text.length,a.length));f&&d>f&&(g=b.pop(),d-=g.height)}this._wrappedText={lines:b,width:e,height:d};this.width=e+2*this.padding;this.height=d+2*this.padding;this.ctx.font=c};H.prototype._getFontString=function(){var a;a=""+(this.fontStyle?this.fontStyle+" ":"");a+=this.fontWeight?this.fontWeight+" ":"";a+=this.fontSize?this.fontSize+"px ":"";var b=this.fontFamily?this.fontFamily+"":"";!t&&b&&(b=b.split(",")[0],"'"!==b[0]&&'"'!==b[0]&&(b="'"+b+"'"));
return a+=b};O(ba,G);ba.prototype.render=function(){if(this.text){var a=this.dockInsidePlotArea?this.chart.plotArea:this.chart,b=a.layoutManager.getFreeSpace(),c=b.x1,d=b.y1,e=0,f=0,g=this.chart._menuButton&&this.chart.exportEnabled&&"top"===this.verticalAlign?22:0,k,p;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(null===this.maxWidth&&(this.maxWidth=b.width-4-g*("center"===this.horizontalAlign?2:1)),f=0.5*b.height-this.margin-2,e=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||
"right"===this.horizontalAlign?(null===this.maxWidth&&(this.maxWidth=b.height-4),f=0.5*b.width-this.margin-2):"center"===this.horizontalAlign&&(null===this.maxWidth&&(this.maxWidth=b.width-4),f=0.5*b.height-4));this.wrap||(f=Math.min(f,Math.max(1.5*this.fontSize,this.fontSize+2.5*this.padding)));var f=new H(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,
borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:this.maxWidth,maxHeight:f,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:"top"}),h=f.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(d=b.y1+2,p="top"):"bottom"===this.verticalAlign&&(d=b.y2-2-h.height,p="bottom"),"left"===this.horizontalAlign?c=b.x1+2:"center"===this.horizontalAlign?c=b.x1+b.width/2-h.width/
2:"right"===this.horizontalAlign&&(c=b.x2-2-h.width-g),k=this.horizontalAlign,this.width=h.width,this.height=h.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(c=b.x1+2,d=b.y2-2-(this.maxWidth/2-h.width/2),e=-90,p="left",this.width=h.height,this.height=h.width):"right"===this.horizontalAlign?(c=b.x2-2,d=b.y1+2+(this.maxWidth/2-h.width/2),e=90,p="right",this.width=h.height,this.height=h.width):"center"===this.horizontalAlign&&(d=a.y1+(a.height/2-h.height/2),c=a.x1+(a.width/2-
h.width/2),p="center",this.width=h.width,this.height=h.height),k="center");f.x=c;f.y=d;f.angle=e;f.horizontalAlign=k;f.render(!0);a.layoutManager.registerSpace(p,{width:this.width+("left"===p||"right"===p?this.margin+2:0),height:this.height+("top"===p||"bottom"===p?this.margin+2:0)});this.bounds={x1:c,y1:d,x2:c+this.width,y2:d+this.height};this.ctx.textBaseline="top"}};O(ja,G);ja.prototype.render=ba.prototype.render;O(ka,G);ka.prototype.render=function(){var a=this.dockInsidePlotArea?this.chart.plotArea:
this.chart,b=a.layoutManager.getFreeSpace(),c=null,d=0,e=0,f=0,g=0,k=[],p=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",c=this.verticalAlign,f=null!==this.maxWidth?this.maxWidth:0.7*b.width,g=null!==this.maxHeight?this.maxHeight:0.5*b.height):"center"===this.verticalAlign&&(this.orientation="vertical",c=this.horizontalAlign,f=null!==this.maxWidth?this.maxWidth:0.5*b.width,g=null!==this.maxHeight?this.maxHeight:0.7*b.height);for(var h=0;h<this.dataSeries.length;h++){var l=
this.dataSeries[h];if("pie"!==l.type&&"doughnut"!==l.type&&"funnel"!==l.type){var m=l.legendMarkerType?l.legendMarkerType:"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type&&"scatter"!==l.type&&"bubble"!==l.type||!l.markerType?T.getDefaultLegendMarker(l.type):l.markerType,n=l.legendText?l.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart._publicChartReference,legend:this._options,dataSeries:l,dataPoint:null}):l.name,q=l.legendMarkerColor?l.legendMarkerColor:l.markerColor?
l.markerColor:l._colorSet[0],r=l.markerSize||"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type?0.6*this.lineHeight:0,s=l.legendMarkerBorderColor?l.legendMarkerBorderColor:l.markerBorderColor,t=l.legendMarkerBorderThickness?l.legendMarkerBorderThickness:l.markerBorderThickness?Math.max(1,Math.round(0.2*r)):0,n=this.chart.replaceKeywordsWithValue(n,l.dataPoints[0],l,h),m={markerType:m,markerColor:q,text:n,textBlock:null,chartType:l.type,markerSize:r,lineColor:l._colorSet[0],dataSeriesIndex:l.index,
dataPointIndex:null,markerBorderColor:s,markerBorderThickness:t};k.push(m)}else for(var v=0;v<l.dataPoints.length;v++){var u=l.dataPoints[v],m=u.legendMarkerType?u.legendMarkerType:l.legendMarkerType?l.legendMarkerType:T.getDefaultLegendMarker(l.type),n=u.legendText?u.legendText:l.legendText?l.legendText:this.itemTextFormatter?this.itemTextFormatter({chart:this.chart._publicChartReference,legend:this._options,dataSeries:l,dataPoint:u}):u.name?u.name:"DataPoint: "+(v+1),q=u.legendMarkerColor?u.legendMarkerColor:
l.legendMarkerColor?l.legendMarkerColor:u.color?u.color:l.color?l.color:l._colorSet[v%l._colorSet.length],r=0.6*this.lineHeight,s=u.legendMarkerBorderColor?u.legendMarkerBorderColor:l.legendMarkerBorderColor?l.legendMarkerBorderColor:u.markerBorderColor?u.markerBorderColor:l.markerBorderColor,t=u.legendMarkerBorderThickness?u.legendMarkerBorderThickness:l.legendMarkerBorderThickness?l.legendMarkerBorderThickness:u.markerBorderThickness||l.markerBorderThickness?Math.max(1,Math.round(0.2*r)):0,n=this.chart.replaceKeywordsWithValue(n,
u,l,v),m={markerType:m,markerColor:q,text:n,textBlock:null,chartType:l.type,markerSize:r,dataSeriesIndex:h,dataPointIndex:v,markerBorderColor:s,markerBorderThickness:t};(u.showInLegend||l.showInLegend&&!1!==u.showInLegend)&&k.push(m)}}!0===this.reversed&&k.reverse();if(0<k.length){l=null;v=n=u=0;n=null!==this.itemWidth?null!==this.itemMaxWidth?Math.min(this.itemWidth,this.itemMaxWidth,f):Math.min(this.itemWidth,f):null!==this.itemMaxWidth?Math.min(this.itemMaxWidth,f):f;r=0===r?0.6*this.lineHeight:
r;n-=r+0.1*this.horizontalSpacing;for(h=0;h<k.length;h++){m=k[h];if("line"===m.chartType||"spline"===m.chartType||"stepLine"===m.chartType)n-=2*0.1*this.lineHeight;if(!(0>=g||"undefined"===typeof g||0>=n||"undefined"===typeof n)){if("horizontal"===this.orientation){m.textBlock=new H(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:this.itemWrap?g:this.lineHeight,angle:0,text:m.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,
textBaseline:"top"});m.textBlock.measureText();null!==this.itemWidth&&(m.textBlock.width=this.itemWidth-(r+0.1*this.horizontalSpacing+("line"===m.chartType||"spline"===m.chartType||"stepLine"===m.chartType?2*0.1*this.lineHeight:0)));if(!l||l.width+Math.round(m.textBlock.width+0.1*this.horizontalSpacing+r+(0===l.width?0:this.horizontalSpacing)+("line"===m.chartType||"spline"===m.chartType||"stepLine"===m.chartType?2*0.1*this.lineHeight:0))>f)l={items:[],width:0},p.push(l),this.height+=v,v=0;v=Math.max(v,
m.textBlock.height)}else m.textBlock=new H(this.ctx,{x:0,y:0,maxWidth:n,maxHeight:!0===this.itemWrap?g:1.5*this.fontSize,angle:0,text:m.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),m.textBlock.measureText(),null!==this.itemWidth&&(m.textBlock.width=this.itemWidth-(r+0.1*this.horizontalSpacing+("line"===m.chartType||"spline"===m.chartType||"stepLine"===m.chartType?2*0.1*
this.lineHeight:0))),this.height<=g?(l={items:[],width:0},p.push(l)):(l=p[u],u=(u+1)%p.length),this.height+=m.textBlock.height;m.textBlock.x=l.width;m.textBlock.y=0;l.width+=Math.round(m.textBlock.width+0.1*this.horizontalSpacing+r+(0===l.width?0:this.horizontalSpacing)+("line"===m.chartType||"spline"===m.chartType||"stepLine"===m.chartType?2*0.1*this.lineHeight:0));l.items.push(m);this.width=Math.max(l.width,this.width)}}this.height=!1===this.itemWrap?p.length*this.lineHeight:this.height+v;this.height=
Math.min(g,this.height);this.width=Math.min(f,this.width)}"top"===this.verticalAlign?(e="left"===this.horizontalAlign?b.x1:"right"===this.horizontalAlign?b.x2-this.width:b.x1+b.width/2-this.width/2,d=b.y1):"center"===this.verticalAlign?(e="left"===this.horizontalAlign?b.x1:"right"===this.horizontalAlign?b.x2-this.width:b.x1+b.width/2-this.width/2,d=b.y1+b.height/2-this.height/2):"bottom"===this.verticalAlign&&(e="left"===this.horizontalAlign?b.x1:"right"===this.horizontalAlign?b.x2-this.width:b.x1+
b.width/2-this.width/2,d=b.y2-this.height);this.items=k;for(h=0;h<this.items.length;h++)m=k[h],m.id=++this.chart._eventManager.lastObjectId,this.chart._eventManager.objectMap[m.id]={id:m.id,objectType:"legendItem",legendItemIndex:h,dataSeriesIndex:m.dataSeriesIndex,dataPointIndex:m.dataPointIndex};for(h=b=0;h<p.length;h++){l=p[h];for(k=v=0;k<l.items.length;k++){m=l.items[k];n=m.textBlock.x+e+(0===k?0.2*r:this.horizontalSpacing);q=d+b;u=n;this.chart.data[m.dataSeriesIndex].visible||(this.ctx.globalAlpha=
0.5);this.ctx.save();this.ctx.rect(e,d,f,g);this.ctx.clip();if("line"===m.chartType||"stepLine"===m.chartType||"spline"===m.chartType)this.ctx.strokeStyle=m.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),this.ctx.moveTo(n-0.1*this.lineHeight,q+this.lineHeight/2),this.ctx.lineTo(n+0.7*this.lineHeight,q+this.lineHeight/2),this.ctx.stroke(),u-=0.1*this.lineHeight;K.drawMarker(n+r/2,q+this.lineHeight/2,this.ctx,m.markerType,m.markerSize,m.markerColor,m.markerBorderColor,
m.markerBorderThickness);m.textBlock.x=n+0.1*this.horizontalSpacing+r;if("line"===m.chartType||"stepLine"===m.chartType||"spline"===m.chartType)m.textBlock.x+=0.1*this.lineHeight;m.textBlock.y=q;m.textBlock.render(!0);this.ctx.restore();v=0<k?Math.max(v,m.textBlock.height):m.textBlock.height;this.chart.data[m.dataSeriesIndex].visible||(this.ctx.globalAlpha=1);n=B(m.id);this.ghostCtx.fillStyle=n;this.ghostCtx.beginPath();this.ghostCtx.fillRect(u,m.textBlock.y,m.textBlock.x+m.textBlock.width-u,m.textBlock.height);
m.x1=this.chart._eventManager.objectMap[m.id].x1=u;m.y1=this.chart._eventManager.objectMap[m.id].y1=m.textBlock.y;m.x2=this.chart._eventManager.objectMap[m.id].x2=m.textBlock.x+m.textBlock.width;m.y2=this.chart._eventManager.objectMap[m.id].y2=m.textBlock.y+m.textBlock.height}b+=v}a.layoutManager.registerSpace(c,{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:e,y1:d,x2:e+this.width,y2:d+this.height}};O(pa,G);pa.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();
this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};O(T,G);T.prototype.getDefaultAxisPlacement=function(){var a=this.type;if("column"===a||"line"===a||"stepLine"===a||"spline"===a||"area"===a||"stepArea"===a||"splineArea"===a||"stackedColumn"===a||"stackedLine"===a||"bubble"===a||"scatter"===a||"stackedArea"===a||"stackedColumn100"===a||"stackedLine100"===a||"stackedArea100"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeArea"===a||"rangeSplineArea"===a)return"normal";if("bar"===
a||"stackedBar"===a||"stackedBar100"===a||"rangeBar"===a)return"xySwapped";if("pie"===a||"doughnut"===a||"funnel"===a)return"none";window.console.log("Unknown Chart Type: "+a);return null};T.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a||"candlestick"===a||"ohlc"===a||"rangeColumn"===a||"rangeBar"===a||"rangeArea"===
a||"rangeSplineArea"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a||"funnel"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};T.prototype.getDataPointAtX=function(a,b){if(!this.dataPoints||0===this.dataPoints.length)return null;var c={dataPoint:null,distance:Infinity,index:NaN},d=null,e=0,f=0,g=1,k=Infinity,p=0,h=0,l=0;"none"!==this.chart.plotInfo.axisPlacement&&
(l=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,l=0<l?Math.min(Math.max((this.dataPoints.length-1)/l*(a-this.dataPoints[0].x)>>0,0),this.dataPoints.length):0);for(;;){f=0<g?l+e:l-e;if(0<=f&&f<this.dataPoints.length){var d=this.dataPoints[f],m=Math.abs(d.x-a);m<c.distance&&(c.dataPoint=d,c.distance=m,c.index=f);d=Math.abs(d.x-a);d<=k?k=d:0<g?p++:h++;if(1E3<p&&1E3<h)break}else if(0>l-e&&l+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}return b||c.dataPoint.x!==a?b&&null!==
c.dataPoint?c:null:c};T.prototype.getDataPointAtXY=function(a,b,c){if(!this.dataPoints||0===this.dataPoints.length||a<this.chart.plotArea.x1||a>this.chart.plotArea.x2||b<this.chart.plotArea.y1||b>this.chart.plotArea.y2)return null;c=c||!1;var d=[],e=0,f=0,g=1,k=!1,p=Infinity,h=0,l=0,m=0;"none"!==this.chart.plotInfo.axisPlacement&&(m=this.chart.axisX.getXValueAt({x:a,y:b}),f=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,m=0<f?Math.min(Math.max((this.dataPoints.length-1)/f*(m-this.dataPoints[0].x)>>
0,0),this.dataPoints.length):0);for(;;){f=0<g?m+e:m-e;if(0<=f&&f<this.dataPoints.length){var n=this.chart._eventManager.objectMap[this.dataPointIds[f]],q=this.dataPoints[f],r=null;if(n){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":case "rangeColumn":case "rangeBar":a>=n.x1&&(a<=n.x2&&b>=n.y1&&b<=n.y2)&&(d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y1-
b),Math.abs(n.y2-b))}),k=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var s=N("markerSize",q,this)||4,t=c?20:s,r=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-b,2));r<=t&&d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:r});f=Math.abs(n.x1-a);f<=p?p=f:0<g?h++:l++;r<=s/2&&(k=!0);break;case "rangeArea":case "rangeSplineArea":s=N("markerSize",q,this)||4;t=c?20:s;r=Math.min(Math.sqrt(Math.pow(n.x1-
a,2)+Math.pow(n.y1-b,2)),Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y2-b,2)));r<=t&&d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:r});f=Math.abs(n.x1-a);f<=p?p=f:0<g?h++:l++;r<=s/2&&(k=!0);break;case "bubble":s=n.size;r=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-b,2));r<=s/2&&(d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:r}),k=!0);break;case "pie":case "doughnut":s=n.center;t="doughnut"===this.type?n.percentInnerRadius*n.radius:0;r=Math.sqrt(Math.pow(s.x-a,2)+Math.pow(s.y-
b,2));r<n.radius&&r>t&&(r=Math.atan2(b-s.y,a-s.x),0>r&&(r+=2*Math.PI),r=Number(((180*(r/Math.PI)%360+360)%360).toFixed(12)),s=Number(((180*(n.startAngle/Math.PI)%360+360)%360).toFixed(12)),t=Number(((180*(n.endAngle/Math.PI)%360+360)%360).toFixed(12)),0===t&&1<n.endAngle&&(t=360),s>=t&&0!==q.y&&(t+=360,r<s&&(r+=360)),r>s&&r<t&&(d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:0}),k=!0));break;case "candlestick":if(a>=n.x1-n.borderThickness/2&&a<=n.x2+n.borderThickness/2&&b>=n.y2-n.borderThickness/
2&&b<=n.y3+n.borderThickness/2||Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&b>=n.y1&&b<=n.y4)d.push({dataPoint:q,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-b),Math.abs(n.y3-b))}),k=!0;break;case "ohlc":if(Math.abs(n.x2-a+n.x1-a)<n.borderThickness&&b>=n.y2&&b<=n.y3||a>=n.x1&&a<=(n.x2+n.x1)/2&&b>=n.y1-n.borderThickness/2&&b<=n.y1+n.borderThickness/2||a>=(n.x1+n.x2)/2&&a<=n.x2&&b>=n.y4-n.borderThickness/2&&b<=n.y4+n.borderThickness/2)d.push({dataPoint:q,
dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y2-b),Math.abs(n.y3-b))}),k=!0}if(k||1E3<h&&1E3<l)break}}else if(0>m-e&&m+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}a=null;for(b=0;b<d.length;b++)a?d[b].distance<=a.distance&&(a=d[b]):a=d[b];return a};T.prototype.getMarkerProperties=function(a,b,c,d){var e=this.dataPoints;return{x:b,y:c,ctx:d,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,
color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};O(C,G);C.prototype.createLabels=function(){var a,b=0,c,d=0,e=0,b=0;if("bottom"===this._position||"top"===
this._position)b=this.lineCoordinates.width/Math.abs(this.viewportMaximum-this.viewportMinimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.9*b>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.7*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?0.5*this.chart.height>>0:1.5*this.labelFontSize;else if("left"===this._position||"right"===this._position)b=this.lineCoordinates.height/Math.abs(this.viewportMaximum-
this.viewportMinimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.3*this.chart.width>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.5*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?2*b>>0:1.5*this.labelFontSize;if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(c=ta(new Date(this.viewportMaximum),this.interval,this.intervalType),b=this.intervalStartPosition;b<
c;ta(b,this.interval,this.intervalType))a=b.getTime(),a=this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[a]?this.labels[a]:ra(b,this.valueFormatString,this.chart._cultureInfo),a=new H(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,
fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:b.getTime(),textBlock:a,effectiveHeight:null});else{c=this.viewportMaximum;if(this.labels&&this.labels.length){a=Math.ceil(this.interval);for(var f=Math.ceil(this.intervalStartPosition),g=!1,b=f;b<this.viewportMaximum;b+=a)if(this.labels[b])g=!0;else{g=!1;break}g&&(this.interval=a,this.intervalStartPosition=f)}for(b=this.intervalStartPosition;b<=c;b=parseFloat((b+this.interval).toFixed(14)))a=
this.labelFormatter?this.labelFormatter({chart:this.chart._publicChartReference,axis:this._options,value:b,label:this.labels[b]?this.labels[b]:null}):"axisX"===this.type&&this.labels[b]?this.labels[b]:X(b,this.valueFormatString,this.chart._cultureInfo),a=new H(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,
textBaseline:"middle",borderThickness:0}),this._labels.push({position:b,textBlock:a,effectiveHeight:null})}for(b=0;b<this.stripLines.length;b++)c=this.stripLines[b],a=new H(this.ctx,{x:0,y:0,backgroundColor:c.labelBackgroundColor,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:c.labelFormatter?c.labelFormatter({chart:this.chart._publicChartReference,axis:this,stripLine:c}):c.label,horizontalAlign:"left",fontSize:c.labelFontSize,fontFamily:c.labelFontFamily,fontWeight:c.labelFontWeight,fontColor:c._options.labelFontColor||
c.color,fontStyle:c.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:c.value,textBlock:a,effectiveHeight:null,stripLine:c})};C.prototype.createLabelsAndCalculateWidth=function(){var a=0;this._labels=[];if("left"===this._position||"right"===this._position)for(this.createLabels(),i=0;i<this._labels.length;i++){var b=this._labels[i].textBlock.measureText(),c=0,c=0===this.labelAngle?b.width:b.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+b.height/2*Math.sin(Math.PI/
180*Math.abs(this.labelAngle));a<c&&(a=c);this._labels[i].effectiveWidth=c}return(this.title?ea(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+a+this.tickLength+5};C.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];var b,c=0;this.createLabels();if("bottom"===this._position||"top"===this._position)for(c=0;c<this._labels.length;c++){b=this._labels[c].textBlock;b=b.measureText();var d=0,d=0===this.labelAngle?b.height:b.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+
b.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<d&&(a=d);this._labels[c].effectiveHeight=d}return(this.title?ea(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+a+this.tickLength+5};C.setLayoutAndRender=function(a,b,c,d,e){var f,g,k,p=a.chart,h=p.ctx;a.calculateAxisParameters();b&&b.calculateAxisParameters();c&&c.calculateAxisParameters();var l=b?b.margin:0;g=c?c.margin:0;if("normal"===d){a.lineCoordinates={};var m=Math.ceil(b?b.createLabelsAndCalculateWidth():0);f=
Math.round(e.x1+m+l);a.lineCoordinates.x1=f;l=Math.ceil(c?c.createLabelsAndCalculateWidth():0);k=Math.round(e.x2-l-g>a.chart.width-10?a.chart.width-10:e.x2-l-g);a.lineCoordinates.x2=k;a.lineCoordinates.width=Math.abs(k-f);var n=Math.ceil(a.createLabelsAndCalculateHeight());g=Math.round(e.y2-n-a.margin);d=Math.round(e.y2-a.margin);a.lineCoordinates.y1=g;a.lineCoordinates.y2=g;a.boundingRect={x1:f,y1:g,x2:k,y2:d,width:k-f,height:d-g};b&&(f=Math.round(e.x1+b.margin),g=Math.round(10>e.y1?10:e.y1),k=Math.round(e.x1+
m+b.margin),d=Math.round(e.y2-n-a.margin),b.lineCoordinates={x1:k,y1:g,x2:k,y2:d,height:Math.abs(d-g)},b.boundingRect={x1:f,y1:g,x2:k,y2:d,width:k-f,height:d-g});c&&(f=Math.round(a.lineCoordinates.x2),g=Math.round(10>e.y1?10:e.y1),k=Math.round(f+l),d=Math.round(e.y2-n-a.margin),c.lineCoordinates={x1:f,y1:g,x2:f,y2:d,height:Math.abs(d-g)},c.boundingRect={x1:f,y1:g,x2:k,y2:d,width:k-f,height:d-g});a.calculateValueToPixelConversionParameters();b&&b.calculateValueToPixelConversionParameters();c&&c.calculateValueToPixelConversionParameters();
h.save();h.rect(5,a.boundingRect.y1,a.chart.width-10,a.boundingRect.height);h.clip();a.renderLabelsTicksAndTitle();h.restore();b&&b.renderLabelsTicksAndTitle();c&&c.renderLabelsTicksAndTitle()}else{m=Math.ceil(a.createLabelsAndCalculateWidth());b&&(b.lineCoordinates={},f=Math.round(e.x1+m+a.margin),k=Math.round(e.x2>b.chart.width-10?b.chart.width-10:e.x2),b.lineCoordinates.x1=f,b.lineCoordinates.x2=k,b.lineCoordinates.width=Math.abs(k-f));c&&(c.lineCoordinates={},f=Math.round(e.x1+m+a.margin),k=Math.round(e.x2>
c.chart.width-10?c.chart.width-10:e.x2),c.lineCoordinates.x1=f,c.lineCoordinates.x2=k,c.lineCoordinates.width=Math.abs(k-f));var n=Math.ceil(b?b.createLabelsAndCalculateHeight():0),q=Math.ceil(c?c.createLabelsAndCalculateHeight():0);b&&(g=Math.round(e.y2-n-b.margin),d=Math.round(e.y2-l>b.chart.height-10?b.chart.height-10:e.y2-l),b.lineCoordinates.y1=g,b.lineCoordinates.y2=g,b.boundingRect={x1:f,y1:g,x2:k,y2:d,width:k-f,height:n});c&&(g=Math.round(e.y1+c.margin),d=e.y1+c.margin+q,c.lineCoordinates.y1=
d,c.lineCoordinates.y2=d,c.boundingRect={x1:f,y1:g,x2:k,y2:d,width:k-f,height:q});f=Math.round(e.x1+a.margin);g=Math.round(c?c.lineCoordinates.y2:10>e.y1?10:e.y1);k=Math.round(e.x1+m+a.margin);d=Math.round(b?b.lineCoordinates.y1:e.y2-l>a.chart.height-10?a.chart.height-10:e.y2-l);a.lineCoordinates={x1:k,y1:g,x2:k,y2:d,height:Math.abs(d-g)};a.boundingRect={x1:f,y1:g,x2:k,y2:d,width:k-f,height:d-g};a.calculateValueToPixelConversionParameters();b&&b.calculateValueToPixelConversionParameters();c&&c.calculateValueToPixelConversionParameters();
b&&b.renderLabelsTicksAndTitle();c&&c.renderLabelsTicksAndTitle();a.renderLabelsTicksAndTitle()}p.preparePlotArea();e=a.chart.plotArea;h.save();h.rect(e.x1,e.y1,Math.abs(e.x2-e.x1),Math.abs(e.y2-e.y1));h.clip();a.renderStripLinesOfThicknessType("value");b&&b.renderStripLinesOfThicknessType("value");c&&c.renderStripLinesOfThicknessType("value");a.renderInterlacedColors();b&&b.renderInterlacedColors();c&&c.renderInterlacedColors();h.restore();a.renderGrid();b&&b.renderGrid();c&&c.renderGrid();a.renderAxisLine();
b&&b.renderAxisLine();c&&c.renderAxisLine();a.renderStripLinesOfThicknessType("pixel");b&&b.renderStripLinesOfThicknessType("pixel");c&&c.renderStripLinesOfThicknessType("pixel")};C.prototype.renderLabelsTicksAndTitle=function(){var a=!1,b=0,c=1,d=0;0!==this.labelAngle&&360!==this.labelAngle&&(c=1.2);if("undefined"===typeof this._options.interval){if("bottom"===this._position||"top"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||f.stripLine||
(f=f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),b+=f);b>this.lineCoordinates.width*c&&(a=!0)}if("left"===this._position||"right"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.viewportMinimum||f.stripLine||(f=f.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),b+=f);b>this.lineCoordinates.height*c&&(a=!0)}}if("bottom"===this._position){for(var e=
0,f,e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.viewportMinimum||f.position>this.viewportMaximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%
2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,b.y<<0),this.ctx.lineTo(c,b.y+this.tickLength<<0),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)0===f.textBlock.angle?(b.x-=f.textBlock.width/2,b.y+=this.tickLength+f.textBlock.fontSize/2):(b.x-=0>this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,b.y+=this.tickLength+Math.abs(0>this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)-5:5)),f.textBlock.x=b.x,f.textBlock.y=b.y,f.textBlock.render(!0)}this.title&&
(this._titleTextBlock=new H(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/
2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-3,this._titleTextBlock.render(!0))}else if("top"===this._position){for(e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.viewportMinimum||f.position>this.viewportMaximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?(c=this._labels[e].stripLine,
this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.x<<0)+0.5:b.x<<0,this.ctx.beginPath(),this.ctx.moveTo(c,b.y<<0),this.ctx.lineTo(c,b.y-this.tickLength<<0),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)0===f.textBlock.angle?(b.x-=f.textBlock.width/2,b.y-=this.tickLength+f.textBlock.height/2):(b.x-=0<this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):
0,b.y-=this.tickLength+Math.abs(0<this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),f.textBlock.x=b.x,f.textBlock.y=b.y,f.textBlock.render(!0)}this.title&&(this._titleTextBlock=new H(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1+1,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,
fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){for(e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.viewportMinimum||f.position>this.viewportMaximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&
"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,c),this.ctx.lineTo(b.x-this.tickLength<<0,c),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)f.textBlock.x=b.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-
this.tickLength-5,f.textBlock.y=0===this.labelAngle?b.y:b.y-f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),f.textBlock.render(!0)}this.title&&(this._titleTextBlock=new H(this.ctx,{x:this.boundingRect.x1+1,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,
textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===this._position){for(e=0;e<this._labels.length;e++)if(f=this._labels[e],!(f.position<this.viewportMinimum||f.position>this.viewportMaximum)){b=this.getPixelCoordinatesOnAxis(f.position);if(this.tickThickness&&!this._labels[e].stripLine||this._labels[e].stripLine&&"pixel"===this._labels[e].stripLine._thicknessType)this._labels[e].stripLine?
(c=this._labels[e].stripLine,this.ctx.lineWidth=c.thickness,this.ctx.strokeStyle=c.color):(this.ctx.lineWidth=this.tickThickness,this.ctx.strokeStyle=this.tickColor),c=1===this.ctx.lineWidth%2?(b.y<<0)+0.5:b.y<<0,this.ctx.beginPath(),this.ctx.moveTo(b.x<<0,c),this.ctx.lineTo(b.x+this.tickLength<<0,c),this.ctx.stroke();if(!a||0===d++%2||this._labels[e].stripLine)f.textBlock.x=b.x+this.tickLength+5,f.textBlock.y=b.y,f.textBlock.render(!0)}this.title&&(this._titleTextBlock=new H(this.ctx,{x:this.boundingRect.x2-
1,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}};C.prototype.renderInterlacedColors=
function(){var a=this.chart.plotArea.ctx,b,c,d=this.chart.plotArea,e=0;b=!0;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)this._labels[e].stripLine||(b?(b=this.getPixelCoordinatesOnAxis(this._labels[e].position),c=e+1>=this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(b.x,d.y1,Math.abs(c.x-b.x),Math.abs(d.y1-
d.y2)),b=!1):b=!0);else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e++)this._labels[e].stripLine||(b?(c=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>=this._labels.length-1?this.getPixelCoordinatesOnAxis(this.viewportMaximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(d.x1,b.y,Math.abs(d.x1-d.x2),Math.abs(b.y-c.y)),b=!1):b=!0);a.beginPath()};C.prototype.renderStripLinesOfThicknessType=
function(a){if(this.stripLines&&0<this.stripLines.length&&a)for(var b=0,b=0;b<this.stripLines.length;b++){var c=this.stripLines[b];c._thicknessType===a&&("pixel"===a&&(c.value<this.viewportMinimum||c.value>this.viewportMaximum)||(c.showOnTop?this.chart.addEventListener("dataAnimationIterationEnd",c.render,c):c.render()))}};C.prototype.renderGrid=function(){if(this.gridThickness&&0<this.gridThickness){var a=this.chart.ctx;a.save();var b,c=this.chart.plotArea;a.lineWidth=this.gridThickness;a.strokeStyle=
this.gridColor;a.setLineDash&&a.setLineDash(M(this.gridDashType,this.gridThickness));if("bottom"===this._position||"top"===this._position)for(d=0;d<this._labels.length&&!this._labels[d].stripLine;d++)this._labels[d].position<this.viewportMinimum||this._labels[d].position>this.viewportMaximum||(a.beginPath(),b=this.getPixelCoordinatesOnAxis(this._labels[d].position),b=1===a.lineWidth%2?(b.x<<0)+0.5:b.x<<0,a.moveTo(b,c.y1<<0),a.lineTo(b,c.y2<<0),a.stroke());else if("left"===this._position||"right"===
this._position)for(var d=0;d<this._labels.length&&!this._labels[d].stripLine;d++)0===d&&"axisY"===this.type&&this.chart.axisX&&this.chart.axisX.lineThickness||(this._labels[d].position<this.viewportMinimum||this._labels[d].position>this.viewportMaximum)||(a.beginPath(),b=this.getPixelCoordinatesOnAxis(this._labels[d].position),b=1===a.lineWidth%2?(b.y<<0)+0.5:b.y<<0,a.moveTo(c.x1<<0,b),a.lineTo(c.x2<<0,b),a.stroke());a.restore()}};C.prototype.renderAxisLine=function(){var a=this.chart.ctx;a.save();
if("bottom"===this._position||"top"===this._position){if(this.lineThickness){a.lineWidth=this.lineThickness;a.strokeStyle=this.lineColor?this.lineColor:"black";a.setLineDash&&a.setLineDash(M(this.lineDashType,this.lineThickness));var b=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;a.beginPath();a.moveTo(this.lineCoordinates.x1,b);a.lineTo(this.lineCoordinates.x2,b);a.stroke()}}else"left"!==this._position&&"right"!==this._position||!this.lineThickness||(a.lineWidth=
this.lineThickness,a.strokeStyle=this.lineColor,a.setLineDash&&a.setLineDash(M(this.lineDashType,this.lineThickness)),b=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0,a.beginPath(),a.moveTo(b,this.lineCoordinates.y1),a.lineTo(b,this.lineCoordinates.y2),a.stroke());a.restore()};C.prototype.getPixelCoordinatesOnAxis=function(a){var b={};if("bottom"===this._position||"top"===this._position){var c=this.conversionParameters.pixelPerUnit;b.x=this.conversionParameters.reference+
c*(a-this.viewportMinimum);b.y=this.lineCoordinates.y1}if("left"===this._position||"right"===this._position)c=-this.conversionParameters.pixelPerUnit,b.y=this.conversionParameters.reference-c*(a-this.viewportMinimum),b.x=this.lineCoordinates.x2;return b};C.prototype.convertPixelToValue=function(a){if(!a)return null;var b=0;return b=this.conversionParameters.minimum+(("left"===this._position||"right"===this._position?a.y:a.x)-this.conversionParameters.reference)/this.conversionParameters.pixelPerUnit};
C.prototype.setViewPortRange=function(a,b){this.sessionVariables.newViewportMinimum=this.viewportMinimum=Math.min(a,b);this.sessionVariables.newViewportMaximum=this.viewportMaximum=Math.max(a,b)};C.prototype.getXValueAt=function(a){if(!a)return null;var b=null;"left"===this._position?b=(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-a.y)+this.chart.axisX.viewportMinimum:"bottom"===this._position&&(b=(this.chart.axisX.viewportMaximum-
this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.width*(a.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.viewportMinimum);return b};C.prototype.calculateValueToPixelConversionParameters=function(a){this.reversed=!1;a={pixelPerUnit:null,minimum:null,reference:null};var b=this.lineCoordinates.width,c=this.lineCoordinates.height;a.minimum=this.viewportMinimum;if("bottom"===this._position||"top"===this._position)a.pixelPerUnit=(this.reversed?-1:1)*b/Math.abs(this.viewportMaximum-
this.viewportMinimum),a.reference=this.reversed?this.lineCoordinates.x2:this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)a.pixelPerUnit=(this.reversed?1:-1)*c/Math.abs(this.viewportMaximum-this.viewportMinimum),a.reference=this.reversed?this.lineCoordinates.y1:this.lineCoordinates.y2;this.conversionParameters=a};C.prototype.calculateAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace(),b=!1;"bottom"===this._position||"top"===this._position?(this.maxWidth=
a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.max(Math.floor(this.maxWidth/40),2),c,d,e,f;f=0;if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=this.minimum;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=this.maximum;"axisX"===this.type?(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,
d=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,0===d-c&&(f="undefined"===typeof this._options.interval?0.4:this._options.interval,d+=f,c-=f),Infinity!==this.dataInfo.minDiff?e=this.dataInfo.minDiff:1<d-c?e=0.5*Math.abs(d-c):(e=1,"dateTime"===this.chart.plotInfo.axisXValueType&&(b=!0))):"axisY"===this.type&&(c=null!==this.viewportMinimum?this.viewportMinimum:this.dataInfo.viewPortMin,d=null!==this.viewportMaximum?this.viewportMaximum:this.dataInfo.viewPortMax,isFinite(c)||
isFinite(d)?isFinite(c)?isFinite(d)||(d=c):c=d:(d="undefined"===typeof this._options.interval?-Infinity:this._options.interval,c=0),0===c&&0===d?(d+=9,c=0):0===d-c?(f=Math.min(Math.abs(0.01*Math.abs(d)),5),d+=f,c-=f):c>d?(f=Math.min(Math.abs(0.01*Math.abs(d-c)),5),0<=d?c=d-f:d=c+f):(f=Math.min(Math.abs(0.01*Math.abs(d-c)),0.05),0!==d&&(d+=f),0!==c&&(c-=f)),e=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<d-c?0.5*Math.abs(d-c):1,this.includeZero&&(null===this.viewportMinimum||isNaN(this.viewportMinimum))&&
0<c&&(c=0),this.includeZero&&(null===this.viewportMaximum||isNaN(this.viewportMaximum))&&0>d&&(d=0));f=(isNaN(this.viewportMaximum)||null===this.viewportMaximum?d:this.viewportMaximum)-(isNaN(this.viewportMinimum)||null===this.viewportMinimum?c:this.viewportMinimum);if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){this.intervalType||(f/1<=a?(this.interval=1,this.intervalType="millisecond"):f/2<=a?(this.interval=2,this.intervalType="millisecond"):f/5<=a?(this.interval=5,this.intervalType=
"millisecond"):f/10<=a?(this.interval=10,this.intervalType="millisecond"):f/20<=a?(this.interval=20,this.intervalType="millisecond"):f/50<=a?(this.interval=50,this.intervalType="millisecond"):f/100<=a?(this.interval=100,this.intervalType="millisecond"):f/200<=a?(this.interval=200,this.intervalType="millisecond"):f/250<=a?(this.interval=250,this.intervalType="millisecond"):f/300<=a?(this.interval=300,this.intervalType="millisecond"):f/400<=a?(this.interval=400,this.intervalType="millisecond"):f/500<=
a?(this.interval=500,this.intervalType="millisecond"):f/(1*D.secondDuration)<=a?(this.interval=1,this.intervalType="second"):f/(2*D.secondDuration)<=a?(this.interval=2,this.intervalType="second"):f/(5*D.secondDuration)<=a?(this.interval=5,this.intervalType="second"):f/(10*D.secondDuration)<=a?(this.interval=10,this.intervalType="second"):f/(15*D.secondDuration)<=a?(this.interval=15,this.intervalType="second"):f/(20*D.secondDuration)<=a?(this.interval=20,this.intervalType="second"):f/(30*D.secondDuration)<=
a?(this.interval=30,this.intervalType="second"):f/(1*D.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):f/(2*D.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):f/(5*D.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):f/(10*D.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):f/(15*D.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):f/(20*D.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):f/(30*D.minuteDuration)<=
a?(this.interval=30,this.intervalType="minute"):f/(1*D.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):f/(2*D.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):f/(3*D.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):f/(6*D.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):f/(1*D.dayDuration)<=a?(this.interval=1,this.intervalType="day"):f/(2*D.dayDuration)<=a?(this.interval=2,this.intervalType="day"):f/(4*D.dayDuration)<=a?(this.interval=4,this.intervalType=
"day"):f/(1*D.weekDuration)<=a?(this.interval=1,this.intervalType="week"):f/(2*D.weekDuration)<=a?(this.interval=2,this.intervalType="week"):f/(3*D.weekDuration)<=a?(this.interval=3,this.intervalType="week"):f/(1*D.monthDuration)<=a?(this.interval=1,this.intervalType="month"):f/(2*D.monthDuration)<=a?(this.interval=2,this.intervalType="month"):f/(3*D.monthDuration)<=a?(this.interval=3,this.intervalType="month"):f/(6*D.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=f/
(1*D.yearDuration)<=a?1:f/(2*D.yearDuration)<=a?2:f/(4*D.yearDuration)<=a?4:Math.floor(C.getNiceNumber(f/(a-1),!0)/D.yearDuration),this.intervalType="year"));if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum=c-e/2;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum=d+e/2;b?this.autoValueFormatString="MMM DD YYYY HH:mm":"year"===this.intervalType?this.autoValueFormatString="YYYY":"month"===this.intervalType?this.autoValueFormatString="MMM YYYY":
"week"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"day"===this.intervalType?this.autoValueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.autoValueFormatString="hh:mm TT":"minute"===this.intervalType?this.autoValueFormatString="hh:mm TT":"second"===this.intervalType?this.autoValueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.autoValueFormatString="fff'ms'");this.valueFormatString||(this.valueFormatString=this.autoValueFormatString)}else{this.intervalType=
"number";f=C.getNiceNumber(f,!1);this.interval=this._options&&0<this._options.interval?this._options.interval:C.getNiceNumber(f/(a-1),!0);if(null===this.viewportMinimum||isNaN(this.viewportMinimum))this.viewportMinimum="axisX"===this.type?c-e/2:Math.floor(c/this.interval)*this.interval;if(null===this.viewportMaximum||isNaN(this.viewportMaximum))this.viewportMaximum="axisX"===this.type?d+e/2:Math.ceil(d/this.interval)*this.interval;0===this.viewportMaximum&&0===this.viewportMinimum&&(0===this._options.viewportMinimum?
this.viewportMaximum+=10:0===this._options.viewportMaximum&&(this.viewportMinimum-=10),this._options&&"undefined"===typeof this._options.interval&&(this.interval=C.getNiceNumber((this.viewportMaximum-this.viewportMinimum)/(a-1),!0)))}if(null===this.minimum||null===this.maximum)if("axisX"===this.type?(c=null!==this.minimum?this.minimum:this.dataInfo.min,d=null!==this.maximum?this.maximum:this.dataInfo.max,0===d-c&&(f="undefined"===typeof this._options.interval?0.4:this._options.interval,d+=f,c-=f),
e=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<d-c?0.5*Math.abs(d-c):1):"axisY"===this.type&&(c=null!==this.minimum?this.minimum:this.dataInfo.min,d=null!==this.maximum?this.maximum:this.dataInfo.max,isFinite(c)||isFinite(d)?0===c&&0===d?(d+=9,c=0):0===d-c?(f=Math.min(Math.abs(0.01*Math.abs(d)),5),d+=f,c-=f):c>d?(f=Math.min(Math.abs(0.01*Math.abs(d-c)),5),0<=d?c=d-f:d=c+f):(f=Math.min(Math.abs(0.01*Math.abs(d-c)),0.05),0!==d&&(d+=f),0!==c&&(c-=f)):(d="undefined"===typeof this._options.interval?
-Infinity:this._options.interval,c=0),e=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1<d-c?0.5*Math.abs(d-c):1,this.includeZero&&(null===this.minimum||isNaN(this.minimum))&&0<c&&(c=0),this.includeZero&&(null===this.maximum||isNaN(this.maximum))&&0>d&&(d=0)),"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType){if(null===this.minimum||isNaN(this.minimum))this.minimum=c-e/2;if(null===this.maximum||isNaN(this.maximum))this.maximum=d+e/2}else this.intervalType="number",null===
this.minimum&&(this.minimum="axisX"===this.type?c-e/2:Math.floor(c/this.interval)*this.interval,this.minimum=Math.min(this.minimum,null===this.sessionVariables.viewportMinimum||isNaN(this.sessionVariables.viewportMinimum)?Infinity:this.sessionVariables.viewportMinimum)),null===this.maximum&&(this.maximum="axisX"===this.type?d+e/2:Math.ceil(d/this.interval)*this.interval,this.maximum=Math.max(this.maximum,null===this.sessionVariables.viewportMaximum||isNaN(this.sessionVariables.viewportMaximum)?-Infinity:
this.sessionVariables.viewportMaximum)),0===this.maximum&&0===this.minimum&&(0===this._options.minimum?this.maximum+=10:0===this._options.maximum&&(this.minimum-=10));this.viewportMinimum=Math.max(this.viewportMinimum,this.minimum);this.viewportMaximum=Math.min(this.viewportMaximum,this.maximum);this.intervalStartPosition="axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?this.getLabelStartPoint(new Date(this.viewportMinimum),this.intervalType,this.interval):Math.floor((this.viewportMinimum+
0.2*this.interval)/this.interval)*this.interval;if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",f=Math.abs(this.viewportMaximum-this.viewportMinimum),1>f)){b=Math.floor(Math.abs(Math.log(f)/Math.LN10))+2;if(isNaN(b)||!isFinite(b))b=2;if(2<b)for(c=0;c<b-2;c++)this.valueFormatString+="#"}};C.getNiceNumber=function(a,b){var c=Math.floor(Math.log(a)/Math.LN10),d=a/Math.pow(10,c);return Number(((b?1.5>d?1:3>d?2:7>d?5:10:1>=d?1:2>=d?2:5>=d?5:10)*Math.pow(10,c)).toFixed(20))};C.prototype.getLabelStartPoint=
function(){var a=D[this.intervalType+"Duration"]*this.interval,a=new Date(Math.floor(this.viewportMinimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+
1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===
this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};O(la,
G);la.prototype.render=function(){this.ctx.save();var a=this.parent.getPixelCoordinatesOnAxis(this.value),b=Math.abs("pixel"===this._thicknessType?this.thickness:this.parent.conversionParameters.pixelPerUnit*this.thickness);if(0<b){var c=null===this.opacity?1:this.opacity;this.ctx.strokeStyle=this.color;this.ctx.beginPath();var d=this.ctx.globalAlpha;this.ctx.globalAlpha=c;B(this.id);var e,f,g,k;this.ctx.lineWidth=b;this.ctx.setLineDash&&this.ctx.setLineDash(M(this.lineDashType,b));if("bottom"===
this.parent._position||"top"===this.parent._position)e=f=1===this.ctx.lineWidth%2?(a.x<<0)+0.5:a.x<<0,g=this.chart.plotArea.y1,k=this.chart.plotArea.y2;else if("left"===this.parent._position||"right"===this.parent._position)g=k=1===this.ctx.lineWidth%2?(a.y<<0)+0.5:a.y<<0,e=this.chart.plotArea.x1,f=this.chart.plotArea.x2;this.ctx.moveTo(e,g);this.ctx.lineTo(f,k);this.ctx.stroke();this.ctx.globalAlpha=d}this.ctx.restore()};O(R,G);R.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");
this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: auto;";a+="margin: 0px 0px 0px 0px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: normal;";a+="font-style: "+
(t?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=t?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 5px;";a+="-moz-user-select:none;";a+="-khtml-user-select: none;";a+="-webkit-user-select: none;";a+="-ms-user-select: none;";a+="user-select: none;";t||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};R.prototype.mouseMoveHandler=function(a,b){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,b))};R.prototype._updateToolTip=function(a,b){if(!this.chart.disableToolTip){if("undefined"===typeof a||"undefined"===
typeof b){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;b=this._prevY}else this._prevX=a,this._prevY=b;var c=null,d=null,e=[],f=0;if(this.shared&&this.enabled&&"none"!==this.chart.plotInfo.axisPlacement){f="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-b)+this.chart.axisX.viewportMinimum:(this.chart.axisX.viewportMaximum-this.chart.axisX.viewportMinimum)/
this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.viewportMinimum;d=[];for(c=0;c<this.chart.data.length;c++){var g=this.chart.data[c].getDataPointAtX(f,!0);g&&0<=g.index&&(g.dataSeries=this.chart.data[c],null!==g.dataPoint.y&&d.push(g))}if(0===d.length)return;d.sort(function(a,b){return a.distance-b.distance});f=d[0];for(c=0;c<d.length;c++)d[c].dataPoint.x.valueOf()===f.dataPoint.x.valueOf()&&e.push(d[c]);d=null}else{if(g=this.chart.getDataPointAtXY(a,
b,!0))this.currentDataPointIndex=g.dataPointIndex,this.currentSeriesIndex=g.dataSeries.index;else if(t)if(g=xa(a,b,this.chart._eventManager.ghostCtx),0<g&&"undefined"!==typeof this.chart._eventManager.objectMap[g]){eventObject=this.chart._eventManager.objectMap[g];if("legendItem"===eventObject.objectType)return;this.currentSeriesIndex=eventObject.dataSeriesIndex;this.currentDataPointIndex=0<=eventObject.dataPointIndex?eventObject.dataPointIndex:-1}else this.currentDataPointIndex=-1;else this.currentDataPointIndex=
-1;if(0<=this.currentSeriesIndex){d=this.chart.data[this.currentSeriesIndex];g={};if(0<=this.currentDataPointIndex)c=d.dataPoints[this.currentDataPointIndex],g.dataSeries=d,g.dataPoint=c,g.index=this.currentDataPointIndex,g.distance=Math.abs(c.x-f);else{if(!this.enabled||"line"!==d.type&&"stepLine"!==d.type&&"spline"!==d.type&&"area"!==d.type&&"stepArea"!==d.type&&"splineArea"!==d.type&&"stackedArea"!==d.type&&"stackedArea100"!==d.type&&"rangeArea"!==d.type&&"rangeSplineArea"!==d.type&&"candlestick"!==
d.type&&"ohlc"!==d.type)return;f=d.axisX.conversionParameters.minimum+(a-d.axisX.conversionParameters.reference)/d.axisX.conversionParameters.pixelPerUnit;g=d.getDataPointAtX(f,!0);g.dataSeries=d;this.currentDataPointIndex=g.index;c=g.dataPoint}if(!P(g.dataPoint.y))if(g.dataSeries.axisY)if(0<g.dataPoint.y.length){for(c=f=0;c<g.dataPoint.y.length;c++)g.dataPoint.y[c]<g.dataSeries.axisY.viewportMinimum?f--:g.dataPoint.y[c]>g.dataSeries.axisY.viewportMaximum&&f++;f<g.dataPoint.y.length&&f>-g.dataPoint.y.length&&
e.push(g)}else"column"===d.type||"bar"===d.type?0>g.dataPoint.y?0>g.dataSeries.axisY.viewportMinimum&&g.dataSeries.axisY.viewportMaximum>=g.dataPoint.y&&e.push(g):g.dataSeries.axisY.viewportMinimum<=g.dataPoint.y&&0<=g.dataSeries.axisY.viewportMaximum&&e.push(g):"bubble"===d.type?(f=this.chart._eventManager.objectMap[d.dataPointIds[g.index]].size/2,g.dataPoint.y>=g.dataSeries.axisY.viewportMinimum-f&&g.dataPoint.y<=g.dataSeries.axisY.viewportMaximum+f&&e.push(g)):(0<=g.dataSeries.type.indexOf("100")||
"stackedColumn"===d.type||"stackedBar"===d.type||g.dataPoint.y>=g.dataSeries.axisY.viewportMinimum&&g.dataPoint.y<=g.dataSeries.axisY.viewportMaximum)&&e.push(g);else e.push(g)}}if(0<e.length&&(this.highlightObjects(e),this.enabled))if(f="",f=this.getToolTipInnerHTML({entries:e}),null!==f){this.contentDiv.innerHTML=f;this.contentDiv.innerHTML=f;f=!1;"none"===this.container.style.display&&(f=!0,this.container.style.display="block");try{this.contentDiv.style.background=this.backgroundColor?this.backgroundColor:
t?"rgba(255,255,255,.9)":"rgb(255,255,255)",this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%e[0].dataSeries._colorSet.length],this.contentDiv.style.borderWidth=this.borderThickness||0===this.borderThickness?this.borderThickness+"px":"2px",this.contentDiv.style.borderRadius=this.cornerRadius||
0===this.cornerRadius?this.cornerRadius+"px":"5px",this.container.style.borderRadius=this.contentDiv.style.borderRadius,this.contentDiv.style.fontSize=this.fontSize||0===this.fontSize?this.fontSize+"px":"14px",this.contentDiv.style.color=this.fontColor?this.fontColor:"#000000",this.contentDiv.style.fontFamily=this.fontFamily?this.fontFamily:"Calibri, Arial, Georgia, serif;",this.contentDiv.style.fontWeight=this.fontWeight?this.fontWeight:"normal",this.contentDiv.style.fontStyle=this.fontStyle?this.fontStyle:
t?"italic":"normal"}catch(k){}"pie"===e[0].dataSeries.type||"doughnut"===e[0].dataSeries.type||"funnel"===e[0].dataSeries.type||"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?toolTipLeft=a-10-this.container.clientWidth:(toolTipLeft=e[0].dataSeries.axisX.conversionParameters.reference+e[0].dataSeries.axisX.conversionParameters.pixelPerUnit*(e[0].dataPoint.x-e[0].dataSeries.axisX.conversionParameters.minimum)-
this.container.clientWidth<<0,toolTipLeft-=10);0>toolTipLeft&&(toolTipLeft+=this.container.clientWidth+20);toolTipLeft+this.container.clientWidth>Math.max(this.chart._container.clientWidth,this.chart.width)&&(toolTipLeft=Math.max(0,Math.max(this.chart._container.clientWidth,this.chart.width)-this.container.clientWidth));toolTipLeft+="px";e=1!==e.length||this.shared||"line"!==e[0].dataSeries.type&&"stepLine"!==e[0].dataSeries.type&&"spline"!==e[0].dataSeries.type&&"area"!==e[0].dataSeries.type&&"stepArea"!==
e[0].dataSeries.type&&"splineArea"!==e[0].dataSeries.type&&"stackedArea"!==e[0].dataSeries.type&&"stackedArea100"!==e[0].dataSeries.type?"bar"===e[0].dataSeries.type||"rangeBar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.conversionParameters.reference+e[0].dataSeries.axisX.conversionParameters.pixelPerUnit*(e[0].dataPoint.x-e[0].dataSeries.axisX.viewportMinimum)+0.5<<0:b:e[0].dataSeries.axisY.conversionParameters.reference+
e[0].dataSeries.axisY.conversionParameters.pixelPerUnit*(e[0].dataPoint.y-e[0].dataSeries.axisY.viewportMinimum)+0.5<<0;e=-e+10;0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0);this.container.style.left=toolTipLeft;this.container.style.bottom=e+"px";!this.animationEnabled||f?this.disableAnimation():this.enableAnimation()}else this.hide(!1)}};R.prototype.highlightObjects=function(a){var b=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();b.clearRect(0,0,this.chart.width,
this.chart.height);b.save();var c=this.chart.plotArea,d=0;b.rect(c.x1,c.y1,c.x2-c.x1,c.y2-c.y1);b.clip();for(c=0;c<a.length;c++){var e=a[c];if((e=this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]])&&e.objectType&&"dataPoint"===e.objectType){var d=this.chart.data[e.dataSeriesIndex],f=d.dataPoints[e.dataPointIndex],g=e.dataPointIndex;!1===f.highlightEnabled||!0!==d.highlightEnabled&&!0!==f.highlightEnabled||("line"===d.type||"stepLine"===d.type||"spline"===d.type||"scatter"===d.type||
"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type||"rangeArea"===d.type||"rangeSplineArea"===d.type?(f=d.getMarkerProperties(g,e.x1,e.y1,this.chart.overlaidCanvasCtx),f.size=Math.max(1.5*f.size<<0,10),f.borderColor=f.borderColor||"#FFFFFF",f.borderThickness=f.borderThickness||Math.ceil(0.1*f.size),K.drawMarkers([f]),"undefined"!==typeof e.y2&&(f=d.getMarkerProperties(g,e.x1,e.y2,this.chart.overlaidCanvasCtx),f.size=Math.max(1.5*f.size<<
0,10),f.borderColor=f.borderColor||"#FFFFFF",f.borderThickness=f.borderThickness||Math.ceil(0.1*f.size),K.drawMarkers([f]))):"bubble"===d.type?(f=d.getMarkerProperties(g,e.x1,e.y1,this.chart.overlaidCanvasCtx),f.size=e.size,f.color="white",f.borderColor="white",b.globalAlpha=0.3,K.drawMarkers([f]),b.globalAlpha=1):"column"===d.type||"stackedColumn"===d.type||"stackedColumn100"===d.type||"bar"===d.type||"rangeBar"===d.type||"stackedBar"===d.type||"stackedBar100"===d.type||"rangeColumn"===d.type?I(b,
e.x1,e.y1,e.x2,e.y2,"white",0,null,!1,!1,!1,!1,0.3):"pie"===d.type||"doughnut"===d.type?sa(b,e.center,e.radius,"white",d.type,e.startAngle,e.endAngle,0.3,e.percentInnerRadius):"candlestick"===d.type?(b.globalAlpha=1,b.strokeStyle=e.color,b.lineWidth=2*e.borderThickness,d=0===b.lineWidth%2?0:0.5,b.beginPath(),b.moveTo(e.x3-d,e.y2),b.lineTo(e.x3-d,Math.min(e.y1,e.y4)),b.stroke(),b.beginPath(),b.moveTo(e.x3-d,Math.max(e.y1,e.y4)),b.lineTo(e.x3-d,e.y3),b.stroke(),I(b,e.x1,Math.min(e.y1,e.y4),e.x2,Math.max(e.y1,
e.y4),"transparent",2*e.borderThickness,e.color,!1,!1,!1,!1),b.globalAlpha=1):"ohlc"===d.type&&(b.globalAlpha=1,b.strokeStyle=e.color,b.lineWidth=2*e.borderThickness,d=0===b.lineWidth%2?0:0.5,b.beginPath(),b.moveTo(e.x3-d,e.y2),b.lineTo(e.x3-d,e.y3),b.stroke(),b.beginPath(),b.moveTo(e.x3,e.y1),b.lineTo(e.x1,e.y1),b.stroke(),b.beginPath(),b.moveTo(e.x3,e.y4),b.lineTo(e.x2,e.y4),b.stroke(),b.globalAlpha=1))}}b.restore();b.globalAlpha=1;b.beginPath()};R.prototype.getToolTipInnerHTML=function(a){a=a.entries;
for(var b=null,c=null,d=null,e=0,f="",g=!0,k=0;k<a.length;k++)if(a[k].dataSeries.toolTipContent||a[k].dataPoint.toolTipContent){g=!1;break}if(g&&(this.content&&"function"===typeof this.content||this.contentFormatter))a={chart:this.chart._publicChartReference,toolTip:this._options,entries:a},b=this.contentFormatter?this.contentFormatter(a):this.content(a);else if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){for(var p="",k=0;k<a.length;k++)if(c=a[k].dataSeries,d=a[k].dataPoint,e=a[k].index,
f="",0===k&&(g&&!this.content)&&(p+="undefined"!==typeof this.chart.axisX.labels[d.x]?this.chart.axisX.labels[d.x]:"{x}",p+="</br>",p=this.chart.replaceKeywordsWithValue(p,d,c,e)),null!==d.toolTipContent&&("undefined"!==typeof d.toolTipContent||null!==c._options.toolTipContent)){if("line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"column"===c.type||"bar"===c.type||"scatter"===c.type||"stackedColumn"===c.type||"stackedColumn100"===
c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}";else if("bubble"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+
(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type)f+=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}";else if("candlestick"===c.type||"ohlc"===c.type)f+=d.toolTipContent?
d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";null===b&&(b="");!0===this.reversed?(b=this.chart.replaceKeywordsWithValue(f,d,c,e)+b,k<a.length-1&&(b="</br>"+b)):(b+=this.chart.replaceKeywordsWithValue(f,d,c,e),k<a.length-1&&(b+="</br>"))}null!==
b&&(b=p+b)}else{c=a[0].dataSeries;d=a[0].dataPoint;e=a[0].index;if(null===d.toolTipContent||"undefined"===typeof d.toolTipContent&&null===c._options.toolTipContent)return null;if("line"===c.type||"stepLine"===c.type||"spline"===c.type||"area"===c.type||"stepArea"===c.type||"splineArea"===c.type||"column"===c.type||"bar"===c.type||"scatter"===c.type||"stackedColumn"===c.type||"stackedColumn100"===c.type||"stackedBar"===c.type||"stackedBar100"===c.type||"stackedArea"===c.type||"stackedArea100"===c.type)f=
d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}";else if("bubble"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";
else if("pie"===c.type||"doughnut"===c.type||"funnel"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.name?"{name}:</span>&nbsp;&nbsp;":d.label?"{label}:</span>&nbsp;&nbsp;":"</span>")+"{y}";else if("rangeColumn"===c.type||"rangeBar"===c.type||"rangeArea"===c.type||"rangeSplineArea"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?
c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}";else if("candlestick"===c.type||"ohlc"===c.type)f=d.toolTipContent?d.toolTipContent:c.toolTipContent?c.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\""+(this.fontColor?"":"'color:{color};'")+"\"'>"+(d.label?"{label}":"{x}")+"</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}";
null===b&&(b="");b+=this.chart.replaceKeywordsWithValue(f,d,c,e)}return b};R.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};R.prototype.disableAnimation=function(){this.container.style.WebkitTransition&&
(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};R.prototype.hide=function(a){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,("undefined"===typeof a||a)&&this.chart.resetOverlayedCanvas())};u.prototype.getPercentAndTotal=function(a,b){var c=null,d=null,e=null;if(0<=a.type.indexOf("stacked"))d=0,c=b.x.getTime?b.x.getTime():b.x,c in a.plotUnit.yTotals&&
(d=a.plotUnit.yTotals[c],e=isNaN(b.y)?0:0===d?0:100*(b.y/d));else if("pie"===a.type||"doughnut"===a.type){for(i=d=0;i<a.dataPoints.length;i++)isNaN(a.dataPoints[i].y)||(d+=a.dataPoints[i].y);e=isNaN(b.y)?0:100*(b.y/d)}return{percent:e,total:d}};u.prototype.replaceKeywordsWithValue=function(a,b,c,d,e){var f=this;e="undefined"===typeof e?0:e;if((0<=c.type.indexOf("stacked")||"pie"===c.type||"doughnut"===c.type)&&(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))){var g="#percent",k="#total",p=this.getPercentAndTotal(c,
b),k=isNaN(p.total)?k:p.total,g=isNaN(p.percent)?g:p.percent;do{p="";if(c.percentFormatString)p=c.percentFormatString;else{var p="#,##0.",h=Math.max(Math.ceil(Math.log(1/Math.abs(g))/Math.LN10),2);if(isNaN(h)||!isFinite(h))h=2;for(var l=0;l<h;l++)p+="#"}a=a.replace("#percent",X(g,p,f._cultureInfo));a=a.replace("#total",X(k,c.yValueFormatString?c.yValueFormatString:"#,##0.########"))}while(0<=a.indexOf("#percent")||0<=a.indexOf("#total"))}return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g,function(a){if('"'===
a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=$(a.slice(1,a.length-1));a=a.replace("#index",e);var g=null;try{var h=a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);h&&0<h.length&&(g=$(h[2]),a=$(h[1]))}catch(k){}h=null;if("color"===a)return b.color?b.color:c.color?c.color:c._colorSet[d%c._colorSet.length];if(b.hasOwnProperty(a))h=b;else if(c.hasOwnProperty(a))h=c;else return"";h=h[a];null!==g&&(h=h[g]);return"x"===a?"dateTime"===f.plotInfo.axisXValueType||"dateTime"===
c.xValueType||b.x&&b.x.getTime?ra(h,b.xValueFormatString?b.xValueFormatString:c.xValueFormatString?c.xValueFormatString:f.axisX&&f.axisX.autoValueFormatString?f.axisX.autoValueFormatString:"DD MMM YY",f._cultureInfo):X(h,b.xValueFormatString?b.xValueFormatString:c.xValueFormatString?c.xValueFormatString:"#,##0.########",f._cultureInfo):"y"===a?X(h,b.yValueFormatString?b.yValueFormatString:c.yValueFormatString?c.yValueFormatString:"#,##0.########",f._cultureInfo):"z"===a?X(h,b.zValueFormatString?b.zValueFormatString:
c.zValueFormatString?c.zValueFormatString:"#,##0.########",f._cultureInfo):h})};aa.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.eventObjects=[];t&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),this.ghostCtx.beginPath())};aa.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};aa.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var b=
[],c=na(a),d=null;if((d=this.chart.getObjectAtXY(c.x,c.y,!1))&&"undefined"!==typeof this.objectMap[d])if(d=this.objectMap[d],"dataPoint"===d.objectType){var e=this.chart.data[d.dataSeriesIndex],f=e.dataPoints[d.dataPointIndex],g=d.dataPointIndex;d.eventParameter={x:c.x,y:c.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:f,userContext:f,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};
b.push(d);d=this.objectMap[e.id];d.eventParameter={x:c.x,y:c.y,dataPoint:f,dataSeries:e._options,dataPointIndex:g,dataSeriesIndex:e.index,chart:this.chart._publicChartReference};d.eventContext={context:e,userContext:e._options,mouseover:"mouseover",mousemove:"mousemove",mouseout:"mouseout",click:"click"};b.push(this.objectMap[e.id])}else"legendItem"===d.objectType&&(e=this.chart.data[d.dataSeriesIndex],f=null!==d.dataPointIndex?e.dataPoints[d.dataPointIndex]:null,d.eventParameter={x:c.x,y:c.y,dataSeries:e._options,
dataPoint:f,dataPointIndex:d.dataPointIndex,dataSeriesIndex:d.dataSeriesIndex,chart:this.chart._publicChartReference},d.eventContext={context:this.chart.legend,userContext:this.chart.legend._options,mouseover:"itemmouseover",mousemove:"itemmousemove",mouseout:"itemmouseout",click:"itemclick"},b.push(d));e=[];for(c=0;c<this.mouseoveredObjectMaps.length;c++){f=!0;for(d=0;d<b.length;d++)if(b[d].id===this.mouseoveredObjectMaps[c].id){f=!1;break}f?this.fireEvent(this.mouseoveredObjectMaps[c],"mouseout",
a):e.push(this.mouseoveredObjectMaps[c])}this.mouseoveredObjectMaps=e;for(c=0;c<b.length;c++){e=!1;for(d=0;d<this.mouseoveredObjectMaps.length;d++)if(b[c].id===this.mouseoveredObjectMaps[d].id){e=!0;break}e||(this.fireEvent(b[c],"mouseover",a),this.mouseoveredObjectMaps.push(b[c]));"click"===a.type?this.fireEvent(b[c],"click",a):"mousemove"===a.type&&this.fireEvent(b[c],"mousemove",a)}}};aa.prototype.fireEvent=function(a,b,c){if(a&&b){var d=a.eventParameter,e=a.eventContext,f=a.eventContext.userContext;
f&&(e&&f[e[b]])&&f[e[b]].call(f,d);"mouseout"!==b?f.cursor&&f.cursor!==c.target.style.cursor&&(c.target.style.cursor=f.cursor):(c.target.style.cursor=this.chart._defaultCursor,delete a.eventParameter,delete a.eventContext);"click"===b&&("dataPoint"===a.objectType&&this.chart.pieDoughnutClickHandler)&&this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],d)}};O(ca,G);qa.prototype.animate=function(a,b,c,d,e){var f=this;this.chart.isAnimating=!0;e=e||A.easing.linear;c&&this.animations.push({startTime:(new Date).getTime()+
(a?a:0),duration:b,animationCallback:c,onComplete:d});for(a=[];0<this.animations.length;)if(b=this.animations.shift(),c=(new Date).getTime(),d=0,b.startTime<=c&&(d=e(Math.min(c-b.startTime,b.duration),0,1,b.duration),d=Math.min(d,1),isNaN(d)||!isFinite(d))&&(d=1),1>d&&a.push(b),b.animationCallback(d),1<=d&&b.onComplete)b.onComplete();this.animations=a;0<this.animations.length?this.animationRequestId=this.chart.requestAnimFrame.call(window,function(){f.animate.call(f)}):this.chart.isAnimating=!1};
qa.prototype.cancelAllAnimations=function(){this.animations=[];this.animationRequestId&&this.chart.cancelRequestAnimFrame.call(window,this.animationRequestId);this.animationRequestId=null;this.chart.isAnimating=!1};var A={yScaleAnimation:function(a,b){if(0!==a){var c=b.dest,d=b.source.canvas,e=b.animationBase;c.drawImage(d,0,0,d.width,d.height,0,e-e*a,c.canvas.width/J,a*c.canvas.height/J)}},xScaleAnimation:function(a,b){if(0!==a){var c=b.dest,d=b.source.canvas,e=b.animationBase;c.drawImage(d,0,0,
d.width,d.height,e-e*a,0,a*c.canvas.width/J,c.canvas.height/J)}},xClipAnimation:function(a,b){if(0!==a){var c=b.dest,d=b.source.canvas;c.save();0<a&&c.drawImage(d,0,0,d.width*a,d.height,0,0,d.width*a/J,d.height/J);c.restore()}},fadeInAnimation:function(a,b){if(0!==a){var c=b.dest,d=b.source.canvas;c.save();c.globalAlpha=a;c.drawImage(d,0,0,d.width,d.height,0,0,c.canvas.width/J,c.canvas.height/J);c.restore()}},easing:{linear:function(a,b,c,d){return c*a/d+b},easeOutQuad:function(a,b,c,d){return-c*
(a/=d)*(a-2)+b},easeOutQuart:function(a,b,c,d){return-c*((a=a/d-1)*a*a*a-1)+b},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeInQuart:function(a,b,c,d){return c*(a/=d)*a*a*a+b}}},K={drawMarker:function(a,b,c,d,e,f,g,k){if(c){var p=1;c.fillStyle=f?f:"#000000";c.strokeStyle=g?g:"#000000";c.lineWidth=k?k:0;"circle"===d?(c.moveTo(a,b),c.beginPath(),c.arc(a,b,e/2,0,2*Math.PI,!1),f&&c.fill(),k&&(g?c.stroke():(p=c.globalAlpha,c.globalAlpha=0.15,c.strokeStyle="black",c.stroke(),c.globalAlpha=p))):
"square"===d?(c.beginPath(),c.rect(a-e/2,b-e/2,e,e),f&&c.fill(),k&&(g?c.stroke():(p=c.globalAlpha,c.globalAlpha=0.15,c.strokeStyle="black",c.stroke(),c.globalAlpha=p))):"triangle"===d?(c.beginPath(),c.moveTo(a-e/2,b+e/2),c.lineTo(a+e/2,b+e/2),c.lineTo(a,b-e/2),c.closePath(),f&&c.fill(),k&&(g?c.stroke():(p=c.globalAlpha,c.globalAlpha=0.15,c.strokeStyle="black",c.stroke(),c.globalAlpha=p)),c.beginPath()):"cross"===d&&(c.strokeStyle=f,c.lineWidth=e/4,c.beginPath(),c.moveTo(a-e/2,b-e/2),c.lineTo(a+e/
2,b+e/2),c.stroke(),c.moveTo(a+e/2,b-e/2),c.lineTo(a-e/2,b+e/2),c.stroke())}},drawMarkers:function(a){for(var b=0;b<a.length;b++){var c=a[b];K.drawMarker(c.x,c.y,c.ctx,c.type,c.size,c.color,c.borderColor,c.borderThickness)}}},Ba={Chart:function(a,b){var c=new u(a,b,this);this.render=function(){c.render(this.options)};this.options=c._options},addColorSet:function(a,b){W[a]=b},addCultureInfo:function(a,b){da[a]=b},formatNumber:function(a,b,c){c=c||"en";if(da[c])return X(a,b||"#,##0.##",new ca(c));throw"Unknown Culture Name";
},formatDate:function(a,b,c){c=c||"en";if(da[c])return ra(a,b||"DD MMM YYYY",new ca(c));throw"Unknown Culture Name";}};Ba.Chart.version="v1.8.0 GA";window.CanvasJS=Ba})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();

/**
*
*/
var totalRows = 0;		// total number of rows, get set for the first when page loads
var pageRange = 10;		// number of rows per page [CONSTANT], i.e, number of rows per page
var totalPages = 0;		// total number of pages, get set for the first when page loads
var currentPage = 1;	// current Page default 1, start from 1
var urlsData = [];		// 2d array of url data with per page
var currentExpansionCounter = 1;		//currently expansion page counter
var currentRow = 0;		//current row tell the last row of existing data
var prevPage = 0;		//prev page for disabling active pagecounter
var urlTable = $("#urlTable");		//table element
var mid = '';		// page counter middle buttons
var currentRowFrom = 0;
var currentRowTo = 0;


var lastPageCounter = 1;
var isFirstBlockPageCounter = 1;
var isLastBlockPageCOunter = 0;
var lastExpansionCounter = 0;
var prevExpansionCounter = 0;


var rowIndex = 0;




var pageNumbers = 0	;
var currentFrom = 0;
var currentTo = 10;
var categoryIn = $("#categoryIn");
var categoryOut = $("#categoryOut");
var currentCategory = '';

function countUrlsAndGeneratePageCounter(){
	$.get("urls/count", function(res, status){
		totalRows = res;
		totalPages = Math.ceil(totalRows / pageRange); // add 1 to get right number of pages , start from 1
		generatePageCounter();
	});
}
function generatePageCounter(side){
	var pageCounter = 0;
	var expansionCounter = 1;
	for(var i = 1; i<= totalPages; i++ ){
		pageCounter++;
		if(i % 3 ==1){
			mid = mid + "<span style='display:none;' class=' btn-group' id='expansion"+(expansionCounter++)+"' >";
		}
		mid = mid + " <button type='button' id='pageCounterButton"+pageCounter+"' onclick='gotoPage("+pageCounter+")' class='btn btn-sm btn-default'>"+ (pageCounter) +"</button> ";
		if(i % 3 == 0){
			mid = mid + "</span>";
		}
	}
	lastExpansionCounter = expansionCounter - 1;
	$("#pageCounter").append(mid);
}



function fixVar(){
	currentRowFrom = (pageRange * (currentPage-1))+1;
	currentRowTo = currentRowFrom + urlsData[currentPage-1].count - 1;
	if(prevPage > 0){
		$("#pageCounterButton"+prevPage).removeClass("active");
	}
	if(currentPage == totalPages){
		$("#nextButton").prop('disabled', true);
	}else if(currentPage < totalPages){
		$("#nextButton").prop('disabled', false);
	}

	if(currentPage == 1){
		$("#prevButton").prop('disabled', true);
	}else if(currentPage > 1){
		$("#prevButton").prop('disabled', false);
	}
	//alert("current"+prevExpansionCounter+currentExpansionCounter);

	$("#expansion"+currentExpansionCounter).show();
	if( currentExpansionCounter != prevExpansionCounter){
		$("#expansion"+prevExpansionCounter).hide();
	}

	if(currentExpansionCounter == 1){
		$("#backPageCounter").hide();
	}else{
		$("#backPageCounter").show();
	}
	if(currentExpansionCounter == lastExpansionCounter){
		$("#forePageCounter").hide();
	}else{
		$("#forePageCounter").show();
	}
	$("#pageCounterButton"+currentPage).addClass("active");
	$("#pageNumber").html(currentPage+"th of "+totalPages);
	//alert("current page : "+currentPage);
	$("#pageLabel").html(currentRowFrom+"-"+currentRowTo+" of "+totalRows);
}

function getUrls(){
	if(currentCategory){
		$.get("urls/category/"+currentCategory, function(res, status){
			var data = JSON.parse(res);
			setData(data);
		});
	}else{
		if($('#tablePage'+currentPage).length){
			$("#tablePage"+prevPage).hide();
			$("#tablePage"+currentPage).show();
			fixVar();
		}else{
			$.get("urls/from/"+currentFrom+"/to/"+currentTo, function(res, status){
				var result = JSON.parse(res);
				urlsData.push(result);
				var data = result.data;
				var row = "";
				for (i in data) {
					row = row + "<tr id='"+data[i].id+"'><th scope='row'>"+(++rowIndex)+"</th>"+
					"<td><a target='_blank' href="+data[i].long_url+">"+data[i].long_url.substr(0,20)+"</a></td>"+
					"<td><a target='_blank' href="+data[i].short_url+">"+data[i].short_url+"</a></td>"+
					"<td>"+data[i].time+"</td>"+
					"<td><button type='button' id="+data[i].id+" onclick='return deleteUrl("+data[i].id+")' class='btn btn-default btn-xs'>Delete</button></td>"+
					"<td><button type='button' id="+data[i].id+" onclick='return getAnalytics("+data[i].id+")' class='btn btn-default btn-xs'>"+ data[i].clicks +" (analyse) </button></td></tr>";
				}
				$("#tablePage"+prevPage).hide();
				$('#urlTable').append("<tbody id='tablePage"+currentPage+"'>"+row+"</tbody>");
				fixVar();
			});
		}

	}
}

function gotoNextPage(){
	prevPage = currentPage;
	currentPage ++;
	prevExpansionCounter = currentExpansionCounter;
	currentExpansionCounter = Math.ceil(currentPage / 3);
	currentFrom = currentRowTo;
	currentTo = pageRange;
	getUrls();
}
function gotoPrevPage(){
	prevPage = currentPage;
	currentPage --;
	prevExpansionCounter = currentExpansionCounter;
	currentExpansionCounter = Math.ceil(currentPage / 3);
	getUrls();
}
function gotoPage(pageNo){
	prevPage = currentPage;
	currentPage = pageNo;
	prevExpansionCounter = currentExpansionCounter;
	currentExpansionCounter = Math.ceil(currentPage / 3);
	currentFrom = (pageRange * (currentPage - 1));
	currentTo = pageRange;
	getUrls();
}

function expandPageCounter(data){
	prevExpansionCounter = currentExpansionCounter;
	if(data){
		currentExpansionCounter ++;
	}else{
		currentExpansionCounter --;
	}
	prevPage = currentPage;
	currentPage = currentExpansionCounter * 3;
	getUrls();
};

function postUrl(){
	var long_url = $('#short_url_form').find('input[name="longUrl"]').val();
	var category = $('#short_url_form').find('input[name="category"]').val();
	var customKey = $('#short_url_form').find('input[name="customKey"]').val();
	$.ajax({
		type: "POST",
		url: "urls",
		data: {long_url: long_url, category: category, customKey: customKey},
		success: function(msg) {
			addData(msg);
			appendCategory(category);
		},
		error: function(err){
			console.log((JSON.stringify(err)));
		}
	});
	return false;
};

function addData(data){

	if(data){
		data = JSON.parse(data);
		var res = [
			data.id,
			"<a target='_blank' href="+data.long_url+">"+data.long_url.substr(0,20)+"</a>",
			"<a target='_blank' href="+data.short_url+">"+data.short_url+"</a>",
			data.created_at,
			"<button type='button' id="+data.id+" onclick='return deleteUrl("+data.id+")' class='btn delete btn-danger'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>",
			"<button type='button' id="+data.id+" onclick='return getAnalytics("+data.id+")' class='btn delete btn-success'>"+ data.clicks +"</button>"
		];
		table.fnAddData(res);
	}
	else{
		alert('No data found');
	}
};

function deleteUrl(id){
	// totalRows--;
	// currentRowFrom
	// totalPages = Math.ceil(totalRows / pageRange);
	// fixVar();
	$.ajax({
		type: "GET",
		url: "urls/"+id+"/delete",
		success: function(data) {
			if(data){
				$('table#urlTable tr#'+id).remove();
				location.reload();
			}
			else{
				alert('No data found');
			}
		},
		error: function(err){
			alert(err);
		}
	});
	return false;
};


function categoryInClick(a){
	$("#categoryInput").val(a);
	return;
};

function categoryOutClick(a){
	$('#showDeleted').attr('checked', false); // Unchecks it
	if(a){
		currentCategory = a;
		$("#categoryOutName").html('Category: '+ a + ' <span class="caret"></span>');
	}else{
		currentCategory = '';
		$("#categoryOutName").html('Category: Default <span class="caret"></span>');
	}
	getUrls();
};

$('#showDeleted').change(function() {
	if($(this).is(":checked")) {
		$.get("urls/deleted", function(res, status){
			var data = JSON.parse(res);
			setData(data);
		});
	}else{
		getUrls();
	}
});
function setCategory(){
	$.get("urls/categories", function(res, status){
		var data = JSON.parse(res);
		for(i in data){
			appendCategory(data[i]['category']);
		}
	});
};

function appendCategory(category){
	if(category){
		categoryIn.append('<li><a onClick="categoryInClick(\''+category+'\')" href="#"><span class="tab">'+category+'</span></a></li>');
		categoryOut.append('<li><a onClick="categoryOutClick(\''+category+'\')" href="#"><span class="tab">'+category+'</span></a></li>');
	}else{
		categoryOut.append('<li><a onClick="categoryOutClick(\''+category+'\')" href="#"><span class="tab">Undefined</span></a></li>');
	}
};

function ready(){
	$("#analyticsPanel").hide();
	countUrlsAndGeneratePageCounter();		//it will get total row and generate page counter
	setCategory();		//it will get all category and put it into in and out category
	getUrls();
};
ready();

//clicks graph options
var sample_data = {"af":"16.63","in":"12"};
var countryGraph = {
    map: 'world_en',
    backgroundColor: '#fff',
    color: '#d6d6d6',
    hoverOpacity: 0.7,
    selectedColor: '#d6d6d6',
    enableZoom: true,
    showTooltip: true,
    scaleColors: ['#C8EEFF', '#006491'],
    values: sample_data,
    normalizeFunction: 'polynomial',
    onLabelShow: function(event, label, code) {
                        label[0].innerHTML = label[0].innerHTML + " - The state where I live!!";
                }
};

var clickGraph = new CanvasJS.Chart("clickGraph",{
    theme:"theme2",
    title:{
        text: "Click Analysis"
    },
    animationEnabled: true,

    toolTip: {
        shared: "true"
    },
    data: [
        {
            type: "spline",
            showInLegend: true,
            name: "Total",
            dataPoints: []
        },
        {
            type: "spline",
            showInLegend: true,
            // markerSize: 0,
            name: "User",
            dataPoints: []
        },
        {
            type: "spline",
            showInLegend: true,
            // markerSize: 0,
            name: "Session",
            dataPoints: []
        }


    ],
    legend:{
        cursor:"pointer",
        itemclick : function(e) {
            if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
                e.dataSeries.visible = false;
            }
            else {
                e.dataSeries.visible = true;
            }
            chart.render();
        }

    }
});
var platformGraph = new CanvasJS.Chart("platformGraph",{
    title:{
        text: "Platform Analysis",
        verticalAlign: 'top',
        horizontalAlign: 'left'
    },
    animationEnabled: true,
    data: [
        {
            type: "doughnut",
            startAngle:20,
            toolTipContent: "{label}: {y} - <strong>#percent%</strong>",
            indexLabel: "{label}: {y}",
            dataPoints: [
            ]
        }
    ]
});

var referrerGraph = new CanvasJS.Chart("referrerGraph",{
    title:{
        text: "Referrer Analysis",
        verticalAlign: 'top',
        horizontalAlign: 'left'
    },
    animationEnabled: true,
    data: [
        {
            type: "doughnut",
            startAngle:20,
            toolTipContent: "{label}: {y} - <strong>#percent%</strong>",
            indexLabel: "{label}: {y}",
            dataPoints: [
            ]
        }
    ]
});

function cb(start, end) {
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    currentRangeFrom = start.format('YYYY-MM-DD hh:mm:ss');
    currentRangeTo = end.format('YYYY-MM-DD hh:mm:ss');
    getAnalytics(currentUrlId);

}
cb(moment().subtract(1, 'days'), moment().endOf('day'));

$('#reportrange').daterangepicker({
    timePicker: true,
    timePickerIncrement: 10,
    locale: {
        format: 'MM/DD/YYYY h:mm A'
    },
    ranges: {
        'Today': [moment().subtract(1, 'days'), moment().endOf('day')],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
}, cb);

//loader options
var opts = {
    speed: 1.5 // Rounds per second
}
var clickLoader = document.getElementById('clickPanel');
var referrerLoader = document.getElementById('referrerPanel');
var platformLoader = document.getElementById('platformPanel');
var countryLoader = document.getElementById('countryPanel');

var currentUrlId;
var currentUnit;
var currentRangeFrom;
var currentRangeTo;

function getAnalytics(data){
    currentUrlId = data;
    $("#analyticsPanel").show();
    drawClickGraph();
    drawPlatformGraph();
    drawReferrerGraph();
    //drawCountryGraph();
    //drawReferrerGraph(data, range);
    return false;
}

function drawCountryGraph(){
    var spinner = new Spinner(opts).spin(countryLoader);
    spinner.stop();
    $.ajax({
        type: "GET",
        url: "urls/"+currentUrlId+"/analytics/country/"+currentRangeFrom+"/"+currentRangeTo+"/"+currentUnit,
        success: function(msg) {
            console.log(msg);
            $('#countryGraph').vectorMap(countryGraph);

            // data = JSON.parse(msg);
            // xValues = Object.keys(data);
            // clickGraph.options.data[0].dataPoints = [];
            // clickGraph.options.data[1].dataPoints = [];
            // clickGraph.options.data[2].dataPoints = [];
            // $('#sessionCount').text(data['sessionCount']);
            // $('#cookieCount').text(data['cookieCount']);
            // $('#totalCount').text(data['totalCount']);
            // data = (JSON.parse(JSON.stringify(data)));
            // for (xValue of xValues) {
            //     types = Object.keys(data[xValue]);
            //     if(xValue == 'sessionCount' || xValue == 'cookieCount' || xValue == 'totalCount') continue;
            //     clickGraph.options.data[0].dataPoints.push({label: xValue, y : data[xValue]['total']});
            //     clickGraph.options.data[1].dataPoints.push({label: xValue, y : data[xValue]['user']});
            //     clickGraph.options.data[2].dataPoints.push({label: xValue, y : data[xValue]['session']});
            // }
            // spinner.stop();
            // clickGraph.render();
            // return;
        },
        error: function(err){
            console.log(JSON.stringify(err));
            spinner.stop();
        }
    });
}
function drawClickGraph(){
    var spinner = new Spinner(opts).spin(clickLoader);
    $.ajax({
        type: "GET",
        url: "urls/"+currentUrlId+"/analytics/clicks/"+currentRangeFrom+"/"+currentRangeTo+"/"+currentUnit,
        success: function(msg) {
            data = JSON.parse(msg);
            xValues = Object.keys(data);
            clickGraph.options.data[0].dataPoints = [];
            clickGraph.options.data[1].dataPoints = [];
            clickGraph.options.data[2].dataPoints = [];
            $('#sessionCount').text(data['sessionCount']);
            $('#cookieCount').text(data['cookieCount']);
            $('#totalCount').text(data['totalCount']);
            data = (JSON.parse(JSON.stringify(data)));
            for (xValue of xValues) {
                types = Object.keys(data[xValue]);
                if(xValue == 'sessionCount' || xValue == 'cookieCount' || xValue == 'totalCount') continue;
                clickGraph.options.data[0].dataPoints.push({label: xValue, y : data[xValue]['total']});
                clickGraph.options.data[1].dataPoints.push({label: xValue, y : data[xValue]['user']});
                clickGraph.options.data[2].dataPoints.push({label: xValue, y : data[xValue]['session']});
            }
            spinner.stop();
            clickGraph.render();
            return;
        },
        error: function(err){
            console.log(JSON.stringify(err));
            spinner.stop();
        }
    });
}

function drawPlatformGraph(){
    var spinner = new Spinner(opts).spin(platformLoader);
    platformGraph.options.data[0].dataPoints = [];
    $.ajax({
        type: "GET",
        url: "urls/"+currentUrlId+"/analytics/platform/"+currentRangeFrom+"/"+currentRangeTo+"/"+currentUnit,
        success: function(msg) {
            data = JSON.parse(msg);
            for (pf of data) {
                platformGraph.options.data[0].dataPoints.push({label: pf['platform'], y : pf['count']});
            }
            spinner.stop();
            platformGraph.render();
            return;
        },
        error: function(err){
            console.log(JSON.stringify(err));
            spinner.stop();
        }
    });

}

function drawReferrerGraph(){
    var spinner = new Spinner(opts).spin(referrerLoader);
    referrerGraph.options.data[0].dataPoints = [];
    $.ajax({
        type: "GET",
        url: "urls/"+currentUrlId+"/analytics/referrer/"+currentRangeFrom+"/"+currentRangeTo+"/"+currentUnit,
        success: function(msg) {
            data = JSON.parse(msg);
            for (referrer of data) {
                referrerGraph.options.data[0].dataPoints.push({label: referrer['referrers'], y : referrer['count']});
            }
            spinner.stop();
            referrerGraph.render();
            return;
        },
        error: function(err){
            console.log(JSON.stringify(err));
            spinner.stop();
        }
    });

}


function changeUnit(unit){
    currentUnit = unit;
    getAnalytics(currentUrlId);
    return;
}

//# sourceMappingURL=everything.js.map
