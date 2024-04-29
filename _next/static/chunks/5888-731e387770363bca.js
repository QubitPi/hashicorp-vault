(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5888],{5888:function(e,t,o){"use strict";o.d(t,{ZP:function(){return E}});var a=o(85893),r=o(67294),s=o(75973),n=o(93967),l=o.n(n),i=o(98399);function c(e){let{mdxType:t,...o}=e.props,a=("pre"===t?o.className:"CodeBlockConfig"==t?o.children.props.className:"language-".concat(o.language)).split("-")[1],r=(0,i.getCanonicalSlug)(a)||a;return{group:r,label:(0,i.getLanguageName)(r)||r.charAt(0).toUpperCase()+r.substr(1).toLowerCase()}}var p=o(71658),d=function(e){var t;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(t=e.length-1,o!=o?o:o<=0?0:o>=t?t:o),[s,n]=(0,r.useState)(a),{activeTabGroup:l,setActiveTabGroup:i,preferredTabGroups:c}=(0,p.m$)()||{};return(0,r.useEffect)(()=>{e.filter(Boolean).length},[]),(0,r.useEffect)(()=>{if(void 0===l)return;let t=e[s];if(null==l){let t=e.reduce((e,t,o)=>{let a=c.indexOf(t);return -1==a?e:null==e.preferenceIdx||a<e.preferenceIdx?{preferenceIdx:a,tabIdx:o}:e},{preferenceIdx:null,tabIdx:null}).tabIdx;if(null!==t)return n(t)}else if(t!==l){let t=e.findIndex(e=>e==l);if(-1!==t)return n(t)}},[l,c]),[s,function(t){n(t);let o=e[t];o&&i&&i(o)},l,i]},u=o(62164),m=o.n(u),h=function(e){let{tabLabels:t,setActiveTabIdx:o,hasHeading:r}=e;return(0,a.jsx)("div",{className:l()(m().tabsAsDropdown,{[m().hasHeading]:r}),children:(0,a.jsx)("select",{className:m().listboxButton,onChange:e=>o(parseInt(e.target.value,10)),children:t.map((e,t)=>(0,a.jsx)("option",{value:t,children:e},e))})})},g=o(96341),f=o.n(g),b=function(e){let{tabLabels:t,activeTabIdx:o,setActiveTabIdx:r,hasHeading:s}=e;return(0,a.jsx)("div",{className:l()(f().tabsAsTabs,{[f().hasHeading]:s}),children:t.map((e,t)=>{let n=t==o;return(0,a.jsx)("button",{className:l()(f().tabControl,{[f().isActive]:n},{[f().hasHeading]:s}),onClick:()=>r(t),children:e},t)})})},y=function(e){return"string"!=typeof e?e:e.replace(/\n$/,"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},x=function(e){let{className:t,children:o,filename:n,heading:l,hideClipboard:i,highlight:c,lineNumbers:p,hasBarAbove:d,theme:u}=e,m=r.Children.toArray(o),h=r.Children.count(o);if(1!==h||1!==m.length)throw Error("In CodeBlockConfig, found ".concat(h," total children and ").concat(m.length," valid children. Please ensure that CodeBlockConfig has exactly one child element, and ensure it is a valid element."));let g=m[0],f=g.props.mdxType||("string"==typeof g.type?g.type:g.type.name);if("pre"!==f&&"themedPre"!==f)throw Error('In CodeBlockConfig, found a child with type "'.concat(f,'". Please ensure a fenced code block, which corresponds to the MDX type "pre", is passed to CodeBlockConfig instead. In JSX, please use CodeBlock directly rather than CodeBlockConfig.'));let b=g.props.className,x=b?b.replace("language-",""):void 0,v=y(g.props.children.props.children);return(0,a.jsx)(s.Z,{className:t,code:v,language:x,theme:u,hasBarAbove:d,options:{filename:n,highlight:c,heading:l,lineNumbers:p,showClipboard:!i}})};let v=window.MutationObserver||null,k={attributes:!0,childList:!0,subtree:!0};var S=function(e){let{render:t}=e,[o,s]=function(){let[[e,t],o]=(0,r.useState)([!1,0]),a=(0,r.useCallback)(a=>{let r,s,n;if(a){if((r=a.ownerDocument.defaultView).addEventListener("resize",l),v){(n=new v(l)).observe(a,k);let e=a.closest('[role="tabpanel"]');e&&n.observe(e,k)}return l(),c}function l(){s||(s=requestAnimationFrame(i))}function i(){s=null;let r=a.scrollWidth,n=(t||r)>a.offsetWidth;e!==n&&(c(),o([n,r]))}function c(){cancelAnimationFrame(s),r.removeEventListener("resize",l),v&&n.disconnect()}},[e,t]);return[e,a]}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:"0px",overflow:"hidden",visibility:"hidden"},role:"presentation","aria-hidden":!0,children:t({hasOverflow:!1},s)}),t({hasOverflow:o})]})},j=o(90278),C=o.n(j),w=o(32895),_=o.n(w),L=o(29938),A=o.n(L),P=o(73894),T=function(e){let{children:t,heading:o,className:n,tabs:i,theme:p="dark"}=e,u=r.Children.toArray(t);if(void 0!==i&&i.length!==u.length)throw Error("In CodeTabs, the tabs array length must match the number of children. Found mismatched tabs length ".concat(i.length," and children length ").concat(u.length,". Please adjust the tabs prop or the number of children to resolve this issue."));let m=u.map(e=>{var t;let o;if("string"==typeof e.type||"number"==typeof e.type)o=e.type;else if("function"==typeof e.type){let t=[{component:s.Z,name:"CodeBlock"},{component:x,name:"CodeBlockConfig"}],a=t.map(e=>e.component).indexOf(e.type);o=a>=0?t[a].name:"Unrecognized component"}return"string"==typeof(null===(t=e.props)||void 0===t?void 0:t.mdxType)&&(o=e.props.mdxType),o}),g=["CodeBlock","CodeBlockConfig","pre","themedCodeBlockConfig","themedPre"];if(m.filter(e=>-1===g.indexOf(e)).length)throw Error('CodeTabs only accepts "CodeBlock", "CodeBlockConfig", or "pre" children. Found children with types: '.concat(JSON.stringify(m)));let f=u.map(c).map((e,t)=>{if(!(void 0!==i))return e;let o="string"==typeof i[t]?{label:i[t]}:"object"==typeof i[t]?i[t]:{};return{...e,...o}}),y=f.map(e=>e.group),[v,k]=d(y);function j(e){P.Z.trackTabSelect(y[e]),k(e)}let w=f.map(e=>e.label),L=!!o;return(0,a.jsxs)("div",{className:l()(n,A().root,"dark"==p?C().base:_().base),children:[(0,a.jsx)(S,{render:(e,t)=>{let{hasOverflow:r}=e;return(0,a.jsxs)("div",{ref:t,className:l()(A().topBar),children:[L?(0,a.jsx)("div",{className:l()(A().heading,{[A().hasOverflow]:r}),children:o}):null,r?(0,a.jsx)(h,{tabLabels:w,setActiveTabIdx:j,hasHeading:L}):(0,a.jsx)(b,{tabLabels:w,activeTabIdx:v,setActiveTabIdx:j,hasHeading:L})]})}}),(0,a.jsx)("div",{children:u.map((e,t)=>{let o=t==v,s=r.cloneElement(e,{hasBarAbove:!0,theme:p});return(0,a.jsx)("div",{style:{display:o?"block":"none"},children:s},t)})})]})},B=o(63224),N=o.n(B);let q="dark";function E(){let{theme:e=q}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{CodeBlockConfig:function(t){return function(e){let{theme:t=q,...o}=e;return(0,a.jsx)(x,{className:l()({[N().codeMargin]:!o.hasBarAbove}),...o,theme:t})}({theme:e,...t})},CodeTabs:function(t){return function(e){let{theme:t=q,...o}=e;return(0,a.jsx)(T,{className:N().codeMargin,...o,theme:t})}({theme:e,...t})},pre:function(t){return function(e){let{children:t,className:o,hasBarAbove:n,theme:i=q}=e,c=r.Children.toArray(t);if(1!==c.length)throw Error("Found <pre> element in MDX with more than one child: ".concat(JSON.stringify(c),". Ensure <pre> and fenced code blocks contain text elements only."));let p=c[0];if("code"!==(p.props.mdxType||p.type))throw Error("Found <pre> element in MDX with more non-<code> child: ".concat(JSON.stringify(p),". Ensure <pre> and fenced code blocks contain text elements only."));let d=y(p.props.children),u=p.props.metastring,m=u&&u.includes("hideClipboard"),h=o?o.replace("language-",""):void 0;return(0,a.jsx)(s.Z,{className:l()(o,{[N().codeMargin]:!n}),code:d,language:h,options:{showClipboard:!m},theme:i,hasBarAbove:n})}({theme:e,...t})}}}},98399:function(e,t,o){"use strict";let a=o(18220),r=o(83099);function s(e){return Object.keys(a).reduce((t,o)=>t||(o==e||-1!==a[o].indexOf(e)?o:t),null)}e.exports={syntaxes:a,prettyNames:r,getCanonicalSlug:s,getLanguageName:function(e){let t=r[e];return t?t:r[s(e)]||null}}},63224:function(e){e.exports={codeMargin:"style_codeMargin__flyZr"}},62164:function(e){e.exports={tabsAsDropdown:"style_tabsAsDropdown__4G2wQ",hasHeading:"style_hasHeading__wtKlL",listboxInput:"style_listboxInput__KZ1Ea",listboxButton:"style_listboxButton__c03jx g-type-body-small-strong",dropdownIcon:"style_dropdownIcon__AZHpm",listboxPopover:"style_listboxPopover__O_Mo5",listboxList:"style_listboxList__my2jw",listboxOption:"style_listboxOption__MjHdE g-type-body-small-strong"}},96341:function(e){e.exports={tabsAsTabs:"style_tabsAsTabs__lZ0ce",hasHeading:"style_hasHeading__tsJPr",tabControl:"style_tabControl__A5k2n g-type-body-small-strong",isActive:"style_isActive__AmKFP"}},29938:function(e){e.exports={root:"style_root__Ib9Qn",topBar:"style_topBar__0pZ_b",hasHeading:"style_hasHeading__aC7lF",heading:"style_heading__2_7Zj g-type-body-small-strong",hasOverflow:"style_hasOverflow__hWeXc"}},83099:function(e){"use strict";e.exports=JSON.parse('{"abap":"ABAP","abnf":"ABNF","actionscript":"ActionScript","ada":"Ada","agda":"Agda","al":"AL","antlr4":"ANTLR4","apacheconf":"ApacheConf","apex":"Apex","apl":"APL","applescript":"AppleScript","aql":"AQL","arduino":"Arduino","arff":"ARFF","asciidoc":"AsciiDoc","asm6502":"ASM6502","aspnet":"ASP.NET","autohotkey":"AutoHotkey","autoit":"AutoIt","shell":"Shell","bash":"Bash","basic":"Basic","batch":"Batch","shortcode":"Shortcode","bbcode":"BBCode","birb":"Birb","bison":"Bison","rbnf":"RBNF","bnf":"BNF","brainfuck":"Brainfuck","brightscript":"Brightscript","bro":"Bro","oscript":"Oscript","bsl":"BSL","c":"C","cil":"CIL","clike":"C-like","clojure":"Clojure","cmake":"CMake","coffeescript":"CoffeeScript","concurnas":"Concurnas","cpp":"C++","crystal":"Crystal","dotnet":".NET","csharp":"C#","csp":"CSP","css":"CSS","cypher":"Cypher","d":"D","dart":"Dart","dataweave":"DataWeave","dax":"DAX","dhall":"Dhall","diff":"Diff","jinja2":"Jinja2","django":"Django","dns-zone-file":"DNS Zone","docker":"Docker","ebnf":"EBNF","editorconfig":"EditorConfig","eiffel":"Eiffel","eta":"Eta","ejs":"EJS","elixir":"Elixir","elm":"Elm","erb":"ERB","erlang":"Erlang","etlua":"Lua","excel-formula":"Excel","factor":"Factor","firestore-security-rules":"Firestore Security Rules","flow":"Flow","fortran":"Fortran","fsharp":"F#","ftl":"FTL","gcode":"gcode","gdscript":"GDscript","gedcom":"GEDCOM","gherkin":"Gherkin","git":"Git","glsl":"GLSL","gml":"GameMaker","go":"Go","graphql":"GraphQL","groovy":"Groovy","haml":"Haml","handlebars":"Handlebars","haskell":"Haskell","haxe":"Haxe","hcl":"HCL","hlsl":"HLSL","hpkp":"HPKP","hsts":"HSTS","http":"HTTP","ichigojam":"IchigoJam","icon":"Icon","iecst":"IEC Structured Text","gitignore":".gitignore","hgignore":".hgignore","npmignore":".npmignore","ignore":".ignore","inform7":"Inform 7","ini":"INI","io":"Io","j":"J","java":"Java","javadoc":"Javadoc","javadoclike":"Javadoc-like","javascript":"JavaScript","javastacktrace":"Java Stack Trace","jolie":"Jolie","jq":"jq","jsdoc":"JSDoc","webmanifest":"Web Manifest","json":"JSON","json5":"JSON5","jsonp":"JSONP","jsstacktrace":"JavaScript Stack Trace","jsx":"JSX","julia":"Julia","keyman":"Keyman","kotlin":"Kotlin","context":"ConTeXt","tex":"Tex","latex":"LaTeX","latte":"Latte","less":"LESS","lilypond":"LilyPond","liquid":"Liquid","elisp":"Emacs Lisp","emacs":"Emacs","emacs-lisp":"Emacs Lisp","lisp":"Lisp","livescript":"LiveScript","llvm":"LLVM","lolcode":"LOLCODE","lua":"Lua","makefile":"Makefile","markdown":"Markdown","atom":"Atom","html":"HTML","mathml":"MathML","rss":"RSS","ssml":"SSML","svg":"SVG","xml":"XML","markup":"XML","markup-templating":"Markup Templating","matlab":"MATLAB","mel":"MEL","mizar":"Mizar","mongodb":"MongoDB","monkey":"Monkey","moonscript":"MoonScript","n1ql":"N1QL","n4js":"N4JS","nand2tetris-hdl":"Nand2Tetris HDL","naniscript":"NaniScript","nasm":"NASM","neon":"Neon","nginx":"nginx","nim":"Nim","nix":"Nix","nsis":"NSIS","objectivec":"Objective-C","ocaml":"OCaml","opencl":"OpenCL","oz":"Oz","parigp":"PARI/GP","parser":"Parser","objectpascal":"Object Pascal","pascal":"Pascal","pascaligo":"Pascaligo","px":"px","pcaxis":"PC-Axis","peoplecode":"PeopleCode","perl":"Perl","php":"PHP","phpdoc":"PHPDoc","plsql":"PL/SQL","powerquery":"Power Query M","powershell":"PowerShell","processing":"Processing","prolog":"Prolog","promql":"PromQL","properties":"Properties","protobuf":"Protobuf","pug":"Pug","puppet":"Puppet","pure":"Pure","purebasic":"Pure Basic","purescript":"PureScript","python":"Python","q":"Q","qml":"QML","qore":"Qore","r":"R","racket":"Racket","reason":"Reason","regex":"Regex","renpy":"Ren\'Py","rest":"REST","rip":"Rip","roboconf":"Roboconf","robotframework":"Robot Framework","ruby":"Ruby","rust":"Rust","sas":"SAS","sass":"SASS","scala":"Scala","scheme":"Scheme","scss":"SCSS","sentinel":"Sentinel","shell-session":"Shell","smali":"Smali","smalltalk":"Smalltalk","smarty":"Smarty","sml":"Standard ML","solidity":"Solidity","solution-file":"Solution File","soy":"Soy","sparql":"SPARQL","splunk-spl":"Splunk SPL","sqf":"SQF","sql":"SQL","stan":"Stan","stylus":"Stylus","swift":"Swift","t4-cs":"T4","t4-templating":"T4 Templating","t4-vb":"T4 Visual Basic","tap":"TAP","tcl":"Tcl","textile":"Textile","toml":"TOML","tsx":"TSX","tt2":"TT2","trig":"TriG","turtle":"Turtle","twig":"Twig","typescript":"TypeScript","tsconfig":"TSConfig","typoscript":"TypoScript","unrealscript":"UnrealScript","vala":"Vala","vbnet":"VB.NET","velocity":"Velocity","verilog":"Verilog","vhdl":"VHDL","vim":"Vim","visual-basic":"Visual Basic","warpscript":"WarpScript","wasm":"WebAssembly","wiki":"Wiki","xeoracube":"XeoraCube","xeora":"Xeora","xojo":"Xojo","xquery":"XQuery","yaml":"YAML","yang":"YANG","zig":"zig"}')},18220:function(e){"use strict";e.exports=JSON.parse('{"abap":[],"abnf":[],"actionscript":[],"ada":[],"agda":[],"al":[],"antlr4":["g4"],"apacheconf":[],"apex":[],"apl":[],"applescript":[],"aql":[],"arduino":[],"arff":[],"asciidoc":["adoc"],"asm6502":[],"aspnet":[],"autohotkey":[],"autoit":[],"bash":["shell"],"basic":[],"batch":[],"bbcode":["shortcode"],"birb":[],"bison":[],"bnf":["rbnf"],"brainfuck":[],"brightscript":[],"bro":[],"bsl":["oscript"],"c":[],"cfscript":["cfc"],"chaiscript":[],"cil":[],"clike":[],"clojure":[],"cmake":[],"cobol":[],"coffeescript":["coffee"],"concurnas":["conc"],"coq":[],"cpp":[],"crystal":[],"csharp":["cs","dotnet"],"csp":[],"css":[],"csv":[],"cypher":[],"d":[],"dart":[],"dataweave":[],"dax":[],"dhall":[],"diff":[],"django":["jinja2"],"dns-zone-file":["dns-zone"],"docker":["dockerfile"],"dot":["gv"],"ebnf":[],"editorconfig":[],"eiffel":[],"ejs":["eta"],"elixir":[],"elm":[],"erb":[],"erlang":[],"etlua":[],"excel-formula":["xls","xlsx"],"factor":[],"false":[],"firestore-security-rules":[],"flow":[],"fortran":[],"fsharp":[],"ftl":[],"gcode":[],"gdscript":[],"gedcom":[],"gherkin":[],"git":[],"glsl":[],"gml":["gamemakerlanguage"],"go":[],"graphql":[],"groovy":[],"haml":[],"handlebars":["hbs"],"haskell":["hs"],"haxe":[],"hcl":[],"hlsl":[],"hpkp":[],"hsts":[],"http":[],"ichigojam":[],"icon":[],"icu-message-format":[],"idris":["idr"],"iecst":[],"ignore":["gitignore","hgignore","npmignore"],"inform7":[],"ini":[],"io":[],"j":[],"java":[],"javadoc":[],"javadoclike":[],"javascript":["js"],"javastacktrace":[],"jexl":[],"jolie":[],"jq":[],"jsdoc":[],"json":["webmanifest"],"json5":[],"jsonp":[],"jsstacktrace":[],"jsx":[],"julia":[],"keyman":[],"kotlin":["kt","kts"],"kumir":["kum"],"latex":["context","tex"],"latte":[],"less":[],"lilypond":["ly"],"liquid":[],"lisp":["elisp","emacs","emacs-lisp"],"livescript":[],"llvm":[],"log":[],"lolcode":[],"lua":[],"makefile":[],"markdown":["md"],"markup":["atom","html","mathml","rss","ssml","svg","xml"],"markup-templating":[],"matlab":[],"mel":[],"mizar":[],"mongodb":[],"monkey":[],"moonscript":["moon"],"n1ql":[],"n4js":["n4jsd"],"nand2tetris-hdl":[],"naniscript":["nani"],"nasm":[],"neon":[],"nevod":[],"nginx":[],"nim":[],"nix":[],"nsis":[],"objectivec":["objc"],"ocaml":[],"opencl":[],"openqasm":["qasm"],"oz":[],"parigp":[],"parser":[],"pascal":["objectpascal"],"pascaligo":[],"pcaxis":["px"],"peoplecode":["pcode"],"perl":[],"php":[],"phpdoc":[],"plsql":[],"powerquery":["mscript","pq"],"powershell":[],"processing":[],"prolog":[],"promql":[],"properties":[],"protobuf":[],"psl":[],"pug":[],"puppet":[],"pure":[],"purebasic":["pbfasm"],"purescript":["purs"],"python":["py"],"q":[],"qml":[],"qore":[],"qsharp":["qs"],"r":[],"racket":["rkt"],"reason":[],"regex":[],"rego":[],"renpy":["rpy"],"rest":[],"rip":[],"roboconf":[],"robotframework":["robot"],"ruby":["rb"],"rust":[],"sas":[],"sass":[],"scala":[],"scheme":[],"scss":[],"shell-session":["sh-session","shellsession"],"smali":[],"smalltalk":[],"smarty":[],"sml":["smlnj"],"solidity":["sol"],"solution-file":["sln"],"soy":[],"sparql":["rq"],"splunk-spl":[],"sqf":[],"sql":[],"squirrel":[],"stan":[],"stylus":[],"swift":[],"t4-cs":["t4"],"t4-templating":[],"t4-vb":[],"tap":[],"tcl":[],"textile":[],"toml":[],"tsx":[],"tt2":[],"turtle":["trig"],"twig":[],"typescript":["ts"],"typoscript":["tsconfig"],"unrealscript":["uc","uscript"],"uri":["url"],"v":[],"vala":[],"vbnet":[],"velocity":[],"verilog":[],"vhdl":[],"vim":[],"visual-basic":["vb","vba"],"warpscript":[],"wasm":[],"wiki":[],"wolfram":["mathematica","nb","wl"],"xeora":["xeoracube"],"xojo":[],"xquery":[],"yaml":["yml"],"yang":[],"zig":[]}')}}]);