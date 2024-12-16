import{s as f,M as kt,u as _t,j as o,c as M,r as ot,g as Tt,a as St}from"./index-780988ce.js";import{p as Ot,O as Pt}from"./OpenGraph-500aa841.js";import{g as Mt,P as q}from"./groupBy-d12bd137.js";const Et=f.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  border: 0;
  line-height: 3.5vw;
  height: 3.5vw;
  padding: 0 2vw 0 4.5vw;
  cursor: pointer;

  &:hover::before {
    width: 100%;
    transform: scale(0.9);
    transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    .dot {
      opacity: 0.0001;
      transform: translateX(100%);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &:hover {
    .dot {
      background-color: ${({theme:t})=>t.color.medium};
      transform: translateY(-50%) translateX(0.5vw) scale(0.3225);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .text {
      color: ${({theme:t})=>t.color.medium};
      transform: translateX(-0.5vw);
      transition: 0.9s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 3.5vw;
    box-sizing: border-box;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    transform: scale(1);
    background-color: ${({theme:t})=>t.color.black};
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }
`,It=f.span`
  position: absolute;
  display: inline-block;
  border-radius: 100%;
  will-change: transform;
  overflow: hidden;
  background-color: transparent;
  box-sizing: border-box;
  left: 0.5vw;
  top: 50%;
  width: 2.5vw;
  height: 2.5vw;
  transform: translateY(-50%) translateX(0) scale(1);
  box-shadow: ${({theme:t})=>`0 0 0 1px ${t.color.medium}`};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transform: translateX(0);
    background-image: url(img/arrow-right-button-white.svg);
    background-size: 50% auto;
    transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    background-position: center;
    background-repeat: no-repeat;
    box-sizing: border-box;
    will-change: transform;
  }
`,At=f.span`
  position: relative;
  color: ${({theme:t})=>t.color.black};
  font-weight: bold;
  font-size: 2vw;
  transform: translateX(0);
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
  @media ${kt} {
    font-size: 2.5vw;
  }
`,$t=({content:t,to:e})=>{const r=_t(),a=()=>{r(e)};return o.jsxs(Et,{onClick:a,children:[o.jsx(It,{className:"dot"}),o.jsx(At,{className:"text",children:t})]})},zt=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`,Rt=f.div`
  font-size: 20px;
  width: fit-content;
  padding: 10px;
  background-color: ${({theme:t})=>t.color.black_alpha};
  color: ${({theme:t})=>t.color.white};
  margin-bottom: 25px;
`,Dt=f.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`,Ft=f.a`
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  gap: 15px;
  align-items: center;
  padding: 8px 0px;

  &:hover {
    background-color: ${({theme:t})=>t.color.medium};
  }
`,Ct=f.div`
  font-size: 18px;
  word-break: break-all;
  line-height: 120%;
  padding: 4px;
`,Wt=f.div`
  font-size: 13px;
  color: ${({theme:t})=>t.color.black_alpha};
  font-weight: lighter;
  margin-top: 3px;
`,Lt=({post:t})=>{const{title:e,link:r,date:a}=t;return o.jsx(Dt,{children:o.jsxs(Ft,{role:"link",href:r,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Ct,{children:e}),o.jsx(Wt,{children:a})]})})},E=({title:t,posts:e})=>o.jsxs(zt,{children:[o.jsx(Rt,{"aria-label":t,children:t}),e.map((r,a)=>o.jsx(Lt,{post:r},a))]});var C={exports:{}},it=9007199254740991,Nt="[object Arguments]",Vt="[object Function]",Bt="[object GeneratorFunction]",W="[object Map]",Gt="[object Object]",Q="[object Promise]",L="[object Set]",Ut="[object String]",Z="[object WeakMap]",tt="[object DataView]",Xt=/[\\^$.*+?()[\]{}|]/g,Ht=/^\[object .+?Constructor\]$/,Kt=/^(?:0|[1-9]\d*)$/,K="\\ud800-\\udfff",at="\\u0300-\\u036f\\ufe20-\\ufe23",st="\\u20d0-\\u20f0",ct="\\ufe0e\\ufe0f",Jt="["+K+"]",N="["+at+st+"]",V="\\ud83c[\\udffb-\\udfff]",Yt="(?:"+N+"|"+V+")",ut="[^"+K+"]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",pt="[\\ud800-\\udbff][\\udc00-\\udfff]",ft="\\u200d",dt=Yt+"?",ht="["+ct+"]?",qt="(?:"+ft+"(?:"+[ut,lt,pt].join("|")+")"+ht+dt+")*",Qt=ht+dt+qt,Zt="(?:"+[ut+N+"?",N,lt,pt,Jt].join("|")+")",te=RegExp(V+"(?="+V+")|"+Zt+Qt,"g"),ee=RegExp("["+ft+K+at+st+ct+"]"),re=typeof M=="object"&&M&&M.Object===Object&&M,ne=typeof self=="object"&&self&&self.Object===Object&&self,j=re||ne||Function("return this")();function oe(t,e){for(var r=-1,a=t?t.length:0,g=Array(a);++r<a;)g[r]=e(t[r],r,t);return g}function ie(t){return t.split("")}function ae(t,e){for(var r=-1,a=Array(t);++r<t;)a[r]=e(r);return a}function se(t,e){return oe(e,function(r){return t[r]})}function ce(t,e){return t==null?void 0:t[e]}function ue(t){return ee.test(t)}function le(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function pe(t){for(var e,r=[];!(e=t.next()).done;)r.push(e.value);return r}function fe(t){var e=-1,r=Array(t.size);return t.forEach(function(a,g){r[++e]=[g,a]}),r}function de(t,e){return function(r){return t(e(r))}}function he(t){var e=-1,r=Array(t.size);return t.forEach(function(a){r[++e]=a}),r}function ge(t){return ue(t)?me(t):ie(t)}function me(t){return t.match(te)||[]}var be=Function.prototype,I=Object.prototype,D=j["__core-js_shared__"],et=function(){var t=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),gt=be.toString,A=I.hasOwnProperty,S=I.toString,ve=RegExp("^"+gt.call(A).replace(Xt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=j.Symbol,F=rt?rt.iterator:void 0,ye=I.propertyIsEnumerable,xe=de(Object.keys,Object),B=O(j,"DataView"),G=O(j,"Map"),U=O(j,"Promise"),X=O(j,"Set"),H=O(j,"WeakMap"),we=k(B),je=k(G),ke=k(U),_e=k(X),Te=k(H);function Se(t,e){var r=mt(t)||ze(t)?ae(t.length,String):[],a=r.length,g=!!a;for(var v in t)(e||A.call(t,v))&&!(g&&(v=="length"||Ie(v,a)))&&r.push(v);return r}function Oe(t){return S.call(t)}function Pe(t){if(!vt(t)||Ae(t))return!1;var e=bt(t)||le(t)?ve:Ht;return e.test(k(t))}function Me(t){if(!$e(t))return xe(t);var e=[];for(var r in Object(t))A.call(t,r)&&r!="constructor"&&e.push(r);return e}function Ee(t,e){var r=-1,a=t.length;for(e||(e=Array(a));++r<a;)e[r]=t[r];return e}function O(t,e){var r=ce(t,e);return Pe(r)?r:void 0}var w=Oe;(B&&w(new B(new ArrayBuffer(1)))!=tt||G&&w(new G)!=W||U&&w(U.resolve())!=Q||X&&w(new X)!=L||H&&w(new H)!=Z)&&(w=function(t){var e=S.call(t),r=e==Gt?t.constructor:void 0,a=r?k(r):void 0;if(a)switch(a){case we:return tt;case je:return W;case ke:return Q;case _e:return L;case Te:return Z}return e});function Ie(t,e){return e=e??it,!!e&&(typeof t=="number"||Kt.test(t))&&t>-1&&t%1==0&&t<e}function Ae(t){return!!et&&et in t}function $e(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||I;return t===r}function k(t){if(t!=null){try{return gt.call(t)}catch{}try{return t+""}catch{}}return""}function ze(t){return Re(t)&&A.call(t,"callee")&&(!ye.call(t,"callee")||S.call(t)==Nt)}var mt=Array.isArray;function J(t){return t!=null&&De(t.length)&&!bt(t)}function Re(t){return yt(t)&&J(t)}function bt(t){var e=vt(t)?S.call(t):"";return e==Vt||e==Bt}function De(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=it}function vt(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function yt(t){return!!t&&typeof t=="object"}function Fe(t){return typeof t=="string"||!mt(t)&&yt(t)&&S.call(t)==Ut}function Ce(t){if(!t)return[];if(J(t))return Fe(t)?ge(t):Ee(t);if(F&&t[F])return pe(t[F]());var e=w(t),r=e==W?fe:e==L?he:Le;return r(t)}function We(t){return J(t)?Se(t):Me(t)}function Le(t){return t?se(t,We(t)):[]}var Ne=Ce;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(l){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(l[n]=c[n])}return l},a=function(){function l(i,c){for(var n=0;n<c.length;n++){var s=c[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}return function(i,c,n){return c&&l(i.prototype,c),n&&l(i,n),i}}(),g=function(i,c,n){var s=!0;t:for(;s;){var u=i,p=c,d=n;s=!1,u===null&&(u=Function.prototype);var m=Object.getOwnPropertyDescriptor(u,p);if(m===void 0){var y=Object.getPrototypeOf(u);if(y===null)return;i=y,c=p,n=d,s=!0,m=y=void 0;continue t}else{if("value"in m)return m.value;var x=m.get;return x===void 0?void 0:x.call(d)}}};function v(l,i){var c={};for(var n in l)i.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(l,n)&&(c[n]=l[n]);return c}function $(l,i){if(!(l instanceof i))throw new TypeError("Cannot call a class as a function")}function z(l,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);l.prototype=Object.create(i&&i.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(l,i):l.__proto__=i)}var _=ot,h=Ot,b=Ne,T=function(l){z(i,l);function i(c){$(this,i),g(Object.getPrototypeOf(i.prototype),"constructor",this).call(this,c);var n=this.props,s=n.items,u=n.random;this.state={index:u?Math.floor(Math.random()*Math.floor(s.length)):0,output:"",substrLength:0},this.timeouts=[]}return a(i,[{key:"componentDidMount",value:function(){this._animate.bind(this)()}},{key:"componentWillUnmount",value:function(){this.timeouts.map(function(n){return clearTimeout(n)})}},{key:"_loop",value:function(n,s){var u=setTimeout(n,s);this.timeouts.push(u);var p=100;this.timeouts.length>p&&(clearTimeout(this.timeouts[0]),this.timeouts.shift())}},{key:"_type",value:function(n,s){var u=this.state.output,p=this.props.typingInterval,d=this._type.bind(this,n,s),m=b(n);this.setState({output:m.slice(0,b(u).length+1).join("")}),u.length<m.length?this._loop(d,p):(typeof this.props.onTypingEnd=="function"&&this.props.onTypingEnd(),s())}},{key:"_erase",value:function(n){var s=this.state.output,u=this.props.deletingInterval,p=this._erase.bind(this,n),d=b(s);typeof this.props.onDeletingStart=="function"&&this.props.onDeletingStart(),this.setState({output:d.slice(0,d.length-1).join("")}),d.length!==0?this._loop(p,u):(typeof this.props.onDeletingEnd=="function"&&this.props.onDeletingEnd(),n())}},{key:"_overwrite",value:function(n,s){var u=this.state,p=u.output,d=u.substrLength,m=this.props.deletingInterval,y=this._overwrite.bind(this,n,s),x=b(n),R=b(p);this.setState({output:x.slice(0,d).concat(R.slice(d)),substrLength:d+1}),x.length!==d?this._loop(y,m):(this.setState({output:n,substrLength:0}),s())}},{key:"_animate",value:function(){var n=this,s=this.state.index,u=this.props,p=u.items,d=u.pause,m=u.emptyPause,y=u.eraseMode,x=u.random,R=this._type,xt=this._erase,wt=this._overwrite,jt=this._animate.bind(this),P=void 0;x?P=Math.floor(Math.random()*Math.floor(p.length)):P=s===p.length-1?0:s+1;var Y=function(){n.setState({index:P}),n._loop(jt,m)};typeof this.props.onTypingStart=="function"&&this.props.onTypingStart(),R.bind(this)(p[s],function(){y==="overwrite"?n._loop(wt.bind(n,p[P],Y),d):n._loop(xt.bind(n,Y),d)})}},{key:"render",value:function(){var n=this.props,s=n.color,u=n.cursor;n.deletingInterval,n.emptyPause,n.items,n.pause,n.eraseMode,n.typingInterval,n.random;var p=v(n,["color","cursor","deletingInterval","emptyPause","items","pause","eraseMode","typingInterval","random"]);return _.createElement("span",r({style:{color:s}},p),this.state.output,u?_.createElement("span",{className:"react-rotating-text-cursor"},"|"):null)}}]),i}(_.Component);T.propTypes={color:h.string,cursor:h.bool,deletingInterval:h.number,emptyPause:h.number,eraseMode:h.string,items:h.array,pause:h.number,typingInterval:h.number,random:h.bool,onTypingStart:h.func,onTypingEnd:h.func,onDeletingStart:h.func,onDeletingEnd:h.func},T.defaultProps={color:"inherit",cursor:!0,deletingInterval:50,emptyPause:1e3,eraseMode:"erase",items:["first","second","third","fourth","fifth"],pause:1500,typingInterval:50,random:!1},e.default=T,t.exports=e.default})(C,C.exports);var Ve=C.exports;const nt=Tt(Ve),Be=St`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ge=f.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45vw;
  margin: 130px 0;
`,Ue=f.div`
  position: relative;
  font-size: 3.75vw;

  .react-rotating-text-cursor {
    animation: ${Be} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s infinite;
  }
`,Xe=f.div`
  width: 100%;
  margin-bottom: 4vw;
`,He=f.img`
  width: 30vw;
  max-width: 230px;
  position: absolute;
  right: 0vw;
  top: 20vw;
`,Ke=f.div`
  display: flex;
  gap: 5vw;
  font-size: 4vw;
  margin-bottom: 2vw;
`,Je=f.a`
  position: relative;
  display: block;
  width: fit-content;
  cursor: pointer;

  &:hover {
    .mask {
      color: ${({theme:t})=>t.color.white};
      width: 100%;
      background-color: ${({theme:t})=>t.color.black};
    }

    .icon {
      z-index: 10;
      width: 8vw;
      height: 8vw;
      transform: translate(-3vw, -3.5vw) rotate(-20deg);
    }
  }
`,Ye=f.div`
  padding: 1vw 0 1vw 1vw;
  color: ${({theme:t})=>t.color.black};
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0.5vw;
  width: 0%;
`,qe=f.div`
  position: absolute;
  box-sizing: border-box;
  background-image: ${({name:t})=>t==="Github"?"url(img/github-mark.svg)":"url(img/naver-mark.png)"};
  background-size: 50% auto;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
`,Qe=({author:t,button:e})=>{const{name:r,nickname:a,stack:g,social:v}=t,[$,z]=ot.useState(3),_=["me.png","me2.png","me3.png"][$%3],h=()=>{z(b=>b+1)};return o.jsxs(Ge,{children:[o.jsxs(Ue,{children:[o.jsxs(Xe,{children:[o.jsx("span",{children:"안녕하세요!"}),o.jsx("br",{}),o.jsx("strong",{children:o.jsx(nt,{items:g})}),o.jsx("span",{children:"를 좋아하는"}),o.jsx("br",{}),o.jsx("span",{children:"개발자 "}),o.jsx("strong",{children:o.jsx(nt,{items:[r,a]})}),o.jsx("span",{children:"입니다."})]}),o.jsx(Ke,{children:v.map(({name:b,url:T})=>o.jsxs(Je,{href:T,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(qe,{className:"icon",name:b}),o.jsx(Ye,{className:"mask",children:b})]},b))}),e]}),o.jsx(He,{alt:"me",src:_,onClick:h})]})},Ze={name:"서우석",nickname:"석이",stack:["React","Typescript","FrontEnd"],social:[{name:"Github",url:"https://github.com/seows2"},{name:"Blog",url:"https://blog.naver.com/seows2"}]},or=()=>{const t=q.slice(0,3),{React:e,잡담:r,회고:a}=Mt(q,({category:g})=>g);return o.jsxs(o.Fragment,{children:[o.jsx(Pt,{title:"석이 | Home"}),o.jsx(Qe,{author:Ze,button:o.jsx($t,{content:"조금 더 알아보기",to:"/about"})}),o.jsx(E,{title:"Recent Post",posts:t}),o.jsx(E,{title:"공부",posts:e.slice(0,3)}),o.jsx(E,{title:"회고",posts:a.slice(0,3)}),o.jsx(E,{title:"잡담",posts:r.slice(0,3)})]})};export{or as default};
