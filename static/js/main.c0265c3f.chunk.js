(this.webpackJsonptinder=this.webpackJsonptinder||[]).push([[0],{59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},68:function(e,n,t){},72:function(e,n,t){},93:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(14),s=t.n(r),i=(t(59),t(60),t(61),t(43)),o=t.n(i),j=t(44),l=t.n(j),d=t(45),u=t.n(d),b=t(46),f=t.n(b),h=t(112),O=t(47),x=t.n(O),m=t(2);var g=function(){return Object(m.jsxs)("div",{className:"buttonsBar",children:[Object(m.jsx)(h.a,{className:"button__repeat",children:Object(m.jsx)(o.a,{fontSize:"large"})}),Object(m.jsx)(h.a,{className:"button__left",children:Object(m.jsx)(l.a,{fontSize:"large"})}),Object(m.jsx)(h.a,{className:"button__star",children:Object(m.jsx)(u.a,{fontSize:"large"})}),Object(m.jsx)(h.a,{className:"button__right",children:Object(m.jsx)(f.a,{fontSize:"large"})}),Object(m.jsx)(h.a,{className:"button__lightning",children:Object(m.jsx)(x.a,{fontSize:"large"})})]})},p=(t(68),t(48)),v=t.n(p),N=t(111),_=t.p+"static/media/tinder.0540cca1.png";var S=function(){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(h.a,{children:Object(m.jsx)(v.a,{fontSize:"large",className:"header_icon"})}),Object(m.jsx)("img",{className:"header_logo",src:_,alt:""}),Object(m.jsx)(h.a,{children:Object(m.jsx)(N.a,{fontSize:"large",className:"header_icon"})})]})},w=t(25),z=t.n(w),C=t(49),k=t(52),y=t(50),F=t.n(y),L=(t(72),t(51)),B=t.n(L).a.create({baseURL:"https://tinder-ser.herokuapp.com/"});var I=function(){var e=Object(c.useState)([]),n=Object(k.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(C.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/cards");case 2:n=e.sent,console.log(n),a(n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),console.log(t)}),[]),Object(m.jsx)("div",{className:"tinderCards",children:Object(m.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(m.jsx)(F.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing: "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+" left the screen");var n},children:Object(m.jsx)("div",{style:{backgroundImage:"url(".concat(e.imUrl,")")},className:"card",children:Object(m.jsx)("h3",{children:e.name})})},e.name)}))})})};var E=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(S,{}),Object(m.jsx)(I,{}),Object(m.jsx)(g,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,113)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),J()}},[[93,1,2]]]);
//# sourceMappingURL=main.c0265c3f.chunk.js.map