webpackJsonp([0,3],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=n(1),o=r(a),u=n(31),f=r(u),i=n(170),l=r(i);f.default.render(o.default.createElement(l.default,null),document.getElementById("app"))},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),c=r(l),s=n(171),d=r(s),v=n(172),p=r(v),y=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNote=function(e){e.preventDefault(),n.newTaskInput.focus(),n.setState(function(e){var t=e.notes,n=e.newTask;return{notes:[].concat(a(t),[{id:p.default.v4(),task:n}]),newTask:""}})},n.newTaskChange=function(e){n.setState({newTask:e.target.value})},n.state={notes:[{id:p.default.v4(),task:"Learn React"},{id:p.default.v4(),task:"Do laundry"}]},n}return f(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.state.notes;return c.default.createElement("div",null,c.default.createElement("h1",null,"Hello world"),c.default.createElement("form",{onSubmit:this.addNote},c.default.createElement("input",{type:"text",ref:function(t){e.newTaskInput=t},value:this.state.newTask,onChange:this.newTaskChange}),c.default.createElement("button",null,"+")),c.default.createElement(d.default,{notes:t}))}}]),t}(c.default.Component);t.default=y},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=r(a);t.default=function(e){var t=e.notes;return o.default.createElement("ul",null,t.map(function(e){return o.default.createElement("li",{key:e.id},e.task)}))}},172:function(e,t,n){function r(e,t,n){var r=t&&n||0,a=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){a<16&&(t[r+a++]=l[e])});a<16;)t[r+a++]=0;return t}function a(e,t){var n=t||0,r=i;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function o(e,t,n){var r=t&&n||0,o=t||[];e=e||{};var u=void 0!==e.clockseq?e.clockseq:v,f=void 0!==e.msecs?e.msecs:(new Date).getTime(),i=void 0!==e.nsecs?e.nsecs:y+1,l=f-p+(i-y)/1e4;if(l<0&&void 0===e.clockseq&&(u=u+1&16383),(l<0||f>p)&&void 0===e.nsecs&&(i=0),i>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=f,y=i,v=u,f+=122192928e5;var c=(1e4*(268435455&f)+i)%4294967296;o[r++]=c>>>24&255,o[r++]=c>>>16&255,o[r++]=c>>>8&255,o[r++]=255&c;var s=f/4294967296*1e4&268435455;o[r++]=s>>>8&255,o[r++]=255&s,o[r++]=s>>>24&15|16,o[r++]=s>>>16&255,o[r++]=u>>>8|128,o[r++]=255&u;for(var m=e.node||d,h=0;h<6;h++)o[r+h]=m[h];return t?t:a(o)}function u(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var o=e.random||(e.rng||f)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var u=0;u<16;u++)t[r+u]=o[u];return t||a(o)}for(var f=n(173),i=[],l={},c=0;c<256;c++)i[c]=(c+256).toString(16).substr(1),l[i[c]]=c;var s=f(),d=[1|s[0],s[1],s[2],s[3],s[4],s[5]],v=16383&(s[6]<<8|s[7]),p=0,y=0,m=u;m.v1=o,m.v4=u,m.parse=r,m.unparse=a,e.exports=m},173:function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var a=new Uint8Array(16);n=function(){return r.getRandomValues(a),a}}if(!n){var o=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}e.exports=n}).call(t,function(){return this}())}});
//# sourceMappingURL=app.d198ba5b009cf95f61d7.js.map