"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[2909],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){return function(t){var n=u(t.components);return r.createElement(e,o({},t,{components:n}))}},u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87631:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"Object_Cache_Decision_Guide",title:"CacheLib Object Cache Decision Guide"},s=void 0,l={unversionedId:"facebook/Object_Cache/Object_Cache_Decision_Guide",id:"facebook/Object_Cache/Object_Cache_Decision_Guide",isDocsHomePage:!1,title:"CacheLib Object Cache Decision Guide",description:"Goal",source:"@site/docs/facebook/Object_Cache/object_cache_decision_guide.md",sourceDirName:"facebook/Object_Cache",slug:"/facebook/Object_Cache/Object_Cache_Decision_Guide",permalink:"/docs/facebook/Object_Cache/Object_Cache_Decision_Guide",editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/facebook/Object_Cache/object_cache_decision_guide.md",tags:[],version:"current",frontMatter:{id:"Object_Cache_Decision_Guide",title:"CacheLib Object Cache Decision Guide"}},d=[{value:"Goal",id:"goal",children:[]},{value:"Background",id:"background",children:[]},{value:"Decision Framework",id:"decision-framework",children:[{value:"What are the Constraints?",id:"what-are-the-constraints",children:[]},{value:"Object Cache Trade-Offs",id:"object-cache-trade-offs",children:[]}]},{value:"Where Does Your Use Case Fit?",id:"where-does-your-use-case-fit",children:[]}],u={toc:d};function m(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"goal"},"Goal"),(0,o.mdx)("p",null,"This provides a guide for customer to understand for what use cases Object Cache is a right fit. We will provide tips on how to collect metrics and make a decision on whether or not your cache service needs caching objects natively."),(0,o.mdx)("h2",{id:"background"},"Background"),(0,o.mdx)("p",null,"Caching blobs vs caching objects presents a trade-off between memory-efficiency and cpu-efficiency. A serialized (or compressed) blob is dense but requires significant cpu overhead to perform read and write. On the other hand, a regular C++ object can be made very fast but requires much more memory. For example, in Feed\u2019s Object Leaf, fully deserialized objects are 10x the size of serialized objects. For services that need to introspect content in an object, they typically have to spend more memory to get better cpu efficiency."),(0,o.mdx)("p",null,"When a service is bound by CPU, caching objects natively may seem like a natural fit. However, the memory amplification of caching the entire object natively may negate any savings from CPU. Think of a fictional use-case that currently needs additional capacity because it is CPU-bound, but when caching all objects natively, this use-case ends up doubling its memory footprint and need twice as many hosts to main the same hit rate. Caching all objects natively results in a 100% capacity regression for such a use-case."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Effectively using Object Cache requires a careful evaluation of a service to understand where the constraints are.")," With this in mind, we\u2019ll outline a framework for CacheLib customers to understand if and where Object Cache should be used in their service."),(0,o.mdx)("h2",{id:"decision-framework"},"Decision Framework"),(0,o.mdx)("h3",{id:"what-are-the-constraints"},"What are the Constraints?"),(0,o.mdx)("p",null,"A use-case is typically closer on some of these constraints than others. They may want to improve on one or more constraint for efficiency reasons (save $ or enable new feature)."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"CPU")," - the more serialized/compressed an object, the more expensive to introspect its content."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Cache Storage (ram / flash)")," - higher hit rate requires larger cache storage. Deserialized objects require larger cache storage than serialized objects. Keeping full copies of data require larger cache storage than partial copies."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Network")," - more x-regional network sends cost more $. In-region network is free as long as network utilization is within per-rack limit."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Staleness")," - how soon should an object be up to date? Lower staleness requires more cache storage and/or higher cpu."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Latency")," - how quickly should an object be fetched? Lower latency requires more DRAM which cost more $.")),(0,o.mdx)("h3",{id:"object-cache-trade-offs"},"Object Cache Trade-Offs"),(0,o.mdx)("p",null,"Object Cache makes the following trade-off on the above constraints"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"CPU")," - introspecting deserialized objects is cheaper"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Cache Storage")," - caching deserialized objects require more storage to provide the same hit rate"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Latency")," - introspecting deserialized object is faster")),(0,o.mdx)("p",null,"User has three options to use object cache in their caching setup.\n",(0,o.mdx)("img",{src:n(27534).Z})),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Option 1")," is a good choice if application is clearly CPU-bound and has a small working set."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Option 2")," is a good choice if an application is CPU-bound but also has limited headroom in memory capacity. Note this approach assumes the application performs reads and writes on all objects. User can size L1 + L2 accordingly to achieve a balance between CPU and memory consumption."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Option 3")," is where we\u2019re left with if one or more of the following is true:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Application has very little additional memory headroom."),(0,o.mdx)("li",{parentName:"ul"},"Application is working with only a subset of its objects on read and/or write path.")),(0,o.mdx)("p",null,"This means we cannot let everything go through object-cache API, and we have to choose what to cache in object-cache versus serialized-cache. We present two decision trees for users to follow. ",(0,o.mdx)("em",{parentName:"p"},"Note that we do NOT offer a pre-built solution in option-3. We expect the user to compose object-cache and serialized-cache that address their application\u2019s specific usage pattern.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Option 3 (a). Writes mutate object. Reads return serialized blob.")," In such a scenario, we need to collect two metrics:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Is the service read-heavy? (Will extra CPU spent on reads negate savings on writes?)"),(0,o.mdx)("li",{parentName:"ul"},"Can the service tolerate additional staleness?")),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(7130).Z})),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Option 3 (b). Reads introspect objects. Writes receive serialized blobs.")," In such a scenario, we need to collect two metrics"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Does reads introspect only a portion of an object? (How much?)"),(0,o.mdx)("li",{parentName:"ul"},"How much overlap there exists between reads?")),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:n(73414).Z})),(0,o.mdx)("h2",{id:"where-does-your-use-case-fit"},"Where Does Your Use Case Fit?"),(0,o.mdx)("p",null,"Please let us know if your particular usage is not captured in the decision framework above."),(0,o.mdx)("p",null,"CacheLib offers ready-made solutions for options 1 and 2. If you fall under option 3, you likely need a fairly specialized setup. Please reach out to us, and we can work together to figure out how to incorporate object-cache in your setup."))}m.isMDXComponent=!0},7130:function(e,t,n){t.Z=n.p+"assets/images/objCache-decision-guide-1-d84d2214f15e7a22fb61ed37914d7069.png"},73414:function(e,t,n){t.Z=n.p+"assets/images/objCache-decision-guide-2-4fdbf190f8a44a0b69e21793a3498076.png"},27534:function(e,t,n){t.Z=n.p+"assets/images/objCache-decision-guide-options-48b5db89245243f38ff5b026ac2e8ddb.png"}}]);