import{c as rs,g as $y,a as Gy}from"./index.3943f9f8.js";var pk={exports:{}};/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */(function(g){(function(b,E){g.exports=b.document?E(b,!0):function(N){if(!N.document)throw new Error("jQuery requires a window with a document");return E(N)}})(typeof window<"u"?window:rs,function(b,E){var N=[],I=Object.getPrototypeOf,O=N.slice,S=N.flat?function(l){return N.flat.call(l)}:function(l){return N.concat.apply([],l)},P=N.push,C=N.indexOf,F={},q=F.toString,$=F.hasOwnProperty,y=$.toString,G=y.call(Object),Ae={},ge=function(h){return typeof h=="function"&&typeof h.nodeType!="number"&&typeof h.item!="function"},le=function(h){return h!=null&&h===h.window},de=b.document,qe={type:!0,src:!0,nonce:!0,noModule:!0};function $e(l,h,p){p=p||de;var k,A,v=p.createElement("script");if(v.text=l,h)for(k in qe)A=h[k]||h.getAttribute&&h.getAttribute(k),A&&v.setAttribute(k,A);p.head.appendChild(v).parentNode.removeChild(v)}function rt(l){return l==null?l+"":typeof l=="object"||typeof l=="function"?F[q.call(l)]||"object":typeof l}var mt="3.6.1",w=function(l,h){return new w.fn.init(l,h)};w.fn=w.prototype={jquery:mt,constructor:w,length:0,toArray:function(){return O.call(this)},get:function(l){return l==null?O.call(this):l<0?this[l+this.length]:this[l]},pushStack:function(l){var h=w.merge(this.constructor(),l);return h.prevObject=this,h},each:function(l){return w.each(this,l)},map:function(l){return this.pushStack(w.map(this,function(h,p){return l.call(h,p,h)}))},slice:function(){return this.pushStack(O.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(w.grep(this,function(l,h){return(h+1)%2}))},odd:function(){return this.pushStack(w.grep(this,function(l,h){return h%2}))},eq:function(l){var h=this.length,p=+l+(l<0?h:0);return this.pushStack(p>=0&&p<h?[this[p]]:[])},end:function(){return this.prevObject||this.constructor()},push:P,sort:N.sort,splice:N.splice},w.extend=w.fn.extend=function(){var l,h,p,k,A,v,T=arguments[0]||{},j=1,z=arguments.length,W=!1;for(typeof T=="boolean"&&(W=T,T=arguments[j]||{},j++),typeof T!="object"&&!ge(T)&&(T={}),j===z&&(T=this,j--);j<z;j++)if((l=arguments[j])!=null)for(h in l)k=l[h],!(h==="__proto__"||T===k)&&(W&&k&&(w.isPlainObject(k)||(A=Array.isArray(k)))?(p=T[h],A&&!Array.isArray(p)?v=[]:!A&&!w.isPlainObject(p)?v={}:v=p,A=!1,T[h]=w.extend(W,v,k)):k!==void 0&&(T[h]=k));return T},w.extend({expando:"jQuery"+(mt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(l){throw new Error(l)},noop:function(){},isPlainObject:function(l){var h,p;return!l||q.call(l)!=="[object Object]"?!1:(h=I(l),h?(p=$.call(h,"constructor")&&h.constructor,typeof p=="function"&&y.call(p)===G):!0)},isEmptyObject:function(l){var h;for(h in l)return!1;return!0},globalEval:function(l,h,p){$e(l,{nonce:h&&h.nonce},p)},each:function(l,h){var p,k=0;if(ue(l))for(p=l.length;k<p&&h.call(l[k],k,l[k])!==!1;k++);else for(k in l)if(h.call(l[k],k,l[k])===!1)break;return l},makeArray:function(l,h){var p=h||[];return l!=null&&(ue(Object(l))?w.merge(p,typeof l=="string"?[l]:l):P.call(p,l)),p},inArray:function(l,h,p){return h==null?-1:C.call(h,l,p)},merge:function(l,h){for(var p=+h.length,k=0,A=l.length;k<p;k++)l[A++]=h[k];return l.length=A,l},grep:function(l,h,p){for(var k,A=[],v=0,T=l.length,j=!p;v<T;v++)k=!h(l[v],v),k!==j&&A.push(l[v]);return A},map:function(l,h,p){var k,A,v=0,T=[];if(ue(l))for(k=l.length;v<k;v++)A=h(l[v],v,p),A!=null&&T.push(A);else for(v in l)A=h(l[v],v,p),A!=null&&T.push(A);return S(T)},guid:1,support:Ae}),typeof Symbol=="function"&&(w.fn[Symbol.iterator]=N[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(l,h){F["[object "+h+"]"]=h.toLowerCase()});function ue(l){var h=!!l&&"length"in l&&l.length,p=rt(l);return ge(l)||le(l)?!1:p==="array"||h===0||typeof h=="number"&&h>0&&h-1 in l}var Ee=function(l){var h,p,k,A,v,T,j,z,W,Y,te,K,X,fe,De,pe,lt,ut,zt,Ve="sizzle"+1*new Date,Ce=l.document,Dt=0,Ne=0,it=cn(),yi=cn(),Ki=cn(),qt=cn(),ti=function(M,L){return M===L&&(te=!0),0},ni={}.hasOwnProperty,Wt=[],Vn=Wt.pop,en=Wt.push,$t=Wt.push,xi=Wt.slice,ii=function(M,L){for(var V=0,Z=M.length;V<Z;V++)if(M[V]===L)return V;return-1},Ir="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Oe="[\\x20\\t\\r\\n\\f]",Cn="(?:\\\\[\\da-fA-F]{1,6}"+Oe+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Vs="\\["+Oe+"*("+Cn+")(?:"+Oe+"*([*^$|!~]?=)"+Oe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Cn+"))|)"+Oe+"*\\]",Mr=":("+Cn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Vs+")*)|.*)\\)|)",xc=new RegExp(Oe+"+","g"),Yi=new RegExp("^"+Oe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Oe+"+$","g"),Hs=new RegExp("^"+Oe+"*,"+Oe+"*"),Us=new RegExp("^"+Oe+"*([>+~]|"+Oe+")"+Oe+"*"),qs=new RegExp(Oe+"|>"),Ec=new RegExp(Mr),Ws=new RegExp("^"+Cn+"$"),Po={ID:new RegExp("^#("+Cn+")"),CLASS:new RegExp("^\\.("+Cn+")"),TAG:new RegExp("^("+Cn+"|[*])"),ATTR:new RegExp("^"+Vs),PSEUDO:new RegExp("^"+Mr),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Oe+"*(even|odd|(([+-]|)(\\d*)n|)"+Oe+"*(?:([+-]|)"+Oe+"*(\\d+)|))"+Oe+"*\\)|)","i"),bool:new RegExp("^(?:"+Ir+")$","i"),needsContext:new RegExp("^"+Oe+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Oe+"*((?:-\\d)?\\d*)"+Oe+"*\\)|)(?=[^-]|$)","i")},$s=/HTML$/i,Dc=/^(?:input|select|textarea|button)$/i,Gs=/^h\d$/i,Qi=/^[^{]+\{\s*\[native \w/,Tc=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Lo=/[+~]/,vn=new RegExp("\\\\[\\da-fA-F]{1,6}"+Oe+"?|\\\\([^\\r\\n\\f])","g"),fn=function(M,L){var V="0x"+M.slice(1)-65536;return L||(V<0?String.fromCharCode(V+65536):String.fromCharCode(V>>10|55296,V&1023|56320))},Nr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ks=function(M,L){return L?M==="\0"?"\uFFFD":M.slice(0,-1)+"\\"+M.charCodeAt(M.length-1).toString(16)+" ":"\\"+M},Ge=function(){K()},Br=Zi(function(M){return M.disabled===!0&&M.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{$t.apply(Wt=xi.call(Ce.childNodes),Ce.childNodes),Wt[Ce.childNodes.length].nodeType}catch{$t={apply:Wt.length?function(L,V){en.apply(L,xi.call(V))}:function(L,V){for(var Z=L.length,H=0;L[Z++]=V[H++];);L.length=Z-1}}}function We(M,L,V,Z){var H,ee,ne,re,ce,we,me,ke=L&&L.ownerDocument,Se=L?L.nodeType:9;if(V=V||[],typeof M!="string"||!M||Se!==1&&Se!==9&&Se!==11)return V;if(!Z&&(K(L),L=L||X,De)){if(Se!==11&&(ce=Tc.exec(M)))if(H=ce[1]){if(Se===9)if(ne=L.getElementById(H)){if(ne.id===H)return V.push(ne),V}else return V;else if(ke&&(ne=ke.getElementById(H))&&zt(L,ne)&&ne.id===H)return V.push(ne),V}else{if(ce[2])return $t.apply(V,L.getElementsByTagName(M)),V;if((H=ce[3])&&p.getElementsByClassName&&L.getElementsByClassName)return $t.apply(V,L.getElementsByClassName(H)),V}if(p.qsa&&!qt[M+" "]&&(!pe||!pe.test(M))&&(Se!==1||L.nodeName.toLowerCase()!=="object")){if(me=M,ke=L,Se===1&&(qs.test(M)||Us.test(M))){for(ke=Lo.test(M)&&Te(L.parentNode)||L,(ke!==L||!p.scope)&&((re=L.getAttribute("id"))?re=re.replace(Nr,Ks):L.setAttribute("id",re=Ve)),we=T(M),ee=we.length;ee--;)we[ee]=(re?"#"+re:":scope")+" "+Oo(we[ee]);me=we.join(",")}try{return $t.apply(V,ke.querySelectorAll(me)),V}catch{qt(M,!0)}finally{re===Ve&&L.removeAttribute("id")}}}return z(M.replace(Yi,"$1"),L,V,Z)}function cn(){var M=[];function L(V,Z){return M.push(V+" ")>k.cacheLength&&delete L[M.shift()],L[V+" "]=Z}return L}function tn(M){return M[Ve]=!0,M}function nn(M){var L=X.createElement("fieldset");try{return!!M(L)}catch{return!1}finally{L.parentNode&&L.parentNode.removeChild(L),L=null}}function Pr(M,L){for(var V=M.split("|"),Z=V.length;Z--;)k.attrHandle[V[Z]]=L}function Gt(M,L){var V=L&&M,Z=V&&M.nodeType===1&&L.nodeType===1&&M.sourceIndex-L.sourceIndex;if(Z)return Z;if(V){for(;V=V.nextSibling;)if(V===L)return-1}return M?1:-1}function ln(M){return function(L){var V=L.nodeName.toLowerCase();return V==="input"&&L.type===M}}function Ys(M){return function(L){var V=L.nodeName.toLowerCase();return(V==="input"||V==="button")&&L.type===M}}function kt(M){return function(L){return"form"in L?L.parentNode&&L.disabled===!1?"label"in L?"label"in L.parentNode?L.parentNode.disabled===M:L.disabled===M:L.isDisabled===M||L.isDisabled!==!M&&Br(L)===M:L.disabled===M:"label"in L?L.disabled===M:!1}}function yn(M){return tn(function(L){return L=+L,tn(function(V,Z){for(var H,ee=M([],V.length,L),ne=ee.length;ne--;)V[H=ee[ne]]&&(V[H]=!(Z[H]=V[H]))})})}function Te(M){return M&&typeof M.getElementsByTagName<"u"&&M}p=We.support={},v=We.isXML=function(M){var L=M&&M.namespaceURI,V=M&&(M.ownerDocument||M).documentElement;return!$s.test(L||V&&V.nodeName||"HTML")},K=We.setDocument=function(M){var L,V,Z=M?M.ownerDocument||M:Ce;return Z==X||Z.nodeType!==9||!Z.documentElement||(X=Z,fe=X.documentElement,De=!v(X),Ce!=X&&(V=X.defaultView)&&V.top!==V&&(V.addEventListener?V.addEventListener("unload",Ge,!1):V.attachEvent&&V.attachEvent("onunload",Ge)),p.scope=nn(function(H){return fe.appendChild(H).appendChild(X.createElement("div")),typeof H.querySelectorAll<"u"&&!H.querySelectorAll(":scope fieldset div").length}),p.attributes=nn(function(H){return H.className="i",!H.getAttribute("className")}),p.getElementsByTagName=nn(function(H){return H.appendChild(X.createComment("")),!H.getElementsByTagName("*").length}),p.getElementsByClassName=Qi.test(X.getElementsByClassName),p.getById=nn(function(H){return fe.appendChild(H).id=Ve,!X.getElementsByName||!X.getElementsByName(Ve).length}),p.getById?(k.filter.ID=function(H){var ee=H.replace(vn,fn);return function(ne){return ne.getAttribute("id")===ee}},k.find.ID=function(H,ee){if(typeof ee.getElementById<"u"&&De){var ne=ee.getElementById(H);return ne?[ne]:[]}}):(k.filter.ID=function(H){var ee=H.replace(vn,fn);return function(ne){var re=typeof ne.getAttributeNode<"u"&&ne.getAttributeNode("id");return re&&re.value===ee}},k.find.ID=function(H,ee){if(typeof ee.getElementById<"u"&&De){var ne,re,ce,we=ee.getElementById(H);if(we){if(ne=we.getAttributeNode("id"),ne&&ne.value===H)return[we];for(ce=ee.getElementsByName(H),re=0;we=ce[re++];)if(ne=we.getAttributeNode("id"),ne&&ne.value===H)return[we]}return[]}}),k.find.TAG=p.getElementsByTagName?function(H,ee){if(typeof ee.getElementsByTagName<"u")return ee.getElementsByTagName(H);if(p.qsa)return ee.querySelectorAll(H)}:function(H,ee){var ne,re=[],ce=0,we=ee.getElementsByTagName(H);if(H==="*"){for(;ne=we[ce++];)ne.nodeType===1&&re.push(ne);return re}return we},k.find.CLASS=p.getElementsByClassName&&function(H,ee){if(typeof ee.getElementsByClassName<"u"&&De)return ee.getElementsByClassName(H)},lt=[],pe=[],(p.qsa=Qi.test(X.querySelectorAll))&&(nn(function(H){var ee;fe.appendChild(H).innerHTML="<a id='"+Ve+"'></a><select id='"+Ve+"-\r\\' msallowcapture=''><option selected=''></option></select>",H.querySelectorAll("[msallowcapture^='']").length&&pe.push("[*^$]="+Oe+`*(?:''|"")`),H.querySelectorAll("[selected]").length||pe.push("\\["+Oe+"*(?:value|"+Ir+")"),H.querySelectorAll("[id~="+Ve+"-]").length||pe.push("~="),ee=X.createElement("input"),ee.setAttribute("name",""),H.appendChild(ee),H.querySelectorAll("[name='']").length||pe.push("\\["+Oe+"*name"+Oe+"*="+Oe+`*(?:''|"")`),H.querySelectorAll(":checked").length||pe.push(":checked"),H.querySelectorAll("a#"+Ve+"+*").length||pe.push(".#.+[+~]"),H.querySelectorAll("\\\f"),pe.push("[\\r\\n\\f]")}),nn(function(H){H.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ee=X.createElement("input");ee.setAttribute("type","hidden"),H.appendChild(ee).setAttribute("name","D"),H.querySelectorAll("[name=d]").length&&pe.push("name"+Oe+"*[*^$|!~]?="),H.querySelectorAll(":enabled").length!==2&&pe.push(":enabled",":disabled"),fe.appendChild(H).disabled=!0,H.querySelectorAll(":disabled").length!==2&&pe.push(":enabled",":disabled"),H.querySelectorAll("*,:x"),pe.push(",.*:")})),(p.matchesSelector=Qi.test(ut=fe.matches||fe.webkitMatchesSelector||fe.mozMatchesSelector||fe.oMatchesSelector||fe.msMatchesSelector))&&nn(function(H){p.disconnectedMatch=ut.call(H,"*"),ut.call(H,"[s!='']:x"),lt.push("!=",Mr)}),pe=pe.length&&new RegExp(pe.join("|")),lt=lt.length&&new RegExp(lt.join("|")),L=Qi.test(fe.compareDocumentPosition),zt=L||Qi.test(fe.contains)?function(H,ee){var ne=H.nodeType===9?H.documentElement:H,re=ee&&ee.parentNode;return H===re||!!(re&&re.nodeType===1&&(ne.contains?ne.contains(re):H.compareDocumentPosition&&H.compareDocumentPosition(re)&16))}:function(H,ee){if(ee){for(;ee=ee.parentNode;)if(ee===H)return!0}return!1},ti=L?function(H,ee){if(H===ee)return te=!0,0;var ne=!H.compareDocumentPosition-!ee.compareDocumentPosition;return ne||(ne=(H.ownerDocument||H)==(ee.ownerDocument||ee)?H.compareDocumentPosition(ee):1,ne&1||!p.sortDetached&&ee.compareDocumentPosition(H)===ne?H==X||H.ownerDocument==Ce&&zt(Ce,H)?-1:ee==X||ee.ownerDocument==Ce&&zt(Ce,ee)?1:Y?ii(Y,H)-ii(Y,ee):0:ne&4?-1:1)}:function(H,ee){if(H===ee)return te=!0,0;var ne,re=0,ce=H.parentNode,we=ee.parentNode,me=[H],ke=[ee];if(!ce||!we)return H==X?-1:ee==X?1:ce?-1:we?1:Y?ii(Y,H)-ii(Y,ee):0;if(ce===we)return Gt(H,ee);for(ne=H;ne=ne.parentNode;)me.unshift(ne);for(ne=ee;ne=ne.parentNode;)ke.unshift(ne);for(;me[re]===ke[re];)re++;return re?Gt(me[re],ke[re]):me[re]==Ce?-1:ke[re]==Ce?1:0}),X},We.matches=function(M,L){return We(M,null,null,L)},We.matchesSelector=function(M,L){if(K(M),p.matchesSelector&&De&&!qt[L+" "]&&(!lt||!lt.test(L))&&(!pe||!pe.test(L)))try{var V=ut.call(M,L);if(V||p.disconnectedMatch||M.document&&M.document.nodeType!==11)return V}catch{qt(L,!0)}return We(L,X,null,[M]).length>0},We.contains=function(M,L){return(M.ownerDocument||M)!=X&&K(M),zt(M,L)},We.attr=function(M,L){(M.ownerDocument||M)!=X&&K(M);var V=k.attrHandle[L.toLowerCase()],Z=V&&ni.call(k.attrHandle,L.toLowerCase())?V(M,L,!De):void 0;return Z!==void 0?Z:p.attributes||!De?M.getAttribute(L):(Z=M.getAttributeNode(L))&&Z.specified?Z.value:null},We.escape=function(M){return(M+"").replace(Nr,Ks)},We.error=function(M){throw new Error("Syntax error, unrecognized expression: "+M)},We.uniqueSort=function(M){var L,V=[],Z=0,H=0;if(te=!p.detectDuplicates,Y=!p.sortStable&&M.slice(0),M.sort(ti),te){for(;L=M[H++];)L===M[H]&&(Z=V.push(H));for(;Z--;)M.splice(V[Z],1)}return Y=null,M},A=We.getText=function(M){var L,V="",Z=0,H=M.nodeType;if(H){if(H===1||H===9||H===11){if(typeof M.textContent=="string")return M.textContent;for(M=M.firstChild;M;M=M.nextSibling)V+=A(M)}else if(H===3||H===4)return M.nodeValue}else for(;L=M[Z++];)V+=A(L);return V},k=We.selectors={cacheLength:50,createPseudo:tn,match:Po,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(M){return M[1]=M[1].replace(vn,fn),M[3]=(M[3]||M[4]||M[5]||"").replace(vn,fn),M[2]==="~="&&(M[3]=" "+M[3]+" "),M.slice(0,4)},CHILD:function(M){return M[1]=M[1].toLowerCase(),M[1].slice(0,3)==="nth"?(M[3]||We.error(M[0]),M[4]=+(M[4]?M[5]+(M[6]||1):2*(M[3]==="even"||M[3]==="odd")),M[5]=+(M[7]+M[8]||M[3]==="odd")):M[3]&&We.error(M[0]),M},PSEUDO:function(M){var L,V=!M[6]&&M[2];return Po.CHILD.test(M[0])?null:(M[3]?M[2]=M[4]||M[5]||"":V&&Ec.test(V)&&(L=T(V,!0))&&(L=V.indexOf(")",V.length-L)-V.length)&&(M[0]=M[0].slice(0,L),M[2]=V.slice(0,L)),M.slice(0,3))}},filter:{TAG:function(M){var L=M.replace(vn,fn).toLowerCase();return M==="*"?function(){return!0}:function(V){return V.nodeName&&V.nodeName.toLowerCase()===L}},CLASS:function(M){var L=it[M+" "];return L||(L=new RegExp("(^|"+Oe+")"+M+"("+Oe+"|$)"))&&it(M,function(V){return L.test(typeof V.className=="string"&&V.className||typeof V.getAttribute<"u"&&V.getAttribute("class")||"")})},ATTR:function(M,L,V){return function(Z){var H=We.attr(Z,M);return H==null?L==="!=":L?(H+="",L==="="?H===V:L==="!="?H!==V:L==="^="?V&&H.indexOf(V)===0:L==="*="?V&&H.indexOf(V)>-1:L==="$="?V&&H.slice(-V.length)===V:L==="~="?(" "+H.replace(xc," ")+" ").indexOf(V)>-1:L==="|="?H===V||H.slice(0,V.length+1)===V+"-":!1):!0}},CHILD:function(M,L,V,Z,H){var ee=M.slice(0,3)!=="nth",ne=M.slice(-4)!=="last",re=L==="of-type";return Z===1&&H===0?function(ce){return!!ce.parentNode}:function(ce,we,me){var ke,Se,Ke,_e,bt,Tt,Qt=ee!==ne?"nextSibling":"previousSibling",tt=ce.parentNode,Ei=re&&ce.nodeName.toLowerCase(),Ji=!me&&!re,Rt=!1;if(tt){if(ee){for(;Qt;){for(_e=ce;_e=_e[Qt];)if(re?_e.nodeName.toLowerCase()===Ei:_e.nodeType===1)return!1;Tt=Qt=M==="only"&&!Tt&&"nextSibling"}return!0}if(Tt=[ne?tt.firstChild:tt.lastChild],ne&&Ji){for(_e=tt,Ke=_e[Ve]||(_e[Ve]={}),Se=Ke[_e.uniqueID]||(Ke[_e.uniqueID]={}),ke=Se[M]||[],bt=ke[0]===Dt&&ke[1],Rt=bt&&ke[2],_e=bt&&tt.childNodes[bt];_e=++bt&&_e&&_e[Qt]||(Rt=bt=0)||Tt.pop();)if(_e.nodeType===1&&++Rt&&_e===ce){Se[M]=[Dt,bt,Rt];break}}else if(Ji&&(_e=ce,Ke=_e[Ve]||(_e[Ve]={}),Se=Ke[_e.uniqueID]||(Ke[_e.uniqueID]={}),ke=Se[M]||[],bt=ke[0]===Dt&&ke[1],Rt=bt),Rt===!1)for(;(_e=++bt&&_e&&_e[Qt]||(Rt=bt=0)||Tt.pop())&&!((re?_e.nodeName.toLowerCase()===Ei:_e.nodeType===1)&&++Rt&&(Ji&&(Ke=_e[Ve]||(_e[Ve]={}),Se=Ke[_e.uniqueID]||(Ke[_e.uniqueID]={}),Se[M]=[Dt,Rt]),_e===ce)););return Rt-=H,Rt===Z||Rt%Z===0&&Rt/Z>=0}}},PSEUDO:function(M,L){var V,Z=k.pseudos[M]||k.setFilters[M.toLowerCase()]||We.error("unsupported pseudo: "+M);return Z[Ve]?Z(L):Z.length>1?(V=[M,M,"",L],k.setFilters.hasOwnProperty(M.toLowerCase())?tn(function(H,ee){for(var ne,re=Z(H,L),ce=re.length;ce--;)ne=ii(H,re[ce]),H[ne]=!(ee[ne]=re[ce])}):function(H){return Z(H,0,V)}):Z}},pseudos:{not:tn(function(M){var L=[],V=[],Z=j(M.replace(Yi,"$1"));return Z[Ve]?tn(function(H,ee,ne,re){for(var ce,we=Z(H,null,re,[]),me=H.length;me--;)(ce=we[me])&&(H[me]=!(ee[me]=ce))}):function(H,ee,ne){return L[0]=H,Z(L,null,ne,V),L[0]=null,!V.pop()}}),has:tn(function(M){return function(L){return We(M,L).length>0}}),contains:tn(function(M){return M=M.replace(vn,fn),function(L){return(L.textContent||A(L)).indexOf(M)>-1}}),lang:tn(function(M){return Ws.test(M||"")||We.error("unsupported lang: "+M),M=M.replace(vn,fn).toLowerCase(),function(L){var V;do if(V=De?L.lang:L.getAttribute("xml:lang")||L.getAttribute("lang"))return V=V.toLowerCase(),V===M||V.indexOf(M+"-")===0;while((L=L.parentNode)&&L.nodeType===1);return!1}}),target:function(M){var L=l.location&&l.location.hash;return L&&L.slice(1)===M.id},root:function(M){return M===fe},focus:function(M){return M===X.activeElement&&(!X.hasFocus||X.hasFocus())&&!!(M.type||M.href||~M.tabIndex)},enabled:kt(!1),disabled:kt(!0),checked:function(M){var L=M.nodeName.toLowerCase();return L==="input"&&!!M.checked||L==="option"&&!!M.selected},selected:function(M){return M.parentNode&&M.parentNode.selectedIndex,M.selected===!0},empty:function(M){for(M=M.firstChild;M;M=M.nextSibling)if(M.nodeType<6)return!1;return!0},parent:function(M){return!k.pseudos.empty(M)},header:function(M){return Gs.test(M.nodeName)},input:function(M){return Dc.test(M.nodeName)},button:function(M){var L=M.nodeName.toLowerCase();return L==="input"&&M.type==="button"||L==="button"},text:function(M){var L;return M.nodeName.toLowerCase()==="input"&&M.type==="text"&&((L=M.getAttribute("type"))==null||L.toLowerCase()==="text")},first:yn(function(){return[0]}),last:yn(function(M,L){return[L-1]}),eq:yn(function(M,L,V){return[V<0?V+L:V]}),even:yn(function(M,L){for(var V=0;V<L;V+=2)M.push(V);return M}),odd:yn(function(M,L){for(var V=1;V<L;V+=2)M.push(V);return M}),lt:yn(function(M,L,V){for(var Z=V<0?V+L:V>L?L:V;--Z>=0;)M.push(Z);return M}),gt:yn(function(M,L,V){for(var Z=V<0?V+L:V;++Z<L;)M.push(Z);return M})}},k.pseudos.nth=k.pseudos.eq;for(h in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})k.pseudos[h]=ln(h);for(h in{submit:!0,reset:!0})k.pseudos[h]=Ys(h);function Qs(){}Qs.prototype=k.filters=k.pseudos,k.setFilters=new Qs,T=We.tokenize=function(M,L){var V,Z,H,ee,ne,re,ce,we=yi[M+" "];if(we)return L?0:we.slice(0);for(ne=M,re=[],ce=k.preFilter;ne;){(!V||(Z=Hs.exec(ne)))&&(Z&&(ne=ne.slice(Z[0].length)||ne),re.push(H=[])),V=!1,(Z=Us.exec(ne))&&(V=Z.shift(),H.push({value:V,type:Z[0].replace(Yi," ")}),ne=ne.slice(V.length));for(ee in k.filter)(Z=Po[ee].exec(ne))&&(!ce[ee]||(Z=ce[ee](Z)))&&(V=Z.shift(),H.push({value:V,type:ee,matches:Z}),ne=ne.slice(V.length));if(!V)break}return L?ne.length:ne?We.error(M):yi(M,re).slice(0)};function Oo(M){for(var L=0,V=M.length,Z="";L<V;L++)Z+=M[L].value;return Z}function Zi(M,L,V){var Z=L.dir,H=L.next,ee=H||Z,ne=V&&ee==="parentNode",re=Ne++;return L.first?function(ce,we,me){for(;ce=ce[Z];)if(ce.nodeType===1||ne)return M(ce,we,me);return!1}:function(ce,we,me){var ke,Se,Ke,_e=[Dt,re];if(me){for(;ce=ce[Z];)if((ce.nodeType===1||ne)&&M(ce,we,me))return!0}else for(;ce=ce[Z];)if(ce.nodeType===1||ne)if(Ke=ce[Ve]||(ce[Ve]={}),Se=Ke[ce.uniqueID]||(Ke[ce.uniqueID]={}),H&&H===ce.nodeName.toLowerCase())ce=ce[Z]||ce;else{if((ke=Se[ee])&&ke[0]===Dt&&ke[1]===re)return _e[2]=ke[2];if(Se[ee]=_e,_e[2]=M(ce,we,me))return!0}return!1}}function Lr(M){return M.length>1?function(L,V,Z){for(var H=M.length;H--;)if(!M[H](L,V,Z))return!1;return!0}:M[0]}function Sc(M,L,V){for(var Z=0,H=L.length;Z<H;Z++)We(M,L[Z],V);return V}function oi(M,L,V,Z,H){for(var ee,ne=[],re=0,ce=M.length,we=L!=null;re<ce;re++)(ee=M[re])&&(!V||V(ee,Z,H))&&(ne.push(ee),we&&L.push(re));return ne}function xn(M,L,V,Z,H,ee){return Z&&!Z[Ve]&&(Z=xn(Z)),H&&!H[Ve]&&(H=xn(H,ee)),tn(function(ne,re,ce,we){var me,ke,Se,Ke=[],_e=[],bt=re.length,Tt=ne||Sc(L||"*",ce.nodeType?[ce]:ce,[]),Qt=M&&(ne||!L)?oi(Tt,Ke,M,ce,we):Tt,tt=V?H||(ne?M:bt||Z)?[]:re:Qt;if(V&&V(Qt,tt,ce,we),Z)for(me=oi(tt,_e),Z(me,[],ce,we),ke=me.length;ke--;)(Se=me[ke])&&(tt[_e[ke]]=!(Qt[_e[ke]]=Se));if(ne){if(H||M){if(H){for(me=[],ke=tt.length;ke--;)(Se=tt[ke])&&me.push(Qt[ke]=Se);H(null,tt=[],me,we)}for(ke=tt.length;ke--;)(Se=tt[ke])&&(me=H?ii(ne,Se):Ke[ke])>-1&&(ne[me]=!(re[me]=Se))}}else tt=oi(tt===re?tt.splice(bt,tt.length):tt),H?H(null,re,tt,we):$t.apply(re,tt)})}function vt(M){for(var L,V,Z,H=M.length,ee=k.relative[M[0].type],ne=ee||k.relative[" "],re=ee?1:0,ce=Zi(function(ke){return ke===L},ne,!0),we=Zi(function(ke){return ii(L,ke)>-1},ne,!0),me=[function(ke,Se,Ke){var _e=!ee&&(Ke||Se!==W)||((L=Se).nodeType?ce(ke,Se,Ke):we(ke,Se,Ke));return L=null,_e}];re<H;re++)if(V=k.relative[M[re].type])me=[Zi(Lr(me),V)];else{if(V=k.filter[M[re].type].apply(null,M[re].matches),V[Ve]){for(Z=++re;Z<H&&!k.relative[M[Z].type];Z++);return xn(re>1&&Lr(me),re>1&&Oo(M.slice(0,re-1).concat({value:M[re-2].type===" "?"*":""})).replace(Yi,"$1"),V,re<Z&&vt(M.slice(re,Z)),Z<H&&vt(M=M.slice(Z)),Z<H&&Oo(M))}me.push(V)}return Lr(me)}function Zs(M,L){var V=L.length>0,Z=M.length>0,H=function(ee,ne,re,ce,we){var me,ke,Se,Ke=0,_e="0",bt=ee&&[],Tt=[],Qt=W,tt=ee||Z&&k.find.TAG("*",we),Ei=Dt+=Qt==null?1:Math.random()||.1,Ji=tt.length;for(we&&(W=ne==X||ne||we);_e!==Ji&&(me=tt[_e])!=null;_e++){if(Z&&me){for(ke=0,!ne&&me.ownerDocument!=X&&(K(me),re=!De);Se=M[ke++];)if(Se(me,ne||X,re)){ce.push(me);break}we&&(Dt=Ei)}V&&((me=!Se&&me)&&Ke--,ee&&bt.push(me))}if(Ke+=_e,V&&_e!==Ke){for(ke=0;Se=L[ke++];)Se(bt,Tt,ne,re);if(ee){if(Ke>0)for(;_e--;)bt[_e]||Tt[_e]||(Tt[_e]=Vn.call(ce));Tt=oi(Tt)}$t.apply(ce,Tt),we&&!ee&&Tt.length>0&&Ke+L.length>1&&We.uniqueSort(ce)}return we&&(Dt=Ei,W=Qt),bt};return V?tn(H):H}return j=We.compile=function(M,L){var V,Z=[],H=[],ee=Ki[M+" "];if(!ee){for(L||(L=T(M)),V=L.length;V--;)ee=vt(L[V]),ee[Ve]?Z.push(ee):H.push(ee);ee=Ki(M,Zs(H,Z)),ee.selector=M}return ee},z=We.select=function(M,L,V,Z){var H,ee,ne,re,ce,we=typeof M=="function"&&M,me=!Z&&T(M=we.selector||M);if(V=V||[],me.length===1){if(ee=me[0]=me[0].slice(0),ee.length>2&&(ne=ee[0]).type==="ID"&&L.nodeType===9&&De&&k.relative[ee[1].type]){if(L=(k.find.ID(ne.matches[0].replace(vn,fn),L)||[])[0],L)we&&(L=L.parentNode);else return V;M=M.slice(ee.shift().value.length)}for(H=Po.needsContext.test(M)?0:ee.length;H--&&(ne=ee[H],!k.relative[re=ne.type]);)if((ce=k.find[re])&&(Z=ce(ne.matches[0].replace(vn,fn),Lo.test(ee[0].type)&&Te(L.parentNode)||L))){if(ee.splice(H,1),M=Z.length&&Oo(ee),!M)return $t.apply(V,Z),V;break}}return(we||j(M,me))(Z,L,!De,V,!L||Lo.test(M)&&Te(L.parentNode)||L),V},p.sortStable=Ve.split("").sort(ti).join("")===Ve,p.detectDuplicates=!!te,K(),p.sortDetached=nn(function(M){return M.compareDocumentPosition(X.createElement("fieldset"))&1}),nn(function(M){return M.innerHTML="<a href='#'></a>",M.firstChild.getAttribute("href")==="#"})||Pr("type|href|height|width",function(M,L,V){if(!V)return M.getAttribute(L,L.toLowerCase()==="type"?1:2)}),(!p.attributes||!nn(function(M){return M.innerHTML="<input/>",M.firstChild.setAttribute("value",""),M.firstChild.getAttribute("value")===""}))&&Pr("value",function(M,L,V){if(!V&&M.nodeName.toLowerCase()==="input")return M.defaultValue}),nn(function(M){return M.getAttribute("disabled")==null})||Pr(Ir,function(M,L,V){var Z;if(!V)return M[L]===!0?L.toLowerCase():(Z=M.getAttributeNode(L))&&Z.specified?Z.value:null}),We}(b);w.find=Ee,w.expr=Ee.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=Ee.uniqueSort,w.text=Ee.getText,w.isXMLDoc=Ee.isXML,w.contains=Ee.contains,w.escapeSelector=Ee.escape;var xe=function(l,h,p){for(var k=[],A=p!==void 0;(l=l[h])&&l.nodeType!==9;)if(l.nodeType===1){if(A&&w(l).is(p))break;k.push(l)}return k},Ue=function(l,h){for(var p=[];l;l=l.nextSibling)l.nodeType===1&&l!==h&&p.push(l);return p},Xe=w.expr.match.needsContext;function Pe(l,h){return l.nodeName&&l.nodeName.toLowerCase()===h.toLowerCase()}var nt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Xt(l,h,p){return ge(h)?w.grep(l,function(k,A){return!!h.call(k,A,k)!==p}):h.nodeType?w.grep(l,function(k){return k===h!==p}):typeof h!="string"?w.grep(l,function(k){return C.call(h,k)>-1!==p}):w.filter(h,l,p)}w.filter=function(l,h,p){var k=h[0];return p&&(l=":not("+l+")"),h.length===1&&k.nodeType===1?w.find.matchesSelector(k,l)?[k]:[]:w.find.matches(l,w.grep(h,function(A){return A.nodeType===1}))},w.fn.extend({find:function(l){var h,p,k=this.length,A=this;if(typeof l!="string")return this.pushStack(w(l).filter(function(){for(h=0;h<k;h++)if(w.contains(A[h],this))return!0}));for(p=this.pushStack([]),h=0;h<k;h++)w.find(l,A[h],p);return k>1?w.uniqueSort(p):p},filter:function(l){return this.pushStack(Xt(this,l||[],!1))},not:function(l){return this.pushStack(Xt(this,l||[],!0))},is:function(l){return!!Xt(this,typeof l=="string"&&Xe.test(l)?w(l):l||[],!1).length}});var Le,Ln=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Qn=w.fn.init=function(l,h,p){var k,A;if(!l)return this;if(p=p||Le,typeof l=="string")if(l[0]==="<"&&l[l.length-1]===">"&&l.length>=3?k=[null,l,null]:k=Ln.exec(l),k&&(k[1]||!h))if(k[1]){if(h=h instanceof w?h[0]:h,w.merge(this,w.parseHTML(k[1],h&&h.nodeType?h.ownerDocument||h:de,!0)),nt.test(k[1])&&w.isPlainObject(h))for(k in h)ge(this[k])?this[k](h[k]):this.attr(k,h[k]);return this}else return A=de.getElementById(k[2]),A&&(this[0]=A,this.length=1),this;else return!h||h.jquery?(h||p).find(l):this.constructor(h).find(l);else{if(l.nodeType)return this[0]=l,this.length=1,this;if(ge(l))return p.ready!==void 0?p.ready(l):l(w)}return w.makeArray(l,this)};Qn.prototype=w.fn,Le=w(de);var _o=/^(?:parents|prev(?:Until|All))/,ui={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(l){var h=w(l,this),p=h.length;return this.filter(function(){for(var k=0;k<p;k++)if(w.contains(this,h[k]))return!0})},closest:function(l,h){var p,k=0,A=this.length,v=[],T=typeof l!="string"&&w(l);if(!Xe.test(l)){for(;k<A;k++)for(p=this[k];p&&p!==h;p=p.parentNode)if(p.nodeType<11&&(T?T.index(p)>-1:p.nodeType===1&&w.find.matchesSelector(p,l))){v.push(p);break}}return this.pushStack(v.length>1?w.uniqueSort(v):v)},index:function(l){return l?typeof l=="string"?C.call(w(l),this[0]):C.call(this,l.jquery?l[0]:l):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(l,h){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(l,h))))},addBack:function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))}});function ur(l,h){for(;(l=l[h])&&l.nodeType!==1;);return l}w.each({parent:function(l){var h=l.parentNode;return h&&h.nodeType!==11?h:null},parents:function(l){return xe(l,"parentNode")},parentsUntil:function(l,h,p){return xe(l,"parentNode",p)},next:function(l){return ur(l,"nextSibling")},prev:function(l){return ur(l,"previousSibling")},nextAll:function(l){return xe(l,"nextSibling")},prevAll:function(l){return xe(l,"previousSibling")},nextUntil:function(l,h,p){return xe(l,"nextSibling",p)},prevUntil:function(l,h,p){return xe(l,"previousSibling",p)},siblings:function(l){return Ue((l.parentNode||{}).firstChild,l)},children:function(l){return Ue(l.firstChild)},contents:function(l){return l.contentDocument!=null&&I(l.contentDocument)?l.contentDocument:(Pe(l,"template")&&(l=l.content||l),w.merge([],l.childNodes))}},function(l,h){w.fn[l]=function(p,k){var A=w.map(this,h,p);return l.slice(-5)!=="Until"&&(k=p),k&&typeof k=="string"&&(A=w.filter(k,A)),this.length>1&&(ui[l]||w.uniqueSort(A),_o.test(l)&&A.reverse()),this.pushStack(A)}});var Vt=/[^\x20\t\r\n\f]+/g;function at(l){var h={};return w.each(l.match(Vt)||[],function(p,k){h[k]=!0}),h}w.Callbacks=function(l){l=typeof l=="string"?at(l):w.extend({},l);var h,p,k,A,v=[],T=[],j=-1,z=function(){for(A=A||l.once,k=h=!0;T.length;j=-1)for(p=T.shift();++j<v.length;)v[j].apply(p[0],p[1])===!1&&l.stopOnFalse&&(j=v.length,p=!1);l.memory||(p=!1),h=!1,A&&(p?v=[]:v="")},W={add:function(){return v&&(p&&!h&&(j=v.length-1,T.push(p)),function Y(te){w.each(te,function(K,X){ge(X)?(!l.unique||!W.has(X))&&v.push(X):X&&X.length&&rt(X)!=="string"&&Y(X)})}(arguments),p&&!h&&z()),this},remove:function(){return w.each(arguments,function(Y,te){for(var K;(K=w.inArray(te,v,K))>-1;)v.splice(K,1),K<=j&&j--}),this},has:function(Y){return Y?w.inArray(Y,v)>-1:v.length>0},empty:function(){return v&&(v=[]),this},disable:function(){return A=T=[],v=p="",this},disabled:function(){return!v},lock:function(){return A=T=[],!p&&!h&&(v=p=""),this},locked:function(){return!!A},fireWith:function(Y,te){return A||(te=te||[],te=[Y,te.slice?te.slice():te],T.push(te),h||z()),this},fire:function(){return W.fireWith(this,arguments),this},fired:function(){return!!k}};return W};function On(l){return l}function Ao(l){throw l}function ps(l,h,p,k){var A;try{l&&ge(A=l.promise)?A.call(l).done(h).fail(p):l&&ge(A=l.then)?A.call(l,h,p):h.apply(void 0,[l].slice(k))}catch(v){p.apply(void 0,[v])}}w.extend({Deferred:function(l){var h=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],p="pending",k={state:function(){return p},always:function(){return A.done(arguments).fail(arguments),this},catch:function(v){return k.then(null,v)},pipe:function(){var v=arguments;return w.Deferred(function(T){w.each(h,function(j,z){var W=ge(v[z[4]])&&v[z[4]];A[z[1]](function(){var Y=W&&W.apply(this,arguments);Y&&ge(Y.promise)?Y.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[z[0]+"With"](this,W?[Y]:arguments)})}),v=null}).promise()},then:function(v,T,j){var z=0;function W(Y,te,K,X){return function(){var fe=this,De=arguments,pe=function(){var ut,zt;if(!(Y<z)){if(ut=K.apply(fe,De),ut===te.promise())throw new TypeError("Thenable self-resolution");zt=ut&&(typeof ut=="object"||typeof ut=="function")&&ut.then,ge(zt)?X?zt.call(ut,W(z,te,On,X),W(z,te,Ao,X)):(z++,zt.call(ut,W(z,te,On,X),W(z,te,Ao,X),W(z,te,On,te.notifyWith))):(K!==On&&(fe=void 0,De=[ut]),(X||te.resolveWith)(fe,De))}},lt=X?pe:function(){try{pe()}catch(ut){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(ut,lt.stackTrace),Y+1>=z&&(K!==Ao&&(fe=void 0,De=[ut]),te.rejectWith(fe,De))}};Y?lt():(w.Deferred.getStackHook&&(lt.stackTrace=w.Deferred.getStackHook()),b.setTimeout(lt))}}return w.Deferred(function(Y){h[0][3].add(W(0,Y,ge(j)?j:On,Y.notifyWith)),h[1][3].add(W(0,Y,ge(v)?v:On)),h[2][3].add(W(0,Y,ge(T)?T:Ao))}).promise()},promise:function(v){return v!=null?w.extend(v,k):k}},A={};return w.each(h,function(v,T){var j=T[2],z=T[5];k[T[1]]=j.add,z&&j.add(function(){p=z},h[3-v][2].disable,h[3-v][3].disable,h[0][2].lock,h[0][3].lock),j.add(T[3].fire),A[T[0]]=function(){return A[T[0]+"With"](this===A?void 0:this,arguments),this},A[T[0]+"With"]=j.fireWith}),k.promise(A),l&&l.call(A,A),A},when:function(l){var h=arguments.length,p=h,k=Array(p),A=O.call(arguments),v=w.Deferred(),T=function(j){return function(z){k[j]=this,A[j]=arguments.length>1?O.call(arguments):z,--h||v.resolveWith(k,A)}};if(h<=1&&(ps(l,v.done(T(p)).resolve,v.reject,!h),v.state()==="pending"||ge(A[p]&&A[p].then)))return v.then();for(;p--;)ps(A[p],T(p),v.reject);return v.promise()}});var ms=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(l,h){b.console&&b.console.warn&&l&&ms.test(l.name)&&b.console.warn("jQuery.Deferred exception: "+l.message,l.stack,h)},w.readyException=function(l){b.setTimeout(function(){throw l})};var Co=w.Deferred();w.fn.ready=function(l){return Co.then(l).catch(function(h){w.readyException(h)}),this},w.extend({isReady:!1,readyWait:1,ready:function(l){(l===!0?--w.readyWait:w.isReady)||(w.isReady=!0,!(l!==!0&&--w.readyWait>0)&&Co.resolveWith(de,[w]))}}),w.ready.then=Co.then;function oe(){de.removeEventListener("DOMContentLoaded",oe),b.removeEventListener("load",oe),w.ready()}de.readyState==="complete"||de.readyState!=="loading"&&!de.documentElement.doScroll?b.setTimeout(w.ready):(de.addEventListener("DOMContentLoaded",oe),b.addEventListener("load",oe));var hn=function(l,h,p,k,A,v,T){var j=0,z=l.length,W=p==null;if(rt(p)==="object"){A=!0;for(j in p)hn(l,h,j,p[j],!0,v,T)}else if(k!==void 0&&(A=!0,ge(k)||(T=!0),W&&(T?(h.call(l,k),h=null):(W=h,h=function(Y,te,K){return W.call(w(Y),K)})),h))for(;j<z;j++)h(l[j],p,T?k:k.call(l[j],j,h(l[j],p)));return A?l:W?h.call(l):z?h(l[0],p):v},Ie=/^-ms-/,ks=/-([a-z])/g;function bs(l,h){return h.toUpperCase()}function sn(l){return l.replace(Ie,"ms-").replace(ks,bs)}var ji=function(l){return l.nodeType===1||l.nodeType===9||!+l.nodeType};function Bt(){this.expando=w.expando+Bt.uid++}Bt.uid=1,Bt.prototype={cache:function(l){var h=l[this.expando];return h||(h={},ji(l)&&(l.nodeType?l[this.expando]=h:Object.defineProperty(l,this.expando,{value:h,configurable:!0}))),h},set:function(l,h,p){var k,A=this.cache(l);if(typeof h=="string")A[sn(h)]=p;else for(k in h)A[sn(k)]=h[k];return A},get:function(l,h){return h===void 0?this.cache(l):l[this.expando]&&l[this.expando][sn(h)]},access:function(l,h,p){return h===void 0||h&&typeof h=="string"&&p===void 0?this.get(l,h):(this.set(l,h,p),p!==void 0?p:h)},remove:function(l,h){var p,k=l[this.expando];if(k!==void 0){if(h!==void 0)for(Array.isArray(h)?h=h.map(sn):(h=sn(h),h=h in k?[h]:h.match(Vt)||[]),p=h.length;p--;)delete k[h[p]];(h===void 0||w.isEmptyObject(k))&&(l.nodeType?l[this.expando]=void 0:delete l[this.expando])}},hasData:function(l){var h=l[this.expando];return h!==void 0&&!w.isEmptyObject(h)}};var he=new Bt,Pt=new Bt,oc=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rc=/[A-Z]/g;function Fi(l){return l==="true"?!0:l==="false"?!1:l==="null"?null:l===+l+""?+l:oc.test(l)?JSON.parse(l):l}function ws(l,h,p){var k;if(p===void 0&&l.nodeType===1)if(k="data-"+h.replace(rc,"-$&").toLowerCase(),p=l.getAttribute(k),typeof p=="string"){try{p=Fi(p)}catch{}Pt.set(l,h,p)}else p=void 0;return p}w.extend({hasData:function(l){return Pt.hasData(l)||he.hasData(l)},data:function(l,h,p){return Pt.access(l,h,p)},removeData:function(l,h){Pt.remove(l,h)},_data:function(l,h,p){return he.access(l,h,p)},_removeData:function(l,h){he.remove(l,h)}}),w.fn.extend({data:function(l,h){var p,k,A,v=this[0],T=v&&v.attributes;if(l===void 0){if(this.length&&(A=Pt.get(v),v.nodeType===1&&!he.get(v,"hasDataAttrs"))){for(p=T.length;p--;)T[p]&&(k=T[p].name,k.indexOf("data-")===0&&(k=sn(k.slice(5)),ws(v,k,A[k])));he.set(v,"hasDataAttrs",!0)}return A}return typeof l=="object"?this.each(function(){Pt.set(this,l)}):hn(this,function(j){var z;if(v&&j===void 0)return z=Pt.get(v,l),z!==void 0||(z=ws(v,l),z!==void 0)?z:void 0;this.each(function(){Pt.set(this,l,j)})},null,h,arguments.length>1,null,!0)},removeData:function(l){return this.each(function(){Pt.remove(this,l)})}}),w.extend({queue:function(l,h,p){var k;if(l)return h=(h||"fx")+"queue",k=he.get(l,h),p&&(!k||Array.isArray(p)?k=he.access(l,h,w.makeArray(p)):k.push(p)),k||[]},dequeue:function(l,h){h=h||"fx";var p=w.queue(l,h),k=p.length,A=p.shift(),v=w._queueHooks(l,h),T=function(){w.dequeue(l,h)};A==="inprogress"&&(A=p.shift(),k--),A&&(h==="fx"&&p.unshift("inprogress"),delete v.stop,A.call(l,T,v)),!k&&v&&v.empty.fire()},_queueHooks:function(l,h){var p=h+"queueHooks";return he.get(l,p)||he.access(l,p,{empty:w.Callbacks("once memory").add(function(){he.remove(l,[h+"queue",p])})})}}),w.fn.extend({queue:function(l,h){var p=2;return typeof l!="string"&&(h=l,l="fx",p--),arguments.length<p?w.queue(this[0],l):h===void 0?this:this.each(function(){var k=w.queue(this,l,h);w._queueHooks(this,l),l==="fx"&&k[0]!=="inprogress"&&w.dequeue(this,l)})},dequeue:function(l){return this.each(function(){w.dequeue(this,l)})},clearQueue:function(l){return this.queue(l||"fx",[])},promise:function(l,h){var p,k=1,A=w.Deferred(),v=this,T=this.length,j=function(){--k||A.resolveWith(v,[v])};for(typeof l!="string"&&(h=l,l=void 0),l=l||"fx";T--;)p=he.get(v[T],l+"queueHooks"),p&&p.empty&&(k++,p.empty.add(j));return j(),A.promise(h)}});var _s=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Vi=new RegExp("^(?:([+-])=|)("+_s+")([a-z%]*)$","i"),gn=["Top","Right","Bottom","Left"],Ht=de.documentElement,Zn=function(l){return w.contains(l.ownerDocument,l)},hr={composed:!0};Ht.getRootNode&&(Zn=function(l){return w.contains(l.ownerDocument,l)||l.getRootNode(hr)===l.ownerDocument});var Lt=function(l,h){return l=h||l,l.style.display==="none"||l.style.display===""&&Zn(l)&&w.css(l,"display")==="none"};function As(l,h,p,k){var A,v,T=20,j=k?function(){return k.cur()}:function(){return w.css(l,h,"")},z=j(),W=p&&p[3]||(w.cssNumber[h]?"":"px"),Y=l.nodeType&&(w.cssNumber[h]||W!=="px"&&+z)&&Vi.exec(w.css(l,h));if(Y&&Y[3]!==W){for(z=z/2,W=W||Y[3],Y=+z||1;T--;)w.style(l,h,Y+W),(1-v)*(1-(v=j()/z||.5))<=0&&(T=0),Y=Y/v;Y=Y*2,w.style(l,h,Y+W),p=p||[]}return p&&(Y=+Y||+z||0,A=p[1]?Y+(p[1]+1)*p[2]:+p[2],k&&(k.unit=W,k.start=Y,k.end=A)),A}var Cs={};function vs(l){var h,p=l.ownerDocument,k=l.nodeName,A=Cs[k];return A||(h=p.body.appendChild(p.createElement(k)),A=w.css(h,"display"),h.parentNode.removeChild(h),A==="none"&&(A="block"),Cs[k]=A,A)}function hi(l,h){for(var p,k,A=[],v=0,T=l.length;v<T;v++)k=l[v],k.style&&(p=k.style.display,h?(p==="none"&&(A[v]=he.get(k,"display")||null,A[v]||(k.style.display="")),k.style.display===""&&Lt(k)&&(A[v]=vs(k))):p!=="none"&&(A[v]="none",he.set(k,"display",p)));for(v=0;v<T;v++)A[v]!=null&&(l[v].style.display=A[v]);return l}w.fn.extend({show:function(){return hi(this,!0)},hide:function(){return hi(this)},toggle:function(l){return typeof l=="boolean"?l?this.show():this.hide():this.each(function(){Lt(this)?w(this).show():w(this).hide()})}});var Hi=/^(?:checkbox|radio)$/i,Ot=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ys=/^$|^module$|\/(?:java|ecma)script/i;(function(){var l=de.createDocumentFragment(),h=l.appendChild(de.createElement("div")),p=de.createElement("input");p.setAttribute("type","radio"),p.setAttribute("checked","checked"),p.setAttribute("name","t"),h.appendChild(p),Ae.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,h.innerHTML="<textarea>x</textarea>",Ae.noCloneChecked=!!h.cloneNode(!0).lastChild.defaultValue,h.innerHTML="<option></option>",Ae.option=!!h.lastChild})();var xt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};xt.tbody=xt.tfoot=xt.colgroup=xt.caption=xt.thead,xt.th=xt.td,Ae.option||(xt.optgroup=xt.option=[1,"<select multiple='multiple'>","</select>"]);function Ct(l,h){var p;return typeof l.getElementsByTagName<"u"?p=l.getElementsByTagName(h||"*"):typeof l.querySelectorAll<"u"?p=l.querySelectorAll(h||"*"):p=[],h===void 0||h&&Pe(l,h)?w.merge([l],p):p}function gr(l,h){for(var p=0,k=l.length;p<k;p++)he.set(l[p],"globalEval",!h||he.get(h[p],"globalEval"))}var sc=/<|&#?\w+;/;function xs(l,h,p,k,A){for(var v,T,j,z,W,Y,te=h.createDocumentFragment(),K=[],X=0,fe=l.length;X<fe;X++)if(v=l[X],v||v===0)if(rt(v)==="object")w.merge(K,v.nodeType?[v]:v);else if(!sc.test(v))K.push(h.createTextNode(v));else{for(T=T||te.appendChild(h.createElement("div")),j=(Ot.exec(v)||["",""])[1].toLowerCase(),z=xt[j]||xt._default,T.innerHTML=z[1]+w.htmlPrefilter(v)+z[2],Y=z[0];Y--;)T=T.lastChild;w.merge(K,T.childNodes),T=te.firstChild,T.textContent=""}for(te.textContent="",X=0;v=K[X++];){if(k&&w.inArray(v,k)>-1){A&&A.push(v);continue}if(W=Zn(v),T=Ct(te.appendChild(v),"script"),W&&gr(T),p)for(Y=0;v=T[Y++];)ys.test(v.type||"")&&p.push(v)}return te}var Es=/^([^.]*)(?:\.(.+)|)/;function gi(){return!0}function an(){return!1}function vo(l,h){return l===ac()==(h==="focus")}function ac(){try{return de.activeElement}catch{}}function fr(l,h,p,k,A,v){var T,j;if(typeof h=="object"){typeof p!="string"&&(k=k||p,p=void 0);for(j in h)fr(l,j,p,k,h[j],v);return l}if(k==null&&A==null?(A=p,k=p=void 0):A==null&&(typeof p=="string"?(A=k,k=void 0):(A=k,k=p,p=void 0)),A===!1)A=an;else if(!A)return l;return v===1&&(T=A,A=function(z){return w().off(z),T.apply(this,arguments)},A.guid=T.guid||(T.guid=w.guid++)),l.each(function(){w.event.add(this,h,A,k,p)})}w.event={global:{},add:function(l,h,p,k,A){var v,T,j,z,W,Y,te,K,X,fe,De,pe=he.get(l);if(!!ji(l))for(p.handler&&(v=p,p=v.handler,A=v.selector),A&&w.find.matchesSelector(Ht,A),p.guid||(p.guid=w.guid++),(z=pe.events)||(z=pe.events=Object.create(null)),(T=pe.handle)||(T=pe.handle=function(lt){return typeof w<"u"&&w.event.triggered!==lt.type?w.event.dispatch.apply(l,arguments):void 0}),h=(h||"").match(Vt)||[""],W=h.length;W--;)j=Es.exec(h[W])||[],X=De=j[1],fe=(j[2]||"").split(".").sort(),X&&(te=w.event.special[X]||{},X=(A?te.delegateType:te.bindType)||X,te=w.event.special[X]||{},Y=w.extend({type:X,origType:De,data:k,handler:p,guid:p.guid,selector:A,needsContext:A&&w.expr.match.needsContext.test(A),namespace:fe.join(".")},v),(K=z[X])||(K=z[X]=[],K.delegateCount=0,(!te.setup||te.setup.call(l,k,fe,T)===!1)&&l.addEventListener&&l.addEventListener(X,T)),te.add&&(te.add.call(l,Y),Y.handler.guid||(Y.handler.guid=p.guid)),A?K.splice(K.delegateCount++,0,Y):K.push(Y),w.event.global[X]=!0)},remove:function(l,h,p,k,A){var v,T,j,z,W,Y,te,K,X,fe,De,pe=he.hasData(l)&&he.get(l);if(!(!pe||!(z=pe.events))){for(h=(h||"").match(Vt)||[""],W=h.length;W--;){if(j=Es.exec(h[W])||[],X=De=j[1],fe=(j[2]||"").split(".").sort(),!X){for(X in z)w.event.remove(l,X+h[W],p,k,!0);continue}for(te=w.event.special[X]||{},X=(k?te.delegateType:te.bindType)||X,K=z[X]||[],j=j[2]&&new RegExp("(^|\\.)"+fe.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=v=K.length;v--;)Y=K[v],(A||De===Y.origType)&&(!p||p.guid===Y.guid)&&(!j||j.test(Y.namespace))&&(!k||k===Y.selector||k==="**"&&Y.selector)&&(K.splice(v,1),Y.selector&&K.delegateCount--,te.remove&&te.remove.call(l,Y));T&&!K.length&&((!te.teardown||te.teardown.call(l,fe,pe.handle)===!1)&&w.removeEvent(l,X,pe.handle),delete z[X])}w.isEmptyObject(z)&&he.remove(l,"handle events")}},dispatch:function(l){var h,p,k,A,v,T,j=new Array(arguments.length),z=w.event.fix(l),W=(he.get(this,"events")||Object.create(null))[z.type]||[],Y=w.event.special[z.type]||{};for(j[0]=z,h=1;h<arguments.length;h++)j[h]=arguments[h];if(z.delegateTarget=this,!(Y.preDispatch&&Y.preDispatch.call(this,z)===!1)){for(T=w.event.handlers.call(this,z,W),h=0;(A=T[h++])&&!z.isPropagationStopped();)for(z.currentTarget=A.elem,p=0;(v=A.handlers[p++])&&!z.isImmediatePropagationStopped();)(!z.rnamespace||v.namespace===!1||z.rnamespace.test(v.namespace))&&(z.handleObj=v,z.data=v.data,k=((w.event.special[v.origType]||{}).handle||v.handler).apply(A.elem,j),k!==void 0&&(z.result=k)===!1&&(z.preventDefault(),z.stopPropagation()));return Y.postDispatch&&Y.postDispatch.call(this,z),z.result}},handlers:function(l,h){var p,k,A,v,T,j=[],z=h.delegateCount,W=l.target;if(z&&W.nodeType&&!(l.type==="click"&&l.button>=1)){for(;W!==this;W=W.parentNode||this)if(W.nodeType===1&&!(l.type==="click"&&W.disabled===!0)){for(v=[],T={},p=0;p<z;p++)k=h[p],A=k.selector+" ",T[A]===void 0&&(T[A]=k.needsContext?w(A,this).index(W)>-1:w.find(A,this,null,[W]).length),T[A]&&v.push(k);v.length&&j.push({elem:W,handlers:v})}}return W=this,z<h.length&&j.push({elem:W,handlers:h.slice(z)}),j},addProp:function(l,h){Object.defineProperty(w.Event.prototype,l,{enumerable:!0,configurable:!0,get:ge(h)?function(){if(this.originalEvent)return h(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[l]},set:function(p){Object.defineProperty(this,l,{enumerable:!0,configurable:!0,writable:!0,value:p})}})},fix:function(l){return l[w.expando]?l:new w.Event(l)},special:{load:{noBubble:!0},click:{setup:function(l){var h=this||l;return Hi.test(h.type)&&h.click&&Pe(h,"input")&&yo(h,"click",gi),!1},trigger:function(l){var h=this||l;return Hi.test(h.type)&&h.click&&Pe(h,"input")&&yo(h,"click"),!0},_default:function(l){var h=l.target;return Hi.test(h.type)&&h.click&&Pe(h,"input")&&he.get(h,"click")||Pe(h,"a")}},beforeunload:{postDispatch:function(l){l.result!==void 0&&l.originalEvent&&(l.originalEvent.returnValue=l.result)}}}};function yo(l,h,p){if(!p){he.get(l,h)===void 0&&w.event.add(l,h,gi);return}he.set(l,h,!1),w.event.add(l,h,{namespace:!1,handler:function(k){var A,v,T=he.get(this,h);if(k.isTrigger&1&&this[h]){if(T.length)(w.event.special[h]||{}).delegateType&&k.stopPropagation();else if(T=O.call(arguments),he.set(this,h,T),A=p(this,h),this[h](),v=he.get(this,h),T!==v||A?he.set(this,h,!1):v={},T!==v)return k.stopImmediatePropagation(),k.preventDefault(),v&&v.value}else T.length&&(he.set(this,h,{value:w.event.trigger(w.extend(T[0],w.Event.prototype),T.slice(1),this)}),k.stopImmediatePropagation())}})}w.removeEvent=function(l,h,p){l.removeEventListener&&l.removeEventListener(h,p)},w.Event=function(l,h){if(!(this instanceof w.Event))return new w.Event(l,h);l&&l.type?(this.originalEvent=l,this.type=l.type,this.isDefaultPrevented=l.defaultPrevented||l.defaultPrevented===void 0&&l.returnValue===!1?gi:an,this.target=l.target&&l.target.nodeType===3?l.target.parentNode:l.target,this.currentTarget=l.currentTarget,this.relatedTarget=l.relatedTarget):this.type=l,h&&w.extend(this,h),this.timeStamp=l&&l.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:an,isPropagationStopped:an,isImmediatePropagationStopped:an,isSimulated:!1,preventDefault:function(){var l=this.originalEvent;this.isDefaultPrevented=gi,l&&!this.isSimulated&&l.preventDefault()},stopPropagation:function(){var l=this.originalEvent;this.isPropagationStopped=gi,l&&!this.isSimulated&&l.stopPropagation()},stopImmediatePropagation:function(){var l=this.originalEvent;this.isImmediatePropagationStopped=gi,l&&!this.isSimulated&&l.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},w.event.addProp),w.each({focus:"focusin",blur:"focusout"},function(l,h){w.event.special[l]={setup:function(){return yo(this,l,vo),!1},trigger:function(){return yo(this,l),!0},_default:function(p){return he.get(p.target,l)},delegateType:h}}),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(l,h){w.event.special[l]={delegateType:h,bindType:h,handle:function(p){var k,A=this,v=p.relatedTarget,T=p.handleObj;return(!v||v!==A&&!w.contains(A,v))&&(p.type=T.origType,k=T.handler.apply(this,arguments),p.type=h),k}}}),w.fn.extend({on:function(l,h,p,k){return fr(this,l,h,p,k)},one:function(l,h,p,k){return fr(this,l,h,p,k,1)},off:function(l,h,p){var k,A;if(l&&l.preventDefault&&l.handleObj)return k=l.handleObj,w(l.delegateTarget).off(k.namespace?k.origType+"."+k.namespace:k.origType,k.selector,k.handler),this;if(typeof l=="object"){for(A in l)this.off(A,h,l[A]);return this}return(h===!1||typeof h=="function")&&(p=h,h=void 0),p===!1&&(p=an),this.each(function(){w.event.remove(this,l,p,h)})}});var cc=/<script|<style|<link/i,Jn=/checked\s*(?:[^=]|=\s*.checked.)/i,pr=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function mr(l,h){return Pe(l,"table")&&Pe(h.nodeType!==11?h:h.firstChild,"tr")&&w(l).children("tbody")[0]||l}function lc(l){return l.type=(l.getAttribute("type")!==null)+"/"+l.type,l}function dc(l){return(l.type||"").slice(0,5)==="true/"?l.type=l.type.slice(5):l.removeAttribute("type"),l}function zn(l,h){var p,k,A,v,T,j,z;if(h.nodeType===1){if(he.hasData(l)&&(v=he.get(l),z=v.events,z)){he.remove(h,"handle events");for(A in z)for(p=0,k=z[A].length;p<k;p++)w.event.add(h,A,z[A][p])}Pt.hasData(l)&&(T=Pt.access(l),j=w.extend({},T),Pt.set(h,j))}}function uc(l,h){var p=h.nodeName.toLowerCase();p==="input"&&Hi.test(l.type)?h.checked=l.checked:(p==="input"||p==="textarea")&&(h.defaultValue=l.defaultValue)}function fi(l,h,p,k){h=S(h);var A,v,T,j,z,W,Y=0,te=l.length,K=te-1,X=h[0],fe=ge(X);if(fe||te>1&&typeof X=="string"&&!Ae.checkClone&&Jn.test(X))return l.each(function(De){var pe=l.eq(De);fe&&(h[0]=X.call(this,De,pe.html())),fi(pe,h,p,k)});if(te&&(A=xs(h,l[0].ownerDocument,!1,l,k),v=A.firstChild,A.childNodes.length===1&&(A=v),v||k)){for(T=w.map(Ct(A,"script"),lc),j=T.length;Y<te;Y++)z=A,Y!==K&&(z=w.clone(z,!0,!0),j&&w.merge(T,Ct(z,"script"))),p.call(l[Y],z,Y);if(j)for(W=T[T.length-1].ownerDocument,w.map(T,dc),Y=0;Y<j;Y++)z=T[Y],ys.test(z.type||"")&&!he.access(z,"globalEval")&&w.contains(W,z)&&(z.src&&(z.type||"").toLowerCase()!=="module"?w._evalUrl&&!z.noModule&&w._evalUrl(z.src,{nonce:z.nonce||z.getAttribute("nonce")},W):$e(z.textContent.replace(pr,""),z,W))}return l}function Ds(l,h,p){for(var k,A=h?w.filter(h,l):l,v=0;(k=A[v])!=null;v++)!p&&k.nodeType===1&&w.cleanData(Ct(k)),k.parentNode&&(p&&Zn(k)&&gr(Ct(k,"script")),k.parentNode.removeChild(k));return l}w.extend({htmlPrefilter:function(l){return l},clone:function(l,h,p){var k,A,v,T,j=l.cloneNode(!0),z=Zn(l);if(!Ae.noCloneChecked&&(l.nodeType===1||l.nodeType===11)&&!w.isXMLDoc(l))for(T=Ct(j),v=Ct(l),k=0,A=v.length;k<A;k++)uc(v[k],T[k]);if(h)if(p)for(v=v||Ct(l),T=T||Ct(j),k=0,A=v.length;k<A;k++)zn(v[k],T[k]);else zn(l,j);return T=Ct(j,"script"),T.length>0&&gr(T,!z&&Ct(l,"script")),j},cleanData:function(l){for(var h,p,k,A=w.event.special,v=0;(p=l[v])!==void 0;v++)if(ji(p)){if(h=p[he.expando]){if(h.events)for(k in h.events)A[k]?w.event.remove(p,k):w.removeEvent(p,k,h.handle);p[he.expando]=void 0}p[Pt.expando]&&(p[Pt.expando]=void 0)}}}),w.fn.extend({detach:function(l){return Ds(this,l,!0)},remove:function(l){return Ds(this,l)},text:function(l){return hn(this,function(h){return h===void 0?w.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=h)})},null,l,arguments.length)},append:function(){return fi(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=mr(this,l);h.appendChild(l)}})},prepend:function(){return fi(this,arguments,function(l){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var h=mr(this,l);h.insertBefore(l,h.firstChild)}})},before:function(){return fi(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this)})},after:function(){return fi(this,arguments,function(l){this.parentNode&&this.parentNode.insertBefore(l,this.nextSibling)})},empty:function(){for(var l,h=0;(l=this[h])!=null;h++)l.nodeType===1&&(w.cleanData(Ct(l,!1)),l.textContent="");return this},clone:function(l,h){return l=l==null?!1:l,h=h==null?l:h,this.map(function(){return w.clone(this,l,h)})},html:function(l){return hn(this,function(h){var p=this[0]||{},k=0,A=this.length;if(h===void 0&&p.nodeType===1)return p.innerHTML;if(typeof h=="string"&&!cc.test(h)&&!xt[(Ot.exec(h)||["",""])[1].toLowerCase()]){h=w.htmlPrefilter(h);try{for(;k<A;k++)p=this[k]||{},p.nodeType===1&&(w.cleanData(Ct(p,!1)),p.innerHTML=h);p=0}catch{}}p&&this.empty().append(h)},null,l,arguments.length)},replaceWith:function(){var l=[];return fi(this,arguments,function(h){var p=this.parentNode;w.inArray(this,l)<0&&(w.cleanData(Ct(this)),p&&p.replaceChild(h,this))},l)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,h){w.fn[l]=function(p){for(var k,A=[],v=w(p),T=v.length-1,j=0;j<=T;j++)k=j===T?this:this.clone(!0),w(v[j])[h](k),P.apply(A,k.get());return this.pushStack(A)}});var kr=new RegExp("^("+_s+")(?!px)[a-z%]+$","i"),br=/^--/,xo=function(l){var h=l.ownerDocument.defaultView;return(!h||!h.opener)&&(h=b),h.getComputedStyle(l)},Ts=function(l,h,p){var k,A,v={};for(A in h)v[A]=l.style[A],l.style[A]=h[A];k=p.call(l);for(A in h)l.style[A]=v[A];return k},hc=new RegExp(gn.join("|"),"i"),Rn="[\\x20\\t\\r\\n\\f]",Ui=new RegExp("^"+Rn+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Rn+"+$","g");(function(){function l(){if(!!W){z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",W.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ht.appendChild(z).appendChild(W);var Y=b.getComputedStyle(W);p=Y.top!=="1%",j=h(Y.marginLeft)===12,W.style.right="60%",v=h(Y.right)===36,k=h(Y.width)===36,W.style.position="absolute",A=h(W.offsetWidth/3)===12,Ht.removeChild(z),W=null}}function h(Y){return Math.round(parseFloat(Y))}var p,k,A,v,T,j,z=de.createElement("div"),W=de.createElement("div");!W.style||(W.style.backgroundClip="content-box",W.cloneNode(!0).style.backgroundClip="",Ae.clearCloneStyle=W.style.backgroundClip==="content-box",w.extend(Ae,{boxSizingReliable:function(){return l(),k},pixelBoxStyles:function(){return l(),v},pixelPosition:function(){return l(),p},reliableMarginLeft:function(){return l(),j},scrollboxSize:function(){return l(),A},reliableTrDimensions:function(){var Y,te,K,X;return T==null&&(Y=de.createElement("table"),te=de.createElement("tr"),K=de.createElement("div"),Y.style.cssText="position:absolute;left:-11111px;border-collapse:separate",te.style.cssText="border:1px solid",te.style.height="1px",K.style.height="9px",K.style.display="block",Ht.appendChild(Y).appendChild(te).appendChild(K),X=b.getComputedStyle(te),T=parseInt(X.height,10)+parseInt(X.borderTopWidth,10)+parseInt(X.borderBottomWidth,10)===te.offsetHeight,Ht.removeChild(Y)),T}}))})();function _n(l,h,p){var k,A,v,T,j=br.test(h),z=l.style;return p=p||xo(l),p&&(T=p.getPropertyValue(h)||p[h],j&&(T=T.replace(Ui,"$1")),T===""&&!Zn(l)&&(T=w.style(l,h)),!Ae.pixelBoxStyles()&&kr.test(T)&&hc.test(h)&&(k=z.width,A=z.minWidth,v=z.maxWidth,z.minWidth=z.maxWidth=z.width=T,T=p.width,z.width=k,z.minWidth=A,z.maxWidth=v)),T!==void 0?T+"":T}function Ss(l,h){return{get:function(){if(l()){delete this.get;return}return(this.get=h).apply(this,arguments)}}}var Is=["Webkit","Moz","ms"],Ms=de.createElement("div").style,Ns={};function gc(l){for(var h=l[0].toUpperCase()+l.slice(1),p=Is.length;p--;)if(l=Is[p]+h,l in Ms)return l}function wr(l){var h=w.cssProps[l]||Ns[l];return h||(l in Ms?l:Ns[l]=gc(l)||l)}var fc=/^(none|table(?!-c[ea]).+)/,pi={position:"absolute",visibility:"hidden",display:"block"},_r={letterSpacing:"0",fontWeight:"400"};function Bs(l,h,p){var k=Vi.exec(h);return k?Math.max(0,k[2]-(p||0))+(k[3]||"px"):h}function Ar(l,h,p,k,A,v){var T=h==="width"?1:0,j=0,z=0;if(p===(k?"border":"content"))return 0;for(;T<4;T+=2)p==="margin"&&(z+=w.css(l,p+gn[T],!0,A)),k?(p==="content"&&(z-=w.css(l,"padding"+gn[T],!0,A)),p!=="margin"&&(z-=w.css(l,"border"+gn[T]+"Width",!0,A))):(z+=w.css(l,"padding"+gn[T],!0,A),p!=="padding"?z+=w.css(l,"border"+gn[T]+"Width",!0,A):j+=w.css(l,"border"+gn[T]+"Width",!0,A));return!k&&v>=0&&(z+=Math.max(0,Math.ceil(l["offset"+h[0].toUpperCase()+h.slice(1)]-v-z-j-.5))||0),z}function qi(l,h,p){var k=xo(l),A=!Ae.boxSizingReliable()||p,v=A&&w.css(l,"boxSizing",!1,k)==="border-box",T=v,j=_n(l,h,k),z="offset"+h[0].toUpperCase()+h.slice(1);if(kr.test(j)){if(!p)return j;j="auto"}return(!Ae.boxSizingReliable()&&v||!Ae.reliableTrDimensions()&&Pe(l,"tr")||j==="auto"||!parseFloat(j)&&w.css(l,"display",!1,k)==="inline")&&l.getClientRects().length&&(v=w.css(l,"boxSizing",!1,k)==="border-box",T=z in l,T&&(j=l[z])),j=parseFloat(j)||0,j+Ar(l,h,p||(v?"border":"content"),T,k,j)+"px"}w.extend({cssHooks:{opacity:{get:function(l,h){if(h){var p=_n(l,"opacity");return p===""?"1":p}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(l,h,p,k){if(!(!l||l.nodeType===3||l.nodeType===8||!l.style)){var A,v,T,j=sn(h),z=br.test(h),W=l.style;if(z||(h=wr(j)),T=w.cssHooks[h]||w.cssHooks[j],p!==void 0){if(v=typeof p,v==="string"&&(A=Vi.exec(p))&&A[1]&&(p=As(l,h,A),v="number"),p==null||p!==p)return;v==="number"&&!z&&(p+=A&&A[3]||(w.cssNumber[j]?"":"px")),!Ae.clearCloneStyle&&p===""&&h.indexOf("background")===0&&(W[h]="inherit"),(!T||!("set"in T)||(p=T.set(l,p,k))!==void 0)&&(z?W.setProperty(h,p):W[h]=p)}else return T&&"get"in T&&(A=T.get(l,!1,k))!==void 0?A:W[h]}},css:function(l,h,p,k){var A,v,T,j=sn(h),z=br.test(h);return z||(h=wr(j)),T=w.cssHooks[h]||w.cssHooks[j],T&&"get"in T&&(A=T.get(l,!0,p)),A===void 0&&(A=_n(l,h,k)),A==="normal"&&h in _r&&(A=_r[h]),p===""||p?(v=parseFloat(A),p===!0||isFinite(v)?v||0:A):A}}),w.each(["height","width"],function(l,h){w.cssHooks[h]={get:function(p,k,A){if(k)return fc.test(w.css(p,"display"))&&(!p.getClientRects().length||!p.getBoundingClientRect().width)?Ts(p,pi,function(){return qi(p,h,A)}):qi(p,h,A)},set:function(p,k,A){var v,T=xo(p),j=!Ae.scrollboxSize()&&T.position==="absolute",z=j||A,W=z&&w.css(p,"boxSizing",!1,T)==="border-box",Y=A?Ar(p,h,A,W,T):0;return W&&j&&(Y-=Math.ceil(p["offset"+h[0].toUpperCase()+h.slice(1)]-parseFloat(T[h])-Ar(p,h,"border",!1,T)-.5)),Y&&(v=Vi.exec(k))&&(v[3]||"px")!=="px"&&(p.style[h]=k,k=w.css(p,h)),Bs(p,k,Y)}}}),w.cssHooks.marginLeft=Ss(Ae.reliableMarginLeft,function(l,h){if(h)return(parseFloat(_n(l,"marginLeft"))||l.getBoundingClientRect().left-Ts(l,{marginLeft:0},function(){return l.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(l,h){w.cssHooks[l+h]={expand:function(p){for(var k=0,A={},v=typeof p=="string"?p.split(" "):[p];k<4;k++)A[l+gn[k]+h]=v[k]||v[k-2]||v[0];return A}},l!=="margin"&&(w.cssHooks[l+h].set=Bs)}),w.fn.extend({css:function(l,h){return hn(this,function(p,k,A){var v,T,j={},z=0;if(Array.isArray(k)){for(v=xo(p),T=k.length;z<T;z++)j[k[z]]=w.css(p,k[z],!1,v);return j}return A!==void 0?w.style(p,k,A):w.css(p,k)},l,h,arguments.length>1)}});function Ut(l,h,p,k,A){return new Ut.prototype.init(l,h,p,k,A)}w.Tween=Ut,Ut.prototype={constructor:Ut,init:function(l,h,p,k,A,v){this.elem=l,this.prop=p,this.easing=A||w.easing._default,this.options=h,this.start=this.now=this.cur(),this.end=k,this.unit=v||(w.cssNumber[p]?"":"px")},cur:function(){var l=Ut.propHooks[this.prop];return l&&l.get?l.get(this):Ut.propHooks._default.get(this)},run:function(l){var h,p=Ut.propHooks[this.prop];return this.options.duration?this.pos=h=w.easing[this.easing](l,this.options.duration*l,0,1,this.options.duration):this.pos=h=l,this.now=(this.end-this.start)*h+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),p&&p.set?p.set(this):Ut.propHooks._default.set(this),this}},Ut.prototype.init.prototype=Ut.prototype,Ut.propHooks={_default:{get:function(l){var h;return l.elem.nodeType!==1||l.elem[l.prop]!=null&&l.elem.style[l.prop]==null?l.elem[l.prop]:(h=w.css(l.elem,l.prop,""),!h||h==="auto"?0:h)},set:function(l){w.fx.step[l.prop]?w.fx.step[l.prop](l):l.elem.nodeType===1&&(w.cssHooks[l.prop]||l.elem.style[wr(l.prop)]!=null)?w.style(l.elem,l.prop,l.now+l.unit):l.elem[l.prop]=l.now}}},Ut.propHooks.scrollTop=Ut.propHooks.scrollLeft={set:function(l){l.elem.nodeType&&l.elem.parentNode&&(l.elem[l.prop]=l.now)}},w.easing={linear:function(l){return l},swing:function(l){return .5-Math.cos(l*Math.PI)/2},_default:"swing"},w.fx=Ut.prototype.init,w.fx.step={};var mi,Eo,pc=/^(?:toggle|show|hide)$/,ki=/queueHooks$/;function bi(){Eo&&(de.hidden===!1&&b.requestAnimationFrame?b.requestAnimationFrame(bi):b.setTimeout(bi,w.fx.interval),w.fx.tick())}function Ps(){return b.setTimeout(function(){mi=void 0}),mi=Date.now()}function An(l,h){var p,k=0,A={height:l};for(h=h?1:0;k<4;k+=2-h)p=gn[k],A["margin"+p]=A["padding"+p]=l;return h&&(A.opacity=A.width=l),A}function wi(l,h,p){for(var k,A=(Yt.tweeners[h]||[]).concat(Yt.tweeners["*"]),v=0,T=A.length;v<T;v++)if(k=A[v].call(p,h,l))return k}function mc(l,h,p){var k,A,v,T,j,z,W,Y,te="width"in h||"height"in h,K=this,X={},fe=l.style,De=l.nodeType&&Lt(l),pe=he.get(l,"fxshow");p.queue||(T=w._queueHooks(l,"fx"),T.unqueued==null&&(T.unqueued=0,j=T.empty.fire,T.empty.fire=function(){T.unqueued||j()}),T.unqueued++,K.always(function(){K.always(function(){T.unqueued--,w.queue(l,"fx").length||T.empty.fire()})}));for(k in h)if(A=h[k],pc.test(A)){if(delete h[k],v=v||A==="toggle",A===(De?"hide":"show"))if(A==="show"&&pe&&pe[k]!==void 0)De=!0;else continue;X[k]=pe&&pe[k]||w.style(l,k)}if(z=!w.isEmptyObject(h),!(!z&&w.isEmptyObject(X))){te&&l.nodeType===1&&(p.overflow=[fe.overflow,fe.overflowX,fe.overflowY],W=pe&&pe.display,W==null&&(W=he.get(l,"display")),Y=w.css(l,"display"),Y==="none"&&(W?Y=W:(hi([l],!0),W=l.style.display||W,Y=w.css(l,"display"),hi([l]))),(Y==="inline"||Y==="inline-block"&&W!=null)&&w.css(l,"float")==="none"&&(z||(K.done(function(){fe.display=W}),W==null&&(Y=fe.display,W=Y==="none"?"":Y)),fe.display="inline-block")),p.overflow&&(fe.overflow="hidden",K.always(function(){fe.overflow=p.overflow[0],fe.overflowX=p.overflow[1],fe.overflowY=p.overflow[2]})),z=!1;for(k in X)z||(pe?"hidden"in pe&&(De=pe.hidden):pe=he.access(l,"fxshow",{display:W}),v&&(pe.hidden=!De),De&&hi([l],!0),K.done(function(){De||hi([l]),he.remove(l,"fxshow");for(k in X)w.style(l,k,X[k])})),z=wi(De?pe[k]:0,k,K),k in pe||(pe[k]=z.start,De&&(z.end=z.start,z.start=0))}}function Do(l,h){var p,k,A,v,T;for(p in l)if(k=sn(p),A=h[k],v=l[p],Array.isArray(v)&&(A=v[1],v=l[p]=v[0]),p!==k&&(l[k]=v,delete l[p]),T=w.cssHooks[k],T&&"expand"in T){v=T.expand(v),delete l[k];for(p in v)p in l||(l[p]=v[p],h[p]=A)}else h[k]=A}function Yt(l,h,p){var k,A,v=0,T=Yt.prefilters.length,j=w.Deferred().always(function(){delete z.elem}),z=function(){if(A)return!1;for(var te=mi||Ps(),K=Math.max(0,W.startTime+W.duration-te),X=K/W.duration||0,fe=1-X,De=0,pe=W.tweens.length;De<pe;De++)W.tweens[De].run(fe);return j.notifyWith(l,[W,fe,K]),fe<1&&pe?K:(pe||j.notifyWith(l,[W,1,0]),j.resolveWith(l,[W]),!1)},W=j.promise({elem:l,props:w.extend({},h),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},p),originalProperties:h,originalOptions:p,startTime:mi||Ps(),duration:p.duration,tweens:[],createTween:function(te,K){var X=w.Tween(l,W.opts,te,K,W.opts.specialEasing[te]||W.opts.easing);return W.tweens.push(X),X},stop:function(te){var K=0,X=te?W.tweens.length:0;if(A)return this;for(A=!0;K<X;K++)W.tweens[K].run(1);return te?(j.notifyWith(l,[W,1,0]),j.resolveWith(l,[W,te])):j.rejectWith(l,[W,te]),this}}),Y=W.props;for(Do(Y,W.opts.specialEasing);v<T;v++)if(k=Yt.prefilters[v].call(W,l,Y,W.opts),k)return ge(k.stop)&&(w._queueHooks(W.elem,W.opts.queue).stop=k.stop.bind(k)),k;return w.map(Y,wi,W),ge(W.opts.start)&&W.opts.start.call(l,W),W.progress(W.opts.progress).done(W.opts.done,W.opts.complete).fail(W.opts.fail).always(W.opts.always),w.fx.timer(w.extend(z,{elem:l,anim:W,queue:W.opts.queue})),W}w.Animation=w.extend(Yt,{tweeners:{"*":[function(l,h){var p=this.createTween(l,h);return As(p.elem,l,Vi.exec(h),p),p}]},tweener:function(l,h){ge(l)?(h=l,l=["*"]):l=l.match(Vt);for(var p,k=0,A=l.length;k<A;k++)p=l[k],Yt.tweeners[p]=Yt.tweeners[p]||[],Yt.tweeners[p].unshift(h)},prefilters:[mc],prefilter:function(l,h){h?Yt.prefilters.unshift(l):Yt.prefilters.push(l)}}),w.speed=function(l,h,p){var k=l&&typeof l=="object"?w.extend({},l):{complete:p||!p&&h||ge(l)&&l,duration:l,easing:p&&h||h&&!ge(h)&&h};return w.fx.off?k.duration=0:typeof k.duration!="number"&&(k.duration in w.fx.speeds?k.duration=w.fx.speeds[k.duration]:k.duration=w.fx.speeds._default),(k.queue==null||k.queue===!0)&&(k.queue="fx"),k.old=k.complete,k.complete=function(){ge(k.old)&&k.old.call(this),k.queue&&w.dequeue(this,k.queue)},k},w.fn.extend({fadeTo:function(l,h,p,k){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:h},l,p,k)},animate:function(l,h,p,k){var A=w.isEmptyObject(l),v=w.speed(h,p,k),T=function(){var j=Yt(this,w.extend({},l),v);(A||he.get(this,"finish"))&&j.stop(!0)};return T.finish=T,A||v.queue===!1?this.each(T):this.queue(v.queue,T)},stop:function(l,h,p){var k=function(A){var v=A.stop;delete A.stop,v(p)};return typeof l!="string"&&(p=h,h=l,l=void 0),h&&this.queue(l||"fx",[]),this.each(function(){var A=!0,v=l!=null&&l+"queueHooks",T=w.timers,j=he.get(this);if(v)j[v]&&j[v].stop&&k(j[v]);else for(v in j)j[v]&&j[v].stop&&ki.test(v)&&k(j[v]);for(v=T.length;v--;)T[v].elem===this&&(l==null||T[v].queue===l)&&(T[v].anim.stop(p),A=!1,T.splice(v,1));(A||!p)&&w.dequeue(this,l)})},finish:function(l){return l!==!1&&(l=l||"fx"),this.each(function(){var h,p=he.get(this),k=p[l+"queue"],A=p[l+"queueHooks"],v=w.timers,T=k?k.length:0;for(p.finish=!0,w.queue(this,l,[]),A&&A.stop&&A.stop.call(this,!0),h=v.length;h--;)v[h].elem===this&&v[h].queue===l&&(v[h].anim.stop(!0),v.splice(h,1));for(h=0;h<T;h++)k[h]&&k[h].finish&&k[h].finish.call(this);delete p.finish})}}),w.each(["toggle","show","hide"],function(l,h){var p=w.fn[h];w.fn[h]=function(k,A,v){return k==null||typeof k=="boolean"?p.apply(this,arguments):this.animate(An(h,!0),k,A,v)}}),w.each({slideDown:An("show"),slideUp:An("hide"),slideToggle:An("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(l,h){w.fn[l]=function(p,k,A){return this.animate(h,p,k,A)}}),w.timers=[],w.fx.tick=function(){var l,h=0,p=w.timers;for(mi=Date.now();h<p.length;h++)l=p[h],!l()&&p[h]===l&&p.splice(h--,1);p.length||w.fx.stop(),mi=void 0},w.fx.timer=function(l){w.timers.push(l),w.fx.start()},w.fx.interval=13,w.fx.start=function(){Eo||(Eo=!0,bi())},w.fx.stop=function(){Eo=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(l,h){return l=w.fx&&w.fx.speeds[l]||l,h=h||"fx",this.queue(h,function(p,k){var A=b.setTimeout(p,l);k.stop=function(){b.clearTimeout(A)}})},function(){var l=de.createElement("input"),h=de.createElement("select"),p=h.appendChild(de.createElement("option"));l.type="checkbox",Ae.checkOn=l.value!=="",Ae.optSelected=p.selected,l=de.createElement("input"),l.value="t",l.type="radio",Ae.radioValue=l.value==="t"}();var Ls,Xn=w.expr.attrHandle;w.fn.extend({attr:function(l,h){return hn(this,w.attr,l,h,arguments.length>1)},removeAttr:function(l){return this.each(function(){w.removeAttr(this,l)})}}),w.extend({attr:function(l,h,p){var k,A,v=l.nodeType;if(!(v===3||v===8||v===2)){if(typeof l.getAttribute>"u")return w.prop(l,h,p);if((v!==1||!w.isXMLDoc(l))&&(A=w.attrHooks[h.toLowerCase()]||(w.expr.match.bool.test(h)?Ls:void 0)),p!==void 0){if(p===null){w.removeAttr(l,h);return}return A&&"set"in A&&(k=A.set(l,p,h))!==void 0?k:(l.setAttribute(h,p+""),p)}return A&&"get"in A&&(k=A.get(l,h))!==null?k:(k=w.find.attr(l,h),k==null?void 0:k)}},attrHooks:{type:{set:function(l,h){if(!Ae.radioValue&&h==="radio"&&Pe(l,"input")){var p=l.value;return l.setAttribute("type",h),p&&(l.value=p),h}}}},removeAttr:function(l,h){var p,k=0,A=h&&h.match(Vt);if(A&&l.nodeType===1)for(;p=A[k++];)l.removeAttribute(p)}}),Ls={set:function(l,h,p){return h===!1?w.removeAttr(l,p):l.setAttribute(p,p),p}},w.each(w.expr.match.bool.source.match(/\w+/g),function(l,h){var p=Xn[h]||w.find.attr;Xn[h]=function(k,A,v){var T,j,z=A.toLowerCase();return v||(j=Xn[z],Xn[z]=T,T=p(k,A,v)!=null?z:null,Xn[z]=j),T}});var _i=/^(?:input|select|textarea|button)$/i,kc=/^(?:a|area)$/i;w.fn.extend({prop:function(l,h){return hn(this,w.prop,l,h,arguments.length>1)},removeProp:function(l){return this.each(function(){delete this[w.propFix[l]||l]})}}),w.extend({prop:function(l,h,p){var k,A,v=l.nodeType;if(!(v===3||v===8||v===2))return(v!==1||!w.isXMLDoc(l))&&(h=w.propFix[h]||h,A=w.propHooks[h]),p!==void 0?A&&"set"in A&&(k=A.set(l,p,h))!==void 0?k:l[h]=p:A&&"get"in A&&(k=A.get(l,h))!==null?k:l[h]},propHooks:{tabIndex:{get:function(l){var h=w.find.attr(l,"tabindex");return h?parseInt(h,10):_i.test(l.nodeName)||kc.test(l.nodeName)&&l.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Ae.optSelected||(w.propHooks.selected={get:function(l){var h=l.parentNode;return h&&h.parentNode&&h.parentNode.selectedIndex,null},set:function(l){var h=l.parentNode;h&&(h.selectedIndex,h.parentNode&&h.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function jn(l){var h=l.match(Vt)||[];return h.join(" ")}function Fn(l){return l.getAttribute&&l.getAttribute("class")||""}function Cr(l){return Array.isArray(l)?l:typeof l=="string"?l.match(Vt)||[]:[]}w.fn.extend({addClass:function(l){var h,p,k,A,v,T;return ge(l)?this.each(function(j){w(this).addClass(l.call(this,j,Fn(this)))}):(h=Cr(l),h.length?this.each(function(){if(k=Fn(this),p=this.nodeType===1&&" "+jn(k)+" ",p){for(v=0;v<h.length;v++)A=h[v],p.indexOf(" "+A+" ")<0&&(p+=A+" ");T=jn(p),k!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(l){var h,p,k,A,v,T;return ge(l)?this.each(function(j){w(this).removeClass(l.call(this,j,Fn(this)))}):arguments.length?(h=Cr(l),h.length?this.each(function(){if(k=Fn(this),p=this.nodeType===1&&" "+jn(k)+" ",p){for(v=0;v<h.length;v++)for(A=h[v];p.indexOf(" "+A+" ")>-1;)p=p.replace(" "+A+" "," ");T=jn(p),k!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(l,h){var p,k,A,v,T=typeof l,j=T==="string"||Array.isArray(l);return ge(l)?this.each(function(z){w(this).toggleClass(l.call(this,z,Fn(this),h),h)}):typeof h=="boolean"&&j?h?this.addClass(l):this.removeClass(l):(p=Cr(l),this.each(function(){if(j)for(v=w(this),A=0;A<p.length;A++)k=p[A],v.hasClass(k)?v.removeClass(k):v.addClass(k);else(l===void 0||T==="boolean")&&(k=Fn(this),k&&he.set(this,"__className__",k),this.setAttribute&&this.setAttribute("class",k||l===!1?"":he.get(this,"__className__")||""))}))},hasClass:function(l){var h,p,k=0;for(h=" "+l+" ";p=this[k++];)if(p.nodeType===1&&(" "+jn(Fn(p))+" ").indexOf(h)>-1)return!0;return!1}});var bc=/\r/g;w.fn.extend({val:function(l){var h,p,k,A=this[0];return arguments.length?(k=ge(l),this.each(function(v){var T;this.nodeType===1&&(k?T=l.call(this,v,w(this).val()):T=l,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=w.map(T,function(j){return j==null?"":j+""})),h=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()],(!h||!("set"in h)||h.set(this,T,"value")===void 0)&&(this.value=T))})):A?(h=w.valHooks[A.type]||w.valHooks[A.nodeName.toLowerCase()],h&&"get"in h&&(p=h.get(A,"value"))!==void 0?p:(p=A.value,typeof p=="string"?p.replace(bc,""):p==null?"":p)):void 0}}),w.extend({valHooks:{option:{get:function(l){var h=w.find.attr(l,"value");return h!=null?h:jn(w.text(l))}},select:{get:function(l){var h,p,k,A=l.options,v=l.selectedIndex,T=l.type==="select-one",j=T?null:[],z=T?v+1:A.length;for(v<0?k=z:k=T?v:0;k<z;k++)if(p=A[k],(p.selected||k===v)&&!p.disabled&&(!p.parentNode.disabled||!Pe(p.parentNode,"optgroup"))){if(h=w(p).val(),T)return h;j.push(h)}return j},set:function(l,h){for(var p,k,A=l.options,v=w.makeArray(h),T=A.length;T--;)k=A[T],(k.selected=w.inArray(w.valHooks.option.get(k),v)>-1)&&(p=!0);return p||(l.selectedIndex=-1),v}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(l,h){if(Array.isArray(h))return l.checked=w.inArray(w(l).val(),h)>-1}},Ae.checkOn||(w.valHooks[this].get=function(l){return l.getAttribute("value")===null?"on":l.value})}),Ae.focusin="onfocusin"in b;var To=/^(?:focusinfocus|focusoutblur)$/,Et=function(l){l.stopPropagation()};w.extend(w.event,{trigger:function(l,h,p,k){var A,v,T,j,z,W,Y,te,K=[p||de],X=$.call(l,"type")?l.type:l,fe=$.call(l,"namespace")?l.namespace.split("."):[];if(v=te=T=p=p||de,!(p.nodeType===3||p.nodeType===8)&&!To.test(X+w.event.triggered)&&(X.indexOf(".")>-1&&(fe=X.split("."),X=fe.shift(),fe.sort()),z=X.indexOf(":")<0&&"on"+X,l=l[w.expando]?l:new w.Event(X,typeof l=="object"&&l),l.isTrigger=k?2:3,l.namespace=fe.join("."),l.rnamespace=l.namespace?new RegExp("(^|\\.)"+fe.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,l.result=void 0,l.target||(l.target=p),h=h==null?[l]:w.makeArray(h,[l]),Y=w.event.special[X]||{},!(!k&&Y.trigger&&Y.trigger.apply(p,h)===!1))){if(!k&&!Y.noBubble&&!le(p)){for(j=Y.delegateType||X,To.test(j+X)||(v=v.parentNode);v;v=v.parentNode)K.push(v),T=v;T===(p.ownerDocument||de)&&K.push(T.defaultView||T.parentWindow||b)}for(A=0;(v=K[A++])&&!l.isPropagationStopped();)te=v,l.type=A>1?j:Y.bindType||X,W=(he.get(v,"events")||Object.create(null))[l.type]&&he.get(v,"handle"),W&&W.apply(v,h),W=z&&v[z],W&&W.apply&&ji(v)&&(l.result=W.apply(v,h),l.result===!1&&l.preventDefault());return l.type=X,!k&&!l.isDefaultPrevented()&&(!Y._default||Y._default.apply(K.pop(),h)===!1)&&ji(p)&&z&&ge(p[X])&&!le(p)&&(T=p[z],T&&(p[z]=null),w.event.triggered=X,l.isPropagationStopped()&&te.addEventListener(X,Et),p[X](),l.isPropagationStopped()&&te.removeEventListener(X,Et),w.event.triggered=void 0,T&&(p[z]=T)),l.result}},simulate:function(l,h,p){var k=w.extend(new w.Event,p,{type:l,isSimulated:!0});w.event.trigger(k,null,h)}}),w.fn.extend({trigger:function(l,h){return this.each(function(){w.event.trigger(l,h,this)})},triggerHandler:function(l,h){var p=this[0];if(p)return w.event.trigger(l,h,p,!0)}}),Ae.focusin||w.each({focus:"focusin",blur:"focusout"},function(l,h){var p=function(k){w.event.simulate(h,k.target,w.event.fix(k))};w.event.special[h]={setup:function(){var k=this.ownerDocument||this.document||this,A=he.access(k,h);A||k.addEventListener(l,p,!0),he.access(k,h,(A||0)+1)},teardown:function(){var k=this.ownerDocument||this.document||this,A=he.access(k,h)-1;A?he.access(k,h,A):(k.removeEventListener(l,p,!0),he.remove(k,h))}}});var Wi=b.location,vr={guid:Date.now()},So=/\?/;w.parseXML=function(l){var h,p;if(!l||typeof l!="string")return null;try{h=new b.DOMParser().parseFromString(l,"text/xml")}catch{}return p=h&&h.getElementsByTagName("parsererror")[0],(!h||p)&&w.error("Invalid XML: "+(p?w.map(p.childNodes,function(k){return k.textContent}).join(`
`):l)),h};var Os=/\[\]$/,Ai=/\r?\n/g,wc=/^(?:submit|button|image|reset|file)$/i,yr=/^(?:input|select|textarea|keygen)/i;function Io(l,h,p,k){var A;if(Array.isArray(h))w.each(h,function(v,T){p||Os.test(l)?k(l,T):Io(l+"["+(typeof T=="object"&&T!=null?v:"")+"]",T,p,k)});else if(!p&&rt(h)==="object")for(A in h)Io(l+"["+A+"]",h[A],p,k);else k(l,h)}w.param=function(l,h){var p,k=[],A=function(v,T){var j=ge(T)?T():T;k[k.length]=encodeURIComponent(v)+"="+encodeURIComponent(j==null?"":j)};if(l==null)return"";if(Array.isArray(l)||l.jquery&&!w.isPlainObject(l))w.each(l,function(){A(this.name,this.value)});else for(p in l)Io(p,l[p],h,A);return k.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var l=w.prop(this,"elements");return l?w.makeArray(l):this}).filter(function(){var l=this.type;return this.name&&!w(this).is(":disabled")&&yr.test(this.nodeName)&&!wc.test(l)&&(this.checked||!Hi.test(l))}).map(function(l,h){var p=w(this).val();return p==null?null:Array.isArray(p)?w.map(p,function(k){return{name:h.name,value:k.replace(Ai,`\r
`)}}):{name:h.name,value:p.replace(Ai,`\r
`)}}).get()}});var et=/%20/g,_c=/#.*$/,xr=/([?&])_=[^&]*/,zs=/^(.*?):[ \t]*([^\r\n]*)$/mg,$i=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Er=/^(?:GET|HEAD)$/,Ci=/^\/\//,Dr={},Gi={},Rs="*/".concat("*"),Mo=de.createElement("a");Mo.href=Wi.href;function js(l){return function(h,p){typeof h!="string"&&(p=h,h="*");var k,A=0,v=h.toLowerCase().match(Vt)||[];if(ge(p))for(;k=v[A++];)k[0]==="+"?(k=k.slice(1)||"*",(l[k]=l[k]||[]).unshift(p)):(l[k]=l[k]||[]).push(p)}}function No(l,h,p,k){var A={},v=l===Gi;function T(j){var z;return A[j]=!0,w.each(l[j]||[],function(W,Y){var te=Y(h,p,k);if(typeof te=="string"&&!v&&!A[te])return h.dataTypes.unshift(te),T(te),!1;if(v)return!(z=te)}),z}return T(h.dataTypes[0])||!A["*"]&&T("*")}function Tr(l,h){var p,k,A=w.ajaxSettings.flatOptions||{};for(p in h)h[p]!==void 0&&((A[p]?l:k||(k={}))[p]=h[p]);return k&&w.extend(!0,l,k),l}function Ac(l,h,p){for(var k,A,v,T,j=l.contents,z=l.dataTypes;z[0]==="*";)z.shift(),k===void 0&&(k=l.mimeType||h.getResponseHeader("Content-Type"));if(k){for(A in j)if(j[A]&&j[A].test(k)){z.unshift(A);break}}if(z[0]in p)v=z[0];else{for(A in p){if(!z[0]||l.converters[A+" "+z[0]]){v=A;break}T||(T=A)}v=v||T}if(v)return v!==z[0]&&z.unshift(v),p[v]}function Cc(l,h,p,k){var A,v,T,j,z,W={},Y=l.dataTypes.slice();if(Y[1])for(T in l.converters)W[T.toLowerCase()]=l.converters[T];for(v=Y.shift();v;)if(l.responseFields[v]&&(p[l.responseFields[v]]=h),!z&&k&&l.dataFilter&&(h=l.dataFilter(h,l.dataType)),z=v,v=Y.shift(),v){if(v==="*")v=z;else if(z!=="*"&&z!==v){if(T=W[z+" "+v]||W["* "+v],!T){for(A in W)if(j=A.split(" "),j[1]===v&&(T=W[z+" "+j[0]]||W["* "+j[0]],T)){T===!0?T=W[A]:W[A]!==!0&&(v=j[0],Y.unshift(j[1]));break}}if(T!==!0)if(T&&l.throws)h=T(h);else try{h=T(h)}catch(te){return{state:"parsererror",error:T?te:"No conversion from "+z+" to "+v}}}}return{state:"success",data:h}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Wi.href,type:"GET",isLocal:$i.test(Wi.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rs,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(l,h){return h?Tr(Tr(l,w.ajaxSettings),h):Tr(w.ajaxSettings,l)},ajaxPrefilter:js(Dr),ajaxTransport:js(Gi),ajax:function(l,h){typeof l=="object"&&(h=l,l=void 0),h=h||{};var p,k,A,v,T,j,z,W,Y,te,K=w.ajaxSetup({},h),X=K.context||K,fe=K.context&&(X.nodeType||X.jquery)?w(X):w.event,De=w.Deferred(),pe=w.Callbacks("once memory"),lt=K.statusCode||{},ut={},zt={},Ve="canceled",Ce={readyState:0,getResponseHeader:function(Ne){var it;if(z){if(!v)for(v={};it=zs.exec(A);)v[it[1].toLowerCase()+" "]=(v[it[1].toLowerCase()+" "]||[]).concat(it[2]);it=v[Ne.toLowerCase()+" "]}return it==null?null:it.join(", ")},getAllResponseHeaders:function(){return z?A:null},setRequestHeader:function(Ne,it){return z==null&&(Ne=zt[Ne.toLowerCase()]=zt[Ne.toLowerCase()]||Ne,ut[Ne]=it),this},overrideMimeType:function(Ne){return z==null&&(K.mimeType=Ne),this},statusCode:function(Ne){var it;if(Ne)if(z)Ce.always(Ne[Ce.status]);else for(it in Ne)lt[it]=[lt[it],Ne[it]];return this},abort:function(Ne){var it=Ne||Ve;return p&&p.abort(it),Dt(0,it),this}};if(De.promise(Ce),K.url=((l||K.url||Wi.href)+"").replace(Ci,Wi.protocol+"//"),K.type=h.method||h.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(Vt)||[""],K.crossDomain==null){j=de.createElement("a");try{j.href=K.url,j.href=j.href,K.crossDomain=Mo.protocol+"//"+Mo.host!=j.protocol+"//"+j.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=w.param(K.data,K.traditional)),No(Dr,K,h,Ce),z)return Ce;W=w.event&&K.global,W&&w.active++===0&&w.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!Er.test(K.type),k=K.url.replace(_c,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(et,"+")):(te=K.url.slice(k.length),K.data&&(K.processData||typeof K.data=="string")&&(k+=(So.test(k)?"&":"?")+K.data,delete K.data),K.cache===!1&&(k=k.replace(xr,"$1"),te=(So.test(k)?"&":"?")+"_="+vr.guid+++te),K.url=k+te),K.ifModified&&(w.lastModified[k]&&Ce.setRequestHeader("If-Modified-Since",w.lastModified[k]),w.etag[k]&&Ce.setRequestHeader("If-None-Match",w.etag[k])),(K.data&&K.hasContent&&K.contentType!==!1||h.contentType)&&Ce.setRequestHeader("Content-Type",K.contentType),Ce.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Rs+"; q=0.01":""):K.accepts["*"]);for(Y in K.headers)Ce.setRequestHeader(Y,K.headers[Y]);if(K.beforeSend&&(K.beforeSend.call(X,Ce,K)===!1||z))return Ce.abort();if(Ve="abort",pe.add(K.complete),Ce.done(K.success),Ce.fail(K.error),p=No(Gi,K,h,Ce),!p)Dt(-1,"No Transport");else{if(Ce.readyState=1,W&&fe.trigger("ajaxSend",[Ce,K]),z)return Ce;K.async&&K.timeout>0&&(T=b.setTimeout(function(){Ce.abort("timeout")},K.timeout));try{z=!1,p.send(ut,Dt)}catch(Ne){if(z)throw Ne;Dt(-1,Ne)}}function Dt(Ne,it,yi,Ki){var qt,ti,ni,Wt,Vn,en=it;z||(z=!0,T&&b.clearTimeout(T),p=void 0,A=Ki||"",Ce.readyState=Ne>0?4:0,qt=Ne>=200&&Ne<300||Ne===304,yi&&(Wt=Ac(K,Ce,yi)),!qt&&w.inArray("script",K.dataTypes)>-1&&w.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),Wt=Cc(K,Wt,Ce,qt),qt?(K.ifModified&&(Vn=Ce.getResponseHeader("Last-Modified"),Vn&&(w.lastModified[k]=Vn),Vn=Ce.getResponseHeader("etag"),Vn&&(w.etag[k]=Vn)),Ne===204||K.type==="HEAD"?en="nocontent":Ne===304?en="notmodified":(en=Wt.state,ti=Wt.data,ni=Wt.error,qt=!ni)):(ni=en,(Ne||!en)&&(en="error",Ne<0&&(Ne=0))),Ce.status=Ne,Ce.statusText=(it||en)+"",qt?De.resolveWith(X,[ti,en,Ce]):De.rejectWith(X,[Ce,en,ni]),Ce.statusCode(lt),lt=void 0,W&&fe.trigger(qt?"ajaxSuccess":"ajaxError",[Ce,K,qt?ti:ni]),pe.fireWith(X,[Ce,en]),W&&(fe.trigger("ajaxComplete",[Ce,K]),--w.active||w.event.trigger("ajaxStop")))}return Ce},getJSON:function(l,h,p){return w.get(l,h,p,"json")},getScript:function(l,h){return w.get(l,void 0,h,"script")}}),w.each(["get","post"],function(l,h){w[h]=function(p,k,A,v){return ge(k)&&(v=v||A,A=k,k=void 0),w.ajax(w.extend({url:p,type:h,dataType:v,data:k,success:A},w.isPlainObject(p)&&p))}}),w.ajaxPrefilter(function(l){var h;for(h in l.headers)h.toLowerCase()==="content-type"&&(l.contentType=l.headers[h]||"")}),w._evalUrl=function(l,h,p){return w.ajax({url:l,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(k){w.globalEval(k,h,p)}})},w.fn.extend({wrapAll:function(l){var h;return this[0]&&(ge(l)&&(l=l.call(this[0])),h=w(l,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&h.insertBefore(this[0]),h.map(function(){for(var p=this;p.firstElementChild;)p=p.firstElementChild;return p}).append(this)),this},wrapInner:function(l){return ge(l)?this.each(function(h){w(this).wrapInner(l.call(this,h))}):this.each(function(){var h=w(this),p=h.contents();p.length?p.wrapAll(l):h.append(l)})},wrap:function(l){var h=ge(l);return this.each(function(p){w(this).wrapAll(h?l.call(this,p):l)})},unwrap:function(l){return this.parent(l).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(l){return!w.expr.pseudos.visible(l)},w.expr.pseudos.visible=function(l){return!!(l.offsetWidth||l.offsetHeight||l.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new b.XMLHttpRequest}catch{}};var Bo={0:200,1223:204},ei=w.ajaxSettings.xhr();Ae.cors=!!ei&&"withCredentials"in ei,Ae.ajax=ei=!!ei,w.ajaxTransport(function(l){var h,p;if(Ae.cors||ei&&!l.crossDomain)return{send:function(k,A){var v,T=l.xhr();if(T.open(l.type,l.url,l.async,l.username,l.password),l.xhrFields)for(v in l.xhrFields)T[v]=l.xhrFields[v];l.mimeType&&T.overrideMimeType&&T.overrideMimeType(l.mimeType),!l.crossDomain&&!k["X-Requested-With"]&&(k["X-Requested-With"]="XMLHttpRequest");for(v in k)T.setRequestHeader(v,k[v]);h=function(j){return function(){h&&(h=p=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,j==="abort"?T.abort():j==="error"?typeof T.status!="number"?A(0,"error"):A(T.status,T.statusText):A(Bo[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=h(),p=T.onerror=T.ontimeout=h("error"),T.onabort!==void 0?T.onabort=p:T.onreadystatechange=function(){T.readyState===4&&b.setTimeout(function(){h&&p()})},h=h("abort");try{T.send(l.hasContent&&l.data||null)}catch(j){if(h)throw j}},abort:function(){h&&h()}}}),w.ajaxPrefilter(function(l){l.crossDomain&&(l.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(l){return w.globalEval(l),l}}}),w.ajaxPrefilter("script",function(l){l.cache===void 0&&(l.cache=!1),l.crossDomain&&(l.type="GET")}),w.ajaxTransport("script",function(l){if(l.crossDomain||l.scriptAttrs){var h,p;return{send:function(k,A){h=w("<script>").attr(l.scriptAttrs||{}).prop({charset:l.scriptCharset,src:l.url}).on("load error",p=function(v){h.remove(),p=null,v&&A(v.type==="error"?404:200,v.type)}),de.head.appendChild(h[0])},abort:function(){p&&p()}}}});var Fs=[],Sr=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var l=Fs.pop()||w.expando+"_"+vr.guid++;return this[l]=!0,l}}),w.ajaxPrefilter("json jsonp",function(l,h,p){var k,A,v,T=l.jsonp!==!1&&(Sr.test(l.url)?"url":typeof l.data=="string"&&(l.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Sr.test(l.data)&&"data");if(T||l.dataTypes[0]==="jsonp")return k=l.jsonpCallback=ge(l.jsonpCallback)?l.jsonpCallback():l.jsonpCallback,T?l[T]=l[T].replace(Sr,"$1"+k):l.jsonp!==!1&&(l.url+=(So.test(l.url)?"&":"?")+l.jsonp+"="+k),l.converters["script json"]=function(){return v||w.error(k+" was not called"),v[0]},l.dataTypes[0]="json",A=b[k],b[k]=function(){v=arguments},p.always(function(){A===void 0?w(b).removeProp(k):b[k]=A,l[k]&&(l.jsonpCallback=h.jsonpCallback,Fs.push(k)),v&&ge(A)&&A(v[0]),v=A=void 0}),"script"}),Ae.createHTMLDocument=function(){var l=de.implementation.createHTMLDocument("").body;return l.innerHTML="<form></form><form></form>",l.childNodes.length===2}(),w.parseHTML=function(l,h,p){if(typeof l!="string")return[];typeof h=="boolean"&&(p=h,h=!1);var k,A,v;return h||(Ae.createHTMLDocument?(h=de.implementation.createHTMLDocument(""),k=h.createElement("base"),k.href=de.location.href,h.head.appendChild(k)):h=de),A=nt.exec(l),v=!p&&[],A?[h.createElement(A[1])]:(A=xs([l],h,v),v&&v.length&&w(v).remove(),w.merge([],A.childNodes))},w.fn.load=function(l,h,p){var k,A,v,T=this,j=l.indexOf(" ");return j>-1&&(k=jn(l.slice(j)),l=l.slice(0,j)),ge(h)?(p=h,h=void 0):h&&typeof h=="object"&&(A="POST"),T.length>0&&w.ajax({url:l,type:A||"GET",dataType:"html",data:h}).done(function(z){v=arguments,T.html(k?w("<div>").append(w.parseHTML(z)).find(k):z)}).always(p&&function(z,W){T.each(function(){p.apply(this,v||[z.responseText,W,z])})}),this},w.expr.pseudos.animated=function(l){return w.grep(w.timers,function(h){return l===h.elem}).length},w.offset={setOffset:function(l,h,p){var k,A,v,T,j,z,W,Y=w.css(l,"position"),te=w(l),K={};Y==="static"&&(l.style.position="relative"),j=te.offset(),v=w.css(l,"top"),z=w.css(l,"left"),W=(Y==="absolute"||Y==="fixed")&&(v+z).indexOf("auto")>-1,W?(k=te.position(),T=k.top,A=k.left):(T=parseFloat(v)||0,A=parseFloat(z)||0),ge(h)&&(h=h.call(l,p,w.extend({},j))),h.top!=null&&(K.top=h.top-j.top+T),h.left!=null&&(K.left=h.left-j.left+A),"using"in h?h.using.call(l,K):te.css(K)}},w.fn.extend({offset:function(l){if(arguments.length)return l===void 0?this:this.each(function(A){w.offset.setOffset(this,l,A)});var h,p,k=this[0];if(!!k)return k.getClientRects().length?(h=k.getBoundingClientRect(),p=k.ownerDocument.defaultView,{top:h.top+p.pageYOffset,left:h.left+p.pageXOffset}):{top:0,left:0}},position:function(){if(!!this[0]){var l,h,p,k=this[0],A={top:0,left:0};if(w.css(k,"position")==="fixed")h=k.getBoundingClientRect();else{for(h=this.offset(),p=k.ownerDocument,l=k.offsetParent||p.documentElement;l&&(l===p.body||l===p.documentElement)&&w.css(l,"position")==="static";)l=l.parentNode;l&&l!==k&&l.nodeType===1&&(A=w(l).offset(),A.top+=w.css(l,"borderTopWidth",!0),A.left+=w.css(l,"borderLeftWidth",!0))}return{top:h.top-A.top-w.css(k,"marginTop",!0),left:h.left-A.left-w.css(k,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var l=this.offsetParent;l&&w.css(l,"position")==="static";)l=l.offsetParent;return l||Ht})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(l,h){var p=h==="pageYOffset";w.fn[l]=function(k){return hn(this,function(A,v,T){var j;if(le(A)?j=A:A.nodeType===9&&(j=A.defaultView),T===void 0)return j?j[h]:A[v];j?j.scrollTo(p?j.pageXOffset:T,p?T:j.pageYOffset):A[v]=T},l,k,arguments.length)}}),w.each(["top","left"],function(l,h){w.cssHooks[h]=Ss(Ae.pixelPosition,function(p,k){if(k)return k=_n(p,h),kr.test(k)?w(p).position()[h]+"px":k})}),w.each({Height:"height",Width:"width"},function(l,h){w.each({padding:"inner"+l,content:h,"":"outer"+l},function(p,k){w.fn[k]=function(A,v){var T=arguments.length&&(p||typeof A!="boolean"),j=p||(A===!0||v===!0?"margin":"border");return hn(this,function(z,W,Y){var te;return le(z)?k.indexOf("outer")===0?z["inner"+l]:z.document.documentElement["client"+l]:z.nodeType===9?(te=z.documentElement,Math.max(z.body["scroll"+l],te["scroll"+l],z.body["offset"+l],te["offset"+l],te["client"+l])):Y===void 0?w.css(z,W,j):w.style(z,W,Y,j)},h,T?A:void 0,T)}})}),w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(l,h){w.fn[h]=function(p){return this.on(h,p)}}),w.fn.extend({bind:function(l,h,p){return this.on(l,null,h,p)},unbind:function(l,h){return this.off(l,null,h)},delegate:function(l,h,p,k){return this.on(h,l,p,k)},undelegate:function(l,h,p){return arguments.length===1?this.off(l,"**"):this.off(h,l||"**",p)},hover:function(l,h){return this.mouseenter(l).mouseleave(h||l)}}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(l,h){w.fn[h]=function(p,k){return arguments.length>0?this.on(h,null,p,k):this.trigger(h)}});var vc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;w.proxy=function(l,h){var p,k,A;if(typeof h=="string"&&(p=l[h],h=l,l=p),!!ge(l))return k=O.call(arguments,2),A=function(){return l.apply(h||this,k.concat(O.call(arguments)))},A.guid=l.guid=l.guid||w.guid++,A},w.holdReady=function(l){l?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=Pe,w.isFunction=ge,w.isWindow=le,w.camelCase=sn,w.type=rt,w.now=Date.now,w.isNumeric=function(l){var h=w.type(l);return(h==="number"||h==="string")&&!isNaN(l-parseFloat(l))},w.trim=function(l){return l==null?"":(l+"").replace(vc,"$1")};var yc=b.jQuery,vi=b.$;return w.noConflict=function(l){return b.$===w&&(b.$=vi),l&&b.jQuery===w&&(b.jQuery=yc),w},typeof E>"u"&&(b.jQuery=b.$=w),w})})(pk);const Fa=pk.exports;var gd=!1,fd=!1,mo=[];function Ky(g){Yy(g)}function Yy(g){mo.includes(g)||mo.push(g),Qy()}function mk(g){let b=mo.indexOf(g);b!==-1&&mo.splice(b,1)}function Qy(){!fd&&!gd&&(gd=!0,queueMicrotask(Zy))}function Zy(){gd=!1,fd=!0;for(let g=0;g<mo.length;g++)mo[g]();mo.length=0,fd=!1}var lr,us,qa,kk,pd=!0;function Jy(g){pd=!1,g(),pd=!0}function Xy(g){lr=g.reactive,qa=g.release,us=b=>g.effect(b,{scheduler:E=>{pd?Ky(E):E()}}),kk=g.raw}function ck(g){us=g}function e1(g){let b=()=>{};return[N=>{let I=us(N);return g._x_effects||(g._x_effects=new Set,g._x_runEffects=()=>{g._x_effects.forEach(O=>O())}),g._x_effects.add(I),b=()=>{I!==void 0&&(g._x_effects.delete(I),qa(I))},I},()=>{b()}]}var bk=[],wk=[],_k=[];function t1(g){_k.push(g)}function Ak(g,b){typeof b=="function"?(g._x_cleanups||(g._x_cleanups=[]),g._x_cleanups.push(b)):(b=g,wk.push(b))}function n1(g){bk.push(g)}function i1(g,b,E){g._x_attributeCleanups||(g._x_attributeCleanups={}),g._x_attributeCleanups[b]||(g._x_attributeCleanups[b]=[]),g._x_attributeCleanups[b].push(E)}function Ck(g,b){!g._x_attributeCleanups||Object.entries(g._x_attributeCleanups).forEach(([E,N])=>{(b===void 0||b.includes(E))&&(N.forEach(I=>I()),delete g._x_attributeCleanups[E])})}var Id=new MutationObserver(Bd),Md=!1;function vk(){Id.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),Md=!0}function o1(){r1(),Id.disconnect(),Md=!1}var as=[],ld=!1;function r1(){as=as.concat(Id.takeRecords()),as.length&&!ld&&(ld=!0,queueMicrotask(()=>{s1(),ld=!1}))}function s1(){Bd(as),as.length=0}function Nt(g){if(!Md)return g();o1();let b=g();return vk(),b}var Nd=!1,Va=[];function a1(){Nd=!0}function c1(){Nd=!1,Bd(Va),Va=[]}function Bd(g){if(Nd){Va=Va.concat(g);return}let b=[],E=[],N=new Map,I=new Map;for(let O=0;O<g.length;O++)if(!g[O].target._x_ignoreMutationObserver&&(g[O].type==="childList"&&(g[O].addedNodes.forEach(S=>S.nodeType===1&&b.push(S)),g[O].removedNodes.forEach(S=>S.nodeType===1&&E.push(S))),g[O].type==="attributes")){let S=g[O].target,P=g[O].attributeName,C=g[O].oldValue,F=()=>{N.has(S)||N.set(S,[]),N.get(S).push({name:P,value:S.getAttribute(P)})},q=()=>{I.has(S)||I.set(S,[]),I.get(S).push(P)};S.hasAttribute(P)&&C===null?F():S.hasAttribute(P)?(q(),F()):q()}I.forEach((O,S)=>{Ck(S,O)}),N.forEach((O,S)=>{bk.forEach(P=>P(S,O))});for(let O of E)if(!b.includes(O)&&(wk.forEach(S=>S(O)),O._x_cleanups))for(;O._x_cleanups.length;)O._x_cleanups.pop()();b.forEach(O=>{O._x_ignoreSelf=!0,O._x_ignore=!0});for(let O of b)E.includes(O)||!O.isConnected||(delete O._x_ignoreSelf,delete O._x_ignore,_k.forEach(S=>S(O)),O._x_ignore=!0,O._x_ignoreSelf=!0);b.forEach(O=>{delete O._x_ignoreSelf,delete O._x_ignore}),b=null,E=null,N=null,I=null}function yk(g){return gs(sr(g))}function hs(g,b,E){return g._x_dataStack=[b,...sr(E||g)],()=>{g._x_dataStack=g._x_dataStack.filter(N=>N!==b)}}function lk(g,b){let E=g._x_dataStack[0];Object.entries(b).forEach(([N,I])=>{E[N]=I})}function sr(g){return g._x_dataStack?g._x_dataStack:typeof ShadowRoot=="function"&&g instanceof ShadowRoot?sr(g.host):g.parentNode?sr(g.parentNode):[]}function gs(g){let b=new Proxy({},{ownKeys:()=>Array.from(new Set(g.flatMap(E=>Object.keys(E)))),has:(E,N)=>g.some(I=>I.hasOwnProperty(N)),get:(E,N)=>(g.find(I=>{if(I.hasOwnProperty(N)){let O=Object.getOwnPropertyDescriptor(I,N);if(O.get&&O.get._x_alreadyBound||O.set&&O.set._x_alreadyBound)return!0;if((O.get||O.set)&&O.enumerable){let S=O.get,P=O.set,C=O;S=S&&S.bind(b),P=P&&P.bind(b),S&&(S._x_alreadyBound=!0),P&&(P._x_alreadyBound=!0),Object.defineProperty(I,N,{...C,get:S,set:P})}return!0}return!1})||{})[N],set:(E,N,I)=>{let O=g.find(S=>S.hasOwnProperty(N));return O?O[N]=I:g[g.length-1][N]=I,!0}});return b}function xk(g){let b=N=>typeof N=="object"&&!Array.isArray(N)&&N!==null,E=(N,I="")=>{Object.entries(Object.getOwnPropertyDescriptors(N)).forEach(([O,{value:S,enumerable:P}])=>{if(P===!1||S===void 0)return;let C=I===""?O:`${I}.${O}`;typeof S=="object"&&S!==null&&S._x_interceptor?N[O]=S.initialize(g,C,O):b(S)&&S!==N&&!(S instanceof Element)&&E(S,C)})};return E(g)}function Ek(g,b=()=>{}){let E={initialValue:void 0,_x_interceptor:!0,initialize(N,I,O){return g(this.initialValue,()=>l1(N,I),S=>md(N,I,S),I,O)}};return b(E),N=>{if(typeof N=="object"&&N!==null&&N._x_interceptor){let I=E.initialize.bind(E);E.initialize=(O,S,P)=>{let C=N.initialize(O,S,P);return E.initialValue=C,I(O,S,P)}}else E.initialValue=N;return E}}function l1(g,b){return b.split(".").reduce((E,N)=>E[N],g)}function md(g,b,E){if(typeof b=="string"&&(b=b.split(".")),b.length===1)g[b[0]]=E;else{if(b.length===0)throw error;return g[b[0]]||(g[b[0]]={}),md(g[b[0]],b.slice(1),E)}}var Dk={};function Pn(g,b){Dk[g]=b}function kd(g,b){return Object.entries(Dk).forEach(([E,N])=>{Object.defineProperty(g,`$${E}`,{get(){let[I,O]=Bk(b);return I={interceptor:Ek,...I},Ak(b,O),N(b,I)},enumerable:!1})}),g}function d1(g,b,E,...N){try{return E(...N)}catch(I){ds(I,g,b)}}function ds(g,b,E=void 0){Object.assign(g,{el:b,expression:E}),console.warn(`Alpine Expression Error: ${g.message}

${E?'Expression: "'+E+`"

`:""}`,b),setTimeout(()=>{throw g},0)}var ja=!0;function u1(g){let b=ja;ja=!1,g(),ja=b}function rr(g,b,E={}){let N;return Jt(g,b)(I=>N=I,E),N}function Jt(...g){return Tk(...g)}var Tk=Sk;function h1(g){Tk=g}function Sk(g,b){let E={};kd(E,g);let N=[E,...sr(g)];if(typeof b=="function")return g1(N,b);let I=p1(N,b,g);return d1.bind(null,g,b,I)}function g1(g,b){return(E=()=>{},{scope:N={},params:I=[]}={})=>{let O=b.apply(gs([N,...g]),I);Ha(E,O)}}var dd={};function f1(g,b){if(dd[g])return dd[g];let E=Object.getPrototypeOf(async function(){}).constructor,N=/^[\n\s]*if.*\(.*\)/.test(g)||/^(let|const)\s/.test(g)?`(() => { ${g} })()`:g,O=(()=>{try{return new E(["__self","scope"],`with (scope) { __self.result = ${N} }; __self.finished = true; return __self.result;`)}catch(S){return ds(S,b,g),Promise.resolve()}})();return dd[g]=O,O}function p1(g,b,E){let N=f1(b,E);return(I=()=>{},{scope:O={},params:S=[]}={})=>{N.result=void 0,N.finished=!1;let P=gs([O,...g]);if(typeof N=="function"){let C=N(N,P).catch(F=>ds(F,E,b));N.finished?(Ha(I,N.result,P,S,E),N.result=void 0):C.then(F=>{Ha(I,F,P,S,E)}).catch(F=>ds(F,E,b)).finally(()=>N.result=void 0)}}}function Ha(g,b,E,N,I){if(ja&&typeof b=="function"){let O=b.apply(E,N);O instanceof Promise?O.then(S=>Ha(g,S,E,N)).catch(S=>ds(S,I,b)):g(O)}else g(b)}var Pd="x-";function dr(g=""){return Pd+g}function m1(g){Pd=g}var Ik={};function At(g,b){Ik[g]=b}function Ld(g,b,E){if(b=Array.from(b),g._x_virtualDirectives){let O=Object.entries(g._x_virtualDirectives).map(([P,C])=>({name:P,value:C})),S=Mk(O);O=O.map(P=>S.find(C=>C.name===P.name)?{name:`x-bind:${P.name}`,value:`"${P.value}"`}:P),b=b.concat(O)}let N={};return b.map(Ok((O,S)=>N[O]=S)).filter(Rk).map(w1(N,E)).sort(_1).map(O=>b1(g,O))}function Mk(g){return Array.from(g).map(Ok()).filter(b=>!Rk(b))}var bd=!1,ss=new Map,Nk=Symbol();function k1(g){bd=!0;let b=Symbol();Nk=b,ss.set(b,[]);let E=()=>{for(;ss.get(b).length;)ss.get(b).shift()();ss.delete(b)},N=()=>{bd=!1,E()};g(E),N()}function Bk(g){let b=[],E=P=>b.push(P),[N,I]=e1(g);return b.push(I),[{Alpine:fs,effect:N,cleanup:E,evaluateLater:Jt.bind(Jt,g),evaluate:rr.bind(rr,g)},()=>b.forEach(P=>P())]}function b1(g,b){let E=()=>{},N=Ik[b.type]||E,[I,O]=Bk(g);i1(g,b.original,O);let S=()=>{g._x_ignore||g._x_ignoreSelf||(N.inline&&N.inline(g,b,I),N=N.bind(N,g,b,I),bd?ss.get(Nk).push(N):N())};return S.runCleanups=O,S}var Pk=(g,b)=>({name:E,value:N})=>(E.startsWith(g)&&(E=E.replace(g,b)),{name:E,value:N}),Lk=g=>g;function Ok(g=()=>{}){return({name:b,value:E})=>{let{name:N,value:I}=zk.reduce((O,S)=>S(O),{name:b,value:E});return N!==b&&g(N,b),{name:N,value:I}}}var zk=[];function Od(g){zk.push(g)}function Rk({name:g}){return jk().test(g)}var jk=()=>new RegExp(`^${Pd}([^:^.]+)\\b`);function w1(g,b){return({name:E,value:N})=>{let I=E.match(jk()),O=E.match(/:([a-zA-Z0-9\-:]+)/),S=E.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],P=b||g[E]||E;return{type:I?I[1]:null,value:O?O[1]:null,modifiers:S.map(C=>C.replace(".","")),expression:N,original:P}}}var wd="DEFAULT",za=["ignore","ref","data","id","radio","tabs","switch","disclosure","menu","listbox","list","item","combobox","bind","init","for","mask","model","modelable","transition","show","if",wd,"teleport"];function _1(g,b){let E=za.indexOf(g.type)===-1?wd:g.type,N=za.indexOf(b.type)===-1?wd:b.type;return za.indexOf(E)-za.indexOf(N)}function cs(g,b,E={}){g.dispatchEvent(new CustomEvent(b,{detail:E,bubbles:!0,composed:!0,cancelable:!0}))}var _d=[],zd=!1;function Fk(g=()=>{}){return queueMicrotask(()=>{zd||setTimeout(()=>{Ad()})}),new Promise(b=>{_d.push(()=>{g(),b()})})}function Ad(){for(zd=!1;_d.length;)_d.shift()()}function A1(){zd=!0}function wo(g,b){if(typeof ShadowRoot=="function"&&g instanceof ShadowRoot){Array.from(g.children).forEach(I=>wo(I,b));return}let E=!1;if(b(g,()=>E=!0),E)return;let N=g.firstElementChild;for(;N;)wo(N,b),N=N.nextElementSibling}function ar(g,...b){console.warn(`Alpine Warning: ${g}`,...b)}function C1(){document.body||ar("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),cs(document,"alpine:init"),cs(document,"alpine:initializing"),vk(),t1(b=>zi(b,wo)),Ak(b=>y1(b)),n1((b,E)=>{Ld(b,E).forEach(N=>N())});let g=b=>!Wa(b.parentElement,!0);Array.from(document.querySelectorAll(Uk())).filter(g).forEach(b=>{zi(b)}),cs(document,"alpine:initialized")}var Rd=[],Vk=[];function Hk(){return Rd.map(g=>g())}function Uk(){return Rd.concat(Vk).map(g=>g())}function qk(g){Rd.push(g)}function Wk(g){Vk.push(g)}function Wa(g,b=!1){return $a(g,E=>{if((b?Uk():Hk()).some(I=>E.matches(I)))return!0})}function $a(g,b){if(!!g){if(b(g))return g;if(g._x_teleportBack&&(g=g._x_teleportBack),!!g.parentElement)return $a(g.parentElement,b)}}function v1(g){return Hk().some(b=>g.matches(b))}function zi(g,b=wo){k1(()=>{b(g,(E,N)=>{Ld(E,E.attributes).forEach(I=>I()),E._x_ignore&&N()})})}function y1(g){wo(g,b=>Ck(b))}function jd(g,b){return Array.isArray(b)?dk(g,b.join(" ")):typeof b=="object"&&b!==null?x1(g,b):typeof b=="function"?jd(g,b()):dk(g,b)}function dk(g,b){let E=I=>I.split(" ").filter(O=>!g.classList.contains(O)).filter(Boolean),N=I=>(g.classList.add(...I),()=>{g.classList.remove(...I)});return b=b===!0?b="":b||"",N(E(b))}function x1(g,b){let E=P=>P.split(" ").filter(Boolean),N=Object.entries(b).flatMap(([P,C])=>C?E(P):!1).filter(Boolean),I=Object.entries(b).flatMap(([P,C])=>C?!1:E(P)).filter(Boolean),O=[],S=[];return I.forEach(P=>{g.classList.contains(P)&&(g.classList.remove(P),S.push(P))}),N.forEach(P=>{g.classList.contains(P)||(g.classList.add(P),O.push(P))}),()=>{S.forEach(P=>g.classList.add(P)),O.forEach(P=>g.classList.remove(P))}}function Ga(g,b){return typeof b=="object"&&b!==null?E1(g,b):D1(g,b)}function E1(g,b){let E={};return Object.entries(b).forEach(([N,I])=>{E[N]=g.style[N],N.startsWith("--")||(N=T1(N)),g.style.setProperty(N,I)}),setTimeout(()=>{g.style.length===0&&g.removeAttribute("style")}),()=>{Ga(g,E)}}function D1(g,b){let E=g.getAttribute("style",b);return g.setAttribute("style",b),()=>{g.setAttribute("style",E||"")}}function T1(g){return g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Cd(g,b=()=>{}){let E=!1;return function(){E?b.apply(this,arguments):(E=!0,g.apply(this,arguments))}}At("transition",(g,{value:b,modifiers:E,expression:N},{evaluate:I})=>{typeof N=="function"&&(N=I(N)),N?S1(g,N,b):I1(g,E,b)});function S1(g,b,E){$k(g,jd,""),{enter:I=>{g._x_transition.enter.during=I},"enter-start":I=>{g._x_transition.enter.start=I},"enter-end":I=>{g._x_transition.enter.end=I},leave:I=>{g._x_transition.leave.during=I},"leave-start":I=>{g._x_transition.leave.start=I},"leave-end":I=>{g._x_transition.leave.end=I}}[E](b)}function I1(g,b,E){$k(g,Ga);let N=!b.includes("in")&&!b.includes("out")&&!E,I=N||b.includes("in")||["enter"].includes(E),O=N||b.includes("out")||["leave"].includes(E);b.includes("in")&&!N&&(b=b.filter((de,qe)=>qe<b.indexOf("out"))),b.includes("out")&&!N&&(b=b.filter((de,qe)=>qe>b.indexOf("out")));let S=!b.includes("opacity")&&!b.includes("scale"),P=S||b.includes("opacity"),C=S||b.includes("scale"),F=P?0:1,q=C?is(b,"scale",95)/100:1,$=is(b,"delay",0),y=is(b,"origin","center"),G="opacity, transform",Ae=is(b,"duration",150)/1e3,ge=is(b,"duration",75)/1e3,le="cubic-bezier(0.4, 0.0, 0.2, 1)";I&&(g._x_transition.enter.during={transformOrigin:y,transitionDelay:$,transitionProperty:G,transitionDuration:`${Ae}s`,transitionTimingFunction:le},g._x_transition.enter.start={opacity:F,transform:`scale(${q})`},g._x_transition.enter.end={opacity:1,transform:"scale(1)"}),O&&(g._x_transition.leave.during={transformOrigin:y,transitionDelay:$,transitionProperty:G,transitionDuration:`${ge}s`,transitionTimingFunction:le},g._x_transition.leave.start={opacity:1,transform:"scale(1)"},g._x_transition.leave.end={opacity:F,transform:`scale(${q})`})}function $k(g,b,E={}){g._x_transition||(g._x_transition={enter:{during:E,start:E,end:E},leave:{during:E,start:E,end:E},in(N=()=>{},I=()=>{}){vd(g,b,{during:this.enter.during,start:this.enter.start,end:this.enter.end},N,I)},out(N=()=>{},I=()=>{}){vd(g,b,{during:this.leave.during,start:this.leave.start,end:this.leave.end},N,I)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(g,b,E,N){const I=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let O=()=>I(E);if(b){g._x_transition&&(g._x_transition.enter||g._x_transition.leave)?g._x_transition.enter&&(Object.entries(g._x_transition.enter.during).length||Object.entries(g._x_transition.enter.start).length||Object.entries(g._x_transition.enter.end).length)?g._x_transition.in(E):O():g._x_transition?g._x_transition.in(E):O();return}g._x_hidePromise=g._x_transition?new Promise((S,P)=>{g._x_transition.out(()=>{},()=>S(N)),g._x_transitioning.beforeCancel(()=>P({isFromCancelledTransition:!0}))}):Promise.resolve(N),queueMicrotask(()=>{let S=Gk(g);S?(S._x_hideChildren||(S._x_hideChildren=[]),S._x_hideChildren.push(g)):I(()=>{let P=C=>{let F=Promise.all([C._x_hidePromise,...(C._x_hideChildren||[]).map(P)]).then(([q])=>q());return delete C._x_hidePromise,delete C._x_hideChildren,F};P(g).catch(C=>{if(!C.isFromCancelledTransition)throw C})})})};function Gk(g){let b=g.parentNode;if(!!b)return b._x_hidePromise?b:Gk(b)}function vd(g,b,{during:E,start:N,end:I}={},O=()=>{},S=()=>{}){if(g._x_transitioning&&g._x_transitioning.cancel(),Object.keys(E).length===0&&Object.keys(N).length===0&&Object.keys(I).length===0){O(),S();return}let P,C,F;M1(g,{start(){P=b(g,N)},during(){C=b(g,E)},before:O,end(){P(),F=b(g,I)},after:S,cleanup(){C(),F()}})}function M1(g,b){let E,N,I,O=Cd(()=>{Nt(()=>{E=!0,N||b.before(),I||(b.end(),Ad()),b.after(),g.isConnected&&b.cleanup(),delete g._x_transitioning})});g._x_transitioning={beforeCancels:[],beforeCancel(S){this.beforeCancels.push(S)},cancel:Cd(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();O()}),finish:O},Nt(()=>{b.start(),b.during()}),A1(),requestAnimationFrame(()=>{if(E)return;let S=Number(getComputedStyle(g).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,P=Number(getComputedStyle(g).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;S===0&&(S=Number(getComputedStyle(g).animationDuration.replace("s",""))*1e3),Nt(()=>{b.before()}),N=!0,requestAnimationFrame(()=>{E||(Nt(()=>{b.end()}),Ad(),setTimeout(g._x_transitioning.finish,S+P),I=!0)})})}function is(g,b,E){if(g.indexOf(b)===-1)return E;const N=g[g.indexOf(b)+1];if(!N||b==="scale"&&isNaN(N))return E;if(b==="duration"){let I=N.match(/([0-9]+)ms/);if(I)return I[1]}return b==="origin"&&["top","right","left","center","bottom"].includes(g[g.indexOf(b)+2])?[N,g[g.indexOf(b)+2]].join(" "):N}var yd=!1;function Ka(g,b=()=>{}){return(...E)=>yd?b(...E):g(...E)}function N1(g,b){b._x_dataStack||(b._x_dataStack=g._x_dataStack),yd=!0,P1(()=>{B1(b)}),yd=!1}function B1(g){let b=!1;zi(g,(N,I)=>{wo(N,(O,S)=>{if(b&&v1(O))return S();b=!0,I(O,S)})})}function P1(g){let b=us;ck((E,N)=>{let I=b(E);return qa(I),()=>{}}),g(),ck(b)}function Kk(g,b,E,N=[]){switch(g._x_bindings||(g._x_bindings=lr({})),g._x_bindings[b]=E,b=N.includes("camel")?V1(b):b,b){case"value":L1(g,E);break;case"style":z1(g,E);break;case"class":O1(g,E);break;default:R1(g,b,E);break}}function L1(g,b){if(g.type==="radio")g.attributes.value===void 0&&(g.value=b),window.fromModel&&(g.checked=uk(g.value,b));else if(g.type==="checkbox")Number.isInteger(b)?g.value=b:!Number.isInteger(b)&&!Array.isArray(b)&&typeof b!="boolean"&&![null,void 0].includes(b)?g.value=String(b):Array.isArray(b)?g.checked=b.some(E=>uk(E,g.value)):g.checked=!!b;else if(g.tagName==="SELECT")F1(g,b);else{if(g.value===b)return;g.value=b}}function O1(g,b){g._x_undoAddedClasses&&g._x_undoAddedClasses(),g._x_undoAddedClasses=jd(g,b)}function z1(g,b){g._x_undoAddedStyles&&g._x_undoAddedStyles(),g._x_undoAddedStyles=Ga(g,b)}function R1(g,b,E){[null,void 0,!1].includes(E)&&H1(b)?g.removeAttribute(b):(Yk(b)&&(E=b),j1(g,b,E))}function j1(g,b,E){g.getAttribute(b)!=E&&g.setAttribute(b,E)}function F1(g,b){const E=[].concat(b).map(N=>N+"");Array.from(g.options).forEach(N=>{N.selected=E.includes(N.value)})}function V1(g){return g.toLowerCase().replace(/-(\w)/g,(b,E)=>E.toUpperCase())}function uk(g,b){return g==b}function Yk(g){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(g)}function H1(g){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(g)}function U1(g,b,E){if(g._x_bindings&&g._x_bindings[b]!==void 0)return g._x_bindings[b];let N=g.getAttribute(b);return N===null?typeof E=="function"?E():E:N===""?!0:Yk(b)?!![b,"true"].includes(N):N}function Qk(g,b){var E;return function(){var N=this,I=arguments,O=function(){E=null,g.apply(N,I)};clearTimeout(E),E=setTimeout(O,b)}}function Zk(g,b){let E;return function(){let N=this,I=arguments;E||(g.apply(N,I),E=!0,setTimeout(()=>E=!1,b))}}function q1(g){g(fs)}var po={},hk=!1;function W1(g,b){if(hk||(po=lr(po),hk=!0),b===void 0)return po[g];po[g]=b,typeof b=="object"&&b!==null&&b.hasOwnProperty("init")&&typeof b.init=="function"&&po[g].init(),xk(po[g])}function $1(){return po}var Jk={};function G1(g,b){let E=typeof b!="function"?()=>b:b;g instanceof Element?Xk(g,E()):Jk[g]=E}function K1(g){return Object.entries(Jk).forEach(([b,E])=>{Object.defineProperty(g,b,{get(){return(...N)=>E(...N)}})}),g}function Xk(g,b,E){let N=[];for(;N.length;)N.pop()();let I=Object.entries(b).map(([S,P])=>({name:S,value:P})),O=Mk(I);I=I.map(S=>O.find(P=>P.name===S.name)?{name:`x-bind:${S.name}`,value:`"${S.value}"`}:S),Ld(g,I,E).map(S=>{N.push(S.runCleanups),S()})}var eb={};function Y1(g,b){eb[g]=b}function Q1(g,b){return Object.entries(eb).forEach(([E,N])=>{Object.defineProperty(g,E,{get(){return(...I)=>N.bind(b)(...I)},enumerable:!1})}),g}var Z1={get reactive(){return lr},get release(){return qa},get effect(){return us},get raw(){return kk},version:"3.10.5",flushAndStopDeferringMutations:c1,dontAutoEvaluateFunctions:u1,disableEffectScheduling:Jy,setReactivityEngine:Xy,closestDataStack:sr,skipDuringClone:Ka,addRootSelector:qk,addInitSelector:Wk,addScopeToNode:hs,deferMutations:a1,mapAttributes:Od,evaluateLater:Jt,setEvaluator:h1,mergeProxies:gs,findClosest:$a,closestRoot:Wa,interceptor:Ek,transition:vd,setStyles:Ga,mutateDom:Nt,directive:At,throttle:Zk,debounce:Qk,evaluate:rr,initTree:zi,nextTick:Fk,prefixed:dr,prefix:m1,plugin:q1,magic:Pn,store:W1,start:C1,clone:N1,bound:U1,$data:yk,data:Y1,bind:G1},fs=Z1;function J1(g,b){const E=Object.create(null),N=g.split(",");for(let I=0;I<N.length;I++)E[N[I]]=!0;return b?I=>!!E[I.toLowerCase()]:I=>!!E[I]}var X1=Object.freeze({});Object.freeze([]);var tb=Object.assign,ex=Object.prototype.hasOwnProperty,Ya=(g,b)=>ex.call(g,b),ko=Array.isArray,ls=g=>nb(g)==="[object Map]",tx=g=>typeof g=="string",Fd=g=>typeof g=="symbol",Qa=g=>g!==null&&typeof g=="object",nx=Object.prototype.toString,nb=g=>nx.call(g),ib=g=>nb(g).slice(8,-1),Vd=g=>tx(g)&&g!=="NaN"&&g[0]!=="-"&&""+parseInt(g,10)===g,ix=g=>{const b=Object.create(null);return E=>b[E]||(b[E]=g(E))},ox=ix(g=>g.charAt(0).toUpperCase()+g.slice(1)),ob=(g,b)=>g!==b&&(g===g||b===b),xd=new WeakMap,os=[],Yn,bo=Symbol("iterate"),Ed=Symbol("Map key iterate");function rx(g){return g&&g._isEffect===!0}function sx(g,b=X1){rx(g)&&(g=g.raw);const E=lx(g,b);return b.lazy||E(),E}function ax(g){g.active&&(rb(g),g.options.onStop&&g.options.onStop(),g.active=!1)}var cx=0;function lx(g,b){const E=function(){if(!E.active)return g();if(!os.includes(E)){rb(E);try{return ux(),os.push(E),Yn=E,g()}finally{os.pop(),sb(),Yn=os[os.length-1]}}};return E.id=cx++,E.allowRecurse=!!b.allowRecurse,E._isEffect=!0,E.active=!0,E.raw=g,E.deps=[],E.options=b,E}function rb(g){const{deps:b}=g;if(b.length){for(let E=0;E<b.length;E++)b[E].delete(g);b.length=0}}var cr=!0,Hd=[];function dx(){Hd.push(cr),cr=!1}function ux(){Hd.push(cr),cr=!0}function sb(){const g=Hd.pop();cr=g===void 0?!0:g}function Bn(g,b,E){if(!cr||Yn===void 0)return;let N=xd.get(g);N||xd.set(g,N=new Map);let I=N.get(E);I||N.set(E,I=new Set),I.has(Yn)||(I.add(Yn),Yn.deps.push(I),Yn.options.onTrack&&Yn.options.onTrack({effect:Yn,target:g,type:b,key:E}))}function Ri(g,b,E,N,I,O){const S=xd.get(g);if(!S)return;const P=new Set,C=q=>{q&&q.forEach($=>{($!==Yn||$.allowRecurse)&&P.add($)})};if(b==="clear")S.forEach(C);else if(E==="length"&&ko(g))S.forEach((q,$)=>{($==="length"||$>=N)&&C(q)});else switch(E!==void 0&&C(S.get(E)),b){case"add":ko(g)?Vd(E)&&C(S.get("length")):(C(S.get(bo)),ls(g)&&C(S.get(Ed)));break;case"delete":ko(g)||(C(S.get(bo)),ls(g)&&C(S.get(Ed)));break;case"set":ls(g)&&C(S.get(bo));break}const F=q=>{q.options.onTrigger&&q.options.onTrigger({effect:q,target:g,key:E,type:b,newValue:N,oldValue:I,oldTarget:O}),q.options.scheduler?q.options.scheduler(q):q()};P.forEach(F)}var hx=J1("__proto__,__v_isRef,__isVue"),ab=new Set(Object.getOwnPropertyNames(Symbol).map(g=>Symbol[g]).filter(Fd)),gx=Za(),fx=Za(!1,!0),px=Za(!0),mx=Za(!0,!0),Ua={};["includes","indexOf","lastIndexOf"].forEach(g=>{const b=Array.prototype[g];Ua[g]=function(...E){const N=ct(this);for(let O=0,S=this.length;O<S;O++)Bn(N,"get",O+"");const I=b.apply(N,E);return I===-1||I===!1?b.apply(N,E.map(ct)):I}});["push","pop","shift","unshift","splice"].forEach(g=>{const b=Array.prototype[g];Ua[g]=function(...E){dx();const N=b.apply(this,E);return sb(),N}});function Za(g=!1,b=!1){return function(N,I,O){if(I==="__v_isReactive")return!g;if(I==="__v_isReadonly")return g;if(I==="__v_raw"&&O===(g?b?Ex:Cb:b?xx:Ab).get(N))return N;const S=ko(N);if(!g&&S&&Ya(Ua,I))return Reflect.get(Ua,I,O);const P=Reflect.get(N,I,O);return(Fd(I)?ab.has(I):hx(I))||(g||Bn(N,"get",I),b)?P:Dd(P)?!S||!Vd(I)?P.value:P:Qa(P)?g?vb(P):$d(P):P}}var kx=cb(),bx=cb(!0);function cb(g=!1){return function(E,N,I,O){let S=E[N];if(!g&&(I=ct(I),S=ct(S),!ko(E)&&Dd(S)&&!Dd(I)))return S.value=I,!0;const P=ko(E)&&Vd(N)?Number(N)<E.length:Ya(E,N),C=Reflect.set(E,N,I,O);return E===ct(O)&&(P?ob(I,S)&&Ri(E,"set",N,I,S):Ri(E,"add",N,I)),C}}function wx(g,b){const E=Ya(g,b),N=g[b],I=Reflect.deleteProperty(g,b);return I&&E&&Ri(g,"delete",b,void 0,N),I}function _x(g,b){const E=Reflect.has(g,b);return(!Fd(b)||!ab.has(b))&&Bn(g,"has",b),E}function Ax(g){return Bn(g,"iterate",ko(g)?"length":bo),Reflect.ownKeys(g)}var lb={get:gx,set:kx,deleteProperty:wx,has:_x,ownKeys:Ax},db={get:px,set(g,b){return console.warn(`Set operation on key "${String(b)}" failed: target is readonly.`,g),!0},deleteProperty(g,b){return console.warn(`Delete operation on key "${String(b)}" failed: target is readonly.`,g),!0}};tb({},lb,{get:fx,set:bx});tb({},db,{get:mx});var Ud=g=>Qa(g)?$d(g):g,qd=g=>Qa(g)?vb(g):g,Wd=g=>g,Ja=g=>Reflect.getPrototypeOf(g);function Xa(g,b,E=!1,N=!1){g=g.__v_raw;const I=ct(g),O=ct(b);b!==O&&!E&&Bn(I,"get",b),!E&&Bn(I,"get",O);const{has:S}=Ja(I),P=N?Wd:E?qd:Ud;if(S.call(I,b))return P(g.get(b));if(S.call(I,O))return P(g.get(O));g!==I&&g.get(b)}function ec(g,b=!1){const E=this.__v_raw,N=ct(E),I=ct(g);return g!==I&&!b&&Bn(N,"has",g),!b&&Bn(N,"has",I),g===I?E.has(g):E.has(g)||E.has(I)}function tc(g,b=!1){return g=g.__v_raw,!b&&Bn(ct(g),"iterate",bo),Reflect.get(g,"size",g)}function ub(g){g=ct(g);const b=ct(this);return Ja(b).has.call(b,g)||(b.add(g),Ri(b,"add",g,g)),this}function hb(g,b){b=ct(b);const E=ct(this),{has:N,get:I}=Ja(E);let O=N.call(E,g);O?_b(E,N,g):(g=ct(g),O=N.call(E,g));const S=I.call(E,g);return E.set(g,b),O?ob(b,S)&&Ri(E,"set",g,b,S):Ri(E,"add",g,b),this}function gb(g){const b=ct(this),{has:E,get:N}=Ja(b);let I=E.call(b,g);I?_b(b,E,g):(g=ct(g),I=E.call(b,g));const O=N?N.call(b,g):void 0,S=b.delete(g);return I&&Ri(b,"delete",g,void 0,O),S}function fb(){const g=ct(this),b=g.size!==0,E=ls(g)?new Map(g):new Set(g),N=g.clear();return b&&Ri(g,"clear",void 0,void 0,E),N}function nc(g,b){return function(N,I){const O=this,S=O.__v_raw,P=ct(S),C=b?Wd:g?qd:Ud;return!g&&Bn(P,"iterate",bo),S.forEach((F,q)=>N.call(I,C(F),C(q),O))}}function Ra(g,b,E){return function(...N){const I=this.__v_raw,O=ct(I),S=ls(O),P=g==="entries"||g===Symbol.iterator&&S,C=g==="keys"&&S,F=I[g](...N),q=E?Wd:b?qd:Ud;return!b&&Bn(O,"iterate",C?Ed:bo),{next(){const{value:$,done:y}=F.next();return y?{value:$,done:y}:{value:P?[q($[0]),q($[1])]:q($),done:y}},[Symbol.iterator](){return this}}}}function Oi(g){return function(...b){{const E=b[0]?`on key "${b[0]}" `:"";console.warn(`${ox(g)} operation ${E}failed: target is readonly.`,ct(this))}return g==="delete"?!1:this}}var pb={get(g){return Xa(this,g)},get size(){return tc(this)},has:ec,add:ub,set:hb,delete:gb,clear:fb,forEach:nc(!1,!1)},mb={get(g){return Xa(this,g,!1,!0)},get size(){return tc(this)},has:ec,add:ub,set:hb,delete:gb,clear:fb,forEach:nc(!1,!0)},kb={get(g){return Xa(this,g,!0)},get size(){return tc(this,!0)},has(g){return ec.call(this,g,!0)},add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear"),forEach:nc(!0,!1)},bb={get(g){return Xa(this,g,!0,!0)},get size(){return tc(this,!0)},has(g){return ec.call(this,g,!0)},add:Oi("add"),set:Oi("set"),delete:Oi("delete"),clear:Oi("clear"),forEach:nc(!0,!0)},Cx=["keys","values","entries",Symbol.iterator];Cx.forEach(g=>{pb[g]=Ra(g,!1,!1),kb[g]=Ra(g,!0,!1),mb[g]=Ra(g,!1,!0),bb[g]=Ra(g,!0,!0)});function wb(g,b){const E=b?g?bb:mb:g?kb:pb;return(N,I,O)=>I==="__v_isReactive"?!g:I==="__v_isReadonly"?g:I==="__v_raw"?N:Reflect.get(Ya(E,I)&&I in N?E:N,I,O)}var vx={get:wb(!1,!1)},yx={get:wb(!0,!1)};function _b(g,b,E){const N=ct(E);if(N!==E&&b.call(g,N)){const I=ib(g);console.warn(`Reactive ${I} contains both the raw and reactive versions of the same object${I==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Ab=new WeakMap,xx=new WeakMap,Cb=new WeakMap,Ex=new WeakMap;function Dx(g){switch(g){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tx(g){return g.__v_skip||!Object.isExtensible(g)?0:Dx(ib(g))}function $d(g){return g&&g.__v_isReadonly?g:yb(g,!1,lb,vx,Ab)}function vb(g){return yb(g,!0,db,yx,Cb)}function yb(g,b,E,N,I){if(!Qa(g))return console.warn(`value cannot be made reactive: ${String(g)}`),g;if(g.__v_raw&&!(b&&g.__v_isReactive))return g;const O=I.get(g);if(O)return O;const S=Tx(g);if(S===0)return g;const P=new Proxy(g,S===2?N:E);return I.set(g,P),P}function ct(g){return g&&ct(g.__v_raw)||g}function Dd(g){return Boolean(g&&g.__v_isRef===!0)}Pn("nextTick",()=>Fk);Pn("dispatch",g=>cs.bind(cs,g));Pn("watch",(g,{evaluateLater:b,effect:E})=>(N,I)=>{let O=b(N),S=!0,P,C=E(()=>O(F=>{JSON.stringify(F),S?P=F:queueMicrotask(()=>{I(F,P),P=F}),S=!1}));g._x_effects.delete(C)});Pn("store",$1);Pn("data",g=>yk(g));Pn("root",g=>Wa(g));Pn("refs",g=>(g._x_refs_proxy||(g._x_refs_proxy=gs(Sx(g))),g._x_refs_proxy));function Sx(g){let b=[],E=g;for(;E;)E._x_refs&&b.push(E._x_refs),E=E.parentNode;return b}var ud={};function xb(g){return ud[g]||(ud[g]=0),++ud[g]}function Ix(g,b){return $a(g,E=>{if(E._x_ids&&E._x_ids[b])return!0})}function Mx(g,b){g._x_ids||(g._x_ids={}),g._x_ids[b]||(g._x_ids[b]=xb(b))}Pn("id",g=>(b,E=null)=>{let N=Ix(g,b),I=N?N._x_ids[b]:xb(b);return E?`${b}-${I}-${E}`:`${b}-${I}`});Pn("el",g=>g);Eb("Focus","focus","focus");Eb("Persist","persist","persist");function Eb(g,b,E){Pn(b,N=>ar(`You can't use [$${directiveName}] without first installing the "${g}" plugin here: https://alpinejs.dev/plugins/${E}`,N))}At("modelable",(g,{expression:b},{effect:E,evaluateLater:N})=>{let I=N(b),O=()=>{let F;return I(q=>F=q),F},S=N(`${b} = __placeholder`),P=F=>S(()=>{},{scope:{__placeholder:F}}),C=O();P(C),queueMicrotask(()=>{if(!g._x_model)return;g._x_removeModelListeners.default();let F=g._x_model.get,q=g._x_model.set;E(()=>P(F())),E(()=>q(O()))})});At("teleport",(g,{expression:b},{cleanup:E})=>{g.tagName.toLowerCase()!=="template"&&ar("x-teleport can only be used on a <template> tag",g);let N=document.querySelector(b);N||ar(`Cannot find x-teleport element for selector: "${b}"`);let I=g.content.cloneNode(!0).firstElementChild;g._x_teleport=I,I._x_teleportBack=g,g._x_forwardEvents&&g._x_forwardEvents.forEach(O=>{I.addEventListener(O,S=>{S.stopPropagation(),g.dispatchEvent(new S.constructor(S.type,S))})}),hs(I,{},g),Nt(()=>{N.appendChild(I),zi(I),I._x_ignore=!0}),E(()=>I.remove())});var Db=()=>{};Db.inline=(g,{modifiers:b},{cleanup:E})=>{b.includes("self")?g._x_ignoreSelf=!0:g._x_ignore=!0,E(()=>{b.includes("self")?delete g._x_ignoreSelf:delete g._x_ignore})};At("ignore",Db);At("effect",(g,{expression:b},{effect:E})=>E(Jt(g,b)));function Tb(g,b,E,N){let I=g,O=C=>N(C),S={},P=(C,F)=>q=>F(C,q);if(E.includes("dot")&&(b=Nx(b)),E.includes("camel")&&(b=Bx(b)),E.includes("passive")&&(S.passive=!0),E.includes("capture")&&(S.capture=!0),E.includes("window")&&(I=window),E.includes("document")&&(I=document),E.includes("prevent")&&(O=P(O,(C,F)=>{F.preventDefault(),C(F)})),E.includes("stop")&&(O=P(O,(C,F)=>{F.stopPropagation(),C(F)})),E.includes("self")&&(O=P(O,(C,F)=>{F.target===g&&C(F)})),(E.includes("away")||E.includes("outside"))&&(I=document,O=P(O,(C,F)=>{g.contains(F.target)||F.target.isConnected!==!1&&(g.offsetWidth<1&&g.offsetHeight<1||g._x_isShown!==!1&&C(F))})),E.includes("once")&&(O=P(O,(C,F)=>{C(F),I.removeEventListener(b,O,S)})),O=P(O,(C,F)=>{Lx(b)&&Ox(F,E)||C(F)}),E.includes("debounce")){let C=E[E.indexOf("debounce")+1]||"invalid-wait",F=Td(C.split("ms")[0])?Number(C.split("ms")[0]):250;O=Qk(O,F)}if(E.includes("throttle")){let C=E[E.indexOf("throttle")+1]||"invalid-wait",F=Td(C.split("ms")[0])?Number(C.split("ms")[0]):250;O=Zk(O,F)}return I.addEventListener(b,O,S),()=>{I.removeEventListener(b,O,S)}}function Nx(g){return g.replace(/-/g,".")}function Bx(g){return g.toLowerCase().replace(/-(\w)/g,(b,E)=>E.toUpperCase())}function Td(g){return!Array.isArray(g)&&!isNaN(g)}function Px(g){return g.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function Lx(g){return["keydown","keyup"].includes(g)}function Ox(g,b){let E=b.filter(O=>!["window","document","prevent","stop","once"].includes(O));if(E.includes("debounce")){let O=E.indexOf("debounce");E.splice(O,Td((E[O+1]||"invalid-wait").split("ms")[0])?2:1)}if(E.length===0||E.length===1&&gk(g.key).includes(E[0]))return!1;const I=["ctrl","shift","alt","meta","cmd","super"].filter(O=>E.includes(O));return E=E.filter(O=>!I.includes(O)),!(I.length>0&&I.filter(S=>((S==="cmd"||S==="super")&&(S="meta"),g[`${S}Key`])).length===I.length&&gk(g.key).includes(E[0]))}function gk(g){if(!g)return[];g=Px(g);let b={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return b[g]=g,Object.keys(b).map(E=>{if(b[E]===g)return E}).filter(E=>E)}At("model",(g,{modifiers:b,expression:E},{effect:N,cleanup:I})=>{let O=Jt(g,E),S=`${E} = rightSideOfExpression($event, ${E})`,P=Jt(g,S);var C=g.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(g.type)||b.includes("lazy")?"change":"input";let F=zx(g,b,E),q=Tb(g,C,b,y=>{P(()=>{},{scope:{$event:y,rightSideOfExpression:F}})});g._x_removeModelListeners||(g._x_removeModelListeners={}),g._x_removeModelListeners.default=q,I(()=>g._x_removeModelListeners.default());let $=Jt(g,`${E} = __placeholder`);g._x_model={get(){let y;return O(G=>y=G),y},set(y){$(()=>{},{scope:{__placeholder:y}})}},g._x_forceModelUpdate=()=>{O(y=>{y===void 0&&E.match(/\./)&&(y=""),window.fromModel=!0,Nt(()=>Kk(g,"value",y)),delete window.fromModel})},N(()=>{b.includes("unintrusive")&&document.activeElement.isSameNode(g)||g._x_forceModelUpdate()})});function zx(g,b,E){return g.type==="radio"&&Nt(()=>{g.hasAttribute("name")||g.setAttribute("name",E)}),(N,I)=>Nt(()=>{if(N instanceof CustomEvent&&N.detail!==void 0)return N.detail||N.target.value;if(g.type==="checkbox")if(Array.isArray(I)){let O=b.includes("number")?hd(N.target.value):N.target.value;return N.target.checked?I.concat([O]):I.filter(S=>!Rx(S,O))}else return N.target.checked;else{if(g.tagName.toLowerCase()==="select"&&g.multiple)return b.includes("number")?Array.from(N.target.selectedOptions).map(O=>{let S=O.value||O.text;return hd(S)}):Array.from(N.target.selectedOptions).map(O=>O.value||O.text);{let O=N.target.value;return b.includes("number")?hd(O):b.includes("trim")?O.trim():O}}})}function hd(g){let b=g?parseFloat(g):null;return jx(b)?b:g}function Rx(g,b){return g==b}function jx(g){return!Array.isArray(g)&&!isNaN(g)}At("cloak",g=>queueMicrotask(()=>Nt(()=>g.removeAttribute(dr("cloak")))));Wk(()=>`[${dr("init")}]`);At("init",Ka((g,{expression:b},{evaluate:E})=>typeof b=="string"?!!b.trim()&&E(b,{},!1):E(b,{},!1)));At("text",(g,{expression:b},{effect:E,evaluateLater:N})=>{let I=N(b);E(()=>{I(O=>{Nt(()=>{g.textContent=O})})})});At("html",(g,{expression:b},{effect:E,evaluateLater:N})=>{let I=N(b);E(()=>{I(O=>{Nt(()=>{g.innerHTML=O,g._x_ignoreSelf=!0,zi(g),delete g._x_ignoreSelf})})})});Od(Pk(":",Lk(dr("bind:"))));At("bind",(g,{value:b,modifiers:E,expression:N,original:I},{effect:O})=>{if(!b){let P={};K1(P),Jt(g,N)(F=>{Xk(g,F,I)},{scope:P});return}if(b==="key")return Fx(g,N);let S=Jt(g,N);O(()=>S(P=>{P===void 0&&typeof N=="string"&&N.match(/\./)&&(P=""),Nt(()=>Kk(g,b,P,E))}))});function Fx(g,b){g._x_keyExpression=b}qk(()=>`[${dr("data")}]`);At("data",Ka((g,{expression:b},{cleanup:E})=>{b=b===""?"{}":b;let N={};kd(N,g);let I={};Q1(I,N);let O=rr(g,b,{scope:I});O===void 0&&(O={}),kd(O,g);let S=lr(O);xk(S);let P=hs(g,S);S.init&&rr(g,S.init),E(()=>{S.destroy&&rr(g,S.destroy),P()})}));At("show",(g,{modifiers:b,expression:E},{effect:N})=>{let I=Jt(g,E);g._x_doHide||(g._x_doHide=()=>{Nt(()=>{g.style.setProperty("display","none",b.includes("important")?"important":void 0)})}),g._x_doShow||(g._x_doShow=()=>{Nt(()=>{g.style.length===1&&g.style.display==="none"?g.removeAttribute("style"):g.style.removeProperty("display")})});let O=()=>{g._x_doHide(),g._x_isShown=!1},S=()=>{g._x_doShow(),g._x_isShown=!0},P=()=>setTimeout(S),C=Cd($=>$?S():O(),$=>{typeof g._x_toggleAndCascadeWithTransitions=="function"?g._x_toggleAndCascadeWithTransitions(g,$,S,O):$?P():O()}),F,q=!0;N(()=>I($=>{!q&&$===F||(b.includes("immediate")&&($?P():O()),C($),F=$,q=!1)}))});At("for",(g,{expression:b},{effect:E,cleanup:N})=>{let I=Hx(b),O=Jt(g,I.items),S=Jt(g,g._x_keyExpression||"index");g._x_prevKeys=[],g._x_lookup={},E(()=>Vx(g,I,O,S)),N(()=>{Object.values(g._x_lookup).forEach(P=>P.remove()),delete g._x_prevKeys,delete g._x_lookup})});function Vx(g,b,E,N){let I=S=>typeof S=="object"&&!Array.isArray(S),O=g;E(S=>{Ux(S)&&S>=0&&(S=Array.from(Array(S).keys(),le=>le+1)),S===void 0&&(S=[]);let P=g._x_lookup,C=g._x_prevKeys,F=[],q=[];if(I(S))S=Object.entries(S).map(([le,de])=>{let qe=fk(b,de,le,S);N($e=>q.push($e),{scope:{index:le,...qe}}),F.push(qe)});else for(let le=0;le<S.length;le++){let de=fk(b,S[le],le,S);N(qe=>q.push(qe),{scope:{index:le,...de}}),F.push(de)}let $=[],y=[],G=[],Ae=[];for(let le=0;le<C.length;le++){let de=C[le];q.indexOf(de)===-1&&G.push(de)}C=C.filter(le=>!G.includes(le));let ge="template";for(let le=0;le<q.length;le++){let de=q[le],qe=C.indexOf(de);if(qe===-1)C.splice(le,0,de),$.push([ge,le]);else if(qe!==le){let $e=C.splice(le,1)[0],rt=C.splice(qe-1,1)[0];C.splice(le,0,rt),C.splice(qe,0,$e),y.push([$e,rt])}else Ae.push(de);ge=de}for(let le=0;le<G.length;le++){let de=G[le];P[de]._x_effects&&P[de]._x_effects.forEach(mk),P[de].remove(),P[de]=null,delete P[de]}for(let le=0;le<y.length;le++){let[de,qe]=y[le],$e=P[de],rt=P[qe],mt=document.createElement("div");Nt(()=>{rt.after(mt),$e.after(rt),rt._x_currentIfEl&&rt.after(rt._x_currentIfEl),mt.before($e),$e._x_currentIfEl&&$e.after($e._x_currentIfEl),mt.remove()}),lk(rt,F[q.indexOf(qe)])}for(let le=0;le<$.length;le++){let[de,qe]=$[le],$e=de==="template"?O:P[de];$e._x_currentIfEl&&($e=$e._x_currentIfEl);let rt=F[qe],mt=q[qe],w=document.importNode(O.content,!0).firstElementChild;hs(w,lr(rt),O),Nt(()=>{$e.after(w),zi(w)}),typeof mt=="object"&&ar("x-for key cannot be an object, it must be a string or an integer",O),P[mt]=w}for(let le=0;le<Ae.length;le++)lk(P[Ae[le]],F[q.indexOf(Ae[le])]);O._x_prevKeys=q})}function Hx(g){let b=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,E=/^\s*\(|\)\s*$/g,N=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,I=g.match(N);if(!I)return;let O={};O.items=I[2].trim();let S=I[1].replace(E,"").trim(),P=S.match(b);return P?(O.item=S.replace(b,"").trim(),O.index=P[1].trim(),P[2]&&(O.collection=P[2].trim())):O.item=S,O}function fk(g,b,E,N){let I={};return/^\[.*\]$/.test(g.item)&&Array.isArray(b)?g.item.replace("[","").replace("]","").split(",").map(S=>S.trim()).forEach((S,P)=>{I[S]=b[P]}):/^\{.*\}$/.test(g.item)&&!Array.isArray(b)&&typeof b=="object"?g.item.replace("{","").replace("}","").split(",").map(S=>S.trim()).forEach(S=>{I[S]=b[S]}):I[g.item]=b,g.index&&(I[g.index]=E),g.collection&&(I[g.collection]=N),I}function Ux(g){return!Array.isArray(g)&&!isNaN(g)}function Sb(){}Sb.inline=(g,{expression:b},{cleanup:E})=>{let N=Wa(g);N._x_refs||(N._x_refs={}),N._x_refs[b]=g,E(()=>delete N._x_refs[b])};At("ref",Sb);At("if",(g,{expression:b},{effect:E,cleanup:N})=>{let I=Jt(g,b),O=()=>{if(g._x_currentIfEl)return g._x_currentIfEl;let P=g.content.cloneNode(!0).firstElementChild;return hs(P,{},g),Nt(()=>{g.after(P),zi(P)}),g._x_currentIfEl=P,g._x_undoIf=()=>{wo(P,C=>{C._x_effects&&C._x_effects.forEach(mk)}),P.remove(),delete g._x_currentIfEl},P},S=()=>{!g._x_undoIf||(g._x_undoIf(),delete g._x_undoIf)};E(()=>I(P=>{P?O():S()})),N(()=>g._x_undoIf&&g._x_undoIf())});At("id",(g,{expression:b},{evaluate:E})=>{E(b).forEach(I=>Mx(g,I))});Od(Pk("@",Lk(dr("on:"))));At("on",Ka((g,{value:b,modifiers:E,expression:N},{cleanup:I})=>{let O=N?Jt(g,N):()=>{};g.tagName.toLowerCase()==="template"&&(g._x_forwardEvents||(g._x_forwardEvents=[]),g._x_forwardEvents.includes(b)||g._x_forwardEvents.push(b));let S=Tb(g,b,E,P=>{O(()=>{},{scope:{$event:P},params:[P]})});I(()=>S())}));ic("Collapse","collapse","collapse");ic("Intersect","intersect","intersect");ic("Focus","trap","focus");ic("Mask","mask","mask");function ic(g,b,E){At(b,N=>ar(`You can't use [x-${b}] without first installing the "${g}" plugin here: https://alpinejs.dev/plugins/${E}`,N))}fs.setEvaluator(Sk);fs.setReactivityEngine({reactive:$d,effect:sx,release:ax,raw:ct});var qx=fs,Ib=qx,Sd={exports:{}};(function(g,b){(function(E){const N=E.en=E.en||{};N.dictionary=Object.assign(N.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(E,N){g.exports=N()}(self,()=>(()=>{var E={3062:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const G=y},903:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const G=y},3143:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},4717:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const G=y},9315:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const G=y},8733:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const G=y},3508:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const G=y},2640:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const G=y},5083:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},4036:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const G=y},3773:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const G=y},3689:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const G=y},1905:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},9773:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const G=y},2347:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},7754:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},4652:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const G=y},7442:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},9292:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},1613:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const G=y},6306:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const G=y},3881:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const G=y},6945:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},4906:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const G=y},5332:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const G=y},6781:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const G=y},5485:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},3949:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},7686:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},7339:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const G=y},9688:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const G=y},8847:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const G=y},6574:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},4879:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const G=y},3662:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const G=y},2577:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},1046:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},8793:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const G=y},4650:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const G=y},7676:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const G=y},5868:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const G=y},6764:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const G=y},9695:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const G=y},5542:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const G=y},3332:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const G=y},4793:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const G=y},3488:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const G=y},8506:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const G=y},4921:(S,P,C)=>{C.d(P,{Z:()=>G});var F=C(1799),q=C.n(F),$=C(2609),y=C.n($)()(q());y.push([S.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const G=y},2609:S=>{S.exports=function(P){var C=[];return C.toString=function(){return this.map(function(F){var q=P(F);return F[2]?"@media ".concat(F[2]," {").concat(q,"}"):q}).join("")},C.i=function(F,q,$){typeof F=="string"&&(F=[[null,F,""]]);var y={};if($)for(var G=0;G<this.length;G++){var Ae=this[G][0];Ae!=null&&(y[Ae]=!0)}for(var ge=0;ge<F.length;ge++){var le=[].concat(F[ge]);$&&y[le[0]]||(q&&(le[2]?le[2]="".concat(q," and ").concat(le[2]):le[2]=q),C.push(le))}},C}},1799:S=>{function P(F,q){return function($){if(Array.isArray($))return $}(F)||function($,y){var G=$&&(typeof Symbol<"u"&&$[Symbol.iterator]||$["@@iterator"]);if(G!=null){var Ae,ge,le=[],de=!0,qe=!1;try{for(G=G.call($);!(de=(Ae=G.next()).done)&&(le.push(Ae.value),!y||le.length!==y);de=!0);}catch($e){qe=!0,ge=$e}finally{try{de||G.return==null||G.return()}finally{if(qe)throw ge}}return le}}(F,q)||function($,y){if(!!$){if(typeof $=="string")return C($,y);var G=Object.prototype.toString.call($).slice(8,-1);if(G==="Object"&&$.constructor&&(G=$.constructor.name),G==="Map"||G==="Set")return Array.from($);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return C($,y)}}(F,q)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function C(F,q){(q==null||q>F.length)&&(q=F.length);for(var $=0,y=new Array(q);$<q;$++)y[$]=F[$];return y}S.exports=function(F){var q=P(F,4),$=q[1],y=q[3];if(!y)return $;if(typeof btoa=="function"){var G=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),Ae="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(G),ge="/*# ".concat(Ae," */"),le=y.sources.map(function(de){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(de," */")});return[$].concat(le).concat([ge]).join(`
`)}return[$].join(`
`)}},6062:(S,P,C)=>{var F,q=function(){return F===void 0&&(F=Boolean(window&&document&&document.all&&!window.atob)),F},$=function(){var ue={};return function(Ee){if(ue[Ee]===void 0){var xe=document.querySelector(Ee);if(window.HTMLIFrameElement&&xe instanceof window.HTMLIFrameElement)try{xe=xe.contentDocument.head}catch{xe=null}ue[Ee]=xe}return ue[Ee]}}(),y=[];function G(ue){for(var Ee=-1,xe=0;xe<y.length;xe++)if(y[xe].identifier===ue){Ee=xe;break}return Ee}function Ae(ue,Ee){for(var xe={},Ue=[],Xe=0;Xe<ue.length;Xe++){var Pe=ue[Xe],nt=Ee.base?Pe[0]+Ee.base:Pe[0],Xt=xe[nt]||0,Le="".concat(nt," ").concat(Xt);xe[nt]=Xt+1;var Ln=G(Le),Qn={css:Pe[1],media:Pe[2],sourceMap:Pe[3]};Ln!==-1?(y[Ln].references++,y[Ln].updater(Qn)):y.push({identifier:Le,updater:w(Qn,Ee),references:1}),Ue.push(Le)}return Ue}function ge(ue){var Ee=document.createElement("style"),xe=ue.attributes||{};if(xe.nonce===void 0){var Ue=C.nc;Ue&&(xe.nonce=Ue)}if(Object.keys(xe).forEach(function(Pe){Ee.setAttribute(Pe,xe[Pe])}),typeof ue.insert=="function")ue.insert(Ee);else{var Xe=$(ue.insert||"head");if(!Xe)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Xe.appendChild(Ee)}return Ee}var le,de=(le=[],function(ue,Ee){return le[ue]=Ee,le.filter(Boolean).join(`
`)});function qe(ue,Ee,xe,Ue){var Xe=xe?"":Ue.media?"@media ".concat(Ue.media," {").concat(Ue.css,"}"):Ue.css;if(ue.styleSheet)ue.styleSheet.cssText=de(Ee,Xe);else{var Pe=document.createTextNode(Xe),nt=ue.childNodes;nt[Ee]&&ue.removeChild(nt[Ee]),nt.length?ue.insertBefore(Pe,nt[Ee]):ue.appendChild(Pe)}}function $e(ue,Ee,xe){var Ue=xe.css,Xe=xe.media,Pe=xe.sourceMap;if(Xe?ue.setAttribute("media",Xe):ue.removeAttribute("media"),Pe&&typeof btoa<"u"&&(Ue+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Pe))))," */")),ue.styleSheet)ue.styleSheet.cssText=Ue;else{for(;ue.firstChild;)ue.removeChild(ue.firstChild);ue.appendChild(document.createTextNode(Ue))}}var rt=null,mt=0;function w(ue,Ee){var xe,Ue,Xe;if(Ee.singleton){var Pe=mt++;xe=rt||(rt=ge(Ee)),Ue=qe.bind(null,xe,Pe,!1),Xe=qe.bind(null,xe,Pe,!0)}else xe=ge(Ee),Ue=$e.bind(null,xe,Ee),Xe=function(){(function(nt){if(nt.parentNode===null)return!1;nt.parentNode.removeChild(nt)})(xe)};return Ue(ue),function(nt){if(nt){if(nt.css===ue.css&&nt.media===ue.media&&nt.sourceMap===ue.sourceMap)return;Ue(ue=nt)}else Xe()}}S.exports=function(ue,Ee){(Ee=Ee||{}).singleton||typeof Ee.singleton=="boolean"||(Ee.singleton=q());var xe=Ae(ue=ue||[],Ee);return function(Ue){if(Ue=Ue||[],Object.prototype.toString.call(Ue)==="[object Array]"){for(var Xe=0;Xe<xe.length;Xe++){var Pe=G(xe[Xe]);y[Pe].references--}for(var nt=Ae(Ue,Ee),Xt=0;Xt<xe.length;Xt++){var Le=G(xe[Xt]);y[Le].references===0&&(y[Le].updater(),y.splice(Le,1))}xe=nt}}}}},N={};function I(S){var P=N[S];if(P!==void 0)return P.exports;var C=N[S]={id:S,exports:{}};return E[S](C,C.exports,I),C.exports}I.n=S=>{var P=S&&S.__esModule?()=>S.default:()=>S;return I.d(P,{a:P}),P},I.d=(S,P)=>{for(var C in P)I.o(P,C)&&!I.o(S,C)&&Object.defineProperty(S,C,{enumerable:!0,get:P[C]})},I.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),I.o=(S,P)=>Object.prototype.hasOwnProperty.call(S,P),I.nc=void 0;var O={};return(()=>{I.d(O,{default:()=>cd});const S=function(){return function o(){o.called=!0}};class P{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=S(),this.off=S()}}const C=new Array(256).fill("").map((o,e)=>("0"+e.toString(16)).slice(-2));function F(){const o=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+C[o>>0&255]+C[o>>8&255]+C[o>>16&255]+C[o>>24&255]+C[e>>0&255]+C[e>>8&255]+C[e>>16&255]+C[e>>24&255]+C[t>>0&255]+C[t>>8&255]+C[t>>16&255]+C[t>>24&255]+C[n>>0&255]+C[n>>8&255]+C[n>>16&255]+C[n>>24&255]}const q={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function $(o,e){const t=q.get(e.priority);for(let n=0;n<o.length;n++)if(q.get(o[n].priority)<t)return void o.splice(n,0,e);o.push(e)}class y extends Error{constructor(e,t,n){super(function(i,r){const s=new WeakSet,a=(u,f)=>{if(typeof f=="object"&&f!==null){if(s.has(f))return`[object ${f.constructor.name}]`;s.add(f)}return f},c=r?` ${JSON.stringify(r,a)}`:"",d=ge(i);return i+c+d}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new y(e.message,t);throw n.stack=e.stack,n}}function G(o,e){console.warn(...le(o,e))}function Ae(o,e){console.error(...le(o,e))}function ge(o){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${o}`}function le(o,e){const t=ge(o);return e?[o,e,t]:[o,t]}const de="35.3.1",qe=typeof window=="object"?window:I.g;if(qe.CKEDITOR_VERSION)throw new y("ckeditor-duplicated-modules",null);qe.CKEDITOR_VERSION=de;const $e=Symbol("listeningTo"),rt=Symbol("emitterId"),mt=Symbol("delegations");function w(o){return class extends o{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let i=!1;this.listenTo(this,e,(r,...s)=>{i||(i=!0,r.off(),t.call(this,r,...s))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,i={}){let r,s;this[$e]||(this[$e]={});const a=this[$e];xe(e)||Ee(e);const c=xe(e);(r=a[c])||(r=a[c]={emitter:e,callbacks:{}}),(s=r.callbacks[t])||(s=r.callbacks[t]=[]),s.push(n),function(d,u,f,m,_){u._addEventListener?u._addEventListener(f,m,_):d._addEventListener.call(u,f,m,_)}(this,e,t,n,i)}stopListening(e,t,n){const i=this[$e];let r=e&&xe(e);const s=i&&r?i[r]:void 0,a=s&&t?s.callbacks[t]:void 0;if(!(!i||e&&!s||t&&!a))if(n)Xt(this,e,t,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[t]:Xt(this,e,t,n));else if(a){for(;n=a.pop();)Xt(this,e,t,n);delete s.callbacks[t]}else if(s){for(t in s.callbacks)this.stopListening(e,t);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[$e]}}fire(e,...t){try{const n=e instanceof P?e:new P(this,e),i=n.name;let r=Pe(this,i);if(n.path.push(this),r){const a=[n,...t];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[mt];if(s){const a=s.get(i),c=s.get("*");a&&nt(a,n,t),c&&nt(c,n,t)}return n.return}catch(n){y.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[mt]||(this[mt]=new Map),e.forEach(i=>{const r=this[mt].get(i);r?r.set(t,n):this[mt].set(i,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[mt])if(e)if(t){const n=this[mt].get(e);n&&n.delete(t)}else this[mt].delete(e);else this[mt].clear()}_addEventListener(e,t,n){(function(s,a){const c=Ue(s);if(c[a])return;let d=a,u=null;const f=[];for(;d!==""&&!c[d];)c[d]={callbacks:[],childEvents:[]},f.push(c[d]),u&&c[d].childEvents.push(u),u=d,d=d.substr(0,d.lastIndexOf(":"));if(d!==""){for(const m of f)m.callbacks=c[d].callbacks.slice();c[d].childEvents.push(u)}})(this,e);const i=Xe(this,e),r={callback:t,priority:q.get(n.priority)};for(const s of i)$(s,r)}_removeEventListener(e,t){const n=Xe(this,e);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==t&&(i.splice(r,1),r--)}}}const ue=w(Object);function Ee(o,e){o[rt]||(o[rt]=e||F())}function xe(o){return o[rt]}function Ue(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function Xe(o,e){const t=Ue(o)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const r=Xe(o,t.childEvents[i]);n=n.concat(r)}return n}function Pe(o,e){let t;return o._events&&(t=o._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Pe(o,e.substr(0,e.lastIndexOf(":"))):null}function nt(o,e,t){for(let[n,i]of o){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const r=new P(e.source,i);r.path=[...e.path],n.fire(r,...t)}}function Xt(o,e,t,n){e._removeEventListener?e._removeEventListener(t,n):o._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{w[o]=ue.prototype[o]});const Le=function(o){var e=typeof o;return o!=null&&(e=="object"||e=="function")},Ln=Symbol("observableProperties"),Qn=Symbol("boundObservables"),_o=Symbol("boundProperties"),ui=Symbol("decoratedMethods"),ur=Symbol("decoratedOriginal");function Vt(o){return class extends o{set(e,t){if(Le(e))return void Object.keys(e).forEach(i=>{this.set(i,e[i])},this);On(this);const n=this[Ln];if(e in this&&!n.has(e))throw new y("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(i){const r=n.get(e);let s=this.fire(`set:${e}`,e,i,r);s===void 0&&(s=i),r===s&&n.has(e)||(n.set(e,s),this.fire(`change:${e}`,e,s,r))}}),this[e]=t}bind(...e){if(!e.length||!ms(e))throw new y("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new y("observable-bind-duplicate-properties",this);On(this);const t=this[_o];e.forEach(i=>{if(t.has(i))throw new y("observable-bind-rebind",this)});const n=new Map;return e.forEach(i=>{const r={property:i,to:[]};t.set(i,r),n.set(i,r)}),{to:Ao,toMany:ps,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Ln])return;const t=this[_o],n=this[Qn];if(e.length){if(!ms(e))throw new y("observable-unbind-wrong-properties",this);e.forEach(i=>{const r=t.get(i);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),d=c[a];d.delete(r),d.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),t.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){On(this);const t=this[e];if(!t)throw new y("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,i)=>{n.return=t.apply(this,i)}),this[e]=function(...n){return this.fire(e,n)},this[e][ur]=t,this[ui]||(this[ui]=[]),this[ui].push(e)}stopListening(e,t,n){if(!e&&this[ui]){for(const i of this[ui])this[i]=this[i][ur];delete this[ui]}ue.prototype.stopListening.call(this,e,t,n)}}}const at=Vt(ue);function On(o){o[Ln]||(Object.defineProperty(o,Ln,{value:new Map}),Object.defineProperty(o,Qn,{value:new Map}),Object.defineProperty(o,_o,{value:new Map}))}function Ao(...o){const e=function(...r){if(!r.length)throw new y("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new y("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new y("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new y("observable-bind-to-extra-callback",this);var i;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new y("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(r=>{const s=i[Qn];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,d)=>{a=s.get(r.observable)[d],a&&a.forEach(u=>{Co(i,u.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(d=>{s=d.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([d.observable,s]),function(u,f,m,_){const x=u[Qn],D=x.get(m),B=D||{};B[_]||(B[_]=new Set),B[_].add(f),D||x.set(m,B)}(r._observable,a,d.observable,s)})})}(this),this._bindProperties.forEach(r=>{Co(this._observable,r)})}function ps(o,e,t){if(this._bindings.size>1)throw new y("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,e),t)}function ms(o){return o.every(e=>typeof e=="string")}function Co(o,e){const t=o[_o].get(e);let n;t.callback?n=t.callback.apply(o,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,e)?o[e]=n:o.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Vt[o]=at.prototype[o]});class oe extends at{constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",hn,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",hn),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function hn(o){o.return=!1,o.stop()}class Ie extends at{constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",ks,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",ks),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function ks(o){o.return=!1,o.stop()}class bs extends Ie{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){$(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const sn=typeof rs=="object"&&rs&&rs.Object===Object&&rs;var ji=typeof self=="object"&&self&&self.Object===Object&&self;const Bt=sn||ji||Function("return this")(),he=Bt.Symbol;var Pt=Object.prototype,oc=Pt.hasOwnProperty,rc=Pt.toString,Fi=he?he.toStringTag:void 0;const ws=function(o){var e=oc.call(o,Fi),t=o[Fi];try{o[Fi]=void 0;var n=!0}catch{}var i=rc.call(o);return n&&(e?o[Fi]=t:delete o[Fi]),i};var _s=Object.prototype.toString;const Vi=function(o){return _s.call(o)};var gn=he?he.toStringTag:void 0;const Ht=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":gn&&gn in Object(o)?ws(o):Vi(o)},Zn=function(o,e){return function(t){return o(e(t))}},hr=Zn(Object.getPrototypeOf,Object),Lt=function(o){return o!=null&&typeof o=="object"};var As=Function.prototype,Cs=Object.prototype,vs=As.toString,hi=Cs.hasOwnProperty,Hi=vs.call(Object);const Ot=function(o){if(!Lt(o)||Ht(o)!="[object Object]")return!1;var e=hr(o);if(e===null)return!0;var t=hi.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&vs.call(t)==Hi},ys=function(){this.__data__=[],this.size=0},xt=function(o,e){return o===e||o!=o&&e!=e},Ct=function(o,e){for(var t=o.length;t--;)if(xt(o[t][0],e))return t;return-1};var gr=Array.prototype.splice;const sc=function(o){var e=this.__data__,t=Ct(e,o);return!(t<0)&&(t==e.length-1?e.pop():gr.call(e,t,1),--this.size,!0)},xs=function(o){var e=this.__data__,t=Ct(e,o);return t<0?void 0:e[t][1]},Es=function(o){return Ct(this.__data__,o)>-1},gi=function(o,e){var t=this.__data__,n=Ct(t,o);return n<0?(++this.size,t.push([o,e])):t[n][1]=e,this};function an(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}an.prototype.clear=ys,an.prototype.delete=sc,an.prototype.get=xs,an.prototype.has=Es,an.prototype.set=gi;const vo=an,ac=function(){this.__data__=new vo,this.size=0},fr=function(o){var e=this.__data__,t=e.delete(o);return this.size=e.size,t},yo=function(o){return this.__data__.get(o)},cc=function(o){return this.__data__.has(o)},Jn=function(o){if(!Le(o))return!1;var e=Ht(o);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},pr=Bt["__core-js_shared__"];var mr=function(){var o=/[^.]+$/.exec(pr&&pr.keys&&pr.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const lc=function(o){return!!mr&&mr in o};var dc=Function.prototype.toString;const zn=function(o){if(o!=null){try{return dc.call(o)}catch{}try{return o+""}catch{}}return""};var uc=/^\[object .+?Constructor\]$/,fi=Function.prototype,Ds=Object.prototype,kr=fi.toString,br=Ds.hasOwnProperty,xo=RegExp("^"+kr.call(br).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Ts=function(o){return!(!Le(o)||lc(o))&&(Jn(o)?xo:uc).test(zn(o))},hc=function(o,e){return o==null?void 0:o[e]},Rn=function(o,e){var t=hc(o,e);return Ts(t)?t:void 0},Ui=Rn(Bt,"Map"),_n=Rn(Object,"create"),Ss=function(){this.__data__=_n?_n(null):{},this.size=0},Is=function(o){var e=this.has(o)&&delete this.__data__[o];return this.size-=e?1:0,e};var Ms=Object.prototype.hasOwnProperty;const Ns=function(o){var e=this.__data__;if(_n){var t=e[o];return t==="__lodash_hash_undefined__"?void 0:t}return Ms.call(e,o)?e[o]:void 0};var gc=Object.prototype.hasOwnProperty;const wr=function(o){var e=this.__data__;return _n?e[o]!==void 0:gc.call(e,o)},fc=function(o,e){var t=this.__data__;return this.size+=this.has(o)?0:1,t[o]=_n&&e===void 0?"__lodash_hash_undefined__":e,this};function pi(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}pi.prototype.clear=Ss,pi.prototype.delete=Is,pi.prototype.get=Ns,pi.prototype.has=wr,pi.prototype.set=fc;const _r=pi,Bs=function(){this.size=0,this.__data__={hash:new _r,map:new(Ui||vo),string:new _r}},Ar=function(o){var e=typeof o;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?o!=="__proto__":o===null},qi=function(o,e){var t=o.__data__;return Ar(e)?t[typeof e=="string"?"string":"hash"]:t.map},Ut=function(o){var e=qi(this,o).delete(o);return this.size-=e?1:0,e},mi=function(o){return qi(this,o).get(o)},Eo=function(o){return qi(this,o).has(o)},pc=function(o,e){var t=qi(this,o),n=t.size;return t.set(o,e),this.size+=t.size==n?0:1,this};function ki(o){var e=-1,t=o==null?0:o.length;for(this.clear();++e<t;){var n=o[e];this.set(n[0],n[1])}}ki.prototype.clear=Bs,ki.prototype.delete=Ut,ki.prototype.get=mi,ki.prototype.has=Eo,ki.prototype.set=pc;const bi=ki,Ps=function(o,e){var t=this.__data__;if(t instanceof vo){var n=t.__data__;if(!Ui||n.length<199)return n.push([o,e]),this.size=++t.size,this;t=this.__data__=new bi(n)}return t.set(o,e),this.size=t.size,this};function An(o){var e=this.__data__=new vo(o);this.size=e.size}An.prototype.clear=ac,An.prototype.delete=fr,An.prototype.get=yo,An.prototype.has=cc,An.prototype.set=Ps;const wi=An,mc=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n&&e(o[t],t,o)!==!1;);return o},Do=function(){try{var o=Rn(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Yt=function(o,e,t){e=="__proto__"&&Do?Do(o,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):o[e]=t};var Ls=Object.prototype.hasOwnProperty;const Xn=function(o,e,t){var n=o[e];Ls.call(o,e)&&xt(n,t)&&(t!==void 0||e in o)||Yt(o,e,t)},_i=function(o,e,t,n){var i=!t;t||(t={});for(var r=-1,s=e.length;++r<s;){var a=e[r],c=n?n(t[a],o[a],a,t,o):void 0;c===void 0&&(c=o[a]),i?Yt(t,a,c):Xn(t,a,c)}return t},kc=function(o,e){for(var t=-1,n=Array(o);++t<o;)n[t]=e(t);return n},jn=function(o){return Lt(o)&&Ht(o)=="[object Arguments]"};var Fn=Object.prototype,Cr=Fn.hasOwnProperty,bc=Fn.propertyIsEnumerable;const To=jn(function(){return arguments}())?jn:function(o){return Lt(o)&&Cr.call(o,"callee")&&!bc.call(o,"callee")},Et=Array.isArray,Wi=function(){return!1};var vr=b&&!b.nodeType&&b,So=vr&&!0&&g&&!g.nodeType&&g,Os=So&&So.exports===vr?Bt.Buffer:void 0;const Ai=(Os?Os.isBuffer:void 0)||Wi;var wc=/^(?:0|[1-9]\d*)$/;const yr=function(o,e){var t=typeof o;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&wc.test(o))&&o>-1&&o%1==0&&o<e},Io=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var et={};et["[object Float32Array]"]=et["[object Float64Array]"]=et["[object Int8Array]"]=et["[object Int16Array]"]=et["[object Int32Array]"]=et["[object Uint8Array]"]=et["[object Uint8ClampedArray]"]=et["[object Uint16Array]"]=et["[object Uint32Array]"]=!0,et["[object Arguments]"]=et["[object Array]"]=et["[object ArrayBuffer]"]=et["[object Boolean]"]=et["[object DataView]"]=et["[object Date]"]=et["[object Error]"]=et["[object Function]"]=et["[object Map]"]=et["[object Number]"]=et["[object Object]"]=et["[object RegExp]"]=et["[object Set]"]=et["[object String]"]=et["[object WeakMap]"]=!1;const _c=function(o){return Lt(o)&&Io(o.length)&&!!et[Ht(o)]},xr=function(o){return function(e){return o(e)}};var zs=b&&!b.nodeType&&b,$i=zs&&!0&&g&&!g.nodeType&&g,Er=$i&&$i.exports===zs&&sn.process;const Ci=function(){try{var o=$i&&$i.require&&$i.require("util").types;return o||Er&&Er.binding&&Er.binding("util")}catch{}}();var Dr=Ci&&Ci.isTypedArray;const Gi=Dr?xr(Dr):_c;var Rs=Object.prototype.hasOwnProperty;const Mo=function(o,e){var t=Et(o),n=!t&&To(o),i=!t&&!n&&Ai(o),r=!t&&!n&&!i&&Gi(o),s=t||n||i||r,a=s?kc(o.length,String):[],c=a.length;for(var d in o)!e&&!Rs.call(o,d)||s&&(d=="length"||i&&(d=="offset"||d=="parent")||r&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||yr(d,c))||a.push(d);return a};var js=Object.prototype;const No=function(o){var e=o&&o.constructor;return o===(typeof e=="function"&&e.prototype||js)},Tr=Zn(Object.keys,Object);var Ac=Object.prototype.hasOwnProperty;const Cc=function(o){if(!No(o))return Tr(o);var e=[];for(var t in Object(o))Ac.call(o,t)&&t!="constructor"&&e.push(t);return e},Bo=function(o){return o!=null&&Io(o.length)&&!Jn(o)},ei=function(o){return Bo(o)?Mo(o):Cc(o)},Fs=function(o,e){return o&&_i(e,ei(e),o)},Sr=function(o){var e=[];if(o!=null)for(var t in Object(o))e.push(t);return e};var vc=Object.prototype.hasOwnProperty;const yc=function(o){if(!Le(o))return Sr(o);var e=No(o),t=[];for(var n in o)(n!="constructor"||!e&&vc.call(o,n))&&t.push(n);return t},vi=function(o){return Bo(o)?Mo(o,!0):yc(o)},l=function(o,e){return o&&_i(e,vi(e),o)};var h=b&&!b.nodeType&&b,p=h&&!0&&g&&!g.nodeType&&g,k=p&&p.exports===h?Bt.Buffer:void 0,A=k?k.allocUnsafe:void 0;const v=function(o,e){if(e)return o.slice();var t=o.length,n=A?A(t):new o.constructor(t);return o.copy(n),n},T=function(o,e){var t=-1,n=o.length;for(e||(e=Array(n));++t<n;)e[t]=o[t];return e},j=function(o,e){for(var t=-1,n=o==null?0:o.length,i=0,r=[];++t<n;){var s=o[t];e(s,t,o)&&(r[i++]=s)}return r},z=function(){return[]};var W=Object.prototype.propertyIsEnumerable,Y=Object.getOwnPropertySymbols;const te=Y?function(o){return o==null?[]:(o=Object(o),j(Y(o),function(e){return W.call(o,e)}))}:z,K=function(o,e){return _i(o,te(o),e)},X=function(o,e){for(var t=-1,n=e.length,i=o.length;++t<n;)o[i+t]=e[t];return o},fe=Object.getOwnPropertySymbols?function(o){for(var e=[];o;)X(e,te(o)),o=hr(o);return e}:z,De=function(o,e){return _i(o,fe(o),e)},pe=function(o,e,t){var n=e(o);return Et(o)?n:X(n,t(o))},lt=function(o){return pe(o,ei,te)},ut=function(o){return pe(o,vi,fe)},zt=Rn(Bt,"DataView"),Ve=Rn(Bt,"Promise"),Ce=Rn(Bt,"Set"),Dt=Rn(Bt,"WeakMap");var Ne="[object Map]",it="[object Promise]",yi="[object Set]",Ki="[object WeakMap]",qt="[object DataView]",ti=zn(zt),ni=zn(Ui),Wt=zn(Ve),Vn=zn(Ce),en=zn(Dt),$t=Ht;(zt&&$t(new zt(new ArrayBuffer(1)))!=qt||Ui&&$t(new Ui)!=Ne||Ve&&$t(Ve.resolve())!=it||Ce&&$t(new Ce)!=yi||Dt&&$t(new Dt)!=Ki)&&($t=function(o){var e=Ht(o),t=e=="[object Object]"?o.constructor:void 0,n=t?zn(t):"";if(n)switch(n){case ti:return qt;case ni:return Ne;case Wt:return it;case Vn:return yi;case en:return Ki}return e});const xi=$t;var ii=Object.prototype.hasOwnProperty;const Ir=function(o){var e=o.length,t=new o.constructor(e);return e&&typeof o[0]=="string"&&ii.call(o,"index")&&(t.index=o.index,t.input=o.input),t},Oe=Bt.Uint8Array,Cn=function(o){var e=new o.constructor(o.byteLength);return new Oe(e).set(new Oe(o)),e},Vs=function(o,e){var t=e?Cn(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.byteLength)};var Mr=/\w*$/;const xc=function(o){var e=new o.constructor(o.source,Mr.exec(o));return e.lastIndex=o.lastIndex,e};var Yi=he?he.prototype:void 0,Hs=Yi?Yi.valueOf:void 0;const Us=function(o){return Hs?Object(Hs.call(o)):{}},qs=function(o,e){var t=e?Cn(o.buffer):o.buffer;return new o.constructor(t,o.byteOffset,o.length)},Ec=function(o,e,t){var n=o.constructor;switch(e){case"[object ArrayBuffer]":return Cn(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return Vs(o,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return qs(o,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return xc(o);case"[object Symbol]":return Us(o)}};var Ws=Object.create;const Po=function(){function o(){}return function(e){if(!Le(e))return{};if(Ws)return Ws(e);o.prototype=e;var t=new o;return o.prototype=void 0,t}}(),$s=function(o){return typeof o.constructor!="function"||No(o)?{}:Po(hr(o))},Dc=function(o){return Lt(o)&&xi(o)=="[object Map]"};var Gs=Ci&&Ci.isMap;const Qi=Gs?xr(Gs):Dc,Tc=function(o){return Lt(o)&&xi(o)=="[object Set]"};var Lo=Ci&&Ci.isSet;const vn=Lo?xr(Lo):Tc;var fn="[object Arguments]",Nr="[object Function]",Ks="[object Object]",Ge={};Ge[fn]=Ge["[object Array]"]=Ge["[object ArrayBuffer]"]=Ge["[object DataView]"]=Ge["[object Boolean]"]=Ge["[object Date]"]=Ge["[object Float32Array]"]=Ge["[object Float64Array]"]=Ge["[object Int8Array]"]=Ge["[object Int16Array]"]=Ge["[object Int32Array]"]=Ge["[object Map]"]=Ge["[object Number]"]=Ge["[object Object]"]=Ge["[object RegExp]"]=Ge["[object Set]"]=Ge["[object String]"]=Ge["[object Symbol]"]=Ge["[object Uint8Array]"]=Ge["[object Uint8ClampedArray]"]=Ge["[object Uint16Array]"]=Ge["[object Uint32Array]"]=!0,Ge["[object Error]"]=Ge[Nr]=Ge["[object WeakMap]"]=!1;const Br=function o(e,t,n,i,r,s){var a,c=1&t,d=2&t,u=4&t;if(n&&(a=r?n(e,i,r,s):n(e)),a!==void 0)return a;if(!Le(e))return e;var f=Et(e);if(f){if(a=Ir(e),!c)return T(e,a)}else{var m=xi(e),_=m==Nr||m=="[object GeneratorFunction]";if(Ai(e))return v(e,c);if(m==Ks||m==fn||_&&!r){if(a=d||_?{}:$s(e),!c)return d?De(e,l(a,e)):K(e,Fs(a,e))}else{if(!Ge[m])return r?e:{};a=Ec(e,m,c)}}s||(s=new wi);var x=s.get(e);if(x)return x;s.set(e,a),vn(e)?e.forEach(function(B){a.add(o(B,t,n,B,e,s))}):Qi(e)&&e.forEach(function(B,R){a.set(R,o(B,t,n,R,e,s))});var D=f?void 0:(u?d?ut:lt:d?vi:ei)(e);return mc(D||e,function(B,R){D&&(B=e[R=B]),Xn(a,R,o(B,t,n,R,e,s))}),a},We=function(o,e){return Br(o,5,e=typeof e=="function"?e:void 0)},cn=function(o){return Lt(o)&&o.nodeType===1&&!Ot(o)};class tn{constructor(e,t){this._config={},t&&this.define(nn(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(Ot(t))return void this._setObjectToTarget(e,t,i);const r=t.split(".");t=r.pop();for(const s of r)Ot(e[s])||(e[s]={}),e=e[s];if(Ot(n))return Ot(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!Ot(e[i])){e=null;break}e=e[i]}return e?nn(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function nn(o){return We(o,Pr)}function Pr(o){return cn(o)?o:void 0}function Gt(o){return!(!o||!o[Symbol.iterator])}class ln extends ue{constructor(e={},t={}){super();const n=Gt(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new y("collection-add-item-invalid-index",this);let n=0;for(const i of e){const r=this._getItemIdBeforeAdding(i),s=t+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new y("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new y("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,r,s)=>{const a=t._bindToCollection==this,c=t._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const d=e(r);if(!d)return void this._skippedIndexesFromExternal.push(s);let u=s;for(const f of this._skippedIndexesFromExternal)s>f&&u--;for(const f of t._skippedIndexesFromExternal)u>=f&&u++;this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r),this.add(d,u);for(let f=0;f<t._skippedIndexesFromExternal.length;f++)u<=t._skippedIndexesFromExternal[f]&&t._skippedIndexesFromExternal[f]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,d)=>(s<d&&c.push(d-1),s>d&&c.push(d),c),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new y("collection-add-invalid-id",this);if(this.get(n))throw new y("collection-add-item-already-exists",this)}else e[t]=n=F();return n}_remove(e){let t,n,i,r=!1;const s=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),r=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],r=!i,i&&(n=i[s])):(i=e,n=i[s],t=this._items.indexOf(i),r=t==-1||!this._itemMap.get(n)),r)throw new y("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}class Ys extends ue{constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new y("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,r=this._context;(function x(D,B=new Set){D.forEach(R=>{c(R)&&(B.has(R)||(B.add(R),R.pluginName&&!i._availablePlugins.has(R.pluginName)&&i._availablePlugins.set(R.pluginName,R),R.requires&&x(R.requires,B)))})})(e),m(e);const s=[...function x(D,B=new Set){return D.map(R=>c(R)?R:i._availablePlugins.get(R)).reduce((R,U)=>B.has(U)?R:(B.add(U),U.requires&&(m(U.requires,U),x(U.requires,B).forEach(J=>R.add(J))),R.add(U)),new Set)}(e.filter(x=>!u(x,t)))];(function(x,D){for(const B of D){if(typeof B!="function")throw new y("plugincollection-replace-plugin-invalid-type",null,{pluginItem:B});const R=B.pluginName;if(!R)throw new y("plugincollection-replace-plugin-missing-name",null,{pluginItem:B});if(B.requires&&B.requires.length)throw new y("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:R});const U=i._availablePlugins.get(R);if(!U)throw new y("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:R});const J=x.indexOf(U);if(J===-1){if(i._contextPlugins.has(U))return;throw new y("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:R})}if(U.requires&&U.requires.length)throw new y("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:R});x.splice(J,1,B),i._availablePlugins.set(R,B)}})(s,n);const a=function(x){return x.map(D=>{let B=i._contextPlugins.get(D);return B=B||new D(r),i._add(D,B),B})}(s);return _(a,"init").then(()=>_(a,"afterInit")).then(()=>a);function c(x){return typeof x=="function"}function d(x){return c(x)&&x.isContextPlugin}function u(x,D){return D.some(B=>B===x||f(x)===B||f(B)===x)}function f(x){return c(x)?x.pluginName||x.name:x}function m(x,D=null){x.map(B=>c(B)?B:i._availablePlugins.get(B)||B).forEach(B=>{(function(R,U){if(!c(R))throw U?new y("plugincollection-soft-required",r,{missingPlugin:R,requiredBy:f(U)}):new y("plugincollection-plugin-not-found",r,{plugin:R})})(B,D),function(R,U){if(!!d(U)&&!d(R))throw new y("plugincollection-context-required",r,{plugin:f(R),requiredBy:f(U)})}(B,D),function(R,U){if(!!U&&!!u(R,t))throw new y("plugincollection-required",r,{plugin:f(R),requiredBy:f(U)})}(B,D)})}function _(x,D){return x.reduce((B,R)=>R[D]?i._contextPlugins.has(R)?B:B.then(R[D].bind(R)):B,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new y("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function kt(o){return Array.isArray(o)?o:[o]}let yn;try{yn={window,document}}catch{yn={window:{},document:{}}}const Te=yn;function Qs(o,e,t=1){if(typeof t!="number")throw new y("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Te.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(Te.window.CKEDITOR_TRANSLATIONS)[0]);const i=e.id||e.string;if(n===0||!function(c,d){return!!Te.window.CKEDITOR_TRANSLATIONS[c]&&!!Te.window.CKEDITOR_TRANSLATIONS[c].dictionary[d]}(o,i))return t!==1?e.plural:e.string;const r=Te.window.CKEDITOR_TRANSLATIONS[o].dictionary,s=Te.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(c=>c===1?0:1),a=r[i];return typeof a=="string"?a:a[Number(s(t))]}Te.window.CKEDITOR_TRANSLATIONS||(Te.window.CKEDITOR_TRANSLATIONS={});const Oo=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Zi(o){return Oo.includes(o)?"rtl":"ltr"}class Lr{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Zi(this.uiLanguage),this.contentLanguageDirection=Zi(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=kt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(Qs(this.uiLanguage,e,n),t)}}class Sc{constructor(e){this.config=new tn(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Ys(this,t);const n=this.config.get("language")||{};this.locale=new Lr({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new ln,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new y("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new y("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new y("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class oi extends at{constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class xn{is(){throw new Error("is() method is abstract")}}function vt(o,e){const t=Math.min(o.length,e.length);for(let n=0;n<t;n++)if(o[n]!=e[n])return n;return o.length==e.length?"same":o.length<e.length?"prefix":"extension"}const Zs=function(o){return Br(o,4)};class M extends w(xn){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new y("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=vt(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Zs(this);return delete e.parent,e}}M.prototype.is=function(o){return o==="node"||o==="view:node"};class L extends M{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof L&&(this===e||this.data===e.data)}_clone(){return new L(this.document,this.data)}}L.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class V extends xn{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new y("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new y("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function Z(o){return Gt(o)?new Map(o):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(o)}V.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class H{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=ee(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const r=ee(n,i);r&&t.push({element:n,pattern:i,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function ee(o,e){if(typeof e=="function")return e(o);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,o.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return Ot(n)?(n.style!==void 0&&G("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&G("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),ne(n,r,s=>i.getAttribute(s))}(e.attributes,o),!t.attributes)||e.classes&&(t.classes=function(n,i){return ne(n,i.getClassNames(),()=>{})}(e.classes,o),!t.classes)||e.styles&&(t.styles=function(n,i){return ne(n,i.getStyleNames(!0),r=>i.getStyle(r))}(e.styles,o),!t.styles)?null:t}function ne(o,e,t){const n=function(s){return Array.isArray(s)?s.map(a=>Ot(a)?(a.key!==void 0&&a.value!==void 0||G("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):Ot(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(e),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(d,u){return d===!0||d===u||d instanceof RegExp&&u.match(d)})(s,c)&&function(d,u,f){if(d===!0)return!0;const m=f(u);return d===m||d instanceof RegExp&&!!String(m).match(d)}(a,c,t)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const re=function(o){return typeof o=="symbol"||Lt(o)&&Ht(o)=="[object Symbol]"};var ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,we=/^\w*$/;const me=function(o,e){if(Et(o))return!1;var t=typeof o;return!(t!="number"&&t!="symbol"&&t!="boolean"&&o!=null&&!re(o))||we.test(o)||!ce.test(o)||e!=null&&o in Object(e)};function ke(o,e){if(typeof o!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],r=t.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return t.cache=r.set(i,s)||r,s};return t.cache=new(ke.Cache||bi),t}ke.Cache=bi;const Se=ke;var Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_e=/\\(\\)?/g,bt=function(o){var e=Se(o,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(o){var e=[];return o.charCodeAt(0)===46&&e.push(""),o.replace(Ke,function(t,n,i,r){e.push(i?r.replace(_e,"$1"):n||t)}),e});const Tt=bt,Qt=function(o,e){for(var t=-1,n=o==null?0:o.length,i=Array(n);++t<n;)i[t]=e(o[t],t,o);return i};var tt=he?he.prototype:void 0,Ei=tt?tt.toString:void 0;const Ji=function o(e){if(typeof e=="string")return e;if(Et(e))return Qt(e,o)+"";if(re(e))return Ei?Ei.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},Rt=function(o){return o==null?"":Ji(o)},Ic=function(o,e){return Et(o)?o:me(o,e)?[o]:Tt(Rt(o))},Mb=function(o){var e=o==null?0:o.length;return e?o[e-1]:void 0},Mc=function(o){if(typeof o=="string"||re(o))return o;var e=o+"";return e=="0"&&1/o==-1/0?"-0":e},Gd=function(o,e){for(var t=0,n=(e=Ic(e,o)).length;o!=null&&t<n;)o=o[Mc(e[t++])];return t&&t==n?o:void 0},Kd=function(o,e,t){var n=-1,i=o.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+e];return r},Nb=function(o,e){return e.length<2?o:Gd(o,Kd(e,0,-1))},Bb=function(o,e){return e=Ic(e,o),(o=Nb(o,e))==null||delete o[Mc(Mb(e))]},Pb=function(o,e){return o==null||Bb(o,e)},Js=function(o,e,t){var n=o==null?void 0:Gd(o,e);return n===void 0?t:n},Nc=function(o,e,t){(t!==void 0&&!xt(o[e],t)||t===void 0&&!(e in o))&&Yt(o,e,t)},Lb=function(o){return function(e,t,n){for(var i=-1,r=Object(e),s=n(e),a=s.length;a--;){var c=s[o?a:++i];if(t(r[c],c,r)===!1)break}return e}}(),Ob=function(o){return Lt(o)&&Bo(o)},Bc=function(o,e){if((e!=="constructor"||typeof o[e]!="function")&&e!="__proto__")return o[e]},zb=function(o){return _i(o,vi(o))},Rb=function(o,e,t,n,i,r,s){var a=Bc(o,t),c=Bc(e,t),d=s.get(c);if(d)Nc(o,t,d);else{var u=r?r(a,c,t+"",o,e,s):void 0,f=u===void 0;if(f){var m=Et(c),_=!m&&Ai(c),x=!m&&!_&&Gi(c);u=c,m||_||x?Et(a)?u=a:Ob(a)?u=T(a):_?(f=!1,u=v(c,!0)):x?(f=!1,u=qs(c,!0)):u=[]:Ot(c)||To(c)?(u=a,To(a)?u=zb(a):Le(a)&&!Jn(a)||(u=$s(c))):f=!1}f&&(s.set(c,u),i(u,c,n,r,s),s.delete(c)),Nc(o,t,u)}},jb=function o(e,t,n,i,r){e!==t&&Lb(t,function(s,a){if(r||(r=new wi),Le(s))Rb(e,t,a,n,o,i,r);else{var c=i?i(Bc(e,a),s,a+"",e,t,r):void 0;c===void 0&&(c=s),Nc(e,a,c)}},vi)},Xi=function(o){return o},Fb=function(o,e,t){switch(t.length){case 0:return o.call(e);case 1:return o.call(e,t[0]);case 2:return o.call(e,t[0],t[1]);case 3:return o.call(e,t[0],t[1],t[2])}return o.apply(e,t)};var Yd=Math.max;const Vb=function(o,e,t){return e=Yd(e===void 0?o.length-1:e,0),function(){for(var n=arguments,i=-1,r=Yd(n.length-e,0),s=Array(r);++i<r;)s[i]=n[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=n[i];return a[e]=t(s),Fb(o,this,a)}},Hb=function(o){return function(){return o}},Ub=Do?function(o,e){return Do(o,"toString",{configurable:!0,enumerable:!1,value:Hb(e),writable:!0})}:Xi;var qb=Date.now;const Wb=function(o){var e=0,t=0;return function(){var n=qb(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return o.apply(void 0,arguments)}}(Ub),$b=function(o,e){return Wb(Vb(o,e,Xi),o+"")},Gb=function(o,e,t){if(!Le(t))return!1;var n=typeof e;return!!(n=="number"?Bo(t)&&yr(e,t.length):n=="string"&&e in t)&&xt(t[e],o)},Qd=function(o){return $b(function(e,t){var n=-1,i=t.length,r=i>1?t[i-1]:void 0,s=i>2?t[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&Gb(t[0],t[1],s)&&(r=i<3?void 0:r,i=1),e=Object(e);++n<i;){var a=t[n];a&&o(e,a,n,r)}return e})},Zd=Qd(function(o,e,t){jb(o,e,t)}),Kb=function(o,e,t,n){if(!Le(o))return o;for(var i=-1,r=(e=Ic(e,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=Mc(e[i]),d=t;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var u=a[c];(d=n?n(u,c,a):void 0)===void 0&&(d=Le(u)?u:yr(e[i+1])?[]:{})}Xn(a,c,d),a=a[c]}return o},Yb=function(o,e,t){return o==null?o:Kb(o,e,t)};class Qb{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let d=0;d<n.length;d++){const u=n.charAt(d);if(i===null)switch(u){case":":a||(a=n.substr(r,d-r),s=d+1);break;case'"':case"'":i=u;break;case";":{const f=n.substr(s,d-s);a&&c.set(a.trim(),f.trim()),a=null,r=d+1;break}}else u===i&&(i=null)}return c}(e).entries());for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Le(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Pc(e);Pb(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Le(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=Js(this._styles,n);!i||!Array.from(Object.keys(i)).length&&this.remove(n)}}class Zb{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Le(t))Lc(n,Pc(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:r,value:s}=i(t);Lc(n,r,s)}else Lc(n,e,t)}getNormalized(e,t){if(!e)return Zd({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Js(t,n);const i=n(e,t);if(i)return i}return Js(t,Pc(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Pc(o){return o.replace("-",".")}function Lc(o,e,t){let n=t;Le(t)&&(n=Zd({},Js(o,e),t)),Yb(o,e,n)}class dn extends M{constructor(e,t,n,i){if(super(e),this.name=t,this._attrs=function(r){const s=Z(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Jd(this._classes,r),this._attrs.delete("class")}this._styles=new Qb(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof dn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new H(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new L(r,s)]:(Gt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new L(r,a):a instanceof V?new L(r,a.data):a))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?Jd(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of kt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of kt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Ot(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of kt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Jd(o,e){const t=e.split(/\s+/);o.clear(),t.forEach(n=>o.add(n))}dn.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Or extends dn{constructor(...e){super(...e),this.getFillerOffset=Xd}}function Xd(){const o=[...this.getChildren()],e=o[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of o)if(!t.is("uiElement"))return null;return this.childCount}Or.prototype.is=function(o,e){return e?e===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Xs extends Vt(Or){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Xs.prototype.is=function(o,e){return e?e===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const eu=Symbol("rootName");class tu extends Xs{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(eu)}set rootName(e){this._setCustomProperty(eu,e)}set _name(e){this.name=e}}tu.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class eo{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new y("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new y("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=se._createAt(e.startPosition):this.position=se._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,i;do i=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof L){if(e.isAtEnd)return this.position=se._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof dn)return this.shallow?e.offset++:e=new se(i,0),this.position=e,this._formatReturnValue("elementStart",i,t,e,1);if(i instanceof L){if(this.singleCharacters)return e=new se(i,0),this.position=e,this._next();{let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new V(i,0,s),e=se._createAfter(r)):(r=new V(i,0,i.data.length),e.offset++),this.position=e,this._formatReturnValue("text",r,t,e,s)}}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const s=new V(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",s,t,e,r)}return e=se._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof L){if(e.isAtStart)return this.position=se._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof dn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new se(i,i.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof L){if(this.singleCharacters)return e=new se(i,i.data.length),this.position=e,this._previous();{let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new V(i,a,i.data.length-a),s=r.data.length,e=se._createBefore(r)}else r=new V(i,0,i.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",r,t,e,s)}}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-a}e.offset-=r;const s=new V(n,e.offset,r);return this.position=e,this._formatReturnValue("text",s,t,e,r)}return e=se._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,r){return t instanceof V&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=se._createAfter(t.textNode):(i=se._createAfter(t.textNode),this.position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=se._createBefore(t.textNode):(i=se._createBefore(t.textNode),this.position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:r}}}}class se extends xn{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Xs);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=se._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new eo(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=vt(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new eo(e)}clone(){return new se(this.parent,this.offset)}static _createAt(e,t){if(e instanceof se)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new y("view-createpositionat-offset-required",n)}return new se(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new se(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new y("view-position-after-root",e,{root:e});return new se(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new se(e.textNode,e.offsetInText);if(!e.parent)throw new y("view-position-before-root",e,{root:e});return new se(e.parent,e.index)}}se.prototype.is=function(o){return o==="position"||o==="view:position"};class ve extends xn{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new eo({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(ea,{direction:"backward"}),t=this.end.getLastMatchingPosition(ea);return e.parent.is("$text")&&e.isAtStart&&(e=se._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=se._createAfter(t.parent)),new ve(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(ea);if(e.isAfter(this.end)||e.isEqual(this.end))return new ve(e,e);let t=this.end.getLastMatchingPosition(ea,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new se(n,0)),i&&i.is("$text")&&(t=new se(i,i.data.length)),new ve(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ve(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ve(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ve(t,n)}return null}getWalker(e={}){return e.boundaries=this,new eo(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new ve(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new eo(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new eo(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new se(e,t),new se(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(se._createBefore(e),t)}}function ea(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}function Oc(o){let e=0;for(const t of o)e++;return e}ve.prototype.is=function(o){return o==="range"||o==="view:range"};class Hn extends w(xn){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Oc(this.getRanges());if(t!=Oc(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(i);else if(t instanceof Hn||t instanceof zc)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof ve)this._setRanges([t],i&&i.backward),this._setFakeOptions(i);else if(t instanceof se)this._setRanges([new ve(t)]),this._setFakeOptions(i);else if(t instanceof M){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new y("view-selection-setto-required-second-parameter",this);s=n=="in"?ve._createIn(t):n=="on"?ve._createOn(t):new ve(se._createAt(t,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!Gt(t))throw new y("view-selection-setto-not-selectable",this);this._setRanges(t,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new y("view-selection-setfocus-no-ranges",this);const n=se._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new ve(n,i),!0):this._addRange(new ve(i,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof ve))throw new y("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new y("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new ve(e.start,e.end))}}Hn.prototype.is=function(o){return o==="selection"||o==="view:selection"};class zc extends w(xn){constructor(...e){super(),this._selection=new Hn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}zc.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class zo extends P{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Rc=Symbol("bubbling contexts");function jc(o){return class extends o{fire(e,...t){try{const n=e instanceof P?e:new P(this,e),i=Fc(this);if(!i.size)return;if(zr(n,"capturing",this),Ro(i,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&Boolean(nu(i,s));let c=s||function(d){if(!d)return null;const u=d.start.parent,f=d.end.parent,m=u.getPath(),_=f.getPath();return m.length>_.length?u:f}(r);if(zr(n,"atTarget",c),!a){if(Ro(i,"$text",n,...t))return n.return;zr(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(Ro(i,"$root",n,...t))return n.return}else if(c.is("element")&&Ro(i,c.name,n,...t))return n.return;if(Ro(i,c,n,...t))return n.return;c=c.parent,zr(n,"bubbling",c)}return zr(n,"bubbling",this),Ro(i,"$document",n,...t),n.return}catch(n){y.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const i=kt(n.context||"$document"),r=Fc(this);for(const s of i){let a=r.get(s);a||(a=new ue,r.set(s,a)),this.listenTo(a,e,t,n)}}_removeEventListener(e,t){const n=Fc(this);for(const i of n.values())this.stopListening(i,e,t)}}}{const o=jc(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{jc[e]=o.prototype[e]})}function zr(o,e,t){o instanceof zo&&(o._eventPhase=e,o._currentTarget=t)}function Ro(o,e,t,...n){const i=typeof e=="string"?o.get(e):nu(o,e);return!!i&&(i.fire(t,...n),t.stop.called)}function nu(o,e){for(const[t,n]of o)if(typeof t=="function"&&t(e))return n;return null}function Fc(o){return o[Rc]||(o[Rc]=new Map),o[Rc]}class ta extends jc(at){constructor(e){super(),this.selection=new zc,this.roots=new ln({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class to extends dn{constructor(...e){super(...e),this.getFillerOffset=Jb,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new y("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Jb(){if(Vc(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Vc(o)>1)return null;o=o.parent}return!o||Vc(o)>1?null:this.childCount}function Vc(o){return Array.from(o.getChildren()).filter(e=>!e.is("uiElement")).length}to.DEFAULT_PRIORITY=10,to.prototype.is=function(o,e){return e?e===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Hc extends dn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=Xb}_insertChild(e,t){if(t&&(t instanceof M||Array.from(t).length>0))throw new y("view-emptyelement-cannot-add",[this,t]);return 0}}function Xb(){return null}Hc.prototype.is=function(o,e){return e?e===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const no=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),ew={isMac:iu(no),isWindows:function(o){return o.indexOf("windows")>-1}(no),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(no),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(no),isiOS:function(o){return!!o.match(/iphone|ipad/i)||iu(o)&&navigator.maxTouchPoints>0}(no),isAndroid:function(o){return o.indexOf("android")>-1}(no),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(no),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}},Me=ew;function iu(o){return o.indexOf("macintosh")>-1}const tw={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},nw={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Re=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);o[t.toLowerCase()]=e}for(let e=48;e<=57;e++)o[e-48]=e;for(let e=112;e<=123;e++)o["f"+(e-111)]=e;for(const e of"`-=[];',./\\")o[e]=e.charCodeAt(0);return o}(),iw=Object.fromEntries(Object.entries(Re).map(([o,e])=>[e,o.charAt(0).toUpperCase()+o.slice(1)]));function jo(o){let e;if(typeof o=="string"){if(e=Re[o.toLowerCase()],!e)throw new y("keyboard-unknown-key",null,{key:o})}else e=o.keyCode+(o.altKey?Re.alt:0)+(o.ctrlKey?Re.ctrl:0)+(o.shiftKey?Re.shift:0)+(o.metaKey?Re.cmd:0);return e}function Uc(o){return typeof o=="string"&&(o=function(e){return e.split("+").map(t=>t.trim())}(o)),o.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return jo(t.slice(0,-1));const n=jo(t);return Me.isMac&&n==Re.ctrl?Re.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function ou(o){let e=Uc(o);return Object.entries(Me.isMac?tw:nw).reduce((t,[n,i])=>((e&Re[n])!=0&&(e&=~Re[n],t+=i),t),"")+(e?iw[e]:"")}function qc(o,e){const t=e==="ltr";switch(o){case Re.arrowleft:return t?"left":"right";case Re.arrowright:return t?"right":"left";case Re.arrowup:return"up";case Re.arrowdown:return"down"}}class na extends dn{constructor(...e){super(...e),this.getFillerOffset=rw}_insertChild(e,t){if(t&&(t instanceof M||Array.from(t).length>0))throw new y("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function ow(o){o.document.on("arrowKey",(e,t)=>function(n,i,r){if(i.keyCode==Re.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,d=s.focusOffset,u=r.domPositionToView(c,d);if(u===null)return;let f=!1;const m=u.getLastMatchingPosition(_=>(_.item.is("uiElement")&&(f=!0),!(!_.item.is("uiElement")&&!_.item.is("attributeElement"))));if(f){const _=r.viewPositionToDom(m);a?s.collapse(_.parent,_.offset):s.extend(_.parent,_.offset)}}}}(0,t,o.domConverter),{priority:"low"})}function rw(){return null}na.prototype.is=function(o,e){return e?e===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Wc extends dn{constructor(...e){super(...e),this.getFillerOffset=sw}_insertChild(e,t){if(t&&(t instanceof M||Array.from(t).length>0))throw new y("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function sw(){return null}Wc.prototype.is=function(o,e){return e?e===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class io extends w(xn){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new L(r,s)]:(Gt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new L(r,a):a instanceof V?new L(r,a.data):a))}(this.document,t);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}io.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class ru{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new io(this.document,e)}createText(e){return new L(this.document,e)}createAttributeElement(e,t,n={}){const i=new to(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let r=null;Ot(n)?i=n:r=n;const s=new Or(this.document,e,t,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(e,t,n={}){const i=new Xs(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new Hc(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new na(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const r=new Wc(this.document,e,t);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ot(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof se?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new y("view-writer-break-non-container-element",this.document);if(!t.parent)throw new y("view-writer-break-root",this.document);if(e.isAtStart)return se._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(se._createAfter(t),n);const i=new ve(e,se._createAt(t,"end")),r=new se(n,0);this.move(i,r)}return se._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new se(s,a))}const i=n.getChild(t-1),r=n.getChild(t);if(!i||!r)return e;if(i.is("$text")&&r.is("$text"))return au(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new se(i,s))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new y("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),r=i instanceof L?se._createAt(i,"end"):se._createAt(t,"end");return this.move(ve._createIn(n),se._createAt(t,"end")),this.remove(ve._createOn(n)),r}insert(e,t){cu(t=Gt(t)?[...t]:[t],this.document);const n=t.reduce((s,a)=>{const c=s[s.length-1],d=!a.is("uiElement");return c&&c.breakAttributes==d?c.nodes.push(a):s.push({breakAttributes:d,nodes:[a]}),s},[]);let i=null,r=e;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new ve(i,r):new ve(e)}remove(e){const t=e instanceof ve?e:ve._createOn(e);if(Rr(t,this.document),t.isCollapsed)return new io(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const d of a)this._removeFromClonedElementsGroup(d);const c=this.mergeAttributes(n);return t.start=c,t.end=c.clone(),new io(this.document,a)}clear(e,t){Rr(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&t.isSimilar(r))s=ve._createOn(r);else if(!i.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&t.isSimilar(c));a&&(s=ve._createIn(a))}s&&(s.end.isAfter(e.end)&&(s.end=e.end),s.start.isBefore(e.start)&&(s.start=e.start),this.remove(s))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,r=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof to))throw new y("view-writer-wrap-invalid-attribute",this.document);if(Rr(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new ve(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof to))throw new y("view-writer-unwrap-invalid-attribute",this.document);if(Rr(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new ve(a,c)}rename(e,t){const n=new Or(this.document,e,t.getAttributes());return this.insert(se._createAfter(t),n),this.move(ve._createIn(t),se._createAt(n,0)),this.remove(ve._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return se._createAt(e,t)}createPositionAfter(e){return se._createAfter(e)}createPositionBefore(e){return se._createBefore(e)}createRange(...e){return new ve(...e)}createRangeOn(e){return ve._createOn(e)}createRangeIn(e){return ve._createIn(e)}createSelection(...e){return new Hn(...e)}createSlot(e){if(!this._slotFactory)throw new y("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,r;if(i=n?$c(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new y("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?Gc(e):e;const s=i._insertChild(r.offset,t);for(const u of t)this._addToClonedElementsGroup(u);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const d=this.mergeAttributes(a);return new ve(c,d)}_wrapChildren(e,t,n,i){let r=t;const s=[];for(;r<n;){const c=e.getChild(r),d=c.is("$text"),u=c.is("attributeElement");if(u&&this._wrapAttributeElement(i,c))s.push(new se(e,r));else if(d||!u||aw(i,c)){const f=i._clone();c._remove(),f._appendChild(c),e._insertChild(r,f),this._addToClonedElementsGroup(f),s.push(new se(e,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=t&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return ve._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let r=t;const s=[];for(;r<n;){const c=e.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const d=c.getChildren(),u=c.childCount;c._remove(),e._insertChild(r,d),this._removeFromClonedElementsGroup(c),s.push(new se(e,r),new se(e,r+u)),r+=u,n+=u-1}else this._unwrapAttributeElement(i,c)?(s.push(new se(e,r),new se(e,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==t||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return ve._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new ve(a,c)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return su(e.clone());e.parent.is("$text")&&(e=Gc(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new ve(e,e.getShiftedBy(1));this.wrap(i,t);const r=new se(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof L&&a instanceof L?au(s,a):su(r)}_wrapAttributeElement(e,t){if(!lu(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!lu(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(Rr(e,this.document),e.isCollapsed){const c=this._breakAttributes(e.start,t);return new ve(c,c)}const r=this._breakAttributes(i,t),s=r.parent.childCount,a=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-s,new ve(a,r)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new y("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new y("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new y("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&Kc(i.parent)||Kc(i))return e.clone();if(i.is("$text"))return this._breakAttributes(Gc(e),t);if(n==i.childCount){const r=new se(i.parent,i.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new se(i.parent,i.index);return this._breakAttributes(r,t)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const d=new se(i.parent,r);return this._breakAttributes(d,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function $c(o){let e=o.parent;for(;!Kc(e);){if(!e)return;e=e.parent}return e}function aw(o,e){return o.priority<e.priority||!(o.priority>e.priority)&&o.getIdentity()<e.getIdentity()}function su(o){const e=o.nodeBefore;if(e&&e.is("$text"))return new se(e,e.data.length);const t=o.nodeAfter;return t&&t.is("$text")?new se(t,0):o}function Gc(o){if(o.offset==o.parent.data.length)return new se(o.parent.parent,o.parent.index+1);if(o.offset===0)return new se(o.parent.parent,o.parent.index);const e=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new L(o.root.document,e)),new se(o.parent.parent,o.parent.index+1)}function au(o,e){const t=o.data.length;return o._data+=e.data,e._remove(),new se(o,t)}const cw=[L,to,Or,Hc,Wc,na];function cu(o,e){for(const t of o){if(!cw.some(n=>t instanceof n))throw new y("view-writer-insert-invalid-node-type",e);t.is("$text")||cu(t.getChildren(),e)}}function Kc(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Rr(o,e){const t=$c(o.start),n=$c(o.end);if(!t||!n||t!==n)throw new y("view-writer-invalid-range-container",e)}function lu(o,e){return o.id===null&&e.id===null}function ht(o){return Object.prototype.toString.call(o)=="[object Text]"}const du=o=>o.createTextNode("\xA0"),uu=o=>{const e=o.createElement("span");return e.dataset.ckeFiller="true",e.innerText="\xA0",e},hu=o=>{const e=o.createElement("br");return e.dataset.ckeFiller="true",e},ia="\u2060".repeat(7);function un(o){return ht(o)&&o.data.substr(0,7)===ia}function jr(o){return o.data.length==7&&un(o)}function gu(o){return un(o)?o.data.slice(7):o.data}function lw(o,e){if(e.keyCode==Re.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;un(n)&&i<=7&&t.collapse(n,0)}}}function fu(o,e,t,n=!1){t=t||function(a,c){return a===c};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(e)?e:Array.prototype.slice.call(e),s=function(a,c,d){const u=pu(a,c,d);if(u===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const f=mu(a,u),m=mu(c,u),_=pu(f,m,d),x=a.length-_,D=c.length-_;return{firstIndex:u,lastIndexOld:x,lastIndexNew:D}}(i,r,t);return n?function(a,c){const{firstIndex:d,lastIndexOld:u,lastIndexNew:f}=a;if(d===-1)return Array(c).fill("equal");let m=[];return d>0&&(m=m.concat(Array(d).fill("equal"))),f-d>0&&(m=m.concat(Array(f-d).fill("insert"))),u-d>0&&(m=m.concat(Array(u-d).fill("delete"))),f<c&&(m=m.concat(Array(c-f).fill("equal"))),m}(s,r.length):function(a,c){const d=[],{firstIndex:u,lastIndexOld:f,lastIndexNew:m}=c;return m-u>0&&d.push({index:u,type:"insert",values:a.slice(u,m)}),f-u>0&&d.push({index:u+(m-u),type:"delete",howMany:f-u}),d}(r,s)}function pu(o,e,t){for(let n=0;n<Math.max(o.length,e.length);n++)if(o[n]===void 0||e[n]===void 0||!t(o[n],e[n]))return n;return-1}function mu(o,e){return o.slice(e).reverse()}function Fr(o,e,t){t=t||function(D,B){return D===B};const n=o.length,i=e.length;if(n>200||i>200||n+i>300)return Fr.fastDiff(o,e,t,!0);let r,s;if(i<n){const D=o;o=e,e=D,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=e.length,d=c-a,u={},f={};function m(D){const B=(f[D-1]!==void 0?f[D-1]:-1)+1,R=f[D+1]!==void 0?f[D+1]:-1,U=B>R?-1:1;u[D+U]&&(u[D]=u[D+U].slice(0)),u[D]||(u[D]=[]),u[D].push(B>R?r:s);let J=Math.max(B,R),ae=J-D;for(;ae<a&&J<c&&t(o[ae],e[J]);)ae++,J++,u[D].push("equal");return J}let _,x=0;do{for(_=-x;_<d;_++)f[_]=m(_);for(_=d+x;_>d;_--)f[_]=m(_);f[d]=m(d),x++}while(f[d]!==c);return u[d].slice(1)}function ku(o,e,t){o.insertBefore(t,o.childNodes[e]||null)}function bu(o){const e=o.parentNode;e&&e.removeChild(o)}function Fo(o){return o&&o.nodeType===Node.COMMENT_NODE}function Di(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}Fr.fastDiff=fu;var dw=I(6062),ye=I.n(dw),wu=I(9315),uw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(wu.Z,uw),wu.Z.locals;class hw extends at{constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),Me.isBlink&&!Me.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new y("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!Me.isAndroid)return;let e=null;const t=!(Me.isBlink&&!Me.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=se._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;un(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=_u(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),i=this._diffNodeLists(t,n),r=this._findReplaceActions(i,t,n);if(r.indexOf("replace")!==-1){const s={equal:0,insert:0,delete:0};for(const a of r)if(a==="replace"){const c=s.equal+s.insert,d=s.equal+s.delete,u=e.getChild(c);!u||u.is("uiElement")||u.is("rawElement")||this._updateElementMappings(u,t[d]),bu(n[c]),s.equal++}else s[a]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?se._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&ht(t.parent)&&un(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!un(e))throw new y("view-renderer-filler-was-lost",this);jr(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,r=e.nodeAfter;return!(i instanceof L||r instanceof L)&&(!Me.isAndroid||!i&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let i=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(i=ia+i),vu(n,i)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),i=e.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(Me.isAndroid){let f=null;for(const m of Array.from(n.childNodes)){if(f&&ht(f)&&ht(m)){n.normalize();break}f=m}}const i=t.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&_u(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=Me.isAndroid?this._findReplaceActions(a,r,s,{replaceText:!0}):a;let d=0;const u=new Set;for(const f of c)f==="delete"?(u.add(r[d]),bu(r[d])):f!=="equal"&&f!=="replace"||d++;d=0;for(const f of c)f==="insert"?(ku(n,d,s[d]),d++):f==="replace"?(vu(r[d],s[d].data),d++):f==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[d])),d++);for(const f of u)f.parentNode||this.domConverter.unbindDomElement(f)}_diffNodeLists(e,t){return Fr(e=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(e,this._fakeSelectionContainer),t,gw.bind(null,this.domConverter))}_findReplaceActions(e,t,n,i={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const d of e)d==="insert"?a.push(n[c.equal+c.insert]):d==="delete"?s.push(t[c.equal+c.delete]):(r=r.concat(Fr(s,a,i.replaceText?Cu:Au).map(u=>u==="equal"?"replace":u)),r.push("equal"),s=[],a=[]),c[d]++;return r.concat(Fr(s,a,i.replaceText?Cu:Au).map(d=>d==="equal"?"replace":d))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(Me.isBlink&&!Me.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&Me.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const i=t.getSelection(),r=t.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(i.parent,i.offset),Me.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function _u(o,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(ht(i))return i.data=ia+i.data,i;{const r=o.createTextNode(ia);return Array.isArray(e)?n.splice(t,0,r):ku(e,t,r),r}}function Au(o,e){return Di(o)&&Di(e)&&!ht(o)&&!ht(e)&&!Fo(o)&&!Fo(e)&&o.tagName.toLowerCase()===e.tagName.toLowerCase()}function Cu(o,e){return Di(o)&&Di(e)&&ht(o)&&ht(e)}function gw(o,e,t){return e===t||(ht(e)&&ht(t)?e.data===t.data:!(!o.isBlockFiller(e)||!o.isBlockFiller(t)))}function vu(o,e){const t=o.data;if(t==e)return;const n=fu(t,e);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}function oa(o){let e=0;for(;o.previousSibling;)o=o.previousSibling,e++;return e}function yu(o){const e=[];let t=o;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const fw=hu(Te.document),pw=du(Te.document),mw=uu(Te.document),ra="data-ck-unsafe-attribute-",xu="data-ck-unsafe-element";class sa{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Te.document:Te.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new H,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Hn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const d of a){for(const f of d.getAttributeNames())this.setDomElementAttribute(d,f,d.getAttribute(f));const u=d.tagName.toLowerCase();this._shouldRenameElement(u)&&(Tu(u),d.replaceWith(this._createReplacementDomElement(u,d)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Tu(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const i of e.getAttributeKeys())this.setDomElementAttribute(n,i,e.getAttribute(i),e)}if(t.withChildren!==!1)for(const i of this.viewChildrenToDom(e,t))n.appendChild(i);return n}}setDomElementAttribute(e,t,n,i){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);r||G("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(ra+t)&&r&&e.removeAttribute(ra+t),e.setAttribute(r?t:ra+t,n)}removeDomElementAttribute(e,t){t!=xu&&(e.removeAttribute(t),e.removeAttribute(ra+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const r of e.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&r.getCustomProperty("dataPipeline:transparentRendering");s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(s&&G("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return un(n)&&(i+=7),{parent:n,offset:i}}{let n,i,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const s=e.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return ht(r)&&un(r)?{parent:r,offset:7}:{parent:n,offset:i?oa(i)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(Fo(e)&&t.skipComments)return null;if(ht(e)){if(jr(e))return null;{const i=this._processDataFromDomText(e);return i===""?null:new L(this.document,i)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new io(this.document),t.bind&&this.bindDocumentFragments(e,i);else{i=this._createViewElement(e,t),t.bind&&this.bindElements(e,i);const r=e.attributes;if(r)for(let s=r.length,a=0;a<s;a++)i._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(i,t)||Fo(e)){const s=Fo(e)?e.data:e.innerHTML;return i._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(e),i}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))i._appendChild(r);return i}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n],r=this.domToView(i,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;ht(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const r=e.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new Hn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new ve(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,oa(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return se._createBefore(n);if(ht(e)){if(jr(e))return this.domPositionToView(e.parentNode,oa(e));const i=this.findCorrespondingViewText(e);let r=t;return i?(un(e)&&(r-=7,r=r<0?0:r),new se(i,r)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new se(i,0)}else{const i=e.childNodes[t-1];if(ht(i)&&jr(i))return this.domPositionToView(i.parentNode,oa(i));const r=ht(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new se(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(jr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof L?r:null}}else{const i=this.mapDomToView(e.parentNode);if(i){const r=i.getChild(0);return r instanceof L?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=Te.window,r=[];Eu(t,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),t.focus(),Eu(t,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),Te.window.scrollTo(n,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(fw):!(e.tagName!=="BR"||!Du(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(mw)||function(t,n){return t.isEqualNode(pw)&&Du(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=yu(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return du(this._domDocument);case"markedNbsp":return uu(this._domDocument);case"br":return hu(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(ht(e)&&un(e)&&t<7||this.isElement(e)&&un(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(d,u){return yu(d).some(f=>f.tagName&&u.includes(f.tagName.toLowerCase()))}(e,this.preElements))return gu(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),i=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),s=this._checkShouldRightTrimDomText(e,i);r&&(t=t.replace(/^ /,"")),s&&(t=t.replace(/ $/,"")),t=gu(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const a=i&&this.isElement(i)&&i.tagName!="BR",c=i&&ht(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!i||a||c)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!un(e)}_getTouchingInlineViewNode(e,t){const n=new eo({startPosition:t?se._createAfter(e):se._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",i=t?"nextSibling":"previousSibling";let r=!0,s=e;do if(!r&&s[n]?s=s[n]:s[i]?(s=s[i],r=!1):(s=s.parentNode,r=!0),!s||this._isBlockElement(s))return null;while(!ht(s)&&s.tagName!="BR"&&!this._isInlineObjectElement(s));return s}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(Fo(e))return new na(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new dn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(xu,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function Eu(o,e){let t=o;for(;t;)e(t),t=t.parentElement}function Du(o,e){const t=o.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Tu(o){o==="script"&&G("domconverter-unsafe-script-element-detected"),o==="style"&&G("domconverter-unsafe-style-element-detected")}function aa(o){const e=Object.prototype.toString.apply(o);return e=="[object Window]"||e=="[object global]"}function ca(o){return class extends o{listenTo(e,t,n,i={}){if(Di(e)||aa(e)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(e,r)||new kw(e,r);this.listenTo(s,t,n,i)}else ue.prototype.listenTo.call(this,e,t,n,i)}stopListening(e,t,n){if(Di(e)||aa(e)){const i=this._getAllProxyEmitters(e);for(const r of i)this.stopListening(r,t,n)}else ue.prototype.stopListening.call(this,e,t,n)}_getProxyEmitter(e,t){return function(n,i){const r=n[$e];return r&&r[i]?r[i].emitter:null}(this,Su(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}}const la=ca(ue);["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{ca[o]=la.prototype[o]});class kw extends ue{constructor(e,t){super(),Ee(this,Su(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),ue.prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){ue.prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Su(o,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=F())}(o);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}class Un extends la{constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Iu=Qd(function(o,e){_i(e,vi(e),o)});class Vo{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Iu(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ti extends Un{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Vo(this.view,t,n))}}class bw extends Ti{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return jo(this)}};this.fire(e.type,e,t)}}const Yc=function(){return Bt.Date.now()};var ww=/\s/;const _w=function(o){for(var e=o.length;e--&&ww.test(o.charAt(e)););return e};var Aw=/^\s+/;const Cw=function(o){return o&&o.slice(0,_w(o)+1).replace(Aw,"")};var vw=/^[-+]0x[0-9a-f]+$/i,yw=/^0b[01]+$/i,xw=/^0o[0-7]+$/i,Ew=parseInt;const Mu=function(o){if(typeof o=="number")return o;if(re(o))return NaN;if(Le(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=Le(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=Cw(o);var t=yw.test(o);return t||xw.test(o)?Ew(o.slice(2),t?2:8):vw.test(o)?NaN:+o};var Dw=Math.max,Tw=Math.min;const Vr=function(o,e,t){var n,i,r,s,a,c,d=0,u=!1,f=!1,m=!0;if(typeof o!="function")throw new TypeError("Expected a function");function _(J){var ae=n,be=i;return n=i=void 0,d=J,s=o.apply(be,ae)}function x(J){return d=J,a=setTimeout(B,e),u?_(J):s}function D(J){var ae=J-c;return c===void 0||ae>=e||ae<0||f&&J-d>=r}function B(){var J=Yc();if(D(J))return R(J);a=setTimeout(B,function(ae){var be=e-(ae-c);return f?Tw(be,r-(ae-d)):be}(J))}function R(J){return a=void 0,m&&n?_(J):(n=i=void 0,s)}function U(){var J=Yc(),ae=D(J);if(n=arguments,i=this,c=J,ae){if(a===void 0)return x(c);if(f)return clearTimeout(a),a=setTimeout(B,e),_(c)}return a===void 0&&(a=setTimeout(B,e)),s}return e=Mu(e)||0,Le(t)&&(u=!!t.leading,r=(f="maxWait"in t)?Dw(Mu(t.maxWait)||0,e):r,m="trailing"in t?!!t.trailing:m),U.cancel=function(){a!==void 0&&clearTimeout(a),d=0,n=c=i=a=void 0},U.flush=function(){return a===void 0?s:R(Yc())},U};class Sw extends Un{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Vr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Hn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Re.arrowleft&&e!=Re.arrowup||n.setTo(n.getFirstPosition()),e!=Re.arrowright&&e!=Re.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const Iw=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},Mw=function(o){return this.__data__.has(o)};function da(o){var e=-1,t=o==null?0:o.length;for(this.__data__=new bi;++e<t;)this.add(o[e])}da.prototype.add=da.prototype.push=Iw,da.prototype.has=Mw;const Nw=da,Bw=function(o,e){for(var t=-1,n=o==null?0:o.length;++t<n;)if(e(o[t],t,o))return!0;return!1},Pw=function(o,e){return o.has(e)},Nu=function(o,e,t,n,i,r){var s=1&t,a=o.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var d=r.get(o),u=r.get(e);if(d&&u)return d==e&&u==o;var f=-1,m=!0,_=2&t?new Nw:void 0;for(r.set(o,e),r.set(e,o);++f<a;){var x=o[f],D=e[f];if(n)var B=s?n(D,x,f,e,o,r):n(x,D,f,o,e,r);if(B!==void 0){if(B)continue;m=!1;break}if(_){if(!Bw(e,function(R,U){if(!Pw(_,U)&&(x===R||i(x,R,t,n,r)))return _.push(U)})){m=!1;break}}else if(x!==D&&!i(x,D,t,n,r)){m=!1;break}}return r.delete(o),r.delete(e),m},Lw=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n,i){t[++e]=[i,n]}),t},Ow=function(o){var e=-1,t=Array(o.size);return o.forEach(function(n){t[++e]=n}),t};var Bu=he?he.prototype:void 0,Qc=Bu?Bu.valueOf:void 0;const zw=function(o,e,t,n,i,r,s){switch(t){case"[object DataView]":if(o.byteLength!=e.byteLength||o.byteOffset!=e.byteOffset)return!1;o=o.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=e.byteLength||!r(new Oe(o),new Oe(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return xt(+o,+e);case"[object Error]":return o.name==e.name&&o.message==e.message;case"[object RegExp]":case"[object String]":return o==e+"";case"[object Map]":var a=Lw;case"[object Set]":var c=1&n;if(a||(a=Ow),o.size!=e.size&&!c)return!1;var d=s.get(o);if(d)return d==e;n|=2,s.set(o,e);var u=Nu(a(o),a(e),n,i,r,s);return s.delete(o),u;case"[object Symbol]":if(Qc)return Qc.call(o)==Qc.call(e)}return!1};var Rw=Object.prototype.hasOwnProperty;const jw=function(o,e,t,n,i,r){var s=1&t,a=lt(o),c=a.length;if(c!=lt(e).length&&!s)return!1;for(var d=c;d--;){var u=a[d];if(!(s?u in e:Rw.call(e,u)))return!1}var f=r.get(o),m=r.get(e);if(f&&m)return f==e&&m==o;var _=!0;r.set(o,e),r.set(e,o);for(var x=s;++d<c;){var D=o[u=a[d]],B=e[u];if(n)var R=s?n(B,D,u,e,o,r):n(D,B,u,o,e,r);if(!(R===void 0?D===B||i(D,B,t,n,r):R)){_=!1;break}x||(x=u=="constructor")}if(_&&!x){var U=o.constructor,J=e.constructor;U==J||!("constructor"in o)||!("constructor"in e)||typeof U=="function"&&U instanceof U&&typeof J=="function"&&J instanceof J||(_=!1)}return r.delete(o),r.delete(e),_};var Pu="[object Arguments]",Lu="[object Array]",ua="[object Object]",Ou=Object.prototype.hasOwnProperty;const Fw=function(o,e,t,n,i,r){var s=Et(o),a=Et(e),c=s?Lu:xi(o),d=a?Lu:xi(e),u=(c=c==Pu?ua:c)==ua,f=(d=d==Pu?ua:d)==ua,m=c==d;if(m&&Ai(o)){if(!Ai(e))return!1;s=!0,u=!1}if(m&&!u)return r||(r=new wi),s||Gi(o)?Nu(o,e,t,n,i,r):zw(o,e,c,t,n,i,r);if(!(1&t)){var _=u&&Ou.call(o,"__wrapped__"),x=f&&Ou.call(e,"__wrapped__");if(_||x){var D=_?o.value():o,B=x?e.value():e;return r||(r=new wi),i(D,B,t,n,r)}}return!!m&&(r||(r=new wi),jw(o,e,t,n,i,r))},zu=function o(e,t,n,i,r){return e===t||(e==null||t==null||!Lt(e)&&!Lt(t)?e!=e&&t!=t:Fw(e,t,n,i,o,r))},Vw=function(o,e,t){var n=(t=typeof t=="function"?t:void 0)?t(o,e):void 0;return n===void 0?zu(o,e,void 0,t):!!n};class Ru extends Un{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,i=new Set;for(const s of e){const a=t.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of e){const a=t.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=t.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&un(s.target)&&i.add(t.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of i){const a=t.mapViewToDom(s),c=Array.from(s.getChildren()),d=Array.from(t.domChildrenToView(a,{withChildren:!1}));Vw(c,d,Hw)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function Hw(o,e){if(!Array.isArray(o))return o===e||!(!o.is("$text")||!e.is("$text"))&&o.data===e.data}class Uw extends Un{constructor(e){super(e),this.mutationObserver=e.getObserver(Ru),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Vr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Vr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(i,r)=>{this.document.isComposing&&!Me.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class qw extends Ti{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,i)=>{const r=t.selection.editableElement;r!==null&&r!==i.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Ww extends Ti{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class ju{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),i=Array.from(t.items||[]);return n.length?n:i.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class $w extends Ti{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(e.dataTransfer&&(r=new ju(e.dataTransfer)),e.data!==null?s=e.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(t.length)a=t.map(c=>n.domConverter.domRangeToView(c));else if(Me.isAndroid){const c=e.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}Me.isAndroid&&e.inputType=="insertCompositionText"&&s&&s.endsWith(`
`)?this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]}):this.fire(e.type,e,{data:s,dataTransfer:r,targetRanges:a,inputType:e.inputType,isComposing:e.isComposing})}}function Hr(o,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertySymbols(t);n.concat(i).forEach(r=>{if(r in o.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const s=Object.getOwnPropertyDescriptor(t,r);s.enumerable=!1,Object.defineProperty(o.prototype,r,s)})})}class Gw{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const Fu=function(o){return typeof o=="string"||!Et(o)&&Lt(o)&&Ht(o)=="[object String]"};function Vu(o,e,t={},n=[]){const i=t&&t.xmlns,r=i?o.createElementNS(i,e):o.createElement(e);for(const s in t)r.setAttribute(s,t[s]);!Fu(n)&&Gt(n)||(n=[n]);for(let s of n)Fu(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}class st{constructor(e,t){st._observerInstance||st._createObserver(),this._element=e,this._callback=t,st._addElementCallback(e,t),st._observerInstance.observe(e)}destroy(){st._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){st._elementCallbacks||(st._elementCallbacks=new Map);let n=st._elementCallbacks.get(e);n||(n=new Set,st._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=st._getElementCallbacks(e);n&&(n.delete(t),n.size||(st._elementCallbacks.delete(e),st._observerInstance.unobserve(e))),st._elementCallbacks&&!st._elementCallbacks.size&&(st._observerInstance=null,st._elementCallbacks=null)}static _getElementCallbacks(e){return st._elementCallbacks?st._elementCallbacks.get(e):null}static _createObserver(){st._observerInstance=new Te.window.ResizeObserver(e=>{for(const t of e){const n=st._getElementCallbacks(t.target);if(n)for(const i of n)i(t)}})}}function oo(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}function yt(o){const e=o.next();return e.done?null:e.value}st._observerInstance=null,st._elementCallbacks=null;class pn extends ca(at){constructor(){super(),this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new y("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class qn{constructor(){this._listener=new la}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+jo(n),n)})}set(e,t,n={}){const i=Uc(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{t(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+jo(e),e)}destroy(){this._listener.stopListening()}}class Kw extends Un{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((i=n.keyCode)==Re.arrowright||i==Re.arrowleft||i==Re.arrowup||i==Re.arrowdown)){const r=new zo(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&t.stop()}var i})}observe(){}}class Yw extends Un{constructor(e){super(e);const t=this.document;t.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=Re.tab||i.ctrlKey)return;const r=new zo(t,"tab",t.selection.getFirstRange());t.fire(r,i),r.stop.called&&n.stop()})}observe(){}}function ha(o){return Object.prototype.toString.apply(o)=="[object Range]"}function Hu(o){const e=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const Uu=["top","right","bottom","left","width","height"];class gt{constructor(e){const t=ha(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Wu(e)||t)if(t){const n=gt.getDomRangeRects(e);ga(this,gt.getBoundingRect(n))}else ga(this,e.getBoundingClientRect());else if(aa(e)){const{innerWidth:n,innerHeight:i}=e;ga(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else ga(this,e)}clone(){return new gt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new gt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!qu(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!qu(n);){const i=new gt(n),r=t.getIntersection(i);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(const t of Uu)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(aa(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const r=Hu(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new gt(i));else{let i=e.startContainer;ht(i)&&(i=i.parentNode);const r=new gt(i.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new gt(t))}}function ga(o,e){for(const t of Uu)o[t]=e[t]}function qu(o){return!!Wu(o)&&o===o.ownerDocument.body}function Wu(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function Qw(o,e,t){const n=e.clone().moveBy(0,t),i=e.clone().moveBy(0,-t),r=new gt(o).excludeScrollbarsAndBorders();if(![i,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=o;Gu(i,r)?a-=r.top-e.top+t:$u(n,r)&&(a+=e.bottom-r.bottom+t),Ku(e,r)?s-=r.left-e.left+t:Yu(e,r)&&(s+=e.right-r.right+t),o.scrollTo(s,a)}}function Zw(o,e){const t=Zc(o);let n,i;for(;o!=t.document.body;)i=e(),n=new gt(o).excludeScrollbarsAndBorders(),n.contains(i)||(Gu(i,n)?o.scrollTop-=n.top-i.top:$u(i,n)&&(o.scrollTop+=i.bottom-n.bottom),Ku(i,n)?o.scrollLeft-=n.left-i.left:Yu(i,n)&&(o.scrollLeft+=i.right-n.right)),o=o.parentNode}function $u(o,e){return o.bottom>e.bottom}function Gu(o,e){return o.top<e.top}function Ku(o,e){return o.left<e.left}function Yu(o,e){return o.right>e.right}function Zc(o){return ha(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function Jw(o){if(ha(o)){let e=o.commonAncestorContainer;return ht(e)&&(e=e.parentNode),e}return o.parentNode}function Qu(o,e){const t=Zc(o),n=new gt(o);if(t===e)return n;{let i=t;for(;i!=e;){const r=i.frameElement,s=new gt(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}class Xw extends at{constructor(e){super(),this.document=new ta(e),this.domConverter=new sa(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new hw(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new ru(this.document),this.addObserver(Ru),this.addObserver(Uw),this.addObserver(qw),this.addObserver(bw),this.addObserver(Sw),this.addObserver(Ww),this.addObserver(Kw),this.addObserver($w),this.addObserver(Yw),this.document.on("arrowKey",lw,{priority:"low"}),ow(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const i={};for(const{name:s,value:a}of Array.from(e.attributes))i[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(e,i);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:i})=>t.removeAttribute(i));const n=this._initialDomRootAttributes.get(t);for(const i in n)t.setAttribute(i,n[i]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,i]of this.domRoots)t.observe(i,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const i=Zc(t);let r=i,s=null;for(;r;){let a;a=Jw(r==i?t:s),Zw(a,()=>Qu(t,r));const c=Qu(t,r);if(Qw(r,c,n),r.parent!=r){if(s=r.frameElement,r=r.parent,!s)return}else r=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new y("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){y.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return se._createAt(e,t)}createPositionAfter(e){return se._createAfter(e)}createPositionBefore(e){return se._createBefore(e)}createRange(...e){return new ve(...e)}createRangeOn(e){return ve._createOn(e)}createRangeIn(e){return ve._createIn(e)}createSelection(...e){return new Hn(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Si{is(){throw new Error("is() method is abstract")}}class Ii extends Si{constructor(e){super(),this.parent=null,this._attrs=Z(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new y("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new y("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=vt(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}_clone(e){return new Ii(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=Z(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}Ii.prototype.is=function(o){return o==="node"||o==="model:node"};class Ur{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new y("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new y("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof Ii))throw new y("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,i,r,s){if(Math.max(i.length,n.length)>1e4)return n.slice(0,r).concat(i).concat(n.slice(r+s,n.length));{const a=Array.from(n);return a.splice(r,s,...i),a}}(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Ze extends Ii{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Ze(this.data,this.getAttributes())}static fromJSON(e){return new Ze(e.data,e.attributes)}}Ze.prototype.is=function(o){return o==="$text"||o==="model:$text"||o==="text"||o==="model:text"||o==="node"||o==="model:node"};class En extends Si{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new y("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new y("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}En.prototype.is=function(o){return o==="$textProxy"||o==="model:$textProxy"||o==="textProxy"||o==="model:textProxy"};class Ye extends Ii{constructor(e,t,n){super(t),this.name=e,this._children=new Ur,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new Ye(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new Ze(i)]:(Gt(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new Ze(r):r instanceof En?new Ze(r.data,r.getAttributes()):r))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(const n of e.children)n.name?t.push(Ye.fromJSON(n)):t.push(Ze.fromJSON(n))}return new Ye(e.name,e.attributes,t)}}Ye.prototype.is=function(o,e){return e?e===this.name&&(o==="element"||o==="model:element"):o==="element"||o==="model:element"||o==="node"||o==="model:node"};class ri{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new y("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new y("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=ie._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,i,r;do i=this.position,r=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const i=qr(t,n),r=i||Zu(t,n,i);if(r instanceof Ye)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,ro("elementStart",r,e,t,1);if(r instanceof Ze){let s;if(this.singleCharacters)s=1;else{let d=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<d&&(d=this.boundaries.end.offset),s=d-t.offset}const a=t.offset-r.startOffset,c=new En(r,a,s);return t.offset+=s,this.position=t,ro("text",c,e,t,s)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():ro("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const i=t.parent,r=qr(t,i),s=r||Ju(t,i,r);if(s instanceof Ye)return t.offset--,this.shallow?(this.position=t,ro("elementStart",s,e,t,1)):(t.path.push(s.maxOffset),this.position=t,this._visitedParent=s,this.ignoreElementEnd?this._previous():ro("elementEnd",s,e,t));if(s instanceof Ze){let a;if(this.singleCharacters)a=1;else{let u=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>u&&(u=this.boundaries.start.offset),a=t.offset-u}const c=t.offset-s.startOffset,d=new En(s,c-a,a);return t.offset-=a,this.position=t,ro("text",d,e,t,a)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,ro("elementStart",n,e,t,1)}}function ro(o,e,t,n,i){return{done:!1,value:{type:o,item:e,previousPosition:t,nextPosition:n,length:i}}}class ie extends Si{constructor(e,t,n="toNone"){if(super(),!e.is("element")&&!e.is("documentFragment"))throw new y("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new y("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new y("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new y("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return qr(this,this.parent)}get nodeAfter(){const e=this.parent;return Zu(this,e,qr(this,e))}get nodeBefore(){const e=this.parent;return Ju(this,e,qr(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=vt(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ri(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=vt(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){if(this.root!==e.root)return!1;const t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){const i=this.path[n]-e.path[n];if(i<-1||i>1)return!1;if(i===1)return Xu(e,this,n);if(i===-1)return Xu(this,e,n)}return this.path.length===e.path.length||(this.path.length>e.path.length?Jc(this.path,t):Jc(e.path,t))}hasSameParentAs(e){return this.root!==e.root?!1:vt(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=ie._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?ie._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=ie._createAt(this);if(this.root!=e.root)return n;if(vt(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(vt(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;if(e.offset<=this.path[i]){if(e.offset+t>this.path[i])return null;n.path[i]-=t}}return n}_getTransformedByInsertion(e,t){const n=ie._createAt(this);if(this.root!=e.root)return n;if(vt(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(vt(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;e.offset<=this.path[i]&&(n.path[i]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return ie._createAt(this);const i=this._getTransformedByDeletion(e,n);return i===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):i._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,i=ie._createAt(t);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-e.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof ie)return new ie(e.root,e.path,e.stickiness);{const i=e;if(t=="end")t=i.maxOffset;else{if(t=="before")return this._createBefore(i,n);if(t=="after")return this._createAfter(i,n);if(t!==0&&!t)throw new y("model-createpositionat-offset-required",[this,e])}if(!i.is("element")&&!i.is("documentFragment"))throw new y("model-position-parent-incorrect",[this,e]);const r=i.getPath();return r.push(t),new this(i.root,r,n)}}static _createAfter(e,t){if(!e.parent)throw new y("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new y("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new ie(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new y("model-position-fromjson-no-root",t,{rootName:e.root});return new ie(t.getRoot(e.root),e.path,e.stickiness)}}function qr(o,e){const t=e.getChild(e.offsetToIndex(o.offset));return t&&t.is("$text")&&t.startOffset<o.offset?t:null}function Zu(o,e,t){return t!==null?null:e.getChild(e.offsetToIndex(o.offset))}function Ju(o,e,t){return t!==null?null:e.getChild(e.offsetToIndex(o.offset)-1)}function Xu(o,e,t){return t+1!==o.path.length&&!!Jc(e.path,t+1)&&!!function(n,i){let r=n.parent,s=n.path.length-1,a=0;for(;s>=i;){if(n.path[s]+a!==r.maxOffset)return!1;a=1,s--,r=r.parent}return!0}(o,t+1)}function Jc(o,e){for(;e<o.length;){if(o[e]!==0)return!1;e++}return!0}ie.prototype.is=function(o){return o==="position"||o==="model:position"};class Q extends Si{constructor(e,t){super(),this.start=ie._createAt(e),this.end=t?ie._createAt(t):ie._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new ri({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return vt(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}containsItem(e){const t=ie._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Q(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Q(e.end,this.end))):t.push(new Q(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Q(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let i=this.start,r=this.end;return e.start.isBefore(i)&&(i=e.start),e.end.isAfter(r)&&(r=e.end),new Q(i,r)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=ie._createAt(this.start);let i=n.parent;for(;n.path.length>t+1;){const r=i.maxOffset-n.offset;r!==0&&e.push(new Q(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&e.push(new Q(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new ri(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ri(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ri(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new Q(this.start,this.end)]}getTransformedByOperations(e){const t=[new Q(this.start,this.end)];for(const n of e)for(let i=0;i<t.length;i++){const r=t[i].getTransformedByOperation(n);t.splice(i,1,...r),i+=r.length-1}for(let n=0;n<t.length;n++){const i=t[n];for(let r=n+1;r<t.length;r++){const s=t[r];(i.containsRange(s)||s.containsRange(i)||i.isEqual(s))&&t.splice(r,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,i=e.howMany,r=e.targetPosition;return this._getTransformedByMove(n,r,i,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new Q(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new Q(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=ie._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new Q(t,n)):new Q(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new Q(this.start,e),new Q(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new Q(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,n,i=!1){if(this.isCollapsed){const f=this.start._getTransformedByMove(e,t,n);return[new Q(f)]}const r=Q._createFromPositionAndShift(e,n),s=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!i&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const f=this.start._getTransformedByMove(e,t,n),m=this.end._getTransformedByMove(e,t,n);return[new Q(f,m)]}let a;const c=this.getDifference(r);let d=null;const u=this.getIntersection(r);if(c.length==1?d=new Q(c[0].start._getTransformedByDeletion(e,n),c[0].end._getTransformedByDeletion(e,n)):c.length==2&&(d=new Q(this.start,this.end._getTransformedByDeletion(e,n))),a=d?d._getTransformedByInsertion(s,n,u!==null||i):[],u){const f=new Q(u.start._getCombined(r.start,s),u.end._getCombined(r.start,s));a.length==2?a.splice(1,0,f):a.push(f)}return a}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),i=this.end._getTransformedByDeletion(e,t);return n==null&&i==null?null:(n==null&&(n=e),i==null&&(i=e),new Q(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return new this(ie._createAt(e,0),ie._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(ie._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new y("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=e.indexOf(t),i=new this(t.start,t.end);if(n>0)for(let r=n-1;e[r].end.isEqual(i.start);r++)i.start=ie._createAt(e[r].start);for(let r=n+1;r<e.length&&e[r].start.isEqual(i.end);r++)i.end=ie._createAt(e[r].end);return i}static fromJSON(e,t){return new this(ie.fromJSON(e.start,t),ie.fromJSON(e.end,t))}}Q.prototype.is=function(o){return o==="range"||o==="model:range"};class eh extends ue{constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new y("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),i=this._viewToModelMapping.get(n),r=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=ie._createAt(i,r)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const i of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(i);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const i=this._elementToMarkerNames.get(e)||new Set;i.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,i)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const i=this._elementToMarkerNames.get(e);i&&(i.delete(t),i.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new Q(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new ve(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const i of t)if(i.is("attributeElement"))for(const r of i.getElementsWithSameId())n.add(r);else n.add(i);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let i=0;for(let r=0;r<t;r++)i+=this.getModelLength(e.getChild(r));return i}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,i=0,r=0,s=0;if(e.is("$text"))return new se(e,t);for(;r<t;)n=e.getChild(s),i=this.getModelLength(n),r+=i,s++;return r==t?this._moveViewPositionToTextNode(new se(e,s)):this.findPositionIn(n,t-(r-i))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof L?new se(t,t.data.length):n instanceof L?new se(n,0):e}}class e_{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=fa(t),e instanceof En&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=fa(t),e instanceof En&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=fa(t),e instanceof En&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const i=n.get(t);return i===void 0?null:i}revert(e,t){t=fa(t),e instanceof En&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,i]of this._consumable)for(const[r,s]of i){const a=r.split(":")[0];s&&e==a&&t.push({event:r,item:n.name||n.description})}if(t.length)throw new y("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const i=n.get(e.endOffset);i&&(t=i.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,i=e.parent,r=Symbol("$textProxy:"+e.data);let s,a;return s=this._textProxyRegistry.get(t),s||(s=new Map,this._textProxyRegistry.set(t,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(i,r),r}}function fa(o){const e=o.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?o:e.length>1?e[0]+":"+e[1]:e[0]}class th extends ue{constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const i=this._createConversionApi(n,e.getRefreshedItems());for(const s of e.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,i);const r=this._reduceChanges(e.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(Q._createFromPositionAndShift(s.position,s.length),i):s.type==="reinsert"?this._convertReinsert(Q._createFromPositionAndShift(s.position,s.length),i):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,i):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,i);for(const s of i.mapper.flushUnboundMarkerNames()){const a=t.get(s).getRange();this._convertMarkerRemove(s,a,i),this._convertMarkerAdd(s,a,i)}for(const s of e.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(e,t,n,i={}){const r=this._createConversionApi(n,void 0,i);this._convertInsert(e,r);for(const[s,a]of t)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const i=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,e,i),this.fire("selection",{selection:e},r),e.isCollapsed){for(const s of i){const a=s.getRange();if(!t_(e.getFirstPosition(),s,r.mapper))continue;const c={item:e,markerName:s.name,markerRange:a};r.consumable.test(e,"addMarker:"+s.name)&&this.fire(`addMarker:${s.name}`,c,r)}for(const s of e.getAttributeKeys()){const a={item:e,range:e.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:e.getAttribute(s)};r.consumable.test(e,"attribute:"+a.attributeKey)&&this.fire(`attribute:${a.attributeKey}:$text`,a,r)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const i of Array.from(e.getWalker({shallow:!0})).map(nh))this._testAndFire("insert",i,t)}_convertRemove(e,t,n,i){this.fire(`remove:${n}`,{position:e,length:t},i)}_convertAttribute(e,t,n,i,r){this._addConsumablesForRange(r.consumable,e,`attribute:${t}`);for(const s of e){const a={item:s.item,range:Q._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:t,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${t}`,a,r)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const i of n.map(nh))this._testAndFire("insert",{...i,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const i=`addMarker:${e}`;if(n.consumable.add(t,i),this.fire(i,{markerName:e,markerRange:t},n),n.consumable.consume(t,i)){this._addConsumablesForRange(n.consumable,t,i);for(const r of t.getItems()){if(!n.consumable.test(r,i))continue;const s={item:r,range:Q._createOn(r),markerName:e,markerRange:t};this.fire(i,s,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const i=n.item;if(e.test(i,"insert")===null){e.add(i,"insert");for(const r of i.getAttributeKeys())e.add(i,"attribute:"+r)}}return e}_addConsumablesForRange(e,t,n){for(const i of t.getItems())e.add(i,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const i of n)e.add(t,"addMarker:"+i.name);for(const i of t.getAttributeKeys())e.add(t,"attribute:"+i);return e}_testAndFire(e,t,n){const i=function(c,d){const u=d.item.is("element")?d.item.name:"$text";return`${c}:${u}`}(e,t),r=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(i))return;a.add(i)}else s.set(r,new Set([i]));this.fire(i,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:Q._createOn(e)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,t)}_createConversionApi(e,t=new Set,n={}){const i={...this._conversionApi,consumable:new e_,writer:e,options:n,convertItem:r=>this._convertInsert(Q._createOn(r),i),convertChildren:r=>this._convertInsert(Q._createIn(r),i,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,i),canReuseView:r=>!t.has(i.mapper.toModelElement(r))};return this._firedEventsMap.set(i,new Map),i}}function t_(o,e,t){const n=e.getRange(),i=Array.from(o.getAncestors());return i.shift(),i.reverse(),!i.some(r=>{if(n.containsItem(r))return!!t.toViewElement(r).getCustomProperty("addHighlight")})}function nh(o){return{item:o.item,range:Q._createFromPositionAndShift(o.previousPosition,o.length)}}class Wn extends w(Si){constructor(...e){super(),this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new Q(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new Q(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new Q(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,i]=e;if(typeof n=="object"&&(i=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof Wn)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof Q)this._setRanges([t],!!i&&!!i.backward);else if(t instanceof ie)this._setRanges([new Q(t)]);else if(t instanceof Ii){const r=!!i&&!!i.backward;let s;if(n=="in")s=Q._createIn(t);else if(n=="on")s=Q._createOn(t);else{if(n===void 0)throw new y("model-selection-setto-required-second-parameter",[this,t]);s=new Q(ie._createAt(t,n))}this._setRanges([s],r)}else{if(!Gt(t))throw new y("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,i&&!!i.backward)}}_setRanges(e,t=!1){const n=Array.from(e),i=n.some(r=>{if(!(r instanceof Q))throw new y("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(r))});(n.length!==this._ranges.length||i)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new y("model-selection-setfocus-no-ranges",[this,e]);const n=ie._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new Q(n,i)),this._lastRangeBackward=!0):(this._pushRange(new Q(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=oh(t.start,e);n&&Xc(n,t)&&(yield n);for(const r of t.getWalker()){const s=r.item;r.type=="elementEnd"&&n_(s,e,t)&&(yield s)}const i=oh(t.end,e);i&&!t.end.isTouching(ie._createAt(i,0))&&Xc(i,t)&&(yield i)}}containsEntireContent(e=this.anchor.root){const t=ie._createAt(e,0),n=ie._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new Q(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new y("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(const t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ih(o,e){return!e.has(o)&&(e.add(o),o.root.document.model.schema.isBlock(o)&&!!o.parent)}function n_(o,e,t){return ih(o,e)&&Xc(o,t)}function oh(o,e){const t=o.parent.root.document.model.schema,n=o.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const r=n.find(s=>!i&&(i=t.isLimit(s),!i&&ih(s,e)));return n.forEach(s=>e.add(s)),r}function Xc(o,e){const t=function(n){const i=n.root.document.model.schema;let r=n.parent;for(;r;){if(i.isBlock(r))return r;r=r.parent}}(o);return t?!e.containsRange(Q._createOn(t),!0):!0}Wn.prototype.is=function(o){return o==="selection"||o==="model:selection"};class Dn extends w(Q){constructor(e,t){super(e,t),i_.call(this)}detach(){this.stopListening()}toRange(){return new Q(this.start,this.end)}static fromRange(e){return new Dn(e.start,e.end)}}function i_(){this.listenTo(this.root.document.model,"applyOperation",(o,e)=>{const t=e[0];t.isDocumentOperation&&o_.call(this,t)},{priority:"low"})}function o_(o){const e=this.getTransformedByOperation(o),t=Q._createFromRanges(e),n=!t.isEqual(this),i=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,o);let r=null;if(n){t.root.rootName=="$graveyard"&&(r=o.type=="remove"?o.sourcePosition:o.deletionPosition);const s=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",s,{deletionPosition:r})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:r})}Dn.prototype.is=function(o){return o==="liveRange"||o==="model:liveRange"||o=="range"||o==="model:range"};const Wr="selection:";class mn extends w(Si){constructor(e){super(),this._selection=new r_(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return Wr+e}static _isStoreAttributeKey(e){return e.startsWith(Wr)}}mn.prototype.is=function(o){return o==="selection"||o=="model:selection"||o=="documentSelection"||o=="model:documentSelection"};class r_ extends Wn{constructor(e){super(),this.markers=new ln({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(t,n,i,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(t,n)=>{(function(i,r){const s=i.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const c=a.position.parent;a.length===c.maxOffset&&i.enqueueChange(r,d=>{const u=Array.from(c.getAttributeKeys()).filter(f=>f.startsWith(Wr));for(const f of u)d.removeAttribute(f,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=F();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new y("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(const t of e)if(!this._document._validateSelectionRange(t))throw new y("document-selection-wrong-position",this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=Dn.fromRange(e);return t.on("change:range",(n,i,r)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(t);this._ranges.splice(s,1),t.detach()}}),t}updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const i of this._model.markers){const r=i.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=i.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&e.push(i)}const n=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const r=Array.from(this.markers),s=this.markers.has(e);if(t){let a=!1;for(const c of this.getRanges())if(t.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(e),i=!0):!a&&s&&(this.markers.remove(e),i=!0)}else s&&(this.markers.remove(e),i=!0);i&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(e){const t=Z(this._getSurroundingAttributes()),n=Z(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(t);const i=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||i.push(r);for(const[r]of n)this.hasAttribute(r)||i.push(r);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(e,t,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,i),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,i]of this.getAttributes())e.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of e)this._setAttribute(n,i,!1)&&t.add(n);return t}*getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(Wr)&&(yield[t.substr(Wr.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const i=e.textNode?e.textNode:e.nodeBefore,r=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=pa(i)),n||(n=pa(r)),!this.isGravityOverridden&&!n){let s=i;for(;s&&!t.isInline(s)&&!n;)s=s.previousSibling,n=pa(s)}if(!n){let s=r;for(;s&&!t.isInline(s)&&!n;)s=s.nextSibling,n=pa(s)}n||(n=this.getStoredAttributes())}else{const i=this.getFirstRange();for(const r of i){if(r.item.is("element")&&t.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function pa(o){return o instanceof En||o instanceof Ze?o.getAttributes():null}class rh{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const so=function(o){return Br(o,5)};class s_ extends rh{elementToElement(e){return this.add(function(t){const n=ch(t.model),i=$r(t.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,function(s,a=c_){return(c,d,u)=>{if(!a(d.item,u.consumable,{preflight:!0}))return;const f=s(d.item,u,d);if(!f)return;a(d.item,u.consumable);const m=u.mapper.toViewPosition(d.range.start);u.mapper.bindElements(d.item,f),u.writer.insert(m,f),u.convertAttributes(d.item),gh(f,d.item.getChildren(),u,{reconversion:d.reconversion})}}(i,hh(n)),{priority:t.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",uh(n),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){const n=ch(t.model),i=$r(t.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new y("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var s,a;r.on(`insert:${n.name}`,(s=i,a=hh(n),(c,d,u)=>{if(!a(d.item,u.consumable,{preflight:!0}))return;const f=new Map;u.writer._registerSlotFactory(function(x,D,B){return(R,U="children")=>{const J=R.createContainerElement("$slot");let ae=null;if(U==="children")ae=Array.from(x.getChildren());else{if(typeof U!="function")throw new y("conversion-slot-mode-unknown",B.dispatcher,{modeOrFilter:U});ae=Array.from(x.getChildren()).filter(be=>U(be))}return D.set(J,ae),J}}(d.item,f,u));const m=s(d.item,u,d);if(u.writer._clearSlotFactory(),!m)return;(function(x,D,B){const R=Array.from(D.values()).flat(),U=new Set(R);if(U.size!=R.length)throw new y("conversion-slot-filter-overlap",B.dispatcher,{element:x});if(U.size!=x.childCount)throw new y("conversion-slot-filter-incomplete",B.dispatcher,{element:x})})(d.item,f,u),a(d.item,u.consumable);const _=u.mapper.toViewPosition(d.range.start);u.mapper.bindElements(d.item,m),u.writer.insert(_,m),u.convertAttributes(d.item),function(x,D,B,R){B.mapper.on("modelToViewPosition",ae,{priority:"highest"});let U=null,J=null;for([U,J]of D)gh(x,J,B,R),B.writer.move(B.writer.createRangeIn(U),B.writer.createPositionBefore(U)),B.writer.remove(U);function ae(be,ze){const Fe=ze.modelPosition.nodeAfter,Nn=J.indexOf(Fe);Nn<0||(ze.viewPosition=ze.mapper.findPositionIn(U,Nn))}B.mapper.off("modelToViewPosition",ae)}(m,f,u,{reconversion:d.reconversion})}),{priority:t.converterPriority||"normal"}),r.on("reduceChanges",uh(n),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){let n=(t=so(t)).model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)t.view[s]=$r(t.view[s],"attribute");else t.view=$r(t.view,"attribute");const r=lh(t);return s=>{s.on(i,function(a){return(c,d,u)=>{if(!u.consumable.test(d.item,c.name))return;const f=a(d.attributeOldValue,u,d),m=a(d.attributeNewValue,u,d);if(!f&&!m)return;u.consumable.consume(d.item,c.name);const _=u.writer,x=_.document.selection;if(d.item instanceof Wn||d.item instanceof mn)_.wrap(x.getFirstRange(),m);else{let D=u.mapper.toViewRange(d.range);d.attributeOldValue!==null&&f&&(D=_.unwrap(D,f)),d.attributeNewValue!==null&&m&&_.wrap(D,m)}}}(r),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){let n=(t=so(t)).model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)t.view[s]=dh(t.view[s]);else t.view=dh(t.view);const r=lh(t);return s=>{var a;s.on(i,(a=r,(c,d,u)=>{if(!u.consumable.test(d.item,c.name))return;const f=a(d.attributeOldValue,u,d),m=a(d.attributeNewValue,u,d);if(!f&&!m)return;u.consumable.consume(d.item,c.name);const _=u.mapper.toViewElement(d.item),x=u.writer;if(!_)throw new y("conversion-attribute-to-attribute-on-text",u.dispatcher,d);if(d.attributeOldValue!==null&&f)if(f.key=="class"){const D=kt(f.value);for(const B of D)x.removeClass(B,_)}else if(f.key=="style"){const D=Object.keys(f.value);for(const B of D)x.removeStyle(B,_)}else x.removeAttribute(f.key,_);if(d.attributeNewValue!==null&&m)if(m.key=="class"){const D=kt(m.value);for(const B of D)x.addClass(B,_)}else if(m.key=="style"){const D=Object.keys(m.value);for(const B of D)x.setStyle(B,m.value[B],_)}else x.setAttribute(m.key,m.value,_)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){const n=$r(t.view,"ui");return i=>{var r;i.on(`addMarker:${t.model}`,(r=n,(s,a,c)=>{a.isOpening=!0;const d=r(a,c);a.isOpening=!1;const u=r(a,c);if(!d||!u)return;const f=a.markerRange;if(f.isCollapsed&&!c.consumable.consume(f,s.name))return;for(const x of f)if(!c.consumable.consume(x.item,s.name))return;const m=c.mapper,_=c.writer;_.insert(m.toViewPosition(f.start),d),c.mapper.bindElementToMarker(d,a.markerName),f.isCollapsed||(_.insert(m.toViewPosition(f.end),u),c.mapper.bindElementToMarker(u,a.markerName)),s.stop()}),{priority:t.converterPriority||"normal"}),i.on(`removeMarker:${t.model}`,(s,a,c)=>{const d=c.mapper.markerNameToElements(a.markerName);if(d){for(const u of d)c.mapper.unbindElementFromMarkerName(u,a.markerName),c.writer.clear(c.writer.createRangeOn(u),u);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}},{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var i;n.on(`addMarker:${t.model}`,(i=t.view,(r,s,a)=>{if(!s.item||!(s.item instanceof Wn||s.item instanceof mn||s.item.is("$textProxy")))return;const c=el(i,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;const d=a.writer,u=sh(d,c),f=d.document.selection;if(s.item instanceof Wn||s.item instanceof mn)d.wrap(f.getFirstRange(),u);else{const m=a.mapper.toViewRange(s.range),_=d.wrap(m,u);for(const x of _.getItems())if(x.is("attributeElement")&&x.isSimilar(u)){a.mapper.bindElementToMarker(x,s.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on(`addMarker:${t.model}`,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof Ye))return;const d=el(r,a,c);if(!d||!c.consumable.test(a.item,s.name))return;const u=c.mapper.toViewElement(a.item);if(u&&u.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(const f of Q._createIn(a.item))c.consumable.consume(f.item,s.name);u.getCustomProperty("addHighlight")(u,d,c.writer),c.mapper.bindElementToMarker(u,a.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on(`removeMarker:${t.model}`,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;const d=el(r,a,c);if(!d)return;const u=sh(c.writer,d),f=c.mapper.markerNameToElements(a.markerName);if(f){for(const m of f)c.mapper.unbindElementFromMarkerName(m,a.markerName),m.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(m),u):m.getCustomProperty("removeHighlight")(m,d.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=so(t)).model;let i=t.view;return i||(i=r=>({group:n,name:r.substr(t.model.length+1)})),r=>{var s;r.on(`addMarker:${n}`,(s=i,(a,c,d)=>{const u=s(c.markerName,d);if(!u)return;const f=c.markerRange;d.consumable.consume(f,a.name)&&(ah(f,!1,d,c,u),ah(f,!0,d,c,u),a.stop())}),{priority:t.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(a){return(c,d,u)=>{const f=a(d.markerName,u);if(!f)return;const m=u.mapper.markerNameToElements(d.markerName);if(m){for(const x of m)u.mapper.unbindElementFromMarkerName(x,d.markerName),x.is("containerElement")?(_(`data-${f.group}-start-before`,x),_(`data-${f.group}-start-after`,x),_(`data-${f.group}-end-before`,x),_(`data-${f.group}-end-after`,x)):u.writer.clear(u.writer.createRangeOn(x),x);u.writer.clearClonedElementsGroup(d.markerName),c.stop()}function _(x,D){if(D.hasAttribute(x)){const B=new Set(D.getAttribute(x).split(","));B.delete(f.name),B.size==0?u.writer.removeAttribute(x,D):u.writer.setAttribute(x,Array.from(B).join(","),D)}}}}(i),{priority:t.converterPriority||"normal"})}}(e))}}function sh(o,e){const t=o.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function ah(o,e,t,n,i){const r=e?o.start:o.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,d;e&&s||!e&&!a?(c=s,d=!0):(c=a,d=!1);const u=t.mapper.toViewElement(c);if(u)return void function(f,m,_,x,D,B){const R=`data-${B.group}-${m?"start":"end"}-${_?"before":"after"}`,U=f.hasAttribute(R)?f.getAttribute(R).split(","):[];U.unshift(B.name),x.writer.setAttribute(R,U.join(","),f),x.mapper.bindElementToMarker(f,D.markerName)}(u,e,d,t,n,i)}(function(c,d,u,f,m){const _=`${m.group}-${d?"start":"end"}`,x=m.name?{name:m.name}:null,D=u.writer.createUIElement(_,x);u.writer.insert(c,D),u.mapper.bindElementToMarker(D,f.markerName)})(t.mapper.toViewPosition(r),e,t,n,i)}function ch(o){return typeof o=="string"&&(o={name:o}),o.attributes?Array.isArray(o.attributes)||(o.attributes=[o.attributes]):o.attributes=[],o.children=!!o.children,o}function $r(o,e){return typeof o=="function"?o:(t,n)=>function(i,r,s){typeof i=="string"&&(i={name:i});let a;const c=r.writer,d=Object.assign({},i.attributes);if(s=="container")a=c.createContainerElement(i.name,d);else if(s=="attribute"){const u={priority:i.priority||to.DEFAULT_PRIORITY};a=c.createAttributeElement(i.name,d,u)}else a=c.createUIElement(i.name,d);if(i.styles){const u=Object.keys(i.styles);for(const f of u)c.setStyle(f,i.styles[f],a)}if(i.classes){const u=i.classes;if(typeof u=="string")c.addClass(u,a);else for(const f of u)c.addClass(f,a)}return a}(o,n,e)}function lh(o){return o.model.values?(e,t,n)=>{const i=o.view[e];return i?i(e,t,n):null}:o.view}function dh(o){return typeof o=="string"?e=>({key:o,value:e}):typeof o=="object"?o.value?()=>o:e=>({key:o.key,value:e}):o}function el(o,e,t){const n=typeof o=="function"?o(e,t):o;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function uh(o){const e=function(t){return(n,i)=>{if(!n.is("element",t.name))return!1;if(i.type=="attribute"){if(t.attributes.includes(i.attributeKey))return!0}else if(t.children)return!0;return!1}}(o);return(t,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(s&&e(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=ie._createBefore(s);i.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else i.push(r)}n.changes=i}}function hh(o){return(e,t,n={})=>{const i=["insert"];for(const r of o.attributes)e.hasAttribute(r)&&i.push(`attribute:${r}`);return!!i.every(r=>t.test(e,r))&&(n.preflight||i.forEach(r=>t.consume(e,r)),!0)}}function gh(o,e,t,n){for(const i of e)a_(o.root,i,t,n)||t.convertItem(i)}function a_(o,e,t,n){const{writer:i,mapper:r}=t;if(!n.reconversion)return!1;const s=r.toViewElement(e);return!(!s||s.root==o)&&!!t.canReuseView(s)&&(i.move(i.createRangeOn(s),r.toViewPosition(ie._createBefore(e))),!0)}function c_(o,e,{preflight:t}={}){return t?e.test(o,"insert"):e.consume(o,"insert")}function fh(o){const{schema:e,document:t}=o.model;for(const n of t.getRootNames()){const i=t.getRoot(n);if(i.isEmpty&&!e.checkChild(i,"$text")&&e.checkChild(i,"paragraph"))return o.insertElement("paragraph",i),!0}return!1}function ph(o,e,t){const n=t.createContext(o);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function mh(o,e){const t=e.createElement("paragraph");return e.insert(t,o),e.createPositionAt(t,0)}class l_ extends rh{elementToElement(e){return this.add(kh(e))}elementToAttribute(e){return this.add(function(t){bh(t=so(t));const n=wh(t,!1),i=tl(t.view),r=i?`element:${i}`:"element";return s=>{s.on(r,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=so(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(t)),bh(t,n);const i=wh(t,!0);return r=>{r.on("element",i,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){const n=function(i){return(r,s)=>{const a=typeof i=="string"?i:i(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(t.model);return kh({...t,model:n})}(e))}dataToMarker(e){return this.add(function(t){(t=so(t)).model||(t.model=s=>s?t.view+":"+s:t.view);const n={view:t.view,model:t.model},i=nl(_h(n,"start")),r=nl(_h(n,"end"));return s=>{s.on(`element:${t.view}-start`,i,{priority:t.converterPriority||"normal"}),s.on(`element:${t.view}-end`,r,{priority:t.converterPriority||"normal"});const a=q.get("low"),c=q.get("highest"),d=q.get(t.converterPriority)/c;s.on("element",function(u){return(f,m,_)=>{const x=`data-${u.view}`;function D(B,R){for(const U of R){const J=u.model(U,_),ae=_.writer.createElement("$marker",{"data-name":J});_.writer.insert(ae,B),m.modelCursor.isEqual(B)?m.modelCursor=m.modelCursor.getShiftedBy(1):m.modelCursor=m.modelCursor._getTransformedByInsertion(B,1),m.modelRange=m.modelRange._getTransformedByInsertion(B,1)[0]}}(_.consumable.test(m.viewItem,{attributes:x+"-end-after"})||_.consumable.test(m.viewItem,{attributes:x+"-start-after"})||_.consumable.test(m.viewItem,{attributes:x+"-end-before"})||_.consumable.test(m.viewItem,{attributes:x+"-start-before"}))&&(m.modelRange||Object.assign(m,_.convertChildren(m.viewItem,m.modelCursor)),_.consumable.consume(m.viewItem,{attributes:x+"-end-after"})&&D(m.modelRange.end,m.viewItem.getAttribute(x+"-end-after").split(",")),_.consumable.consume(m.viewItem,{attributes:x+"-start-after"})&&D(m.modelRange.end,m.viewItem.getAttribute(x+"-start-after").split(",")),_.consumable.consume(m.viewItem,{attributes:x+"-end-before"})&&D(m.modelRange.start,m.viewItem.getAttribute(x+"-end-before").split(",")),_.consumable.consume(m.viewItem,{attributes:x+"-start-before"})&&D(m.modelRange.start,m.viewItem.getAttribute(x+"-start-before").split(",")))}}(n),{priority:a+d})}}(e))}}function kh(o){const e=nl(o=so(o)),t=tl(o.view),n=t?`element:${t}`:"element";return i=>{i.on(n,e,{priority:o.converterPriority||"normal"})}}function tl(o){return typeof o=="string"?o:typeof o=="object"&&typeof o.name=="string"?o.name:null}function nl(o){const e=new H(o.view);return(t,n,i)=>{const r=e.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!i.consumable.test(n.viewItem,s))return;const a=function(c,d,u){return c instanceof Function?c(d,u):u.writer.createElement(c)}(o.model,n.viewItem,i);a&&i.safeInsert(a,n.modelCursor)&&(i.consumable.consume(n.viewItem,s),i.convertChildren(n.viewItem,a),i.updateConversionResult(a,n))}}function bh(o,e=null){const t=e===null||(r=>r.getAttribute(e)),n=typeof o.model!="object"?o.model:o.model.key,i=typeof o.model!="object"||o.model.value===void 0?t:o.model.value;o.model={key:n,value:i}}function wh(o,e){const t=new H(o.view);return(n,i,r)=>{if(!i.modelRange&&e)return;const s=t.match(i.viewItem);if(!s||(function(u,f){const m=typeof u=="function"?u(f):u;return typeof m=="object"&&!tl(m)?!1:!m.classes&&!m.attributes&&!m.styles}(o.view,i.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(i.viewItem,s.match)))return;const a=o.model.key,c=typeof o.model.value=="function"?o.model.value(i.viewItem,r):o.model.value;if(c===null)return;i.modelRange||Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor)),function(u,f,m,_){let x=!1;for(const D of Array.from(u.getItems({shallow:m})))_.schema.checkAttribute(D,f.key)&&(x=!0,D.hasAttribute(f.key)||_.writer.setAttribute(f.key,f.value,D));return x}(i.modelRange,{key:a,value:c},e,r)&&(r.consumable.test(i.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(i.viewItem,s.match))}}function _h(o,e){return{view:`${o.view}-${e}`,model:(t,n)=>{const i=t.getAttribute("name"),r=o.model(i,n);return n.writer.createElement("$marker",{"data-name":r})}}}class d_ extends at{constructor(e,t){super(),this.model=e,this.view=new Xw(t),this.mapper=new eh,this.downcastDispatcher=new th({mapper:this.mapper,schema:e.schema});const n=this.model.document,i=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(i,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(c,d)=>{const u=d.newSelection,f=[];for(const _ of u.getRanges())f.push(a.toModelRange(_));const m=s.createSelection(f,{backward:u.isBackward});m.isEqual(s.document.selection)||s.change(_=>{_.setSelection(m)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,c)=>{if(!c.consumable.consume(a.item,s.name))return;const d=c.writer,u=c.mapper.toViewPosition(a.range.start),f=d.createText(a.item.data);d.insert(u,f)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,a,c)=>{c.convertAttributes(a.item),a.reconversion||!a.item.is("element")||a.item.isEmpty||c.convertChildren(a.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,c)=>{const d=c.mapper.toViewPosition(a.position),u=a.position.getShiftedBy(a.length),f=c.mapper.toViewPosition(u,{isPhantom:!0}),m=c.writer.createRange(d,f),_=c.writer.remove(m.getTrimmed());for(const x of c.writer.createRangeIn(_).getItems())c.mapper.unbindViewElement(x,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const d=c.writer,u=d.document.selection;for(const f of u.getRanges())f.isCollapsed&&f.end.parent.isAttached()&&c.writer.mergeAttributes(f.start);d.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const d=a.selection;if(d.isCollapsed||!c.consumable.consume(d,"selection"))return;const u=[];for(const f of d.getRanges())u.push(c.mapper.toViewRange(f));c.writer.setSelection(u,{backward:d.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const d=a.selection;if(!d.isCollapsed||!c.consumable.consume(d,"selection"))return;const u=c.writer,f=d.getFirstPosition(),m=c.mapper.toViewPosition(f),_=u.breakAttributes(m);u.setSelection(_)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const a=new tu(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new y("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}class u_{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new y("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Gr{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new h_(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&t.attributes.push(s);const i=e.getClassNames();for(const s of i)t.classes.push(s);const r=e.getStyleNames();for(const s of r)t.styles.push(s);return t}static createFrom(e,t){if(t||(t=new Gr),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Gr.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=Gr.createFrom(n,t);return t}}const ma=["attributes","classes","styles"];class h_{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t of ma)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t of ma)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t of ma)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t of ma)t in e&&this._revert(t,e[t])}_add(e,t){const n=Et(t)?t:[t],i=this._consumables[e];for(const r of n){if(e==="attributes"&&(r==="class"||r==="style"))throw new y("viewconsumable-invalid-attribute",this);if(i.set(r,!0),e==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!0)}}_test(e,t){const n=Et(t)?t:[t],i=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){const s=i.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(e,t){const n=Et(t)?t:[t],i=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){if(i.set(r,!1),e=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(e,t){const n=Et(t)?t:[t],i=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style")i.get(r)===!1&&i.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class g_ extends at{constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new ao(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new ao(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new y("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new y("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:"is"in e&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof ie){const n=e.nodeBefore,i=e.nodeAfter;if(!(n instanceof Ye))throw new y("schema-check-merge-no-element-before",this);if(!(i instanceof Ye))throw new y("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,i])=>{if(!i)return;const r=e(n,i);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,i])=>{const r=e(n,i);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof ie?t=e.parent:t=(e instanceof Q?[e]:Array.from(e.getRanges())).reduce((n,i)=>{const r=i.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new Ze("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const i of n)for(const r of i)if(this.checkAttribute(r.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new Q(e);let n,i;const r=e.getAncestors().reverse().find(s=>this.isLimit(s))||e.root;t!="both"&&t!="backward"||(n=new ri({boundaries:Q._createIn(r),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(i=new ri({boundaries:Q._createIn(r),startPosition:e}));for(const s of function*(a,c){let d=!1;for(;!d;){if(d=!0,a){const u=a.next();u.done||(d=!1,yield{walker:a,value:u.value})}if(c){const u=c.next();u.done||(d=!1,yield{walker:c,value:u.value})}}}(n,i)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return Q._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new Q(c.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const i=n.model;for(const[r,s]of Object.entries(t))i.schema.checkAttribute(e,r)&&n.setAttribute(r,s,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))Ah(this,n,t);else{const i=Q._createIn(n).getPositions();for(const r of i)Ah(this,r.nodeBefore||r.parent,t)}}getAttributesWithProperty(e,t,n){const i={};for(const[r,s]of e.getAttributes()){const a=this.getAttributeProperties(r);a[t]!==void 0&&(n!==void 0&&n!==a[t]||(i[r]=s))}return i}createContext(e){return new ao(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const i of n)e[i]=f_(t[i],i);for(const i of n)p_(e,i);for(const i of n)m_(e,i);for(const i of n)k_(e,i);for(const i of n)b_(e,i),w_(e,i);for(const i of n)__(e,i),A_(e,i),C_(e,i);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const i=t.getItem(n);if(e.allowIn.includes(i.name)){if(n==0)return!0;{const r=this.getDefinition(i);return this._checkContextMatch(r,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,i=e.start;for(const r of e.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(Q._createIn(r),t)),this.checkAttribute(r,t)||(n.isEqual(i)||(yield new Q(n,i)),n=ie._createAfter(r)),i=ie._createAfter(r);n.isEqual(i)||(yield new Q(n,i))}}class ao{constructor(e){if(e instanceof ao)return e;let t;t=typeof e=="string"?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(y_)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new ao([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function f_(o,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)i[a]=!!r[a]}}(o,t),co(o,t,"allowIn"),co(o,t,"allowContentOf"),co(o,t,"allowWhere"),co(o,t,"allowAttributes"),co(o,t,"allowAttributesOf"),co(o,t,"allowChildren"),co(o,t,"inheritTypesFrom"),function(n,i){for(const r of n){const s=r.inheritAllFrom;s&&(i.allowContentOf.push(s),i.allowWhere.push(s),i.allowAttributesOf.push(s),i.inheritTypesFrom.push(s))}}(o,t),t}function p_(o,e){const t=o[e];for(const n of t.allowChildren){const i=o[n];i&&i.allowIn.push(e)}t.allowChildren.length=0}function m_(o,e){for(const t of o[e].allowContentOf)o[t]&&v_(o,t).forEach(n=>{n.allowIn.push(e)});delete o[e].allowContentOf}function k_(o,e){for(const t of o[e].allowWhere){const n=o[t];if(n){const i=n.allowIn;o[e].allowIn.push(...i)}}delete o[e].allowWhere}function b_(o,e){for(const t of o[e].allowAttributesOf){const n=o[t];if(n){const i=n.allowAttributes;o[e].allowAttributes.push(...i)}}delete o[e].allowAttributesOf}function w_(o,e){const t=o[e];for(const n of t.inheritTypesFrom){const i=o[n];if(i){const r=Object.keys(i).filter(s=>s.startsWith("is"));for(const s of r)s in t||(t[s]=i[s])}}delete t.inheritTypesFrom}function __(o,e){const t=o[e],n=t.allowIn.filter(i=>o[i]);t.allowIn=Array.from(new Set(n))}function A_(o,e){const t=o[e];for(const n of t.allowIn)o[n].allowChildren.push(e)}function C_(o,e){const t=o[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function co(o,e,t){for(const n of o){const i=n[t];typeof i=="string"?e[t].push(i):Array.isArray(i)&&e[t].push(...i)}}function v_(o,e){const t=o[e];return(n=o,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(t.name));var n}function y_(o){return typeof o=="string"||o.is("documentFragment")?{name:typeof o=="string"?o:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:o.is("element")?o.name:"$text",*getAttributeKeys(){yield*o.getAttributeKeys()},getAttribute:e=>o.getAttribute(e)}}function Ah(o,e,t){for(const n of e.getAttributeKeys())o.checkAttribute(e,n)||t.removeAttribute(n,e)}class x_ extends ue{constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(t,n)=>this._convertItem(t,n),convertChildren:(t,n)=>this._convertChildren(t,n),safeInsert:(t,n)=>this._safeInsert(t,n),updateConversionResult:(t,n)=>this._updateConversionResult(t,n),splitToAllowedParent:(t,n)=>this._splitToAllowedParent(t,n),getSplitParts:t=>this._getSplitParts(t),keepEmptyElement:t=>this._keepEmptyElement(t)}}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(s,a){let c;for(const d of new ao(s)){const u={};for(const m of d.getAttributeKeys())u[m]=d.getAttribute(m);const f=a.createElement(d.name,u);c&&a.insert(f,c),c=ie._createAt(f,0)}return c}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=Gr.createFrom(e),this.conversionApi.store={};const{modelRange:i}=this._convertItem(e,this._modelCursor),r=t.createDocumentFragment();if(i){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))t.append(s,r);r.markers=function(s,a){const c=new Set,d=new Map,u=Q._createIn(s).getItems();for(const f of u)f.is("element","$marker")&&c.add(f);for(const f of c){const m=f.getAttribute("data-name"),_=a.createPositionBefore(f);d.has(m)?d.get(m).end=_.clone():d.set(m,new Q(_.clone())),a.remove(f)}return d}(r,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(e,t){const n={viewItem:e,modelCursor:t,modelRange:null};if(e.is("element")?this.fire(`element:${e.name}`,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof Q))throw new y("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:ie._createAt(t,0);const i=new Q(n);for(const r of Array.from(e.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof Q&&(i.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),i=this.conversionApi.writer;t.modelRange||(t.modelRange=i.createRange(i.createPositionBefore(e),i.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(e);t.modelCursor=r?i.createPositionAt(r,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:i}=this.conversionApi;let r=n.findAllowedParent(t,e);if(r){if(r===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return ph(t,e,n)?{position:mh(t,i)}:null;const s=this.conversionApi.writer.split(t,r),a=[];for(const d of s.range.getWalker())if(d.type=="elementEnd")a.push(d.item);else{const u=a.pop(),f=d.item;this._registerSplitPair(u,f)}const c=s.range.end.parent;return this._cursorParents.set(e,c),{position:s.position,cursorParent:c}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class E_{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class D_{constructor(e){this.domParser=new DOMParser,this.domConverter=new sa(e,{renderingMode:"data"}),this.htmlWriter=new E_}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class T_ extends ue{constructor(e,t){super(),this.model=e,this.mapper=new eh,this.downcastDispatcher=new th({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,i,r)=>{if(!r.consumable.consume(i.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(i.range.start),c=s.createText(i.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,r)=>{r.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||r.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new x_({schema:e.schema}),this.viewDocument=new ta(t),this.stylesProcessor=t,this.htmlProcessor=new D_(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new ru(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:r,consumable:s,writer:a})=>{let c=i.modelCursor;if(!s.test(i.viewItem))return;if(!r.checkChild(c,"$text")){if(!ph(c,"$text",r)||i.viewItem.data.trim().length==0)return;c=mh(c,a)}s.consume(i.viewItem);const d=a.createText(i.viewItem.data);a.insert(d,c),i.modelRange=a.createRange(c,c.getShiftedBy(d.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),at.prototype.decorate.call(this,"init"),at.prototype.decorate.call(this,"set"),at.prototype.decorate.call(this,"get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},fh)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new y("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const r=Q._createIn(e),s=new io(n);this.mapper.bindElements(e,s);const a=e.is("documentFragment")?e.markers:function(c){const d=[],u=c.root.document;if(!u)return new Map;const f=Q._createIn(c);for(const m of u.model.markers){const _=m.getRange(),x=_.isCollapsed,D=_.start.isEqual(f.start)||_.end.isEqual(f.end);if(x&&D)d.push([m.name,_]);else{const B=f.getIntersection(_);B&&d.push([m.name,B])}}return d.sort(([m,_],[x,D])=>{if(_.end.compareWith(D.start)!=="after")return 1;if(_.start.compareWith(D.end)!=="before")return-1;switch(_.start.compareWith(D.start)){case"before":return 1;case"after":return-1;default:switch(_.end.compareWith(D.end)){case"before":return 1;case"after":return-1;default:return x.localeCompare(m)}}}),new Map(d)}(e);return this.downcastDispatcher.convert(r,a,i,t),s}init(e){if(this.model.document.version)throw new y("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new y("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(t)){const r=this.model.document.getRoot(i);n.insert(this.parse(t[i],r),r,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new y("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);i.remove(i.createRangeIn(s)),i.insert(this.parse(n[r],s),s,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class S_{constructor(e,t){this._helpers=new Map,this._downcast=kt(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=kt(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new y("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new y("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of il(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of il(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of il(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new y("conversion-group-exists",this);const i=n?new s_(t):new l_(t);this._helpers.set(e,i)}}function*il(o){if(o.model.values)for(const e of o.model.values){const t={key:o.model.key,value:e},n=o.view[e],i=o.upcastAlso?o.upcastAlso[e]:void 0;yield*Ch(t,n,i)}else yield*Ch(o.model,o.view,o.upcastAlso)}function*Ch(o,e,t){if(yield{model:o,view:e},t)for(const n of kt(t))yield{model:o,view:n}}class Ho{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},G("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:i=!1,isTyping:r=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=i,this.isTyping=r}get type(){return G("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class I_{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){const t=e;switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of t.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const n=this._isInInsertedElement(t.sourcePosition.parent),i=this._isInInsertedElement(t.targetPosition.parent);n||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),i||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const n=Q._createFromPositionAndShift(t.position,1);for(const i of this._markerCollection.getMarkersIntersectingRange(n)){const r=i.getData();this.bufferMarkerChange(i.name,r,r)}break}case"split":{const n=t.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const n=t.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const i=t.graveyardPosition.parent;this._markInsert(i,t.graveyardPosition.offset,1);const r=t.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,t.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const i=this._changedMarkers.get(e);i?(i.newMarkerData=n,i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,i=!e.range&&t.range,r=e.range&&t.range&&!e.range.isEqual(t.range);if(n||i||r)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((u,f)=>u.offset===f.offset?u.type!=f.type?u.type=="remove"?-1:1:0:u.offset<f.offset?-1:1),r=this._elementSnapshots.get(n),s=vh(n.getChildren()),a=M_(r.length,i);let c=0,d=0;for(const u of a)if(u==="i")t.push(this._getInsertDiff(n,c,s[c])),c++;else if(u==="r")t.push(this._getRemoveDiff(n,c,r[d])),d++;else if(u==="a"){const f=s[c].attributes,m=r[d].attributes;let _;if(s[c].name=="$text")_=new Q(ie._createAt(n,c),ie._createAt(n,c+1));else{const x=n.offsetToIndex(c);_=new Q(ie._createAt(n,c),ie._createAt(n.getChild(x),0))}t.push(...this._getAttributesDiff(_,m,f)),c++,d++}else c++,d++}t.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<t.length;n++){const r=t[i],s=t[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,d=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||d?(r.length++,d&&(r.range.end=r.range.end.getShiftedBy(1)),t[n]=null):i=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(N_),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=Q._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_markInsert(e,t,n){const i={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i)}_markRemove(e,t,n){const i={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,vh(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const i=e.offset+e.howMany,r=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<r&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<r){const s=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:i,howMany:s-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=e.howMany;else if(i<=r)if(e.offset<n.offset){const s=i-n.offset;n.offset=e.offset,n.howMany-=s,e.nodesToHandle-=s}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<r){const s=r-e.offset;n.howMany-=s,e.nodesToHandle-=s}}if(n.type=="remove"&&(i<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const s=i-n.offset;n.offset=e.offset,n.howMany-=s}else if(e.offset<r)if(i<=r){const s=n.howMany;n.howMany=e.offset-n.offset;const a=s-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&i>n.offset){if(i>r){const s={type:"attribute",offset:r,howMany:i-r,count:this._changeCount++};this._handleChange(s,t),t.push(s)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<r&&(i>r?(e.nodesToHandle=i-r,e.offset=r):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&i>n.offset){const s={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(s,t),t.push(s),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&i<=r?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&i>=r&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:ie._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:ie._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const i=[];n=new Map(n);for(const[r,s]of t){const a=n.has(r)?n.get(r):null;a!==s&&i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return i}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),i=e.startOffset;if(n){for(const r of n)if(r.type=="insert"&&i>=r.offset&&i<r.offset+r.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const i=new Q(ie._createAt(e,t),ie._createAt(e,t+n));for(const r of i.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function vh(o){const e=[];for(const t of o)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function M_(o,e){const t=[];let n=0,i=0;for(const r of e){if(r.offset>n){for(let s=0;s<r.offset-n;s++)t.push("e");i+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)t.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)t.push("r");n=r.offset,i+=r.howMany}else t.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,i+=r.howMany}if(i<o)for(let r=0;r<o-i-n;r++)t.push("e");return t}function N_(o){const e="position"in o&&o.position.root.rootName=="$graveyard",t="range"in o&&o.range.root.rootName=="$graveyard";return!e&&!t}class B_{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new y("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let i=t-1;for(const[a,c]of this._gaps)e>a&&e<c&&(e=c),i>a&&i<c&&(i=a-1);if(i<n.baseVersion||e>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(e);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(i);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class ka extends Ye{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}function yh(o,e){return!!(t=o.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(e));var t}function xh(o,e){return!!(t=o.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}ka.prototype.is=function(o,e){return e?e===this.name&&(o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"):o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"||o==="node"||o==="model:node"};const P_=function(){const o=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${o}|${e}(?:\u200D${e})*`,"ug")}();function L_(o,e){const t=String(o).matchAll(P_);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const ol="$graveyard";class O_ extends ue{constructor(e){super(),this.model=e,this.history=new B_,this.selection=new mn(this),this.roots=new ln({idProperty:"rootName"}),this.differ=new I_(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",ol),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,i,r,s)=>{const a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),i===null&&n.on("change",(c,d)=>{const u=n.getData();this.differ.bufferMarkerChange(n.name,{...u,range:d},u)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(ol)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new y("model-document-createroot-name-exists",this,{name:t});const n=new ka(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=ol)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Zs(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,i=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(i)||t.createRange(i)}_validateSelectionRange(e){return Eh(e.start)&&Eh(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Eh(o){const e=o.textNode;if(e){const t=e.data,n=o.offset-e.startOffset;return!yh(t,n)&&!xh(t,n)}return!0}class z_ extends ue{constructor(){super(),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof Uo?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,i=!1){const r=e instanceof Uo?e.name:e;if(r.includes(","))throw new y("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const d=s.getData(),u=s.getRange();let f=!1;return u.isEqual(t)||(s._attachLiveRange(Dn.fromRange(t)),f=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,f=!0),typeof i=="boolean"&&i!=s.affectsData&&(s._affectsData=i,f=!0),f&&this.fire(`update:${r}`,s,u,t,d),s}const a=Dn.fromRange(t),c=new Uo(r,a,n,i);return this._markers.set(r,c),this.fire(`update:${r}`,c,null,t,{...c.getData(),range:null}),c}_remove(e){const t=e instanceof Uo?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof Uo?e.name:e,n=this._markers.get(t);if(!n)throw new y("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire(`update:${t}`,n,i,i,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class Uo extends w(Si){constructor(e,t,n,i){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new y("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Uo.prototype.is=function(o){return o==="marker"||o==="model:marker"};class kn{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e,t){return new this(e.baseVersion)}}function rl(o,e){const t=Th(e),n=t.reduce((s,a)=>s+a.offsetSize,0),i=o.parent;Qr(o);const r=o.index;return i._insertChild(r,t),Yr(i,r+t.length),Yr(i,r),new Q(o,o.getShiftedBy(n))}function Dh(o){if(!o.isFlat)throw new y("operation-utils-remove-range-not-flat",this);const e=o.start.parent;Qr(o.start),Qr(o.end);const t=e._removeChildren(o.start.index,o.end.index-o.start.index);return Yr(e,o.start.index),t}function Kr(o,e){if(!o.isFlat)throw new y("operation-utils-move-range-not-flat",this);const t=Dh(o);return rl(e=e._getTransformedByDeletion(o.start,o.end.offset-o.start.offset),t)}function Th(o){const e=[];(function t(n){if(typeof n=="string")e.push(new Ze(n));else if(n instanceof En)e.push(new Ze(n.data,n.getAttributes()));else if(n instanceof Ii)e.push(n);else if(Gt(n))for(const i of n)t(i)})(o);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof Ze&&i instanceof Ze&&Sh(n,i)&&(e.splice(t-1,2,new Ze(i.data+n.data,i.getAttributes())),t--)}return e}function Yr(o,e){const t=o.getChild(e-1),n=o.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&Sh(t,n)){const i=new Ze(t.data+n.data,t.getAttributes());o._removeChildren(e-1,2),o._insertChild(e-1,i)}}function Qr(o){const e=o.textNode,t=o.parent;if(e){const n=o.offset-e.startOffset,i=e.index;t._removeChildren(i,1);const r=new Ze(e.data.substr(0,n),e.getAttributes()),s=new Ze(e.data.substr(n),e.getAttributes());t._insertChild(i,[r,s])}}function Sh(o,e){const t=o.getAttributes(),n=e.getAttributes();for(const i of t){if(i[1]!==e.getAttribute(i[0]))return!1;n.next()}return n.next().done}const Ih=function(o,e){return zu(o,e)};class wt extends kn{constructor(e,t,n,i,r){super(r),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new wt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new wt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new y("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Ih(e.getAttribute(this.key),this.oldValue))throw new y("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new y("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Ih(this.oldValue,this.newValue)||function(e,t,n){Qr(e.start),Qr(e.end);for(const i of e.getItems({shallow:!0})){const r=i.is("$textProxy")?i.textNode:i;n!==null?r._setAttribute(t,n):r._removeAttribute(t),Yr(r.parent,r.index)}Yr(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new wt(Q.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class He extends kn{constructor(e,t,n,i){super(i),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new He(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new He(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new y("move-operation-nodes-do-not-exist",this);if(e===t&&n<i&&i<n+this.howMany)throw new y("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&vt(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new y("move-operation-node-into-itself",this)}}_execute(){Kr(Q._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=ie.fromJSON(e.sourcePosition,t),i=ie.fromJSON(e.targetPosition,t);return new this(n,e.howMany,i,e.baseVersion)}}class St extends kn{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new Ur(Th(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new Ur([...this.nodes].map(n=>n._clone(!0))),t=new St(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new ie(e,[0]);return new He(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new y("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new Ur([...e].map(t=>t._clone(!0))),rl(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const r of e.nodes)r.name?n.push(Ye.fromJSON(r)):n.push(Ze.fromJSON(r));const i=new St(ie.fromJSON(e.position,t),n,e.baseVersion);return i.shouldReceiveAttributes=e.shouldReceiveAttributes,i}}class on extends kn{constructor(e,t,n,i,r,s){super(s),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=i}get type(){return"marker"}clone(){return new on(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new on(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new on(e.name,e.oldRange?Q.fromJSON(e.oldRange,t):null,e.newRange?Q.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class It extends kn{get type(){return"noop"}clone(){return new It(this.baseVersion)}getReversed(){return new It(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class rn extends kn{constructor(e,t,n,i){super(i),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new rn(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new rn(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Ye))throw new y("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new y("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new rn(ie.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class si extends kn{constructor(e,t,n,i,r){super(r),this.root=e,this.key=t,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new si(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new si(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new y("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new y("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new y("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new y("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new si(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class ft extends kn{constructor(e,t,n,i,r){super(r),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new ie(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Q(this.sourcePosition,e)}clone(){return new ft(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new ie(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new Je(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new y("merge-operation-source-position-invalid",this);if(!t.parent)throw new y("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new y("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;Kr(Q._createIn(e),this.targetPosition),Kr(Q._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=ie.fromJSON(e.sourcePosition,t),i=ie.fromJSON(e.targetPosition,t),r=ie.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,i,r,e.baseVersion)}}class Je extends kn{constructor(e,t,n,i,r){super(r),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new ie(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new Q(this.splitPosition,e)}clone(){return new Je(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new ie(e,[0]);return new ft(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new y("split-operation-position-invalid",this);if(!e.parent)throw new y("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new y("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new y("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)Kr(Q._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();rl(this.insertionPosition,t)}Kr(new Q(ie._createAt(e,this.splitPosition.offset),ie._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new ie(e.root,t,"toPrevious")}static fromJSON(e,t){const n=ie.fromJSON(e.splitPosition,t),i=ie.fromJSON(e.insertionPosition,t),r=e.graveyardPosition?ie.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,i,r,e.baseVersion)}}const Tn={};Tn[wt.className]=wt,Tn[St.className]=St,Tn[on.className]=on,Tn[He.className]=He,Tn[It.className]=It,Tn[kn.className]=kn,Tn[rn.className]=rn,Tn[si.className]=si,Tn[Je.className]=Je,Tn[ft.className]=ft;class R_{static fromJSON(e,t){return Tn[e.__className].fromJSON(e,t)}}class j_ extends kn{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new y("detach-operation-on-document-node",this)}_execute(){Dh(Q._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class ai extends Si{constructor(e){super(),this.markers=new Map,this._children=new Ur,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Ye.fromJSON(n)):t.push(Ze.fromJSON(n));return new ai(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new Ze(i)]:(Gt(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new Ze(r):r instanceof En?new Ze(r.data,r.getAttributes()):r))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}}ai.prototype.is=function(o){return o==="documentFragment"||o==="model:documentFragment"};class F_{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Ze(e,t)}createElement(e,t){return new Ye(e,t)}createDocumentFragment(){return new ai}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof Ze&&e.data=="")return;const i=ie._createAt(t,n);if(e.parent){if(Bh(e.root,i.root))return void this.move(Q._createOn(e),i);if(e.root.document)throw new y("model-writer-insert-forbidden-move",this);this.remove(e)}const r=i.root.document?i.root.document.version:null,s=new St(i,e,r);if(e instanceof Ze&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),e instanceof ai)for(const[a,c]of e.markers){const d=ie._createAt(c.root,0),u={range:new Q(c.start._getCombined(d,i),c.end._getCombined(d,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,u):this.addMarker(a,u)}}insertText(e,t,n,i){t instanceof ai||t instanceof Ye||t instanceof ie?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,i)}insertElement(e,t,n,i){t instanceof ai||t instanceof Ye||t instanceof ie?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,i)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof ai||t instanceof Ye?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof ai||t instanceof Ye?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof Q){const i=n.getMinimalFlatRanges();for(const r of i)Mh(this,e,t,r)}else Nh(this,e,t,n)}setAttributes(e,t){for(const[n,i]of Z(e))this.setAttribute(n,i,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof Q){const n=t.getMinimalFlatRanges();for(const i of n)Mh(this,e,null,i)}else Nh(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(e instanceof Q)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof Q))throw new y("writer-move-invalid-range",this);if(!e.isFlat)throw new y("writer-move-range-not-flat",this);const i=ie._createAt(t,n);if(i.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!Bh(e.root,i.root))throw new y("writer-move-different-document",this);const r=e.root.document?e.root.document.version:null,s=new He(e.start,e.end.offset-e.start.offset,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof Q?e:Q._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),V_(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Ye))throw new y("writer-merge-no-element-before",this);if(!(n instanceof Ye))throw new y("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(Q._createIn(n),ie._createAt(t,"end")),this.remove(n)}_merge(e){const t=ie._createAt(e.nodeBefore,"end"),n=ie._createAt(e.nodeAfter,0),i=e.root.document.graveyard,r=new ie(i,[0]),s=e.root.document.version,a=new ft(n,e.nodeAfter.maxOffset,t,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Ye))throw new y("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,i=new rn(ie._createBefore(e),e.name,t,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(e,t){this._assertWriterUsedCorrectly();let n,i,r=e.parent;if(!r.parent)throw new y("writer-split-element-no-parent",this);if(t||(t=r.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new y("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-e.offset,c=Je.getInsertionPosition(e),d=new Je(e,a,c,null,s);this.batch.addOperation(d),this.model.applyOperation(d),n||i||(n=r,i=e.parent.nextSibling),r=(e=this.createPositionAfter(e.parent)).parent}while(r!==t);return{position:e,range:new Q(ie._createAt(n,"end"),ie._createAt(i,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new y("writer-wrap-range-not-flat",this);const n=t instanceof Ye?t:new Ye(t);if(n.childCount>0)throw new y("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new y("writer-wrap-element-attached",this);this.insert(n,e.start);const i=new Q(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(i,ie._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new y("writer-unwrap-element-no-parent",this);this.move(Q._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new y("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,i=t.range,r=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new y("writer-addmarker-marker-exists",this);if(!i)throw new y("writer-addmarker-no-range",this);return n?(Zr(this,e,null,i,r),this.model.markers.get(e)):this.model.markers._set(e,i,n,r)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,i=this.model.markers.get(n);if(!i)throw new y("writer-updatemarker-marker-not-exists",this);if(!t)return G("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const r=typeof t.usingOperation=="boolean",s=typeof t.affectsData=="boolean",a=s?t.affectsData:i.affectsData;if(!r&&!t.range&&!s)throw new y("writer-updatemarker-wrong-options",this);const c=i.getRange(),d=t.range?t.range:c;r&&t.usingOperation!==i.managedUsingOperations?t.usingOperation?Zr(this,n,null,d,a):(Zr(this,n,c,null,a),this.model.markers._set(n,d,void 0,a)):i.managedUsingOperations?Zr(this,n,c,d,a):this.model.markers._set(n,d,void 0,a)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new y("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Zr(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,i]of Z(e))this._setSelectionAttribute(n,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=mn._getStoreAttributeKey(e);this.setAttribute(i,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=mn._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new y("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let r=!1;if(e==="move"){const s=t;r=s.containsPosition(i.start)||s.start.isEqual(i.start)||s.containsPosition(i.end)||s.end.isEqual(i.end)}else{const s=t,a=s.nodeBefore,c=s.nodeAfter,d=i.start.parent==a&&i.start.isAtEnd,u=i.end.parent==c&&i.end.offset==0,f=i.end.nodeAfter==c,m=i.start.nodeAfter==c;r=d||u||f||m}r&&this.updateMarker(n.name,{range:i})}}}function Mh(o,e,t,n){const i=o.model,r=i.document;let s,a,c,d=n.start;for(const f of n.getWalker({shallow:!0}))c=f.item.getAttribute(e),s&&a!=c&&(a!=t&&u(),d=s),s=f.nextPosition,a=c;function u(){const f=new Q(d,s),m=f.root.document?r.version:null,_=new wt(f,e,a,t,m);o.batch.addOperation(_),i.applyOperation(_)}s instanceof ie&&s!=d&&a!=t&&u()}function Nh(o,e,t,n){const i=o.model,r=i.document,s=n.getAttribute(e);let a,c;if(s!=t){if(n.root===n){const d=n.document?r.version:null;c=new si(n,e,s,t,d)}else{a=new Q(ie._createBefore(n),o.createPositionAfter(n));const d=a.root.document?r.version:null;c=new wt(a,e,s,t,d)}o.batch.addOperation(c),i.applyOperation(c)}}function Zr(o,e,t,n,i){const r=o.model,s=r.document,a=new on(e,t,n,r.markers,!!i,s.version);o.batch.addOperation(a),r.applyOperation(a)}function V_(o,e,t,n){let i;if(o.root.document){const r=n.document,s=new ie(r.graveyard,[0]);i=new He(o,e,s,r.version)}else i=new j_(o,e);t.addOperation(i),n.applyOperation(i)}function Bh(o,e){return o===e||o instanceof ka&&e instanceof ka}function H_(o){o.document.registerPostFixer(e=>function(t,n){const i=n.document.selection,r=n.schema,s=[];let a=!1;for(const c of i.getRanges()){const d=U_(c,r);d&&!d.isEqual(c)?(s.push(d),a=!0):s.push(c)}return a&&t.setSelection(function(c){const d=[...c],u=new Set;let f=1;for(;f<d.length;){const m=d[f],_=d.slice(0,f);for(const[x,D]of _.entries())if(!u.has(x)){if(m.isEqual(D))u.add(x);else if(m.isIntersecting(D)){u.add(x),u.add(f);const B=m.getJoined(D);d.push(B)}}f++}return d.filter((m,_)=>!u.has(_))}(s),{backward:i.isBackward}),!1}(e,o))}function U_(o,e){return o.isCollapsed?function(t,n){const i=t.start,r=n.getNearestSelectionRange(i);if(!r){const a=i.getAncestors().reverse().find(c=>n.isObject(c));return a?Q._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return i.isEqual(s)?null:new Q(s)}(o,e):function(t,n){const{start:i,end:r}=t,s=n.checkChild(i,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(i),d=n.getLimitElement(r);if(c===d){if(s&&a)return null;if(function(m,_,x){const D=m.nodeAfter&&!x.isLimit(m.nodeAfter)||x.checkChild(m,"$text"),B=_.nodeBefore&&!x.isLimit(_.nodeBefore)||x.checkChild(_,"$text");return D||B}(i,r,n)){const m=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),_=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),x=m?m.start:i,D=_?_.end:r;return new Q(x,D)}}const u=c&&!c.is("rootElement"),f=d&&!d.is("rootElement");if(u||f){const m=i.nodeAfter&&r.nodeBefore&&i.nodeAfter.parent===r.nodeBefore.parent,_=u&&(!m||!Lh(i.nodeAfter,n)),x=f&&(!m||!Lh(r.nodeBefore,n));let D=i,B=r;return _&&(D=ie._createBefore(Ph(c,n))),x&&(B=ie._createAfter(Ph(d,n))),new Q(D,B)}return null}(o,e)}function Ph(o,e){let t=o,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Lh(o,e){return o&&e.isSelectable(o)}class jt extends w(ie){constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new y("model-liveposition-root-not-rootelement",e);q_.call(this)}detach(){this.stopListening()}toPosition(){return new ie(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function q_(){this.listenTo(this.root.document.model,"applyOperation",(o,e)=>{const t=e[0];t.isDocumentOperation&&W_.call(this,t)},{priority:"low"})}function W_(o){const e=this.getTransformedByOperation(o);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}function $_(o,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=o.schema;o.change(r=>{if(!t.doNotResetEntireContent&&function(d,u){const f=d.getLimitElement(u);if(!u.containsEntireContent(f))return!1;const m=u.getFirstRange();return m.start.parent==m.end.parent?!1:d.checkChild(f,"paragraph")}(i,e))return void function(d,u){const f=d.model.schema.getLimitElement(u);d.remove(d.createRangeIn(f)),Rh(d,d.createPositionAt(f,0),u)}(r,e);const s={};if(!t.doNotAutoparagraph){const d=e.getSelectedElement();d&&Object.assign(s,i.getAttributesWithProperty(d,"copyOnReplace",!0))}const[a,c]=function(d){const u=d.root.document.model,f=d.start;let m=d.end;if(u.hasContent(d,{ignoreMarkers:!0})){const _=function(x){const D=x.parent,B=D.root.document.model.schema,R=D.getAncestors({parentFirst:!0,includeSelf:!0});for(const U of R){if(B.isLimit(U))return null;if(B.isBlock(U))return U}}(m);if(_&&m.isTouching(u.createPositionAt(_,0))){const x=u.createSelection(d);u.modifySelection(x,{direction:"backward"});const D=x.getLastPosition(),B=u.createRange(D,m);u.hasContent(B,{ignoreMarkers:!0})||(m=D)}}return[jt.fromPosition(f,"toPrevious"),jt.fromPosition(m,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),t.leaveUnmerged||(function(d,u,f){const m=d.model;if(!sl(d.model.schema,u,f))return;const[_,x]=function(D,B){const R=D.getAncestors(),U=B.getAncestors();let J=0;for(;R[J]&&R[J]==U[J];)J++;return[R[J],U[J]]}(u,f);!_||!x||(!m.hasContent(_,{ignoreMarkers:!0})&&m.hasContent(x,{ignoreMarkers:!0})?zh(d,u,f,_.parent):Oh(d,u,f,_.parent))}(r,a,c),i.removeDisallowedAttributes(a.parent.getChildren(),r)),jh(r,e,a),!t.doNotAutoparagraph&&function(d,u){const f=d.checkChild(u,"$text"),m=d.checkChild(u,"paragraph");return!f&&m}(i,a)&&Rh(r,a,e,s),a.detach(),c.detach()})}function Oh(o,e,t,n){const i=e.parent,r=t.parent;if(i!=n&&r!=n){for(e=o.createPositionAfter(i),(t=o.createPositionBefore(r)).isEqual(e)||o.insert(r,e),o.merge(e);t.parent.isEmpty;){const s=t.parent;t=o.createPositionBefore(s),o.remove(s)}sl(o.model.schema,e,t)&&Oh(o,e,t,n)}}function zh(o,e,t,n){const i=e.parent,r=t.parent;if(i!=n&&r!=n){for(e=o.createPositionAfter(i),(t=o.createPositionBefore(r)).isEqual(e)||o.insert(i,t);e.parent.isEmpty;){const s=e.parent;e=o.createPositionBefore(s),o.remove(s)}t=o.createPositionBefore(r),function(s,a){const c=a.nodeBefore,d=a.nodeAfter;c.name!=d.name&&s.rename(c,d.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(d.getAttributes()),c),s.merge(a)}(o,t),sl(o.model.schema,e,t)&&zh(o,e,t,n)}}function sl(o,e,t){const n=e.parent,i=t.parent;return n!=i&&!o.isLimit(n)&&!o.isLimit(i)&&function(r,s,a){const c=new Q(r,s);for(const d of c.getWalker())if(a.isLimit(d.item))return!1;return!0}(e,t,o)}function Rh(o,e,t,n={}){const i=o.createElement("paragraph");o.model.schema.setAllowedAttributes(i,n,o),o.insert(i,e),jh(o,t,o.createPositionAt(i,0))}function jh(o,e,t){e instanceof mn?o.setSelection(t):e.setTo(t)}function Fh(o,e){const t=[];Array.from(o.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(o.start)||n.start.isEqual(o.start))&&(n.end.isBefore(o.end)||n.end.isEqual(o.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const r=e.createRangeOn(i);i=i.parent,e.remove(r)}})}jt.prototype.is=function(o){return o==="livePosition"||o==="model:livePosition"||o=="position"||o==="model:position"};var Vh=I(4717),G_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Vh.Z,G_),Vh.Z.locals;const ba=new WeakMap;function Hh(o){const{view:e,element:t,text:n,isDirectHost:i=!0,keepOnFocus:r=!1}=o,s=e.document;ba.has(s)||(ba.set(s,new Map),s.registerPostFixer(a=>al(s,a)),s.on("change:isComposing",()=>{e.change(a=>al(s,a))},{priority:"high"})),ba.get(s).set(t,{text:n,isDirectHost:i,keepOnFocus:r,hostElement:i?t:null}),e.change(a=>al(s,a))}function K_(o,e){return!!e.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",e),!0)}function al(o,e){const t=ba.get(o),n=[];let i=!1;for(const[r,s]of t)s.isDirectHost&&(n.push(r),Uh(e,r,s)&&(i=!0));for(const[r,s]of t){if(s.isDirectHost)continue;const a=Y_(r);a&&(n.includes(a)||(s.hostElement=a,Uh(e,r,s)&&(i=!0)))}return i}function Uh(o,e,t){const{text:n,isDirectHost:i,hostElement:r}=t;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||e.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(m=>!m.is("uiElement")))return!1;const u=a.document,f=u.selection.anchor;return!(u.isComposing&&f&&f.parent===a||!c&&u.isFocused&&(!f||f.parent===a))}(r,t.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(o,r)&&(s=!0):K_(o,r)&&(s=!0),s}function Y_(o){if(o.childCount){const e=o.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const cl=new Map;function je(o,e,t){let n=cl.get(o);n||(n=new Map,cl.set(o,n)),n.set(e,t)}function Q_(o){return[o]}function qh(o,e,t={}){const n=function(i,r){const s=cl.get(i);return s&&s.has(r)?s.get(r):Q_}(o.constructor,e.constructor);try{return n(o=o.clone(),e,t)}catch(i){throw i}}function Z_(o,e,t){o=o.slice(),e=e.slice();const n=new J_(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(o),n.setOriginalOperations(e);const i=n.originalOperations;if(o.length==0||e.length==0)return{operationsA:o,operationsB:e,originalOperations:i};const r=new WeakMap;for(const c of o)r.set(c,0);const s={nextBaseVersionA:o[o.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:o.length,originalOperationsBCount:e.length};let a=0;for(;a<o.length;){const c=o[a],d=r.get(c);if(d==e.length){a++;continue}const u=e[d],f=qh(c,u,n.getContext(c,u,!0)),m=qh(u,c,n.getContext(u,c,!1));n.updateRelation(c,u),n.setOriginalOperations(f,c),n.setOriginalOperations(m,u);for(const _ of f)r.set(_,d+m.length);o.splice(a,1,...f),e.splice(d,1,...m)}if(t.padWithNoOps){const c=o.length-s.originalOperationsACount,d=e.length-s.originalOperationsBCount;$h(o,d-c),$h(e,c-d)}return Wh(o,s.nextBaseVersionB),Wh(e,s.nextBaseVersionA),{operationsA:o,operationsB:e,originalOperations:i}}class J_{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const i of e)this.originalOperations.set(i,n||i)}updateRelation(e,t){if(e instanceof He)t instanceof ft?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter"):t instanceof He&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter"));else if(e instanceof Je){if(t instanceof ft)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");else if(t instanceof He)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=Q._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=n.end.offset-e.splitPosition.offset,r=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:i,offset:r})}}}else if(e instanceof ft)t instanceof ft?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement")):t instanceof Je&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource");else if(e instanceof on){const n=e.newRange;if(!n)return;if(t instanceof He){const i=Q._createFromPositionAndShift(t.sourcePosition,t.howMany),r=i.containsPosition(n.start)||i.start.isEqual(n.start),s=i.containsPosition(n.end)||i.end.isEqual(n.end);!r&&!s||i.containsRange(n)||this._setRelation(e,t,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(t instanceof ft){const i=n.start.isEqual(t.targetPosition),r=n.start.isEqual(t.deletionPosition),s=n.end.isEqual(t.deletionPosition),a=n.end.isEqual(t.sourcePosition);(i||r||s||a)&&this._setRelation(e,t,{wasInLeftElement:i,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),i=this._history.getUndoneOperation(n);if(!i)return null;const r=this.originalOperations.get(e),s=this._relations.get(r);return s&&s.get(i)||null}_setRelation(e,t,n){const i=this.originalOperations.get(e),r=this.originalOperations.get(t);let s=this._relations.get(i);s||(s=new Map,this._relations.set(i,s)),s.set(r,n)}}function Wh(o,e){for(const t of o)t.baseVersion=e++}function $h(o,e){for(let t=0;t<e;t++)o.push(new It(0))}function Gh(o,e,t){const n=o.nodes.getNode(0).getAttribute(e);if(n==t)return null;const i=new Q(o.position,o.position.getShiftedBy(o.howMany));return new wt(i,e,n,t,0)}function Kh(o,e){return o.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function qo(o,e){const t=[];for(let n=0;n<o.length;n++){const i=o[n],r=new He(i.start,i.end.offset-i.start.offset,e,0);t.push(r);for(let s=n+1;s<o.length;s++)o[s]=o[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return t}je(wt,wt,(o,e,t)=>{if(o.key===e.key&&o.range.start.hasSameParentAs(e.range.start)){const n=o.range.getDifference(e.range).map(r=>new wt(r,o.key,o.oldValue,o.newValue,0)),i=o.range.getIntersection(e.range);return i&&t.aIsStrong&&n.push(new wt(i,e.key,e.newValue,o.newValue,0)),n.length==0?[new It(0)]:n}return[o]}),je(wt,St,(o,e)=>{if(o.range.start.hasSameParentAs(e.position)&&o.range.containsPosition(e.position)){const t=o.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new wt(n,o.key,o.oldValue,o.newValue,o.baseVersion));if(e.shouldReceiveAttributes){const n=Gh(e,o.key,o.oldValue);n&&t.unshift(n)}return t}return o.range=o.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[o]}),je(wt,ft,(o,e)=>{const t=[];o.range.start.hasSameParentAs(e.deletionPosition)&&(o.range.containsPosition(e.deletionPosition)||o.range.start.isEqual(e.deletionPosition))&&t.push(Q._createFromPositionAndShift(e.graveyardPosition,1));const n=o.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(i=>new wt(i,o.key,o.oldValue,o.newValue,o.baseVersion))}),je(wt,He,(o,e)=>function(n,i){const r=Q._createFromPositionAndShift(i.sourcePosition,i.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const c=[];for(let d of a){d=d._getTransformedByDeletion(i.sourcePosition,i.howMany);const u=i.getMovedRangeStart(),f=d.start.hasSameParentAs(u),m=d._getTransformedByInsertion(u,i.howMany,f);c.push(...m)}return s&&c.push(s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),c}(o.range,e).map(n=>new wt(n,o.key,o.oldValue,o.newValue,o.baseVersion))),je(wt,Je,(o,e)=>{if(o.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||o.range.end.offset++,[o];if(o.range.start.hasSameParentAs(e.splitPosition)&&o.range.containsPosition(e.splitPosition)){const t=o.clone();return t.range=new Q(e.moveTargetPosition.clone(),o.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),o.range.end=e.splitPosition.clone(),o.range.end.stickiness="toPrevious",[o,t]}return o.range=o.range._getTransformedBySplitOperation(e),[o]}),je(St,wt,(o,e)=>{const t=[o];if(o.shouldReceiveAttributes&&o.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(o.position)){const n=Gh(o,e.key,e.newValue);n&&t.push(n)}return t}),je(St,St,(o,e,t)=>(o.position.isEqual(e.position)&&t.aIsStrong||(o.position=o.position._getTransformedByInsertOperation(e)),[o])),je(St,He,(o,e)=>(o.position=o.position._getTransformedByMoveOperation(e),[o])),je(St,Je,(o,e)=>(o.position=o.position._getTransformedBySplitOperation(e),[o])),je(St,ft,(o,e)=>(o.position=o.position._getTransformedByMergeOperation(e),[o])),je(on,St,(o,e)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertOperation(e)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertOperation(e)[0]),[o])),je(on,on,(o,e,t)=>{if(o.name==e.name){if(!t.aIsStrong)return[new It(0)];o.oldRange=e.newRange?e.newRange.clone():null}return[o]}),je(on,ft,(o,e)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByMergeOperation(e)),o.newRange&&(o.newRange=o.newRange._getTransformedByMergeOperation(e)),[o])),je(on,He,(o,e,t)=>{if(o.oldRange&&(o.oldRange=Q._createFromRanges(o.oldRange._getTransformedByMoveOperation(e))),o.newRange){if(t.abRelation){const n=Q._createFromRanges(o.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(o.newRange.start))return o.newRange.end=n.end,o.newRange.start.path=t.abRelation.path,[o];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(o.newRange.end))return o.newRange.start=n.start,o.newRange.end.path=t.abRelation.path,[o]}o.newRange=Q._createFromRanges(o.newRange._getTransformedByMoveOperation(e))}return[o]}),je(on,Je,(o,e,t)=>{if(o.oldRange&&(o.oldRange=o.oldRange._getTransformedBySplitOperation(e)),o.newRange){if(t.abRelation){const n=o.newRange._getTransformedBySplitOperation(e);return o.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?o.newRange.start=ie._createAt(e.insertionPosition):o.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(o.newRange.start=ie._createAt(e.moveTargetPosition)),o.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?o.newRange.end=ie._createAt(e.moveTargetPosition):o.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?o.newRange.end=ie._createAt(e.insertionPosition):o.newRange.end=n.end,[o]}o.newRange=o.newRange._getTransformedBySplitOperation(e)}return[o]}),je(ft,St,(o,e)=>(o.sourcePosition.hasSameParentAs(e.position)&&(o.howMany+=e.howMany),o.sourcePosition=o.sourcePosition._getTransformedByInsertOperation(e),o.targetPosition=o.targetPosition._getTransformedByInsertOperation(e),[o])),je(ft,ft,(o,e,t)=>{if(o.sourcePosition.isEqual(e.sourcePosition)&&o.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),o.sourcePosition=new ie(e.graveyardPosition.root,n),o.howMany=0,[o]}return[new It(0)]}if(o.sourcePosition.isEqual(e.sourcePosition)&&!o.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=o.targetPosition.root.rootName=="$graveyard",i=e.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const s=e.targetPosition._getTransformedByMergeOperation(e),a=o.targetPosition._getTransformedByMergeOperation(e);return[new He(s,o.howMany,a,0)]}return[new It(0)]}return o.sourcePosition.hasSameParentAs(e.targetPosition)&&(o.howMany+=e.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMergeOperation(e),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(e),o.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(e)),[o]}),je(ft,He,(o,e,t)=>{const n=Q._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&o.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(o.sourcePosition)?[new It(0)]:(o.sourcePosition.hasSameParentAs(e.targetPosition)&&(o.howMany+=e.howMany),o.sourcePosition.hasSameParentAs(e.sourcePosition)&&(o.howMany-=e.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMoveOperation(e),o.targetPosition=o.targetPosition._getTransformedByMoveOperation(e),o.graveyardPosition.isEqual(e.targetPosition)||(o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(e)),[o])}),je(ft,Je,(o,e,t)=>{if(e.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),o.deletionPosition.isEqual(e.graveyardPosition)&&(o.howMany=e.howMany)),o.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,i=e.graveyardPosition&&o.deletionPosition.isEqual(e.graveyardPosition);if(n||i||t.abRelation=="mergeTargetNotMoved")return o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(e),[o]}if(o.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return o.howMany=0,o.targetPosition=o.targetPosition._getTransformedBySplitOperation(e),[o];if(t.abRelation=="mergeSameElement"||o.sourcePosition.offset>0)return o.sourcePosition=e.moveTargetPosition.clone(),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(e),[o]}return o.sourcePosition.hasSameParentAs(e.splitPosition)&&(o.howMany=e.splitPosition.offset),o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(e),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(e),[o]}),je(He,St,(o,e)=>{const t=Q._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByInsertOperation(e,!1)[0];return o.sourcePosition=t.start,o.howMany=t.end.offset-t.start.offset,o.targetPosition.isEqual(e.position)||(o.targetPosition=o.targetPosition._getTransformedByInsertOperation(e)),[o]}),je(He,He,(o,e,t)=>{const n=Q._createFromPositionAndShift(o.sourcePosition,o.howMany),i=Q._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=t.aIsStrong,a=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?a=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(a=!1),r=o.targetPosition.isEqual(e.targetPosition)&&a?o.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):o.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Kh(o,e)&&Kh(e,o))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),qo([n],r);if(i.containsPosition(o.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),qo([n],r);const c=vt(o.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),qo([n],r);o.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?o.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(s=!1):s=!0;const d=[],u=n.getDifference(i);for(const m of u){m.start=m.start._getTransformedByDeletion(e.sourcePosition,e.howMany),m.end=m.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const _=vt(m.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",x=m._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,_);d.push(...x)}const f=n.getIntersection(i);return f!==null&&s&&(f.start=f.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),f.end=f.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),d.length===0?d.push(f):d.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?d.unshift(f):d.push(f):d.splice(1,0,f)),d.length===0?[new It(o.baseVersion)]:qo(d,r)}),je(He,Je,(o,e,t)=>{let n=o.targetPosition.clone();o.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=o.targetPosition._getTransformedBySplitOperation(e));const i=Q._createFromPositionAndShift(o.sourcePosition,o.howMany);if(i.end.isEqual(e.insertionPosition))return e.graveyardPosition||o.howMany++,o.targetPosition=n,[o];if(i.start.hasSameParentAs(e.splitPosition)&&i.containsPosition(e.splitPosition)){let s=new Q(e.splitPosition,i.end);return s=s._getTransformedBySplitOperation(e),qo([new Q(i.start,e.splitPosition),s],n)}o.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),o.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=o.targetPosition);const r=[i._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const s=i.start.isEqual(e.graveyardPosition)||i.containsPosition(e.graveyardPosition);o.howMany>1&&s&&!t.aWasUndone&&r.push(Q._createFromPositionAndShift(e.insertionPosition,1))}return qo(r,n)}),je(He,ft,(o,e,t)=>{const n=Q._createFromPositionAndShift(o.sourcePosition,o.howMany);if(e.deletionPosition.hasSameParentAs(o.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(o.type!="remove"||t.forceWeakRemove){if(o.howMany==1)return t.bWasUndone?(o.sourcePosition=e.graveyardPosition.clone(),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(e),[o]):[new It(0)]}else if(!t.aWasUndone){const r=[];let s=e.graveyardPosition.clone(),a=e.targetPosition._getTransformedByMergeOperation(e);o.howMany>1&&(r.push(new He(o.sourcePosition,o.howMany-1,o.targetPosition,0)),s=s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1),a=a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1));const c=e.deletionPosition._getCombined(o.sourcePosition,o.targetPosition),d=new He(s,1,c,0),u=d.getMovedRangeStart().path.slice();u.push(0);const f=new ie(d.targetPosition.root,u);a=a._getTransformedByMove(s,c,1);const m=new He(a,e.howMany,f,0);return r.push(d),r.push(m),r}}const i=Q._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByMergeOperation(e);return o.sourcePosition=i.start,o.howMany=i.end.offset-i.start.offset,o.targetPosition=o.targetPosition._getTransformedByMergeOperation(e),[o]}),je(rn,St,(o,e)=>(o.position=o.position._getTransformedByInsertOperation(e),[o])),je(rn,ft,(o,e)=>o.position.isEqual(e.deletionPosition)?(o.position=e.graveyardPosition.clone(),o.position.stickiness="toNext",[o]):(o.position=o.position._getTransformedByMergeOperation(e),[o])),je(rn,He,(o,e)=>(o.position=o.position._getTransformedByMoveOperation(e),[o])),je(rn,rn,(o,e,t)=>{if(o.position.isEqual(e.position)){if(!t.aIsStrong)return[new It(0)];o.oldName=e.newName}return[o]}),je(rn,Je,(o,e)=>{if(vt(o.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new rn(o.position.getShiftedBy(1),o.oldName,o.newName,0);return[o,t]}return o.position=o.position._getTransformedBySplitOperation(e),[o]}),je(si,si,(o,e,t)=>{if(o.root===e.root&&o.key===e.key){if(!t.aIsStrong||o.newValue===e.newValue)return[new It(0)];o.oldValue=e.newValue}return[o]}),je(Je,St,(o,e)=>(o.splitPosition.hasSameParentAs(e.position)&&o.splitPosition.offset<e.position.offset&&(o.howMany+=e.howMany),o.splitPosition=o.splitPosition._getTransformedByInsertOperation(e),o.insertionPosition=o.insertionPosition._getTransformedByInsertOperation(e),[o])),je(Je,ft,(o,e,t)=>{if(!o.graveyardPosition&&!t.bWasUndone&&o.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new ie(e.graveyardPosition.root,n),r=Je.getInsertionPosition(new ie(e.graveyardPosition.root,n)),s=new Je(i,0,r,null,0);return o.splitPosition=o.splitPosition._getTransformedByMergeOperation(e),o.insertionPosition=Je.getInsertionPosition(o.splitPosition),o.graveyardPosition=s.insertionPosition.clone(),o.graveyardPosition.stickiness="toNext",[s,o]}return o.splitPosition.hasSameParentAs(e.deletionPosition)&&!o.splitPosition.isAfter(e.deletionPosition)&&o.howMany--,o.splitPosition.hasSameParentAs(e.targetPosition)&&(o.howMany+=e.howMany),o.splitPosition=o.splitPosition._getTransformedByMergeOperation(e),o.insertionPosition=Je.getInsertionPosition(o.splitPosition),o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(e)),[o]}),je(Je,He,(o,e,t)=>{const n=Q._createFromPositionAndShift(e.sourcePosition,e.howMany);if(o.graveyardPosition){const r=n.start.isEqual(o.graveyardPosition)||n.containsPosition(o.graveyardPosition);if(!t.bWasUndone&&r){const s=o.splitPosition._getTransformedByMoveOperation(e),a=o.graveyardPosition._getTransformedByMoveOperation(e),c=a.path.slice();c.push(0);const d=new ie(a.root,c);return[new He(s,o.howMany,d,0)]}o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(e)}const i=o.splitPosition.isEqual(e.targetPosition);if(i&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return o.howMany+=e.howMany,o.splitPosition=o.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),o.insertionPosition=Je.getInsertionPosition(o.splitPosition),[o];if(i&&t.abRelation&&t.abRelation.howMany){const{howMany:r,offset:s}=t.abRelation;return o.howMany+=r,o.splitPosition=o.splitPosition.getShiftedBy(s),[o]}if(o.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(o.splitPosition)){const r=e.howMany-(o.splitPosition.offset-e.sourcePosition.offset);return o.howMany-=r,o.splitPosition.hasSameParentAs(e.targetPosition)&&o.splitPosition.offset<e.targetPosition.offset&&(o.howMany+=e.howMany),o.splitPosition=e.sourcePosition.clone(),o.insertionPosition=Je.getInsertionPosition(o.splitPosition),[o]}return e.sourcePosition.isEqual(e.targetPosition)||(o.splitPosition.hasSameParentAs(e.sourcePosition)&&o.splitPosition.offset<=e.sourcePosition.offset&&(o.howMany-=e.howMany),o.splitPosition.hasSameParentAs(e.targetPosition)&&o.splitPosition.offset<e.targetPosition.offset&&(o.howMany+=e.howMany)),o.splitPosition.stickiness="toNone",o.splitPosition=o.splitPosition._getTransformedByMoveOperation(e),o.splitPosition.stickiness="toNext",o.graveyardPosition?o.insertionPosition=o.insertionPosition._getTransformedByMoveOperation(e):o.insertionPosition=Je.getInsertionPosition(o.splitPosition),[o]}),je(Je,Je,(o,e,t)=>{if(o.splitPosition.isEqual(e.splitPosition)){if(!o.graveyardPosition&&!e.graveyardPosition)return[new It(0)];if(o.graveyardPosition&&e.graveyardPosition&&o.graveyardPosition.isEqual(e.graveyardPosition))return[new It(0)];if(t.abRelation=="splitBefore")return o.howMany=0,o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(e),[o]}if(o.graveyardPosition&&e.graveyardPosition&&o.graveyardPosition.isEqual(e.graveyardPosition)){const n=o.splitPosition.root.rootName=="$graveyard",i=e.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const s=[];return e.howMany&&s.push(new He(e.moveTargetPosition,e.howMany,e.splitPosition,0)),o.howMany&&s.push(new He(o.splitPosition,o.howMany,o.moveTargetPosition,0)),s}return[new It(0)]}if(o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(e)),o.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return o.howMany++,[o];if(e.splitPosition.isEqual(o.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const i=new ie(e.insertionPosition.root,n);return[o,new He(o.insertionPosition,1,i,0)]}return o.splitPosition.hasSameParentAs(e.splitPosition)&&o.splitPosition.offset<e.splitPosition.offset&&(o.howMany-=e.howMany),o.splitPosition=o.splitPosition._getTransformedBySplitOperation(e),o.insertionPosition=Je.getInsertionPosition(o.splitPosition),[o]});class X_ extends Ti{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class ll extends Ti{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class Wo{constructor(e){this.document=e}createDocumentFragment(e){return new io(this.document,e)}createElement(e,t,n){return new dn(this.document,e,t,n)}createText(e){return new L(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const i=n.getChildIndex(e);return this.removeChildren(i,1,n),this.insertChild(i,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new dn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Ot(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return se._createAt(e,t)}createPositionAfter(e){return se._createAfter(e)}createPositionBefore(e){return se._createBefore(e)}createRange(e,t){return new ve(e,t)}createRangeOn(e){return ve._createOn(e)}createRangeIn(e){return ve._createIn(e)}createSelection(...e){return new Hn(...e)}}class eA{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new y("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?Q._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new Q(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=jt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new y("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=jt.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=jt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Ye)||!this._canMergeLeft(e))return;const t=jt._createBefore(e);t.stickiness="toNext";const n=jt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=jt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=jt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Ye)||!this._canMergeRight(e))return;const t=jt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new y("insertcontent-invalid-insertion-position",this);this.position=ie._createAt(t.nodeBefore,"end");const n=jt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=jt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=jt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Ye&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Ye&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function Yh(o,e,t="auto"){const n=o.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return t=="before"||t=="after"?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const i=yt(o.getSelectedBlocks());if(!i)return e.createRange(o.focus);if(i.isEmpty)return e.createRange(e.createPositionAt(i,0));const r=e.createPositionAfter(i);return o.focus.isTouching(r)?e.createRange(r):e.createRange(e.createPositionBefore(i))}function tA(o,e,t,n,i={}){if(!o.schema.isObject(e))throw new y("insertobject-element-not-an-object",o,{object:e});let r;r=t?t instanceof Wn||t instanceof mn?t:o.createSelection(t,n):o.document.selection;let s=r;i.findOptimalPosition&&o.schema.isBlock(e)&&(s=o.createSelection(Yh(r,o,i.findOptimalPosition)));const a=yt(r.getSelectedBlocks()),c={};return a&&Object.assign(c,o.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),o.change(d=>{s.isCollapsed||o.deleteContent(s,{doNotAutoparagraph:!0});let u=e;const f=s.anchor.parent;!o.schema.checkChild(f,e)&&o.schema.checkChild(f,"paragraph")&&o.schema.checkChild("paragraph",e)&&(u=d.createElement("paragraph"),d.insert(e,u)),o.schema.setAllowedAttributes(u,c,d);const m=o.insertContent(u,s);return m.isCollapsed||i.setSelection&&function(_,x,D,B){const R=_.model;if(D=="after"){let U=x.nextSibling;!(U&&R.schema.checkChild(U,"$text"))&&R.schema.checkChild(x.parent,"paragraph")&&(U=_.createElement("paragraph"),R.schema.setAllowedAttributes(U,B,_),R.insertContent(U,_.createPositionAfter(x))),U&&_.setSelection(U,0)}else{if(D!="on")throw new y("insertobject-invalid-place-parameter-value",R);_.setSelection(x,"on")}}(d,e,i.setSelection,c),m})}function nA(o,e){const{isForward:t,walker:n,unit:i,schema:r,treatEmojiAsSingleUnit:s}=o,{type:a,item:c,nextPosition:d}=e;if(a=="text")return o.unit==="word"?function(u,f){let m=u.position.textNode;for(m||(m=f?u.position.nodeAfter:u.position.nodeBefore);m&&m.is("$text");){const _=u.position.offset-m.startOffset;if(rA(m,_,f))m=f?u.position.nodeAfter:u.position.nodeBefore;else{if(oA(m.data,_,f))break;u.next()}}return u.position}(n,t):function(u,f,m){const _=u.position.textNode;if(_){const x=_.data;let D=u.position.offset-_.startOffset;for(;yh(x,D)||f=="character"&&xh(x,D)||m&&L_(x,D);)u.next(),D=u.position.offset-_.startOffset}return u.position}(n,i,s);if(a==(t?"elementStart":"elementEnd")){if(r.isSelectable(c))return ie._createAt(c,t?"after":"before");if(r.checkChild(d,"$text"))return d}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(d,"$text"))return d}}function iA(o,e){const t=o.root,n=ie._createAt(t,e?"end":0);return e?new Q(o,n):new Q(n,o)}function oA(o,e,t){const n=e+(t?0:-1);return' ,.?!:;"-()'.includes(o.charAt(n))}function rA(o,e,t){return e===(t?o.offsetSize:0)}class sA extends at{constructor(){super(),this.markers=new z_,this.document=new O_(this),this.schema=new g_,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),H_(this),this.document.registerPostFixer(fh)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Ho,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){y.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new Ho):e instanceof Ho||(e=new Ho(e)):e=new Ho,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){y.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(i,r,s,a){return i.change(c=>{let d;d=s?s instanceof Wn||s instanceof mn?s:c.createSelection(s,a):i.document.selection,d.isCollapsed||i.deleteContent(d,{doNotAutoparagraph:!0});const u=new eA(i,c,d.anchor),f=[];let m;if(r.is("documentFragment")){if(r.markers.size){const D=[];for(const[B,R]of r.markers){const{start:U,end:J}=R,ae=U.isEqual(J);D.push({position:U,name:B,isCollapsed:ae},{position:J,name:B,isCollapsed:ae})}D.sort(({position:B},{position:R})=>B.isBefore(R)?1:-1);for(const{position:B,name:R,isCollapsed:U}of D){let J=null,ae=null;const be=B.parent===r&&B.isAtStart,ze=B.parent===r&&B.isAtEnd;be||ze?U&&(ae=be?"start":"end"):(J=c.createElement("$marker"),c.insert(J,B)),f.push({name:R,element:J,collapsed:ae})}}m=r.getChildren()}else m=[r];u.handleNodes(m);let _=u.getSelectionRange();if(r.is("documentFragment")&&f.length){const D=_?Dn.fromRange(_):null,B={};for(let R=f.length-1;R>=0;R--){const{name:U,element:J,collapsed:ae}=f[R],be=!B[U];if(be&&(B[U]=[]),J){const ze=c.createPositionAt(J,"before");B[U].push(ze),c.remove(J)}else{const ze=u.getAffectedRange();if(!ze){ae&&B[U].push(u.position);continue}ae?B[U].push(ze[ae]):B[U].push(be?ze.start:ze.end)}}for(const[R,[U,J]]of Object.entries(B))U&&J&&U.root===J.root&&c.addMarker(R,{usingOperation:!0,affectsData:!0,range:new Q(U,J)});D&&(_=D.toRange(),D.detach())}_&&(d instanceof mn?c.setSelection(_):d.setTo(_));const x=u.getAffectedRange()||i.createRange(d.anchor);return u.destroy(),x})}(this,e,t,n)}insertObject(e,t,n,i){return tA(this,e,t,n,i)}deleteContent(e,t){$_(this,e,t)}modifySelection(e,t){(function(n,i,r={}){const s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",d=!!r.treatEmojiAsSingleUnit,u=i.focus,f=new ri({boundaries:iA(u,a),singleCharacters:!0,direction:a?"forward":"backward"}),m={walker:f,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:d};let _;for(;_=f.next();){if(_.done)return;const x=nA(m,_.value);if(x)return void(i instanceof mn?n.change(D=>{D.setSelectionFocus(x)}):i.setFocus(x))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(i=>{const r=i.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,c=s.start.getCommonPath(s.end),d=a.getNodeByPath(c);let u;u=s.start.parent==s.end.parent?s:i.createRange(i.createPositionAt(d,s.start.path[c.length]),i.createPositionAt(d,s.end.path[c.length]+1));const f=u.end.offset-u.start.offset;for(const m of u.getItems({shallow:!0}))m.is("$textProxy")?i.appendText(m.data,m.getAttributes(),r):i.append(i.cloneElement(m,!0),r);if(u!=s){const m=s._getTransformedByMove(u.start,i.createPositionAt(r,0),f)[0],_=i.createRange(i.createPositionAt(r,0),m.start);Fh(i.createRange(m.end,i.createPositionAt(r,"end")),i),Fh(_,i)}return r})}(this,e)}hasContent(e,t={}){const n=e instanceof Q?e:Q._createIn(e);if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:r=!1}=t;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!i||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new ie(e,t,n)}createPositionAt(e,t){return ie._createAt(e,t)}createPositionAfter(e){return ie._createAfter(e)}createPositionBefore(e){return ie._createBefore(e)}createRange(e,t){return new Q(e,t)}createRangeIn(e){return Q._createIn(e)}createRangeOn(e){return Q._createOn(e)}createSelection(...e){return new Wn(...e)}createBatch(e){return new Ho(e)}createOperationFromJSON(e){return R_.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new F_(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return e}}class aA extends qn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(r,s)=>{this.editor.execute(i),s()}}super.set(e,t,n)}}class cA extends at{constructor(e={}){super();const t=this.constructor,n=e.language||t.defaultConfig&&t.defaultConfig.language;this._context=e.context||new Sc({language:n}),this._context._addEditor(this,!e.context);const i=Array.from(t.builtinPlugins||[]);this.config=new tn(e,t.defaultConfig),this.config.define("plugins",i),this.config.define(this._context._getEditorConfig()),this.plugins=new Ys(this,i,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new u_,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new sA;const r=new Zb;this.data=new T_(this.model,r),this.editing=new d_(this.model,r),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new S_([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new aA(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new y("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new y("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new y("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],i=e.get("extraPlugins")||[],r=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(i),n,r)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(e,...t){try{return this.commands.execute(e,...t)}catch(n){y.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}class lA{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(dl(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new y("componentfactory-item-missing",this,{name:e});return this._components.get(dl(e)).callback(this.editor.locale)}has(e){return this._components.has(dl(e))}}function dl(o){return String(o).toLowerCase()}class lo extends ln{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new y("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const r of e)i.delegate(r).to(t)}),this.on("remove",(n,i)=>{for(const r of e)i.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}class Sn extends ue{constructor(e){super(),Object.assign(this,Xh(Jh(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new y("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)_a(n)?yield n:ul(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new dA({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,r)=>new Qh({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:r})}}static extend(e,t){if(e._isRendered)throw new y("template-extend-render",[this,e]);ig(e,Xh(Jh(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new y("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),wa(this.text)?this._bindToObservable({schema:this.text,updater:uA(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const i in this.attributes){const r=t.getAttribute(i),s=this.attributes[i];n&&(n.attributes[i]=r);const a=og(s)?s[0].ns:null;if(wa(s)){const c=og(s)?s[0].value:s;n&&rg(i)&&c.unshift(r),this._bindToObservable({schema:c,updater:hA(t,i,a),data:e})}else if(i=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],e);else{n&&r&&rg(i)&&s.unshift(r);const c=s.map(d=>d&&d.value||d).reduce((d,u)=>d.concat(u),[]).reduce(tg,"");$o(c)||t.setAttributeNS(a,i,c)}}}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const r=e[i];wa(r)?this._bindToObservable({schema:[r],updater:gA(n,i),data:t}):n.style[i]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let r=0;for(const s of this.children)if(hl(s)){if(!i){s.setParent(t);for(const a of s)n.appendChild(a.element)}}else if(_a(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(Di(s))n.appendChild(s);else if(i){const a={children:[],bindings:[],attributes:{}};e.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[r,s]=t.split("@");return i.activateDomEventListener(r,s,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;Zh(e,t,n);const r=e.filter(s=>!$o(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(e,t,n));i&&i.bindings.push(r)}_revertTemplateFromNode(e,t){for(const i of t.bindings)for(const r of i)r();if(t.text)return void(e.textContent=t.text);const n=e;for(const i in t.attributes){const r=t.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],t.children[i])}}class Jr{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>Zh(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class dA extends Jr{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const i=(r,s)=>{t&&!s.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class Qh extends Jr{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!$o(super.getValue(e))&&(this.valueIfTrue||!0)}}function wa(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(wa):o instanceof Jr)}function Zh(o,e,{node:t}){const n=function(r,s){return r.map(a=>a instanceof Jr?a.getValue(s):a)}(o,t);let i;i=o.length==1&&o[0]instanceof Qh?n[0]:n.reduce(tg,""),$o(i)?e.remove():e.set(i)}function uA(o){return{set(e){o.textContent=e},remove(){o.textContent=""}}}function hA(o,e,t){return{set(n){o.setAttributeNS(t,e,n)},remove(){o.removeAttributeNS(t,e)}}}function gA(o,e){return{set(t){o.style[e]=t},remove(){o.style[e]=null}}}function Jh(o){return We(o,e=>{if(e&&(e instanceof Jr||ul(e)||_a(e)||hl(e)))return e})}function Xh(o){if(typeof o=="string"?o=function(e){return{text:[e]}}(o):o.text&&function(e){e.text=kt(e.text)}(o),o.on&&(o.eventListeners=function(e){for(const t in e)eg(e,t);return e}(o.on),delete o.on),!o.text){o.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=kt(t[n].value)),eg(t,n)}(o.attributes);const e=[];if(o.children)if(hl(o.children))e.push(o.children);else for(const t of o.children)ul(t)||_a(t)||Di(t)?e.push(t):e.push(new Sn(t));o.children=e}return o}function eg(o,e){o[e]=kt(o[e])}function tg(o,e){return $o(e)?o:$o(o)?e:`${o} ${e}`}function ng(o,e){for(const t in e)o[t]?o[t].push(...e[t]):o[t]=e[t]}function ig(o,e){if(e.attributes&&(o.attributes||(o.attributes={}),ng(o.attributes,e.attributes)),e.eventListeners&&(o.eventListeners||(o.eventListeners={}),ng(o.eventListeners,e.eventListeners)),e.text&&o.text.push(...e.text),e.children&&e.children.length){if(o.children.length!=e.children.length)throw new y("ui-template-extend-children-mismatch",o);let t=0;for(const n of e.children)ig(o.children[t++],n)}}function $o(o){return!o&&o!==0}function _a(o){return o instanceof Be}function ul(o){return o instanceof Sn}function hl(o){return o instanceof lo}function og(o){return Le(o[0])&&o[0].ns}function rg(o){return o=="class"||o=="style"}var sg=I(4793),fA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(sg.Z,fA),sg.Z.locals;class Be extends ca(at){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new ln,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Sn.bind(this,this)}createCollection(e){const t=new lo(e);return this._viewCollections.add(t),t}registerChild(e){Gt(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Gt(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Sn(e)}extendTemplate(e){Sn.extend(this.template,e)}render(){if(this.isRendered)throw new y("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}function ag({element:o,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Jn(e)&&(e=e()),Jn(n)&&(n=n());const s=function(m){return m&&m.parentNode?m.offsetParent===Te.document.body?null:m.offsetParent:null}(o),a=new gt(o),c=new gt(e);let d;const u=i&&function(m){m=Object.assign({top:0,bottom:0,left:0,right:0},m);const _=new gt(Te.window);return _.top+=m.top,_.height-=m.top,_.bottom-=m.bottom,_.height-=m.bottom,_}(r)||null,f={targetRect:c,elementRect:a,positionedElementAncestor:s,viewportRect:u};if(n||i){const m=n&&new gt(n).getVisible();Object.assign(f,{limiterRect:m,viewportRect:u}),d=function(_,x){const{elementRect:D}=x,B=D.getArea(),R=_.map(ae=>new gl(ae,x)).filter(ae=>!!ae.name);let U=0,J=null;for(const ae of R){const{limiterIntersectionArea:be,viewportIntersectionArea:ze}=ae;if(be===B)return ae;const Fe=ze**2+be**2;Fe>U&&(U=Fe,J=ae)}return J}(t,f)||new gl(t[0],f)}else d=new gl(t[0],f);return d}function cg(o){const{scrollX:e,scrollY:t}=Te.window;return o.clone().moveBy(e,t)}class gl{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCorrdinates={left:i,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=cg(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=cg(new gt(t)),i=Hu(t);let r=0,s=0;r-=n.left,s-=n.top,r+=t.scrollLeft,s+=t.scrollTop,r-=i.left,s-=i.top,e.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function fl(o){return e=>e+o}var lg=I(8793),pA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(lg.Z,pA),lg.Z.locals;const dg=fl("px"),ug=Te.document.body;class Zt extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",dg),left:t.to("left",dg)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Zt.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:ug,fitInViewport:!0},e),i=Zt._getOptimalPosition(n),r=parseInt(i.left),s=parseInt(i.top),a=i.name,c=i.config||{},{withArrow:d=!0}=c;this.top=s,this.left=r,this.position=a,this.withArrow=d}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=pl(e.target),n=e.limiter?pl(e.limiter):ug;this.listenTo(Te.document,"scroll",(i,r)=>{const s=r.target,a=t&&s.contains(t),c=n&&s.contains(n);!a&&!c&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Te.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Te.document,"scroll"),this.stopListening(Te.window,"resize")}}function pl(o){return cn(o)?o:ha(o)?o.commonAncestorContainer:typeof o=="function"?pl(o()):null}function hg(o={}){const{sideOffset:e=Zt.arrowSideOffset,heightOffset:t=Zt.arrowHeightOffset,stickyVerticalOffset:n=Zt.stickyVerticalOffset,config:i}=o;return{northWestArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left-e,name:"arrow_sw",...i&&{config:i}}),northWestArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left-.25*c.width-e,name:"arrow_smw",...i&&{config:i}}),northWestArrowSouth:(a,c)=>({top:r(a,c),left:a.left-c.width/2,name:"arrow_s",...i&&{config:i}}),northWestArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left-.75*c.width+e,name:"arrow_sme",...i&&{config:i}}),northWestArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left-c.width+e,name:"arrow_se",...i&&{config:i}}),northArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-e,name:"arrow_sw",...i&&{config:i}}),northArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-.25*c.width-e,name:"arrow_smw",...i&&{config:i}}),northArrowSouth:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s",...i&&{config:i}}),northArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-.75*c.width+e,name:"arrow_sme",...i&&{config:i}}),northArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width+e,name:"arrow_se",...i&&{config:i}}),northEastArrowSouthWest:(a,c)=>({top:r(a,c),left:a.right-e,name:"arrow_sw",...i&&{config:i}}),northEastArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.right-.25*c.width-e,name:"arrow_smw",...i&&{config:i}}),northEastArrowSouth:(a,c)=>({top:r(a,c),left:a.right-c.width/2,name:"arrow_s",...i&&{config:i}}),northEastArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.right-.75*c.width+e,name:"arrow_sme",...i&&{config:i}}),northEastArrowSouthEast:(a,c)=>({top:r(a,c),left:a.right-c.width+e,name:"arrow_se",...i&&{config:i}}),southWestArrowNorthWest:a=>({top:s(a),left:a.left-e,name:"arrow_nw",...i&&{config:i}}),southWestArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left-.25*c.width-e,name:"arrow_nmw",...i&&{config:i}}),southWestArrowNorth:(a,c)=>({top:s(a),left:a.left-c.width/2,name:"arrow_n",...i&&{config:i}}),southWestArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left-.75*c.width+e,name:"arrow_nme",...i&&{config:i}}),southWestArrowNorthEast:(a,c)=>({top:s(a),left:a.left-c.width+e,name:"arrow_ne",...i&&{config:i}}),southArrowNorthWest:a=>({top:s(a),left:a.left+a.width/2-e,name:"arrow_nw",...i&&{config:i}}),southArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left+a.width/2-.25*c.width-e,name:"arrow_nmw",...i&&{config:i}}),southArrowNorth:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n",...i&&{config:i}}),southArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left+a.width/2-.75*c.width+e,name:"arrow_nme",...i&&{config:i}}),southArrowNorthEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width+e,name:"arrow_ne",...i&&{config:i}}),southEastArrowNorthWest:a=>({top:s(a),left:a.right-e,name:"arrow_nw",...i&&{config:i}}),southEastArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.right-.25*c.width-e,name:"arrow_nmw",...i&&{config:i}}),southEastArrowNorth:(a,c)=>({top:s(a),left:a.right-c.width/2,name:"arrow_n",...i&&{config:i}}),southEastArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.right-.75*c.width+e,name:"arrow_nme",...i&&{config:i}}),southEastArrowNorthEast:(a,c)=>({top:s(a),left:a.right-c.width+e,name:"arrow_ne",...i&&{config:i}}),westArrowEast:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.left-c.width-t,name:"arrow_e",...i&&{config:i}}),eastArrowWest:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.right+t,name:"arrow_w",...i&&{config:i}}),viewportStickyNorth:(a,c,d)=>a.getIntersection(d)?{top:d.top+n,left:a.left+a.width/2-c.width/2,name:"arrowless",config:{withArrow:!1,...i}}:null};function r(a,c){return a.top-c.height-t}function s(a){return a.bottom+t}}Zt.arrowSideOffset=25,Zt.arrowHeightOffset=10,Zt.stickyVerticalOffset=20,Zt._getOptimalPosition=ag,Zt.defaultPositions=hg();var gg=I(3332),mA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(gg.Z,mA),gg.Z.locals;const fg="ck-tooltip";class Mt extends la{constructor(e){if(super(),Mt._editors.add(e),Mt._instance)return Mt._instance;Mt._instance=this,this.tooltipTextView=new Be(e.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new Zt(e.locale),this.balloonPanelView.class=fg,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=Vr(this._pinTooltip,600),this.listenTo(Te.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Te.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Te.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(Te.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(Te.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){const t=e.ui.view&&e.ui.view.body;Mt._editors.delete(e),this.stopListening(e.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),Mt._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),Mt._instance=null)}static getPositioningFunctions(e){const t=Mt.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}_onEnterOrFocus(e,{target:t}){const n=ml(t);var i;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(i=n).dataset.ckeTooltipText,position:i.dataset.ckeTooltipPosition||"s",cssClass:i.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name==="mouseleave"){if(!cn(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;const i=ml(t),r=ml(n);i&&i!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:i}){const r=yt(Mt._editors.values()).ui.view.body;r.has(this.balloonPanelView)||r.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:Mt.getPositioningFunctions(n)}),this._resizeObserver=new st(e,()=>{oo(e)||this._unpinTooltip()}),this.balloonPanelView.class=[fg,i].filter(s=>s).join(" ");for(const s of Mt._editors)this.listenTo(s.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const e of Mt._editors)this.stopListening(e.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){oo(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:Mt.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function ml(o){return cn(o)?o.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}Mt.defaultBalloonPositions=hg({heightOffset:5,sideOffset:13}),Mt._editors=new Set,Mt._instance=null;class kA extends at{constructor(e){super(),this.editor=e,this.componentFactory=new lA(e),this.focusTracker=new pn,this.tooltipManager=new Mt(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,i;e.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(t.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let d=0;d<i.length;d++){const u=i.shift();if(i.push(u),u!==c&&this._focusFocusableCandidateToolbar(u)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),e.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):e.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=t;(oo(n.element)||i.beforeFocus)&&e.push(t)}return e.sort((t,n)=>pg(t)-pg(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!oo(t.element)&&(t.focus(),!0)}}function pg(o){const{toolbarView:e,options:t}=o;let n=10;return oo(e.element)&&n--,t.isContextual&&n--,n}function Aa(o){return class extends o{setData(e){this.data.set(e)}getData(e){return this.data.get(e)}}}{const o=Aa(Object);Aa.setData=o.prototype.setData,Aa.getData=o.prototype.getData}function bA(o,e){o instanceof HTMLTextAreaElement&&(o.value=e),o.innerHTML=e}function kl(o){return class extends o{updateSourceElement(e=this.data.get()){if(!this.sourceElement)throw new y("editor-missing-sourceelement",this);const t=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;bA(this.sourceElement,t||n?e:"")}}}kl.updateSourceElement=kl(Object).prototype.updateSourceElement;class mg extends oi{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new ln({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new y("pendingactions-add-invalid-message",this);const t=new at;return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const _t={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};function bl({emitter:o,activator:e,callback:t,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!e())return;const s=typeof r.composedPath=="function"?r.composedPath():[];for(const a of n)if(a.contains(r.target)||s.includes(a))return;t()})}function wl(o){const e=o;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function _l({view:o}){o.listenTo(o.element,"submit",(e,t)=>{t.preventDefault(),o.fire("submit")},{useCapture:!0})}class wA extends lo{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Sn({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Vu(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var kg=I(6574),_A={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(kg.Z,_A),kg.Z.locals;class uo extends Be{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:n,value:i}of Array.from(e.attributes))uo.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,i);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}uo.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var bg=I(4906),AA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(bg.Z,AA),bg.Z.locals;class ot extends Be{constructor(e){super(e);const t=this.bindTemplate,n=F();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new uo,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",r=>!r),t.if("isVisible","ck-hidden",r=>!r),t.to("isOn",r=>r?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",r=>r||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,r=>!r),"aria-pressed":t.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};Me.isSafari&&(i.on.mousedown=t.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new Be,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new Be;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>ou(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=ou(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var wg=I(5332),CA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(wg.Z,CA),wg.Z.locals;class Ca extends ot{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new Be;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var _g=I(6781),vA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(_g.Z,vA),_g.Z.locals;const Ag='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class yA extends ot{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new uo;return e.content=Ag,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var Cg=I(7686),xA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Cg.Z,xA),Cg.Z.locals;class Al extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new qn,this.focusTracker=new pn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new ot;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new ot,t=e.bindTemplate;return e.icon=Ag,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class EA extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():G("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var vg=I(5485),DA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(vg.Z,DA),vg.Z.locals;class Go extends Be{constructor(e,t,n){super(e);const i=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new qn,this.focusTracker=new pn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",r=>!r)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":i.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,i)=>{i&&(this.panelPosition==="auto"?this.panelView.position=Go._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:i,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:d,northMiddleWest:u}=Go.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,a,c,e,r,s,d,u,t]:[i,n,c,a,e,s,r,u,d,t]}}Go.defaultPanelPositions={south:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,e)=>({top:o.bottom,left:o.left-e.width+o.width,name:"sw"}),southMiddleEast:(o,e)=>({top:o.bottom,left:o.left-(e.width-o.width)/4,name:"sme"}),southMiddleWest:(o,e)=>({top:o.bottom,left:o.left-3*(e.width-o.width)/4,name:"smw"}),north:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/2,name:"n"}),northEast:(o,e)=>({top:o.top-e.height,left:o.left,name:"ne"}),northWest:(o,e)=>({top:o.top-e.height,left:o.left-e.width+o.width,name:"nw"}),northMiddleEast:(o,e)=>({top:o.top-e.height,left:o.left-(e.width-o.width)/4,name:"nme"}),northMiddleWest:(o,e)=>({top:o.top-e.height,left:o.left-3*(e.width-o.width)/4,name:"nmw"})},Go._getOptimalPosition=ag;class Ko{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const i of n)e.keystrokeHandler.set(i,(r,s)=>{this[t](),s()})}}get first(){return this.focusables.find(Cl)||null}get last(){return this.focusables.filter(Cl).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const i=t.element===this.focusTracker.focusedElement;return i&&(e=n),i}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let i=(t+n+e)%n;do{const r=this.focusables.get(i);if(Cl(r))return r;i=(i+n+e)%n}while(i!==t);return null}}function Cl(o){return!(!o.focus||!oo(o.element))}class yg extends Be{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class TA extends Be{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function xg(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}var Eg=I(5542),SA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Eg.Z,SA),Eg.Z.locals;const{threeVerticalDots:Dg}=_t,IA={alignLeft:_t.alignLeft,bold:_t.bold,importExport:_t.importExport,paragraph:_t.paragraph,plus:_t.plus,text:_t.text,threeVerticalDots:_t.threeVerticalDots};class vl extends Be{constructor(e,t){super(e);const n=this.bindTemplate,i=this.t;this.options=t||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new pn,this.keystrokes=new qn,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new MA(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=e.uiLanguageDirection==="rtl";this._focusCycler=new Ko({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new BA(this):new NA(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){const i=xg(e),r=n||i.removeItems,s=this._cleanItemsConfiguration(i.items,t,r).map(a=>Le(a)?this._createNestedToolbarDropdown(a,t,r):a==="|"?new yg:a==="-"?new TA:t.create(a)).filter(a=>!!a);this.items.addMany(s)}_cleanItemsConfiguration(e,t,n){const i=e.filter((r,s,a)=>r==="|"||n.indexOf(r)===-1&&(r==="-"?!this.options.shouldGroupWhenFull||(G("toolbarview-line-break-ignored-when-grouping-items",a),!1):!(!Le(r)&&!t.has(r))||(G("toolbarview-item-unavailable",{item:r}),!1)));return this._cleanSeparatorsAndLineBreaks(i)}_cleanSeparatorsAndLineBreaks(e){const t=s=>s!=="-"&&s!=="|",n=e.length,i=e.findIndex(t);if(i===-1)return[];const r=n-e.slice().reverse().findIndex(t);return e.slice(i,r).filter((s,a,c)=>t(s)?!0:!(a>0&&c[a-1]===s))}_createNestedToolbarDropdown(e,t,n){let{label:i,icon:r,items:s,tooltip:a=!0,withText:c=!1}=e;if(s=this._cleanItemsConfiguration(s,t,n),!s.length)return null;const d=Mi(this.locale);return i||G("toolbarview-nested-toolbar-dropdown-missing-label",e),d.class="ck-toolbar__nested-toolbar-dropdown",d.buttonView.set({label:i,tooltip:a,withText:!!c}),r!==!1?d.buttonView.icon=IA[r]||r||Dg:d.buttonView.withText=!0,yl(d,[]),d.toolbarView.fillFromConfig(s,t,n),d}}class MA extends Be{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class NA{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class BA{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const i=n.index,r=Array.from(n.added);for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+r.length;s++){const a=r[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!oo(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new gt(e.lastChild),i=new gt(e);if(!this.cachedPadding){const r=Te.window.getComputedStyle(e),s=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return t==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new st(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new yg),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Mi(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",yl(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:Dg}),n.toolbarView.items.bindTo(this.groupedItems).using(i=>i),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Tg=I(1046),PA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Tg.Z,PA),Tg.Z.locals;class LA extends Be{constructor(e){super(e),this.items=this.createCollection(),this.focusTracker=new pn,this.keystrokes=new qn,this._focusCycler=new Ko({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Sg extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",t.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class OA extends Be{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Ig=I(7339),zA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Ig.Z,zA),Ig.Z.locals;var Mg=I(3949),RA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Mg.Z,RA),Mg.Z.locals;function Mi(o,e=yA){const t=new e(o),n=new EA(o),i=new Go(o,t,n);return t.bind("isEnabled").to(i),t instanceof Al?t.arrowView.bind("isOn").to(i,"isOpen"):t.bind("isOn").to(i,"isOpen"),function(r){(function(s){s.on("render",()=>{bl({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof Ca||(s.isOpen=!1)})}(r),function(s){s.focusTracker.on("change:isFocused",(a,c,d)=>{s.isOpen&&!d&&(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r),function(s){s.on("change:isOpen",(a,c,d)=>{d||s.panelView.element.contains(Te.document.activeElement)&&s.buttonView.focus()})}(r),function(s){s.on("change:isOpen",(a,c,d)=>{d&&s.panelView.focus()},{priority:"low"})}(r)}(i),i}function yl(o,e,t={}){const n=o.locale,i=n.t,r=o.toolbarView=new vl(n);r.set("ariaLabel",i("Dropdown toolbar")),o.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(s=>r.items.add(s)),t.enableActiveItemFocusOnDropdownOpen&&Bg(o,()=>r.items.find(s=>s.isOn)),o.panelView.children.add(r),r.items.delegate("execute").to(o)}function Ng(o,e){const t=o.locale,n=o.listView=new LA(t);n.items.bindTo(e).using(i=>{if(i.type==="separator")return new OA(t);if(i.type==="button"||i.type==="switchbutton"){const r=new Sg(t);let s;return s=i.type==="button"?new ot(t):new Ca(t),s.bind(...Object.keys(i.model)).to(i.model),s.delegate("execute").to(r),r.children.add(s),r}return null}),o.panelView.children.add(n),n.items.delegate("execute").to(o),Bg(o,()=>n.items.find(i=>i instanceof Sg&&i.children.first.isOn))}function Bg(o,e){o.on("change:isOpen",()=>{if(!o.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():G("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:q.low-10})}var Pg=I(9688),jA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Pg.Z,jA),Pg.Z.locals;class FA extends Be{constructor(e){super(e),this.body=new wA(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var Lg=I(3662),VA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Lg.Z,VA),Lg.Z.locals;class Og extends Be{constructor(e){super(e),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${F()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class HA extends FA{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Og;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class UA extends Be{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const r=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):t(i)})}(this):t(this)}}class qA extends UA{constructor(e,t,n,i={}){super(e,t,n);const r=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var zg=I(8847),WA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(zg.Z,WA),zg.Z.locals;var Rg=I(4879),$A={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Rg.Z,$A),Rg.Z.locals;class GA extends Be{constructor(e){super(e),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new pn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class KA extends GA{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var jg=I(2577),YA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(jg.Z,YA),jg.Z.locals;class xl extends Be{constructor(e,t){super(e);const n=`ck-labeled-field-view-${F()}`,i=`ck-labeled-field-view-status-${F()}`;this.fieldView=t(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){const t=new Og(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new Be(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function El(o,e,t){const n=new KA(o.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(o,"isEnabled",i=>!i),n.bind("hasError").to(o,"errorText",i=>!!i),n.on("input",()=>{o.errorText=null}),o.bind("isEmpty","isFocused","placeholder").to(n),n}class Dl extends oi{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Fg extends at{constructor(e,t){super(),t&&Iu(this,t),e&&this.set(e)}}var Vg=I(4650),QA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Vg.Z,QA),Vg.Z.locals;var Hg=I(7676),ZA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Hg.Z,ZA),Hg.Z.locals;const va=fl("px");class ya extends oe{constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new Zt(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new y("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new y("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new y("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new JA(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new XA(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class JA extends Be{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new pn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new ot(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class XA extends Be{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",va),left:n.to("left",va),width:n.to("width",va),height:n.to("height",va)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Be;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new gt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Ug=I(5868),eC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Ug.Z,eC),Ug.Z.locals;const Xr=fl("px");class tC extends Be{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Sn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Xr(this._panelRect.height):null)}}}).render(),this._contentPanel=new Sn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Xr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?Xr(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?Xr(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Te.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Xr(-Te.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var qg=I(9695),nC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(qg.Z,nC),qg.Z.locals;class iC extends kA{constructor(e,t){super(e),this.view=t,this._toolbarConfig=xg(e.config.get("toolbar")),this._elementReplacer=new Gw}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,i=t.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement,r=e.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");r&&Hh({view:t,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var Wg=I(3143),oC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ye()(Wg.Z,oC),Wg.Z.locals;class rC extends HA{constructor(e,t,n={}){super(e),this.stickyPanel=new tC(e),this.toolbar=new vl(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new qA(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Tl extends cA{constructor(e,t={}){if(!cn(e)&&t.initialData!==void 0)throw new y("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return cn(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(e)),cn(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new rC(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new iC(this,i),function(r){if(!Jn(r.updateSourceElement))throw new y("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(function(a){return!!a&&a.tagName.toLowerCase()==="textarea"}(s)&&s.form){let a;const c=s.form,d=()=>r.updateSourceElement();Jn(c.submit)&&(a=c.submit,c.submit=()=>{d(),a.apply(c)}),c.addEventListener("submit",d),r.on("destroy",()=>{c.removeEventListener("submit",d),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init(cn(e)?e:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}Hr(Tl,Aa),Hr(Tl,kl);class Sl extends Ti{constructor(e){super(e);const t=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new P(t,i);t.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new ju("clipboardData"in e?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,i){const r=i.target.ownerDocument,s=i.clientX,a=i.clientY;let c;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,a)?c=r.caretRangeFromPoint(s,a):i.rangeParent&&(c=r.createRange(),c.setStart(i.rangeParent,i.rangeOffset),c.collapse(!0)),c?n.domConverter.domRangeToView(c):null}(this.view,e)),this.fire(e.type,e,t)}}const $g=["figcaption","li"];function Gg(o){let e="";if(o.is("$text")||o.is("$textProxy"))e=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))e=o.getAttribute("alt");else if(o.is("element","br"))e=`
`;else{let t=null;for(const n of o.getChildren()){const i=Gg(n);t&&(t.is("containerElement")||n.is("containerElement"))&&($g.includes(t.name)||$g.includes(n.name)?e+=`
`:e+=`
