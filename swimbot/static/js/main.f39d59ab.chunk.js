(this["webpackJsonpbluetooth-app"]=this["webpackJsonpbluetooth-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),i=(n(15),n(1)),s=n.n(i),u=n(2),l=n(5),h=n(6),v=n(8),f=n(7),p=n(9),m="4fafc201-1fb5-459e-8fcc-c5c9c331914b",d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(v.a)(this,Object(f.a)(t).call(this,e))).state={device:{name:"none"},connected:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"connectClick",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,c,a,r,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},r=!0,(n=[]).push({namePrefix:"RoboFish"}),c.filters=n,c.optionalServices=[m],e.prev=6,e.next=9,navigator.bluetooth.requestDevice(c);case 9:return t=e.sent,e.next=12,t.gatt.connect();case 12:return o=e.sent,e.next=15,o.getPrimaryService(m);case 15:return i=e.sent,e.next=18,i.getCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8");case 18:a=e.sent,r=!0,e.next=26;break;case 22:e.prev=22,e.t0=e.catch(6),console.log("Argh! "+e.t0),r=!1;case 26:void 0===t&&(t={name:"none"},r=!1),this.setState({device:t,characteristic:a,connected:r});case 28:case"end":return e.stop()}}),e,this,[[6,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"toggleClick",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.device,n=this.state.characteristic,"none"!==t.name&&(c=new TextEncoder("utf-8"),a=c.encode("blue"),n.writeValue(a));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t={display:this.state.connected?"block":"none"};return a.a.createElement("div",null,a.a.createElement("h1",null,"SwimBot"),a.a.createElement("button",{onClick:function(){return e.connectClick()}},"Connect"),a.a.createElement("div",{style:t},a.a.createElement("h2",null,"Connected to : ",this.state.device.name),a.a.createElement("button",{onClick:function(){return e.toggleClick()}},"Toggle led")))}}]),t}(c.Component);var b=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(d,{test:"1"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f39d59ab.chunk.js.map