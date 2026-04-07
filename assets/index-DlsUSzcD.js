var p={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function m(){if(x)return d;x=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function a(r,t,e){var i=null;if(e!==void 0&&(i=""+e),t.key!==void 0&&(i=""+t.key),"key"in t){e={};for(var n in t)n!=="key"&&(e[n]=t[n])}else e=t;return t=e.ref,{$$typeof:o,type:r,key:i,ref:t!==void 0?t:null,props:e}}return d.Fragment=c,d.jsx=a,d.jsxs=a,d}var h;function g(){return h||(h=1,p.exports=m()),p.exports}var E=g();function j(o){for(var c=[],a=1;a<arguments.length;a++)c[a-1]=arguments[a];var r=Array.from(typeof o=="string"?[o]:o);r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");var t=r.reduce(function(n,l){var v=l.match(/\n([\t ]+|(?!\s).)/g);return v?n.concat(v.map(function(f){var u,s;return(s=(u=f.match(/[\t ]/g))===null||u===void 0?void 0:u.length)!==null&&s!==void 0?s:0})):n},[]);if(t.length){var e=new RegExp(`
[	 ]{`+Math.min.apply(Math,t)+"}","g");r=r.map(function(n){return n.replace(e,`
`)})}r[0]=r[0].replace(/^\r?\n/,"");var i=r[0];return c.forEach(function(n,l){var v=i.match(/(?:^|\n)( *)$/),f=v?v[1]:"",u=n;typeof n=="string"&&n.includes(`
`)&&(u=String(n).split(`
`).map(function(s,R){return R===0?s:""+f+s}).join(`
`)),i+=u+r[l+1]}),i}export{j as d,E as j};
