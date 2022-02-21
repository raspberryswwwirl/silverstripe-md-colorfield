import{o as e,c as t,w as l,r as a,a as s,b as o,t as r,d as n,e as i,f as u,g as d,h as c,i as h,j as v,k as m,l as f,m as p,v as b,n as y,p as g,q as w,F as x,s as _,u as k,x as S,y as V}from"./vendor.js";var D="";var M=(e,t)=>{const l=e.__vccOpts||e;for(const[a,s]of t)l[a]=s;return l};const z={name:"MDText",props:{label:{type:String,default(){return"Untitled"}},wrap:{type:Boolean,default(){return true}},gutters:{type:Number,default(){return 0}},scale:{type:String,default(){return"Body1"}},tag:{type:String,default(){return"mdtext"}}}};function C(n,i,u,d,c,h){return e(),t(s(u.tag),{wrap:u.wrap,gutters:u.gutters,scale:u.scale},{default:l((()=>[a(n.$slots,"default",{},(()=>[o(r(u.label),1)]),true)])),_:3},8,["wrap","gutters","scale"])}var B=M(z,[["render",C],["__scopeId","data-v-052fe06b"]]);class I{constructor(e){this.__key="key"in e?e.key:null;this.__value="value"in e?this.validate(e.value):null;this.__color={light:n("#eef0f4"),dark:n("#303b4d")};this.__id=`Swatch-${this.__key}-${this.__value.toHex()}`}get key(){return this.__key}set key(e){this.__key=e}get value(){return this.__value}set value(e){this.__value=e}validate(e){let t=n(e);return t.isValid()?t:false}accessibility(){let e=this.__value.isDark()?this.__color.light:this.__color.dark;let t=this.__value;let l=n.isReadable(t,e);return!l?"poor":null}isBaseColor(){return"500"==this.__key}toID(){return this.__id}toString(){return!!this.__value?this.__value.toHexString():null}toStyle(){return{backgroundColor:this.toString(),color:this.__value.isDark()?this.__color.light.toHexString():this.__color.dark.toHexString()}}}var N='md-vue-colorpicker{display:flex;position:relative;box-sizing:border-box;width:100%;max-width:256px;min-width:256px;flex-flow:row nowrap;align-items:center;justify-content:flex-start}:host md-sheet,:host md-sheetbody,:host md-sheettitle,:host md-colorlist,:host label.md-swatch,:host md-swatchlabel,:host md-swatchkey{display:flex;position:relative;box-sizing:border-box}:host md-sheet,:host md-sheetbody,:host md-sheettitle,:host md-colorlist,:host label.md-swatch{width:100%;max-width:100%}:host md-sheetbody,:host md-colorlist{flex-flow:column nowrap}:host md-sheettitle{display:none}:host .md-colorpicker{margin-bottom:24px}:host md-colorlist label.md-swatch{flex-flow:row nowrap;margin-bottom:1px;line-height:48px;padding-left:24px;transition:all .3s cubic-bezier(.4,0,.2,1)}:host md-colorlist label.md-swatch[disabled]{pointer-events:none;opacity:.5}@supports (filter: grayscale(80%)){:host md-colorlist label.md-swatch[disabled]{filter:grayscale(80%)}}:host md-colorlist label.md-swatch:before,:host md-colorlist label.md-swatch:after{position:absolute;left:100%;top:0;line-height:inherit;padding-left:12px;white-space:nowrap;opacity:.7;font-size:10px;text-transform:uppercase;pointer-events:none}:host md-colorlist label.md-swatch[contrast=poor]:after{content:"Insufficient Contrast";color:#da273b}:host md-colorlist label.md-swatch[contrast=poor][base=true]:after{content:none}:host md-colorlist label.md-swatch[base=true]:before{content:"Base Color";text-transform:none;color:#303b4d;opacity:1;font-size:12px}:host md-colorlist label.md-swatch input[type=checkbox]{position:absolute;margin:0;left:0;top:50%;z-index:2;transform:translate(11px,-50%)}:host md-colorlist md-swatchlabel{flex:0 0 100%;padding:0 12px;flex-flow:row nowrap;align-items:center;justify-content:space-between;color:inherit}:host md-colorlist md-swatchlabel md-swatchkey,:host md-colorlist md-swatchlabel md-swatchlabel{color:inherit}\n';const O={name:"MaterialColorPicker",components:{MDText:B},props:{id:{type:String,default(){return null}},title:{type:String,default(){return"Untitled"}},value:{type:String,default(){return null}},selections:{type:String,default(){return null}},selectionsfield:{type:String,default(){return null}},field:{type:String,default(){return null}}},setup(e,{emit:t}){const l=3;const a=i([]);const s=i([]);const o=i(null);const r=i(null);const m=u((()=>{var t;return null!=(t=e.field)?t:null}));const f=u({get:()=>e.value,set:l=>{e.value=l;a.value=[];o.value.value=l;o.value.classList.add("dirty");y();t("update:value",l)}});const p=e=>a.value.length>=l&&-1==a.value.indexOf(e)?true:null;const b=(e,t)=>{e.b=Math.floor(e.b*t.b/255);e.g=Math.floor(e.g*t.g/255);e.r=Math.floor(e.r*t.r/255);return n("rgb "+e.r+" "+e.g+" "+e.b)};const y=()=>{var t,l,a;if(!e.value||!o.value)return false;let r=(null==(t=o.value)?void 0:t.value)!=e.value?null!=(a=null==(l=o.value)?void 0:l.value)?a:e.value:e.value;let i=n("#ffffff");let u=b(n(r).toRgb(),n(r).toRgb());let d=n(r).tetrad();let c=[new I({key:"50",value:n.mix(i,r,12)}),new I({key:"100",value:n.mix(i,r,30)}),new I({key:"200",value:n.mix(i,r,50)}),new I({key:"300",value:n.mix(i,r,70)}),new I({key:"400",value:n.mix(i,r,85)}),new I({key:"500",value:n.mix(i,r,100)}),new I({key:"600",value:n.mix(u,r,87)}),new I({key:"700",value:n.mix(u,r,70)}),new I({key:"800",value:n.mix(u,r,54)}),new I({key:"900",value:n.mix(u,r,25)}),new I({key:"A100",value:n.mix(u,d[4],15).saturate(80).lighten(65)}),new I({key:"A200",value:n.mix(u,d[4],15).saturate(80).lighten(55)}),new I({key:"A400",value:n.mix(u,d[4],15).saturate(100).lighten(45)}),new I({key:"A700",value:n.mix(u,d[4],15).saturate(100).lighten(40)})];return s.value=c};const g=()=>r.value.value=!!a.value?JSON.stringify([...a.value]):"";const w=e=>s.value.filter((t=>t.key==e));const x=()=>{var t,l,s,n,i;o.value=!o.value?document.querySelector(`#${m.value}`):o.value;r.value=!r.value?document.querySelector(`#${e.selectionsfield}`):r.value;y();let u=w("50");if(!!u&&!u.toString()==(null==(t=o.value)?void 0:t.value))a.value=JSON.parse(e.selections);else{a.value=[];f.value=(null==(l=o.value)?void 0:l.value)!=e.value?null!=(n=null==(s=o.value)?void 0:s.value)?n:e.value:e.value}if(null==(i=r.value)?void 0:i.value)a.value=JSON.parse(r.value.value)};d((()=>{}));c((()=>{x()}));h((()=>{}));v((()=>{g()}));return{fieldName:m,targetField:o,selectedValues:a,colorValues:s,disabled:p,value:f}}};const $=["for","contrast","base","disabled"];const j=["id","value","disabled"];function A(a,s,n,i,u,d){const c=m("MDText");const h=m("md-sheettitle");const v=m("md-swatchkey");const V=m("md-swatchvalue");const D=m("md-swatchlabel");const M=m("md-colorlist");const z=m("md-sheetbody");const C=m("md-sheet");return e(),t(C,{id:n.id,title:n.title,class:"md-sheet"},{default:l((()=>[f(z,null,{default:l((()=>[f(h,null,{default:l((()=>[f(c,{label:n.title,scale:"body2",tag:"span"},null,8,["label"])])),_:1}),p(y("input",{type:"color",class:"md-colorpicker","onUpdate:modelValue":s[0]||(s[0]=e=>i.value=e)},null,512),[[b,i.value]]),i.colorValues?(e(),t(M,{key:0},{default:l((()=>[(e(true),g(x,null,w(i.colorValues,((t,a)=>(e(),g("label",{for:t.toID(),class:"md-swatch",key:a,style:k(t.toStyle()),contrast:t.accessibility(),base:t.isBaseColor(),disabled:i.disabled(t.toString())},[p(y("input",{type:"checkbox",id:t.toID(),value:t.toString(),"onUpdate:modelValue":s[1]||(s[1]=e=>i.selectedValues=e),disabled:i.disabled(t.toString())},null,8,j),[[S,i.selectedValues]]),f(D,null,{default:l((()=>[f(v,null,{default:l((()=>[o(r(t.key),1)])),_:2},1024),f(V,null,{default:l((()=>[o(r(t.toString()),1)])),_:2},1024)])),_:2},1024)],12,$)))),128))])),_:1})):_("",true)])),_:1})])),_:1},8,["id","title"])}var H=M(O,[["render",A],["styles",[N]]]);var U="";function q(){const e=V(H);customElements.define("md-vue-colorpicker",e)}q();
//# sourceMappingURL=main.js.map
