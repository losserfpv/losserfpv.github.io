(this["webpackJsonpbluetooth-app"]=this["webpackJsonpbluetooth-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),i=n.n(r),o=(n(16),n(1)),s=n.n(o),l=n(3),u=n(6),h=n(7),v=n(9),d=n(8),f=n(2),m=n(10),p="4fafc201-1fb5-459e-8fcc-c5c9c331914b",b=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(v.a)(this,Object(d.a)(t).call(this,e))).state={device:{name:"none"},connected:!1,value:-1},n.characteristicEvent=n.characteristicEvent.bind(Object(f.a)(n)),n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"characteristicEvent",value:function(e){var t=e.target.value.getUint8(0);console.log("Value changed "+t),Object.assign({},this.state).value=t,this.setState({value:t})}},{key:"connectClick",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,c,r,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},r=!0,(n=[]).push({namePrefix:"RoboFish"}),a.filters=n,a.optionalServices=[p],e.prev=6,e.next=9,navigator.bluetooth.requestDevice(a);case 9:return t=e.sent,e.next=12,t.gatt.connect();case 12:return i=e.sent,e.next=15,i.getPrimaryService(p);case 15:return o=e.sent,e.next=18,o.getCharacteristic("beb5483e-36e1-4688-b7f5-ea07361b26a8");case 18:c=e.sent,r=!0,c.addEventListener("characteristicvaluechanged",this.characteristicEvent),c.startNotifications(),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(6),console.log("Argh! "+e.t0),r=!1;case 28:void 0===t&&(t={name:"none"},r=!1),this.setState({device:t,characteristic:c,connected:r});case 30:case"end":return e.stop()}}),e,this,[[6,24]])})));return function(){return e.apply(this,arguments)}}()},{key:"toggleClick",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.device,n=this.state.characteristic,"none"!==t.name&&(a=new TextEncoder("utf-8"),c=a.encode("blue"),n.writeValue(c));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t={display:this.state.connected?"block":"none"};return c.a.createElement("div",null,c.a.createElement("h1",null,"SwimBot 2.2"),c.a.createElement("button",{onClick:function(){return e.connectClick()}},"Connect"),c.a.createElement("div",{style:t},c.a.createElement("h2",null,"Connected to : ",this.state.device.name),c.a.createElement("button",{onClick:function(){return e.toggleClick()}},"Toggle led"),c.a.createElement("div",null,c.a.createElement("p",null,"Value received: ",this.state.value))))}}]),t}(a.Component);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,{test:"1"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.c4db4e79.chunk.js.map