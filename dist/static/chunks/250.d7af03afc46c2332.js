(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{7250:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(1264),u=t(3632),l=t.n(u),o=t(6141);let a=(0,o.createContext)(null),i=a.Provider;function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}let f=(0,o.forwardRef)(function({bounds:e,boundsOptions:n,center:t,children:r,className:l,id:a,placeholder:f,style:s,whenReady:p,zoom:d,...g},m){let[b]=(0,o.useState)({className:l,id:a,style:s}),[y,v]=(0,o.useState)(null);(0,o.useImperativeHandle)(m,()=>y?.map??null,[y]);let h=(0,o.useCallback)(r=>{if(null!==r&&null===y){let l=new u.Map(r,g);null!=t&&null!=d?l.setView(t,d):null!=e&&l.fitBounds(e,n),null!=p&&l.whenReady(p),v(Object.freeze({__version:1,map:l}))}},[]);(0,o.useEffect)(()=>()=>{y?.map.remove()},[y]);let x=y?o.createElement(i,{value:y},r):f??null;return o.createElement("div",c({},b,{ref:h}),x)});function s(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function p(e,n){return null==n?function(n,t){let r=(0,o.useRef)();return r.current||(r.current=e(n,t)),r}:function(t,r){let u=(0,o.useRef)();u.current||(u.current=e(t,r));let l=(0,o.useRef)(t),{instance:a}=u.current;return(0,o.useEffect)(function(){l.current!==t&&(n(a,t,l.current),l.current=t)},[a,t,r]),u}}function d(e,n){let t=e.pane??n.pane;return t?{...e,pane:t}:e}function g(e){return function(n){var t;let r=function(){let e=(0,o.useContext)(a);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}(),u=e(d(n,r),r);return!function(e,n){let t=(0,o.useRef)(n);(0,o.useEffect)(function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}(r.map,n.attribution),!function(e,n){let t=(0,o.useRef)();(0,o.useEffect)(function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}},[e,n])}(u.current,n.eventHandlers),t=u.current,(0,o.useEffect)(function(){let e=r.layerContainer??r.map;return e.addLayer(t.instance),function(){r.layerContainer?.removeLayer(t.instance),r.map.removeLayer(t.instance)}},[r,t]),u}}t(8180);let m=function(e,n){let t=p(e,n),r=g(t);return(0,o.forwardRef)(function(e,n){let{instance:t}=r(e).current;return(0,o.useImperativeHandle)(n,()=>t),null})}(function({url:e,...n},t){let r=new u.TileLayer(e,d(n,t));return s(r,t)},function(e,n,t){!function(e,n,t){let{opacity:r,zIndex:u}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=u&&u!==t.zIndex&&e.setZIndex(u)}(e,n,t);let{url:r}=n;null!=r&&r!==t.url&&e.setUrl(r)}),b=function(e,n){let t=p(e,n),r=g(t);return(0,o.forwardRef)(function(e,n){let{instance:t,context:u}=r(e).current;return(0,o.useImperativeHandle)(n,()=>t),null==e.children?null:o.createElement(i,{value:u},e.children)})}(function({position:e,...n},t){let r=new u.Marker(e,n);return s(r,Object.freeze({...t,overlayContainer:r}))},function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())});t(1117),delete l().Icon.Default.prototype._getIconUrl,l().Icon.Default.mergeOptions({iconUrl:"/_next/static/media/marker-icon.d577052a.png",iconRetinaUrl:"/_next/static/media/marker-icon-2x.93fdb12c.png",shadowUrl:"/_next/static/media/marker-shadow.612e3b52.png"});var y=e=>{let{center:n}=e;return(0,r.jsxs)(f,{center:n||[51,-.09],zoom:n?4:2,scrollWheelZoom:!1,className:"h-[35vh] rounded-lg",children:[(0,r.jsx)(m,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),n&&(0,r.jsx)(b,{position:n})]})}},1117:function(){}}]);