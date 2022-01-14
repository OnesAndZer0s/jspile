(()=>{var e={84709:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.codeFrameColumns=i,B.default=function(e,B,t,r={}){if(!n){n=!0;const e="Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";process.emitWarning?process.emitWarning(e,"DeprecationWarning"):(new Error(e).name="DeprecationWarning",console.warn(new Error(e)))}return i(e,{start:{column:t=Math.max(t,0),line:B}},r)};var r=t(23014);let n=!1;const s=/\r\n|[\n\r\u2028\u2029]/;function i(e,B,t={}){const n=(t.highlightCode||t.forceColor)&&(0,r.shouldHighlight)(t),i=(0,r.getChalk)(t),a=function(e){return{gutter:e.grey,marker:e.red.bold,message:e.red.bold}}(i),o=(e,B)=>n?e(B):B,C=e.split(s),{start:l,end:c,markerLines:u}=function(e,B,t){const r=Object.assign({column:0,line:-1},e.start),n=Object.assign({},r,e.end),{linesAbove:s=2,linesBelow:i=3}=t||{},a=r.line,o=r.column,C=n.line,l=n.column;let c=Math.max(a-(s+1),0),u=Math.min(B.length,C+i);-1===a&&(c=0),-1===C&&(u=B.length);const p=C-a,d={};if(p)for(let e=0;e<=p;e++){const t=e+a;if(o)if(0===e){const e=B[t-1].length;d[t]=[o,e-o+1]}else if(e===p)d[t]=[0,l];else{const r=B[t-e].length;d[t]=[0,r]}else d[t]=!0}else d[a]=o===l?!o||[o,0]:[o,l-o];return{start:c,end:u,markerLines:d}}(B,C,t),p=B.start&&"number"==typeof B.start.column,d=String(c).length;let f=(n?(0,r.default)(e,t):e).split(s,c).slice(l,c).map(((e,B)=>{const r=l+1+B,n=` ${` ${r}`.slice(-d)} |`,s=u[r],i=!u[r+1];if(s){let B="";if(Array.isArray(s)){const r=e.slice(0,Math.max(s[0]-1,0)).replace(/[^\t]/g," "),C=s[1]||1;B=["\n ",o(a.gutter,n.replace(/\d/g," "))," ",r,o(a.marker,"^").repeat(C)].join(""),i&&t.message&&(B+=" "+o(a.message,t.message))}return[o(a.marker,">"),o(a.gutter,n),e.length>0?` ${e}`:"",B].join("")}return` ${o(a.gutter,n)}${e.length>0?` ${e}`:""}`})).join("\n");return t.message&&!p&&(f=`${" ".repeat(d+1)}${t.message}\n${f}`),n?i.reset(f):f}},78142:(e,B,t)=>{e.exports=t(78392)},24832:(e,B,t)=>{e.exports=t(97867)},45008:()=>{},20656:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.assertSimpleType=d,B.makeStrongCache=C,B.makeStrongCacheSync=function(e){return i(C(e))},B.makeWeakCache=o,B.makeWeakCacheSync=function(e){return i(o(e))};var n=t(87241),s=t(31050);const i=e=>r()(e).sync;function*a(){return!0}function o(e){return l(WeakMap,e)}function C(e){return l(Map,e)}function l(e,B){const t=new e,r=new e,i=new e;return function*(e,a){const o=yield*(0,n.isAsync)(),C=o?r:t,l=yield*function*(e,B,t,r,s){const i=yield*c(B,r,s);if(i.valid)return i;if(e){const e=yield*c(t,r,s);if(e.valid)return{valid:!0,value:yield*(0,n.waitFor)(e.value.promise)}}return{valid:!1,value:null}}(o,C,i,e,a);if(l.valid)return l.value;const d=new p(a),h=B(e,d);let m,y;if((0,s.isIterableIterator)(h)){const B=h;y=yield*(0,n.onFirstPause)(B,(()=>{m=function(e,B,t){const r=new f;return u(B,e,t,r),r}(d,i,e)}))}else y=h;return u(C,d,e,y),m&&(i.delete(e),m.release(y)),y}}function*c(e,B,t){const r=e.get(B);if(r)for(const{value:e,valid:B}of r)if(yield*B(t))return{valid:!0,value:e};return{valid:!1,value:null}}function u(e,B,t,r){B.configured()||B.forever();let n=e.get(t);switch(B.deactivate(),B.mode()){case"forever":n=[{value:r,valid:a}],e.set(t,n);break;case"invalidate":n=[{value:r,valid:B.validator()}],e.set(t,n);break;case"valid":n?n.push({value:r,valid:B.validator()}):(n=[{value:r,valid:B.validator()}],e.set(t,n))}}class p{constructor(e){this._active=!0,this._never=!1,this._forever=!1,this._invalidate=!1,this._configured=!1,this._pairs=[],this._data=void 0,this._data=e}simple(){return function(e){function B(B){if("boolean"!=typeof B)return e.using((()=>d(B())));B?e.forever():e.never()}return B.forever=()=>e.forever(),B.never=()=>e.never(),B.using=B=>e.using((()=>d(B()))),B.invalidate=B=>e.invalidate((()=>d(B()))),B}(this)}mode(){return this._never?"never":this._forever?"forever":this._invalidate?"invalidate":"valid"}forever(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never)throw new Error("Caching has already been configured with .never()");this._forever=!0,this._configured=!0}never(){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._forever)throw new Error("Caching has already been configured with .forever()");this._never=!0,this._configured=!0}using(e){if(!this._active)throw new Error("Cannot change caching after evaluation has completed.");if(this._never||this._forever)throw new Error("Caching has already been configured with .never or .forever()");this._configured=!0;const B=e(this._data),t=(0,n.maybeAsync)(e,"You appear to be using an async cache handler, but Babel has been called synchronously");return(0,n.isThenable)(B)?B.then((e=>(this._pairs.push([e,t]),e))):(this._pairs.push([B,t]),B)}invalidate(e){return this._invalidate=!0,this.using(e)}validator(){const e=this._pairs;return function*(B){for(const[t,r]of e)if(t!==(yield*r(B)))return!1;return!0}}deactivate(){this._active=!1}configured(){return this._configured}}function d(e){if((0,n.isThenable)(e))throw new Error("You appear to be using an async cache handler, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously handle your caching logic.");if(null!=e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e)throw new Error("Cache keys must be either string, boolean, number, null, or undefined.");return e}class f{constructor(){this.released=!1,this.promise=void 0,this._resolve=void 0,this.promise=new Promise((e=>{this._resolve=e}))}release(e){this.released=!0,this._resolve(e)}}},4025:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}function n(){const e=t(15158);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.buildPresetChain=function*(e,B){const t=yield*u(e,B);return t?{plugins:G(t.plugins),presets:G(t.presets),options:t.options.map((e=>j(e))),files:new Set}:null},B.buildPresetChainWalker=void 0,B.buildRootChain=function*(e,B){let t,n;const s=new a.ConfigPrinter,C=yield*E({options:e,dirname:B.cwd},B,void 0,s);if(!C)return null;const l=yield*s.output();let c;"string"==typeof e.configFile?c=yield*(0,o.loadConfig)(e.configFile,B.cwd,B.envName,B.caller):!1!==e.configFile&&(c=yield*(0,o.findRootConfig)(B.root,B.envName,B.caller));let{babelrc:u,babelrcRoots:p}=e,d=B.cwd;const f=R(),h=new a.ConfigPrinter;if(c){const e=m(c),r=yield*g(e,B,void 0,h);if(!r)return null;t=yield*h.output(),void 0===u&&(u=e.options.babelrc),void 0===p&&(d=e.dirname,p=e.options.babelrcRoots),M(f,r)}let A,S,b=!1;const T=R();if((!0===u||void 0===u)&&"string"==typeof B.filename){const e=yield*(0,o.findPackageData)(B.filename);if(e&&function(e,B,t,n){if("boolean"==typeof t)return t;const s=e.root;if(void 0===t)return-1!==B.directories.indexOf(s);let a=t;return Array.isArray(a)||(a=[a]),a=a.map((e=>"string"==typeof e?r().resolve(n,e):e)),1===a.length&&a[0]===s?-1!==B.directories.indexOf(s):a.some((t=>("string"==typeof t&&(t=(0,i.default)(t,n)),B.directories.some((B=>Q(t,n,B,e))))))}(B,e,p,d)){if(({ignore:A,config:S}=yield*(0,o.findRelativeConfig)(e,B.envName,B.caller)),A&&T.files.add(A.filepath),A&&K(B,A.ignore,null,A.dirname)&&(b=!0),S&&!b){const e=y(S),t=new a.ConfigPrinter,r=yield*g(e,B,void 0,t);r?(n=yield*t.output(),M(T,r)):b=!0}S&&b&&T.files.add(S.filepath)}}B.showConfig&&console.log(`Babel configs on "${B.filename}" (ascending priority):\n`+[t,n,l].filter((e=>!!e)).join("\n\n")+"\n-----End Babel configs-----");const P=M(M(M(R(),f),T),C);return{plugins:b?[]:G(P.plugins),presets:b?[]:G(P.presets),options:b?[]:P.options.map((e=>j(e))),fileHandling:b?"ignored":"transpile",ignore:A||void 0,babelrc:S||void 0,config:c||void 0,files:P.files}};var s=t(91139),i=t(98552),a=t(35078),o=t(72557),C=t(20656),l=t(79261);const c=n()("babel:config:config-chain"),u=v({root:e=>p(e),env:(e,B)=>d(e)(B),overrides:(e,B)=>f(e)(B),overridesEnv:(e,B,t)=>h(e)(B)(t),createLogger:()=>()=>{}});B.buildPresetChainWalker=u;const p=(0,C.makeWeakCacheSync)((e=>I(e,e.alias,l.createUncachedDescriptors))),d=(0,C.makeWeakCacheSync)((e=>(0,C.makeStrongCacheSync)((B=>O(e,e.alias,l.createUncachedDescriptors,B))))),f=(0,C.makeWeakCacheSync)((e=>(0,C.makeStrongCacheSync)((B=>F(e,e.alias,l.createUncachedDescriptors,B))))),h=(0,C.makeWeakCacheSync)((e=>(0,C.makeStrongCacheSync)((B=>(0,C.makeStrongCacheSync)((t=>x(e,e.alias,l.createUncachedDescriptors,B,t))))))),m=(0,C.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("configfile",e.options)}))),y=(0,C.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("babelrcfile",e.options)}))),A=(0,C.makeWeakCacheSync)((e=>({filepath:e.filepath,dirname:e.dirname,options:(0,s.validate)("extendsfile",e.options)}))),E=v({root:e=>I(e,"base",l.createCachedDescriptors),env:(e,B)=>O(e,"base",l.createCachedDescriptors,B),overrides:(e,B)=>F(e,"base",l.createCachedDescriptors,B),overridesEnv:(e,B,t)=>x(e,"base",l.createCachedDescriptors,B,t),createLogger:(e,B,t)=>function(e,B,t){var r;return t?t.configure(B.showConfig,a.ChainFormatter.Programmatic,{callerName:null==(r=B.caller)?void 0:r.name}):()=>{}}(0,B,t)}),S=v({root:e=>b(e),env:(e,B)=>T(e)(B),overrides:(e,B)=>P(e)(B),overridesEnv:(e,B,t)=>D(e)(B)(t),createLogger:(e,B,t)=>function(e,B,t){return t?t.configure(B.showConfig,a.ChainFormatter.Config,{filepath:e}):()=>{}}(e.filepath,B,t)});function*g(e,B,t,r){const n=yield*S(e,B,t,r);return n&&n.files.add(e.filepath),n}const b=(0,C.makeWeakCacheSync)((e=>I(e,e.filepath,l.createUncachedDescriptors))),T=(0,C.makeWeakCacheSync)((e=>(0,C.makeStrongCacheSync)((B=>O(e,e.filepath,l.createUncachedDescriptors,B))))),P=(0,C.makeWeakCacheSync)((e=>(0,C.makeStrongCacheSync)((B=>F(e,e.filepath,l.createUncachedDescriptors,B))))),D=(0,C.makeWeakCacheSync)((e=>(0,C.makeStrongCacheSync)((B=>(0,C.makeStrongCacheSync)((t=>x(e,e.filepath,l.createUncachedDescriptors,B,t)))))));function I({dirname:e,options:B},t,r){return r(e,B,t)}function O({dirname:e,options:B},t,r,n){const s=B.env&&B.env[n];return s?r(e,s,`${t}.env["${n}"]`):null}function F({dirname:e,options:B},t,r,n){const s=B.overrides&&B.overrides[n];if(!s)throw new Error("Assertion failure - missing override");return r(e,s,`${t}.overrides[${n}]`)}function x({dirname:e,options:B},t,r,n,s){const i=B.overrides&&B.overrides[n];if(!i)throw new Error("Assertion failure - missing override");const a=i.env&&i.env[s];return a?r(e,a,`${t}.overrides[${n}].env["${s}"]`):null}function v({root:e,env:B,overrides:t,overridesEnv:r,createLogger:n}){return function*(s,i,a=new Set,o){const{dirname:C}=s,l=[],c=e(s);if(H(c,C,i)){l.push({config:c,envName:void 0,index:void 0});const e=B(s,i.envName);e&&H(e,C,i)&&l.push({config:e,envName:i.envName,index:void 0}),(c.options.overrides||[]).forEach(((e,B)=>{const n=t(s,B);if(H(n,C,i)){l.push({config:n,index:B,envName:void 0});const e=r(s,B,i.envName);e&&H(e,C,i)&&l.push({config:e,index:B,envName:i.envName})}}))}if(l.some((({config:{options:{ignore:e,only:B}}})=>K(i,e,B,C))))return null;const u=R(),p=n(s,i,o);for(const{config:e,index:B,envName:t}of l){if(!(yield*N(u,e.options,C,i,a,o)))return null;p(e,B,t),yield*L(u,e)}return u}}function*N(e,B,t,r,n,s){if(void 0===B.extends)return!0;const i=yield*(0,o.loadConfig)(B.extends,t,r.envName,r.caller);if(n.has(i))throw new Error(`Configuration cycle detected loading ${i.filepath}.\nFile already loaded following the config chain:\n`+Array.from(n,(e=>` - ${e.filepath}`)).join("\n"));n.add(i);const a=yield*g(A(i),r,n,s);return n.delete(i),!!a&&(M(e,a),!0)}function M(e,B){e.options.push(...B.options),e.plugins.push(...B.plugins),e.presets.push(...B.presets);for(const t of B.files)e.files.add(t);return e}function*L(e,{options:B,plugins:t,presets:r}){return e.options.push(B),e.plugins.push(...yield*t()),e.presets.push(...yield*r()),e}function R(){return{options:[],presets:[],plugins:[],files:new Set}}function j(e){const B=Object.assign({},e);return delete B.extends,delete B.env,delete B.overrides,delete B.plugins,delete B.presets,delete B.passPerPreset,delete B.ignore,delete B.only,delete B.test,delete B.include,delete B.exclude,Object.prototype.hasOwnProperty.call(B,"sourceMap")&&(B.sourceMaps=B.sourceMap,delete B.sourceMap),B}function G(e){const B=new Map,t=[];for(const r of e)if("function"==typeof r.value){const e=r.value;let n=B.get(e);n||(n=new Map,B.set(e,n));let s=n.get(r.name);s?s.value=r:(s={value:r},t.push(s),r.ownPass||n.set(r.name,s))}else t.push({value:r});return t.reduce(((e,B)=>(e.push(B.value),e)),[])}function H({options:e},B,t){return(void 0===e.test||w(t,e.test,B))&&(void 0===e.include||w(t,e.include,B))&&(void 0===e.exclude||!w(t,e.exclude,B))}function w(e,B,t){return J(e,Array.isArray(B)?B:[B],t)}function k(e,B){return B instanceof RegExp?String(B):B}function K(e,B,t,r){if(B&&J(e,B,r)){var n;const t=`No config is applied to "${null!=(n=e.filename)?n:"(unknown)"}" because it matches one of \`ignore: ${JSON.stringify(B,k)}\` from "${r}"`;return c(t),e.showConfig&&console.log(t),!0}if(t&&!J(e,t,r)){var s;const B=`No config is applied to "${null!=(s=e.filename)?s:"(unknown)"}" because it fails to match one of \`only: ${JSON.stringify(t,k)}\` from "${r}"`;return c(B),e.showConfig&&console.log(B),!0}return!1}function J(e,B,t){return B.some((B=>Q(B,t,e.filename,e)))}function Q(e,B,t,r){if("function"==typeof e)return!!e(t,{dirname:B,envName:r.envName,caller:r.caller});if("string"!=typeof t)throw new Error("Configuration contains string/RegExp pattern, but no filename was passed to Babel");return"string"==typeof e&&(e=(0,i.default)(e,B)),e.test(t)}},79261:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.createCachedDescriptors=function(e,B,t){const{plugins:r,presets:n,passPerPreset:s}=B;return{options:C(B,e),plugins:r?()=>p(r,e)(t):()=>o([]),presets:n?()=>c(n,e)(t)(!!s):()=>o([])}},B.createDescriptor=A,B.createUncachedDescriptors=function(e,B,t){let r,n;return{options:C(B,e),*plugins(){return r||(r=yield*m(B.plugins||[],e,t)),r},*presets(){return n||(n=yield*h(B.presets||[],e,t,!!B.passPerPreset)),n}}};var n=t(72557),s=t(46415),i=t(20656),a=t(93122);function*o(e){return e}function C(e,B){return"string"==typeof e.browserslistConfigFile&&(e.browserslistConfigFile=(0,a.resolveBrowserslistConfigFile)(e.browserslistConfigFile,B)),e}const l=new WeakMap,c=(0,i.makeWeakCacheSync)(((e,B)=>{const t=B.using((e=>e));return(0,i.makeStrongCacheSync)((B=>(0,i.makeStrongCache)((function*(r){return(yield*h(e,t,B,r)).map((e=>f(l,e)))}))))})),u=new WeakMap,p=(0,i.makeWeakCacheSync)(((e,B)=>{const t=B.using((e=>e));return(0,i.makeStrongCache)((function*(B){return(yield*m(e,t,B)).map((e=>f(u,e)))}))})),d={};function f(e,B){const{value:t,options:r=d}=B;if(!1===r)return B;let n=e.get(t);n||(n=new WeakMap,e.set(t,n));let s=n.get(r);if(s||(s=[],n.set(r,s)),-1===s.indexOf(B)){const e=s.filter((e=>{return r=B,(t=e).name===r.name&&t.value===r.value&&t.options===r.options&&t.dirname===r.dirname&&t.alias===r.alias&&t.ownPass===r.ownPass&&(t.file&&t.file.request)===(r.file&&r.file.request)&&(t.file&&t.file.resolved)===(r.file&&r.file.resolved);var t,r}));if(e.length>0)return e[0];s.push(B)}return B}function*h(e,B,t,r){return yield*y("preset",e,B,t,r)}function*m(e,B,t){return yield*y("plugin",e,B,t)}function*y(e,B,t,n,s){const i=yield*r().all(B.map(((B,r)=>A(B,t,{type:e,alias:`${n}$${r}`,ownPass:!!s}))));return function(e){const B=new Map;for(const t of e){if("function"!=typeof t.value)continue;let r=B.get(t.value);if(r||(r=new Set,B.set(t.value,r)),r.has(t.name)){const B=e.filter((e=>e.value===t.value));throw new Error(["Duplicate plugin/preset detected.","If you'd like to use two separate instances of a plugin,","they need separate names, e.g.","","  plugins: [","    ['some-plugin', {}],","    ['some-plugin', {}, 'some unique name'],","  ]","","Duplicates detected are:",`${JSON.stringify(B,null,2)}`].join("\n"))}r.add(t.name)}}(i),i}function*A(e,B,{type:t,alias:r,ownPass:i}){const a=(0,s.getItemDescriptor)(e);if(a)return a;let o,C,l,c=e;Array.isArray(c)&&(3===c.length?[c,C,o]=c:[c,C]=c);let u=null;if("string"==typeof c){if("string"!=typeof t)throw new Error("To resolve a string-based item, the type of item must be given");const e="plugin"===t?n.loadPlugin:n.loadPreset,r=c;({filepath:u,value:c}=yield*e(c,B)),l={request:r,resolved:u}}if(!c)throw new Error(`Unexpected falsy value: ${String(c)}`);if("object"==typeof c&&c.__esModule){if(!c.default)throw new Error("Must export a default export when using ES6 modules.");c=c.default}if("object"!=typeof c&&"function"!=typeof c)throw new Error(`Unsupported format: ${typeof c}. Expected an object or a function.`);if(null!==u&&"object"==typeof c&&c)throw new Error(`Plugin/Preset files are not allowed to export objects, only functions. In ${u}`);return{name:o,alias:u||r,value:c,options:C,dirname:B,ownPass:i,file:l}}},74108:(e,B,t)=>{"use strict";function r(){const e=t(15158);return r=function(){return e},e}function n(){const e=t(57147);return n=function(){return e},e}function s(){const e=t(71017);return s=function(){return e},e}function i(){const e=t(15876);return i=function(){return e},e}function a(){const e=t(20664);return a=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.ROOT_CONFIG_FILENAMES=void 0,B.findConfigUpwards=function(e){let B=e;for(;;){for(const e of f)if(n().existsSync(s().join(B,e)))return B;const e=s().dirname(B);if(B===e)break;B=e}return null},B.findRelativeConfig=function*(e,B,t){let r=null,n=null;const i=s().dirname(e.filepath);for(const o of e.directories){var a;if(r||(r=yield*m(h,o,B,t,(null==(a=e.pkg)?void 0:a.dirname)===o?S(e.pkg):null)),!n){const e=s().join(o,".babelignore");n=yield*b(e),n&&d("Found ignore %o from %o.",n.filepath,i)}}return{config:r,ignore:n}},B.findRootConfig=function(e,B,t){return m(f,e,B,t)},B.loadConfig=function*(e,B,r,n){const s=(o="8.9",a=(a=process.versions.node).split("."),o=o.split("."),+a[0]>+o[0]||a[0]==o[0]&&+a[1]>=+o[1]?t(20858).resolve:(e,{paths:[B]},r=t(98188))=>{let n=r._findPath(e,r._nodeModulePaths(B).concat(B));if(n)return n;throw n=new Error(`Cannot resolve module '${e}'`),n.code="MODULE_NOT_FOUND",n})(e,{paths:[B]}),i=yield*y(s,r,n);var a,o;if(!i)throw new Error(`Config file ${s} contains no configuration data`);return d("Loaded config %o from %o.",e,B),i},B.resolveShowConfigPath=function*(e){const B=process.env.BABEL_SHOW_CONFIG_FOR;if(null!=B){const t=s().resolve(e,B);if(!(yield*p.stat(t)).isFile())throw new Error(`${t}: BABEL_SHOW_CONFIG_FOR must refer to a regular file, directories are not supported.`);return t}return null};var o=t(20656),C=t(85839),l=t(82800),c=t(82846),u=t(98552),p=t(82344);const d=r()("babel:config:loading:files:configuration"),f=["babel.config.js","babel.config.cjs","babel.config.mjs","babel.config.json"];B.ROOT_CONFIG_FILENAMES=f;const h=[".babelrc",".babelrc.js",".babelrc.cjs",".babelrc.mjs",".babelrc.json"];function*m(e,B,t,r,n=null){const i=(yield*a().all(e.map((e=>y(s().join(B,e),t,r))))).reduce(((e,t)=>{if(t&&e)throw new Error(`Multiple configuration files found. Please remove one:\n - ${s().basename(e.filepath)}\n - ${t.filepath}\nfrom ${B}`);return t||e}),n);return i&&d("Found configuration %o from %o.",i.filepath,B),i}function y(e,B,t){const r=s().extname(e);return".js"===r||".cjs"===r||".mjs"===r?E(e,{envName:B,caller:t}):g(e)}const A=new Set,E=(0,o.makeStrongCache)((function*(e,B){if(!n().existsSync(e))return B.never(),null;if(A.has(e))return B.never(),d("Auto-ignoring usage of config %o.",e),{filepath:e,dirname:s().dirname(e),options:{}};let t;try{A.add(e),t=yield*(0,c.default)(e,"You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.")}catch(B){throw B.message=`${e}: Error while loading config - ${B.message}`,B}finally{A.delete(e)}let r=!1;if("function"==typeof t&&(yield*[],t=t((0,C.makeConfigAPI)(B)),r=!0),!t||"object"!=typeof t||Array.isArray(t))throw new Error(`${e}: Configuration should be an exported JavaScript object.`);if("function"==typeof t.then)throw new Error("You appear to be using an async configuration, which your current version of Babel does not support. We may add support for this in the future, but if you're on the most recent version of @babel/core and still seeing this error, then you'll need to synchronously return your config.");return r&&!B.configured()&&function(){throw new Error('Caching was left unconfigured. Babel\'s plugins, presets, and .babelrc.js files can be configured\nfor various types of caching, using the first param of their handler functions:\n\nmodule.exports = function(api) {\n  // The API exposes the following:\n\n  // Cache the returned value forever and don\'t call this function again.\n  api.cache(true);\n\n  // Don\'t cache at all. Not recommended because it will be very slow.\n  api.cache(false);\n\n  // Cached based on the value of some function. If this function returns a value different from\n  // a previously-encountered value, the plugins will re-evaluate.\n  var env = api.cache(() => process.env.NODE_ENV);\n\n  // If testing for a specific env, we recommend specifics to avoid instantiating a plugin for\n  // any possible NODE_ENV value that might come up during plugin execution.\n  var isProd = api.cache(() => process.env.NODE_ENV === "production");\n\n  // .cache(fn) will perform a linear search though instances to find the matching plugin based\n  // based on previous instantiated plugins. If you want to recreate the plugin and discard the\n  // previous instance whenever something changes, you may use:\n  var isProd = api.cache.invalidate(() => process.env.NODE_ENV === "production");\n\n  // Note, we also expose the following more-verbose versions of the above examples:\n  api.cache.forever(); // api.cache(true)\n  api.cache.never();   // api.cache(false)\n  api.cache.using(fn); // api.cache(fn)\n\n  // Return the value that will be cached.\n  return { };\n};')}(),{filepath:e,dirname:s().dirname(e),options:t}})),S=(0,o.makeWeakCacheSync)((e=>{const B=e.options.babel;if(void 0===B)return null;if("object"!=typeof B||Array.isArray(B)||null===B)throw new Error(`${e.filepath}: .babel property must be an object`);return{filepath:e.filepath,dirname:e.dirname,options:B}})),g=(0,l.makeStaticFileCache)(((e,B)=>{let t;try{t=i().parse(B)}catch(B){throw B.message=`${e}: Error while parsing config - ${B.message}`,B}if(!t)throw new Error(`${e}: No config detected`);if("object"!=typeof t)throw new Error(`${e}: Config returned typeof ${typeof t}`);if(Array.isArray(t))throw new Error(`${e}: Expected config object but found array`);return delete t.$schema,{filepath:e,dirname:s().dirname(e),options:t}})),b=(0,l.makeStaticFileCache)(((e,B)=>{const t=s().dirname(e),r=B.split("\n").map((e=>e.replace(/#(.*?)$/,"").trim())).filter((e=>!!e));for(const e of r)if("!"===e[0])throw new Error("Negation of file paths is not supported.");return{filepath:e,dirname:s().dirname(e),ignore:r.map((e=>(0,u.default)(e,t)))}}))},75023:(e,B,t)=>{"use strict";B.Z=function(e){return t(74884)(e)}},72557:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),Object.defineProperty(B,"ROOT_CONFIG_FILENAMES",{enumerable:!0,get:function(){return n.ROOT_CONFIG_FILENAMES}}),Object.defineProperty(B,"findConfigUpwards",{enumerable:!0,get:function(){return n.findConfigUpwards}}),Object.defineProperty(B,"findPackageData",{enumerable:!0,get:function(){return r.findPackageData}}),Object.defineProperty(B,"findRelativeConfig",{enumerable:!0,get:function(){return n.findRelativeConfig}}),Object.defineProperty(B,"findRootConfig",{enumerable:!0,get:function(){return n.findRootConfig}}),Object.defineProperty(B,"loadConfig",{enumerable:!0,get:function(){return n.loadConfig}}),Object.defineProperty(B,"loadPlugin",{enumerable:!0,get:function(){return s.loadPlugin}}),Object.defineProperty(B,"loadPreset",{enumerable:!0,get:function(){return s.loadPreset}}),Object.defineProperty(B,"resolvePlugin",{enumerable:!0,get:function(){return s.resolvePlugin}}),Object.defineProperty(B,"resolvePreset",{enumerable:!0,get:function(){return s.resolvePreset}}),Object.defineProperty(B,"resolveShowConfigPath",{enumerable:!0,get:function(){return n.resolveShowConfigPath}});var r=t(55904),n=t(74108),s=t(7372)},82846:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function*(e,B,t=!1){switch(function(e){switch(n().extname(e)){case".cjs":return"cjs";case".mjs":return"mjs";default:return"unknown"}}(e)){case"cjs":return C(e,t);case"unknown":try{return C(e,t)}catch(e){if("ERR_REQUIRE_ESM"!==e.code)throw e}case"mjs":if(yield*(0,r.isAsync)())return yield*(0,r.waitFor)(function(e){return l.apply(this,arguments)}(e));throw new Error(B)}};var r=t(87241);function n(){const e=t(71017);return n=function(){return e},e}function s(){const e=t(57310);return s=function(){return e},e}function i(e,B,t,r,n,s,i){try{var a=e[s](i),o=a.value}catch(e){return void t(e)}a.done?B(o):Promise.resolve(o).then(r,n)}function a(e){return function(){var B=this,t=arguments;return new Promise((function(r,n){var s=e.apply(B,t);function a(e){i(s,r,n,a,o,"next",e)}function o(e){i(s,r,n,a,o,"throw",e)}a(void 0)}))}}let o;try{o=t(75023).Z}catch(e){}function C(e,B){const r=t(20858)(e);return null!=r&&r.__esModule?r.default||(B?r:void 0):r}function l(){return(l=a((function*(e){if(!o)throw new Error("Internal error: Native ECMAScript modules aren't supported by this platform.\n");return(yield o((0,s().pathToFileURL)(e))).default}))).apply(this,arguments)}},55904:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.findPackageData=function*(e){let B=null;const t=[];let s=!0,i=r().dirname(e);for(;!B&&"node_modules"!==r().basename(i);){t.push(i),B=yield*n(r().join(i,"package.json"));const e=r().dirname(i);if(i===e){s=!1;break}i=e}return{filepath:e,directories:t,pkg:B,isPackage:s}};const n=(0,t(82800).makeStaticFileCache)(((e,B)=>{let t;try{t=JSON.parse(B)}catch(B){throw B.message=`${e}: Error while parsing JSON - ${B.message}`,B}if(!t)throw new Error(`${e}: No config detected`);if("object"!=typeof t)throw new Error(`${e}: Config returned typeof ${typeof t}`);if(Array.isArray(t))throw new Error(`${e}: Expected config object but found array`);return{filepath:e,dirname:r().dirname(e),options:t}}))},7372:(e,B,t)=>{"use strict";function r(){const e=t(15158);return r=function(){return e},e}function n(){const e=t(71017);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.loadPlugin=function*(e,B){const t=f(e,B);if(!t)throw new Error(`Plugin ${e} not found relative to ${B}`);const r=yield*E("plugin",t);return i("Loaded plugin %o from %o.",e,B),{filepath:t,value:r}},B.loadPreset=function*(e,B){const t=h(e,B);if(!t)throw new Error(`Preset ${e} not found relative to ${B}`);const r=yield*E("preset",t);return i("Loaded preset %o from %o.",e,B),{filepath:t,value:r}},B.resolvePlugin=f,B.resolvePreset=h;var s=t(82846);const i=r()("babel:config:loading:files:plugins"),a=/^module:/,o=/^(?!@|module:|[^/]+\/|babel-plugin-)/,C=/^(?!@|module:|[^/]+\/|babel-preset-)/,l=/^(@babel\/)(?!plugin-|[^/]+\/)/,c=/^(@babel\/)(?!preset-|[^/]+\/)/,u=/^(@(?!babel\/)[^/]+\/)(?![^/]*babel-plugin(?:-|\/|$)|[^/]+\/)/,p=/^(@(?!babel\/)[^/]+\/)(?![^/]*babel-preset(?:-|\/|$)|[^/]+\/)/,d=/^(@(?!babel$)[^/]+)$/;function f(e,B){return y("plugin",e,B)}function h(e,B){return y("preset",e,B)}function m(e,B){if(n().isAbsolute(B))return B;const t="preset"===e;return B.replace(t?C:o,`babel-${e}-`).replace(t?c:l,`$1${e}-`).replace(t?p:u,`$1babel-${e}-`).replace(d,`$1/babel-${e}`).replace(a,"")}function y(e,B,r=process.cwd()){const n=m(e,B);try{return(s=process.versions.node,i="8.9",s=s.split("."),i=i.split("."),+s[0]>+i[0]||s[0]==i[0]&&+s[1]>=+i[1]?t(20858).resolve:(e,{paths:[B]},r=t(98188))=>{let n=r._findPath(e,r._nodeModulePaths(B).concat(B));if(n)return n;throw n=new Error(`Cannot resolve module '${e}'`),n.code="MODULE_NOT_FOUND",n})(n,{paths:[r]})}catch(s){if("MODULE_NOT_FOUND"!==s.code)throw s;if(n!==B){let e=!1;try{(((e,B)=>(e=e.split("."),B=B.split("."),+e[0]>+B[0]||e[0]==B[0]&&+e[1]>=+B[1]))(process.versions.node,"8.9")?t(20858).resolve:(e,{paths:[B]},r=t(98188))=>{let n=r._findPath(e,r._nodeModulePaths(B).concat(B));if(n)return n;throw n=new Error(`Cannot resolve module '${e}'`),n.code="MODULE_NOT_FOUND",n})(B,{paths:[r]}),e=!0}catch(e){}e&&(s.message+=`\n- If you want to resolve "${B}", use "module:${B}"`)}let i=!1;try{(((e,B)=>(e=e.split("."),B=B.split("."),+e[0]>+B[0]||e[0]==B[0]&&+e[1]>=+B[1]))(process.versions.node,"8.9")?t(20858).resolve:(e,{paths:[B]},r=t(98188))=>{let n=r._findPath(e,r._nodeModulePaths(B).concat(B));if(n)return n;throw n=new Error(`Cannot resolve module '${e}'`),n.code="MODULE_NOT_FOUND",n})(m(e,"@babel/"+B),{paths:[r]}),i=!0}catch(e){}i&&(s.message+=`\n- Did you mean "@babel/${B}"?`);let a=!1;const o="preset"===e?"plugin":"preset";try{(((e,B)=>(e=e.split("."),B=B.split("."),+e[0]>+B[0]||e[0]==B[0]&&+e[1]>=+B[1]))(process.versions.node,"8.9")?t(20858).resolve:(e,{paths:[B]},r=t(98188))=>{let n=r._findPath(e,r._nodeModulePaths(B).concat(B));if(n)return n;throw n=new Error(`Cannot resolve module '${e}'`),n.code="MODULE_NOT_FOUND",n})(m(o,B),{paths:[r]}),a=!0}catch(e){}throw a&&(s.message+=`\n- Did you accidentally pass a ${o} as a ${e}?`),s}var s,i}const A=new Set;function*E(e,B){if(A.has(B))throw new Error(`Reentrant ${e} detected trying to load "${B}". This module is not ignored and is trying to load itself while compiling itself, leading to a dependency cycle. We recommend adding it to your "ignore" list in your babelrc, or to a .babelignore.`);try{return A.add(B),yield*(0,s.default)(B,`You appear to be using a native ECMAScript module ${e}, which is only supported when running Babel asynchronously.`,!0)}catch(e){throw e.message=`[BABEL]: ${e.message} (While processing: ${B})`,e}finally{A.delete(B)}}},82800:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.makeStaticFileCache=function(e){return(0,r.makeStrongCache)((function*(B,t){const r=t.invalidate((()=>function(e){if(!s().existsSync(e))return null;try{return+s().statSync(e).mtime}catch(e){if("ENOENT"!==e.code&&"ENOTDIR"!==e.code)throw e}return null}(B)));return null===r?null:e(B,yield*n.readFile(B,"utf8"))}))};var r=t(20656),n=t(82344);function s(){const e=t(57147);return s=function(){return e},e}},74884:e=>{function B(e){return Promise.resolve().then((()=>{var B=new Error("Cannot find module '"+e+"'");throw B.code="MODULE_NOT_FOUND",B}))}B.keys=()=>[],B.resolve=B,B.id=74884,e.exports=B},20858:e=>{function B(e){var B=new Error("Cannot find module '"+e+"'");throw B.code="MODULE_NOT_FOUND",B}B.keys=()=>[],B.resolve=B,B.id=20858,e.exports=B},49178:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var n=t(87241),s=t(31050),i=t(32420),a=t(80424),o=t(46415),C=t(4025);function l(){const e=t(49838);return l=function(){return e},e}var c=t(20656),u=t(91139),p=t(54931),d=t(85839),f=t(26248),h=(t(45008),r()((function*(e){var B;const t=yield*(0,f.default)(e);if(!t)return null;const{options:r,context:n,fileHandling:i}=t;if("ignored"===i)return null;const a={},{plugins:C,presets:l}=r;if(!C||!l)throw new Error("Assertion failure - plugins and presets exist");const c=Object.assign({},n,{targets:r.targets}),p=e=>{const B=(0,o.getItemDescriptor)(e);if(!B)throw new Error("Assertion failure - must be config item");return B},d=l.map(p),h=C.map(p),y=[[]],A=[],E=yield*m(n,(function*e(B,t){const r=[];for(let e=0;e<B.length;e++){const n=B[e];if(!1!==n.options)try{n.ownPass?r.push({preset:yield*T(n,c),pass:[]}):r.unshift({preset:yield*T(n,c),pass:t})}catch(t){throw"BABEL_UNKNOWN_OPTION"===t.code&&(0,u.checkNoUnwrappedItemOptionPairs)(B,e,"preset",t),t}}if(r.length>0){y.splice(1,0,...r.map((e=>e.pass)).filter((e=>e!==t)));for(const{preset:B,pass:t}of r){if(!B)return!0;if(t.push(...B.plugins),yield*e(B.presets,t))return!0;B.options.forEach((e=>{(0,s.mergeOptions)(a,e)}))}}}))(d,y[0]);if(E)return null;const g=a;(0,s.mergeOptions)(g,r);const b=Object.assign({},c,{assumptions:null!=(B=g.assumptions)?B:{}});return yield*m(n,(function*(){y[0].unshift(...h);for(const e of y){const B=[];A.push(B);for(let t=0;t<e.length;t++){const r=e[t];if(!1!==r.options)try{B.push(yield*S(r,b))}catch(B){throw"BABEL_UNKNOWN_PLUGIN_PROPERTY"===B.code&&(0,u.checkNoUnwrappedItemOptionPairs)(e,t,"plugin",B),B}}}}))(),g.plugins=A[0],g.presets=A.slice(1).filter((e=>e.length>0)).map((e=>({plugins:e}))),g.passPerPreset=g.presets.length>0,{options:g,passes:A}})));function m(e,B){return function*(t,r){try{return yield*B(t,r)}catch(B){throw/^\[BABEL\]/.test(B.message)||(B.message=`[BABEL] ${e.filename||"unknown"}: ${B.message}`),B}}}B.default=h;const y=e=>(0,c.makeWeakCache)((function*({value:B,options:t,dirname:r,alias:s},a){if(!1===t)throw new Error("Assertion failure");t=t||{};let o=B;if("function"==typeof B){const C=(0,n.maybeAsync)(B,"You appear to be using an async plugin/preset, but Babel has been called synchronously"),l=Object.assign({},i,e(a));try{o=yield*C(l,t,r)}catch(e){throw s&&(e.message+=` (While processing: ${JSON.stringify(s)})`),e}}if(!o||"object"!=typeof o)throw new Error("Plugin/Preset did not return an object.");if((0,n.isThenable)(o))throw yield*[],new Error(`You appear to be using a promise as a plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version. As an alternative, you can prefix the promise with "await". (While processing: ${JSON.stringify(s)})`);return{value:o,options:t,dirname:r,alias:s}})),A=y(d.makePluginAPI),E=y(d.makePresetAPI);function*S(e,B){if(e.value instanceof a.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*g(yield*A(e,B),B)}const g=(0,c.makeWeakCache)((function*({value:e,options:B,dirname:t,alias:r},s){const i=(0,p.validatePluginObject)(e),o=Object.assign({},i);if(o.visitor&&(o.visitor=l().default.explode(Object.assign({},o.visitor))),o.inherits){const e={name:void 0,alias:`${r}$inherits`,value:o.inherits,options:B,dirname:t},i=yield*(0,n.forwardAsync)(S,(B=>s.invalidate((t=>B(e,t)))));o.pre=D(i.pre,o.pre),o.post=D(i.post,o.post),o.manipulateOptions=D(i.manipulateOptions,o.manipulateOptions),o.visitor=l().default.visitors.merge([i.visitor||{},o.visitor||{}])}return new a.default(o,B,r)})),b=(e,B)=>{if(e.test||e.include||e.exclude){const e=B.name?`"${B.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*T(e,B){const t=P(yield*E(e,B));return((e,B,t)=>{if(!B.filename){const{options:B}=e;b(B,t),B.overrides&&B.overrides.forEach((e=>b(e,t)))}})(t,B,e),yield*(0,C.buildPresetChain)(t,B)}const P=(0,c.makeWeakCacheSync)((({value:e,dirname:B,alias:t})=>({options:(0,u.validate)("preset",e),alias:t,dirname:B})));function D(e,B){const t=[e,B].filter(Boolean);return t.length<=1?t[0]:function(...e){for(const B of t)B.apply(this,e)}}},85839:(e,B,t)=>{"use strict";function r(){const e=t(36625);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.makeConfigAPI=i,B.makePluginAPI=function(e){return Object.assign({},a(e),{assumption:B=>e.using((e=>e.assumptions[B]))})},B.makePresetAPI=a;var n=t(32420),s=t(20656);function i(e){return{version:n.version,cache:e.simple(),env:B=>e.using((e=>void 0===B?e.envName:"function"==typeof B?(0,s.assertSimpleType)(B(e.envName)):(Array.isArray(B)||(B=[B]),B.some((B=>{if("string"!=typeof B)throw new Error("Unexpected non-string value");return B===e.envName}))))),async:()=>!1,caller:B=>e.using((e=>(0,s.assertSimpleType)(B(e.caller)))),assertVersion:o}}function a(e){return Object.assign({},i(e),{targets:()=>JSON.parse(e.using((e=>JSON.stringify(e.targets))))})}function o(e){if("number"==typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!=typeof e)throw new Error("Expected string or integer value.");if(r().satisfies(n.version,e))return;const B=Error.stackTraceLimit;"number"==typeof B&&B<25&&(Error.stackTraceLimit=25);const t=new Error(`Requires Babel "${e}", but was loaded with "${n.version}". If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`);throw"number"==typeof B&&(Error.stackTraceLimit=B),Object.assign(t,{code:"BABEL_VERSION_UNSUPPORTED",version:n.version,range:e})}t(45008)},2837:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.getEnv=function(e="development"){return process.env.BABEL_ENV||"production"}},20695:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.createConfigItem=function(e,B,t){return void 0!==t?o.errback(e,B,t):"function"==typeof B?o.errback(e,void 0,t):o.sync(e,B)},B.createConfigItemSync=B.createConfigItemAsync=void 0,Object.defineProperty(B,"default",{enumerable:!0,get:function(){return n.default}}),B.loadPartialConfigSync=B.loadPartialConfigAsync=B.loadPartialConfig=B.loadOptionsSync=B.loadOptionsAsync=B.loadOptions=void 0;var n=t(49178),s=t(26248),i=t(46415);const a=r()((function*(e){var B;const t=yield*(0,n.default)(e);return null!=(B=null==t?void 0:t.options)?B:null})),o=r()(i.createConfigItem),C=e=>(B,t)=>(void 0===t&&"function"==typeof B&&(t=B,B=void 0),t?e.errback(B,t):e.sync(B)),l=C(s.loadPartialConfig);B.loadPartialConfig=l;const c=s.loadPartialConfig.sync;B.loadPartialConfigSync=c;const u=s.loadPartialConfig.async;B.loadPartialConfigAsync=u;const p=C(a);B.loadOptions=p;const d=a.sync;B.loadOptionsSync=d;const f=a.async;B.loadOptionsAsync=f;const h=o.sync;B.createConfigItemSync=h;const m=o.async;B.createConfigItemAsync=m},46415:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.createConfigItem=function*(e,{dirname:B=".",type:t}={}){return s(yield*(0,n.createDescriptor)(e,r().resolve(B),{type:t,alias:"programmatic item"}))},B.createItemFromDescriptor=s,B.getItemDescriptor=function(e){if(null!=e&&e[i])return e._descriptor};var n=t(79261);function s(e){return new a(e)}const i=Symbol.for("@babel/core@7 - ConfigItem");class a{constructor(e){this._descriptor=void 0,this[i]=!0,this.value=void 0,this.options=void 0,this.dirname=void 0,this.name=void 0,this.file=void 0,this._descriptor=e,Object.defineProperty(this,"_descriptor",{enumerable:!1}),Object.defineProperty(this,i,{enumerable:!1}),this.value=this._descriptor.value,this.options=this._descriptor.options,this.dirname=this._descriptor.dirname,this.name=this._descriptor.name,this.file=this._descriptor.file?{request:this._descriptor.file.request,resolved:this._descriptor.file.resolved}:void 0,Object.freeze(this)}}Object.freeze(a.prototype)},26248:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}function n(){const e=t(20664);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=d,B.loadPartialConfig=void 0;var s=t(80424),i=t(31050),a=t(46415),o=t(4025),C=t(2837),l=t(91139),c=t(72557),u=t(93122);const p=["showIgnoredFiles"];function*d(e){if(null!=e&&("object"!=typeof e||Array.isArray(e)))throw new Error("Babel options must be an object, null, or undefined");const B=e?(0,l.validate)("arguments",e):{},{envName:t=(0,C.getEnv)(),cwd:n=".",root:s=".",rootMode:p="root",caller:d,cloneInputAst:f=!0}=B,h=r().resolve(n),m=function(e,B){switch(B){case"root":return e;case"upward-optional":{const B=(0,c.findConfigUpwards)(e);return null===B?e:B}case"upward":{const B=(0,c.findConfigUpwards)(e);if(null!==B)return B;throw Object.assign(new Error(`Babel was run with rootMode:"upward" but a root could not be found when searching upward from "${e}".\nOne of the following config files must be in the directory tree: "${c.ROOT_CONFIG_FILENAMES.join(", ")}".`),{code:"BABEL_ROOT_NOT_FOUND",dirname:e})}default:throw new Error("Assertion failure - unknown rootMode value.")}}(r().resolve(h,s),p),y="string"==typeof B.filename?r().resolve(n,B.filename):void 0,A={filename:y,cwd:h,root:m,envName:t,caller:d,showConfig:(yield*(0,c.resolveShowConfigPath)(h))===y},E=yield*(0,o.buildRootChain)(B,A);if(!E)return null;const S={assumptions:{}};return E.options.forEach((e=>{(0,i.mergeOptions)(S,e)})),{options:Object.assign({},S,{targets:(0,u.resolveTargets)(S,m),cloneInputAst:f,babelrc:!1,configFile:!1,browserslistConfigFile:!1,passPerPreset:!1,envName:A.envName,cwd:A.cwd,root:A.root,rootMode:"root",filename:"string"==typeof A.filename?A.filename:void 0,plugins:E.plugins.map((e=>(0,a.createItemFromDescriptor)(e))),presets:E.presets.map((e=>(0,a.createItemFromDescriptor)(e)))}),context:A,fileHandling:E.fileHandling,ignore:E.ignore,babelrc:E.babelrc,config:E.config,files:E.files}}const f=n()((function*(e){let B=!1;if("object"==typeof e&&null!==e&&!Array.isArray(e)){var t=e;({showIgnoredFiles:B}=t),e=function(e,B){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],B.indexOf(t)>=0||(n[t]=e[t]);return n}(t,p)}const r=yield*d(e);if(!r)return null;const{options:n,babelrc:i,ignore:a,config:o,fileHandling:C,files:l}=r;return"ignored"!==C||B?((n.plugins||[]).forEach((e=>{if(e.value instanceof s.default)throw new Error("Passing cached plugin instances is not supported in babel.loadPartialConfig()")})),new h(n,i?i.filepath:void 0,a?a.filepath:void 0,o?o.filepath:void 0,C,l)):null}));B.loadPartialConfig=f;class h{constructor(e,B,t,r,n,s){this.options=void 0,this.babelrc=void 0,this.babelignore=void 0,this.config=void 0,this.fileHandling=void 0,this.files=void 0,this.options=e,this.babelignore=t,this.babelrc=B,this.config=r,this.fileHandling=n,this.files=s,Object.freeze(this)}hasFilesystemConfig(){return void 0!==this.babelrc||void 0!==this.config}}Object.freeze(h.prototype)},98552:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B){const t=r().resolve(B,e).split(r().sep);return new RegExp(["^",...t.map(((e,B)=>{const r=B===t.length-1;return"**"===e?r?l:C:"*"===e?r?o:a:0===e.indexOf("*.")?i+c(e.slice(1))+(r?s:n):c(e)+(r?s:n)}))].join(""))};const n=`\\${r().sep}`,s=`(?:${n}|$)`,i=`[^${n}]+`,a=`(?:${i}${n})`,o=`(?:${i}${s})`,C=`${a}*?`,l=`${a}*?${o}?`;function c(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}},80424:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0,B.default=class{constructor(e,B,t){this.key=void 0,this.manipulateOptions=void 0,this.post=void 0,this.pre=void 0,this.visitor=void 0,this.parserOverride=void 0,this.generatorOverride=void 0,this.options=void 0,this.key=e.name||t,this.manipulateOptions=e.manipulateOptions,this.post=e.post,this.pre=e.pre,this.visitor=e.visitor||{},this.parserOverride=e.parserOverride,this.generatorOverride=e.generatorOverride,this.options=B}}},35078:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.ConfigPrinter=B.ChainFormatter=void 0;const n={Programmatic:0,Config:1};B.ChainFormatter=n;const s={title(e,B,t){let r="";return e===n.Programmatic?(r="programmatic options",B&&(r+=" from "+B)):r="config "+t,r},loc(e,B){let t="";return null!=e&&(t+=`.overrides[${e}]`),null!=B&&(t+=`.env["${B}"]`),t},*optionsAndDescriptors(e){const B=Object.assign({},e.options);delete B.overrides,delete B.env;const t=[...yield*e.plugins()];t.length&&(B.plugins=t.map((e=>i(e))));const r=[...yield*e.presets()];return r.length&&(B.presets=[...r].map((e=>i(e)))),JSON.stringify(B,void 0,2)}};function i(e){var B;let t=null==(B=e.file)?void 0:B.request;return null==t&&("object"==typeof e.value?t=e.value:"function"==typeof e.value&&(t=`[Function: ${e.value.toString().substr(0,50)} ... ]`)),null==t&&(t="[Unknown]"),void 0===e.options?t:null==e.name?[t,e.options]:[t,e.options,e.name]}class a{constructor(){this._stack=[]}configure(e,B,{callerName:t,filepath:r}){return e?(e,n,s)=>{this._stack.push({type:B,callerName:t,filepath:r,content:e,index:n,envName:s})}:()=>{}}static*format(e){let B=s.title(e.type,e.callerName,e.filepath);const t=s.loc(e.index,e.envName);return t&&(B+=` ${t}`),`${B}\n${yield*s.optionsAndDescriptors(e.content)}`}*output(){return 0===this._stack.length?"":(yield*r().all(this._stack.map((e=>a.format(e))))).join("\n\n")}}B.ConfigPrinter=a},93122:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}function n(){const e=t(34077);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.resolveBrowserslistConfigFile=function(e,B){return r().resolve(B,e)},B.resolveTargets=function(e,B){let t=e.targets;("string"==typeof t||Array.isArray(t))&&(t={browsers:t}),t&&t.esmodules&&(t=Object.assign({},t,{esmodules:"intersect"}));const{browserslistConfigFile:r}=e;let s,i=!1;return"string"==typeof r?s=r:i=!1===r,(0,n().default)(t,{ignoreBrowserslistConfig:i,configFile:s,configPath:B,browserslistEnv:e.browserslistEnv})}},31050:(e,B)=>{"use strict";function t(e,B){for(const t of Object.keys(B)){const r=B[t];void 0!==r&&(e[t]=r)}}Object.defineProperty(B,"__esModule",{value:!0}),B.isIterableIterator=function(e){return!!e&&"function"==typeof e.next&&"function"==typeof e[Symbol.iterator]},B.mergeOptions=function(e,B){for(const r of Object.keys(B))if("parserOpts"!==r&&"generatorOpts"!==r&&"assumptions"!==r||!B[r]){const t=B[r];void 0!==t&&(e[r]=t)}else{const n=B[r];t(e[r]||(e[r]={}),n)}}},92517:(e,B,t)=>{"use strict";function r(){const e=t(34077);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.access=i,B.assertArray=C,B.assertAssumptions=function(e,B){if(void 0===B)return;if("object"!=typeof B||null===B)throw new Error(`${s(e)} must be an object or undefined.`);let t=e;do{t=t.parent}while("root"!==t.type);const r="preset"===t.source;for(const t of Object.keys(B)){const a=i(e,t);if(!n.assumptionsNames.has(t))throw new Error(`${s(a)} is not a supported assumption.`);if("boolean"!=typeof B[t])throw new Error(`${s(a)} must be a boolean.`);if(r&&!1===B[t])throw new Error(`${s(a)} cannot be set to 'false' inside presets.`)}return B},B.assertBabelrcSearch=function(e,B){if(void 0===B||"boolean"==typeof B)return B;if(Array.isArray(B))B.forEach(((B,t)=>{if(!l(B))throw new Error(`${s(i(e,t))} must be a string/Function/RegExp.`)}));else if(!l(B))throw new Error(`${s(e)} must be a undefined, a boolean, a string/Function/RegExp or an array of those, got ${JSON.stringify(B)}`);return B},B.assertBoolean=a,B.assertCallerMetadata=function(e,B){const t=o(e,B);if(t){if("string"!=typeof t.name)throw new Error(`${s(e)} set but does not contain "name" property string`);for(const B of Object.keys(t)){const r=i(e,B),n=t[B];if(null!=n&&"boolean"!=typeof n&&"string"!=typeof n&&"number"!=typeof n)throw new Error(`${s(r)} must be null, undefined, a boolean, a string, or a number.`)}}return B},B.assertCompact=function(e,B){if(void 0!==B&&"boolean"!=typeof B&&"auto"!==B)throw new Error(`${s(e)} must be a boolean, "auto", or undefined`);return B},B.assertConfigApplicableTest=function(e,B){if(void 0===B)return B;if(Array.isArray(B))B.forEach(((B,t)=>{if(!l(B))throw new Error(`${s(i(e,t))} must be a string/Function/RegExp.`)}));else if(!l(B))throw new Error(`${s(e)} must be a string/Function/RegExp, or an array of those`);return B},B.assertConfigFileSearch=function(e,B){if(void 0!==B&&"boolean"!=typeof B&&"string"!=typeof B)throw new Error(`${s(e)} must be a undefined, a boolean, a string, got ${JSON.stringify(B)}`);return B},B.assertFunction=function(e,B){if(void 0!==B&&"function"!=typeof B)throw new Error(`${s(e)} must be a function, or undefined`);return B},B.assertIgnoreList=function(e,B){const t=C(e,B);return t&&t.forEach(((B,t)=>function(e,B){if("string"!=typeof B&&"function"!=typeof B&&!(B instanceof RegExp))throw new Error(`${s(e)} must be an array of string/Function/RegExp values, or undefined`);return B}(i(e,t),B))),t},B.assertInputSourceMap=function(e,B){if(void 0!==B&&"boolean"!=typeof B&&("object"!=typeof B||!B))throw new Error(`${s(e)} must be a boolean, object, or undefined`);return B},B.assertObject=o,B.assertPluginList=function(e,B){const t=C(e,B);return t&&t.forEach(((B,t)=>function(e,B){if(Array.isArray(B)){if(0===B.length)throw new Error(`${s(e)} must include an object`);if(B.length>3)throw new Error(`${s(e)} may only be a two-tuple or three-tuple`);if(c(i(e,0),B[0]),B.length>1){const t=B[1];if(void 0!==t&&!1!==t&&("object"!=typeof t||Array.isArray(t)||null===t))throw new Error(`${s(i(e,1))} must be an object, false, or undefined`)}if(3===B.length){const t=B[2];if(void 0!==t&&"string"!=typeof t)throw new Error(`${s(i(e,2))} must be a string, or undefined`)}}else c(e,B);return B}(i(e,t),B))),t},B.assertRootMode=function(e,B){if(void 0!==B&&"root"!==B&&"upward"!==B&&"upward-optional"!==B)throw new Error(`${s(e)} must be a "root", "upward", "upward-optional" or undefined`);return B},B.assertSourceMaps=function(e,B){if(void 0!==B&&"boolean"!=typeof B&&"inline"!==B&&"both"!==B)throw new Error(`${s(e)} must be a boolean, "inline", "both", or undefined`);return B},B.assertSourceType=function(e,B){if(void 0!==B&&"module"!==B&&"script"!==B&&"unambiguous"!==B)throw new Error(`${s(e)} must be "module", "script", "unambiguous", or undefined`);return B},B.assertString=function(e,B){if(void 0!==B&&"string"!=typeof B)throw new Error(`${s(e)} must be a string, or undefined`);return B},B.assertTargets=function(e,B){if((0,r().isBrowsersQueryValid)(B))return B;if("object"!=typeof B||!B||Array.isArray(B))throw new Error(`${s(e)} must be a string, an array of strings or an object`);const t=i(e,"browsers"),n=i(e,"esmodules");u(t,B.browsers),a(n,B.esmodules);for(const t of Object.keys(B)){const n=B[t],o=i(e,t);if("esmodules"===t)a(o,n);else if("browsers"===t)u(o,n);else{if(!Object.hasOwnProperty.call(r().TargetNames,t)){const e=Object.keys(r().TargetNames).join(", ");throw new Error(`${s(o)} is not a valid target. Supported targets are ${e}`)}p(o,n)}}return B},B.msg=s;var n=t(91139);function s(e){switch(e.type){case"root":return"";case"env":return`${s(e.parent)}.env["${e.name}"]`;case"overrides":return`${s(e.parent)}.overrides[${e.index}]`;case"option":return`${s(e.parent)}.${e.name}`;case"access":return`${s(e.parent)}[${JSON.stringify(e.name)}]`;default:throw new Error(`Assertion failure: Unknown type ${e.type}`)}}function i(e,B){return{type:"access",name:B,parent:e}}function a(e,B){if(void 0!==B&&"boolean"!=typeof B)throw new Error(`${s(e)} must be a boolean, or undefined`);return B}function o(e,B){if(void 0!==B&&("object"!=typeof B||Array.isArray(B)||!B))throw new Error(`${s(e)} must be an object, or undefined`);return B}function C(e,B){if(null!=B&&!Array.isArray(B))throw new Error(`${s(e)} must be an array, or undefined`);return B}function l(e){return"string"==typeof e||"function"==typeof e||e instanceof RegExp}function c(e,B){if(("object"!=typeof B||!B)&&"string"!=typeof B&&"function"!=typeof B)throw new Error(`${s(e)} must be a string, object, function`);return B}function u(e,B){if(void 0!==B&&!(0,r().isBrowsersQueryValid)(B))throw new Error(`${s(e)} must be undefined, a string or an array of strings`)}function p(e,B){if(("number"!=typeof B||Math.round(B)!==B)&&"string"!=typeof B)throw new Error(`${s(e)} must be a string or an integer number`)}},91139:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.assumptionsNames=void 0,B.checkNoUnwrappedItemOptionPairs=function(e,B,t,r){if(0===B)return;const n=e[B-1],s=e[B];n.file&&void 0===n.options&&"object"==typeof s.value&&(r.message+=`\n- Maybe you meant to use\n"${t}s": [\n  ["${n.file.request}", ${JSON.stringify(s.value,void 0,2)}]\n]\nTo be a valid ${t}, its name and options should be wrapped in a pair of brackets`)},B.validate=function(e,B){return c({type:"root",source:e},B)},t(80424);var r=t(99010),n=t(92517);const s={cwd:n.assertString,root:n.assertString,rootMode:n.assertRootMode,configFile:n.assertConfigFileSearch,caller:n.assertCallerMetadata,filename:n.assertString,filenameRelative:n.assertString,code:n.assertBoolean,ast:n.assertBoolean,cloneInputAst:n.assertBoolean,envName:n.assertString},i={babelrc:n.assertBoolean,babelrcRoots:n.assertBabelrcSearch},a={extends:n.assertString,ignore:n.assertIgnoreList,only:n.assertIgnoreList,targets:n.assertTargets,browserslistConfigFile:n.assertConfigFileSearch,browserslistEnv:n.assertString},o={inputSourceMap:n.assertInputSourceMap,presets:n.assertPluginList,plugins:n.assertPluginList,passPerPreset:n.assertBoolean,assumptions:n.assertAssumptions,env:function(e,B){if("env"===e.parent.type)throw new Error(`${(0,n.msg)(e)} is not allowed inside of another .env block`);const t=e.parent,r=(0,n.assertObject)(e,B);if(r)for(const B of Object.keys(r)){const s=(0,n.assertObject)((0,n.access)(e,B),r[B]);s&&c({type:"env",name:B,parent:t},s)}return r},overrides:function(e,B){if("env"===e.parent.type)throw new Error(`${(0,n.msg)(e)} is not allowed inside an .env block`);if("overrides"===e.parent.type)throw new Error(`${(0,n.msg)(e)} is not allowed inside an .overrides block`);const t=e.parent,r=(0,n.assertArray)(e,B);if(r)for(const[B,s]of r.entries()){const r=(0,n.access)(e,B),i=(0,n.assertObject)(r,s);if(!i)throw new Error(`${(0,n.msg)(r)} must be an object`);c({type:"overrides",index:B,parent:t},i)}return r},test:n.assertConfigApplicableTest,include:n.assertConfigApplicableTest,exclude:n.assertConfigApplicableTest,retainLines:n.assertBoolean,comments:n.assertBoolean,shouldPrintComment:n.assertFunction,compact:n.assertCompact,minified:n.assertBoolean,auxiliaryCommentBefore:n.assertString,auxiliaryCommentAfter:n.assertString,sourceType:n.assertSourceType,wrapPluginVisitorMethod:n.assertFunction,highlightCode:n.assertBoolean,sourceMaps:n.assertSourceMaps,sourceMap:n.assertSourceMaps,sourceFileName:n.assertString,sourceRoot:n.assertString,parserOpts:n.assertObject,generatorOpts:n.assertObject};Object.assign(o,{getModuleId:n.assertFunction,moduleRoot:n.assertString,moduleIds:n.assertBoolean,moduleId:n.assertString});const C=new Set(["arrayLikeIsIterable","constantReexports","constantSuper","enumerableModuleMeta","ignoreFunctionLength","ignoreToPrimitiveHint","iterableIsArray","mutableTemplateObject","noClassCalls","noDocumentAll","noIncompleteNsImportDetection","noNewArrows","objectRestNoSymbols","privateFieldsAsProperties","pureGetters","setClassMethods","setComputedProperties","setPublicClassFields","setSpreadProperties","skipForOfIteratorClosing","superIsCallableConstructor"]);function l(e){return"root"===e.type?e.source:l(e.parent)}function c(e,B){const t=l(e);return function(e){if(p(e,"sourceMap")&&p(e,"sourceMaps"))throw new Error(".sourceMap is an alias for .sourceMaps, cannot use both")}(B),Object.keys(B).forEach((r=>{const C={type:"option",name:r,parent:e};if("preset"===t&&a[r])throw new Error(`${(0,n.msg)(C)} is not allowed in preset options`);if("arguments"!==t&&s[r])throw new Error(`${(0,n.msg)(C)} is only allowed in root programmatic options`);if("arguments"!==t&&"configfile"!==t&&i[r]){if("babelrcfile"===t||"extendsfile"===t)throw new Error(`${(0,n.msg)(C)} is not allowed in .babelrc or "extends"ed files, only in root programmatic options, or babel.config.js/config file options`);throw new Error(`${(0,n.msg)(C)} is only allowed in root programmatic options, or babel.config.js/config file options`)}(o[r]||a[r]||i[r]||s[r]||u)(C,B[r])})),B}function u(e){const B=e.name;if(r.default[B]){const{message:t,version:s=5}=r.default[B];throw new Error(`Using removed Babel ${s} option: ${(0,n.msg)(e)} - ${t}`)}{const B=new Error(`Unknown option: ${(0,n.msg)(e)}. Check out https://babeljs.io/docs/en/babel-core/#options for more information about options.`);throw B.code="BABEL_UNKNOWN_OPTION",B}}function p(e,B){return Object.prototype.hasOwnProperty.call(e,B)}B.assumptionsNames=C},54931:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.validatePluginObject=function(e){const B={type:"root",source:"plugin"};return Object.keys(e).forEach((t=>{const r=n[t];if(!r){const e=new Error(`.${t} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}r({type:"option",name:t,parent:B},e[t])})),e};var r=t(92517);const n={name:r.assertString,manipulateOptions:r.assertFunction,pre:r.assertFunction,post:r.assertFunction,inherits:r.assertFunction,visitor:function(e,B){const t=(0,r.assertObject)(e,B);if(t&&(Object.keys(t).forEach((e=>function(e,B){if(B&&"object"==typeof B)Object.keys(B).forEach((B=>{if("enter"!==B&&"exit"!==B)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)}));else if("function"!=typeof B)throw new Error(`.visitor["${e}"] must be a function`);return B}(e,t[e]))),t.enter||t.exit))throw new Error(`${(0,r.msg)(e)} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return t},parserOverride:r.assertFunction,generatorOverride:r.assertFunction}},99010:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0,B.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},87241:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.forwardAsync=function(e,B){const t=r()(e);return a((e=>{const r=t[e];return B(r)}))},B.isAsync=void 0,B.isThenable=l,B.maybeAsync=function(e,B){return r()({sync(...t){const r=e.apply(this,t);if(l(r))throw new Error(B);return r},async(...B){return Promise.resolve(e.apply(this,B))}})},B.waitFor=B.onFirstPause=void 0;const n=e=>e,s=r()((function*(e){return yield*e})),i=r()({sync:()=>!1,errback:e=>e(null,!0)});B.isAsync=i;const a=r()({sync:e=>e("sync"),async:e=>e("async")}),o=r()({name:"onFirstPause",arity:2,sync:function(e){return s.sync(e)},errback:function(e,B,t){let r=!1;s.errback(e,((e,B)=>{r=!0,t(e,B)})),r||B()}});B.onFirstPause=o;const C=r()({sync:n,async:n});function l(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}B.waitFor=C},82344:(e,B,t)=>{"use strict";function r(){const e=t(57147);return r=function(){return e},e}function n(){const e=t(20664);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.stat=B.readFile=void 0;const s=n()({sync:r().readFileSync,errback:r().readFile});B.readFile=s;const i=n()({sync:r().statSync,errback:r().stat});B.stat=i},32420:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.DEFAULT_EXTENSIONS=void 0,Object.defineProperty(B,"File",{enumerable:!0,get:function(){return r.default}}),B.OptionManager=void 0,B.Plugin=function(e){throw new Error(`The (${e}) Babel 5 plugin is being run with an unsupported Babel version.`)},Object.defineProperty(B,"buildExternalHelpers",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(B,"createConfigItem",{enumerable:!0,get:function(){return c.createConfigItem}}),Object.defineProperty(B,"createConfigItemAsync",{enumerable:!0,get:function(){return c.createConfigItemAsync}}),Object.defineProperty(B,"createConfigItemSync",{enumerable:!0,get:function(){return c.createConfigItemSync}}),Object.defineProperty(B,"getEnv",{enumerable:!0,get:function(){return i.getEnv}}),Object.defineProperty(B,"loadOptions",{enumerable:!0,get:function(){return c.loadOptions}}),Object.defineProperty(B,"loadOptionsAsync",{enumerable:!0,get:function(){return c.loadOptionsAsync}}),Object.defineProperty(B,"loadOptionsSync",{enumerable:!0,get:function(){return c.loadOptionsSync}}),Object.defineProperty(B,"loadPartialConfig",{enumerable:!0,get:function(){return c.loadPartialConfig}}),Object.defineProperty(B,"loadPartialConfigAsync",{enumerable:!0,get:function(){return c.loadPartialConfigAsync}}),Object.defineProperty(B,"loadPartialConfigSync",{enumerable:!0,get:function(){return c.loadPartialConfigSync}}),Object.defineProperty(B,"parse",{enumerable:!0,get:function(){return f.parse}}),Object.defineProperty(B,"parseAsync",{enumerable:!0,get:function(){return f.parseAsync}}),Object.defineProperty(B,"parseSync",{enumerable:!0,get:function(){return f.parseSync}}),Object.defineProperty(B,"resolvePlugin",{enumerable:!0,get:function(){return s.resolvePlugin}}),Object.defineProperty(B,"resolvePreset",{enumerable:!0,get:function(){return s.resolvePreset}}),Object.defineProperty(B,"template",{enumerable:!0,get:function(){return l().default}}),Object.defineProperty(B,"tokTypes",{enumerable:!0,get:function(){return o().tokTypes}}),Object.defineProperty(B,"transform",{enumerable:!0,get:function(){return u.transform}}),Object.defineProperty(B,"transformAsync",{enumerable:!0,get:function(){return u.transformAsync}}),Object.defineProperty(B,"transformFile",{enumerable:!0,get:function(){return p.transformFile}}),Object.defineProperty(B,"transformFileAsync",{enumerable:!0,get:function(){return p.transformFileAsync}}),Object.defineProperty(B,"transformFileSync",{enumerable:!0,get:function(){return p.transformFileSync}}),Object.defineProperty(B,"transformFromAst",{enumerable:!0,get:function(){return d.transformFromAst}}),Object.defineProperty(B,"transformFromAstAsync",{enumerable:!0,get:function(){return d.transformFromAstAsync}}),Object.defineProperty(B,"transformFromAstSync",{enumerable:!0,get:function(){return d.transformFromAstSync}}),Object.defineProperty(B,"transformSync",{enumerable:!0,get:function(){return u.transformSync}}),Object.defineProperty(B,"traverse",{enumerable:!0,get:function(){return C().default}}),B.version=B.types=void 0;var r=t(95212),n=t(46984),s=t(72557),i=t(2837);function a(){const e=t(38218);return a=function(){return e},e}function o(){const e=t(73834);return o=function(){return e},e}function C(){const e=t(49838);return C=function(){return e},e}function l(){const e=t(94847);return l=function(){return e},e}Object.defineProperty(B,"types",{enumerable:!0,get:function(){return a()}});var c=t(20695),u=t(84203),p=t(42722),d=t(83724),f=t(24727);B.version="7.16.7";const h=Object.freeze([".js",".jsx",".es6",".es",".mjs",".cjs"]);B.DEFAULT_EXTENSIONS=h,B.OptionManager=class{init(e){return(0,c.loadOptions)(e)}}},24727:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.parseSync=B.parseAsync=B.parse=void 0;var n=t(20695),s=t(73596),i=t(17331);const a=r()((function*(e,B){const t=yield*(0,n.default)(B);return null===t?null:yield*(0,s.default)(t.passes,(0,i.default)(t),e)}));B.parse=function(e,B,t){if("function"==typeof B&&(t=B,B=void 0),void 0===t)return a.sync(e,B);a.errback(e,B,t)};const o=a.sync;B.parseSync=o;const C=a.async;B.parseAsync=C},73596:(e,B,t)=>{"use strict";function r(){const e=t(73834);return r=function(){return e},e}function n(){const e=t(84709);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function*(e,{parserOpts:B,highlightCode:t=!0,filename:i="unknown"},a){try{const t=[];for(const n of e)for(const e of n){const{parserOverride:n}=e;if(n){const e=n(a,B,r().parse);void 0!==e&&t.push(e)}}if(0===t.length)return(0,r().parse)(a,B);if(1===t.length){if(yield*[],"function"==typeof t[0].then)throw new Error("You appear to be using an async parser plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return t[0]}throw new Error("More than one plugin attempted to override parsing.")}catch(e){"BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"===e.code&&(e.message+="\nConsider renaming the file to '.mjs', or setting sourceType:module or sourceType:unambiguous in your Babel config for this file.");const{loc:B,missingPlugin:r}=e;if(B){const o=(0,n().codeFrameColumns)(a,{start:{line:B.line,column:B.column+1}},{highlightCode:t});e.message=r?`${i}: `+(0,s.default)(r[0],B,o):`${i}: ${e.message}\n\n`+o,e.code="BABEL_PARSE_ERROR"}throw e}};var s=t(27499)},27499:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B,n){let s=`Support for the experimental syntax '${e}' isn't currently enabled (${B.line}:${B.column+1}):\n\n`+n;const i=t[e];if(i){const{syntax:e,transform:B}=i;if(e){const t=r(e);if(B){s+=`\n\nAdd ${r(B)} to the '${B.name.startsWith("@babel/plugin")?"plugins":"presets"}' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add ${t} to the 'plugins' section to enable parsing.`}else s+=`\n\nAdd ${t} to the 'plugins' section of your Babel config to enable parsing.`}}return s};const t={asyncDoExpressions:{syntax:{name:"@babel/plugin-syntax-async-do-expressions",url:"https://git.io/JYer8"}},classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},classPrivateMethods:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-private-methods",url:"https://git.io/JvpRG"}},classStaticBlock:{syntax:{name:"@babel/plugin-syntax-class-static-block",url:"https://git.io/JTLB6"},transform:{name:"@babel/plugin-proposal-class-static-block",url:"https://git.io/JTLBP"}},decimal:{syntax:{name:"@babel/plugin-syntax-decimal",url:"https://git.io/JfKOH"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/preset-flow",url:"https://git.io/JfeDn"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/preset-react",url:"https://git.io/JfeDR"}},importAssertions:{syntax:{name:"@babel/plugin-syntax-import-assertions",url:"https://git.io/JUbkv"}},moduleStringNames:{syntax:{name:"@babel/plugin-syntax-module-string-names",url:"https://git.io/JTL8G"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},privateIn:{syntax:{name:"@babel/plugin-syntax-private-property-in-object",url:"https://git.io/JfK3q"},transform:{name:"@babel/plugin-proposal-private-property-in-object",url:"https://git.io/JfK3O"}},recordAndTuple:{syntax:{name:"@babel/plugin-syntax-record-and-tuple",url:"https://git.io/JvKp3"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/preset-typescript",url:"https://git.io/JfeDz"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}};t.privateIn.syntax=t.privateIn.transform;const r=({name:e,url:B})=>`${e} (${B})`},46984:(e,B,t)=>{"use strict";function r(){const e=t(23466);return r=function(){return e},e}function n(){const e=t(39166);return n=function(){return e},e}function s(){const e=t(94847);return s=function(){return e},e}function i(){const e=t(38218);return i=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B="global"){let t;const r={global:I,module:O,umd:F,var:x}[B];if(!r)throw new Error(`Unsupported output type ${B}`);return t=r(e),(0,n().default)(t).code};var a=t(95212);const{arrayExpression:o,assignmentExpression:C,binaryExpression:l,blockStatement:c,callExpression:u,cloneNode:p,conditionalExpression:d,exportNamedDeclaration:f,exportSpecifier:h,expressionStatement:m,functionExpression:y,identifier:A,memberExpression:E,objectExpression:S,program:g,stringLiteral:b,unaryExpression:T,variableDeclaration:P,variableDeclarator:D}=i();function I(e){const B=A("babelHelpers"),t=[],r=y(null,[A("global")],c(t)),n=g([m(u(r,[d(l("===",T("typeof",A("global")),b("undefined")),A("self"),A("global"))]))]);return t.push(P("var",[D(B,C("=",E(A("global"),B),S([])))])),v(t,B,e),n}function O(e){const B=[],t=v(B,null,e);return B.unshift(f(null,Object.keys(t).map((e=>h(p(t[e]),A(e)))))),g(B,[],"module")}function F(e){const B=A("babelHelpers"),t=[];return t.push(P("var",[D(B,A("global"))])),v(t,B,e),g([(r={FACTORY_PARAMETERS:A("global"),BROWSER_ARGUMENTS:C("=",E(A("root"),B),S([])),COMMON_ARGUMENTS:A("exports"),AMD_ARGUMENTS:o([b("exports")]),FACTORY_BODY:t,UMD_ROOT:A("this")},s().default.statement`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(r))]);var r}function x(e){const B=A("babelHelpers"),t=[];t.push(P("var",[D(B,S([]))]));const r=g(t);return v(t,B,e),t.push(m(B)),r}function v(e,B,t){const n=e=>B?E(B,A(e)):A(`_${e}`),s={};return r().list.forEach((function(B){if(t&&t.indexOf(B)<0)return;const i=s[B]=n(B);r().ensure(B,a.default);const{nodes:o}=r().get(B,n,i);e.push(...o)})),s}},83724:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.transformFromAstSync=B.transformFromAstAsync=B.transformFromAst=void 0;var n=t(20695),s=t(31152);const i=r()((function*(e,B,t){const r=yield*(0,n.default)(t);if(null===r)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(r,B,e)}));B.transformFromAst=function(e,B,t,r){if("function"==typeof t&&(r=t,t=void 0),void 0===r)return i.sync(e,B,t);i.errback(e,B,t,r)};const a=i.sync;B.transformFromAstSync=a;const o=i.async;B.transformFromAstAsync=o},42722:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.transformFileSync=B.transformFileAsync=B.transformFile=void 0;var n=t(20695),s=t(31152),i=t(82344);const a=r()((function*(e,B){const t=Object.assign({},B,{filename:e}),r=yield*(0,n.default)(t);if(null===r)return null;const a=yield*i.readFile(e,"utf8");return yield*(0,s.run)(r,a)})),o=a.errback;B.transformFile=o;const C=a.sync;B.transformFileSync=C;const l=a.async;B.transformFileAsync=l},84203:(e,B,t)=>{"use strict";function r(){const e=t(20664);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.transformSync=B.transformAsync=B.transform=void 0;var n=t(20695),s=t(31152);const i=r()((function*(e,B){const t=yield*(0,n.default)(B);return null===t?null:yield*(0,s.run)(t,e)}));B.transform=function(e,B,t){if("function"==typeof B&&(t=B,B=void 0),void 0===t)return i.sync(e,B);i.errback(e,B,t)};const a=i.sync;B.transformSync=a;const o=i.async;B.transformAsync=o},83768:(e,B,t)=>{"use strict";function r(){const e=t(49838);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(){return s||(s=new n.default(Object.assign({},a,{visitor:r().default.explode(a.visitor)}),{})),s};var n=t(80424);let s;function i(e){const B=null==e?void 0:e._blockHoist;return null==B?1:!0===B?2:B}const a={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){const{body:B}=e;let t=Math.pow(2,30)-1,r=!1;for(let e=0;e<B.length;e++){const n=i(B[e]);if(n>t){r=!0;break}t=n}r&&(e.body=function(e){const B=Object.create(null);for(let t=0;t<e.length;t++){const r=e[t],n=i(r);(B[n]||(B[n]=[])).push(r)}const t=Object.keys(B).map((e=>+e)).sort(((e,B)=>B-e));let r=0;for(const n of t){const t=B[n];for(const B of t)e[r++]=B}return e}(B.slice()))}}}}},95212:(e,B,t)=>{"use strict";function r(){const e=t(23466);return r=function(){return e},e}function n(){const e=t(49838);return n=function(){return e},e}function s(){const e=t(84709);return s=function(){return e},e}function i(){const e=t(38218);return i=function(){return e},e}function a(){const e=t(12454);return a=function(){return e},e}function o(){const e=t(36625);return o=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;const{cloneNode:C,interpreterDirective:l}=i(),c={enter(e,B){const t=e.node.loc;t&&(B.loc=t,e.stop())}};class u{constructor(e,{code:B,ast:t,inputMap:r}){this._map=new Map,this.opts=void 0,this.declarations={},this.path=null,this.ast={},this.scope=void 0,this.metadata={},this.code="",this.inputMap=null,this.hub={file:this,getCode:()=>this.code,getScope:()=>this.scope,addHelper:this.addHelper.bind(this),buildError:this.buildCodeFrameError.bind(this)},this.opts=e,this.code=B,this.ast=t,this.inputMap=r,this.path=n().NodePath.get({hub:this.hub,parentPath:null,parent:this.ast,container:this.ast,key:"program"}).setContext(),this.scope=this.path.scope}get shebang(){const{interpreter:e}=this.path.node;return e?e.value:""}set shebang(e){e?this.path.get("interpreter").replaceWith(l(e)):this.path.get("interpreter").remove()}set(e,B){if("helpersNamespace"===e)throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility.If you are using @babel/plugin-external-helpers you will need to use a newer version than the one you currently have installed. If you have your own implementation, you'll want to explore using 'helperGenerator' alongside 'file.availableHelper()'.");this._map.set(e,B)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}getModuleName(){return(0,a().getModuleName)(this.opts,this.opts)}addImport(){throw new Error("This API has been removed. If you're looking for this functionality in Babel 7, you should import the '@babel/helper-module-imports' module and use the functions exposed  from that module, such as 'addNamed' or 'addDefault'.")}availableHelper(e,B){let t;try{t=r().minVersion(e)}catch(e){if("BABEL_HELPER_UNKNOWN"!==e.code)throw e;return!1}return"string"!=typeof B||(o().valid(B)&&(B=`^${B}`),!o().intersects(`<${t}`,B)&&!o().intersects(">=8.0.0",B))}addHelper(e){const B=this.declarations[e];if(B)return C(B);const t=this.get("helperGenerator");if(t){const B=t(e);if(B)return B}r().ensure(e,u);const n=this.declarations[e]=this.scope.generateUidIdentifier(e),s={};for(const B of r().getDependencies(e))s[B]=this.addHelper(B);const{nodes:i,globals:a}=r().get(e,(e=>s[e]),n,Object.keys(this.scope.getAllBindings()));return a.forEach((e=>{this.path.scope.hasBinding(e,!0)&&this.path.scope.rename(e)})),i.forEach((e=>{e._compact=!0})),this.path.unshiftContainer("body",i),this.path.get("body").forEach((e=>{-1!==i.indexOf(e.node)&&e.isVariableDeclaration()&&this.scope.registerDeclaration(e)})),n}addTemplateObject(){throw new Error("This function has been moved into the template literal transform itself.")}buildCodeFrameError(e,B,t=SyntaxError){let r=e&&(e.loc||e._loc);if(!r&&e){const t={loc:null};(0,n().default)(e,c,this.scope,t),r=t.loc;let s="This is an error on an internal node. Probably an internal error.";r&&(s+=" Location has been estimated."),B+=` (${s})`}if(r){const{highlightCode:e=!0}=this.opts;B+="\n"+(0,s().codeFrameColumns)(this.code,{start:{line:r.start.line,column:r.start.column+1},end:r.end&&r.start.line===r.end.line?{line:r.end.line,column:r.end.column+1}:void 0},{highlightCode:e})}return new t(B)}}B.default=u},20494:(e,B,t)=>{"use strict";function r(){const e=t(73514);return r=function(){return e},e}function n(){const e=t(39166);return n=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B){const{opts:t,ast:i,code:a,inputMap:o}=B,C=[];for(const B of e)for(const e of B){const{generatorOverride:B}=e;if(B){const e=B(i,t.generatorOpts,a,n().default);void 0!==e&&C.push(e)}}let l;if(0===C.length)l=(0,n().default)(i,t.generatorOpts,a);else{if(1!==C.length)throw new Error("More than one plugin attempted to override codegen.");if(l=C[0],"function"==typeof l.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:c,map:u}=l;return u&&o&&(u=(0,s.default)(o.toObject(),u)),"inline"!==t.sourceMaps&&"both"!==t.sourceMaps||(c+="\n"+r().fromObject(u).toComment()),"inline"===t.sourceMaps&&(u=null),{outputCode:c,outputMap:u}};var s=t(34302)},34302:(e,B,t)=>{"use strict";function r(){const e=t(49125);return r=function(){return e},e}function n(e){return`${e.line}/${e.columnStart}`}function s(e){const B=new(r().SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),t=new Map,n=new Map;let s=null;return B.computeColumnSpans(),B.eachMapping((e=>{if(null===e.originalLine)return;let r=t.get(e.source);r||(r={path:e.source,content:B.sourceContentFor(e.source,!0)},t.set(e.source,r));let i=n.get(r);i||(i={source:r,mappings:[]},n.set(r,i));const a={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};s&&s.source===r&&s.mapping.line===e.originalLine&&(s.mapping.columnEnd=e.originalColumn),s={source:r,mapping:a},i.mappings.push({original:a,generated:B.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map((e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1})))})}),null,r().SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(n.values())}}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B){const t=s(e),i=s(B),a=new(r().SourceMapGenerator);for(const{source:e}of t.sources)"string"==typeof e.content&&a.setSourceContent(e.path,e.content);if(1===i.sources.length){const e=i.sources[0],B=new Map;!function(e,B){for(const{source:t,mappings:r}of e.sources)for(const{original:e,generated:n}of r)for(const r of n)B(r,e,t)}(t,((t,r,s)=>{!function(e,B,t){const r=function({mappings:e},{line:B,columnStart:t,columnEnd:r}){return function(e,B){const t=function(e,B){let t=0,r=e.length;for(;t<r;){const n=Math.floor((t+r)/2),s=B(e[n]);if(0===s){t=n;break}s>=0?r=n:t=n+1}let n=t;if(n<e.length){for(;n>=0&&B(e[n])>=0;)n--;return n+1}return n}(e,B),r=[];for(let n=t;n<e.length&&0===B(e[n]);n++)r.push(e[n]);return r}(e,(({original:e})=>B>e.line?-1:B<e.line?1:t>=e.columnEnd?-1:r<=e.columnStart?1:0))}(e,B);for(const{generated:e}of r)for(const B of e)t(B)}(e,t,(e=>{const t=n(e);B.has(t)||(B.set(t,e),a.addMapping({source:s.path,original:{line:r.line,column:r.columnStart},generated:{line:e.line,column:e.columnStart},name:r.name}))}))}));for(const e of B.values()){if(e.columnEnd===1/0)continue;const t={line:e.line,columnStart:e.columnEnd},r=n(t);B.has(r)||a.addMapping({generated:{line:t.line,column:t.columnStart}})}}const o=a.toJSON();return"string"==typeof t.sourceRoot&&(o.sourceRoot=t.sourceRoot),o}},31152:(e,B,t)=>{"use strict";function r(){const e=t(49838);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.run=function*(e,B,t){const l=yield*(0,a.default)(e.passes,(0,i.default)(e),B,t),c=l.opts;try{yield*function*(e,B){for(const t of B){const B=[],i=[],a=[];for(const r of t.concat([(0,s.default)()])){const t=new n.default(e,r.key,r.options);B.push([r,t]),i.push(t),a.push(r.visitor)}for(const[t,r]of B){const B=t.pre;if(B){const t=B.call(r,e);if(yield*[],C(t))throw new Error("You appear to be using an plugin with an async .pre, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}const o=r().default.visitors.merge(a,i,e.opts.wrapPluginVisitorMethod);(0,r().default)(e.ast,o,e.scope);for(const[t,r]of B){const B=t.post;if(B){const t=B.call(r,e);if(yield*[],C(t))throw new Error("You appear to be using an plugin with an async .post, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}}}}(l,e.passes)}catch(e){var u;throw e.message=`${null!=(u=c.filename)?u:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_TRANSFORM_ERROR"),e}let p,d;try{!1!==c.code&&({outputCode:p,outputMap:d}=(0,o.default)(e.passes,l))}catch(e){var f;throw e.message=`${null!=(f=c.filename)?f:"unknown"}: ${e.message}`,e.code||(e.code="BABEL_GENERATE_ERROR"),e}return{metadata:l.metadata,options:c,ast:!0===c.ast?l.ast:null,code:void 0===p?null:p,map:void 0===d?null:d,sourceType:l.ast.program.sourceType}};var n=t(65889),s=t(83768),i=t(17331),a=t(90104),o=t(20494);function C(e){return!(!e||"object"!=typeof e&&"function"!=typeof e||!e.then||"function"!=typeof e.then)}},90104:(e,B,t)=>{"use strict";function r(){const e=t(57147);return r=function(){return e},e}function n(){const e=t(71017);return n=function(){return e},e}function s(){const e=t(15158);return s=function(){return e},e}function i(){const e=t(38218);return i=function(){return e},e}function a(){const e=t(73514);return a=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function*(e,B,t,s){if(t=`${t||""}`,s){if("Program"===s.type)s=c(s,[],[]);else if("File"!==s.type)throw new Error("AST root must be a Program or File node");B.cloneInputAst&&(s=(0,l.default)(s))}else s=yield*(0,C.default)(e,B,t);let i=null;if(!1!==B.inputSourceMap){if("object"==typeof B.inputSourceMap&&(i=a().fromObject(B.inputSourceMap)),!i){const e=m(d,s);if(e)try{i=a().fromComment(e)}catch(e){p("discarding unknown inline input sourcemap",e)}}if(!i){const e=m(f,s);if("string"==typeof B.filename&&e)try{const t=f.exec(e),s=r().readFileSync(n().resolve(n().dirname(B.filename),t[1]));s.length>1e6?p("skip merging input map > 1 MB"):i=a().fromJSON(s)}catch(e){p("discarding unknown file input sourcemap",e)}else e&&p("discarding un-loadable file input sourcemap")}}return new o.default(B,{code:t,ast:s,inputMap:i})};var o=t(95212),C=t(73596),l=t(49618);const{file:c,traverseFast:u}=i(),p=s()("babel:transform:file"),d=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,f=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function h(e,B,t){return B&&(B=B.filter((({value:B})=>!e.test(B)||(t=B,!1)))),[B,t]}function m(e,B){let t=null;return u(B,(B=>{[B.leadingComments,t]=h(e,B.leadingComments,t),[B.innerComments,t]=h(e,B.innerComments,t),[B.trailingComments,t]=h(e,B.trailingComments,t)})),t}},17331:(e,B,t)=>{"use strict";function r(){const e=t(71017);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){const{filename:B,cwd:t,filenameRelative:n=("string"==typeof B?r().relative(t,B):"unknown"),sourceType:s="module",inputSourceMap:i,sourceMaps:a=!!i,sourceRoot:o=e.options.moduleRoot,sourceFileName:C=r().basename(n),comments:l=!0,compact:c="auto"}=e.options,u=e.options,p=Object.assign({},u,{parserOpts:Object.assign({sourceType:".mjs"===r().extname(n)?"module":s,sourceFileName:B,plugins:[]},u.parserOpts),generatorOpts:Object.assign({filename:B,auxiliaryCommentBefore:u.auxiliaryCommentBefore,auxiliaryCommentAfter:u.auxiliaryCommentAfter,retainLines:u.retainLines,comments:l,shouldPrintComment:u.shouldPrintComment,compact:c,minified:u.minified,sourceMaps:a,sourceRoot:o,sourceFileName:C},u.generatorOpts)});for(const B of e.passes)for(const e of B)e.manipulateOptions&&e.manipulateOptions(p,p.parserOpts);return p}},65889:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;class t{constructor(e,B,t){this._map=new Map,this.key=void 0,this.file=void 0,this.opts=void 0,this.cwd=void 0,this.filename=void 0,this.key=B,this.file=e,this.opts=t||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,B){this._map.set(e,B)}get(e){return this._map.get(e)}availableHelper(e,B){return this.file.availableHelper(e,B)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}buildCodeFrameError(e,B,t){return this.file.buildCodeFrameError(e,B,t)}}B.default=t,t.prototype.getModuleName=function(){return this.file.getModuleName()}},77765:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){return JSON.parse(JSON.stringify(e,r),n)};const t="$$ babel internal serialized type"+Math.random();function r(e,B){return"bigint"!=typeof B?B:{[t]:"BigInt",value:B.toString()}}function n(e,B){return B&&"object"==typeof B?"BigInt"!==B[t]?B:BigInt(B.value):B}},49618:(e,B,t)=>{"use strict";function r(){const e=t(84655);return r=function(){return e},e}Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){return r().deserialize&&r().serialize?r().deserialize(r().serialize(e)):(0,n.default)(e)};var n=t(77765)},28649:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;const t=/^[ \t]+$/;B.default=class{constructor(e){this._map=null,this._buf="",this._last=0,this._queue=[],this._position={line:1,column:0},this._sourcePosition={identifierName:null,line:null,column:null,filename:null},this._disallowedPop=null,this._map=e}get(){this._flush();const e=this._map,B={code:this._buf.trimRight(),map:null,rawMappings:null==e?void 0:e.getRawMappings()};return e&&Object.defineProperty(B,"map",{configurable:!0,enumerable:!0,get(){return this.map=e.get()},set(e){Object.defineProperty(this,"map",{value:e,writable:!0})}}),B}append(e){this._flush();const{line:B,column:t,filename:r,identifierName:n,force:s}=this._sourcePosition;this._append(e,B,t,n,r,s)}queue(e){if("\n"===e)for(;this._queue.length>0&&t.test(this._queue[0][0]);)this._queue.shift();const{line:B,column:r,filename:n,identifierName:s,force:i}=this._sourcePosition;this._queue.unshift([e,B,r,s,n,i])}_flush(){let e;for(;e=this._queue.pop();)this._append(...e)}_append(e,B,t,r,n,s){this._buf+=e,this._last=e.charCodeAt(e.length-1);let i=e.indexOf("\n"),a=0;for(0!==i&&this._mark(B,t,r,n,s);-1!==i;)this._position.line++,this._position.column=0,a=i+1,a<e.length&&this._mark(++B,0,r,n,s),i=e.indexOf("\n",a);this._position.column+=e.length-a}_mark(e,B,t,r,n){var s;null==(s=this._map)||s.mark(this._position.line,this._position.column,e,B,t,r,n)}removeTrailingNewline(){this._queue.length>0&&"\n"===this._queue[0][0]&&this._queue.shift()}removeLastSemicolon(){this._queue.length>0&&";"===this._queue[0][0]&&this._queue.shift()}getLastChar(){let e;return e=this._queue.length>0?this._queue[0][0].charCodeAt(0):this._last,e}endsWithCharAndNewline(){const e=this._queue;if(e.length>0){if(10!==e[0][0].charCodeAt(0))return;return e.length>1?e[1][0].charCodeAt(0):this._last}}hasContent(){return this._queue.length>0||!!this._last}exactSource(e,B){this.source("start",e,!0),B(),this.source("end",e),this._disallowPop("start",e)}source(e,B,t){e&&!B||this._normalizePosition(e,B,this._sourcePosition,t)}withSource(e,B,t){if(!this._map)return t();const r=this._sourcePosition.line,n=this._sourcePosition.column,s=this._sourcePosition.filename,i=this._sourcePosition.identifierName;this.source(e,B),t(),this._sourcePosition.force&&this._sourcePosition.line===r&&this._sourcePosition.column===n&&this._sourcePosition.filename===s||this._disallowedPop&&this._disallowedPop.line===r&&this._disallowedPop.column===n&&this._disallowedPop.filename===s||(this._sourcePosition.line=r,this._sourcePosition.column=n,this._sourcePosition.filename=s,this._sourcePosition.identifierName=i,this._sourcePosition.force=!1,this._disallowedPop=null)}_disallowPop(e,B){e&&!B||(this._disallowedPop=this._normalizePosition(e,B))}_normalizePosition(e,B,t,r){const n=B?B[e]:null;void 0===t&&(t={identifierName:null,line:null,column:null,filename:null,force:!1});const s=t.line,i=t.column,a=t.filename;return t.identifierName="start"===e&&(null==B?void 0:B.identifierName)||null,t.line=null==n?void 0:n.line,t.column=null==n?void 0:n.column,t.filename=null==B?void 0:B.filename,(r||t.line!==s||t.column!==i||t.filename!==a)&&(t.force=r),t}getCurrentColumn(){const e=this._queue.reduce(((e,B)=>B[0]+e),""),B=e.lastIndexOf("\n");return-1===B?this._position.column+e.length:e.length-1-B}getCurrentLine(){const e=this._queue.reduce(((e,B)=>B[0]+e),"");let B=0;for(let t=0;t<e.length;t++)"\n"===e[t]&&B++;return this._position.line+B}}},28516:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.BlockStatement=function(e){var B;this.token("{"),this.printInnerComments(e);const t=null==(B=e.directives)?void 0:B.length;e.body.length||t?(this.newline(),this.printSequence(e.directives,e,{indent:!0}),t&&this.newline(),this.printSequence(e.body,e,{indent:!0}),this.removeTrailingNewline(),this.source("end",e.loc),this.endsWith(10)||this.newline(),this.rightBrace()):(this.source("end",e.loc),this.token("}"))},B.Directive=function(e){this.print(e.value,e),this.semicolon()},B.DirectiveLiteral=function(e){const B=this.getPossibleRaw(e);if(!this.format.minified&&null!=B)return void this.token(B);const{value:n}=e;if(r.test(n)){if(t.test(n))throw new Error("Malformed AST: it is not possible to print a directive containing both unescaped single and double quotes.");this.token(`'${n}'`)}else this.token(`"${n}"`)},B.File=function(e){e.program&&this.print(e.program.interpreter,e),this.print(e.program,e)},B.InterpreterDirective=function(e){this.token(`#!${e.value}\n`)},B.Placeholder=function(e){this.token("%%"),this.print(e.name),this.token("%%"),"Statement"===e.expectedNode&&this.semicolon()},B.Program=function(e){this.printInnerComments(e,!1),this.printSequence(e.directives,e),e.directives&&e.directives.length&&this.newline(),this.printSequence(e.body,e)};const t=/(?:^|[^\\])(?:\\\\)*'/,r=/(?:^|[^\\])(?:\\\\)*"/},505:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.ClassBody=function(e){this.token("{"),this.printInnerComments(e),0===e.body.length?this.token("}"):(this.newline(),this.indent(),this.printSequence(e.body,e),this.dedent(),this.endsWith(10)||this.newline(),this.rightBrace())},B.ClassExpression=B.ClassDeclaration=function(e,B){this.format.decoratorsBeforeExport&&(n(B)||s(B))||this.printJoin(e.decorators,e),e.declare&&(this.word("declare"),this.space()),e.abstract&&(this.word("abstract"),this.space()),this.word("class"),this.printInnerComments(e),e.id&&(this.space(),this.print(e.id,e)),this.print(e.typeParameters,e),e.superClass&&(this.space(),this.word("extends"),this.space(),this.print(e.superClass,e),this.print(e.superTypeParameters,e)),e.implements&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e)),this.space(),this.print(e.body,e)},B.ClassMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},B.ClassPrivateMethod=function(e){this._classMethodHead(e),this.space(),this.print(e.body,e)},B.ClassPrivateProperty=function(e){this.printJoin(e.decorators,e),e.static&&(this.word("static"),this.space()),this.print(e.key,e),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e)),this.semicolon()},B.ClassProperty=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!0),e.computed?(this.token("["),this.print(e.key,e),this.token("]")):(this._variance(e),this.print(e.key,e)),e.optional&&this.token("?"),e.definite&&this.token("!"),this.print(e.typeAnnotation,e),e.value&&(this.space(),this.token("="),this.space(),this.print(e.value,e)),this.semicolon()},B.StaticBlock=function(e){this.word("static"),this.space(),this.token("{"),0===e.body.length?this.token("}"):(this.newline(),this.printSequence(e.body,e,{indent:!0}),this.rightBrace())},B._classMethodHead=function(e){this.printJoin(e.decorators,e),this.source("end",e.key.loc),this.tsPrintClassMemberModifiers(e,!1),this._methodHead(e)};var r=t(38218);const{isExportDefaultDeclaration:n,isExportNamedDeclaration:s}=r},36361:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.LogicalExpression=B.BinaryExpression=B.AssignmentExpression=function(e,B){const t=this.inForStatementInitCounter&&"in"===e.operator&&!n.needsParens(e,B);t&&this.token("("),this.print(e.left,e),this.space(),"in"===e.operator||"instanceof"===e.operator?this.word(e.operator):this.token(e.operator),this.space(),this.print(e.right,e),t&&this.token(")")},B.AssignmentPattern=function(e){this.print(e.left,e),e.left.optional&&this.token("?"),this.print(e.left.typeAnnotation,e),this.space(),this.token("="),this.space(),this.print(e.right,e)},B.AwaitExpression=void 0,B.BindExpression=function(e){this.print(e.object,e),this.token("::"),this.print(e.callee,e)},B.CallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),this.token("("),this.printList(e.arguments,e),this.token(")")},B.ConditionalExpression=function(e){this.print(e.test,e),this.space(),this.token("?"),this.space(),this.print(e.consequent,e),this.space(),this.token(":"),this.space(),this.print(e.alternate,e)},B.Decorator=function(e){this.token("@"),this.print(e.expression,e),this.newline()},B.DoExpression=function(e){e.async&&(this.word("async"),this.space()),this.word("do"),this.space(),this.print(e.body,e)},B.EmptyStatement=function(){this.semicolon(!0)},B.ExpressionStatement=function(e){this.print(e.expression,e),this.semicolon()},B.Import=function(){this.word("import")},B.MemberExpression=function(e){if(this.print(e.object,e),!e.computed&&a(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let B=e.computed;i(e.property)&&"number"==typeof e.property.value&&(B=!0),B?(this.token("["),this.print(e.property,e),this.token("]")):(this.token("."),this.print(e.property,e))},B.MetaProperty=function(e){this.print(e.meta,e),this.token("."),this.print(e.property,e)},B.ModuleExpression=function(e){this.word("module"),this.space(),this.token("{"),0===e.body.body.length?this.token("}"):(this.newline(),this.printSequence(e.body.body,e,{indent:!0}),this.rightBrace())},B.NewExpression=function(e,B){this.word("new"),this.space(),this.print(e.callee,e),(!this.format.minified||0!==e.arguments.length||e.optional||s(B,{callee:e})||a(B)||o(B))&&(this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?."),this.token("("),this.printList(e.arguments,e),this.token(")"))},B.OptionalCallExpression=function(e){this.print(e.callee,e),this.print(e.typeArguments,e),this.print(e.typeParameters,e),e.optional&&this.token("?."),this.token("("),this.printList(e.arguments,e),this.token(")")},B.OptionalMemberExpression=function(e){if(this.print(e.object,e),!e.computed&&a(e.property))throw new TypeError("Got a MemberExpression for MemberExpression property");let B=e.computed;i(e.property)&&"number"==typeof e.property.value&&(B=!0),e.optional&&this.token("?."),B?(this.token("["),this.print(e.property,e),this.token("]")):(e.optional||this.token("."),this.print(e.property,e))},B.ParenthesizedExpression=function(e){this.token("("),this.print(e.expression,e),this.token(")")},B.PrivateName=function(e){this.token("#"),this.print(e.id,e)},B.SequenceExpression=function(e){this.printList(e.expressions,e)},B.Super=function(){this.word("super")},B.ThisExpression=function(){this.word("this")},B.UnaryExpression=function(e){"void"===e.operator||"delete"===e.operator||"typeof"===e.operator||"throw"===e.operator?(this.word(e.operator),this.space()):this.token(e.operator),this.print(e.argument,e)},B.UpdateExpression=function(e){e.prefix?(this.token(e.operator),this.print(e.argument,e)):(this.startTerminatorless(!0),this.print(e.argument,e),this.endTerminatorless(),this.token(e.operator))},B.V8IntrinsicIdentifier=function(e){this.token("%"),this.word(e.name)},B.YieldExpression=void 0;var r=t(38218),n=t(32866);const{isCallExpression:s,isLiteral:i,isMemberExpression:a,isNewExpression:o}=r;function C(e){return function(B){if(this.word(e),B.delegate&&this.token("*"),B.argument){this.space();const e=this.startTerminatorless();this.print(B.argument,B),this.endTerminatorless(e)}}}const l=C("yield");B.YieldExpression=l;const c=C("await");B.AwaitExpression=c},48076:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.AnyTypeAnnotation=function(){this.word("any")},B.ArrayTypeAnnotation=function(e){this.print(e.elementType,e),this.token("["),this.token("]")},B.BooleanLiteralTypeAnnotation=function(e){this.word(e.value?"true":"false")},B.BooleanTypeAnnotation=function(){this.word("boolean")},B.DeclareClass=function(e,B){i(B)||(this.word("declare"),this.space()),this.word("class"),this.space(),this._interfaceish(e)},B.DeclareExportAllDeclaration=function(){this.word("declare"),this.space(),n.ExportAllDeclaration.apply(this,arguments)},B.DeclareExportDeclaration=function(e){this.word("declare"),this.space(),this.word("export"),this.space(),e.default&&(this.word("default"),this.space()),c.apply(this,arguments)},B.DeclareFunction=function(e,B){i(B)||(this.word("declare"),this.space()),this.word("function"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation.typeAnnotation,e),e.predicate&&(this.space(),this.print(e.predicate,e)),this.semicolon()},B.DeclareInterface=function(e){this.word("declare"),this.space(),this.InterfaceDeclaration(e)},B.DeclareModule=function(e){this.word("declare"),this.space(),this.word("module"),this.space(),this.print(e.id,e),this.space(),this.print(e.body,e)},B.DeclareModuleExports=function(e){this.word("declare"),this.space(),this.word("module"),this.token("."),this.word("exports"),this.print(e.typeAnnotation,e)},B.DeclareOpaqueType=function(e,B){i(B)||(this.word("declare"),this.space()),this.OpaqueType(e)},B.DeclareTypeAlias=function(e){this.word("declare"),this.space(),this.TypeAlias(e)},B.DeclareVariable=function(e,B){i(B)||(this.word("declare"),this.space()),this.word("var"),this.space(),this.print(e.id,e),this.print(e.id.typeAnnotation,e),this.semicolon()},B.DeclaredPredicate=function(e){this.token("%"),this.word("checks"),this.token("("),this.print(e.value,e),this.token(")")},B.EmptyTypeAnnotation=function(){this.word("empty")},B.EnumBooleanBody=function(e){const{explicitType:B}=e;o(this,"boolean",B),C(this,e)},B.EnumBooleanMember=function(e){l(this,e)},B.EnumDeclaration=function(e){const{id:B,body:t}=e;this.word("enum"),this.space(),this.print(B,e),this.print(t,e)},B.EnumDefaultedMember=function(e){const{id:B}=e;this.print(B,e),this.token(",")},B.EnumNumberBody=function(e){const{explicitType:B}=e;o(this,"number",B),C(this,e)},B.EnumNumberMember=function(e){l(this,e)},B.EnumStringBody=function(e){const{explicitType:B}=e;o(this,"string",B),C(this,e)},B.EnumStringMember=function(e){l(this,e)},B.EnumSymbolBody=function(e){o(this,"symbol",!0),C(this,e)},B.ExistsTypeAnnotation=function(){this.token("*")},B.FunctionTypeAnnotation=function(e,B){this.print(e.typeParameters,e),this.token("("),e.this&&(this.word("this"),this.token(":"),this.space(),this.print(e.this.typeAnnotation,e),(e.params.length||e.rest)&&(this.token(","),this.space())),this.printList(e.params,e),e.rest&&(e.params.length&&(this.token(","),this.space()),this.token("..."),this.print(e.rest,e)),this.token(")"),B&&("ObjectTypeCallProperty"===B.type||"DeclareFunction"===B.type||"ObjectTypeProperty"===B.type&&B.method)?this.token(":"):(this.space(),this.token("=>")),this.space(),this.print(e.returnType,e)},B.FunctionTypeParam=function(e){this.print(e.name,e),e.optional&&this.token("?"),e.name&&(this.token(":"),this.space()),this.print(e.typeAnnotation,e)},B.IndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},B.InferredPredicate=function(){this.token("%"),this.word("checks")},B.InterfaceDeclaration=function(e){this.word("interface"),this.space(),this._interfaceish(e)},B.GenericTypeAnnotation=B.ClassImplements=B.InterfaceExtends=function(e){this.print(e.id,e),this.print(e.typeParameters,e)},B.InterfaceTypeAnnotation=function(e){this.word("interface"),e.extends&&e.extends.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e)),this.space(),this.print(e.body,e)},B.IntersectionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:u})},B.MixedTypeAnnotation=function(){this.word("mixed")},B.NullLiteralTypeAnnotation=function(){this.word("null")},B.NullableTypeAnnotation=function(e){this.token("?"),this.print(e.typeAnnotation,e)},Object.defineProperty(B,"NumberLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.NumericLiteral}}),B.NumberTypeAnnotation=function(){this.word("number")},B.ObjectTypeAnnotation=function(e){e.exact?this.token("{|"):this.token("{");const B=[...e.properties,...e.callProperties||[],...e.indexers||[],...e.internalSlots||[]];B.length&&(this.space(),this.printJoin(B,e,{addNewlines(e){if(e&&!B[0])return 1},indent:!0,statement:!0,iterator:()=>{(1!==B.length||e.inexact)&&(this.token(","),this.space())}}),this.space()),e.inexact&&(this.indent(),this.token("..."),B.length&&this.newline(),this.dedent()),e.exact?this.token("|}"):this.token("}")},B.ObjectTypeCallProperty=function(e){e.static&&(this.word("static"),this.space()),this.print(e.value,e)},B.ObjectTypeIndexer=function(e){e.static&&(this.word("static"),this.space()),this._variance(e),this.token("["),e.id&&(this.print(e.id,e),this.token(":"),this.space()),this.print(e.key,e),this.token("]"),this.token(":"),this.space(),this.print(e.value,e)},B.ObjectTypeInternalSlot=function(e){e.static&&(this.word("static"),this.space()),this.token("["),this.token("["),this.print(e.id,e),this.token("]"),this.token("]"),e.optional&&this.token("?"),e.method||(this.token(":"),this.space()),this.print(e.value,e)},B.ObjectTypeProperty=function(e){e.proto&&(this.word("proto"),this.space()),e.static&&(this.word("static"),this.space()),"get"!==e.kind&&"set"!==e.kind||(this.word(e.kind),this.space()),this._variance(e),this.print(e.key,e),e.optional&&this.token("?"),e.method||(this.token(":"),this.space()),this.print(e.value,e)},B.ObjectTypeSpreadProperty=function(e){this.token("..."),this.print(e.argument,e)},B.OpaqueType=function(e){this.word("opaque"),this.space(),this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),e.supertype&&(this.token(":"),this.space(),this.print(e.supertype,e)),e.impltype&&(this.space(),this.token("="),this.space(),this.print(e.impltype,e)),this.semicolon()},B.OptionalIndexedAccessType=function(e){this.print(e.objectType,e),e.optional&&this.token("?."),this.token("["),this.print(e.indexType,e),this.token("]")},B.QualifiedTypeIdentifier=function(e){this.print(e.qualification,e),this.token("."),this.print(e.id,e)},Object.defineProperty(B,"StringLiteralTypeAnnotation",{enumerable:!0,get:function(){return s.StringLiteral}}),B.StringTypeAnnotation=function(){this.word("string")},B.SymbolTypeAnnotation=function(){this.word("symbol")},B.ThisTypeAnnotation=function(){this.word("this")},B.TupleTypeAnnotation=function(e){this.token("["),this.printList(e.types,e),this.token("]")},B.TypeAlias=function(e){this.word("type"),this.space(),this.print(e.id,e),this.print(e.typeParameters,e),this.space(),this.token("="),this.space(),this.print(e.right,e),this.semicolon()},B.TypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?"),this.print(e.typeAnnotation,e)},B.TypeCastExpression=function(e){this.token("("),this.print(e.expression,e),this.print(e.typeAnnotation,e),this.token(")")},B.TypeParameter=function(e){this._variance(e),this.word(e.name),e.bound&&this.print(e.bound,e),e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},B.TypeParameterDeclaration=B.TypeParameterInstantiation=function(e){this.token("<"),this.printList(e.params,e,{}),this.token(">")},B.TypeofTypeAnnotation=function(e){this.word("typeof"),this.space(),this.print(e.argument,e)},B.UnionTypeAnnotation=function(e){this.printJoin(e.types,e,{separator:p})},B.Variance=function(e){"plus"===e.kind?this.token("+"):this.token("-")},B.VoidTypeAnnotation=function(){this.word("void")},B._interfaceish=function(e){var B;this.print(e.id,e),this.print(e.typeParameters,e),null!=(B=e.extends)&&B.length&&(this.space(),this.word("extends"),this.space(),this.printList(e.extends,e)),e.mixins&&e.mixins.length&&(this.space(),this.word("mixins"),this.space(),this.printList(e.mixins,e)),e.implements&&e.implements.length&&(this.space(),this.word("implements"),this.space(),this.printList(e.implements,e)),this.space(),this.print(e.body,e)},B._variance=function(e){e.variance&&("plus"===e.variance.kind?this.token("+"):"minus"===e.variance.kind&&this.token("-"))};var r=t(38218),n=t(97064),s=t(55718);const{isDeclareExportDeclaration:i,isStatement:a}=r;function o(e,B,t){t&&(e.space(),e.word("of"),e.space(),e.word(B)),e.space()}function C(e,B){const{members:t}=B;e.token("{"),e.indent(),e.newline();for(const r of t)e.print(r,B),e.newline();B.hasUnknownMembers&&(e.token("..."),e.newline()),e.dedent(),e.token("}")}function l(e,B){const{id:t,init:r}=B;e.print(t,B),e.space(),e.token("="),e.space(),e.print(r,B),e.token(",")}function c(e){if(e.declaration){const B=e.declaration;this.print(B,e),a(B)||this.semicolon()}else this.token("{"),e.specifiers.length&&(this.space(),this.printList(e.specifiers,e),this.space()),this.token("}"),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e)),this.semicolon()}function u(){this.space(),this.token("&"),this.space()}function p(){this.space(),this.token("|"),this.space()}},38217:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});var r=t(82347);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===r[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return r[e]}}))}));var n=t(36361);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===n[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return n[e]}}))}));var s=t(16787);Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===s[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return s[e]}}))}));var i=t(505);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===i[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return i[e]}}))}));var a=t(50624);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===a[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return a[e]}}))}));var o=t(97064);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===o[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return o[e]}}))}));var C=t(55718);Object.keys(C).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===C[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return C[e]}}))}));var l=t(48076);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===l[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return l[e]}}))}));var c=t(28516);Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===c[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return c[e]}}))}));var u=t(49598);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===u[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return u[e]}}))}));var p=t(82043);Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in B&&B[e]===p[e]||Object.defineProperty(B,e,{enumerable:!0,get:function(){return p[e]}}))}))},49598:(e,B)=>{"use strict";function t(){this.space()}Object.defineProperty(B,"__esModule",{value:!0}),B.JSXAttribute=function(e){this.print(e.name,e),e.value&&(this.token("="),this.print(e.value,e))},B.JSXClosingElement=function(e){this.token("</"),this.print(e.name,e),this.token(">")},B.JSXClosingFragment=function(){this.token("</"),this.token(">")},B.JSXElement=function(e){const B=e.openingElement;if(this.print(B,e),!B.selfClosing){this.indent();for(const B of e.children)this.print(B,e);this.dedent(),this.print(e.closingElement,e)}},B.JSXEmptyExpression=function(e){this.printInnerComments(e)},B.JSXExpressionContainer=function(e){this.token("{"),this.print(e.expression,e),this.token("}")},B.JSXFragment=function(e){this.print(e.openingFragment,e),this.indent();for(const B of e.children)this.print(B,e);this.dedent(),this.print(e.closingFragment,e)},B.JSXIdentifier=function(e){this.word(e.name)},B.JSXMemberExpression=function(e){this.print(e.object,e),this.token("."),this.print(e.property,e)},B.JSXNamespacedName=function(e){this.print(e.namespace,e),this.token(":"),this.print(e.name,e)},B.JSXOpeningElement=function(e){this.token("<"),this.print(e.name,e),this.print(e.typeParameters,e),e.attributes.length>0&&(this.space(),this.printJoin(e.attributes,e,{separator:t})),e.selfClosing?(this.space(),this.token("/>")):this.token(">")},B.JSXOpeningFragment=function(){this.token("<"),this.token(">")},B.JSXSpreadAttribute=function(e){this.token("{"),this.token("..."),this.print(e.argument,e),this.token("}")},B.JSXSpreadChild=function(e){this.token("{"),this.token("..."),this.print(e.expression,e),this.token("}")},B.JSXText=function(e){const B=this.getPossibleRaw(e);null!=B?this.token(B):this.token(e.value)}},50624:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.ArrowFunctionExpression=function(e){e.async&&(this.word("async"),this.space());const B=e.params[0];this.format.retainLines||this.format.auxiliaryCommentBefore||this.format.auxiliaryCommentAfter||1!==e.params.length||!n(B)||function(e,B){var t,r;return!!(e.typeParameters||e.returnType||e.predicate||B.typeAnnotation||B.optional||null!=(t=B.leadingComments)&&t.length||null!=(r=B.trailingComments)&&r.length)}(e,B)?this._params(e):this.print(B,e),this._predicate(e),this.space(),this.token("=>"),this.space(),this.print(e.body,e)},B.FunctionDeclaration=B.FunctionExpression=function(e){this._functionHead(e),this.space(),this.print(e.body,e)},B._functionHead=function(e){e.async&&(this.word("async"),this.space()),this.word("function"),e.generator&&this.token("*"),this.printInnerComments(e),this.space(),e.id&&this.print(e.id,e),this._params(e),this._predicate(e)},B._methodHead=function(e){const B=e.kind,t=e.key;"get"!==B&&"set"!==B||(this.word(B),this.space()),e.async&&(this._catchUp("start",t.loc),this.word("async"),this.space()),"method"!==B&&"init"!==B||e.generator&&this.token("*"),e.computed?(this.token("["),this.print(t,e),this.token("]")):this.print(t,e),e.optional&&this.token("?"),this._params(e)},B._param=function(e,B){this.printJoin(e.decorators,e),this.print(e,B),e.optional&&this.token("?"),this.print(e.typeAnnotation,e)},B._parameters=function(e,B){for(let t=0;t<e.length;t++)this._param(e[t],B),t<e.length-1&&(this.token(","),this.space())},B._params=function(e){this.print(e.typeParameters,e),this.token("("),this._parameters(e.params,e),this.token(")"),this.print(e.returnType,e)},B._predicate=function(e){e.predicate&&(e.returnType||this.token(":"),this.space(),this.print(e.predicate,e))};var r=t(38218);const{isIdentifier:n}=r},97064:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.ExportAllDeclaration=function(e){this.word("export"),this.space(),"type"===e.exportKind&&(this.word("type"),this.space()),this.token("*"),this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e),this.semicolon()},B.ExportDefaultDeclaration=function(e){this.format.decoratorsBeforeExport&&n(e.declaration)&&this.printJoin(e.declaration.decorators,e),this.word("export"),this.space(),this.word("default"),this.space(),l.apply(this,arguments)},B.ExportDefaultSpecifier=function(e){this.print(e.exported,e)},B.ExportNamedDeclaration=function(e){this.format.decoratorsBeforeExport&&n(e.declaration)&&this.printJoin(e.declaration.decorators,e),this.word("export"),this.space(),l.apply(this,arguments)},B.ExportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.exported,e)},B.ExportSpecifier=function(e){"type"===e.exportKind&&(this.word("type"),this.space()),this.print(e.local,e),e.exported&&e.local.name!==e.exported.name&&(this.space(),this.word("as"),this.space(),this.print(e.exported,e))},B.ImportAttribute=function(e){this.print(e.key),this.token(":"),this.space(),this.print(e.value)},B.ImportDeclaration=function(e){this.word("import"),this.space(),("type"===e.importKind||"typeof"===e.importKind)&&(this.word(e.importKind),this.space());const B=e.specifiers.slice(0);if(null!=B&&B.length){for(;;){const t=B[0];if(!a(t)&&!o(t))break;this.print(B.shift(),e),B.length&&(this.token(","),this.space())}B.length&&(this.token("{"),this.space(),this.printList(B,e),this.space(),this.token("}")),this.space(),this.word("from"),this.space()}var t;this.print(e.source,e),this.printAssertions(e),null!=(t=e.attributes)&&t.length&&(this.space(),this.word("with"),this.space(),this.printList(e.attributes,e)),this.semicolon()},B.ImportDefaultSpecifier=function(e){this.print(e.local,e)},B.ImportNamespaceSpecifier=function(e){this.token("*"),this.space(),this.word("as"),this.space(),this.print(e.local,e)},B.ImportSpecifier=function(e){"type"!==e.importKind&&"typeof"!==e.importKind||(this.word(e.importKind),this.space()),this.print(e.imported,e),e.local&&e.local.name!==e.imported.name&&(this.space(),this.word("as"),this.space(),this.print(e.local,e))};var r=t(38218);const{isClassDeclaration:n,isExportDefaultSpecifier:s,isExportNamespaceSpecifier:i,isImportDefaultSpecifier:a,isImportNamespaceSpecifier:o,isStatement:C}=r;function l(e){if(e.declaration){const B=e.declaration;this.print(B,e),C(B)||this.semicolon()}else{"type"===e.exportKind&&(this.word("type"),this.space());const B=e.specifiers.slice(0);let t=!1;for(;;){const r=B[0];if(!s(r)&&!i(r))break;t=!0,this.print(B.shift(),e),B.length&&(this.token(","),this.space())}(B.length||!B.length&&!t)&&(this.token("{"),B.length&&(this.space(),this.printList(B,e),this.space()),this.token("}")),e.source&&(this.space(),this.word("from"),this.space(),this.print(e.source,e),this.printAssertions(e)),this.semicolon()}}},16787:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.BreakStatement=void 0,B.CatchClause=function(e){this.word("catch"),this.space(),e.param&&(this.token("("),this.print(e.param,e),this.print(e.param.typeAnnotation,e),this.token(")"),this.space()),this.print(e.body,e)},B.ContinueStatement=void 0,B.DebuggerStatement=function(){this.word("debugger"),this.semicolon()},B.DoWhileStatement=function(e){this.word("do"),this.space(),this.print(e.body,e),this.space(),this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.semicolon()},B.ForOfStatement=B.ForInStatement=void 0,B.ForStatement=function(e){this.word("for"),this.space(),this.token("("),this.inForStatementInitCounter++,this.print(e.init,e),this.inForStatementInitCounter--,this.token(";"),e.test&&(this.space(),this.print(e.test,e)),this.token(";"),e.update&&(this.space(),this.print(e.update,e)),this.token(")"),this.printBlock(e)},B.IfStatement=function(e){this.word("if"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.space();const B=e.alternate&&i(o(e.consequent));B&&(this.token("{"),this.newline(),this.indent()),this.printAndIndentOnComments(e.consequent,e),B&&(this.dedent(),this.newline(),this.token("}")),e.alternate&&(this.endsWith(125)&&this.space(),this.word("else"),this.space(),this.printAndIndentOnComments(e.alternate,e))},B.LabeledStatement=function(e){this.print(e.label,e),this.token(":"),this.space(),this.print(e.body,e)},B.ReturnStatement=void 0,B.SwitchCase=function(e){e.test?(this.word("case"),this.space(),this.print(e.test,e),this.token(":")):(this.word("default"),this.token(":")),e.consequent.length&&(this.newline(),this.printSequence(e.consequent,e,{indent:!0}))},B.SwitchStatement=function(e){this.word("switch"),this.space(),this.token("("),this.print(e.discriminant,e),this.token(")"),this.space(),this.token("{"),this.printSequence(e.cases,e,{indent:!0,addNewlines(B,t){if(!B&&e.cases[e.cases.length-1]===t)return-1}}),this.token("}")},B.ThrowStatement=void 0,B.TryStatement=function(e){this.word("try"),this.space(),this.print(e.block,e),this.space(),e.handlers?this.print(e.handlers[0],e):this.print(e.handler,e),e.finalizer&&(this.space(),this.word("finally"),this.space(),this.print(e.finalizer,e))},B.VariableDeclaration=function(e,B){e.declare&&(this.word("declare"),this.space()),this.word(e.kind),this.space();let t,r=!1;if(!n(B))for(const B of e.declarations)B.init&&(r=!0);if(r&&(t="const"===e.kind?y:m),this.printList(e.declarations,e,{separator:t}),n(B))if(s(B)){if(B.init===e)return}else if(B.left===e)return;this.semicolon()},B.VariableDeclarator=function(e){this.print(e.id,e),e.definite&&this.token("!"),this.print(e.id.typeAnnotation,e),e.init&&(this.space(),this.token("="),this.space(),this.print(e.init,e))},B.WhileStatement=function(e){this.word("while"),this.space(),this.token("("),this.print(e.test,e),this.token(")"),this.printBlock(e)},B.WithStatement=function(e){this.word("with"),this.space(),this.token("("),this.print(e.object,e),this.token(")"),this.printBlock(e)};var r=t(38218);const{isFor:n,isForStatement:s,isIfStatement:i,isStatement:a}=r;function o(e){return a(e.body)?o(e.body):e}const C=function(e){return function(B){this.word("for"),this.space(),"of"===e&&B.await&&(this.word("await"),this.space()),this.token("("),this.print(B.left,B),this.space(),this.word(e),this.space(),this.print(B.right,B),this.token(")"),this.printBlock(B)}},l=C("in");B.ForInStatement=l;const c=C("of");function u(e,B="label"){return function(t){this.word(e);const r=t[B];if(r){this.space();const e="label"==B,n=this.startTerminatorless(e);this.print(r,t),this.endTerminatorless(n)}this.semicolon()}}B.ForOfStatement=c;const p=u("continue");B.ContinueStatement=p;const d=u("return","argument");B.ReturnStatement=d;const f=u("break");B.BreakStatement=f;const h=u("throw","argument");function m(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<4;e++)this.space(!0)}function y(){if(this.token(","),this.newline(),this.endsWith(10))for(let e=0;e<6;e++)this.space(!0)}B.ThrowStatement=h},82347:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.TaggedTemplateExpression=function(e){this.print(e.tag,e),this.print(e.typeParameters,e),this.print(e.quasi,e)},B.TemplateElement=function(e,B){const t=B.quasis[0]===e,r=B.quasis[B.quasis.length-1]===e,n=(t?"`":"}")+e.value.raw+(r?"`":"${");this.token(n)},B.TemplateLiteral=function(e){const B=e.quasis;for(let t=0;t<B.length;t++)this.print(B[t],e),t+1<B.length&&this.print(e.expressions[t],e)}},55718:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.ArgumentPlaceholder=function(){this.token("?")},B.ArrayPattern=B.ArrayExpression=function(e){const B=e.elements,t=B.length;this.token("["),this.printInnerComments(e);for(let r=0;r<B.length;r++){const n=B[r];n?(r>0&&this.space(),this.print(n,e),r<t-1&&this.token(",")):this.token(",")}this.token("]")},B.BigIntLiteral=function(e){const B=this.getPossibleRaw(e);this.format.minified||null==B?this.word(e.value+"n"):this.word(B)},B.BooleanLiteral=function(e){this.word(e.value?"true":"false")},B.DecimalLiteral=function(e){const B=this.getPossibleRaw(e);this.format.minified||null==B?this.word(e.value+"m"):this.word(B)},B.Identifier=function(e){this.exactSource(e.loc,(()=>{this.word(e.name)}))},B.NullLiteral=function(){this.word("null")},B.NumericLiteral=function(e){const B=this.getPossibleRaw(e),t=this.format.jsescOption,r=e.value+"";t.numbers?this.number(n(e.value,t)):null==B?this.number(r):this.format.minified?this.number(B.length<r.length?B:r):this.number(B)},B.ObjectPattern=B.ObjectExpression=function(e){const B=e.properties;this.token("{"),this.printInnerComments(e),B.length&&(this.space(),this.printList(B,e,{indent:!0,statement:!0}),this.space()),this.token("}")},B.ObjectMethod=function(e){this.printJoin(e.decorators,e),this._methodHead(e),this.space(),this.print(e.body,e)},B.ObjectProperty=function(e){if(this.printJoin(e.decorators,e),e.computed)this.token("["),this.print(e.key,e),this.token("]");else{if(s(e.value)&&i(e.key)&&e.key.name===e.value.left.name)return void this.print(e.value,e);if(this.print(e.key,e),e.shorthand&&i(e.key)&&i(e.value)&&e.key.name===e.value.name)return}this.token(":"),this.space(),this.print(e.value,e)},B.PipelineBareFunction=function(e){this.print(e.callee,e)},B.PipelinePrimaryTopicReference=function(){this.token("#")},B.PipelineTopicExpression=function(e){this.print(e.expression,e)},B.RecordExpression=function(e){const B=e.properties;let t,r;if("bar"===this.format.recordAndTupleSyntaxType)t="{|",r="|}";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`The "recordAndTupleSyntaxType" generator option must be "bar" or "hash" (${JSON.stringify(this.format.recordAndTupleSyntaxType)} received).`);t="#{",r="}"}this.token(t),this.printInnerComments(e),B.length&&(this.space(),this.printList(B,e,{indent:!0,statement:!0}),this.space()),this.token(r)},B.RegExpLiteral=function(e){this.word(`/${e.pattern}/${e.flags}`)},B.SpreadElement=B.RestElement=function(e){this.token("..."),this.print(e.argument,e)},B.StringLiteral=function(e){const B=this.getPossibleRaw(e);if(!this.format.minified&&null!=B)return void this.token(B);const t=n(e.value,Object.assign(this.format.jsescOption,this.format.jsonCompatibleStrings&&{json:!0}));return this.token(t)},B.TopicReference=function(){const{topicToken:e}=this.format;if(!a.has(e)){const B=JSON.stringify(e),t=Array.from(a,(e=>JSON.stringify(e)));throw new Error(`The "topicToken" generator option must be one of ${t.join(", ")} (${B} received instead).`)}this.token(e)},B.TupleExpression=function(e){const B=e.elements,t=B.length;let r,n;if("bar"===this.format.recordAndTupleSyntaxType)r="[|",n="|]";else{if("hash"!==this.format.recordAndTupleSyntaxType)throw new Error(`${this.format.recordAndTupleSyntaxType} is not a valid recordAndTuple syntax type`);r="#[",n="]"}this.token(r),this.printInnerComments(e);for(let r=0;r<B.length;r++){const n=B[r];n&&(r>0&&this.space(),this.print(n,e),r<t-1&&this.token(","))}this.token(n)};var r=t(38218),n=t(3312);const{isAssignmentPattern:s,isIdentifier:i}=r,a=new Set(["^","%","#"])},82043:(e,B)=>{"use strict";function t(e,B){!0!==B&&e.token(B)}Object.defineProperty(B,"__esModule",{value:!0}),B.TSAnyKeyword=function(){this.word("any")},B.TSArrayType=function(e){this.print(e.elementType,e),this.token("[]")},B.TSAsExpression=function(e){const{expression:B,typeAnnotation:t}=e;this.print(B,e),this.space(),this.word("as"),this.space(),this.print(t,e)},B.TSBigIntKeyword=function(){this.word("bigint")},B.TSBooleanKeyword=function(){this.word("boolean")},B.TSCallSignatureDeclaration=function(e){this.tsPrintSignatureDeclarationBase(e),this.token(";")},B.TSConditionalType=function(e){this.print(e.checkType),this.space(),this.word("extends"),this.space(),this.print(e.extendsType),this.space(),this.token("?"),this.space(),this.print(e.trueType),this.space(),this.token(":"),this.space(),this.print(e.falseType)},B.TSConstructSignatureDeclaration=function(e){this.word("new"),this.space(),this.tsPrintSignatureDeclarationBase(e),this.token(";")},B.TSConstructorType=function(e){e.abstract&&(this.word("abstract"),this.space()),this.word("new"),this.space(),this.tsPrintFunctionOrConstructorType(e)},B.TSDeclareFunction=function(e){e.declare&&(this.word("declare"),this.space()),this._functionHead(e),this.token(";")},B.TSDeclareMethod=function(e){this._classMethodHead(e),this.token(";")},B.TSEnumDeclaration=function(e){const{declare:B,const:t,id:r,members:n}=e;B&&(this.word("declare"),this.space()),t&&(this.word("const"),this.space()),this.word("enum"),this.space(),this.print(r,e),this.space(),this.tsPrintBraced(n,e)},B.TSEnumMember=function(e){const{id:B,initializer:t}=e;this.print(B,e),t&&(this.space(),this.token("="),this.space(),this.print(t,e)),this.token(",")},B.TSExportAssignment=function(e){this.word("export"),this.space(),this.token("="),this.space(),this.print(e.expression,e),this.token(";")},B.TSExpressionWithTypeArguments=function(e){this.print(e.expression,e),this.print(e.typeParameters,e)},B.TSExternalModuleReference=function(e){this.token("require("),this.print(e.expression,e),this.token(")")},B.TSFunctionType=function(e){this.tsPrintFunctionOrConstructorType(e)},B.TSImportEqualsDeclaration=function(e){const{isExport:B,id:t,moduleReference:r}=e;B&&(this.word("export"),this.space()),this.word("import"),this.space(),this.print(t,e),this.space(),this.token("="),this.space(),this.print(r,e),this.token(";")},B.TSImportType=function(e){const{argument:B,qualifier:t,typeParameters:r}=e;this.word("import"),this.token("("),this.print(B,e),this.token(")"),t&&(this.token("."),this.print(t,e)),r&&this.print(r,e)},B.TSIndexSignature=function(e){const{readonly:B,static:t}=e;t&&(this.word("static"),this.space()),B&&(this.word("readonly"),this.space()),this.token("["),this._parameters(e.parameters,e),this.token("]"),this.print(e.typeAnnotation,e),this.token(";")},B.TSIndexedAccessType=function(e){this.print(e.objectType,e),this.token("["),this.print(e.indexType,e),this.token("]")},B.TSInferType=function(e){this.token("infer"),this.space(),this.print(e.typeParameter)},B.TSInterfaceBody=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.body,e)},B.TSInterfaceDeclaration=function(e){const{declare:B,id:t,typeParameters:r,extends:n,body:s}=e;B&&(this.word("declare"),this.space()),this.word("interface"),this.space(),this.print(t,e),this.print(r,e),null!=n&&n.length&&(this.space(),this.word("extends"),this.space(),this.printList(n,e)),this.space(),this.print(s,e)},B.TSIntersectionType=function(e){this.tsPrintUnionOrIntersectionType(e,"&")},B.TSIntrinsicKeyword=function(){this.word("intrinsic")},B.TSLiteralType=function(e){this.print(e.literal,e)},B.TSMappedType=function(e){const{nameType:B,optional:r,readonly:n,typeParameter:s}=e;this.token("{"),this.space(),n&&(t(this,n),this.word("readonly"),this.space()),this.token("["),this.word(s.name),this.space(),this.word("in"),this.space(),this.print(s.constraint,s),B&&(this.space(),this.word("as"),this.space(),this.print(B,e)),this.token("]"),r&&(t(this,r),this.token("?")),this.token(":"),this.space(),this.print(e.typeAnnotation,e),this.space(),this.token("}")},B.TSMethodSignature=function(e){const{kind:B}=e;"set"!==B&&"get"!==B||(this.word(B),this.space()),this.tsPrintPropertyOrMethodName(e),this.tsPrintSignatureDeclarationBase(e),this.token(";")},B.TSModuleBlock=function(e){this.tsPrintBraced(e.body,e)},B.TSModuleDeclaration=function(e){const{declare:B,id:t}=e;if(B&&(this.word("declare"),this.space()),e.global||(this.word("Identifier"===t.type?"namespace":"module"),this.space()),this.print(t,e),!e.body)return void this.token(";");let r=e.body;for(;"TSModuleDeclaration"===r.type;)this.token("."),this.print(r.id,r),r=r.body;this.space(),this.print(r,e)},B.TSNamedTupleMember=function(e){this.print(e.label,e),e.optional&&this.token("?"),this.token(":"),this.space(),this.print(e.elementType,e)},B.TSNamespaceExportDeclaration=function(e){this.word("export"),this.space(),this.word("as"),this.space(),this.word("namespace"),this.space(),this.print(e.id,e)},B.TSNeverKeyword=function(){this.word("never")},B.TSNonNullExpression=function(e){this.print(e.expression,e),this.token("!")},B.TSNullKeyword=function(){this.word("null")},B.TSNumberKeyword=function(){this.word("number")},B.TSObjectKeyword=function(){this.word("object")},B.TSOptionalType=function(e){this.print(e.typeAnnotation,e),this.token("?")},B.TSParameterProperty=function(e){e.accessibility&&(this.word(e.accessibility),this.space()),e.readonly&&(this.word("readonly"),this.space()),this._param(e.parameter)},B.TSParenthesizedType=function(e){this.token("("),this.print(e.typeAnnotation,e),this.token(")")},B.TSPropertySignature=function(e){const{readonly:B,initializer:t}=e;B&&(this.word("readonly"),this.space()),this.tsPrintPropertyOrMethodName(e),this.print(e.typeAnnotation,e),t&&(this.space(),this.token("="),this.space(),this.print(t,e)),this.token(";")},B.TSQualifiedName=function(e){this.print(e.left,e),this.token("."),this.print(e.right,e)},B.TSRestType=function(e){this.token("..."),this.print(e.typeAnnotation,e)},B.TSStringKeyword=function(){this.word("string")},B.TSSymbolKeyword=function(){this.word("symbol")},B.TSThisType=function(){this.word("this")},B.TSTupleType=function(e){this.token("["),this.printList(e.elementTypes,e),this.token("]")},B.TSTypeAliasDeclaration=function(e){const{declare:B,id:t,typeParameters:r,typeAnnotation:n}=e;B&&(this.word("declare"),this.space()),this.word("type"),this.space(),this.print(t,e),this.print(r,e),this.space(),this.token("="),this.space(),this.print(n,e),this.token(";")},B.TSTypeAnnotation=function(e){this.token(":"),this.space(),e.optional&&this.token("?"),this.print(e.typeAnnotation,e)},B.TSTypeAssertion=function(e){const{typeAnnotation:B,expression:t}=e;this.token("<"),this.print(B,e),this.token(">"),this.space(),this.print(t,e)},B.TSTypeLiteral=function(e){this.tsPrintTypeLiteralOrInterfaceBody(e.members,e)},B.TSTypeOperator=function(e){this.word(e.operator),this.space(),this.print(e.typeAnnotation,e)},B.TSTypeParameter=function(e){this.word(e.name),e.constraint&&(this.space(),this.word("extends"),this.space(),this.print(e.constraint,e)),e.default&&(this.space(),this.token("="),this.space(),this.print(e.default,e))},B.TSTypeParameterDeclaration=B.TSTypeParameterInstantiation=function(e,B){this.token("<"),this.printList(e.params,e,{}),"ArrowFunctionExpression"===B.type&&1===e.params.length&&this.token(","),this.token(">")},B.TSTypePredicate=function(e){e.asserts&&(this.word("asserts"),this.space()),this.print(e.parameterName),e.typeAnnotation&&(this.space(),this.word("is"),this.space(),this.print(e.typeAnnotation.typeAnnotation))},B.TSTypeQuery=function(e){this.word("typeof"),this.space(),this.print(e.exprName)},B.TSTypeReference=function(e){this.print(e.typeName,e),this.print(e.typeParameters,e)},B.TSUndefinedKeyword=function(){this.word("undefined")},B.TSUnionType=function(e){this.tsPrintUnionOrIntersectionType(e,"|")},B.TSUnknownKeyword=function(){this.word("unknown")},B.TSVoidKeyword=function(){this.word("void")},B.tsPrintBraced=function(e,B){if(this.token("{"),e.length){this.indent(),this.newline();for(const t of e)this.print(t,B),this.newline();this.dedent(),this.rightBrace()}else this.token("}")},B.tsPrintClassMemberModifiers=function(e,B){B&&e.declare&&(this.word("declare"),this.space()),e.accessibility&&(this.word(e.accessibility),this.space()),e.static&&(this.word("static"),this.space()),e.override&&(this.word("override"),this.space()),e.abstract&&(this.word("abstract"),this.space()),B&&e.readonly&&(this.word("readonly"),this.space())},B.tsPrintFunctionOrConstructorType=function(e){const{typeParameters:B}=e,t=e.parameters;this.print(B,e),this.token("("),this._parameters(t,e),this.token(")"),this.space(),this.token("=>"),this.space();const r=e.typeAnnotation;this.print(r.typeAnnotation,e)},B.tsPrintPropertyOrMethodName=function(e){e.computed&&this.token("["),this.print(e.key,e),e.computed&&this.token("]"),e.optional&&this.token("?")},B.tsPrintSignatureDeclarationBase=function(e){const{typeParameters:B}=e,t=e.parameters;this.print(B,e),this.token("("),this._parameters(t,e),this.token(")");const r=e.typeAnnotation;this.print(r,e)},B.tsPrintTypeLiteralOrInterfaceBody=function(e,B){this.tsPrintBraced(e,B)},B.tsPrintUnionOrIntersectionType=function(e,B){this.printJoin(e.types,e,{separator(){this.space(),this.token(B),this.space()}})}},39166:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.CodeGenerator=void 0,B.default=function(e,B,t){return new s(e,B,t).generate()};var r=t(27853),n=t(13105);class s extends n.default{constructor(e,B={},t){const n=function(e,B){const t={auxiliaryCommentBefore:B.auxiliaryCommentBefore,auxiliaryCommentAfter:B.auxiliaryCommentAfter,shouldPrintComment:B.shouldPrintComment,retainLines:B.retainLines,retainFunctionParens:B.retainFunctionParens,comments:null==B.comments||B.comments,compact:B.compact,minified:B.minified,concise:B.concise,indent:{adjustMultilineComment:!0,style:"  ",base:0},decoratorsBeforeExport:!!B.decoratorsBeforeExport,jsescOption:Object.assign({quotes:"double",wrap:!0,minimal:!1},B.jsescOption),recordAndTupleSyntaxType:B.recordAndTupleSyntaxType,topicToken:B.topicToken};return t.jsonCompatibleStrings=B.jsonCompatibleStrings,t.minified?(t.compact=!0,t.shouldPrintComment=t.shouldPrintComment||(()=>t.comments)):t.shouldPrintComment=t.shouldPrintComment||(e=>t.comments||e.indexOf("@license")>=0||e.indexOf("@preserve")>=0),"auto"===t.compact&&(t.compact=e.length>5e5,t.compact&&console.error(`[BABEL] Note: The code generator has deoptimised the styling of ${B.filename} as it exceeds the max of 500KB.`)),t.compact&&(t.indent.adjustMultilineComment=!1),t}(t,B);super(n,B.sourceMaps?new r.default(B,t):null),this.ast=void 0,this.ast=e}generate(){return super.generate(this.ast)}}B.CodeGenerator=class{constructor(e,B,t){this._generator=void 0,this._generator=new s(e,B,t)}generate(){return this._generator.generate()}}},32866:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.needsParens=function(e,B,t){return!!B&&(!(!l(B)||B.callee!==e||!h(e))||f(u,e,B,t))},B.needsWhitespace=m,B.needsWhitespaceAfter=function(e,B){return m(e,B,"after")},B.needsWhitespaceBefore=function(e,B){return m(e,B,"before")};var r=t(24114),n=t(52514),s=t(38218);const{FLIPPED_ALIAS_KEYS:i,isCallExpression:a,isExpressionStatement:o,isMemberExpression:C,isNewExpression:l}=s;function c(e){const B={};function t(e,t){const r=B[e];B[e]=r?function(e,B,n){const s=r(e,B,n);return null==s?t(e,B,n):s}:t}for(const B of Object.keys(e)){const r=i[B];if(r)for(const n of r)t(n,e[B]);else t(B,e[B])}return B}const u=c(n),p=c(r.nodes),d=c(r.list);function f(e,B,t,r){const n=e[B.type];return n?n(B,t,r):null}function h(e){return!!a(e)||C(e)&&h(e.object)}function m(e,B,t){if(!e)return 0;o(e)&&(e=e.expression);let r=f(p,e,B);if(!r){const n=f(d,e,B);if(n)for(let B=0;B<n.length&&(r=m(n[B],e,t),!r);B++);}return"object"==typeof r&&null!==r&&r[t]||0}},52514:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.ArrowFunctionExpression=function(e,B){return f(B)||Be(e,B)},B.AssignmentExpression=function(e,B){return!!F(e.left)||Be(e,B)},B.Binary=function(e,B){if("**"===e.operator&&C(B,{operator:"**"}))return B.left===e;if(z(e,B))return!0;if($(e,B)||V(B)||a(B))return!0;if(o(B)){const t=B.operator,r=q[t],n=e.operator,s=q[n];if(r===s&&B.right===e&&!P(B)||r>s)return!0}},B.BinaryExpression=function(e,B){return"in"===e.operator&&(Y(B)||y(B))},B.ClassExpression=function(e,B,t){return te(t,{expressionStatement:!0,exportDefault:!0})},B.ConditionalExpression=Be,B.DoExpression=function(e,B,t){return!e.async&&te(t,{expressionStatement:!0})},B.FunctionExpression=function(e,B,t){return te(t,{expressionStatement:!0,exportDefault:!0})},B.FunctionTypeAnnotation=function(e,B,t){return W(B)||T(B)||n(B)||_(B)&&s(t[t.length-3])},B.Identifier=function(e,B,t){if("let"===e.name){const r=D(B,{object:e,computed:!0})||v(B,{object:e,computed:!0,optional:!1});return te(t,{expressionStatement:r,forHead:r,forInHead:r,forOfHead:!0})}return"async"===e.name&&E(B)&&e===B.left},B.LogicalExpression=function(e,B){switch(e.operator){case"||":return!!P(B)&&("??"===B.operator||"&&"===B.operator);case"&&":return P(B,{operator:"??"});case"??":return P(B)&&"??"!==B.operator}},B.NullableTypeAnnotation=function(e,B){return n(B)},B.ObjectExpression=function(e,B,t){return te(t,{expressionStatement:!0,arrowBody:!0})},B.OptionalIndexedAccessType=function(e,B){return b(B,{objectType:e})},B.OptionalCallExpression=B.OptionalMemberExpression=function(e,B){return l(B,{callee:e})||D(B,{object:e})},B.SequenceExpression=function(e,B){return!(S(B)||U(B)||N(B)||g(B)&&B.test===e||X(B)&&B.test===e||A(B)&&B.right===e||L(B)&&B.discriminant===e||m(B)&&B.expression===e)},B.TSAsExpression=function(){return!0},B.TSInferType=function(e,B){return R(B)||w(B)},B.TSTypeAssertion=function(){return!0},B.TSIntersectionType=B.TSUnionType=function(e,B){return R(B)||w(B)||G(B)||J(B)||k(B)},B.UnaryLike=ee,B.IntersectionTypeAnnotation=B.UnionTypeAnnotation=function(e,B){return n(B)||O(B)||T(B)||W(B)},B.UpdateExpression=function(e,B){return $(e,B)||z(e,B)},B.AwaitExpression=B.YieldExpression=function(e,B){return o(B)||V(B)||$(e,B)||a(B)&&Z(e)||d(B)&&e===B.test||z(e,B)};var r=t(38218);const{isArrayTypeAnnotation:n,isArrowFunctionExpression:s,isAssignmentExpression:i,isAwaitExpression:a,isBinary:o,isBinaryExpression:C,isCallExpression:l,isClassDeclaration:c,isClassExpression:u,isConditional:p,isConditionalExpression:d,isExportDeclaration:f,isExportDefaultDeclaration:h,isExpressionStatement:m,isFor:y,isForInStatement:A,isForOfStatement:E,isForStatement:S,isIfStatement:g,isIndexedAccessType:b,isIntersectionTypeAnnotation:T,isLogicalExpression:P,isMemberExpression:D,isNewExpression:I,isNullableTypeAnnotation:O,isObjectPattern:F,isOptionalCallExpression:x,isOptionalMemberExpression:v,isReturnStatement:N,isSequenceExpression:M,isSwitchStatement:L,isTSArrayType:R,isTSAsExpression:j,isTSIntersectionType:G,isTSNonNullExpression:H,isTSOptionalType:w,isTSRestType:k,isTSTypeAssertion:K,isTSUnionType:J,isTaggedTemplateExpression:Q,isThrowStatement:U,isTypeAnnotation:_,isUnaryLike:V,isUnionTypeAnnotation:W,isVariableDeclarator:Y,isWhileStatement:X,isYieldExpression:Z}=r,q={"||":0,"??":0,"&&":1,"|":2,"^":3,"&":4,"==":5,"===":5,"!=":5,"!==":5,"<":6,">":6,"<=":6,">=":6,in:6,instanceof:6,">>":7,"<<":7,">>>":7,"+":8,"-":8,"*":9,"/":9,"%":9,"**":10},z=(e,B)=>(c(B)||u(B))&&B.superClass===e,$=(e,B)=>(D(B)||v(B))&&B.object===e||(l(B)||x(B)||I(B))&&B.callee===e||Q(B)&&B.tag===e||H(B);function ee(e,B){return $(e,B)||C(B,{operator:"**",left:e})||z(e,B)}function Be(e,B){return!!(V(B)||o(B)||d(B,{test:e})||a(B)||K(B)||j(B))||ee(e,B)}function te(e,{expressionStatement:B=!1,arrowBody:t=!1,exportDefault:r=!1,forHead:n=!1,forInHead:a=!1,forOfHead:C=!1}){let l=e.length-1,c=e[l];l--;let u=e[l];for(;l>=0;){if(B&&m(u,{expression:c})||r&&h(u,{declaration:c})||t&&s(u,{body:c})||n&&S(u,{init:c})||a&&A(u,{left:c})||C&&E(u,{left:c}))return!0;if(!($(c,u)&&!I(u)||M(u)&&u.expressions[0]===c||p(u,{test:c})||o(u,{left:c})||i(u,{left:c})))return!1;c=u,l--,u=e[l]}return!1}},24114:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.nodes=B.list=void 0;var r=t(38218);const{FLIPPED_ALIAS_KEYS:n,isArrayExpression:s,isAssignmentExpression:i,isBinary:a,isBlockStatement:o,isCallExpression:C,isFunction:l,isIdentifier:c,isLiteral:u,isMemberExpression:p,isObjectExpression:d,isOptionalCallExpression:f,isOptionalMemberExpression:h,isStringLiteral:m}=r;function y(e,B={}){return p(e)||h(e)?(y(e.object,B),e.computed&&y(e.property,B)):a(e)||i(e)?(y(e.left,B),y(e.right,B)):C(e)||f(e)?(B.hasCall=!0,y(e.callee,B)):l(e)?B.hasFunction=!0:c(e)&&(B.hasHelper=B.hasHelper||A(e.callee)),B}function A(e){return p(e)?A(e.object)||A(e.property):c(e)?"require"===e.name||"_"===e.name[0]:C(e)?A(e.callee):!(!a(e)&&!i(e))&&(c(e.left)&&A(e.left)||A(e.right))}function E(e){return u(e)||d(e)||s(e)||c(e)||p(e)}const S={AssignmentExpression(e){const B=y(e.right);if(B.hasCall&&B.hasHelper||B.hasFunction)return{before:B.hasFunction,after:!0}},SwitchCase:(e,B)=>({before:!!e.consequent.length||B.cases[0]===e,after:!e.consequent.length&&B.cases[B.cases.length-1]===e}),LogicalExpression(e){if(l(e.left)||l(e.right))return{after:!0}},Literal(e){if(m(e)&&"use strict"===e.value)return{after:!0}},CallExpression(e){if(l(e.callee)||A(e))return{before:!0,after:!0}},OptionalCallExpression(e){if(l(e.callee))return{before:!0,after:!0}},VariableDeclaration(e){for(let B=0;B<e.declarations.length;B++){const t=e.declarations[B];let r=A(t.id)&&!E(t.init);if(!r){const e=y(t.init);r=A(t.init)&&e.hasCall||e.hasFunction}if(r)return{before:!0,after:!0}}},IfStatement(e){if(o(e.consequent))return{before:!0,after:!0}}};B.nodes=S,S.ObjectProperty=S.ObjectTypeProperty=S.ObjectMethod=function(e,B){if(B.properties[0]===e)return{before:!0}},S.ObjectTypeCallProperty=function(e,B){var t;if(B.callProperties[0]===e&&(null==(t=B.properties)||!t.length))return{before:!0}},S.ObjectTypeIndexer=function(e,B){var t,r;if(!(B.indexers[0]!==e||null!=(t=B.properties)&&t.length||null!=(r=B.callProperties)&&r.length))return{before:!0}},S.ObjectTypeInternalSlot=function(e,B){var t,r,n;if(!(B.internalSlots[0]!==e||null!=(t=B.properties)&&t.length||null!=(r=B.callProperties)&&r.length||null!=(n=B.indexers)&&n.length))return{before:!0}};B.list={VariableDeclaration:e=>e.declarations.map((e=>e.init)),ArrayExpression:e=>e.elements,ObjectExpression:e=>e.properties},[["Function",!0],["Class",!0],["Loop",!0],["LabeledStatement",!0],["SwitchStatement",!0],["TryStatement",!0]].forEach((function([e,B]){"boolean"==typeof B&&(B={after:B,before:B}),[e].concat(n[e]||[]).forEach((function(e){S[e]=function(){return B}}))}))},13105:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var r=t(28649),n=t(32866),s=t(38218),i=t(38217);const{isProgram:a,isFile:o,isEmptyStatement:C}=s,l=/e/i,c=/\.0+$/,u=/^0[box]/,p=/^\s*[@#]__PURE__\s*$/,{needsParens:d,needsWhitespaceAfter:f,needsWhitespaceBefore:h}=n;class m{constructor(e,B){this.inForStatementInitCounter=0,this._printStack=[],this._indent=0,this._insideAux=!1,this._parenPushNewlineState=null,this._noLineTerminator=!1,this._printAuxAfterOnNextUserNode=!1,this._printedComments=new WeakSet,this._endsWithInteger=!1,this._endsWithWord=!1,this.format=e,this._buf=new r.default(B)}generate(e){return this.print(e),this._maybeAddAuxComment(),this._buf.get()}indent(){this.format.compact||this.format.concise||this._indent++}dedent(){this.format.compact||this.format.concise||this._indent--}semicolon(e=!1){this._maybeAddAuxComment(),this._append(";",!e)}rightBrace(){this.format.minified&&this._buf.removeLastSemicolon(),this.token("}")}space(e=!1){if(!this.format.compact)if(e)this._space();else if(this._buf.hasContent()){const e=this.getLastChar();32!==e&&10!==e&&this._space()}}word(e){(this._endsWithWord||this.endsWith(47)&&47===e.charCodeAt(0))&&this._space(),this._maybeAddAuxComment(),this._append(e),this._endsWithWord=!0}number(e){this.word(e),this._endsWithInteger=Number.isInteger(+e)&&!u.test(e)&&!l.test(e)&&!c.test(e)&&46!==e.charCodeAt(e.length-1)}token(e){const B=this.getLastChar(),t=e.charCodeAt(0);("--"===e&&33===B||43===t&&43===B||45===t&&45===B||46===t&&this._endsWithInteger)&&this._space(),this._maybeAddAuxComment(),this._append(e)}newline(e=1){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();const B=this.endsWithCharAndNewline();if(10!==B&&(123!==B&&58!==B||e--,!(e<=0)))for(let B=0;B<e;B++)this._newline()}endsWith(e){return this.getLastChar()===e}getLastChar(){return this._buf.getLastChar()}endsWithCharAndNewline(){return this._buf.endsWithCharAndNewline()}removeTrailingNewline(){this._buf.removeTrailingNewline()}exactSource(e,B){this._catchUp("start",e),this._buf.exactSource(e,B)}source(e,B){this._catchUp(e,B),this._buf.source(e,B)}withSource(e,B,t){this._catchUp(e,B),this._buf.withSource(e,B,t)}_space(){this._append(" ",!0)}_newline(){this._append("\n",!0)}_append(e,B=!1){this._maybeAddParen(e),this._maybeIndent(e),B?this._buf.queue(e):this._buf.append(e),this._endsWithWord=!1,this._endsWithInteger=!1}_maybeIndent(e){this._indent&&this.endsWith(10)&&10!==e.charCodeAt(0)&&this._buf.queue(this._getIndent())}_maybeAddParen(e){const B=this._parenPushNewlineState;if(!B)return;let t;for(t=0;t<e.length&&" "===e[t];t++)continue;if(t===e.length)return;const r=e[t];if("\n"!==r){if("/"!==r||t+1===e.length)return void(this._parenPushNewlineState=null);const B=e[t+1];if("*"===B){if(p.test(e.slice(t+2,e.length-2)))return}else if("/"!==B)return void(this._parenPushNewlineState=null)}this.token("("),this.indent(),B.printed=!0}_catchUp(e,B){if(!this.format.retainLines)return;const t=B?B[e]:null;if(null!=(null==t?void 0:t.line)){const e=t.line-this._buf.getCurrentLine();for(let B=0;B<e;B++)this._newline()}}_getIndent(){return this.format.indent.style.repeat(this._indent)}startTerminatorless(e=!1){return e?(this._noLineTerminator=!0,null):this._parenPushNewlineState={printed:!1}}endTerminatorless(e){this._noLineTerminator=!1,null!=e&&e.printed&&(this.dedent(),this.newline(),this.token(")"))}print(e,B){if(!e)return;const t=this.format.concise;e._compact&&(this.format.concise=!0);const r=this[e.type];if(!r)throw new ReferenceError(`unknown node of type ${JSON.stringify(e.type)} with constructor ${JSON.stringify(null==e?void 0:e.constructor.name)}`);this._printStack.push(e);const n=this._insideAux;this._insideAux=!e.loc,this._maybeAddAuxComment(this._insideAux&&!n);let s=d(e,B,this._printStack);this.format.retainFunctionParens&&"FunctionExpression"===e.type&&e.extra&&e.extra.parenthesized&&(s=!0),s&&this.token("("),this._printLeadingComments(e);const i=a(e)||o(e)?null:e.loc;this.withSource("start",i,(()=>{r.call(this,e,B)})),this._printTrailingComments(e),s&&this.token(")"),this._printStack.pop(),this.format.concise=t,this._insideAux=n}_maybeAddAuxComment(e){e&&this._printAuxBeforeComment(),this._insideAux||this._printAuxAfterComment()}_printAuxBeforeComment(){if(this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!0;const e=this.format.auxiliaryCommentBefore;e&&this._printComment({type:"CommentBlock",value:e})}_printAuxAfterComment(){if(!this._printAuxAfterOnNextUserNode)return;this._printAuxAfterOnNextUserNode=!1;const e=this.format.auxiliaryCommentAfter;e&&this._printComment({type:"CommentBlock",value:e})}getPossibleRaw(e){const B=e.extra;if(B&&null!=B.raw&&null!=B.rawValue&&e.value===B.rawValue)return B.raw}printJoin(e,B,t={}){if(null==e||!e.length)return;t.indent&&this.indent();const r={addNewlines:t.addNewlines};for(let n=0;n<e.length;n++){const s=e[n];s&&(t.statement&&this._printNewline(!0,s,B,r),this.print(s,B),t.iterator&&t.iterator(s,n),t.separator&&n<e.length-1&&t.separator.call(this),t.statement&&this._printNewline(!1,s,B,r))}t.indent&&this.dedent()}printAndIndentOnComments(e,B){const t=e.leadingComments&&e.leadingComments.length>0;t&&this.indent(),this.print(e,B),t&&this.dedent()}printBlock(e){const B=e.body;C(B)||this.space(),this.print(B,e)}_printTrailingComments(e){this._printComments(this._getComments(!1,e))}_printLeadingComments(e){this._printComments(this._getComments(!0,e),!0)}printInnerComments(e,B=!0){var t;null!=(t=e.innerComments)&&t.length&&(B&&this.indent(),this._printComments(e.innerComments),B&&this.dedent())}printSequence(e,B,t={}){return t.statement=!0,this.printJoin(e,B,t)}printList(e,B,t={}){return null==t.separator&&(t.separator=A),this.printJoin(e,B,t)}_printNewline(e,B,t,r){if(this.format.retainLines||this.format.compact)return;if(this.format.concise)return void this.space();let n=0;this._buf.hasContent()&&(e||n++,r.addNewlines&&(n+=r.addNewlines(e,B)||0),(e?h:f)(B,t)&&n++),this.newline(Math.min(2,n))}_getComments(e,B){return B&&(e?B.leadingComments:B.trailingComments)||[]}_printComment(e,B){if(!this.format.shouldPrintComment(e.value))return;if(e.ignore)return;if(this._printedComments.has(e))return;this._printedComments.add(e);const t="CommentBlock"===e.type,r=t&&!B&&!this._noLineTerminator;r&&this._buf.hasContent()&&this.newline(1);const n=this.getLastChar();91!==n&&123!==n&&this.space();let s=t||this._noLineTerminator?`/*${e.value}*/`:`//${e.value}\n`;if(t&&this.format.indent.adjustMultilineComment){var i;const B=null==(i=e.loc)?void 0:i.start.column;if(B){const e=new RegExp("\\n\\s{1,"+B+"}","g");s=s.replace(e,"\n")}const t=Math.max(this._getIndent().length,this.format.retainLines?0:this._buf.getCurrentColumn());s=s.replace(/\n(?!$)/g,`\n${" ".repeat(t)}`)}this.endsWith(47)&&this._space(),this.withSource("start",e.loc,(()=>{this._append(s)})),r&&this.newline(1)}_printComments(e,B){if(null!=e&&e.length)if(B&&1===e.length&&p.test(e[0].value))this._printComment(e[0],this._buf.hasContent()&&!this.endsWith(10));else for(const B of e)this._printComment(B)}printAssertions(e){var B;null!=(B=e.assertions)&&B.length&&(this.space(),this.word("assert"),this.space(),this.token("{"),this.space(),this.printList(e.assertions,e),this.space(),this.token("}"))}}Object.assign(m.prototype,i),m.prototype.Noop=function(){};var y=m;function A(){this.token(","),this.space()}B.default=y},27853:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var r=t(49125);B.default=class{constructor(e,B){this._cachedMap=void 0,this._code=void 0,this._opts=void 0,this._rawMappings=void 0,this._lastGenLine=void 0,this._lastSourceLine=void 0,this._lastSourceColumn=void 0,this._cachedMap=null,this._code=B,this._opts=e,this._rawMappings=[]}get(){if(!this._cachedMap){const e=this._cachedMap=new r.SourceMapGenerator({sourceRoot:this._opts.sourceRoot}),B=this._code;"string"==typeof B?e.setSourceContent(this._opts.sourceFileName.replace(/\\/g,"/"),B):"object"==typeof B&&Object.keys(B).forEach((t=>{e.setSourceContent(t.replace(/\\/g,"/"),B[t])})),this._rawMappings.forEach((B=>e.addMapping(B)),e)}return this._cachedMap.toJSON()}getRawMappings(){return this._rawMappings.slice()}mark(e,B,t,r,n,s,i){this._lastGenLine!==e&&null===t||(i||this._lastGenLine!==e||this._lastSourceLine!==t||this._lastSourceColumn!==r)&&(this._cachedMap=null,this._lastGenLine=e,this._lastSourceLine=t,this._lastSourceColumn=r,this._rawMappings.push({name:n||void 0,generated:{line:e,column:B},source:null==t?void 0:(s||this._opts.sourceFileName).replace(/\\/g,"/"),original:null==t?void 0:{line:t,column:r}}))}}},89678:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.getInclusionReasons=function(e,B,t){const i=t[e]||{};return Object.keys(B).reduce(((e,t)=>{const a=(0,s.getLowestImplementedVersion)(i,t),o=B[t];if(a){const B=(0,s.isUnreleasedVersion)(a,t);(0,s.isUnreleasedVersion)(o,t)||!B&&!r.lt(o.toString(),(0,s.semverify)(a))||(e[t]=(0,n.prettifyVersion)(o))}else e[t]=(0,n.prettifyVersion)(o);return e}),{})};var r=t(36625),n=t(8087),s=t(83108)},99584:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B,t,r,n,s,i){const o=new Set,C={compatData:e,includes:B,excludes:t};for(const B in e)if(a(B,r,C))o.add(B);else if(i){const e=i.get(B);e&&o.add(e)}return n&&n.forEach((e=>!t.has(e)&&o.add(e))),s&&s.forEach((e=>!B.has(e)&&o.delete(e))),o},B.isRequired=a,B.targetsSupported=i;var r=t(36625),n=t(24832),s=t(83108);function i(e,B){const t=Object.keys(e);return 0!==t.length&&0===t.filter((t=>{const n=(0,s.getLowestImplementedVersion)(B,t);if(!n)return!0;const i=e[t];if((0,s.isUnreleasedVersion)(i,t))return!1;if((0,s.isUnreleasedVersion)(n,t))return!0;if(!r.valid(i.toString()))throw new Error(`Invalid version passed for target "${t}": "${i}". Versions must be in semver format (major.minor.patch)`);return r.gt((0,s.semverify)(n),i.toString())})).length}function a(e,B,{compatData:t=n,includes:r,excludes:s}={}){return!(null!=s&&s.has(e)||(null==r||!r.has(e))&&i(B,t[e]))}},34077:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),Object.defineProperty(B,"TargetNames",{enumerable:!0,get:function(){return o.TargetNames}}),B.default=function(e={},B={}){var t;let{browsers:s,esmodules:C}=e;const{configPath:l="."}=B;!function(e){p.invariant(void 0===e||d(e),`'${String(e)}' is not a valid browserslist query`)}(s);let c=function(e){const B=Object.keys(o.TargetNames);for(const t of Object.keys(e))if(!(t in o.TargetNames))throw new Error(p.formatMessage(`'${t}' is not a valid target\n- Did you mean '${(0,n.findSuggestion)(t,B)}'?`));return e}(function(e){const B=Object.assign({},e);return delete B.esmodules,delete B.browsers,B}(e));const f=!!s||Object.keys(c).length>0,m=!B.ignoreBrowserslistConfig&&!f;if(!s&&m&&(s=r.loadConfig({config:B.configFile,path:l,env:B.browserslistEnv}),null==s&&(s=[])),!C||"intersect"===C&&null!=(t=s)&&t.length||(s=Object.keys(u).map((e=>`${e} >= ${u[e]}`)).join(", "),C=!1),s){const e=(y=s,A=B.browserslistEnv,function(e){return e.reduce(((e,B)=>{const[t,r]=B.split(" "),n=a.browserNameMap[t];if(!n)return e;try{const B=r.split("-")[0].toLowerCase(),s=(0,i.isUnreleasedVersion)(B,t);if(!e[n])return e[n]=s?B:(0,i.semverify)(B),e;const a=e[n],o=(0,i.isUnreleasedVersion)(a,t);if(o&&s)e[n]=(0,i.getLowestUnreleased)(a,B,t);else if(o)e[n]=(0,i.semverify)(B);else if(!o&&!s){const t=(0,i.semverify)(B);e[n]=(0,i.semverMin)(a,t)}}catch(e){}return e}),{})}(r(y,{mobileToDesktop:!0,env:A})));if("intersect"===C)for(const B of Object.keys(e)){const t=e[B];u[B]?e[B]=(0,i.getHighestUnreleased)(t,(0,i.semverify)(u[B]),B):delete e[B]}c=Object.assign(e,c)}var y,A;const E={},S=[];for(const e of Object.keys(c).sort()){var g;const B=c[e];"number"==typeof B&&B%1!=0&&S.push({target:e,value:B});const t=null!=(g=h[e])?g:h.__default,[r,n]=t(e,B);n&&(E[r]=n)}return(b=S).length&&(console.warn("Warning, the following targets are using a decimal version:\n"),b.forEach((({target:e,value:B})=>console.warn(`  ${e}: ${B}`))),console.warn("\nWe recommend using a string for minor/patch versions to avoid numbers like 6.10\ngetting parsed as 6.1, which can lead to unexpected behavior.\n")),E;var b},Object.defineProperty(B,"filterItems",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(B,"getInclusionReasons",{enumerable:!0,get:function(){return l.getInclusionReasons}}),B.isBrowsersQueryValid=d,Object.defineProperty(B,"isRequired",{enumerable:!0,get:function(){return c.isRequired}}),Object.defineProperty(B,"prettifyTargets",{enumerable:!0,get:function(){return C.prettifyTargets}}),Object.defineProperty(B,"unreleasedLabels",{enumerable:!0,get:function(){return a.unreleasedLabels}});var r=t(31e3),n=t(54346),s=t(78142),i=t(83108),a=t(2950),o=t(78910),C=t(8087),l=t(89678),c=t(99584);const u=s["es6.module"],p=new n.OptionValidator("@babel/helper-compilation-targets");function d(e){return"string"==typeof e||Array.isArray(e)&&e.every((e=>"string"==typeof e))}function f(e,B){try{return(0,i.semverify)(B)}catch(t){throw new Error(p.formatMessage(`'${B}' is not a valid value for 'targets.${e}'.`))}}const h={__default:(e,B)=>[e,(0,i.isUnreleasedVersion)(B,e)?B.toLowerCase():f(e,B)],node:(e,B)=>[e,!0===B||"current"===B?process.versions.node:f(e,B)]}},78910:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.TargetNames=void 0,B.TargetNames={node:"node",chrome:"chrome",opera:"opera",edge:"edge",firefox:"firefox",safari:"safari",ie:"ie",ios:"ios",android:"android",electron:"electron",samsung:"samsung",rhino:"rhino"}},8087:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.prettifyTargets=function(e){return Object.keys(e).reduce(((B,t)=>{let r=e[t];const i=n.unreleasedLabels[t];return"string"==typeof r&&i!==r&&(r=s(r)),B[t]=r,B}),{})},B.prettifyVersion=s;var r=t(36625),n=t(2950);function s(e){if("string"!=typeof e)return e;const B=[r.major(e)],t=r.minor(e),n=r.patch(e);return(t||n)&&B.push(t),n&&B.push(n),B.join(".")}},2950:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.unreleasedLabels=B.browserNameMap=void 0,B.unreleasedLabels={safari:"tp"},B.browserNameMap={and_chr:"chrome",and_ff:"firefox",android:"android",chrome:"chrome",edge:"edge",firefox:"firefox",ie:"ie",ie_mob:"ie",ios_saf:"ios",node:"node",op_mob:"opera",opera:"opera",safari:"safari",samsung:"samsung"}},83108:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.getHighestUnreleased=function(e,B,t){return C(e,B,t)===e?B:e},B.getLowestImplementedVersion=function(e,B){const t=e[B];return t||"android"!==B?t:e.chrome},B.getLowestUnreleased=C,B.isUnreleasedVersion=function(e,B){const t=s.unreleasedLabels[B];return!!t&&t===e.toString().toLowerCase()},B.semverMin=o,B.semverify=function(e){if("string"==typeof e&&r.valid(e))return e;a.invariant("number"==typeof e||"string"==typeof e&&i.test(e),`'${e}' is not a valid version`);const B=e.toString().split(".");for(;B.length<3;)B.push("0");return B.join(".")};var r=t(36625),n=t(54346),s=t(2950);const i=/^(\d+|\d+.\d+)$/,a=new n.OptionValidator("@babel/helper-compilation-targets");function o(e,B){return e&&r.lt(e,B)?e:B}function C(e,B,t){const r=s.unreleasedLabels[t],n=[e,B].some((e=>e===r));return n?e===n?B:e||B:o(e,B)}},31692:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0,B.skipAllButComputedKey=i;var r=t(38218);const{VISITOR_KEYS:n,staticBlock:s}=r;function i(e){if(!e.node.computed)return void e.skip();const B=n[e.type];for(const t of B)"key"!==t&&e.skipKey(t)}var a={[(s?"StaticBlock|":"")+"ClassPrivateProperty|TypeAnnotation|FunctionDeclaration|FunctionExpression"]:e=>e.skip(),"Method|ClassProperty"(e){i(e)}};B.default=a},11485:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function({node:e,parent:B,scope:t,id:n},s=!1,b=!1){if(e.id)return;if(!f(B)&&!d(B,{kind:"method"})||B.computed&&!u(B.key)){if(y(B)){if(n=B.id,c(n)&&!s){const B=t.parent.getBinding(n.name);if(B&&B.constant&&t.getBinding(n.name)===B)return e.id=a(n),void(e.id[i]=!0)}}else if(C(B,{operator:"="}))n=B.left;else if(!n)return}else n=B.key;let T;return n&&u(n)?T=function(e){return p(e)?"null":h(e)?`_${e.pattern}_${e.flags}`:m(e)?e.quasis.map((e=>e.value.raw)).join(""):void 0!==e.value?e.value+"":""}(n):n&&c(n)&&(T=n.name),void 0===T||!b&&l(e)&&/[\uD800-\uDFFF]/.test(T)?void 0:(T=A(T),(n=o(T))[i]=!0,function(e,B,t,n){if(e.selfReference){if(!n.hasBinding(t.name)||n.hasGlobal(t.name)){if(!l(B))return;let e=E;B.generator&&(e=S);const s=e({FUNCTION:B,FUNCTION_ID:t,FUNCTION_KEY:n.generateUidIdentifier(t.name)}).expression,i=s.callee.body.body[0].params;for(let e=0,t=(0,r.default)(B);e<t;e++)i.push(n.generateUidIdentifier("x"));return s}n.rename(t.name)}B.id=t,n.getProgramParent().references[t.name]=!0}(function(e,B,t){const r={selfAssignment:!1,selfReference:!1,outerDeclar:t.getBindingIdentifier(B),references:[],name:B},n=t.getOwnBinding(B);return n?"param"===n.kind&&(r.selfReference=!0):(r.outerDeclar||t.hasGlobal(B))&&t.traverse(e,g,r),r}(e,T,t),e,n,t)||e)};var r=t(17564),n=t(94847),s=t(38218);const{NOT_LOCAL_BINDING:i,cloneNode:a,identifier:o,isAssignmentExpression:C,isFunction:l,isIdentifier:c,isLiteral:u,isNullLiteral:p,isObjectMethod:d,isObjectProperty:f,isRegExpLiteral:h,isTemplateLiteral:m,isVariableDeclarator:y,toBindingIdentifierName:A}=s,E=(0,n.default)("\n  (function (FUNCTION_KEY) {\n    function FUNCTION_ID() {\n      return FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    }\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),S=(0,n.default)("\n  (function (FUNCTION_KEY) {\n    function* FUNCTION_ID() {\n      return yield* FUNCTION_KEY.apply(this, arguments);\n    }\n\n    FUNCTION_ID.toString = function () {\n      return FUNCTION_KEY.toString();\n    };\n\n    return FUNCTION_ID;\n  })(FUNCTION)\n"),g={"ReferencedIdentifier|BindingIdentifier"(e,B){e.node.name===B.name&&e.scope.getBindingIdentifier(B.name)===B.outerDeclar&&(B.selfReference=!0,e.stop())}}},17564:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){const B=e.params;for(let e=0;e<B.length;e++){const t=B[e];if(n(t)||s(t))return e}return B.length};var r=t(38218);const{isAssignmentPattern:n,isRestElement:s}=r},29061:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B,t="var"){e.traverse(a,{kind:t,emit:B})};var r=t(38218);const{assignmentExpression:n,expressionStatement:s,identifier:i}=r,a={Scope(e,B){"let"===B.kind&&e.skip()},FunctionParent(e){e.skip()},VariableDeclaration(e,B){if(B.kind&&e.node.kind!==B.kind)return;const t=[],r=e.get("declarations");let a;for(const e of r){a=e.node.id,e.node.init&&t.push(s(n("=",e.node.id,e.node.init)));for(const t of Object.keys(e.getBindingIdentifiers()))B.emit(i(t),t,null!==e.node.init)}e.parentPath.isFor({left:e.node})?e.replaceWith(a):e.replaceWithMultiple(t)}}},99503:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var r=t(39491),n=t(38218);const{callExpression:s,cloneNode:i,expressionStatement:a,identifier:o,importDeclaration:C,importDefaultSpecifier:l,importNamespaceSpecifier:c,importSpecifier:u,memberExpression:p,stringLiteral:d,variableDeclaration:f,variableDeclarator:h}=n;B.default=class{constructor(e,B,t){this._statements=[],this._resultName=null,this._scope=null,this._hub=null,this._importedSource=void 0,this._scope=B,this._hub=t,this._importedSource=e}done(){return{statements:this._statements,resultName:this._resultName}}import(){return this._statements.push(C([],d(this._importedSource))),this}require(){return this._statements.push(a(s(o("require"),[d(this._importedSource)]))),this}namespace(e="namespace"){const B=this._scope.generateUidIdentifier(e),t=this._statements[this._statements.length-1];return r("ImportDeclaration"===t.type),r(0===t.specifiers.length),t.specifiers=[c(B)],this._resultName=i(B),this}default(e){e=this._scope.generateUidIdentifier(e);const B=this._statements[this._statements.length-1];return r("ImportDeclaration"===B.type),r(0===B.specifiers.length),B.specifiers=[l(e)],this._resultName=i(e),this}named(e,B){if("default"===B)return this.default(e);e=this._scope.generateUidIdentifier(e);const t=this._statements[this._statements.length-1];return r("ImportDeclaration"===t.type),r(0===t.specifiers.length),t.specifiers=[u(e,o(B))],this._resultName=i(e),this}var(e){e=this._scope.generateUidIdentifier(e);let B=this._statements[this._statements.length-1];return"ExpressionStatement"!==B.type&&(r(this._resultName),B=a(this._resultName),this._statements.push(B)),this._statements[this._statements.length-1]=f("var",[h(e,B.expression)]),this._resultName=i(e),this}defaultInterop(){return this._interop(this._hub.addHelper("interopRequireDefault"))}wildcardInterop(){return this._interop(this._hub.addHelper("interopRequireWildcard"))}_interop(e){const B=this._statements[this._statements.length-1];return"ExpressionStatement"===B.type?B.expression=s(e,[B.expression]):"VariableDeclaration"===B.type?(r(1===B.declarations.length),B.declarations[0].init=s(e,[B.declarations[0].init])):r.fail("Unexpected type."),this}prop(e){const B=this._statements[this._statements.length-1];return"ExpressionStatement"===B.type?B.expression=p(B.expression,o(e)):"VariableDeclaration"===B.type?(r(1===B.declarations.length),B.declarations[0].init=p(B.declarations[0].init,o(e))):r.fail("Unexpected type:"+B.type),this}read(e){this._resultName=p(this._resultName,o(e))}}},58694:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var r=t(39491),n=t(38218),s=t(99503),i=t(10821);const{numericLiteral:a,sequenceExpression:o}=n;B.default=class{constructor(e,B,t){this._defaultOpts={importedSource:null,importedType:"commonjs",importedInterop:"babel",importingInterop:"babel",ensureLiveReference:!1,ensureNoContext:!1,importPosition:"before"};const r=e.find((e=>e.isProgram()));this._programPath=r,this._programScope=r.scope,this._hub=r.hub,this._defaultOpts=this._applyDefaults(B,t,!0)}addDefault(e,B){return this.addNamed("default",e,B)}addNamed(e,B,t){return r("string"==typeof e),this._generateImport(this._applyDefaults(B,t),e)}addNamespace(e,B){return this._generateImport(this._applyDefaults(e,B),null)}addSideEffect(e,B){return this._generateImport(this._applyDefaults(e,B),!1)}_applyDefaults(e,B,t=!1){const n=[];"string"==typeof e?(n.push({importedSource:e}),n.push(B)):(r(!B,"Unexpected secondary arguments."),n.push(e));const s=Object.assign({},this._defaultOpts);for(const e of n)e&&(Object.keys(s).forEach((B=>{void 0!==e[B]&&(s[B]=e[B])})),t||(void 0!==e.nameHint&&(s.nameHint=e.nameHint),void 0!==e.blockHoist&&(s.blockHoist=e.blockHoist)));return s}_generateImport(e,B){const t="default"===B,r=!!B&&!t,n=null===B,{importedSource:C,importedType:l,importedInterop:c,importingInterop:u,ensureLiveReference:p,ensureNoContext:d,nameHint:f,importPosition:h,blockHoist:m}=e;let y=f||B;const A=(0,i.default)(this._programPath),E=A&&"node"===u,S=A&&"babel"===u;if("after"===h&&!A)throw new Error('"importPosition": "after" is only supported in modules');const g=new s.default(C,this._programScope,this._hub);if("es6"===l){if(!E&&!S)throw new Error("Cannot import an ES6 module from CommonJS");g.import(),n?g.namespace(f||C):(t||r)&&g.named(y,B)}else{if("commonjs"!==l)throw new Error(`Unexpected interopType "${l}"`);if("babel"===c)if(E){y="default"!==y?y:C;const e=`${C}$es6Default`;g.import(),n?g.default(e).var(y||C).wildcardInterop():t?p?g.default(e).var(y||C).defaultInterop().read("default"):g.default(e).var(y).defaultInterop().prop(B):r&&g.default(e).read(B)}else S?(g.import(),n?g.namespace(y||C):(t||r)&&g.named(y,B)):(g.require(),n?g.var(y||C).wildcardInterop():(t||r)&&p?t?(y="default"!==y?y:C,g.var(y).read(B),g.defaultInterop()):g.var(C).read(B):t?g.var(y).defaultInterop().prop(B):r&&g.var(y).prop(B));else if("compiled"===c)E?(g.import(),n?g.default(y||C):(t||r)&&g.default(C).read(y)):S?(g.import(),n?g.namespace(y||C):(t||r)&&g.named(y,B)):(g.require(),n?g.var(y||C):(t||r)&&(p?g.var(C).read(y):g.prop(B).var(y)));else{if("uncompiled"!==c)throw new Error(`Unknown importedInterop "${c}".`);if(t&&p)throw new Error("No live reference for commonjs default");E?(g.import(),n?g.default(y||C):t?g.default(y):r&&g.default(C).read(y)):S?(g.import(),n?g.default(y||C):t?g.default(y):r&&g.named(y,B)):(g.require(),n?g.var(y||C):t?g.var(y):r&&(p?g.var(C).read(y):g.var(y).prop(B)))}}const{statements:b,resultName:T}=g.done();return this._insertStatements(b,h,m),(t||r)&&d&&"Identifier"!==T.type?o([a(0),T]):T}_insertStatements(e,B="before",t=3){const r=this._programPath.get("body");if("after"===B){for(let B=r.length-1;B>=0;B--)if(r[B].isImportDeclaration())return void r[B].insertAfter(e)}else{e.forEach((e=>{e._blockHoist=t}));const B=r.find((e=>{const B=e.node._blockHoist;return Number.isFinite(B)&&B<4}));if(B)return void B.insertBefore(e)}this._programPath.unshiftContainer("body",e)}}},80203:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),Object.defineProperty(B,"ImportInjector",{enumerable:!0,get:function(){return r.default}}),B.addDefault=function(e,B,t){return new r.default(e).addDefault(B,t)},B.addNamed=function(e,B,t,n){return new r.default(e).addNamed(B,t,n)},B.addNamespace=function(e,B,t){return new r.default(e).addNamespace(B,t)},B.addSideEffect=function(e,B,t){return new r.default(e).addSideEffect(B,t)},Object.defineProperty(B,"isModule",{enumerable:!0,get:function(){return n.default}});var r=t(58694),n=t(10821)},10821:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){const{sourceType:B}=e.node;if("module"!==B&&"script"!==B)throw e.buildCodeFrameError(`Unknown sourceType "${B}", cannot transform.`);return"module"===e.node.sourceType}},76294:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=t;{const e=t;B.default=t=function(B,t){var r,n,s,i;return e(B,{moduleId:null!=(r=t.moduleId)?r:B.moduleId,moduleIds:null!=(n=t.moduleIds)?n:B.moduleIds,getModuleId:null!=(s=t.getModuleId)?s:B.getModuleId,moduleRoot:null!=(i=t.moduleRoot)?i:B.moduleRoot})}}function t(e,B){const{filename:t,filenameRelative:r=t,sourceRoot:n=B.moduleRoot}=e,{moduleId:s,moduleIds:i=!!s,getModuleId:a,moduleRoot:o=n}=B;if(!i)return null;if(null!=s&&!a)return s;let C=null!=o?o+"/":"";if(r){const e=null!=n?new RegExp("^"+n+"/?"):"";C+=r.replace(e,"").replace(/\.(\w*?)$/,"")}return C=C.replace(/\\/g,"/"),a&&a(C)||C}},12454:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.buildNamespaceInitStatements=function(e,B,t=!1){const r=[];let n=m(B.name);B.lazy&&(n=u(n,[]));for(const e of B.importsNamespace)e!==B.name&&r.push(s.default.statement`var NAME = SOURCE;`({NAME:e,SOURCE:p(n)}));t&&r.push(...P(e,B,!0));for(const t of B.reexportNamespace)r.push((B.lazy?s.default.statement`
            Object.defineProperty(EXPORTS, "NAME", {
              enumerable: true,
              get: function() {
                return NAMESPACE;
              }
            });
          `:s.default.statement`EXPORTS.NAME = NAMESPACE;`)({EXPORTS:e.exportName,NAME:t,NAMESPACE:p(n)}));if(B.reexportAll){const i=function(e,B,t){return(t?s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          EXPORTS[key] = NAMESPACE[key];
        });
      `:s.default.statement`
        Object.keys(NAMESPACE).forEach(function(key) {
          if (key === "default" || key === "__esModule") return;
          VERIFY_NAME_LIST;
          if (key in EXPORTS && EXPORTS[key] === NAMESPACE[key]) return;

          Object.defineProperty(EXPORTS, key, {
            enumerable: true,
            get: function() {
              return NAMESPACE[key];
            },
          });
        });
    `)({NAMESPACE:B,EXPORTS:e.exportName,VERIFY_NAME_LIST:e.exportNameListName?s.default`
            if (Object.prototype.hasOwnProperty.call(EXPORTS_LIST, key)) return;
          `({EXPORTS_LIST:e.exportNameListName}):null})}(e,p(n),t);i.loc=B.reexportAll.loc,r.push(i)}return r},B.ensureStatementsHoisted=function(e){e.forEach((e=>{e._blockHoist=3}))},Object.defineProperty(B,"getModuleName",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(B,"hasExports",{enumerable:!0,get:function(){return C.hasExports}}),Object.defineProperty(B,"isModule",{enumerable:!0,get:function(){return i.isModule}}),Object.defineProperty(B,"isSideEffectImport",{enumerable:!0,get:function(){return C.isSideEffectImport}}),B.rewriteModuleStatementsAndPrepareHeader=function(e,{loose:B,exportName:t,strict:n,allowTopLevelThis:l,strictMode:c,noInterop:u,importInterop:p=(u?"none":"babel"),lazy:h,esNamespaceOnly:y,constantReexports:A=B,enumerableModuleMeta:E=B,noIncompleteNsImportDetection:T}){(0,C.validateImportInteropOption)(p),r((0,i.isModule)(e),"Cannot process module statements in a script"),e.node.sourceType="script";const D=(0,C.default)(e,t,{importInterop:p,initializeReexports:A,lazy:h,esNamespaceOnly:y});if(l||(0,a.default)(e),(0,o.default)(e,D),!1!==c){const B=e.node.directives.some((e=>"use strict"===e.value.value));B||e.unshiftContainer("directives",d(f("use strict")))}const O=[];(0,C.hasExports)(D)&&!n&&O.push(function(e,B=!1){return(B?s.default.statement`
        EXPORTS.__esModule = true;
      `:s.default.statement`
        Object.defineProperty(EXPORTS, "__esModule", {
          value: true,
        });
      `)({EXPORTS:e.exportName})}(D,E));const F=function(e,B){const t=Object.create(null);for(const e of B.local.values())for(const B of e.names)t[B]=!0;let r=!1;for(const e of B.source.values()){for(const B of e.reexports.keys())t[B]=!0;for(const B of e.reexportNamespace)t[B]=!0;r=r||!!e.reexportAll}if(!r||0===Object.keys(t).length)return null;const n=e.scope.generateUidIdentifier("exportNames");return delete t.default,{name:n.name,statement:g("var",[b(n,S(t))])}}(e,D);return F&&(D.exportNameListName=F.name,O.push(F.statement)),O.push(...function(e,B,t=!1,r=!1){const n=[];for(const[e,t]of B.local)if("import"===t.kind);else if("hoisted"===t.kind)n.push([t.names[0],I(B,t.names,m(e))]);else if(!r)for(const e of t.names)n.push([e,null]);for(const e of B.source.values()){if(!t){const t=P(B,e,!1),r=[...e.reexports.keys()];for(let e=0;e<t.length;e++)n.push([r[e],t[e]])}if(!r)for(const B of e.reexportNamespace)n.push([B,null])}n.sort(((e,B)=>e[0]>B[0]?1:-1));const s=[];if(r)for(const[,e]of n)s.push(e);else{const t=100;for(let r=0,i=[];r<n.length;r+=t){for(let a=0;a<t&&r+a<n.length;a++){const[t,o]=n[r+a];null!==o?(i.length>0&&(s.push(I(B,i,e.scope.buildUndefinedNode())),i=[]),s.push(o)):i.push(t)}i.length>0&&s.push(I(B,i,e.scope.buildUndefinedNode()))}}return s}(e,D,A,T)),{meta:D,headers:O}},Object.defineProperty(B,"rewriteThis",{enumerable:!0,get:function(){return a.default}}),B.wrapInterop=function(e,B,t){if("none"===t)return null;if("node-namespace"===t)return u(e.hub.addHelper("interopRequireWildcard"),[B,c(!0)]);if("node-default"===t)return null;let r;if("default"===t)r="interopRequireDefault";else{if("namespace"!==t)throw new Error(`Unknown interop: ${t}`);r="interopRequireWildcard"}return u(e.hub.addHelper(r),[B])};var r=t(39491),n=t(38218),s=t(94847),i=t(80203),a=t(40333),o=t(77500),C=t(56368),l=t(76294);const{booleanLiteral:c,callExpression:u,cloneNode:p,directive:d,directiveLiteral:f,expressionStatement:h,identifier:m,isIdentifier:y,memberExpression:A,stringLiteral:E,valueToNode:S,variableDeclaration:g,variableDeclarator:b}=n,T={constant:s.default.statement`EXPORTS.EXPORT_NAME = NAMESPACE_IMPORT;`,constantComputed:s.default.statement`EXPORTS["EXPORT_NAME"] = NAMESPACE_IMPORT;`,spec:s.default.statement`
    Object.defineProperty(EXPORTS, "EXPORT_NAME", {
      enumerable: true,
      get: function() {
        return NAMESPACE_IMPORT;
      },
    });
    `},P=(e,B,t)=>{const r=B.lazy?u(m(B.name),[]):m(B.name),{stringSpecifiers:n}=e;return Array.from(B.reexports,(([s,i])=>{let a=p(r);"default"===i&&"node-default"===B.interop||(a=n.has(i)?A(a,E(i),!0):A(a,m(i)));const o={EXPORTS:e.exportName,EXPORT_NAME:s,NAMESPACE_IMPORT:a};return t||y(a)?n.has(s)?T.constantComputed(o):T.constant(o):T.spec(o)}))},D={computed:s.default.expression`EXPORTS["NAME"] = VALUE`,default:s.default.expression`EXPORTS.NAME = VALUE`};function I(e,B,t){const{stringSpecifiers:r,exportName:n}=e;return h(B.reduce(((e,B)=>{const t={EXPORTS:n,NAME:B,VALUE:e};return r.has(B)?D.computed(t):D.default(t)}),t))}},56368:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B,{importInterop:t,initializeReexports:n=!1,lazy:a=!1,esNamespaceOnly:c=!1}){B||(B=e.scope.generateUidIdentifier("exports").name);const u=new Set;!function(e){e.get("body").forEach((e=>{e.isExportDefaultDeclaration()&&(0,s.default)(e)}))}(e);const{local:p,source:d,hasExports:f}=function(e,{lazy:B,initializeReexports:t},n){const s=function(e,B,t){const r=new Map;e.get("body").forEach((e=>{let t;if(e.isImportDeclaration())t="import";else{if(e.isExportDefaultDeclaration()&&(e=e.get("declaration")),e.isExportNamedDeclaration())if(e.node.declaration)e=e.get("declaration");else if(B&&e.node.source&&e.get("source").isStringLiteral())return void e.get("specifiers").forEach((e=>{l(e),r.set(e.get("local").node.name,"block")}));if(e.isFunctionDeclaration())t="hoisted";else if(e.isClassDeclaration())t="block";else if(e.isVariableDeclaration({kind:"var"}))t="var";else{if(!e.isVariableDeclaration())return;t="block"}}Object.keys(e.getOuterBindingIdentifiers()).forEach((e=>{r.set(e,t)}))}));const n=new Map,s=e=>{const B=e.node.name;let t=n.get(B);if(!t){const s=r.get(B);if(void 0===s)throw e.buildCodeFrameError(`Exporting local "${B}", which is not declared.`);t={names:[],kind:s},n.set(B,t)}return t};return e.get("body").forEach((e=>{if(!e.isExportNamedDeclaration()||!B&&e.node.source){if(e.isExportDefaultDeclaration()){const B=e.get("declaration");if(!B.isFunctionDeclaration()&&!B.isClassDeclaration())throw B.buildCodeFrameError("Unexpected default expression export.");s(B.get("id")).names.push("default")}}else if(e.node.declaration){const B=e.get("declaration"),t=B.getOuterBindingIdentifierPaths();Object.keys(t).forEach((e=>{if("__esModule"===e)throw B.buildCodeFrameError('Illegal export "__esModule".');s(t[e]).names.push(e)}))}else e.get("specifiers").forEach((e=>{const B=e.get("local"),r=e.get("exported"),n=s(B),i=C(r,t);if("__esModule"===i)throw r.buildCodeFrameError('Illegal export "__esModule".');n.names.push(i)}))})),n}(e,t,n),a=new Map,o=B=>{const t=B.value;let n=a.get(t);return n||(n={name:e.scope.generateUidIdentifier((0,r.basename)(t,(0,r.extname)(t))).name,interop:"none",loc:null,imports:new Map,importsNamespace:new Set,reexports:new Map,reexportNamespace:new Set,reexportAll:null,lazy:!1,source:t},a.set(t,n)),n};let c=!1;e.get("body").forEach((e=>{if(e.isImportDeclaration()){const B=o(e.node.source);B.loc||(B.loc=e.node.loc),e.get("specifiers").forEach((e=>{if(e.isImportDefaultSpecifier()){const t=e.get("local").node.name;B.imports.set(t,"default");const r=s.get(t);r&&(s.delete(t),r.names.forEach((e=>{B.reexports.set(e,"default")})))}else if(e.isImportNamespaceSpecifier()){const t=e.get("local").node.name;B.importsNamespace.add(t);const r=s.get(t);r&&(s.delete(t),r.names.forEach((e=>{B.reexportNamespace.add(e)})))}else if(e.isImportSpecifier()){const t=C(e.get("imported"),n),r=e.get("local").node.name;B.imports.set(r,t);const i=s.get(r);i&&(s.delete(r),i.names.forEach((e=>{B.reexports.set(e,t)})))}}))}else if(e.isExportAllDeclaration()){c=!0;const B=o(e.node.source);B.loc||(B.loc=e.node.loc),B.reexportAll={loc:e.node.loc}}else if(e.isExportNamedDeclaration()&&e.node.source){c=!0;const B=o(e.node.source);B.loc||(B.loc=e.node.loc),e.get("specifiers").forEach((e=>{l(e);const t=C(e.get("local"),n),r=C(e.get("exported"),n);if(B.reexports.set(r,t),"__esModule"===r)throw e.get("exported").buildCodeFrameError('Illegal export "__esModule".')}))}else(e.isExportNamedDeclaration()||e.isExportDefaultDeclaration())&&(c=!0)}));for(const e of a.values()){let B=!1,t=!1;e.importsNamespace.size>0&&(B=!0,t=!0),e.reexportAll&&(t=!0);for(const r of e.imports.values())"default"===r?B=!0:t=!0;for(const r of e.reexports.values())"default"===r?B=!0:t=!0;B&&t?e.interop="namespace":B&&(e.interop="default")}for(const[e,t]of a)if(!1!==B&&!i(t)&&!t.reexportAll)if(!0===B)t.lazy=!/\./.test(e);else if(Array.isArray(B))t.lazy=-1!==B.indexOf(e);else{if("function"!=typeof B)throw new Error(".lazy must be a boolean, string array, or function");t.lazy=B(e)}return{hasExports:c,local:s,source:a}}(e,{initializeReexports:n,lazy:a},u);!function(e){e.get("body").forEach((e=>{if(e.isImportDeclaration())e.remove();else if(e.isExportNamedDeclaration())e.node.declaration?(e.node.declaration._blockHoist=e.node._blockHoist,e.replaceWith(e.node.declaration)):e.remove();else if(e.isExportDefaultDeclaration()){const B=e.get("declaration");if(!B.isFunctionDeclaration()&&!B.isClassDeclaration())throw B.buildCodeFrameError("Unexpected default expression export.");B._blockHoist=e.node._blockHoist,e.replaceWith(B)}else e.isExportAllDeclaration()&&e.remove()}))}(e);for(const[,e]of d){e.importsNamespace.size>0&&(e.name=e.importsNamespace.values().next().value);const B=o(t,e.source);"none"===B?e.interop="none":"node"===B&&"namespace"===e.interop?e.interop="node-namespace":"node"===B&&"default"===e.interop?e.interop="node-default":c&&"namespace"===e.interop&&(e.interop="default")}return{exportName:B,exportNameListName:null,hasExports:f,local:p,source:d,stringSpecifiers:u}},B.hasExports=function(e){return e.hasExports},B.isSideEffectImport=i,B.validateImportInteropOption=a;var r=t(71017),n=t(40720),s=t(34170);function i(e){return 0===e.imports.size&&0===e.importsNamespace.size&&0===e.reexports.size&&0===e.reexportNamespace.size&&!e.reexportAll}function a(e){if("function"!=typeof e&&"none"!==e&&"babel"!==e&&"node"!==e)throw new Error(`.importInterop must be one of "none", "babel", "node", or a function returning one of those values (received ${e}).`);return e}function o(e,B){return"function"==typeof e?a(e(B)):e}function C(e,B){if(e.isIdentifier())return e.node.name;if(e.isStringLiteral()){const t=e.node.value;return(0,n.isIdentifierName)(t)||B.add(t),t}throw new Error(`Expected export specifier to be either Identifier or StringLiteral, got ${e.node.type}`)}function l(e){if(!e.isExportSpecifier())throw e.isExportNamespaceSpecifier()?e.buildCodeFrameError("Export namespace should be first transformed by `@babel/plugin-proposal-export-namespace-from`."):e.buildCodeFrameError("Unexpected export specifier type")}},77500:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B){const t=new Map,r=new Map,n=B=>{e.requeue(B)};for(const[e,r]of B.source){for(const[B,n]of r.imports)t.set(B,[e,n,null]);for(const B of r.importsNamespace)t.set(B,[e,null,B])}for(const[e,t]of B.local){let B=r.get(e);B||(B=[],r.set(e,B)),B.push(...t.names)}const s={metadata:B,requeueInParent:n,scope:e.scope,exported:r};e.traverse(b,s),(0,i.default)(e,new Set([...Array.from(t.keys()),...Array.from(r.keys())]));const a={seen:new WeakSet,metadata:B,requeueInParent:n,scope:e.scope,imported:t,exported:r,buildImportReference:([e,t,r],n)=>{const s=B.source.get(e);if(r)return s.lazy&&(n=o(n,[])),n;let i=u(s.name);if(s.lazy&&(i=o(i,[])),"default"===t&&"node-default"===s.interop)return i;const a=B.stringSpecifiers.has(t);return m(i,a?E(t):u(t),a)}};e.traverse(D,a)};var r=t(39491),n=t(38218),s=t(94847),i=t(79196);const{assignmentExpression:a,callExpression:o,cloneNode:C,expressionStatement:l,getOuterBindingIdentifiers:c,identifier:u,isMemberExpression:p,isVariableDeclaration:d,jsxIdentifier:f,jsxMemberExpression:h,memberExpression:m,numericLiteral:y,sequenceExpression:A,stringLiteral:E,variableDeclaration:S,variableDeclarator:g}=n,b={Scope(e){e.skip()},ClassDeclaration(e){const{requeueInParent:B,exported:t,metadata:r}=this,{id:n}=e.node;if(!n)throw new Error("Expected class to have a name");const s=n.name,i=t.get(s)||[];if(i.length>0){const t=l(T(r,i,u(s)));t._blockHoist=e.node._blockHoist,B(e.insertAfter(t)[0])}},VariableDeclaration(e){const{requeueInParent:B,exported:t,metadata:r}=this;Object.keys(e.getOuterBindingIdentifiers()).forEach((n=>{const s=t.get(n)||[];if(s.length>0){const t=l(T(r,s,u(n)));t._blockHoist=e.node._blockHoist,B(e.insertAfter(t)[0])}}))}},T=(e,B,t)=>(B||[]).reduce(((B,t)=>{const{stringSpecifiers:r}=e,n=r.has(t);return a("=",m(u(e.exportName),n?E(t):u(t),n),B)}),t),P=e=>s.default.expression.ast`
    (function() {
      throw new Error('"' + '${e}' + '" is read-only.');
    })()
  `,D={ReferencedIdentifier(e){const{seen:B,buildImportReference:t,scope:r,imported:n,requeueInParent:s}=this;if(B.has(e.node))return;B.add(e.node);const i=e.node.name,a=n.get(i);if(a){if(function(e){do{switch(e.parent.type){case"TSTypeAnnotation":case"TSTypeAliasDeclaration":case"TSTypeReference":case"TypeAnnotation":case"TypeAlias":return!0;case"ExportSpecifier":return"type"===e.parentPath.parent.exportKind;default:if(e.parentPath.isStatement()||e.parentPath.isExpression())return!1}}while(e=e.parentPath)}(e))throw e.buildCodeFrameError(`Cannot transform the imported binding "${i}" since it's also used in a type annotation. Please strip type annotations using @babel/preset-typescript or @babel/preset-flow.`);const B=e.scope.getBinding(i);if(r.getBinding(i)!==B)return;const n=t(a,e.node);if(n.loc=e.node.loc,(e.parentPath.isCallExpression({callee:e.node})||e.parentPath.isOptionalCallExpression({callee:e.node})||e.parentPath.isTaggedTemplateExpression({tag:e.node}))&&p(n))e.replaceWith(A([y(0),n]));else if(e.isJSXIdentifier()&&p(n)){const{object:B,property:t}=n;e.replaceWith(h(f(B.name),f(t.name)))}else e.replaceWith(n);s(e),e.skip()}},AssignmentExpression:{exit(e){const{scope:B,seen:t,imported:n,exported:s,requeueInParent:i,buildImportReference:a}=this;if(t.has(e.node))return;t.add(e.node);const o=e.get("left");if(!o.isMemberExpression())if(o.isIdentifier()){const t=o.node.name;if(B.getBinding(t)!==e.scope.getBinding(t))return;const C=s.get(t),l=n.get(t);if((null==C?void 0:C.length)>0||l){r("="===e.node.operator,"Path was not simplified");const B=e.node;l&&(B.left=a(l,B.left),B.right=A([B.right,P(t)])),e.replaceWith(T(this.metadata,C,B)),i(e)}}else{const t=o.getOuterBindingIdentifiers(),r=Object.keys(t).filter((t=>B.getBinding(t)===e.scope.getBinding(t))),a=r.find((e=>n.has(e)));a&&(e.node.right=A([e.node.right,P(a)]));const C=[];if(r.forEach((e=>{const B=s.get(e)||[];B.length>0&&C.push(T(this.metadata,B,u(e)))})),C.length>0){let B=A(C);e.parentPath.isExpressionStatement()&&(B=l(B),B._blockHoist=e.parentPath.node._blockHoist),i(e.insertAfter(B)[0])}}}},"ForOfStatement|ForInStatement"(e){const{scope:B,node:t}=e,{left:r}=t,{exported:n,imported:s,scope:i}=this;if(!d(r)){let t,o=!1;const u=e.get("body").scope;for(const e of Object.keys(c(r)))i.getBinding(e)===B.getBinding(e)&&(n.has(e)&&(o=!0,u.hasOwnBinding(e)&&u.rename(e)),s.has(e)&&!t&&(t=e));if(!o&&!t)return;e.ensureBlock();const p=e.get("body"),d=B.generateUidIdentifierBasedOnNode(r);e.get("left").replaceWith(S("let",[g(C(d))])),B.registerDeclaration(e.get("left")),o&&p.unshiftContainer("body",l(a("=",r,d))),t&&p.unshiftContainer("body",l(P(t)))}}}},40333:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){(0,n.default)(e.node,Object.assign({},o,{noScope:!0}))};var r=t(31692),n=t(49838),s=t(38218);const{numericLiteral:i,unaryExpression:a}=s,o=n.default.visitors.merge([r.default,{ThisExpression(e){e.replaceWith(a("void",i(0),!0))}}])},79196:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e,B){e.traverse(p,{scope:e.scope,bindingNames:B,seen:new WeakSet})};var r=t(38218);const{LOGICAL_OPERATORS:n,assignmentExpression:s,binaryExpression:i,cloneNode:a,identifier:o,logicalExpression:C,numericLiteral:l,sequenceExpression:c,unaryExpression:u}=r,p={UpdateExpression:{exit(e){const{scope:B,bindingNames:t}=this,r=e.get("argument");if(!r.isIdentifier())return;const n=r.node.name;if(t.has(n)&&B.getBinding(n)===e.scope.getBinding(n))if(e.parentPath.isExpressionStatement()&&!e.isCompletionRecord()){const B="++"==e.node.operator?"+=":"-=";e.replaceWith(s(B,r.node,l(1)))}else if(e.node.prefix)e.replaceWith(s("=",o(n),i(e.node.operator[0],u("+",r.node),l(1))));else{const B=e.scope.generateUidIdentifierBasedOnNode(r.node,"old"),t=B.name;e.scope.push({id:B});const n=i(e.node.operator[0],o(t),l(1));e.replaceWith(c([s("=",o(t),u("+",r.node)),s("=",a(r.node),n),o(t)]))}}},AssignmentExpression:{exit(e){const{scope:B,seen:t,bindingNames:r}=this;if("="===e.node.operator)return;if(t.has(e.node))return;t.add(e.node);const o=e.get("left");if(!o.isIdentifier())return;const l=o.node.name;if(!r.has(l))return;if(B.getBinding(l)!==e.scope.getBinding(l))return;const c=e.node.operator.slice(0,-1);n.includes(c)?e.replaceWith(C(c,e.node.left,s("=",a(e.node.left),e.node.right))):(e.node.right=i(c,a(e.node.left),e.node.right),e.node.operator="=")}}}},34170:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){if(!e.isExportDeclaration())throw new Error("Only export declarations can be split.");const B=e.isExportDefaultDeclaration(),t=e.get("declaration"),r=t.isClassDeclaration();if(B){const B=t.isFunctionDeclaration()||r,l=t.isScope()?t.scope.parent:t.scope;let c=t.node.id,u=!1;c||(u=!0,c=l.generateUidIdentifier("default"),(B||t.isFunctionExpression()||t.isClassExpression())&&(t.node.id=n(c)));const p=B?t:o("var",[C(n(c),t.node)]),d=s(null,[i(n(c),a("default"))]);return e.insertAfter(d),e.replaceWith(p),u&&l.registerDeclaration(e),e}if(e.get("specifiers").length>0)throw new Error("It doesn't make sense to split exported specifiers.");const l=t.getOuterBindingIdentifiers(),c=Object.keys(l).map((e=>i(a(e),a(e)))),u=s(null,c);return e.insertAfter(u),e.replaceWith(t.node),e};var r=t(38218);const{cloneNode:n,exportNamedDeclaration:s,exportSpecifier:i,identifier:a,variableDeclaration:o,variableDeclarator:C}=r},33306:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.isIdentifierChar=l,B.isIdentifierName=function(e){let B=!0;for(let t=0;t<e.length;t++){let r=e.charCodeAt(t);if(55296==(64512&r)&&t+1<e.length){const B=e.charCodeAt(++t);56320==(64512&B)&&(r=65536+((1023&r)<<10)+(1023&B))}if(B){if(B=!1,!C(r))return!1}else if(!l(r))return!1}return!B},B.isIdentifierStart=C;let t="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",r="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";const n=new RegExp("["+t+"]"),s=new RegExp("["+t+r+"]");t=r=null;const i=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,13,10,2,14,2,6,2,1,2,10,2,14,2,6,2,1,68,310,10,21,11,7,25,5,2,41,2,8,70,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,349,41,7,1,79,28,11,0,9,21,43,17,47,20,28,22,13,52,58,1,3,0,14,44,33,24,27,35,30,0,3,0,9,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,2,31,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,38,6,186,43,117,63,32,7,3,0,3,7,2,1,2,23,16,0,2,0,95,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,19,72,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,190,0,80,921,103,110,18,195,2637,96,16,1070,4050,582,8634,568,8,30,18,78,18,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,1237,43,8,8936,3,2,6,2,1,2,290,46,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,1845,30,482,44,11,6,17,0,322,29,19,43,1269,6,2,3,2,1,2,14,2,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42719,33,4152,8,221,3,5761,15,7472,3104,541,1507,4938],a=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,370,1,154,10,50,3,123,2,54,14,32,10,3,1,11,3,46,10,8,0,46,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,2,11,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,71,5,2,1,3,3,2,0,2,1,13,9,120,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,87,9,39,4,60,6,26,9,1014,0,2,54,8,3,82,0,12,1,19628,1,4706,45,3,22,543,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,357,0,62,13,1495,6,110,6,6,9,4759,9,787719,239];function o(e,B){let t=65536;for(let r=0,n=B.length;r<n;r+=2){if(t+=B[r],t>e)return!1;if(t+=B[r+1],t>=e)return!0}return!1}function C(e){return e<65?36===e:e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&n.test(String.fromCharCode(e)):o(e,i)))}function l(e){return e<48?36===e:e<58||!(e<65)&&(e<=90||(e<97?95===e:e<=122||(e<=65535?e>=170&&s.test(String.fromCharCode(e)):o(e,i)||o(e,a))))}},40720:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),Object.defineProperty(B,"isIdentifierChar",{enumerable:!0,get:function(){return r.isIdentifierChar}}),Object.defineProperty(B,"isIdentifierName",{enumerable:!0,get:function(){return r.isIdentifierName}}),Object.defineProperty(B,"isIdentifierStart",{enumerable:!0,get:function(){return r.isIdentifierStart}}),Object.defineProperty(B,"isKeyword",{enumerable:!0,get:function(){return n.isKeyword}}),Object.defineProperty(B,"isReservedWord",{enumerable:!0,get:function(){return n.isReservedWord}}),Object.defineProperty(B,"isStrictBindOnlyReservedWord",{enumerable:!0,get:function(){return n.isStrictBindOnlyReservedWord}}),Object.defineProperty(B,"isStrictBindReservedWord",{enumerable:!0,get:function(){return n.isStrictBindReservedWord}}),Object.defineProperty(B,"isStrictReservedWord",{enumerable:!0,get:function(){return n.isStrictReservedWord}});var r=t(33306),n=t(12887)},12887:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.isKeyword=function(e){return t.has(e)},B.isReservedWord=s,B.isStrictBindOnlyReservedWord=a,B.isStrictBindReservedWord=function(e,B){return i(e,B)||a(e)},B.isStrictReservedWord=i;const t=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"]),r=new Set(["implements","interface","let","package","private","protected","public","static","yield"]),n=new Set(["eval","arguments"]);function s(e,B){return B&&"await"===e||"enum"===e}function i(e,B){return s(e,B)||r.has(e)}function a(e){return n.has(e)}},14401:(e,B)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.findSuggestion=function(e,B){const r=B.map((B=>function(e,B){let r,n,s=[],i=[];const a=e.length,o=B.length;if(!a)return o;if(!o)return a;for(n=0;n<=o;n++)s[n]=n;for(r=1;r<=a;r++){for(i=[r],n=1;n<=o;n++)i[n]=e[r-1]===B[n-1]?s[n-1]:t(s[n-1],s[n],i[n-1])+1;s=i}return i[o]}(B,e)));return B[r.indexOf(t(...r))]};const{min:t}=Math},54346:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),Object.defineProperty(B,"OptionValidator",{enumerable:!0,get:function(){return r.OptionValidator}}),Object.defineProperty(B,"findSuggestion",{enumerable:!0,get:function(){return n.findSuggestion}});var r=t(86834),n=t(14401)},86834:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.OptionValidator=void 0;var r=t(14401);B.OptionValidator=class{constructor(e){this.descriptor=e}validateTopLevelOptions(e,B){const t=Object.keys(B);for(const B of Object.keys(e))if(!t.includes(B))throw new Error(this.formatMessage(`'${B}' is not a valid top-level option.\n- Did you mean '${(0,r.findSuggestion)(B,t)}'?`))}validateBooleanOption(e,B,t){return void 0===B?t:(this.invariant("boolean"==typeof B,`'${e}' option must be a boolean.`),B)}validateStringOption(e,B,t){return void 0===B?t:(this.invariant("string"==typeof B,`'${e}' option must be a string.`),B)}invariant(e,B){if(!e)throw new Error(this.formatMessage(B))}formatMessage(e){return`${this.descriptor}: ${e}`}}},93281:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var r=t(94847);function n(e,B){return Object.freeze({minVersion:e,ast:()=>r.default.program.ast(B)})}var s=Object.freeze({asyncIterator:n("7.15.9",'export default function _asyncIterator(iterable){var method,async,sync,retry=2;for("undefined"!=typeof Symbol&&(async=Symbol.asyncIterator,sync=Symbol.iterator);retry--;){if(async&&null!=(method=iterable[async]))return method.call(iterable);if(sync&&null!=(method=iterable[sync]))return new AsyncFromSyncIterator(method.call(iterable));async="@@asyncIterator",sync="@@iterator"}throw new TypeError("Object is not async iterable")}function AsyncFromSyncIterator(s){function AsyncFromSyncIteratorContinuation(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var done=r.done;return Promise.resolve(r.value).then((function(value){return{value:value,done:done}}))}return AsyncFromSyncIterator=function(s){this.s=s,this.n=s.next},AsyncFromSyncIterator.prototype={s:null,n:null,next:function(){return AsyncFromSyncIteratorContinuation(this.n.apply(this.s,arguments))},return:function(value){var ret=this.s.return;return void 0===ret?Promise.resolve({value:value,done:!0}):AsyncFromSyncIteratorContinuation(ret.apply(this.s,arguments))},throw:function(value){var thr=this.s.return;return void 0===thr?Promise.reject(value):AsyncFromSyncIteratorContinuation(thr.apply(this.s,arguments))}},new AsyncFromSyncIterator(s)}'),jsx:n("7.0.0-beta.0",'var REACT_ELEMENT_TYPE;export default function _createRawReactElement(type,props,key,children){REACT_ELEMENT_TYPE||(REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var defaultProps=type&&type.defaultProps,childrenLength=arguments.length-3;if(props||0===childrenLength||(props={children:void 0}),1===childrenLength)props.children=children;else if(childrenLength>1){for(var childArray=new Array(childrenLength),i=0;i<childrenLength;i++)childArray[i]=arguments[i+3];props.children=childArray}if(props&&defaultProps)for(var propName in defaultProps)void 0===props[propName]&&(props[propName]=defaultProps[propName]);else props||(props=defaultProps||{});return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:void 0===key?null:""+key,ref:null,props:props,_owner:null}}'),objectSpread2:n("7.5.0",'import defineProperty from"defineProperty";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}export default function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}'),typeof:n("7.0.0-beta.0",'export default function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}'),wrapRegExp:n("7.2.6",'import setPrototypeOf from"setPrototypeOf";import inherits from"inherits";export default function _wrapRegExp(){_wrapRegExp=function(re,groups){return new BabelRegExp(re,void 0,groups)};var _super=RegExp.prototype,_groups=new WeakMap;function BabelRegExp(re,flags,groups){var _this=new RegExp(re,flags);return _groups.set(_this,groups||_groups.get(re)),setPrototypeOf(_this,BabelRegExp.prototype)}function buildGroups(result,re){var g=_groups.get(re);return Object.keys(g).reduce((function(groups,name){return groups[name]=result[g[name]],groups}),Object.create(null))}return inherits(BabelRegExp,RegExp),BabelRegExp.prototype.exec=function(str){var result=_super.exec.call(this,str);return result&&(result.groups=buildGroups(result,this)),result},BabelRegExp.prototype[Symbol.replace]=function(str,substitution){if("string"==typeof substitution){var groups=_groups.get(this);return _super[Symbol.replace].call(this,str,substitution.replace(/\\$<([^>]+)>/g,(function(_,name){return"$"+groups[name]})))}if("function"==typeof substitution){var _this=this;return _super[Symbol.replace].call(this,str,(function(){var args=arguments;return"object"!=typeof args[args.length-1]&&(args=[].slice.call(args)).push(buildGroups(args,_this)),substitution.apply(this,args)}))}return _super[Symbol.replace].call(this,str,substitution)},_wrapRegExp.apply(this,arguments)}')});B.default=s},59591:(e,B,t)=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0}),B.default=void 0;var r=t(94847),n=t(93281);const s=Object.assign({__proto__:null},n.default);var i=s;B.default=i;const a=e=>B=>({minVersion:e,ast:()=>r.default.program.ast(B)});s.AwaitValue=a("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,s.AsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  AsyncGenerator.prototype[typeof Symbol === "function" && Symbol.asyncIterator || "@@asyncIterator"] = function () { return this; };

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,s.wrapAsyncGenerator=a("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,s.awaitAsyncGenerator=a("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,s.asyncGeneratorDelegate=a("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    iter[typeof Symbol !== "undefined" && Symbol.iterator || "@@iterator"] = function () { return this; };

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,s.asyncToGenerator=a("7.0.0-beta.0")`
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }
`,s.classCallCheck=a("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,s.createClass=a("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
`,s.defineEnumerableProperties=a("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,s.defaults=a("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,s.defineProperty=a("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,s.extends=a("7.0.0-beta.0")`
  export default function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

    return _extends.apply(this, arguments);
  }
`,s.objectSpread=a("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,s.inherits=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    // We can't use defineProperty to set the prototype in a single step because it
    // doesn't work in Chrome <= 36. https://github.com/babel/babel/issues/14056
    // V8 bug: https://bugs.chromium.org/p/v8/issues/detail?id=3334
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,s.inheritsLoose=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    setPrototypeOf(subClass, superClass);
  }
`,s.getPrototypeOf=a("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,s.setPrototypeOf=a("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,s.isNativeReflectConstruct=a("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Boolean object.

      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,s.construct=a("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,s.isNativeFunction=a("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,s.wrapNativeSuper=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,s.instanceof=a("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,s.interopRequireDefault=a("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,s.interopRequireWildcard=a("7.14.0")`
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  export default function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,s.newArrowCheck=a("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,s.objectDestructuringEmpty=a("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,s.objectWithoutPropertiesLoose=a("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};

    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }
`,s.objectWithoutProperties=a("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,s.assertThisInitialized=a("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,s.possibleConstructorReturn=a("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }
`,s.createSuper=a("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,s.superPropBase=a("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,s.get=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          // STEP 3. If receiver is not present, then set receiver to target.
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }

        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
`,s.set=a("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,s.taggedTemplateLiteral=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,s.taggedTemplateLiteralLoose=a("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,s.readOnlyError=a("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is read-only");
  }
`,s.writeOnlyError=a("7.12.13")`
  export default function _writeOnlyError(name) {
    throw new TypeError("\\"" + name + "\\" is write-only");
  }
`,s.classNameTDZError=a("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,s.temporalUndefined=a("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,s.tdz=a("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,s.temporalRef=a("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,s.slicedToArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.slicedToArrayLoose=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.toArray=a("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,s.toConsumableArray=a("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,s.arrayWithoutHoles=a("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,s.arrayWithHoles=a("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,s.maybeArrayLike=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
    }
    return next(arr, i);
  }
`,s.iterableToArray=a("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
`,s.iterableToArrayLimit=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,s.iterableToArrayLimitLoose=a("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null) return;

    var _arr = [];
    for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,s.unsupportedIterableToArray=a("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,s.arrayLikeToArray=a("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,s.nonIterableSpread=a("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.nonIterableRest=a("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.createForOfIteratorHelper=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      // Fallback for engines without symbol support
      if (
        Array.isArray(o) ||
        (it = unsupportedIterableToArray(o)) ||
        (allowArrayLike && o && typeof o.length === "number")
      ) {
        if (it) o = it;
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = it.call(o);
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,s.createForOfIteratorHelperLoose=a("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (it) return (it = it.call(o)).next.bind(it);

    // Fallback for engines without symbol support
    if (
      Array.isArray(o) ||
      (it = unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === "number")
    ) {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
`,s.skipFirstGeneratorNext=a("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,s.toPrimitive=a("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,s.toPropertyKey=a("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,s.initializerWarningHelper=a("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,s.initializerDefineProperty=a("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,s.applyDecoratedDescriptor=a("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,s.classPrivateFieldLooseKey=a("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,s.classPrivateFieldLooseBase=a("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,s.classPrivateFieldGet=a("7.0.0-beta.0")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classPrivateFieldSet=a("7.0.0-beta.0")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classPrivateFieldDestructureSet=a("7.4.4")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classExtractFieldDescriptor from "classExtractFieldDescriptor";
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classExtractFieldDescriptor=a("7.13.10")`
  export default function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
`,s.classStaticPrivateFieldSpecGet=a("7.0.2")`
  import classApplyDescriptorGet from "classApplyDescriptorGet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return classApplyDescriptorGet(receiver, descriptor);
  }
`,s.classStaticPrivateFieldSpecSet=a("7.0.2")`
  import classApplyDescriptorSet from "classApplyDescriptorSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
`,s.classStaticPrivateMethodGet=a("7.3.2")`
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
`,s.classStaticPrivateMethodSet=a("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,s.classApplyDescriptorGet=a("7.13.10")`
  export default function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classApplyDescriptorSet=a("7.13.10")`
  export default function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
`,s.classApplyDescriptorDestructureSet=a("7.13.10")`
  export default function _classApplyDescriptorDestructureSet(receiver, descriptor) {
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,s.classStaticPrivateFieldDestructureSet=a("7.13.10")`
  import classApplyDescriptorDestructureSet from "classApplyDescriptorDestructureSet";
  import classCheckPrivateStaticAccess from "classCheckPrivateStaticAccess";
  import classCheckPrivateStaticFieldDescriptor from "classCheckPrivateStaticFieldDescriptor";
  export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    classCheckPrivateStaticAccess(receiver, classConstructor);
    classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    return classApplyDescriptorDestructureSet(receiver, descriptor);
  }
`,s.classCheckPrivateStaticAccess=a("7.13.10")`
  export default function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
`,s.classCheckPrivateStaticFieldDescriptor=a("7.13.10")`
  export default function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
`,s.decorate=a("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,s.classPrivateMethodGet=a("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,s.checkPrivateRedeclaration=a("7.14.1")`
  export default function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
`,s.classPrivateFieldInitSpec=a("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateFieldInitSpec(obj, privateMap, value) {
    checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
`,s.classPrivateMethodInitSpec=a("7.14.1")`
  import checkPrivateRedeclaration from "checkPrivateRedeclaration";

  export default function _classPrivateMethodInitSpec(obj, privateSet) {
    checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }
`,s.classPrivateMethodSet=a("7.1.6")`
    export default function _classPrivateMethodSet() {
      throw new TypeError("attempted to reassign private method");
    }