!function(e){function n(n){for(var r,s,c=n[0],i=n[1],u=n[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(n);f.length;)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={1:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=o[e]=[n,r]});n.push(t[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(e){return s.p+"templates/"+({0:"vendors~src/pages/event.tsx~src/pages/organization.tsx~src/pages/project-or-product.tsx~src/pages/pu~d4085f4d",2:"src/containers/Post",3:"src/pages/404.tsx",4:"src/pages/event.tsx",5:"src/pages/index.tsx",6:"src/pages/organization.tsx",7:"src/pages/project-or-product.tsx",8:"src/pages/publication.tsx",9:"src/pages/working-group.tsx"}[e]||e)+"."+{0:"498842f4",2:"2c46db30",3:"43d111a0",4:"ed22728f",5:"2c81f842",6:"4da8ed28",7:"ca9af463",8:"564c6f5f",9:"5628e2ff"}[e]+".js"}(e);var i=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(u);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,t[1](i)}o[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var l=i;a.push([58,10,11]),t()}({121:function(e,n,t){var r={".":13,"./":13,"./index":13,"./index.js":13};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=121},129:function(e,n,t){"use strict";t.r(n),function(e){var r=t(0),o=t.n(r),a=t(24),s=t.n(a),c=t(48),i=t(18);if(n.default=i.a,"undefined"!=typeof document){var u=document.getElementById("root"),l=u.hasChildNodes()?s.a.hydrate:s.a.render,p=function(e){l(o.a.createElement(c.AppContainer,null,o.a.createElement(e,null)),u)};p(i.a),e&&e.hot&&e.hot.accept("./App",function(){p(i.a)})}}.call(this,t(130)(e))},18:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(14),s=t(17),c=function(e){var n=e.children;return o.a.createElement("div",{style:{border:"1px solid red"}},n)};t(134),t(135);Object(a.addPrefetchExcludes)(["dynamic"]);n.a=function(){return o.a.createElement(a.Root,null,o.a.createElement("nav",null,o.a.createElement(s.Link,{to:"/"},"Home")),o.a.createElement("div",{className:"content"},o.a.createElement(c,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("em",null,"Loading...")},o.a.createElement(s.Router,null,o.a.createElement(a.Routes,{path:"*"}))))))}},26:function(e,n,t){"use strict";t.r(n);var r=t(46),o=[{location:"../node_modules/react-static-plugin-typescript",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:t.n(r)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];n.default=o},44:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"notFoundTemplate",function(){return y});var r=t(3),o=t.n(r),a=t(4),s=t.n(a),c=t(0),i=t.n(c),u=t(5),l=t.n(u);Object(u.setHasBabelPlugin)();var p={loading:function(){return null},error:function(e){return console.error(e.error),i.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=l()(s()({id:"../src/pages/404.tsx",load:function(){return Promise.all([t.e(3).then(t.bind(null,50))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/404.tsx")},resolve:function(){return 50},chunkName:function(){return"src/pages/404.tsx"}}),p);f.template="../src/pages/404.tsx";var d=l()(s()({id:"../src/pages/event.tsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(4)]).then(t.bind(null,53))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/event.tsx")},resolve:function(){return 53},chunkName:function(){return"src/pages/event.tsx"}}),p);d.template="../src/pages/event.tsx";var g=l()(s()({id:"../src/pages/index.tsx",load:function(){return Promise.all([t.e(5).then(t.bind(null,51))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/index.tsx")},resolve:function(){return 51},chunkName:function(){return"src/pages/index.tsx"}}),p);g.template="../src/pages/index.tsx";var m=l()(s()({id:"../src/pages/organization.tsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(6)]).then(t.bind(null,54))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/organization.tsx")},resolve:function(){return 54},chunkName:function(){return"src/pages/organization.tsx"}}),p);m.template="../src/pages/organization.tsx";var h=l()(s()({id:"../src/pages/project-or-product.tsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(7)]).then(t.bind(null,55))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/project-or-product.tsx")},resolve:function(){return 55},chunkName:function(){return"src/pages/project-or-product.tsx"}}),p);h.template="../src/pages/project-or-product.tsx";var v=l()(s()({id:"../src/pages/publication.tsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(8)]).then(t.bind(null,56))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/publication.tsx")},resolve:function(){return 56},chunkName:function(){return"src/pages/publication.tsx"}}),p);v.template="../src/pages/publication.tsx";var x=l()(s()({id:"../src/pages/working-group.tsx",load:function(){return Promise.all([Promise.all([t.e(0),t.e(9)]).then(t.bind(null,57))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/pages/working-group.tsx")},resolve:function(){return 57},chunkName:function(){return"src/pages/working-group.tsx"}}),p);x.template="../src/pages/working-group.tsx";var b=l()(s()({id:"../src/containers/Post",load:function(){return Promise.all([t.e(2).then(t.bind(null,52))]).then(function(e){return e[0]})},path:function(){return o.a.join(e,"../src/containers/Post")},resolve:function(){return 52},chunkName:function(){return"src/containers/Post"}}),p);b.template="../src/containers/Post",n.default={"../src/pages/404.tsx":f,"../src/pages/event.tsx":d,"../src/pages/index.tsx":g,"../src/pages/organization.tsx":m,"../src/pages/project-or-product.tsx":h,"../src/pages/publication.tsx":v,"../src/pages/working-group.tsx":x,"../src/containers/Post":b};var y="../src/pages/404.tsx"}.call(this,"/")},58:function(e,n,t){t(59),t(119),e.exports=t(126)}});