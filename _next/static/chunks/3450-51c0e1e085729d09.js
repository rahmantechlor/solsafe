"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3450],{5752:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(85893),o=n(23795),r=n(69397),a=n(23972);function s(e){let{label:t,link:n,detail:s=!1,...l}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{href:n,target:"_blank",underline:"none",color:"inherit",sx:{...s&&{width:1}},children:(0,i.jsx)(r.Z,{fullWidth:!0,variant:"outlined",color:"inherit",sx:{minHeight:"35px"},...l,children:(0,i.jsx)(a.Z,{variant:"body3",children:t})})})})}},48740:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(85893),o=n(2734),r=n(37049);function a(e){const t=(0,o.Z)();return(0,i.jsx)(r.Z,{size:25,lineWeight:3.5,speed:1,color:t.palette.text.primary,...e})}},84841:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(82729),o=n(85893),r=n(87357);function a(){const e=(0,i._)(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 #0CAF60;\n}\n\n70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px #54D62C00;\n}\n\n100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 #54D62C00;\n}\n"]);return a=function(){return e},e}const s=(0,n(70917).F4)(a());function l(e){let{size:t=8,sx:n}=e;return(0,o.jsx)(r.Z,{sx:{width:t,height:t,bgcolor:"#0CAF60",borderRadius:"50%",boxShadow:"0 0 0 0 #0CAF60",transform:"scale(1)",animation:"".concat(s," 2s infinite"),...n}})}},31085:function(e,t,n){n.d(t,{cU:function(){return y},i5:function(){return f},ZP:function(){return k},vr:function(){return w}});var i=n(46066),o=n(85893),r=n(45697),a=n.n(r),s=n(90948),l=n(51233),c=n(87357);(0,s.ZP)(c.Z,{shouldForwardProp:e=>"rounded"!==e})((e=>{let{rounded:t,theme:n}=e;return{zIndex:9,margin:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:n.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":{opacity:1,...t&&{"& span":{width:16,borderRadius:6}}}}}})),(0,s.ZP)("span")((e=>{let{theme:t}=e;return{width:8,height:8,borderRadius:"50%",transition:t.transitions.create(["width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.short})}}));a().bool,a().object;var d=n(41796),x=n(2734),h=n(93946),u=n(98355);function p(e){let{icon:t="eva:arrow-ios-forward-fill",isRTL:n}=e;return(0,o.jsx)(u.Z,{icon:t,sx:{transform:" scaleX(-1)",...n&&{transform:" scaleX(1)"}}})}function g(e){let{icon:t="eva:arrow-ios-forward-fill",isRTL:n}=e;return(0,o.jsx)(u.Z,{icon:t,sx:{...n&&{transform:" scaleX(-1)"}}})}p.propTypes={icon:a().string,isRTL:a().bool},g.propTypes={icon:a().string,isRTL:a().bool};const m=(0,s.ZP)(h.Z,{shouldForwardProp:e=>"filled"!==e&&"hasChild"!==e&&"shape"!==e})((e=>{let{filled:t,shape:n,hasChild:i,theme:o}=e;return{color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter}),..."rounded"===n&&{borderRadius:1.5*o.shape.borderRadius},...!t&&{opacity:.48,"&:hover":{opacity:1}},...t&&{color:(0,d.Fq)(o.palette.common.white,.8),backgroundColor:(0,d.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}},...i&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)}}}));function f(e){let{shape:t="circular",filled:n=!1,icon:i,onNext:r,onPrev:a,children:s,leftButtonProps:c,rightButtonProps:d,sx:h,...u}=e;const f="rtl"===(0,x.Z)().direction;var j,v;return s?(0,o.jsxs)(l.Z,{sx:h,...u,children:[r&&(0,o.jsx)(m,{filled:n,shape:t,hasChild:!!s,onClick:a,...c,sx:{left:16,...null===(j=c)||void 0===j?void 0:j.sx},children:(0,o.jsx)(p,{icon:i,isRTL:f})}),s,a&&(0,o.jsx)(m,{filled:n,shape:t,hasChild:!!s,onClick:r,...d,sx:{right:16,...null===(v=d)||void 0===v?void 0:v.sx},children:(0,o.jsx)(g,{icon:i,isRTL:f})})]}):(0,o.jsxs)(l.Z,{direction:"row",alignItems:"center",display:"inline-flex",sx:h,...u,children:[(0,o.jsx)(m,{filled:n,shape:t,onClick:a,...c,children:(0,o.jsx)(p,{icon:i,isRTL:f})}),(0,o.jsx)(m,{filled:n,shape:t,onClick:r,...d,children:(0,o.jsx)(g,{icon:i,isRTL:f})})]})}f.propTypes={children:a().node,filled:a().bool,icon:a().oneOfType([a().element,a().string]),leftButtonProps:a().object,onNext:a().func,onPrev:a().func,rightButtonProps:a().object,shape:a().oneOf(["circular","rounded"]),sx:a().object};var j=n(23972),v=n(31945);const Z=(0,s.ZP)(c.Z)((e=>{let{theme:t}=e;return{...(0,v.Ls)({opacity:.48,color:t.palette.grey[900]}),zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:t.spacing(2),right:t.spacing(2),padding:t.spacing(.25),color:t.palette.common.white,borderRadius:t.shape.borderRadius}})),b=(0,s.ZP)(h.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function y(e){let{index:t,total:n,onNext:i,onPrev:r,icon:a,sx:s,...l}=e;const c="rtl"===(0,x.Z)().direction;return(0,o.jsxs)(Z,{sx:s,...l,children:[(0,o.jsx)(b,{color:"inherit",onClick:r,children:(0,o.jsx)(p,{icon:a,isRTL:c})}),(0,o.jsxs)(j.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[t+1,"/",n]}),(0,o.jsx)(b,{color:"inherit",onClick:i,children:(0,o.jsx)(g,{icon:a,isRTL:c})})]})}y.propTypes={icon:a().oneOfType([a().element,a().string]),index:a().number,onNext:a().func,onPrev:a().func,sx:a().object,total:a().number};var S=n(67294);function w(e){var t,n,i;const o=(0,x.Z)(),r=(0,S.useRef)(null),[a,s]=(0,S.useState)((null===(t=e)||void 0===t?void 0:t.initialSlide)||0),[l,c]=(0,S.useState)(void 0),d="rtl"===o.direction,h={arrows:!1,dots:!!(null===(n=e)||void 0===n?void 0:n.customPaging),rtl:d,beforeChange:(e,t)=>s(t),...e,fade:!(!(null===(i=e)||void 0===i?void 0:i.fade)||d)},u=(0,S.useCallback)((()=>{r.current&&c(r.current)}),[]),p=(0,S.useCallback)((()=>{r.current&&r.current.slickPrev()}),[]),g=(0,S.useCallback)((()=>{r.current&&r.current.slickNext()}),[]),m=(0,S.useCallback)((e=>{r.current&&r.current.slickGoTo(e)}),[]);return{nav:l,carouselRef:r,currentIndex:a,carouselSettings:h,onPrev:p,onNext:g,onTogo:m,onSetNav:u,setNav:c,setCurrentIndex:s}}var k=i.Z},51844:function(e,t,n){var i=n(85893),o=n(45697),r=n.n(o),a=n(67294),s=n(87357);const l=(0,a.forwardRef)(((e,t)=>{let{src:n,sx:o,...r}=e;return(0,i.jsx)(s.Z,{component:"span",className:"svg-color",ref:t,sx:{width:24,height:24,display:"inline-block",bgcolor:"currentColor",mask:"url(".concat(n,") no-repeat center / contain"),WebkitMask:"url(".concat(n,") no-repeat center / contain"),...o},...r})}));l.propTypes={src:r().string,sx:r().object},t.Z=l},45399:function(e,t,n){n.d(t,{Z:function(){return i.Z}});var i=n(51844)},17011:function(e,t,n){n.r(t),n.d(t,{announce_icons:function(){return P},default:function(){return R}});var i=n(82729),o=n(85893),r=n(45697),a=n.n(r),s=n(67294),l=n(87357),c=n(23972),d=n(51233),x=n(23795),h=n(93946),u=n(89206),p=n(10155),g=n(65582),m=n(2734),f=n(59584),j=n(90948),v=n(70917),Z=n(84841),b=n(98355),y=n(5752),S=(n(87583),n(15518)),w=n(89284),k=n(93990),_=n(42076),D=n(61469),C=n(26179),I=n(9473);function A(){const e=(0,i._)(["\n    0% {\n      transform: translateY(-50%);\n    }\n    50% {\n      transform: translateY(50%);\n    }\n    100% {\n      transform: translateY(-10%);\n    }\n  "]);return A=function(){return e},e}R.propTypes={onOpenNav:a().func};const P=e=>[{value:0,icon:"",label:"No Icon"},{value:1,icon:e?(0,o.jsx)(Z.Z,{size:12,sx:{mx:"3px"}}):(0,o.jsx)(l.Z,{sx:{width:12,height:12,mx:"3px",bgcolor:"primary.main",borderRadius:"100%"}}),label:"Blinking Green"},{value:2,icon:(0,o.jsx)(f.Z,{sx:{width:18,height:18}}),label:"MegaPhone"},{value:3,icon:(0,o.jsx)(b.Z,{icon:"eva:alert-triangle-outline",sx:{width:18,height:18}}),label:"Warning"},{value:4,icon:(0,o.jsx)(c.Z,{variant:"body2",color:"text.disabled",children:"Ad"}),label:"Ad"}];function R(e){let{onOpenNav:t}=e;var n,i,r,a;const f=(0,m.Z)(),Z=(0,v.F4)(A()),R=(0,j.ZP)("div")({position:"relative",transform:"translateY(100%)",animation:"".concat(Z," 0.2s linear forwards")}),N=(0,I.v9)((e=>e.profile.settings.themeLayout)),O=(0,I.v9)((e=>e.admin.announcements)),B=(0,I.v9)((e=>e.profile.settings.hasAnimation)),T="mini"===N,L=(0,_.Z)("up","lg"),M=(0,_.Z)("down","sm"),z=(0,_.Z)("up","hg"),[E,F]=(0,s.useState)(0);(0,s.useEffect)((()=>{const e=setInterval((()=>{F((e=>(e+1)%O.length))}),5e3);return()=>clearInterval(e)}),[O]);const W=(0,o.jsxs)(o.Fragment,{children:[L&&(0,o.jsx)(d.Z,{spacing:1,justifyContent:"center",children:(0,o.jsx)(d.Z,{sx:{position:"relative",overflow:"hidden",py:1},justifyContent:"center",children:O.length>0&&(null===(n=O[E])||void 0===n?void 0:n.textMessage)&&(0,o.jsx)(R,{sx:{mt:{lg:.8,xxl:.5}},children:(0,o.jsxs)(d.Z,{direction:"row",alignItems:"center",sx:{ml:1},children:[null===(i=P(B).find((e=>e.value===O[E].icon)))||void 0===i?void 0:i.icon,(null===(r=O[E])||void 0===r?void 0:r.link)?(0,o.jsx)(x.Z,{href:(null===(a=O[E])||void 0===a?void 0:a.link)||"",underline:"none",disabled:!0,color:"primary",alignSelf:"center",fontSize:13,target:"_blank",children:(0,o.jsx)(c.Z,{color:"text.primary",sx:{ml:1,...!z&&{fontSize:"0.875rem"}},children:O[E].textMessage&&O[E].textMessage})}):(0,o.jsx)(c.Z,{color:"text.primary",sx:{ml:1,...!z&&{fontSize:"0.875rem"}},children:O[E].textMessage&&O[E].textMessage})]})})})}),(0,o.jsxs)(d.Z,{direction:"row",alignItems:"center",justifyContent:{xs:"space-between",lg:"flex-end"},sx:{...M&&{py:1},flexGrow:1},children:[!L&&(0,o.jsx)(h.Z,{onClick:t,sx:{color:"text.primary"},children:(0,o.jsx)(b.Z,{icon:"eva:menu-2-fill"})}),(0,o.jsxs)(d.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,o.jsx)(y.Z,{label:"GemPad",startIcon:(0,o.jsx)(l.Z,{component:"img",src:"/logo/logo_gempad.svg",alt:"gempad",width:{xs:14,xxl:18},height:{xs:14,xxl:18}}),link:C.LB}),(0,o.jsx)(S.Z,{}),(0,o.jsx)(w.default,{})]})]})]});return(0,o.jsx)(u.Z,{sx:{borderBottom:"solid 2px ".concat(f.palette.border.primary),zIndex:99,...(0,k.Ls)({opacity:.6,color:f.palette.background.default}),transition:f.transitions.create(["height"],{duration:f.transitions.duration.shorter}),width:{lg:"calc(100% - ".concat(D.w$.W_DASHBOARD,"px)"),xxl:"calc(100% - ".concat(D.w$.W_DASHBOARD_XXL,"px)")},height:{xs:D.yf.H_DASHBOARD_DESKTOP_OFFSET,xxl:D.yf.H_MAIN_DESKTOP},...T&&{width:"calc(100% - ".concat(D.w$.W_DASHBOARD_MINI,"px)")}},children:(0,o.jsx)(p.Z,{sx:{position:"relative",height:1},disableGutters:!0,children:(0,o.jsx)(g.Z,{disableGutters:!0,maxWidth:!1,sx:{px:{xs:2,sm:3,lg:7}},children:(0,o.jsx)(d.Z,{direction:{md:"column",lg:"row"},justifyContent:"space-between",children:W})})})})}},15518:function(e,t,n){n.d(t,{Z:function(){return O}});var i=n(85893),o=n(67294),r=n(11163),a=n(41664),s=n.n(a),l=n(98974),c=n(19058),d=n(87357),x=n(23972),h=n(21023),u=n(69397),p=n(93946),g=n(67720),m=n(18843),f=n(75438),j=n(51233),v=n(69661),Z=n(41796),b=n(98355),y=n(78276),S=n(84889),w=n(1289);var k=n(6154),_=n(68485),D=n(94304),C=n(42076),I=n(41537),A=n(26179),P=n(79437),R=n(66781),N=n(54306);function O(){const e=(0,C.Z)("down","xxl"),{publicKey:t}=(0,N.O)(),[n]=(0,o.useContext)(I.m),a=(0,P.I0)(),s=(0,P.v9)((e=>e.profile.notifications)),[j,v]=(0,o.useState)(null);(0,o.useEffect)((()=>{let e=!1;return t&&(async()=>{try{const n=String(t),i=await(0,_.Z)("notifyGet"),{data:o}=await k.Z.get("/notification/get/".concat(n),{headers:{token:i}});!e&&o&&a((0,R.Rv)(o))}catch(n){a((0,R.Rv)([]))}})(),()=>{e=!0}}),[t,a,_.Z]);const w=()=>{T(!0),v(null)},[O,T]=(0,o.useState)(!1);(0,o.useEffect)((()=>{let e=!1;return t&&O&&(async()=>{try{const e=String(t),n=await(0,_.Z)("notifyReadAll");await k.Z.post("/notification/read-all/".concat(e),{},{headers:{token:n}}),a((0,R.sg)())}catch(n){console.log("markAllAsRead: err =>",n)}e||T(!1)})(),()=>{e=!0}}),[t,_.Z,O]);const[L,M]=(0,o.useState)(!1);(0,o.useEffect)((()=>{let e=!1;return L&&(async()=>{try{if(s.length>0){const t=await(0,_.Z)("notifyDeleteAll");const i={timestamp:Date.now()+n,chain:A.PX},o=await(0,D.Z)(i);await k.Z.post("/notification/delete-all",{data:i,signedMessage:o},{headers:{token:t}}),e||a((0,R.Rv)([]))}}catch(t){console.log("setDeleteAll: err =>",t)}e||M(!1)})(),()=>{e=!0}}),[L,_.Z,n]);const z=(0,r.useRouter)();(0,o.useEffect)((()=>(z.events.on("routeChangeStart",w),()=>{z.events.off("routeChangeStart",w)})),[z.events]);const E=(0,o.useRef)("/presale/all"),F=e=>{E.current=e,Boolean(j)&&w()};(0,o.useEffect)((()=>(z.events.on("routeChangeComplete",F),()=>{z.events.off("routeChangeComplete",F)})),[]);const W=s.filter((e=>e.seen)).sort(((e,t)=>Date.parse(t.createdAt)-Date.parse(e.createdAt))),H=s.filter((e=>!e.seen)).sort(((e,t)=>Date.parse(t.createdAt)-Date.parse(e.createdAt)));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.w_,{color:j?"primary":"default",onClick:e=>{v(e.currentTarget)},sx:{width:30,height:30},children:(0,i.jsx)(l.Z,{badgeContent:H.length,color:"error",sx:{"& .MuiBadge-badge":{bgcolor:e=>e.palette.primary.main}},children:(0,i.jsx)(b.Z,{icon:"solar:bell-bing-bold-duotone",color:e=>(0,Z.Fq)(e.palette.text.primary,.4),width:e?20:24})})}),(0,i.jsxs)(c.ZP,{open:Boolean(j),onClose:w,anchor:"right",BackdropProps:{invisible:!0},PaperProps:{sx:{width:400}},disableScrollLock:!0,children:[(0,i.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",py:2,px:2.5,...e&&{pb:0}},children:[(0,i.jsxs)(d.Z,{flexGrow:1,children:[(0,i.jsx)(x.Z,{variant:"subtitle1",children:"Notifications"}),(0,i.jsxs)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:["You have ",H.length," unread messages"]})]}),s.length>0&&(0,i.jsx)(h.Z,{title:"Delete all notification",arrow:!0,children:(0,i.jsx)(u.Z,{variant:"outlined",color:"inherit",onClick:()=>M(!0),sx:{textTransform:"none"},children:(0,i.jsx)(x.Z,{variant:"body2",children:"Clear All"})})}),(0,i.jsx)(p.Z,{onClick:w,children:(0,i.jsx)(b.Z,{icon:"eva:close-fill"})})]}),(0,i.jsx)(g.Z,{sx:{borderStyle:"dashed",mt:1.1}}),(0,i.jsxs)(y.Z,{children:[H.length>0&&(0,i.jsx)(m.Z,{disablePadding:!0,subheader:(0,i.jsx)(f.Z,{disableSticky:!0,sx:{pb:1,px:2.5,color:"text.disabled"},children:"NEW"}),children:H.map(((e,t)=>(0,i.jsx)(B,{item:e},t)))}),(0,i.jsx)(m.Z,{disablePadding:!0,subheader:W.length>0&&(0,i.jsx)(f.Z,{disableSticky:!0,sx:{pb:1,px:2.5,color:"text.disabled"},children:"OLDER"}),children:W.map(((e,t)=>(0,i.jsx)(B,{item:e},t)))})]})]})]})}function B(e){let{item:t,...n}=e;var r,a;const l=(0,o.useMemo)((()=>{var e;return 1===(null===(e=t.text)||void 0===e?void 0:e.filter((e=>!!e.link)).length)}),[t.text]),c=null===(a=t.text)||void 0===a||null===(r=a.find((e=>!!e.link)))||void 0===r?void 0:r.link;return(0,i.jsxs)(j.Z,{direction:"row",spacing:2,sx:{mx:3,mb:2,color:"inherit",textDecoration:"none"},alignItems:"center",...n,children:[(0,i.jsx)(v.Z,{src:t.logo?t.logo:"/assets/icons/default_logo.svg",sx:{color:"grey[500]","& .MuiAvatar-img":{objectFit:"contain"}},...l&&{component:s(),href:c}}),(0,i.jsx)(j.Z,{spacing:.5,children:(0,i.jsxs)(j.Z,{spacing:.5,...l&&{component:s(),href:c,sx:{color:"inherit",textDecoration:"none"}},children:[(0,i.jsx)(x.Z,{variant:"body1",children:t.text.map(((e,t)=>{let{label:n,link:o}=e;return(0,i.jsx)(x.Z,{component:"span",variant:"body1",color:"inherit",...!!o&&{color:"primary",component:s(),href:o,sx:{textDecoration:"none"}},children:n},t)}))}),(0,i.jsxs)(j.Z,{direction:"row",sx:{typography:"caption",color:"text.disabled"},alignItems:"center",children:[(0,i.jsx)(b.Z,{icon:"eva:clock-fill",width:16}),(0,i.jsx)(x.Z,{variant:"caption",children:(d=t.createdAt,d?(0,w.Z)(new Date(d),{addSuffix:!0}):"")})]})]})})]});var d}},87583:function(e,t,n){n(85893),n(67294),n(98355),n(86595),n(76303),n(9473),n(66781),n(29496),n(83809)},60927:function(e,t,n){n.d(t,{Z:function(){return Ce}});var i=n(85893),o=n(67294),r=n(5152),a=n.n(r),s=n(25675),l=n.n(s),c=n(11163),d=n(65582),x=n(51233),h=n(23972),u=n(69397),p=n(87357),g=n(42076),m=n(61469),f=n(9473);function j(e){let{children:t,sx:n,...o}=e;const r=(0,g.Z)("up","lg"),a=(0,g.Z)("up","xxl"),s=(0,f.v9)((e=>e.profile.themeLayout));return(0,i.jsx)(p.Z,{component:"main",sx:{flexGrow:1,py:"".concat(m.yf.H_MOBILE+30,"px"),...r&&{py:"".concat(m.yf.H_DASHBOARD_DESKTOP+8,"px"),width:"calc(100% - ".concat(m.w$.W_DASHBOARD,"px)"),...a&&{width:"calc(100% - 220px)"},..."mini"===s&&{width:"calc(100% - ".concat(m.w$.W_DASHBOARD_MINI,"px)")}},...n},...o,children:t})}n(17011);var v=n(45697),Z=n.n(v),b=n(2734),y=n(93946),S=n(89206),w=n(10155),k=n(98355),_=n(5752),D=(n(87583),n(15518)),C=n(64666),I=n(67720),A=n(57922),P=n(86886),R=n(23795),N=n(60181),O=n(23508),B=n(54048),T=n(82019),L=n(79103),M=n(78276),z=(n(48740),n(54840)),E=(n(76303),n(16310),n(31350),n(46554)),F=n(53920),W=n(26179),H=n(54306),G=n(44718),K=n(61477);function $(e){let{from:t="header"}=e;var n,r,a,s,c;const{select:d,wallets:p,publicKey:m,connect:f,disconnect:j,connecting:v}=(0,H.O)(),{connection:Z}=(0,G.R)(),b=(0,g.Z)("down","xxl"),[y,S]=(0,o.useState)(!1),[w,k]=(0,o.useState)(0);(0,o.useEffect)((()=>{let e=!1;const t=(0,F.ZP)(W.LB,!!String(m)&&{query:"account=".concat(String(m))});if(m){e||S(!1);const n=async()=>{const t=await Z.getBalance(m);e||k((0,E.g7)(t/K.LAMPORTS_PER_SOL,2))};n(),t.on("Presale:Updated",(async e=>{var t;console.log("Presale:Updated: res =>",e),["SolSale:LogDeposit","SolSale:LogEmergencyWithdraw"].includes(e.event)&&(null===(t=e.data)||void 0===t?void 0:t.participant)===String(m)&&n()}))}return()=>{e=!0,t&&t.disconnect()}}),[m]);const[_,D]=(0,o.useState)(!1),[M,$]=(0,o.useState)(!1),[X,Y]=(0,o.useState)({}),U=(0,o.useCallback)((async e=>{try{Y(e),["Loadable","Installed"].includes(e.readyState)?"Mobile Wallet Adapter"==e.name?await f():d(e.name):$(!0)}catch(t){alert(t.message)}}),[d]),q=["Phantom","Solflare"];return(0,i.jsxs)(i.Fragment,{children:[m?(0,i.jsx)(z.Z,{onConnect:()=>S(!1)}):(0,i.jsx)(i.Fragment,{children:p.filter((e=>"Loadable"===e.readyState)).length>0?(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(u.Z,{variant:"outlined",color:"inherit",onClick:()=>S(!0),sx:{color:"text.primary",minHeight:"35px","& .MuiButton-endIcon":{maxWidth:4,pr:2}},children:(0,i.jsx)(h.Z,{variant:"body3",children:"Connect"})})}):(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",justifyContent:"center",spacing:1,sx:{py:b?.5:1,px:2,borderRadius:"8px",color:e=>e.palette.text.primary,border:e=>"solid 1px ".concat(e.palette.text.primary)},children:[(0,i.jsx)(L.Z,{sx:{fontSize:"1.4rem",...b&&{fontSize:"1rem"}}}),(0,i.jsx)(h.Z,{variant:"body2",fontWeight:300,children:"No Wallet Installed"})]})}),(0,i.jsx)(C.Z,{disableScrollLock:!0,sx:{"& .MuiDialog-paper":{width:"80%",bgcolor:"#2b3645"}},maxWidth:"xs",open:y,onClose:()=>S(!1),children:(0,i.jsxs)(x.Z,{sx:{py:3},children:[(0,i.jsxs)(x.Z,{sx:{pb:1},children:[(0,i.jsx)(h.Z,{variant:"h4",sx:{px:3},children:"Connect Wallet"}),(0,i.jsx)(I.Z,{sx:{mt:1}})]}),(0,i.jsx)(x.Z,{sx:{px:3},spacing:2,children:M?(0,i.jsxs)(x.Z,{sx:{px:3},children:[(0,i.jsxs)(x.Z,{alignItems:"center",children:[(0,i.jsx)(x.Z,{sx:{p:1},children:(0,i.jsx)(l(),{src:null===(n=X)||void 0===n?void 0:n.icon,alt:null===(r=X)||void 0===r?void 0:r.name,height:80,width:80})}),(0,i.jsxs)(h.Z,{mt:2,mb:1,variant:"body1",children:["Have you Installed "+(null===(a=X)||void 0===a?void 0:a.name),"?"]}),(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",spacing:1,sx:{cursor:"pointer",color:"text.primary"},component:R.Z,target:"_blank",href:null===(s=[{name:"Phantom",link:"https://phantom.app/"},{name:"Solflare",link:"https://solflare.com/"},{name:"Trust",link:"https://trustwallet.com/"},{name:"MathWallet",link:"https://mathwallet.org/"},{name:"Ledger",link:"https://www.ledger.com/"}].find((e=>{var t;return e.name===(null===(t=X)||void 0===t?void 0:t.name)})))||void 0===s?void 0:s.link,children:[(0,i.jsx)(h.Z,{variant:"caption",sx:{textDecoration:"underline"},children:"Install "+(null===(c=X)||void 0===c?void 0:c.name)}),(0,i.jsx)(B.Z,{sx:{fontSize:12}})]})]}),(0,i.jsxs)(x.Z,{mt:2,spacing:1,children:[(0,i.jsx)(h.Z,{variant:"caption",children:"On mobile:"}),(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",children:[(0,i.jsx)(T.Z,{sx:{fontSize:8,mx:2}}),(0,i.jsx)(h.Z,{variant:"caption",children:"You should open the app instead"})]})]}),(0,i.jsxs)(x.Z,{mt:2,spacing:1,children:[(0,i.jsx)(h.Z,{variant:"caption",children:"On desktop:"}),(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",children:[(0,i.jsx)(T.Z,{sx:{fontSize:8,mx:2}}),(0,i.jsx)(h.Z,{variant:"caption",children:"Install and refresh the page"})]})]}),(0,i.jsx)(I.Z,{sx:{my:2}}),(0,i.jsx)(x.Z,{alignItems:"center",children:(0,i.jsx)(u.Z,{onClick:()=>$(!1),children:"Go Back"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.Z,{spacing:1,children:[(0,i.jsx)(h.Z,{variant:"caption",children:"Recommended Wallets"}),p.filter((e=>q.includes(e.adapter.name))).map(((e,t)=>(0,i.jsx)(u.Z,{variant:"outlined",fullWidth:!0,onClick:()=>U({name:e.adapter.name,icon:e.adapter.icon,readyState:e.readyState}),startIcon:(0,i.jsx)(l(),{src:e.adapter.icon,alt:e.adapter.name,height:30,width:30}),children:e.adapter.name},t)))]}),(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",onClick:()=>D(!_),sx:{cursor:"pointer"},children:[(0,i.jsx)(h.Z,{fontSize:10,children:"More Wallets"}),_?(0,i.jsx)(N.Z,{fontSize:"10"}):(0,i.jsx)(O.Z,{fontSize:"10"})]}),(0,i.jsx)(A.Z,{in:_,children:(0,i.jsx)(P.ZP,{container:!0,spacing:1,children:p.filter((e=>!q.includes(e.adapter.name))).map(((e,t)=>(0,i.jsx)(P.ZP,{item:!0,xs:12,sm:6,children:(0,i.jsx)(u.Z,{variant:"outlined",fullWidth:!0,sx:{minHeight:"40px"},onClick:()=>U({name:e.adapter.name,icon:e.adapter.icon,readyState:e.readyState}),startIcon:(0,i.jsx)(l(),{src:e.adapter.icon,alt:e.adapter.name,height:20,width:20}),children:e.adapter.name},t)},t)))})})]})})]})})]})}n(89284);var X=n(93990);function Y(e){let{onOpenNav:t}=e;const n=(0,b.Z)(),o=(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[(0,i.jsx)(y.Z,{onClick:t,size:"large",sx:{color:"text.primary"},children:(0,i.jsx)(k.Z,{icon:"eva:menu-2-fill"})}),(0,i.jsxs)(x.Z,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1},sx:{mr:1},children:[(0,i.jsx)(_.Z,{label:"GemPad",startIcon:(0,i.jsx)(p.Z,{component:"img",src:"/logo/logo_gempad.svg",alt:"gempad",width:{xs:14,xxl:18},height:{xs:14,xxl:18}}),link:W.LB}),(0,i.jsx)(D.Z,{}),(0,i.jsx)($,{})]})]});return(0,i.jsx)(S.Z,{sx:{borderBottom:"solid 2px ".concat(n.palette.border.primary),bgcolor:"background.default",pr:0,zIndex:n.zIndex.appBar+1,...(0,X.Ls)({color:n.palette.background.default}),transition:n.transitions.create(["height"],{duration:n.transitions.duration.shorter})},children:(0,i.jsx)(w.Z,{sx:{position:"relative",bgcolor:"background.default",height:1,py:2},children:o})})}Y.propTypes={onOpenNav:Z().func};var U=n(37794),q=n(76173),V=n(76882),Q=n(45399),J=n(31300),ee=n(17709),te=n(31523),ne=n(25128),ie=n(25084),oe=n(93289),re=n(75542),ae=n(25150),se=n(36111),le=n(83809);const ce=e=>(0,i.jsx)(Q.Z,{src:"/assets/icons/navbar/".concat(e,".svg"),sx:{width:20,height:20}}),de={admin:ce("ic_kanban"),blog:ce("ic_blog"),cart:ce("ic_cart"),chat:ce("ic_chat"),mail:ce("ic_mail"),user:ce("ic_user"),file:ce("ic_file"),lock:ce("ic_lock"),label:ce("ic_label"),blank:ce("ic_blank"),kanban:ce("ic_kanban"),folder:ce("ic_folder"),banking:ce("ic_banking"),booking:ce("ic_booking"),invoice:ce("ic_invoice"),calendar:ce("ic_calendar"),disabled:ce("ic_disabled"),external:ce("ic_external"),menuItem:ce("ic_menu_item"),ecommerce:ce("ic_ecommerce"),analytics:ce("ic_analytics"),dashboard:ce("ic_dashboard"),launch:(0,i.jsx)(J.Z,{fontSize:"small"}),stakes:(0,i.jsx)(re.Z,{fontSize:"small"}),audit:(0,i.jsx)(ee.Z,{fontSize:"small"}),doc:(0,i.jsx)(te.Z,{fontSize:"small"}),telegram:(0,i.jsx)(ne.Z,{fontSize:"small"}),twitter:(0,i.jsx)(ie.Z,{fontSize:"small"}),utility:(0,i.jsx)(oe.Z,{fontSize:"small"}),heart:(0,i.jsx)(se.Z,{fontSize:"small"}),alarm:(0,i.jsx)(ae.Z,{fontSize:"small"}),home:"mdi:home",docs:(0,i.jsx)(Q.Z,{src:"/assets/icons/navbar/Docs.svg",alt:"docs",sx:{width:20,height:20}}),manage:(0,i.jsx)(Q.Z,{src:"/assets/icons/navbar/Manage.svg",alt:"manage",sx:{width:20,height:20}}),create:(0,i.jsx)(Q.Z,{src:"/assets/icons/navbar/Create.svg",alt:"create",sx:{width:20,height:20}}),profile:(0,i.jsx)(k.Z,{icon:"eva:people-fill"}),presales:(0,i.jsx)(k.Z,{icon:"mdi:view-dashboard"}),postsales:(0,i.jsx)(Q.Z,{src:"/assets/icons/navbar/Instant_sale.svg",alt:"otc",sx:{width:20,height:20}}),locks:(0,i.jsx)(k.Z,{icon:"mdi:lock"}),tools:(0,i.jsx)(k.Z,{icon:"mdi:tools"}),staking:(0,i.jsx)(k.Z,{icon:"ph:currency-circle-dollar-bold"}),alerts:(0,i.jsx)(Q.Z,{src:"/assets/icons/navbar/Alerts.svg",alt:"alerts",sx:{width:20,height:20}}),alpha:ce("ic_alpha")};var xe=(e,t)=>{var n,i;return[(null===(n=e)||void 0===n?void 0:n.toString())===le.YS.toString()&&{subheader:"Admin",items:[{title:"Admin",icon:de.admin,path:"/admin",children:[{title:"EVO Config",path:"/admin/idoV2"},{title:"Banners",path:"/admin/banner"},{title:"Spotlight",path:"/admin/spotlight"},{title:"Legendary Sales",path:"/admin/legendary"}].filter((e=>!!e))}]},e&&(null===(i=e)||void 0===i?void 0:i.toString())===le.YS.toString()&&!t&&{subheader:"Authentication",items:[{title:"Sign in",path:V.mD.sign,side:"left",icon:de.profile,iconSize:22}]},{subheader:"Explore",items:[{title:"Presales",path:V.mD.presale.all,side:"left",icon:de.presales,iconSize:22},{title:"Locks",path:V.mD.locks.root,side:"right",icon:de.locks},{title:"Staking",path:V.mD.staking.all,side:"left",icon:de.staking,iconSize:22}]},{subheader:"Developers",items:[{title:"Create",path:V.mD.create.root,side:"left",icon:de.create},{title:"Manage",path:V.mD.manage.root,side:"left",icon:de.manage},{title:"Utility",path:V.mD.utility.root,side:"right",icon:de.tools}]},{subheader:"Support",items:[{title:"Docs",path:V.mD.docs,side:"left",icon:de.docs},{title:"Sale Alerts",path:V.mD.alerts,side:"right",icon:de.alerts,iconSize:22},{title:"Alpha Club",path:V.mD.alpha,side:"right",icon:de.alpha}]}].filter((e=>!!e))},he=n(66781);function ue(e){let{sx:t,...n}=e;const r=(0,b.Z)(),a=(0,f.I0)(),s=(0,g.Z)("up","lg"),l=(0,g.Z)("up","xxl"),{themeLayout:c}=(0,f.v9)((e=>e.profile.settings)),d=(0,o.useCallback)((()=>{a((0,he.VE)())}),[a]);return s?(0,i.jsx)(y.Z,{size:"small",onClick:d,sx:{p:.5,top:26,position:"fixed",left:(l?220:m.w$.W_DASHBOARD)-12,zIndex:r.zIndex.appBar+1,border:"1px solid ".concat(r.palette.border.primary),...(0,X.Ls)({opacity:.48,color:r.palette.background.default}),"&:hover":{bgcolor:"background.default"},...t},...n,children:(0,i.jsx)(k.Z,{color:e=>"dark"===e.palette.mode?"#363B47":"rgba(145, 158, 171, 0.24)",width:16,icon:"vertical"===c?"eva:arrow-ios-back-fill":"eva:arrow-ios-forward-fill"})}):null}function pe(){const{publicKey:e,sendTransaction:t}=(0,H.O)();return(0,i.jsxs)(p.Z,{component:"nav",sx:{flexShrink:{lg:0},width:{lg:m.w$.W_DASHBOARD_MINI}},children:[(0,i.jsx)(ue,{sx:{top:26,left:m.w$.W_DASHBOARD_MINI-12}}),(0,i.jsxs)(x.Z,{sx:{pb:2,height:"100vh",position:"fixed",width:m.w$.W_DASHBOARD_MINI,bgcolor:e=>e.palette.background.default,borderBottom:e=>"solid 2px ".concat(e.palette.border.primary),borderRight:e=>"solid 2px ".concat(e.palette.border.primary),...X.IW},children:[(0,i.jsx)(x.Z,{sx:{py:2,mx:"auto"},children:(0,i.jsx)(U.Z,{})}),(0,i.jsx)(M.Z,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:(0,i.jsx)(q.Hg,{data:xe(e)})})]})]})}ue.propTypes={sx:Z().object};var ge=n(19058),me=n(94806);const fe=a()((()=>Promise.resolve().then(n.bind(n,13064))),{loadableGenerated:{webpack:()=>[13064]}});function je(e){let{openNav:t,onCloseNav:n}=e;const{publicKey:r,sendTransaction:a}=(0,H.O)(),{pathname:s}=(0,c.useRouter)(),l=(0,b.Z)(),{themeLayout:d}=(0,f.v9)((e=>e.profile.settings)),h=(0,f.v9)((e=>e.profile.loggedIn)),u="horizontal"===d;(0,g.Z)("up","lg"),(0,g.Z)("up","xxl"),(0,me.y)(m.yf.H_DASHBOARD_DESKTOP);return(0,o.useEffect)((()=>{t&&n()}),[n,t,s]),(0,i.jsxs)(p.Z,{component:"nav",sx:{flexShrink:{lg:0},width:{lg:m.w$.W_DASHBOARD,xxl:220}},children:[(0,i.jsx)(ue,{}),(0,i.jsxs)(ge.ZP,{open:!0,variant:"permanent",PaperProps:{sx:{zIndex:0,height:1,width:{xs:m.w$.W_DASHBOARD,xxl:m.w$.W_DASHBOARD_XXL},bgcolor:l.palette.background.default,borderRight:"solid 2px ".concat(l.palette.border.primary),...(0,X.Ls)({opacity:.6,color:l.palette.background.default}),display:"flex",flexDirection:"column"}},children:[(0,i.jsx)(x.Z,{sx:{flexShrink:0,borderBottom:"solid 2px ".concat(l.palette.border.primary),height:{xs:m.yf.H_DASHBOARD_DESKTOP_OFFSET,xxl:m.yf.H_MAIN_DESKTOP}},alignItems:"center",justifyContent:"center",children:(0,i.jsx)(U.Z,{})}),(0,i.jsx)(x.Z,{sx:{minHeight:{xs:"calc(100vh - ".concat(m.yf.H_DASHBOARD_DESKTOP_OFFSET,"px)"),xxl:"calc(100vh - ".concat(m.yf.H_MAIN_DESKTOP,"px)")},display:"flex",flexGrow:1,flexDirection:"column",overflowY:"auto"},children:(0,i.jsx)(fe,{data:xe(r,h)})})]})]})}function ve(e){let{openNav:t,onCloseNav:n}=e;const{pathname:r}=(0,c.useRouter)(),{publicKey:a,sendTransaction:s}=(0,H.O)();(0,o.useEffect)((()=>{t&&n()}),[r]);const l=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.Z,{spacing:3,sx:{pt:3,px:2.5,flexShrink:0},children:(0,i.jsx)(U.Z,{})}),(0,i.jsxs)(M.Z,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:[(0,i.jsx)(q.Mr,{data:xe(a)}),(0,i.jsx)(p.Z,{sx:{flexGrow:1}})]})]});return(0,i.jsxs)(p.Z,{component:"nav",sx:{flexShrink:{lg:0},width:{lg:m.w$.W_DASHBOARD}},children:[(0,i.jsx)(ue,{}),(0,i.jsx)(ge.ZP,{open:t,onClose:n,ModalProps:{keepMounted:!1},PaperProps:{sx:{width:m.w$.W_DASHBOARD}},disableScrollLock:!0,children:l})]})}je.propTypes={openNav:Z().bool,onCloseNav:Z().func},ve.propTypes={openNav:Z().bool,onCloseNav:Z().func};var Ze=n(27484),be=n.n(Ze),ye=n(6154),Se=n(22692),we=n(94304),ke=n(68485);const _e=e=>{(0,Se.A6)("solsale.token",e),ye.Z.defaults.headers.Authorization="Bearer ".concat(e)},De=a()((()=>Promise.resolve().then(n.bind(n,17011))),{loadableGenerated:{webpack:()=>[17011]}});function Ce(e){let{children:t}=e;const n=(0,g.Z)("up","lg"),r=(0,g.Z)("down","md"),a=(0,g.Z)("between","md","lg"),s=(0,f.v9)((e=>e.profile.settings.themeLayout)),m=(0,c.useRouter)(),v=(0,f.I0)(),{publicKey:Z}=(0,H.O)(),b=(0,f.v9)((e=>e.profile.loggedIn)),y=()=>{(async(e,t)=>{try{var n;const i={title:"Sign into Gempad",URI:W.LB,"Chain ID":t===W.PX?W.PX:null===(n=t)||void 0===n?void 0:n.id,"Issued At":be()().toISOString(),"Expires At":be()().add(1,"day").toISOString()},o={data:i,address:e,signedMessage:await(0,we.Z)(i)},r=await(0,ke.Z)("GetToken"),{data:a}=await ye.Z.post("/me/get-token",o,{headers:{token:r}});return _e(a),!0}catch(i){return!1}})(String(Z),W.PX).then((e=>{e&&v((0,he.SL)(!0))}))},[S,w]=(0,o.useState)(!r),k="mini"===s,_=()=>{w(!0)},D=()=>{w(!1)};(0,o.useEffect)((()=>{r&&w(!1)}),[r]);const C=(0,o.useMemo)((()=>(0,i.jsx)(ve,{openNav:S,onCloseNav:D})),[S]),I=(0,o.useMemo)((()=>(0,i.jsx)(j,{children:(0,i.jsx)(d.Z,{disableGutters:!0,maxWidth:!1,sx:{height:1,pt:0,px:{xs:2,sm:3,lg:7}},children:!["/profile","/sign"].some((e=>m.pathname.startsWith(e)))||Z&&b?m.pathname.startsWith("/admin")&&!b?"":t:(0,i.jsxs)(x.Z,{alignItems:"center",mt:10,children:[(0,i.jsx)(l(),{src:"/assets/4.gif",width:150,height:150,alt:"gempad loader"}),(0,i.jsx)(h.Z,{variant:"h3",children:"Sign In To Continue"}),(0,i.jsx)(x.Z,{direction:"row",spacing:2,mt:4,children:Z?!b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.Z,{variant:"outlined",onClick:y,children:"Sign in"}),(0,i.jsx)(u.Z,{variant:"outlined",onClick:m.back,children:"Go Back"})]}):(0,i.jsx)(h.Z,{variant:"h3",children:"Connect Wallet"})})]})})})),[t,Z,b,m.pathname,m.back,y]);(0,o.useEffect)((()=>{ye.Z.defaults.headers.Authorization="Bearer ".concat((0,Se.GQ)("solsale.token"))}),[v]),(0,o.useEffect)((()=>{v((0,he.SL)(!1)),Z&&(ye.Z.interceptors.response.clear(),ye.Z.interceptors.response.use((async e=>{try{var t,n;const i=e.headers.authorization;200===(null===(t=e)||void 0===t?void 0:t.status)&&(null===(n=i)||void 0===n?void 0:n.length)>0&&(_e(i),b||v((0,he.SL)(!0)))}catch(i){console.log(i)}return e}),(async e=>{var t;return Promise.reject({message:null!==(t=e.message)&&void 0!==t?t:"axios: Something went wrong"})})),(async e=>{try{ye.Z.defaults.headers.common.account=e;const t=(0,Se.GQ)("solsale.token","");if(!t)return!1;ye.Z.defaults.headers.common.authorization="Bearer ".concat(t);const n=await(0,ke.Z)("VerifyToken"),{data:i}=await ye.Z.post("/me/verify-token",{},{headers:{token:n}});return _e(i),!0}catch(t){return!1}})(String(Z)).then((e=>{e&&v((0,he.SL)(!0))})))}),[Z,v]);return(0,i.jsxs)(i.Fragment,{children:[" ",r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Y,{onOpenNav:_}),C,I]}):k?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(De,{onOpenNav:_}),(0,i.jsxs)(p.Z,{sx:{display:{lg:"flex"},minHeight:{lg:1}},children:[n?(0,i.jsx)(pe,{}):C,I]})]}):n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(De,{onOpenNav:_}),(0,i.jsxs)(p.Z,{sx:{display:"flex",minHeight:1},children:[(0,i.jsx)(je,{openNav:S,onCloseNav:D}),I]})]}):a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(De,{onOpenNav:_}),(0,i.jsxs)(p.Z,{sx:{display:{lg:"flex"},minHeight:{lg:1}},children:[C,I]})]}):void 0," "]})}},46554:function(e,t,n){n.d(t,{A8:function(){return r},We:function(){return a},g7:function(){return s},pw:function(){return o}});var i=n(15229);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=String(e);const i=n.split(".");let o=i[0],r=i[1]||"";t&&r.length>t&&(r=r.slice(0,t));const a=[];for(;o.length>3;)a.unshift(o.slice(-3)),o=o.slice(0,-3);a.unshift(o);let s=a.join(",");return r.length>0&&r!=="0".repeat(t)&&(s+=".".concat(r)),s};function r(e){let t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return e="number"===typeof(e=e||"0")?Math.floor(e):e,0===r?(n=e,t=Number(e)):(n=(0,i.b)(e,r),t=Number(n)),t>=Number.MAX_SAFE_INTEGER?o(n,3):t>=.1?t===Number(t.toFixed(0))?o(t.toFixed(0),3):o(t.toFixed(3),3):String(Number(t.toPrecision(3)))}function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=Number(t),t>0&&("bigint"!==typeof e&&(e=BigInt(e)),e=(0,i.b)(e,t));try{let t=Number(e);return t>=Number.MAX_SAFE_INTEGER?t.toExponential(2):t>=1e12?Math.floor(t/1e10)/100+"T":t>=1e9?Math.floor(t/1e7)/100+"B":t>=1e6?Math.floor(t/1e4)/100+"M":t>=1e3?o(t,3):t>Math.floor(t)?"000"!==String(+t.toFixed(3)).split(".")[1]?String(+t.toFixed(3)):String(Math.floor(t)):String(t)}catch(n){return String(e)}}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=Number(t);const n=Number(e),i=String(e).length-String(e).indexOf(".")-1;let o;return o=i>t?Number(n.toFixed(t)):n,Number.isInteger(o)?parseInt(String(o)):o}},94304:function(e,t,n){n.d(t,{Z:function(){return r}});n(31350);var i=n(77191),o=n.n(i);async function r(e){const{title:t="Sign message",...n}=e,i=await window.solana.signMessage((new TextEncoder).encode(t),"utf8"),{signature:r,publicKey:a}=i;return JSON.stringify({publicKey:a.toBase58(),signature:o().encode(r)})}}}]);