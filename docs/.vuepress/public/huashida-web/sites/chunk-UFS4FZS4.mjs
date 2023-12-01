import{a as A}from"./chunk-6KJODPOF.mjs";import{M as D,O as t,R as oe,a as te,j as ne,k as B,o as U,p as re,s as ie,t as q,v as ae}from"./chunk-HNYESFWY.mjs";import{c as z}from"./chunk-ELYU6EKT.mjs";var T={};Object.defineProperty(T,"__esModule",{value:!0});var R,y=te,x=(R=y)&&typeof R=="object"&&"default"in R?R.default:R;function le(e,r){(r==null||r>e.length)&&(r=e.length);for(var l=0,a=new Array(r);l<r;l++)a[l]=e[l];return a}var ue=function(e){return x.createElement("div",null,e.children)},se=function(e){return x.createElement("span",{style:{whiteSpace:"pre"}},e.children)},pe=function(e){return x.createElement("span",null,e.children)},ye=y.memo(ue),ge=y.memo(se),he=y.memo(pe),xe=y.forwardRef(function(e,r){var l=e.className,a=e.style,m=e.LineWrapper,L=m===void 0?ye:m,w=e.WordWrapper,v=w===void 0?ge:w,s=e.LetterWrapper,V=s===void 0?he:s,S=e.extraProps,i="";x.Children.map(e.children,function(o){if(typeof o!="string"&&typeof o!="number")throw new Error("SplitText expect a text as children");i+=String(o)});var p=y.useRef(null),f=y.useState([]),n=f[0],b=f[1],u=y.useRef(0);y.useLayoutEffect(function(){return function(){var o=p.current;if(o){if(n.length>0)return function(Y,j){for(var O,F=u.current||Y.map(function(c){return c.length}).sort(function(c,Z){return Z-c})[0],$=[],k="",K=0,de=function(c,Z){var M;if(typeof Symbol>"u"||c[Symbol.iterator]==null){if(Array.isArray(c)||(M=function(E,We){if(E){if(typeof E=="string")return le(E,void 0);var P=Object.prototype.toString.call(E).slice(8,-1);return P==="Object"&&E.constructor&&(P=E.constructor.name),P==="Map"||P==="Set"?Array.from(E):P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)?le(E,void 0):void 0}}(c))){M&&(c=M);var ee=0;return function(){return ee>=c.length?{done:!0}:{done:!1,value:c[ee++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(M=c[Symbol.iterator]()).next.bind(M)}(j.split(" ").entries());!(O=de()).done;){var Q=O.value[1];(K+=Q.length+1)>F+1&&($.push(k),k="",K=0),k+=Q.trim()+" "}$.push(k),b($.map(function(c){return c.trim()})),F>u.current&&(u.current=F)}(n,i);for(var d,W=[],g=[],h=0,N=Array.from(o.children);h<N.length;h++){var H=N[h],C=H.getBoundingClientRect().top;d==null&&(d=C),C!==d&&(W.push(g.join(" ")),g=[]),d=C,g.push((H.textContent||"").trim())}W.push(g.join(" ")),b(W)}}()},[i]);var _=0,I=0;return n.length?x.createElement("div",{className:l,ref:function(o){p.current=o,typeof r=="function"?r(o):r&&(r.current=o)},style:a},n.map(function(o,d){var W=o.split(" ");return W=W.map(function(g,h){return h===W.length-1?g:g+" "}),x.createElement(L,{key:d,lineIndex:d,extraProps:S},W.map(function(g,h){var N=g.split("");return x.createElement(v,{key:h,lineIndex:d,wordIndex:h,countIndex:_++,extraProps:S},N.map(function(H,C){return x.createElement(V,{key:C,lineIndex:d,wordIndex:h,letterIndex:C,countIndex:I++,extraProps:S},H)}))}))})):x.createElement("div",{className:l,ref:p,style:a},i.split(" ").map(function(o,d){return x.createElement("span",{key:d},o," ")}))}),ve=y.forwardRef(function(e,r){var l,a,m,L=e.children,w=function(i,p){if(i==null)return{};var f,n,b={},u=Object.keys(i);for(n=0;n<u.length;n++)p.indexOf(f=u[n])>=0||(b[f]=i[f]);return b}(e,["children"]),v=y.useState(0),s=v[0],V=v[1],S=(l=function(){return V(function(i){return i+1})},a===void 0&&(a=!1),function(){for(var i=this,p=arguments.length,f=new Array(p),n=0;n<p;n++)f[n]=arguments[n];var b=a&&!m,u=function(){return l.apply(i,f)};clearTimeout(m),m=setTimeout(u,300),b&&u()});return y.useEffect(function(){return z.addEventListener("resize",S),function(){return z.removeEventListener("resize",S)}},[]),x.createElement(xe,Object.assign({key:s},w,{ref:r}),L)});T.LetterWrapper=pe,T.LineWrapper=ue,T.SplitText=ve,T.WordWrapper=se;var we=T.__esModule,Le=T.LetterWrapper,Ve=T.LineWrapper,fe=T.SplitText,Oe=T.WordWrapper;var Se={opacity:1,x:0,y:0,scale:1,rotate:0,rotateX:0,rotateY:0};function G(e){return e?"visible":"hidden"}function X(e){let{opacity:r,x:l,y:a,scale:m,rotate:L,rotateX:w,rotateY:v}=e.effectOptions,s=D.current()===D.canvas,V=ae(s?1:0),S=e.transitionOptions.type==="spring",i=U(),[p,f]=re(()=>s?"visible":G(!e.variant)),n=U({});B(()=>{n.current={}},[e.type]),B(()=>{s||requestAnimationFrame(()=>{V.set(1),f(G(e.variant))})},[]),B(()=>{s||(i.current!==e.variant&&(n.current={},f(G(e.variant))),i.current=e.variant)},[e.variant]);let b={type:e.transitionOptions.type,stiffness:e.transitionOptions.stiffness,damping:e.transitionOptions.damping,mass:e.transitionOptions.mass},u={type:e.transitionOptions.type,duration:e.transitionOptions.duration,ease:e.transitionOptions.ease},_={hidden:{opacity:r,x:l,y:a,scale:m,rotate:L,rotateX:w,rotateY:v},visible:Se},I=S?b:u,o=e.transitionOptions.delay,d=e.type==="letter",W=e.type==="word",g=e.type==="line",h={display:"contents"};function N({isLetter:H,isWord:C,isLine:Y}){let j={type:e.type,variants:_,filteredTransition:I,delay:o,stagger:e.stagger,perWord:e.perWord,hasIndexAnimatedRef:n};return H?{LetterWrapper:O=>A(J,{...O,...j})}:Y?{LineWrapper:O=>A(J,{...O,...j})}:{WordWrapper:O=>A(J,{...O,...j})}}return A(q.div,{style:{width:"100%",height:"100%",position:"relative",overflow:e.overflow?"visible":"hidden",fontSize:e.font.fontSize,fontFamily:e.font.font,fontWeight:e.font.fontWeight,letterSpacing:e.font.letterSpacing,lineHeight:e.font.lineHeightType?e.font.lineHeight:`${e.font.lineHeightPixels}px`,textAlign:e.font.textAlign,whiteSpace:e.font.whiteSpace,color:e.color,left:`${e.font.offset}%`,margin:0,padding:0,opacity:V},initial:s?"visible":"hidden",animate:p,children:s?e.text:A(fe,{style:h,...N({isLetter:d,isWord:W,isLine:g}),children:e.text})})}var be=(e,r,l,a=0,m=0,L=0,w=0,v)=>e?v?m:a:r?a:w,J=({type:e,countIndex:r=0,letterIndex:l=0,wordIndex:a=0,lineIndex:m=0,variants:L,isCanvas:w,filteredTransition:v,delay:s,stagger:V,children:S,perWord:i,hasIndexAnimatedRef:p})=>{let u=be(e==="letter",e==="word",e==="line",r,l,a,m,i),{animate:_}=ne(ie),I={};return p.current[u]===!0&&(I.initial=_),A(q.span,{...I,onAnimationComplete:()=>p.current[u]=!0,style:{perspective:1200,display:"inline-block",whiteSpace:"pre",margin:0,padding:0,willChange:"transform"},variants:L,transition:{...v,delay:s+V*(u+1)},children:S})};X.displayName="Motion Text";X.defaultProps={text:"Hello World",stagger:.05,variant:!0,newTab:!0,tag:"heading1",effectOptions:{x:0,y:100,rotate:0,rotateX:0,rotateY:0},transitionOptions:{type:"spring",stiffness:400,damping:30,mass:1,delay:.05},overflow:!1,font:{font:"Inter",fontSize:32,fontWeight:400,textAlign:"center",lineHeight:1.2,lineHeightType:!0,lineHeightPixels:100,letterSpacing:0,offset:0,whiteSpace:"nowrap"}};oe(X,{text:{type:t.String,title:"Text",defaultValue:"Hello World",displayTextArea:!0},type:{title:"Type",type:t.Enum,options:["letter","word","line"],optionTitles:["Letter","Word","Line"],defaultValue:"letter"},perWord:{type:t.Boolean,title:"Per Word",defaultValue:!1,hidden:e=>e.type!=="letter"},variant:{title:"Animate",type:t.Boolean,defaultValue:!0,enabledTitle:"In",disabledTitle:"Out"},overflow:{title:"Overflow",type:t.Boolean,enabledTitle:"Show",disabledTitle:"Hide",defaultValue:!1},stagger:{title:"Stagger",type:t.Number,step:.01,defaultValue:.05,displayStepper:!0},effectOptions:{title:"From",type:t.Object,controls:{opacity:{title:"Opacity",type:t.Number,min:0,max:1,step:.01,defaultValue:0},x:{title:"X",type:t.Number,min:-200,max:200,unit:"%",step:1,defaultValue:0,displayStepper:!0},y:{title:"Y",type:t.Number,min:-200,max:200,unit:"%",step:1,defaultValue:100,displayStepper:!0},scale:{title:"Scale",type:t.Number,min:0,max:5,step:.01,defaultValue:1,displayStepper:!0},rotate:{title:"Rotate",type:t.Number,min:-360,max:360,unit:"\xB0",step:1,defaultValue:0},rotateX:{title:"Rotate X",type:t.Number,min:-360,max:360,unit:"\xB0",step:1,defaultValue:0},rotateY:{title:"Rotate Y",type:t.Number,min:-360,max:360,unit:"\xB0",step:1,defaultValue:0}}},transitionOptions:{type:t.Transition,title:"Transition",defaultValue:{type:"spring",stiffness:400,damping:30,mass:1,delay:.05}},color:{type:t.Color,defaultValue:"#888"},font:{type:t.Object,controls:{font:{type:t.String,placeholder:"Inter",defaultValue:"Inter"},fontSize:{title:"Size",type:t.Number,min:0,max:500,step:.5,defaultValue:32},fontWeight:{type:t.Enum,options:[100,200,300,400,500,600,700,800,900],defaultValue:400,title:"Weight"},textAlign:{type:t.Enum,displaySegmentedControl:!0,title:"Align",options:["left","center","right"],optionTitles:["Left","Center","Right"],defaultValue:"center"},letterSpacing:{title:"Letter",type:t.Number,defaultValue:0,step:.1,displayStepper:!0},offset:{type:t.Number,title:"Offset",min:-100,max:100,displayStepper:!0,step:.25,defaultValue:0,unit:"%"},whiteSpace:{type:t.Enum,title:"Space",options:["normal","nowrap","pre","pre-wrap","preline","break-spaces"],optionTitles:["Normal","No Wrap","Pre","Pre Wrap","Preline","Break Spaces"],defaultValue:"center"},lineHeight:{type:t.Number,title:"Line",min:-500,max:500,displayStepper:!0,step:.1,defaultValue:1.2,hidden:e=>!e.lineHeightType},lineHeightPixels:{type:t.Number,title:"Line",min:-500,max:500,displayStepper:!0,step:.1,defaultValue:100,hidden:e=>e.lineHeightType},lineHeightType:{type:t.Boolean,title:" ",enabledTitle:"em",disabledTitle:"px",defaultValue:!0}}}});export{X as a};
//# sourceMappingURL=chunk-UFS4FZS4.mjs.map
