(()=>{var e={};e.id=3936,e.ids=[3936,2888],e.modules={75117:e=>{e.exports={root:"hero_root__zVlK_",backgroundBase:"hero_backgroundBase__1T_jA",rootContainer:"hero_rootContainer__k8aW_",rootLayout:"hero_rootLayout__34Vg_",startSlot:"hero_startSlot__OYVDs",hvdHero:"hero_hvdHero__E5IH9",endSlot:"hero_endSlot__twDWz",textRoot:"hero_textRoot__gLBX8","foreground-dark":"hero_foreground-dark__r_WTY","foreground-light":"hero_foreground-light__htnhC",textHeading:"hero_textHeading__NuR_8 hds-typography-display-500",textDescription:"hero_textDescription__InQl1 hds-typography-display-300"}},7212:e=>{e.exports={heroBackground:"landing-hero_heroBackground__mErGz",heroImage:"landing-hero_heroImage__Gl_05"}},81311:e=>{e.exports={mobileMenuContainer:"mobile-menu-levels-generic_mobileMenuContainer__yvFk4",mobileMenuNavList:"mobile-menu-levels-generic_mobileMenuNavList__ZySxX"}},80176:e=>{e.exports={root:"style_root__ZMHOA",hvdHero:"style_hvdHero__Vn2cL",categoryGroupsContainer:"style_categoryGroupsContainer__FAJgz",categoryGroupContainer:"style_categoryGroupContainer__xSMhR",categoryGuidesContainer:"style_categoryGuidesContainer__cXCg0",mobileOnly:"style_mobileOnly__46PjE",tabletUp:"style_tabletUp__QuFJ3",categoryGroupDescription:"style_categoryGroupDescription__Anz8B",categoryGroupHeader:"style_categoryGroupHeader__7C9OY",categoryGroupHeading:"style_categoryGroupHeading__YOKmv",smallHeading:"style_smallHeading__1F257",guideCard:"style_guideCard__eJa9K",guideHeading:"style_guideHeading__lngbt",standaloneLinkContents:"style_standaloneLinkContents__Jqnbi"}},66975:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>g,getStaticPaths:()=>x,getStaticProps:()=>p,reportWebVitals:()=>m,routeModule:()=>j,unstable_getServerProps:()=>q,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>v,unstable_getStaticPaths:()=>y,unstable_getStaticProps:()=>_});var i=r(87093),a=r(35244),o=r(1323),n=r(11070),l=r(33893),u=r(33416),c=e([l,u]);[l,u]=c.then?(await c)():c;let d=(0,o.l)(u,"default"),p=(0,o.l)(u,"getStaticProps"),x=(0,o.l)(u,"getStaticPaths"),g=(0,o.l)(u,"getServerSideProps"),h=(0,o.l)(u,"config"),m=(0,o.l)(u,"reportWebVitals"),_=(0,o.l)(u,"unstable_getStaticProps"),y=(0,o.l)(u,"unstable_getStaticPaths"),v=(0,o.l)(u,"unstable_getStaticParams"),q=(0,o.l)(u,"unstable_getServerProps"),b=(0,o.l)(u,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/validated-designs",pathname:"/validated-designs",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:u});s()}catch(e){s(e)}})},60568:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var s=r(20997),i=r(16689);let a=(0,i.forwardRef)(({color:e="currentColor",title:t,...r},a)=>{let o=(0,i.useMemo)(()=>t?"title-"+Math.random().toString(36).substr(2,9):void 0,[t]);return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-hidden":!t,ref:a,"aria-labelledby":o,...r,children:[t?(0,s.jsx)("title",{id:o,children:t}):null,(0,s.jsx)("path",{fill:e,d:"M12.229 5.04a.75.75 0 011.042-1.08l7.5 7.25a.75.75 0 010 1.08l-7.5 7.25a.75.75 0 11-1.042-1.08l6.166-5.96H3.75a.75.75 0 010-1.5h14.645l-6.166-5.96z"})]})})},99755:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(20997),i=r(20516),a=r(27439);let o=function({productSlug:e,className:t,size:r="extra-large"}){return s.jsx(i.Z,{size:r,brandColor:"hcp"==e?"neutral-dark":e,className:t,children:s.jsx(a.Z,{productSlug:e})})}},63205:(e,t,r)=>{"use strict";r.d(t,{V:()=>u,l:()=>c});var s=r(20997),i=r(59003),a=r.n(i),o=r(25462),n=r(75117),l=r.n(n);function u({backgroundClassName:e,startSlot:t,endSlot:r,className:i}){return(0,s.jsxs)("div",{className:l().root,children:[s.jsx("div",{className:a()(l().backgroundBase,e)}),s.jsx("div",{className:a()(l().rootContainer,i),children:(0,s.jsxs)("div",{className:l().rootLayout,children:[s.jsx("div",{className:a()(l().startSlot,i),children:t}),r?s.jsx("div",{className:l().endSlot,children:r}):null]})})]})}function c({heading:e,description:t,foreground:r,className:i}){return(0,s.jsxs)("div",{className:a()(l().textRoot,l()[`foreground-${r}`]),children:[s.jsx("h1",{className:a()(l().textHeading,i),dangerouslySetInnerHTML:{__html:e}}),t?.length?s.jsx("p",{className:l().textDescription,dangerouslySetInnerHTML:{__html:(0,o.Z)(t,18)}}):null]})}},85192:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(20997),i=r(25675),a=r.n(i);let o={src:"/hashicorp-vault/_next/static/media/certification-hero-image.649d6952.svg",height:594,width:453,blurWidth:0,blurHeight:0};var n=r(7212),l=r.n(n),u=r(63205);let c=function({heading:e,description:t,isHvd:r=!1,className:i}){return s.jsx(u.V,{backgroundClassName:l().heroBackground,className:i,startSlot:s.jsx(u.l,{className:i,heading:e,description:t??"",foreground:"light"}),endSlot:r?null:s.jsx("div",{className:l().heroImage,children:s.jsx(a(),{alt:"",src:o,width:447,height:515})})})}},30007:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>d});var i=r(20997),a=r(33878),o=r(72387),n=r(9682),l=r(81311),u=r.n(l),c=e([o]);o=(c.then?(await c)():c)[0];let d=function(){return(0,i.jsxs)(o.Z,{className:u().mobileMenuContainer,children:[i.jsx(o.v,{}),(0,i.jsxs)("ul",{className:u().mobileMenuNavList,children:[i.jsx(n.Rd,{item:{heading:"Main Menu"}}),(0,a.A)().map((e,t)=>i.jsx(n.Rd,{item:e},t))]})]})};s()}catch(e){s(e)}})},33416:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>l,getStaticProps:()=>n});var i=r(1248),a=r(24711),o=e([a]);async function n(){let e=(0,i.bN)();return e?{props:{metadata:{title:"HashiCorp Validated Designs",description:"HashiCorp Validated Designs"},categoryGroups:e}}:{notFound:!0}}let l=(a=(o.then?(await o)():o)[0]).Z;s()}catch(e){s(e)}})},24711:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>b});var i=r(20997),a=r(40968),o=r.n(a),n=r(32884),l=r(30007),u=r(85192),c=r(46509),d=r(47986),p=r(91121),x=r(60568),g=r(42950),h=r(80176),m=r.n(h),_=r(89168),y=r(60348),v=r(99755),q=e([n,l]);function b({categoryGroups:e}){return(0,i.jsxs)(n.Z,{mobileMenuSlot:i.jsx(l.Z,{}),className:m().root,children:[i.jsx(o(),{children:i.jsx("meta",{name:"robots",content:"noindex, nofollow"},"robots")}),i.jsx(u.Z,{heading:"HashiCorp Validated Designs",isHvd:!0,className:m().hvdHero}),i.jsx("div",{className:m().categoryGroupsContainer,children:e.map(e=>(0,i.jsxs)(c.Z,{elevation:"base",className:m().categoryGroupContainer,children:[(0,i.jsxs)("section",{className:m().categoryGroupHeader,children:[i.jsx(v.Z,{size:"large",productSlug:e.productSlug}),i.jsx(_.Z,{level:2,size:400,weight:"bold",className:m().categoryGroupHeading,children:e.title})]}),i.jsx(y.Z,{asElement:"p",weight:"medium",size:200,className:m().categoryGroupDescription,children:e.description}),i.jsx("ul",{className:m().categoryGuidesContainer,children:e.guides.map(e=>i.jsx("li",{children:(0,i.jsxs)(d.Z,{href:e.href,ariaLabel:e.title,className:m().guideCard,children:[i.jsx(_.Z,{level:3,size:200,weight:"semibold",className:m().smallHeading,children:e.title}),i.jsx(g.C,{className:m().standaloneLinkContents,icon:(0,i.jsxs)(i.Fragment,{children:[i.jsx(x.o,{className:m().mobileOnly}),i.jsx(p.k,{className:m().tabletUp})]}),iconPosition:"trailing",inheritColor:!0,size:"medium",text:"View",textClassName:m().tabletUp})]})},e.slug))})]},e.slug))})]})}[n,l]=q.then?(await q)():q,s()}catch(e){s(e)}})},94970:e=>{"use strict";e.exports=require("@happykit/flags/client")},67922:e=>{"use strict";e.exports=require("@happykit/flags/context")},95780:e=>{"use strict";e.exports=require("@mapbox/rehype-prism")},22170:e=>{"use strict";e.exports=require("@mdx-js/mdx")},16142:e=>{"use strict";e.exports=require("@octokit/core")},74691:e=>{"use strict";e.exports=require("@opentelemetry/api")},48827:e=>{"use strict";e.exports=require("@radix-ui/react-visually-hidden")},7372:e=>{"use strict";e.exports=require("@reach/dialog")},9677:e=>{"use strict";e.exports=require("@reach/portal")},80395:e=>{"use strict";e.exports=require("@reach/tooltip")},78896:e=>{"use strict";e.exports=require("@react-aria/ssr")},76278:e=>{"use strict";e.exports=require("@react-aria/utils")},9991:e=>{"use strict";e.exports=require("@swc/core")},18910:e=>{"use strict";e.exports=require("@tanstack/react-query")},46310:e=>{"use strict";e.exports=require("@tanstack/react-query-devtools")},33666:e=>{"use strict";e.exports=require("@vercel/fetch")},63844:e=>{"use strict";e.exports=require("adm-zip")},38970:e=>{"use strict";e.exports=require("algoliasearch")},59003:e=>{"use strict";e.exports=require("classnames")},71239:e=>{"use strict";e.exports=require("events")},79316:e=>{"use strict";e.exports=require("fathom-client")},65755:e=>{"use strict";e.exports=require("flat")},98076:e=>{"use strict";e.exports=require("gray-matter")},56734:e=>{"use strict";e.exports=require("js-cookie")},19793:e=>{"use strict";e.exports=require("js-yaml")},87645:e=>{"use strict";e.exports=require("mdast-util-to-string")},23231:e=>{"use strict";e.exports=require("ms")},41649:e=>{"use strict";e.exports=require("next-auth/react")},74091:e=>{"use strict";e.exports=require("next-query-params")},51162:e=>{"use strict";e.exports=require("next-themes")},62785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},78423:e=>{"use strict";e.exports=require("next/dist/shared/lib/utils")},40968:e=>{"use strict";e.exports=require("next/head")},79103:e=>{"use strict";e.exports=require("query-string")},16689:e=>{"use strict";e.exports=require("react")},66405:e=>{"use strict";e.exports=require("react-dom")},65184:e=>{"use strict";e.exports=require("react-error-boundary")},48922:e=>{"use strict";e.exports=require("react-hot-toast")},19785:e=>{"use strict";e.exports=require("react-intersection-observer")},20997:e=>{"use strict";e.exports=require("react/jsx-runtime")},50934:e=>{"use strict";e.exports=require("shellwords")},73673:e=>{"use strict";e.exports=require("slugify")},32711:e=>{"use strict";e.exports=require("unist-util-remove")},48858:e=>{"use strict";e.exports=require("use-query-params")},17451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},66197:e=>{"use strict";e.exports=import("framer-motion")},64675:e=>{"use strict";e.exports=import("react-instantsearch")},23135:e=>{"use strict";e.exports=import("react-markdown")},66809:e=>{"use strict";e.exports=import("remark-gfm")},9926:e=>{"use strict";e.exports=import("zod")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},59796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1107,1840,6859,519,1306,3329,3893,849,1248],()=>r(66975));module.exports=s})();