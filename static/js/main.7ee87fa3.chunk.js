(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(5),s=n.n(c),r=n(4),i=(n(10),n(11),n(1)),o=n(2),a=n.n(o),l=n(0),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabetically",j="length",h="reset";var d=function(){var t,e,n,c=Object(i.useState)(h),s=Object(r.a)(c,2),o=s[0],d=s[1],g=Object(i.useState)(!1),p=Object(r.a)(g,2),f=p[0],m=p[1],O=(t=[].concat(u),e=o,n=f,t.sort((function(t,n){switch(e){case b:return t.localeCompare(n);case j:return t.length-n.length;case h:return t;default:return 0}})),n&&t.reverse(),t);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button is-info",{"is-light":!(o===b)}),onClick:function(){return d(b)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button is-success",{"is-light":!(o===j)}),onClick:function(){return d(j)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button is-warning",{"is-light":!f}),onClick:function(){return m(!f)},children:"Reverse"}),(!(o===h)||f)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){d(h),m(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:O.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.7ee87fa3.chunk.js.map