(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),a=n(4),i=n(5),s=n(7),r=n(6),l=n(1),d=n.n(l),m=(n(12),n(0));function u(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).timerId=0,e.timerId2=0,e.state={hasClock:!0,clockName:"Clock-0",today:new Date},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:u()})}),3300),this.timerId2=window.setInterval((function(){var t=new Date;e.setState({today:t}),console.info(t.toUTCString().slice(-12,-4))}),1e3),document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),document.addEventListener("click",(function(){e.setState({hasClock:!0})}))}},{key:"componentDidUpdate",value:function(e,t){t.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){var e=this;window.clearInterval(this.timerId),window.clearInterval(this.timerId2),document.removeEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1})})),document.removeEventListener("click",(function(){e.setState({hasClock:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName,c=e.today;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),Object(m.jsxs)("div",{className:"Clock",style:{display:t?"block":"none"},children:[Object(m.jsx)("strong",{className:"Clock__name",children:n})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:c.toUTCString().slice(-12,-4)})]})]})}}]),n}(d.a.Component);o.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6a620b8d.chunk.js.map