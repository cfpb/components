System.register(["./index-d320d06d.system.js","./app-globals-497eb362.system.js"],(function(e,n){"use strict";var t,r,a,s,i,o,c,l;return{setters:[function(n){t=n.B;r=n.c;a=n.H;s=n.d;i=n.N;o=n.p;c=n.b;e("setNonce",n.s)},function(e){l=e.g}],execute:function(){var e=function(){if(t.isDev&&!t.isTesting){r("Running in development mode.")}if(t.cloneNodeFix){d(a.prototype)}if(t.profile&&!performance.mark){performance.mark=performance.measure=function(){};performance.getEntriesByName=function(){return[]}}var e=t.scriptDataOpts?Array.from(s.querySelectorAll("script")).find((function(e){return new RegExp("/".concat(i,"(\\.esm)?\\.js($|\\?|#)")).test(e.src)||e.getAttribute("data-stencil-namespace")===i})):null;var c=n.meta.url;var l=t.scriptDataOpts?(e||{})["data-opts"]||{}:{};if(c!==""){l.resourcesUrl=new URL(".",c).href}return o(l)};var d=function(e){var n=e.cloneNode;e.cloneNode=function(e){if(this.nodeName==="TEMPLATE"){return n.call(this,e)}var t=n.call(this,false);var r=this.childNodes;if(e){for(var a=0;a<r.length;a++){if(r[a].nodeType!==2){t.appendChild(r[a].cloneNode(true))}}}return t}};e().then((function(e){l();return c([["cfpb-expandable.system",[[1,"cfpb-expandable",{header:[1],subheader:[1],open:[4],level:[2],bordered:[4],uswds:[4],slotHeader:[32],slotTag:[32]}]]],["cfpb-expandable-group.system",[[1,"cfpb-expandable-group",{openSingle:[4,"open-single"],disableAnalytics:[4,"disable-analytics"],sectionHeading:[1,"section-heading"],expanded:[32]},[[0,"accordionItemToggled","itemToggledHandler"]]]]]],e)}))}}}));