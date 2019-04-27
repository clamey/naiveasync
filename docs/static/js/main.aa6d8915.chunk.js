(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports={en:{xx:"english",n1:"alex",n2:"brock",n3:"charlie",w0:"it is",w1:"dumb",w2:"simple",w3:"naive",w4:"table",w5:"consistent",w6:"assuming",w7:"data",p1:"Just feed it",p2:"provide headers",p3:"for more granular control",p4:"style the table",p5:"and make it easily fit your app",i1:"is a straightforward React functional module that can quickly render a table from an array of objects",i2a:"Naivetable does one thing and does it well: visualizing ",i2b:"data in a clean and concise manner with a few choice assumptions on style.",h0:"...just add data!",h1a:"if you need a rendered table of data RIGHT NOW",h1b:"NaiveTable just infers the headers 'a', 'b', and 'c'",h1c:"this is the most straightforward way to use NaiveTable",o1:"Usage",o2:"Design",o3:"Compatability",o4:"Copyright",copyright:"Copyright (c) Samuel Volin 2019. License: MIT"}}},235:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),o=t(11),i=t(6),s=t(8),d=t(9),u=t(12),b=t(10),m=t(13),h=t(25),f=t(5),p=t(21),E=t.n(p),y=t(22),v=function(e,a){for(var t=[],n=function(a){var n={};e.forEach(function(e){n[e]=Math.random()}),t=[].concat(Object(h.a)(t),[n])},l=0;l<a;l++)n();return t}(["foo","bar","baz"],5),w=function(e){function a(e){var t;Object(s.a)(this,a),t=Object(u.a)(this,Object(b.a)(a).call(this,e));e.lang;return t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=function(e){var a=y.en[e]||"";return"".concat(a)||"\u274c"};return l.a.createElement("div",{className:"page-content"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"\ud83c\udf71 NaiveTable"),l.a.createElement("h2",null,e("w1")," ",e("w2")," ",e("w3")," ",l.a.createElement("a",{href:"https://reactjs.org/"},"React")," ","Array<T>"," ",e("w7"),e("w4")),l.a.createElement("span",null,l.a.createElement("h4",null,"v","0.1.1a"," -"," ",l.a.createElement("a",{href:"https://naivetable.untra.io/docs"},"Documentation")," -"," ",l.a.createElement(o.b,{to:"/test"},"Tests"),"-"," ",l.a.createElement("a",{href:"https://github.com/untra/naivetable"},"Github")," -"," ",l.a.createElement("a",{href:"https://www.npmjs.com/package/@untra/naivetable"},"NPM"))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("strong",null,"NaiveTable")," ",e("i1")," ","(typescript type ",l.a.createElement("code",null,"Array<T> of {[index: string]: any}"),")."),l.a.createElement("div",null,e("i2a"),l.a.createElement("code",null," Array<T> "),e("i2b")),l.a.createElement(E.a,{className:"tsx"},"const data = [".concat(JSON.stringify(v[0],null,2),"]\n// ").concat(e("h0"),"\n<NaiveTable data={data} />")),l.a.createElement(f.NaiveTable,{data:v})))}}]),a}(l.a.Component),g=[{foo:1,bar:"2",baz:3.1,etc:!0},{foo:4,bar:"5",baz:6.2,etc:!1},{foo:7,bar:"6",baz:9.3,etc:null},{foo:10,bar:"11",baz:12.4,etc:void 0}],O=[{a:"alex",b:12,c:82.56},{a:"brock",b:17,c:93.33},{a:"charlie",b:16,c:48.65}],N=[{label:"name",dataKey:"a"},{label:"age",dataKey:"b",style:{backgroundColor:"pink"}},{label:"grade status",dataKey:"c",render:function(e){return l.a.createElement("h2",null,"".concat(e>50?"\u2705passing":"\u274cfailing"," the class"))}},{label:"assessment",dataKey:"",render:function(e){return l.a.createElement("h4",null,"".concat(JSON.stringify(e.a)," is ").concat(e.c>90?"really":""," ").concat(e.c>50?"smart":"dumb"))}},{label:"comment",dataKey:"",render:function(){return"I like you \ud83d\udc99"},width:"4fr"}],T=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h4",null,"It should be able to render a variety of data types"),l.a.createElement(f.NaiveTable,{data:g}),l.a.createElement("h4",null,"It should be able to render an index left adjacent of the data"),l.a.createElement(f.NaiveTable,{data:g,includeIndex:!0}),l.a.createElement("h4",null,"It should be able to render a table with custom headers"),l.a.createElement(f.NaiveTable,{data:O,headers:N,includeIndex:!0}),l.a.createElement("h4",null,"It should be able to render individual styling on each header"),"TODO",l.a.createElement("h4",null,"It should be able to render individual styling for the table"),"TODO",l.a.createElement("h4",null,"It should be able to render individual styling for each cell"),"TODO",l.a.createElement("h4",null,"It should be able to display sortable columns"),"TODO",l.a.createElement("h4",null,"It should display sorted column data sorted correctly"),"TODO",l.a.createElement("h4",null,"It should be able to render empty data"),l.a.createElement(f.NaiveTable,{data:[]}),l.a.createElement("h4",null,"It should be able to render a data of one"),l.a.createElement(f.NaiveTable,{data:[{of:"one"}]}))}}]),a}(l.a.Component),j=function(){return window.location.reload()};c.a.render(l.a.createElement(function(){return l.a.createElement(o.a,{basename:"/"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/test",component:T,onEnter:j}),l.a.createElement(i.a,{exact:!0,path:"/",component:w}),l.a.createElement(i.a,{component:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"404 Not found")," ")}})))},null),document.getElementById("root"))},26:function(e,a,t){e.exports=t(235)}},[[26,1,2]]]);
//# sourceMappingURL=main.aa6d8915.chunk.js.map