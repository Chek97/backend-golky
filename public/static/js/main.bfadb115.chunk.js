(this["webpackJsonpprueba-golky"]=this["webpackJsonpprueba-golky"]||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(7),a=n.n(c),s=n(2),o=n(3),u=n.n(o),i=n(8),l=n(11),j=n(10),b=n(4),d=n(1),h=function(){var e=Object(s.c)((function(e){return e.text})).words;return Object(d.jsxs)("div",{className:"custom-list",children:[Object(d.jsx)("h2",{children:"Resultados: "}),Object(d.jsx)("div",{children:e.length>0&&Object(d.jsx)("ul",{className:"custom-list-words",children:e.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})})]})},p="[api] Get Text",O=function(e){return function(){var t=Object(i.a)(u.a.mark((function t(n){var r,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:3002/api",t.next=3,fetch("".concat("http://localhost:3002/api","/iecho?text=").concat(e),{method:"GET",headers:{"Content-type":"application/json"}});case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,a=c.text,r.ok?n(f(a)):console.error("Error: no se envio ningun texto");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return{type:p,payload:e}},m=function(){var e=Object(s.b)(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(l.a)(t,2),c=n[0],a=n[1];return[c,function(e){var t=e.target;a(Object(b.a)(Object(b.a)({},c),{},Object(j.a)({},t.name,t.value)))}]}({search:""}),n=Object(l.a)(t,2),c=n[0],a=n[1],o=c.search,p=function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(O(o));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{className:"navbar custom-navbar",children:Object(d.jsxs)("form",{className:"form-inline custom-form",onSubmit:p,children:[Object(d.jsx)("input",{className:"form-control mr-sm-2",type:"text",name:"search",value:o,required:!0,onChange:a,placeholder:"Ingresa una palabra","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Buscar"})]})}),Object(d.jsx)(h,{})]})},x=n(5),v=n(16),w={words:[]},y=Object(x.b)({text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(b.a)(Object(b.a)({},e),{},{words:[].concat(Object(v.a)(e.words),[t.payload])});default:return e}}}),g=n(15),E="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,N=Object(x.d)(y,E(Object(x.a)(g.a))),k=(n(27),function(){return Object(d.jsx)(s.a,{store:N,children:Object(d.jsx)(m,{})})});a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.bfadb115.chunk.js.map