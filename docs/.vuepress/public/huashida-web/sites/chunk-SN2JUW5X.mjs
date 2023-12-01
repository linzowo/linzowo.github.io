import{a as B}from"./chunk-B2I5J5SO.mjs";import{a as T}from"./chunk-P3WAODVA.mjs";import{a as l,b as m}from"./chunk-6KJODPOF.mjs";import{M as y,O as i,R as $,b as h,fa as A,t as g}from"./chunk-HNYESFWY.mjs";var x=A(function(t){let n=h.count(t.slots)>0,a=y.current()===y.canvas,f=n&&t.type==="graphic",b=t.type==="circle",W=t.type==="ellipse"?t.cylinderHeight/2:0,C=L(t.flip,W),s,r;if(f){let V=S(t.slots),u=S(V.props.svg),c=S(V.props.children);if(a&&!c.props.frame)return m("div",{style:_,children:[l("div",{style:O,children:"\u{1F48E}"}),l("p",{style:E,children:"Please connect to Graphic"}),l("p",{style:F,children:"You can only connect the Arc to a Graphic with a single path."})]});if(a&&c){let p=T(c),o=c.props.frame;r=`0 0 ${o.width} ${o.height}`;let I=p.match(/[\w-]+="[^"]*"/g);for(let w of I)w.includes("d=")&&(s=N(w))}if(!a&&u){let p=u.match(/[\w-]+="[^"]*"/g);r=u.split("viewBox=")[1],r=r.split(">")[0],r=r.replace(/^"(.+(?="$))"$/,"$1");for(let o of p)o.includes("d=")&&(s=N(o))}}let v=`curve-${B(s||C)}`,d;return t.alignmentBaseline==="top"&&(d="Text Top"),t.alignmentBaseline==="center"&&(d="Central"),t.alignmentBaseline==="bottom"&&(d="Hanging"),l(g.div,{style:{width:"100%",height:"100%",position:"relative"},draggable:"false",children:m(g.svg,{className:"transform-origin-center-center",style:{width:"100%",height:"100%",position:"absolute",inset:0,transformOrigin:"center",willChange:t.rotate&&"transform"},viewBox:f?r:"0 0 100 100",overflow:"visible",animate:b&&t.rotate&&{rotate:360},transition:b&&t.rotate&&{duration:100/t.rotateSpeed,repeat:1/0,ease:"linear"},children:[l("path",{id:v,d:f?s:C,strokeWidth:"none",fill:"transparent"}),l("text",{children:m("textPath",{href:`#${v}`,startOffset:t.startOffset,dominantBaseline:d,style:{fontSize:t.font.fontSize,fontFamily:t.font.font,fontWeight:t.font.fontWeight,wordSpacing:t.font.wordSpacing,letterSpacing:t.font.letterSpacing,fill:t.color},children:[t.text,!a&&t.animate&&l("animate",{attributeName:"startOffset",from:`${t.animateStart}%`,to:`${t.animateEnd}%`,begin:"0s",dur:`${t.animateDuration}s`,repeatCount:"indefinite"})]})})]})})},[".transform-origin-center-center { transform-origin: center center !important; }"]),Y=x;x.defaultProps={height:50,width:50};$(x,{text:{title:"Content",type:i.String,defaultValue:"\u2726 THANK YOU \u2726 FOR VISITING",displayTextArea:!0},type:{title:"Type",type:i.Enum,options:["circle","ellipse","graphic"],optionTitles:["Circle","Ellipse","Graphic"],defaultValue:!0},cylinderHeight:{title:"Height",type:i.Number,unit:"px",min:0,max:1e3,hidden:({type:e})=>e!=="ellipse"},rotate:{type:i.Boolean,title:"Rotate",defaultValue:!1,hidden:({type:e})=>e!=="circle"},rotateSpeed:{type:i.Number,title:"Speed",min:0,max:50,defaultValue:5,displayStepper:!0,step:1,hidden:({type:e,rotate:t})=>e!=="circle"||!t},slots:{type:i.ComponentInstance,title:"Graphic",hidden:({type:e})=>e!=="graphic"},alignmentBaseline:{title:"Align",type:i.Enum,options:["top","center","bottom"],optionIcons:["align-top","align-middle","align-bottom"],defaultValue:"bottom",displaySegmentedControl:!0},flip:{type:i.Boolean,defaultValue:!1,title:"Direction",enabledTitle:"CW",disabledTitle:"CCW",hidden:({type:e})=>e==="graphic"},startOffset:{title:"Offset",type:i.Number,defaultValue:0,max:360,unit:"\xB0",step:.5},color:{title:"Color",type:i.Color,defaultValue:"#999"},font:{type:i.Object,controls:{font:{type:i.String,placeholder:"Inter",defaultValue:"Inter"},fontSize:{title:"Size",type:i.Number,min:0,max:100,step:.5,defaultValue:12},fontWeight:{type:i.Enum,options:[100,200,300,400,500,600,700,800,900],defaultValue:600,title:"Weight"},wordSpacing:{title:"Word",type:i.Number,defaultValue:4,step:.1,displayStepper:!0},letterSpacing:{title:"Letter",type:i.Number,defaultValue:4,step:.1,displayStepper:!0}}},animate:{type:i.Boolean,defaultValue:!1,title:"Animate"},animateStart:{type:i.Number,min:-200,max:200,step:.1,defaultValue:-50,title:"From",unit:"%",hidden:e=>!e.animate},animateEnd:{type:i.Number,min:-200,max:200,step:.1,defaultValue:150,title:"To",unit:"%",hidden:e=>!e.animate},animateDuration:{type:i.Number,min:0,max:50,defaultValue:5,title:"Time",unit:"s",displayStepper:!0,hidden:e=>!e.animate}});function S(e){let t;return h.map(e,n=>{t===void 0&&(t=n)}),t}var N=e=>e.split("=")[1].replace(/['"]+/g,""),L=(e,t)=>{let n=50-t,a=50+t;return e?`M 0 50 L 0 ${a} A 1 1 0 1 0 100 ${a} L 100 ${n} A 1 1 0 1 0 0 ${n} L 0 50`:`M 0 50 L 0 ${n} A 1 1 0 0 1 100 ${n} L 100 50 L 100 ${a} A 1 1 0 0 1 0 ${a} L 0 ${n}`},_={display:"flex",width:"100%",height:"100%",placeContent:"center",placeItems:"center",flexDirection:"column",color:"#96F",background:"rgba(136, 85, 255, 0.1)",fontSize:11,overflow:"hidden"},O={fontSize:32,marginBottom:10},E={margin:0,marginBottom:10,fontWeight:600,textAlign:"center"},F={margin:0,opacity:.7,maxWidth:160,lineHeight:1.5,textAlign:"center"};export{Y as a};
//# sourceMappingURL=chunk-SN2JUW5X.mjs.map
