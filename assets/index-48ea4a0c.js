var St=Object.defineProperty;var Et=(c,t,e)=>t in c?St(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var n=(c,t,e)=>(Et(c,typeof t!="symbol"?t+"":t,e),e);import{s as g,n as dt,M as It,r as bt,j as a}from"./index-780988ce.js";import{O as Pt}from"./OpenGraph-500aa841.js";class V{constructor(t){n(this,"DOM");n(this,"isActive",!1);n(this,"enterThreshold",0);n(this,"exitThreshold",0);n(this,"animations",[]);n(this,"persistentAnimation",!1);n(this,"metrics",{scrollX:0,scrollY:0,width:0,height:0});n(this,"viewport");this.DOM=document.querySelector(t)}addAnimation(t){this.animations.push(t)}enable(){var t;this.isActive=!0,(t=this.DOM)==null||t.classList.add("active")}disable(){var t;this.isActive=!1,(t=this.DOM)==null||t.classList.remove("active")}onPreloaded(){this.animations.forEach(t=>t.onPreloaded&&t.onPreloaded())}onDestroy(){this.animations.forEach(t=>t.onDestroy&&t.onDestroy()),this.animations=[]}onResize(t){this.viewport=t,this.animations.forEach(e=>e.onResize&&e.onResize(t)),this.metrics.scrollX=this.DOM.offsetLeft,this.metrics.scrollY=this.DOM.offsetTop,this.metrics.width=this.DOM.offsetWidth,this.metrics.height=this.DOM.offsetHeight}onScroll(t){t.y>=this.metrics.scrollY+this.enterThreshold&&t.y<this.metrics.scrollY+this.metrics.height+this.exitThreshold?this.isActive||this.onEnter():this.isActive&&this.onExit(),this.animations.forEach(e=>e.onScroll&&e.onScroll(t))}onMouseDown(t){this.isActive&&this.animations.forEach(e=>{e.onMouseDown&&e.onMouseDown(t)})}onMouseUp(t){this.isActive&&this.animations.forEach(e=>{e.onMouseUp&&e.onMouseUp(t)})}onEnter(){this.isActive||this.enable()}onExit(){this.isActive&&this.disable()}onUpdate(t){this.isActive&&this.animations.forEach(e=>e.onUpdate(t))}}class Tt{static get(t){switch(t){case"linear":return this._easeLinear;case"easeInSine":return this._easeInSine;case"easeOutSine":return this._easeOutSine;case"easeInOutSine":return this._easeInOutSine;case"easeInQuad":return this._easeInQuad;case"easeOutQuad":return this._easeOutQuad;case"easeInOutQuad":return this._easeInOutQuad;case"easeInCubic":return this._easeInCubic;case"easeOutCubic":return this._easeOutCubic;case"easeInOutCubic":return this._easeInOutCubic;case"easeInQuart":return this._easeInQuartic;case"easeOutQuart":return this._easeOutQuartic;case"easeInOutQuart":return this._easeInOutQuartic;case"easeInQuint":return this._easeInQuintic;case"easeOutQuint":return this._easeOutQuintic;case"easeInOutQuint":return this._easeInOutQuintic;case"easeInExpo":return this._easeInExpo;case"easeOutExpo":return this._easeOutExpo;case"easeInOutExpo":return this._easeInOutExpo;case"easeOutSpring":return this._easeOutSpring;case"easeOutBack":return this._easeOutBack;default:return this._easeLinear}}static _easeLinear(t){return t}static _easeInSine(t){return-Math.cos(t*(Math.PI/2))+1}static _easeOutSine(t){return Math.sin(t*(Math.PI/2))}static _easeInOutSine(t){return-.5*(Math.cos(Math.PI*t)-1)}static _easeInQuad(t){return t**2}static _easeOutQuad(t){return 1-(1-t)**2}static _easeInOutQuad(t){return t<.5?(t*2)**2/2:1-((1-t)*2)**2/2}static _easeInCubic(t){return t**3}static _easeOutCubic(t){return 1-(1-t)**3}static _easeInOutCubic(t){return t<.5?(t*2)**3/2:1-((1-t)*2)**3/2}static _easeInQuartic(t){return t**4}static _easeOutQuartic(t){return 1-(1-t)**4}static _easeInOutQuartic(t){return t<.5?(t*2)**4/2:1-((1-t)*2)**4/2}static _easeInQuintic(t){return t**5}static _easeOutQuintic(t){return 1-(1-t)**5}static _easeInOutQuintic(t){return t<.5?(t*2)**5/2:1-((1-t)*2)**5/2}static _easeInExpo(t){return Math.pow(2,10*(t-1))-.001}static _easeOutExpo(t){return 1-Math.pow(2,-10*t)}static _easeInOutExpo(t){return(t*=2)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))}static _easeOutSpring(t){const i=.3/(Math.PI*2)*(Math.asin(1)||0);return 1*Math.pow(2,-10*t)*Math.sin((t-i)*(Math.PI*2)/.3)+1}static _easeOutBack(t){return(t=t-1)*t*((1.70158+1)*t+1.70158)+1}}class G{static multiply2DMatricies(t,e){const s=t[0],i=t[0*3+1],o=t[0*3+2],r=t[1*3+0],h=t[1*3+1],d=t[1*3+2],p=t[2*3+0],l=t[2*3+1],u=t[2*3+2],f=e[0*3+0],x=e[0*3+1],v=e[0*3+2],w=e[1*3+0],b=e[1*3+1],T=e[1*3+2],M=e[2*3+0],S=e[2*3+1],P=e[2*3+2];return[f*s+x*r+v*p,f*i+x*h+v*l,f*o+x*d+v*u,w*s+b*r+T*p,w*i+b*h+T*l,w*o+b*d+T*u,M*s+S*r+P*p,M*i+S*h+P*l,M*o+S*d+P*u]}static translate2D(t,e){return[1,0,t,0,1,e,0,0,1]}static scale2D(t,e){return[t,0,0,0,e,0,0,0,1]}static rotate2D(t){return[Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1]}}class _{constructor(t,e,s,i,o,r){this.target=t,this.property=e,this.targetValue=s,this.currentValue=i,this.units=o,this.direction=r,this.propertyDelta={},this.setProperties()}setProperties(){switch(this.direction){case"to":this.propertyDelta={start:this.currentValue,delta:this.targetValue-this.currentValue};break;case"from":this.propertyDelta={start:this.targetValue,delta:this.currentValue-this.targetValue};break;case"fromTo":this.propertyDelta={start:this.currentValue,delta:this.targetValue-this.currentValue};break;case"addClass":this.classFunction=()=>{this.target.classList.add(this.targetValue)};break;case"removeClass":this.classFunction=()=>{this.target.classList.remove(this.targetValue)};break}}update(t){this.property!=="class"?this.target[this.property]=this.propertyDelta.start+t*this.propertyDelta.delta+this.units:(t===0&&(this.direction==="addClass"?this.target.classList.remove(this.targetValue):this.target.classList.add(this.targetValue)),t===1&&this.classFunction())}}class R{constructor(t,e,s,i){this.target=t,this.properties=e,this.direction=s,this.isDOM=i,this.unitExpression=/[a-z]+|%/,this.hasTransform=!1,this.transformPropertyKeys=["translateX","translateY","rotate","scale","scaleX","scaleY"],this.transformMatrix={},this.isDOM&&(this.bounds=this.target.getBoundingClientRect()),this.setProperties()}_getTransformMatrix(t){if(t==="none"||t===void 0)return{translateX:0,translateY:0,scaleX:1,scaleY:1,rotate:0};this.transformType=t.includes("3d")?"3d":"2d";const e=t.match(/matrix.*\((.+)\)/)[1].split(", ");if(this.transformType==="2d")return{translateX:e[4],translateY:e[5],scaleX:e[0],scaleY:e[3],rotate:Math.atan2(e[1],e[0])*(180/Math.PI)}}_getTransformPercentage(t,e){return t==="translateX"?e*=this.bounds.width/100:e*=this.bounds.height/100}setProperties(){if(this.actions=[],this.isDOM){const t=getComputedStyle(this.target);this.transformMatrix=this._getTransformMatrix(t.transform);for(const e in this.properties)if(this.transformPropertyKeys.includes(e))if(this.hasTransform=!0,e==="scale")this.direction==="fromTo"?(this.actions.push(new _(this.transformMatrix,"scaleX",this.properties.scale[1],this.properties.scale[0],null,this.direction)),this.actions.push(new _(this.transformMatrix,"scaleY",this.properties.scale[1],this.properties.scale[0],null,this.direction))):(this.actions.push(new _(this.transformMatrix,"scaleX",this.properties.scale,parseFloat(this.transformMatrix.scaleX),null,this.direction)),this.actions.push(new _(this.transformMatrix,"scaleY",this.properties.scale,parseFloat(this.transformMatrix.scaleY),null,this.direction)));else if((e==="translateX"||e==="translateY")&&this.isDOM)if(this.direction==="fromTo"){const s=this._getTransformPercentage(e,this.properties[e][1]),i=this._getTransformPercentage(e,this.properties[e][0]);this.actions.push(new _(this.transformMatrix,e,s,i,null,this.direction))}else{let s=this._getTransformPercentage(e,this.properties[e]);this.actions.push(new _(this.transformMatrix,e,s,parseFloat(this.transformMatrix[e]),null,this.direction))}else this.direction==="fromTo"?this.actions.push(new _(this.transformMatrix,e,this.properties[e][1],this.properties[e][0],null,this.direction)):this.actions.push(new _(this.transformMatrix,e,this.properties[e],parseFloat(this.transformMatrix[e]),null,this.direction));else if(e!=="class")if(this.direction==="fromTo")this.actions.push(new _(this.target.style,e,this.properties[e][1],this.properties[e][0],null,this.direction));else{const s=this.unitExpression.exec(t[e]),i=parseFloat(t[e].split(s)[0]);this.actions.push(new _(this.target.style,e,this.properties[e],i,s,this.direction))}else this.actions.push(new _(this.target,e,this.properties[e],null,null,this.direction))}else for(const t in this.properties)this.direction==="fromTo"?this.actions.push(new _(this.target,t,this.properties[t][1],this.properties[t][0],null,this.direction)):this.actions.push(new _(this.target,t,this.properties[t],this.target[t],null,this.direction));for(const t of this.actions)t.setProperties()}update(t){for(const e of this.actions)e.update(t);if(this.hasTransform){const e=G.multiply2DMatricies(G.multiply2DMatricies(G.scale2D(this.transformMatrix.scaleX,this.transformMatrix.scaleY),G.rotate2D(this.transformMatrix.rotate*(Math.PI/180))),G.translate2D(this.transformMatrix.translateX,this.transformMatrix.translateY));this.target.style.transform=`matrix(${e[0]}, ${e[3]}, ${e[1]}, ${e[4]}, ${e[2]}, ${e[5]})`}}}class _t{constructor(){this.timeScale=1e3,this.duration=0,this.startTime=0,this.currentTime=0,this.progress=0,this.started=!1,this.paused=!1,this.rewinding=!1,this.currentAnimationFrame=null,this.previousActionDuration=0,this.actions=[]}play(){this.rewinding=!1,this.started||(this.onStartCallback&&this.onStartCallback(),this.started=!0),this.paused?this.startTime=performance.now()-this.duration*this.progress:this.startTime=performance.now(),this.paused=!1;const t=e=>{const s=e-this.startTime;this.progress=Math.min(s/this.duration,1),this._animate(),this.progress<1&&(this.currentAnimationFrame=requestAnimationFrame(t))};this.currentAnimationFrame=requestAnimationFrame(t)}pause(){this.paused=!0,cancelAnimationFrame(this.currentAnimationFrame)}rewind(){this.rewinding=!0,this.paused?this.startTime=performance.now()-this.duration*(1-this.progress):this.startTime=performance.now(),this.paused=!1;const t=e=>{const s=this.duration-(e-this.startTime);this.progress=Math.min(s/this.duration,1),this._animate(),this.progress>0&&(this.currentAnimationFrame=requestAnimationFrame(t))};this.currentAnimationFrame=requestAnimationFrame(t)}setProgress(t){this.progress=t,!this.started&&this.progress>0&&(this.onStartCallback&&this.onStartCallback(),this.started=!0);const e=s=>{this.duration*this.progress,this._animate()};this.currentAnimationFrame=requestAnimationFrame(e)}setProgressImmediately(t){this.progress=t,!this.started&&this.progress>0&&(this.onStartCallback&&this.onStartCallback(),this.started=!0),this._animate()}_animate(){this.currentTime=this.duration*this.progress,this.actions.forEach((t,e)=>{t.progress=(this.currentTime-t.timings.start)/t.timings.totalDuration,t.started&&!t.completed&&(t.options.onUpdate&&t.options.onUpdate(),t.moments.forEach((s,i)=>{const o=Math.max(this.currentTime-t.timings.start-t.timings.stagger*i,0),r=Math.min(o/t.timings.duration,1),h=t.timings.easing(r);s.update(h),t.options.toggle&&r!==1&&s.update(0)})),t.progress>0?(t.started||(t.options.onStart&&t.options.onStart(),t.timings.start!==0&&t.direction!=="from"&&t.moments.forEach(s=>{s.setProperties()})),t.started=!0):(t.started&&(t.direction==="from"||t.direction==="fromTo")?t.direction==="from"?t.timings.start!==0?t.moments.forEach(s=>{s.update(1)}):t.moments.forEach(s=>{s.update(0)}):t.moments.forEach(s=>{s.update(0)}):!t.started&&!t.initialized&&(t.direction==="from"||t.direction==="fromTo")&&(t.moments.forEach(s=>{s.update(0)}),t.initialized=!0),t.options.toggle&&t.moments.forEach(s=>{s.update(0)}),t.started=!1),t.progress>=1?(t.completed||(t.moments.forEach(s=>{s.update(1)}),t.options.onComplete&&t.options.onComplete()),t.completed=!0):t.completed=!1})}to(t,e,s,i){let o=!1,r=t;(t instanceof window.HTMLElement||t instanceof window.NodeList||t instanceof window.SVGPathElement||t instanceof window.SVGElement||t instanceof window.SVGCircleElement)&&(o=!0,t instanceof window.NodeList&&(r=[...t]));const h=this._setTargets(r),d=this._setTimings(h,s,i),p=[];h.forEach(l=>{p.push(new R(l,e,"to",o))}),this._add(p,d,s,"to")}from(t,e,s,i){let o=!1,r=t;(t instanceof window.HTMLElement||t instanceof window.NodeList||t instanceof window.SVGPathElement||t instanceof window.SVGElement||t instanceof window.SVGCircleElement)&&(o=!0,t instanceof window.NodeList&&(r=[...t]));const h=this._setTargets(r),d=this._setTimings(h,s,i),p=[];h.forEach(l=>{p.push(new R(l,e,"from",o))}),this._add(p,d,s,"from")}fromTo(t,e,s,i){let o=!1,r=t;(t instanceof window.HTMLElement||t instanceof window.NodeList||t instanceof window.SVGPathElement||t instanceof window.SVGElement||t instanceof window.SVGCircleElement)&&(o=!0,t instanceof window.NodeList&&(r=[...t]));const h=this._setTargets(r),d=this._setTimings(h,s,i),p=[];h.forEach(l=>{p.push(new R(l,e,"fromTo",o))}),this._add(p,d,s,"fromTo")}addClass(t,e,s,i=null){let o=!1,r=t;(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(o=!0,t instanceof window.NodeList&&(r=[...t]));const h=this._setTargets(r),d=this._setTimings(h,s,i),p=[];h.forEach(l=>{p.push(new R(l,e,"addClass",o))}),this._add(p,d,s,"addClass")}removeClass(t,e,s,i=null){let o=!1,r=t;(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(o=!0,t instanceof window.NodeList&&(r=[...t]));const h=this._setTargets(r),d=this._setTimings(h,s,i),p=[];h.forEach(l=>{p.push(new R(l,e,"removeClass",o))}),this._add(p,d,s,"removeClass")}onStart(t){this.onStartCallback=t}_add(t,e,s,i){this.actions.push({moments:t,timings:e,options:s,direction:i,progress:0,initialized:!1,started:!1,completed:!1}),this.setProgress(0)}_setTargets(t){let e=null;return Array.isArray(t)?e=t:e=[t],e}_setTimings(t,e,s=null){const i={},o=e.duration?e.duration*this.timeScale:1;let r=0;s!==null?r=s*this.timeScale:r=this.duration,i.stagger=e.stagger?e.stagger*this.timeScale:0;const h=e.delay?e.delay*this.timeScale+r:r,d=o+(t.length-1)*i.stagger;return i.start=h,i.end=h+d,i.duration=o,i.totalDuration=d,i.easing=Tt.get(e.ease),this.previousActionDuration=i.end,this.duration=Math.max(this.previousActionDuration,this.duration),i}}class zt{constructor(t,e,s={}){this.element=t,this.scene=e,this.options=s,this._init()}_init(){this.observer=null,this.progress=0,this.scrollDistance=0,this.scrollPosition=0,this.element.parentElement.style.height="auto",this.viewportHeight=window.innerHeight,this.isIntersecting=!1,this.options.pinned?(this.offset=this.element.parentElement.offsetTop,this.offset+=this.options.beginOnIntersection?-this.element.parentElement.offsetHeight:0,this.scrollHeight=this.scene.duration,this._setScrollHeight(),this.scrollHeight+=this.options.offset?this.options.offset:0):(this.offset=window.pageYOffset+this.element.getBoundingClientRect().top-this.viewportHeight,this.scrollHeight=this.viewportHeight+this.element.offsetHeight),this._scrollListener=this._scrollListener.bind(this),this._createObserver()}resize(){this.viewportHeight=window.innerHeight,this.options.pinned?(this.offset=this.element.parentElement.offsetTop,this.offset+=this.options.beginOnIntersection?-this.element.parentElement.offsetHeight:0,this.scrollHeight=this.scene.duration,this._setScrollHeight(),this.scrollHeight+=this.options.offset?this.options.offset:0):(this.offset=window.pageYOffset+this.element.getBoundingClientRect().top-this.viewportHeight,this.scrollHeight=this.viewportHeight+this.element.offsetHeight)}setScene(t){this.scene=t,this._init()}_setScrollHeight(){const t=this.scrollHeight+(this.options.beginOnIntersection?0:this.viewportHeight);this.element.parentElement.style.height=`${t/this.viewportHeight*100}vh`}_scrollListener(t){this.scrollDistance=t.target.scrollingElement.scrollTop,this.scrollPosition=this.scrollDistance-this.offset,this.progress=Math.min(Math.max(this.scrollPosition/this.scrollHeight,0),1)}_createObserver(){this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.isIntersecting=!0,window.addEventListener("scroll",this._scrollListener)):(this.isIntersecting=!1,window.removeEventListener("scroll",this._scrollListener),this.progress=Math.round(this.progress))})},{threshold:this.options.threshold?this.options.threshold:0}),this.observer.observe(this.element)}}class E{static to(t,e,s){let i=!1,o=t;(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(i=!0,t instanceof window.NodeList&&(o=[...t]));const r=this._setTargets(o),h=this._setTimings(r,s),d=[];r.forEach(p=>{d.push(new R(p,e,"to",i))}),this._animate(d,h,s)}static from(t,e,s){let i=!1,o=t;(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(i=!0,t instanceof window.NodeList&&(o=[...t]));const r=this._setTargets(o),h=this._setTimings(r,s),d=[];r.forEach(p=>{d.push(new R(p,e,"from",i))}),this._animate(d,h,s)}static fromTo(t,e,s){let i=!1,o=t;(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(i=!0,t instanceof window.NodeList&&(o=[...t]));const r=this._setTargets(o),h=this._setTimings(r,s),d=[];r.forEach(p=>{d.push(new R(p,e,"fromTo",i))}),this._animate(d,h,s)}static addClass(t,e,s){let i=!1,o=t,r=s||{};(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(i=!0,t instanceof window.NodeList&&(o=[...t]));const h=this._setTargets(o),d=this._setTimings(h,r),p=[];h.forEach(l=>{p.push(new R(l,e,"addClass",i))}),this._animate(p,d,r)}static removeClass(t,e,s){let i=!1,o=t,r=s||{};(t instanceof window.HTMLElement||t instanceof window.NodeList)&&(i=!0,t instanceof window.NodeList&&(o=[...t]));const h=this._setTargets(o),d=this._setTimings(h,r),p=[];h.forEach(l=>{p.push(new R(l,e,"removeClass",i))}),this._animate(p,d,r)}static _animate(t,e,s){function i(r){const h=r-o-e.delay,d=Math.min(h/e.totalDuration,1);t.forEach((p,l)=>{const u=Math.min((h-e.stagger*l)/e.duration,1);if(u>0){const f=e.easing(u);p.update(f)}}),d<1?(s.onUpdate&&s.onUpdate(),requestAnimationFrame(i)):(t.forEach(p=>{p.update(1)}),s.onComplete&&s.onComplete())}s.onStart&&s.onStart();const o=performance.now();requestAnimationFrame(i)}static _setTargets(t){let e=null;return Array.isArray(t)?e=t:e=[t],e}static _setTimings(t,e){const i={};return i.duration=e.duration?e.duration*1e3:1,i.delay=e.delay?e.delay*1e3:0,i.stagger=e.stagger?e.stagger*1e3:0,i.totalDuration=i.duration+(t.length-1)*i.stagger,i.easing=Tt.get(e.ease),i}}E.Scene=_t;E.Camera=zt;let kt=class{constructor(){n(this,"animation");n(this,"textWrapper");n(this,"textElements");n(this,"textOverlays");n(this,"textFlourishShort");n(this,"textFlourishLong");n(this,"overlayProgress");n(this,"played");n(this,"scene");n(this,"textAnimation");this.animation=new pt,this.scene=this.animation.scene,this.textAnimation=new E.Scene,this.textWrapper=document.querySelector("section.animation .wrapper"),this.textElements=document.querySelectorAll("section.animation .wrapper .word-wrap .text"),this.textOverlays=document.querySelectorAll("section.animation .wrapper .word-wrap .overlay"),this.textFlourishShort=document.querySelectorAll("section.animation .wrapper .flourish-wrap svg .short"),this.textFlourishLong=document.querySelector("section.animation .wrapper .flourish-wrap svg .long"),this.overlayProgress=[{translateX:-101},{translateX:-101},{translateX:-101},{translateX:-101},{translateX:-101}],this.played=!1}onResize(){this.textAnimation.fromTo(this.overlayProgress,{translateX:[-101,101]},{duration:1,stagger:.2,ease:"easeInOutExpo",onUpdate:()=>{this.textOverlays.forEach((t,e)=>{t.style.transform=`translateX(${this.overlayProgress[e].translateX}%)`})}},0),this.textAnimation.to(this.textElements,{opacity:1},{delay:.5,duration:.5,stagger:.2,ease:"easeOutExpo"},0),this.textAnimation.to(this.textFlourishShort,{"stroke-dashoffset":31},{duration:.5,ease:"easeInOutQuint"},1.5),this.textAnimation.to(this.textFlourishLong,{"stroke-dashoffset":42},{duration:.5,ease:"easeInOutQuint"},1.5),this.scene.fromTo(this.textWrapper,{opacity:[0,1]},{duration:.1,ease:"easeInOutExpo",onComplete:()=>{this.played||(this.textAnimation.play(),this.played=!0)}},0),this.scene.fromTo(this.textWrapper,{opacity:[1,0]},{duration:.25,ease:"easeInOutExpo"},.75)}};class At{constructor(){n(this,"animation");n(this,"time");n(this,"then");n(this,"now");n(this,"timeScale");n(this,"canvas");n(this,"ctx");n(this,"viewport",{width:0,height:0,aspectRatio:0});n(this,"iterations");n(this,"progress",{scale:1});n(this,"clearProgress",{value:0});n(this,"scene");this.animation=new pt,this.scene=this.animation.scene,this.time=0,this.then=0,this.now=0,this.timeScale=.003,this.canvas=document.getElementById("motion-path"),this.ctx=this.canvas.getContext("2d")}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.scale(this.progress.scale,this.progress.scale),this.ctx.fillStyle="rgb(0, 0, 0)",this.ctx.fill(),this.ctx.lineWidth=.0025*this.viewport.width,this.ctx.strokeStyle="rgba(29, 101, 135, 1)";const t=this.canvas.width/this.progress.scale/2;for(let r=0;r<this.iterations.count;r++)if(this.iterations.objects[r]){this.ctx.fillStyle=`rgba(29, 101, 135, ${this.iterations.objects[r].fillOpacity})`;const h=this.iterations.objects[r].left/this.progress.scale;this.ctx.beginPath();const d=h+(this.progress.scale-1)*(h-t),p=this.canvas.height/this.progress.scale/2,l=this.iterations.radius;this.ctx.arc(d,p,l,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke(),this.ctx.fill()}this.ctx.strokeStyle="rgba(29, 101, 135, 1)",this.ctx.fillStyle=`rgba(29, 101, 135, ${(this.iterations.distance-1)/2})`;const e=this.iterations.left*this.iterations.distance/this.progress.scale;this.ctx.beginPath();const s=e+(this.progress.scale-1)*(e-t),i=this.canvas.height/this.progress.scale/2,o=this.iterations.radius;this.ctx.arc(s,i,o,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke(),this.ctx.fill(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.beginPath(),this.ctx.rect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.iterations.opacity})`,this.ctx.fill(),this.clearProgress.value>0&&(this.ctx.clearRect(this.canvas.width/2-this.clearProgress.value*(this.canvas.width/2),this.canvas.height/2-this.clearProgress.value*(this.canvas.height/2),this.clearProgress.value*this.canvas.width,this.clearProgress.value*this.canvas.height),this.clearProgress.value!==1&&(this.ctx.beginPath(),this.ctx.rect(this.canvas.width/2-this.clearProgress.value*(this.canvas.width/2),this.canvas.height/2-this.clearProgress.value*(this.canvas.height/2),this.clearProgress.value*this.canvas.width,this.clearProgress.value*this.canvas.height),this.ctx.closePath(),this.ctx.strokeStyle="rgb(214, 103, 97)",this.ctx.stroke()))}onResize(t){this.viewport=t,this.canvas.width=this.viewport.width,this.canvas.height=this.viewport.height,this.iterations={opacity:0,distance:1,count:0,radius:this.canvas.width/6,top:this.canvas.height/2,left:this.canvas.width/4,objects:[]},this.progress={scale:1},this.clearProgress={value:0};for(let e=0;e<20;e++){const s=e/20,i=1-Math.pow(2,-10*s),o=this.canvas.width/4,r=3*o;this.iterations.objects.push({left:o+(r-o)*i,fillOpacity:i/4})}this.scene=this.animation.scene,this.scene.fromTo(this.iterations,{count:[0,20]},{duration:1,ease:"linear"},0),this.scene.fromTo(this.iterations,{distance:[1,3]},{duration:1,ease:"easeOutExpo"},0),this.scene.fromTo(this.iterations,{opacity:[0,1]},{duration:1},1),this.scene.fromTo(this.clearProgress,{value:[0,1]},{duration:1},1),this.scene.fromTo(this.progress,{scale:[1,1.5]},{duration:2},0)}onUpdate(t){this.now=t*this.timeScale,this.time+=this.now-this.then,this.then=this.now,this.draw()}}const it={didInit:null};let Ct=class extends V{constructor(){super("section.animation");n(this,"scene");n(this,"progress");if(it.didInit)return it.didInit;it.didInit=this,this.scene=new E.Scene,this.progress=0,this.addAnimation(new At),this.addAnimation(new kt)}initializeTextFocus(){var s;const e=Number((s=this.viewport)==null?void 0:s.height)/100;this.DOM.querySelectorAll("[data-focus]").forEach(i=>{const o=i,r=Number(o.dataset.focus)*e+this.DOM.offsetTop;o.dataset.focusOffset=`${r}`})}attachScene(){this.scene=new E.Scene}onScroll(e){if(super.onScroll(e),this.isActive){const s=this.metrics.scrollY+this.enterThreshold,i=this.metrics.scrollY+this.metrics.height+this.exitThreshold,o=e.y-s;this.progress=o/(i-s)}else e.y<=this.metrics.scrollY+this.enterThreshold?this.progress=0:(this.progress=1,this.scene.setProgressImmediately(this.progress));this.animations.forEach(s=>s.onScroll&&s.onScroll(e))}onResize(e){this.viewport=e,super.onResize(e),this.exitThreshold=-e.height,this.initializeTextFocus()}onUpdate(e){this.isActive&&(this.scene.setProgressImmediately(this.progress),this.animations.forEach(s=>{var i;(i=s.onUpdate)==null||i.call(s,e)}))}};const pt=Ct;class Nt{constructor(){n(this,"time");n(this,"then");n(this,"now");n(this,"timeScale");n(this,"canvas");n(this,"canvasSize");n(this,"ctx");n(this,"heading");n(this,"iterations",10);n(this,"visibility");this.visibility={value:0},this.time=0,this.then=0,this.now=0,this.timeScale=.003,this.canvas=document.getElementById("hero-indicator"),this.heading=document.querySelector("section.hero h1"),this.canvasSize=this.canvas.width,this.ctx=this.canvas.getContext("2d")}appear(){this.time=0,E.to(this.visibility,{value:1},{duration:2,ease:"easeInExpo"})}onPreloaded(){this.appear()}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.lineWidth=3,this.ctx.lineCap="round";let t=this.canvasSize-100,e=1;for(let s=0;s<this.iterations;s++){e=.5*Math.sin(-this.time+Math.PI/2+s/2)+.5,e*=this.visibility.value,this.ctx.strokeStyle=`rgba(255, 255, 255, ${e/2})`;const i=this.canvasSize/2-t/2;this.ctx.beginPath(),this.ctx.moveTo(i,2+s*(this.canvasSize/12)),this.ctx.lineTo(i+t,2+s*(this.canvasSize/12)),this.ctx.stroke(),t=t/2+t/8}}onUpdate(t){this.now=t*this.timeScale,this.time+=this.now-this.then,this.then=this.now,this.draw()}onResize(){const t=this.heading.getBoundingClientRect();this.canvas.width=t.width,this.canvasSize=this.canvas.width;let e=this.canvasSize-8;for(this.iterations=0;e>4;)this.iterations+=1,e=e/2+e/8;this.canvas.height=this.iterations*(this.canvasSize/12)}}class Rt{constructor(t){this.gl=t.getContext("webgl",{powerPreference:"high-performance"}),this.resize=this.resize.bind(this),this.render=this.render.bind(this),this.depthTest=!0,this.faceCulling=!0,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,1),this.framebuffer=null}setPixelRatio(t){this.pixelRatio=t}setFrameBuffer(t){t!==null?this.framebuffer=t.buffer:this.framebuffer=null}resize(){const t=this.gl.canvas.clientWidth*this.pixelRatio,e=this.gl.canvas.clientHeight*this.pixelRatio;return this.gl.canvas.width*this.pixelRatio!==t||this.gl.canvas.height*this.pixelRatio!==e?(this.gl.canvas.width=t,this.gl.canvas.height=e,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),!0):!1}render(t,e){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.faceCulling&&this.gl.enable(this.gl.CULL_FACE),this.depthTest&&this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.BLEND),this.gl.blendEquation(this.gl.FUNC_ADD),this.gl.blendFunc(this.gl.ONE_MINUS_CONSTANT_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);let s=null,i=null;e.setViewProjectionMatrix();for(const o of t.objects){o.setProjectionMatrix(e.viewProjectionMatrix);let r=!1;if(o.shader.program!==s&&(this.gl.useProgram(o.shader.program),s=o.shader.program,r=!0),r||o.attributes!=i){for(const l in o.attributes){this.gl.enableVertexAttribArray(o.attributes[l].location),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,o.attributes[l].buffer);const u=o.attributes[l].size,f=this.gl.FLOAT,x=!1,v=0,w=0;this.gl.vertexAttribPointer(o.attributes[l].location,u,f,x,v,w)}i=o.attributes}for(const l in o.uniforms)if(l==="uViewProjectionMatrix")this.gl.uniformMatrix4fv(o.uniforms[l].location,!1,o.projectionMatrix);else if(l==="uNormalMatrix")this.gl.uniformMatrix4fv(o.uniforms[l].location,!1,o.normalMatrix);else if(l==="uLocalMatrix")this.gl.uniformMatrix4fv(o.uniforms[l].location,!1,o.localMatrix);else switch(o.uniforms[l].type){case"1f":this.gl.uniform1f(o.uniforms[l].location,o.uniforms[l].value);break;case"2f":this.gl.uniform2f(o.uniforms[l].location,o.uniforms[l].value[0],o.uniforms[l].value[1]);break;case"3f":this.gl.uniform3f(o.uniforms[l].location,o.uniforms[l].value[0],o.uniforms[l].value[1],o.uniforms[l].value[2]);break;case"4f":this.gl.uniform4f(o.uniforms[l].location,o.uniforms[l].value[0],o.uniforms[l].value[1],o.uniforms[l].value[2],o.uniforms[l].value[3]);break;case"mat3":this.gl.uniformMatrix3fv(o.uniforms[l].location,!1,o.uniforms[l].value);break;case"mat4":this.gl.uniformMatrix4fv(o.uniforms[l].location,!1,o.uniforms[l].value);break;case"tex":this.gl.uniform1i(o.uniforms[l].location,o.uniforms[l].value.id),this.gl.activeTexture(this.gl.TEXTURE0+o.uniforms[l].value.id),this.gl.bindTexture(this.gl.TEXTURE_2D,o.uniforms[l].value.texture)}const h=this.gl[o.drawMode],d=0,p=o.attributes.aPosition.count;this.gl.drawArrays(h,d,p)}}}class B{static cross(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}static subtract(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2]]}static normalize(t){const e=Math.sqrt(t[0]**2+t[1]**2+t[2]**2);return e>1e-5?[t[0]/e,t[1]/e,t[2]/e]:[0,0,0]}}class m{static multiply(t,e){const s=e[0],i=e[0*4+1],o=e[0*4+2],r=e[0*4+3],h=e[1*4+0],d=e[1*4+1],p=e[1*4+2],l=e[1*4+3],u=e[2*4+0],f=e[2*4+1],x=e[2*4+2],v=e[2*4+3],w=e[3*4+0],b=e[3*4+1],T=e[3*4+2],M=e[3*4+3],S=t[0*4+0],P=t[0*4+1],z=t[0*4+2],k=t[0*4+3],A=t[1*4+0],C=t[1*4+1],N=t[1*4+2],j=t[1*4+3],O=t[2*4+0],D=t[2*4+1],F=t[2*4+2],L=t[2*4+3],U=t[3*4+0],Y=t[3*4+1],H=t[3*4+2],$=t[3*4+3];return[s*S+i*A+o*O+r*U,s*P+i*C+o*D+r*Y,s*z+i*N+o*F+r*H,s*k+i*j+o*L+r*$,h*S+d*A+p*O+l*U,h*P+d*C+p*D+l*Y,h*z+d*N+p*F+l*H,h*k+d*j+p*L+l*$,u*S+f*A+x*O+v*U,u*P+f*C+x*D+v*Y,u*z+f*N+x*F+v*H,u*k+f*j+x*L+v*$,w*S+b*A+T*O+M*U,w*P+b*C+T*D+M*Y,w*z+b*N+T*F+M*H,w*k+b*j+T*L+M*$]}static identity(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}static inverse(t){const e=new Float32Array(16),s=t[0*4+0],i=t[0*4+1],o=t[0*4+2],r=t[0*4+3],h=t[1*4+0],d=t[1*4+1],p=t[1*4+2],l=t[1*4+3],u=t[2*4+0],f=t[2*4+1],x=t[2*4+2],v=t[2*4+3],w=t[3*4+0],b=t[3*4+1],T=t[3*4+2],M=t[3*4+3],S=x*M,P=T*v,z=p*M,k=T*l,A=p*v,C=x*l,N=o*M,j=T*r,O=o*v,D=x*r,F=o*l,L=p*r,U=u*b,Y=w*f,H=h*b,$=w*d,W=h*f,q=u*d,Q=s*b,Z=w*i,K=s*f,J=u*i,tt=s*d,et=h*i,xt=S*d+k*f+A*b-(P*d+z*f+C*b),vt=P*i+N*f+D*b-(S*i+j*f+O*b),wt=z*i+j*d+F*b-(k*i+N*d+L*b),yt=C*i+O*d+L*f-(A*i+D*d+F*f),I=1/(s*xt+h*vt+u*wt+w*yt);return e[0]=I*xt,e[1]=I*vt,e[2]=I*wt,e[3]=I*yt,e[4]=I*(P*h+z*u+C*w-(S*h+k*u+A*w)),e[5]=I*(S*s+j*u+O*w-(P*s+N*u+D*w)),e[6]=I*(k*s+N*h+L*w-(z*s+j*h+F*w)),e[7]=I*(A*s+D*h+F*u-(C*s+O*h+L*u)),e[8]=I*(U*l+$*v+W*M-(Y*l+H*v+q*M)),e[9]=I*(Y*r+Q*v+J*M-(U*r+Z*v+K*M)),e[10]=I*(H*r+Z*l+tt*M-($*r+Q*l+et*M)),e[11]=I*(q*r+K*l+et*v-(W*r+J*l+tt*v)),e[12]=I*(H*x+q*T+Y*p-(W*T+U*p+$*x)),e[13]=I*(K*T+U*o+Z*x-(Q*x+J*T+Y*o)),e[14]=I*(Q*p+et*T+$*o-(tt*T+H*o+Z*p)),e[15]=I*(tt*x+W*o+J*p-(K*p+et*x+q*o)),e}static transpose(t){return[t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]]}static translate(t,e,s){return[1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1]}static rotateX(t){const e=t*Math.PI/180,s=Math.cos(e),i=Math.sin(e);return[1,0,0,0,0,s,i,0,0,-i,s,0,0,0,0,1]}static rotateY(t){const e=t*Math.PI/180,s=Math.cos(e),i=Math.sin(e);return[s,0,-i,0,0,1,0,0,i,0,s,0,0,0,0,1]}static rotateZ(t){const e=t*Math.PI/180,s=Math.cos(e),i=Math.sin(e);return[s,i,0,0,-i,s,0,0,0,0,1,0,0,0,0,1]}static scale(t,e,s){return[t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1]}static lookAt(t,e){const s=B.normalize(B.subtract(t,e)),i=B.normalize(B.cross([0,1,0],s)),o=B.normalize(B.cross(s,i));return[i[0],i[1],i[2],0,o[0],o[1],o[2],0,s[0],s[1],s[2],0,t[0],t[1],t[2],1]}}class jt{constructor(t,e,s,i,o,r){this.left=t,this.right=e,this.bottom=s,this.top=i,this.near=o,this.far=r,this.type="orthographic",this.position={x:0,y:0,z:0},this.rotation={x:0,y:0,z:0},this.viewMatrix=m.identity(),this.createMatrix()}createMatrix(){this.matrix=[2/(this.right-this.left),0,0,0,0,2/(this.top-this.bottom),0,0,0,0,-2/(this.far-this.near),0,-(this.right+this.left)/(this.right-this.left),-(this.top+this.bottom)/(this.top-this.bottom),-(this.far+this.near)/(this.far-this.near),1]}_recalculateViewMatrix(){const t=m.identity(),e=m.translate(this.position.x,this.position.y,this.position.z),s=m.rotateX(this.rotation.x),i=m.rotateY(this.rotation.y),o=m.rotateZ(this.rotation.z);let r=m.multiply(t,e);r=m.multiply(r,s),r=m.multiply(r,i),r=m.multiply(r,o),this.lookAtEnabled&&(r=m.lookAt([r[12],r[13],r[14]],[this.lookAtTarget.localMatrix[12],this.lookAtTarget.localMatrix[13],this.lookAtTarget.localMatrix[14]])),this.viewMatrix=m.inverse(r)}setViewProjectionMatrix(){this._recalculateViewMatrix(),this.viewProjectionMatrix=m.multiply(this.matrix,this.viewMatrix)}setLeft(t){this.left=t,this.createMatrix()}setRight(t){this.right=t,this.createMatrix()}setBottom(t){this.bottom=t,this.createMatrix()}setTop(t){this.top=t,this.createMatrix()}setNear(t){this.near=t,this.createMatrix()}setFar(t){this.far=t,this.createMatrix()}setPosition(t,e,s){this.position={x:t,y:e,z:s}}setRotationX(t){this.rotation.x=t}setRotationY(t){this.rotation.y=t}setRotationZ(t){this.rotation.z=t}lookAt(t){this.lookAtEnabled=!0,this.lookAtTarget=t}}class Ot{constructor(t,e,s,i){this.fieldOfView=t*Math.PI/180,this.aspectRatio=e,this.near=s,this.far=i,this.type="perspective",this.position={x:0,y:0,z:0},this.rotation={x:0,y:0,z:0},this.viewMatrix=m.identity(),this.lookAtEnabled=!1,this.createMatrix()}createMatrix(){this.top=this.near*Math.tan(this.fieldOfView/2),this.bottom=-this.top,this.right=this.top*this.aspectRatio,this.left=-this.right,this.matrix=[2*this.near/(this.right-this.left),0,0,0,0,2*this.near/(this.top-this.bottom),0,0,0,0,-(this.far+this.near)/(this.far-this.near),-1,-this.near*(this.right+this.left)/(this.right-this.left),-this.near*(this.top+this.bottom)/(this.top-this.bottom),2*this.far*this.near/(this.near-this.far),0]}_recalculateViewMatrix(){const t=m.identity(),e=m.translate(this.position.x,this.position.y,this.position.z),s=m.rotateX(this.rotation.x),i=m.rotateY(this.rotation.y),o=m.rotateZ(this.rotation.z);let r=m.multiply(t,e);r=m.multiply(r,s),r=m.multiply(r,i),r=m.multiply(r,o),this.lookAtEnabled&&(r=m.lookAt([r[12],r[13],r[14]],[this.lookAtTarget.localMatrix[12],this.lookAtTarget.localMatrix[13],this.lookAtTarget.localMatrix[14]])),this.viewMatrix=m.inverse(r)}setViewProjectionMatrix(){this._recalculateViewMatrix(),this.viewProjectionMatrix=m.multiply(this.matrix,this.viewMatrix)}setFieldOfView(t){this.fieldOfView=t*Math.PI/180,this.createMatrix()}setAspectRatio(t){this.aspectRatio=t,this.createMatrix()}setNear(t){this.near=t,this.createMatrix()}setFar(t){this.far=t,this.createMatrix()}setPosition(t,e,s){this.position={x:t,y:e,z:s}}setRotationX(t){this.rotation.x=t}setRotationY(t){this.rotation.y=t}setRotationZ(t){this.rotation.z=t}lookAt(t){this.lookAtEnabled=!0,this.lookAtTarget=t}}class Dt{constructor(){this.objects=[]}add(t){this.objects.push(t),this.objects.sort((e,s)=>{const i=e.geometryID-s.geometryID;return i||e.shader.id-s.shader.id})}}class Ft{constructor(t,e){this.geometryID=t.id,this.geometryType=t.type,this.shader=e,this.position={x:0,y:0,z:0},this.rotation={x:0,y:0,z:0},this.scale={x:1,y:1,z:1},this.attributes=t.attributes,this.uniforms={uViewProjectionMatrix:{name:"uViewProjectionMatrix",value:null,type:"mat4"},uNormalMatrix:{name:"uNormalMatrix",value:null,type:"mat4"},uLocalMatrix:{name:"uLocalMatrix",value:null,type:"mat4"}},this.surfaceNormals=!1,this.localMatrix=m.identity(),this._setAttributeData(),this._setUniformData(),this._setDrawMode(),this._setSurfaceNormals()}_setAttributeData(){for(const t in this.attributes)this.attributes[t].location=this.shader.gl.getAttribLocation(this.shader.program,this.attributes[t].name),this.attributes[t].buffer=this.shader.gl.createBuffer(),this.shader.gl.bindBuffer(this.shader.gl.ARRAY_BUFFER,this.attributes[t].buffer),this.shader.gl.bufferData(this.shader.gl.ARRAY_BUFFER,this.attributes[t].data,this.shader.gl.STATIC_DRAW)}_setUniformData(){for(const t in this.uniforms)this.uniforms[t].location=this.shader.gl.getUniformLocation(this.shader.program,this.uniforms[t].name)}_setDrawMode(){this.geometryType?this.drawMode=this.geometryType:this.drawMode="TRIANGLES"}_setSurfaceNormals(){if(this.surfaceNormals){const t=[];for(let e=0;e<this.geometry.attributes.aNormal.data.length;e+=9){const s=[this.geometry.attributes.aNormal.data[e],this.geometry.attributes.aNormal.data[e+1],this.geometry.attributes.aNormal.data[e+2]],i=[this.geometry.attributes.aNormal.data[e+3],this.geometry.attributes.aNormal.data[e+4],this.geometry.attributes.aNormal.data[e+5]],o=[this.geometry.attributes.aNormal.data[e+6],this.geometry.attributes.aNormal.data[e+7],this.geometry.attributes.aNormal.data[e+8]],r=B.subtract(i,s),h=B.subtract(o,s),d=r[1]*h[2]-r[2]*h[1],p=r[2]*h[0]-r[0]*h[2],l=r[0]*h[1]-r[1]*h[0],u=B.normalize([d,p,l]);t.push(u[0],u[1],u[2]),t.push(u[0],u[1],u[2]),t.push(u[0],u[1],u[2])}this.shader.gl.bindBuffer(this.shader.gl.ARRAY_BUFFER,this.geometry.attributes.aNormal.buffer),this.shader.gl.bufferData(this.shader.gl.ARRAY_BUFFER,new Float32Array(t),this.shader.gl.STATIC_DRAW)}}_recalculateModelMatrix(){const t=m.identity(),e=m.translate(this.position.x,this.position.y,this.position.z),s=m.rotateX(this.rotation.x),i=m.rotateY(this.rotation.y),o=m.rotateZ(this.rotation.z),r=m.scale(this.scale.x,this.scale.y,this.scale.z);let h=m.multiply(t,e);h=m.multiply(h,s),h=m.multiply(h,i),h=m.multiply(h,o),h=m.multiply(h,r),this.parentCollection?this.localMatrix=m.multiply(this.parentCollection.localMatrix,h):this.localMatrix=h}_recalculateNormalMatrix(){this.normalMatrix=m.transpose(m.inverse(this.localMatrix))}setProjectionMatrix(t){this._recalculateModelMatrix(),this._recalculateNormalMatrix(),this.projectionMatrix=t}setPosition(t,e,s){this.position={x:t,y:e,z:s},this._recalculateModelMatrix()}setRotationX(t){this.rotation.x=t,this._recalculateModelMatrix()}setRotationY(t){this.rotation.y=t,this._recalculateModelMatrix()}setRotationZ(t){this.rotation.z=t,this._recalculateModelMatrix()}setScale(t,e,s){this.scale={x:t,y:e,z:s},this._recalculateModelMatrix()}setAttribute(t,e,s){this.attributes[t]={name:t,data:e,size:s,count:e.length/s},this._setAttributeData()}setUniform(t,e,s){this.uniforms[t]={name:t,value:e,type:s},this._setUniformData()}setShader(t){this.shader=t,this._setAttributeData(),this._setUniformData()}setParent(t){if(this.parentCollection){let e=this.parentCollection.items.indexOf(this);e>=0&&this.parentCollection.items.splice(e,1)}t&&t.items.push(this),this.parentCollection=t}}let Lt=0;class Mt{constructor(t){this.id=Lt++,this.attributes={},this.setAttribute("aPosition",new Float32Array(t),3),this._generateNormals(t)}setAttribute(t,e,s){this.attributes[t]={name:t,data:e,size:s,count:e.length/s}}_generateNormals(t){const e=[];for(var s=0;s<t.length;s+=3){const i=t[s],o=t[s+1],r=t[s+2],h=Math.sqrt(i**2+o**2+r**2);e.push(i/h,o/h,r/h)}this.setAttribute("aNormal",new Float32Array(e),3)}}class Ut extends Mt{constructor(t,e,s,i){const o=[],r=t/s,h=e/i;for(let u=0;u<i;u++)for(let f=0;f<s;f++){const x=f*r-t/2,v=u*h-e/2,w=0,b=(f+1)*r-t/2,T=v,M=x,S=(u+1)*h-e/2,P=x,z=S,k=b,A=T,C=b,N=S;o.push(x,v,w,b,T,w,M,S,w,P,z,w,k,A,w,C,N,w)}super(o);const d=[];for(var p=0;p<o.length;p+=3){const u=o[p],f=o[p+1],x=1,v=Math.sqrt(u**2+f**2+x**2);d.push(u/v,f/v,1)}this.attributes.aNormal.data=new Float32Array(d),this.attributes.aNormal.count=d.length/3;const l=[];for(let u=0;u<o.length;u+=3){const f=(o[u]+t/2)/t,x=(o[u+1]+e/2)/e;l.push(f,x)}this.setAttribute("aUV",new Float32Array(l),2)}}let Yt=0;class Ht{constructor(t,e,s){const i=this._createShader(t,t.VERTEX_SHADER,e),o=this._createShader(t,t.FRAGMENT_SHADER,s);this.gl=t,this.id=Yt++,this.program=this._createProgram(t,i,o)}_createShader(t,e,s){const i=t.createShader(e);if(t.shaderSource(i,s),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS))return i;console.log(t.getShaderInfoLog(i)),t.deleteShader(i)}_createProgram(t,e,s){const i=t.createProgram();if(t.attachShader(i,e),t.attachShader(i,s),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS))return i;console.log(t.getProgramInfoLog(i)),t.deleteProgram(i)}}class y{}y.Renderer=Rt;y.Orthographic=jt;y.Perspective=Ot;y.Volume=Dt;y.Mesh=Ft;y.Geometry=Mt;y.Plane=Ut;y.Program=Ht;class $t{constructor(){n(this,"canvas");n(this,"heroElement");n(this,"textElement");n(this,"renderer");n(this,"volume");n(this,"camera");n(this,"planeMesh");n(this,"speed");n(this,"scene");n(this,"time");n(this,"then");n(this,"now");n(this,"timeScale");this.scene=new E.Scene,this.time=0,this.then=0,this.now=0,this.timeScale=5e-4,this.canvas=document.getElementById("hero-text-background"),this.heroElement=document.querySelector("section.hero"),this.textElement=document.getElementById("hero-heading-key-line"),this.renderer=new y.Renderer(this.canvas),this.volume=new y.Volume,this.camera=new y.Orthographic(-1,1,-1,1,-1,1);const t=new y.Program(this.renderer.gl,`#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uNormalMatrix;
uniform mat4 uLocalMatrix;
uniform float uTime;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) { 
	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

	vec3 i  = floor(v + dot(v, C.yyy) );
	vec3 x0 =   v - i + dot(i, C.xxx) ;

	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min( g.xyz, l.zxy );
	vec3 i2 = max( g.xyz, l.zxy );

	vec3 x1 = x0 - i1 + 1.0 * C.xxx;
	vec3 x2 = x0 - i2 + 2.0 * C.xxx;
	vec3 x3 = x0 - 1. + 3.0 * C.xxx;

	i = mod(i, 289.0 ); 
	vec4 p = permute( permute( permute( 
		i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
		+ i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
		+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

	float n_ = 1.0/7.0;
	vec3  ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_ );

	vec4 x = x_ *ns.x + ns.yyyy;
	vec4 y = y_ *ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4( x.xy, y.xy );
	vec4 b1 = vec4( x.zw, y.zw );

	vec4 s0 = floor(b0)*2.0 + 1.0;
	vec4 s1 = floor(b1)*2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

	vec3 p0 = vec3(a0.xy,h.x);
	vec3 p1 = vec3(a0.zw,h.y);
	vec3 p2 = vec3(a1.xy,h.z);
	vec3 p3 = vec3(a1.zw,h.w);

	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
	m = m * m;
	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
}

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
	vec4 position = uViewProjectionMatrix * uLocalMatrix * aPosition;
	position.z = map(snoise(vec3((position.xy / 2.0), (uTime / 2.0))), -0.8660254038, 0.8660254038, 0.0, 1.0);
	gl_Position = position;
	vNormal = aNormal + 0.5;
	vUV = aUV;
	vPos = position.xyz;
}`,`#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

uniform float uTime;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

void main() {
	vec4 a = vec4(0.83, 0.40, 0.38, 1.0);
	vec4 b = vec4(0.96, 0.75, 0.69, 1.0);
	vec4 c = vec4(0.40, 0.74, 0.90, 1.0);
	vec4 d = vec4(0.55, 0.88, 0.98, 1.0);
	vec4 e = vec4(0.41, 0.83, 0.56, 1.0);
	vec4 f = vec4(0.46, 0.92, 0.70, 1.0);

	float step = 1.0 / 4.0;

	vec4 color = a;
	color = mix(color, c, smoothstep(step * 1.0, step * 2.0, vPos.z));
	color = mix(color, e, smoothstep(step * 2.0, step * 3.0, vPos.z));
	color = mix(color, vec4(1.0), smoothstep(step * 3.0, step * 4.0, vPos.z));

	gl_FragColor = color;
}`),e=new y.Plane(2,2,16,1);this.planeMesh=new y.Mesh(e,t),this.planeMesh.setPosition(0,0,0),this.planeMesh.setUniform("uTime",0,"1f"),this.volume.add(this.planeMesh),this.speed={current:1,target:1,ease:.05},this.splitTitle()}splitTitle(){var s;const t=document.querySelector("h1"),e=[...t.childNodes];for(;t.firstChild;)t.removeChild(t.firstChild);for(let i=0;i<e.length;i++){let o=e[i];if(o.nodeType===Node.TEXT_NODE){const r=((s=o.textContent)==null?void 0:s.split(" "))??"";for(let h=0;h<r.length;h++)if(r[0]!==""||h!==0){if(o=document.createElement("span"),o.setAttribute("role","text"),r[0]===""){const d=document.createTextNode(" "+r[h]);o.appendChild(d)}else{let d=document.createTextNode(r[h]);h!==r.length-1&&(d=document.createTextNode(r[h]+" ")),o.appendChild(d)}t.appendChild(o)}}t.appendChild(o)}}onResize(){const t=this.heroElement.getBoundingClientRect(),e=this.textElement.getBoundingClientRect(),s=this.canvas.parentNode;s.style.width=e.width+10+"px",s.style.height=e.height+"px",s.style.top=e.top-t.top+"px",s.style.left=e.left+"px",this.renderer.resize()}appear(){const t=document.querySelectorAll("h1 span");this.scene.from(t,{opacity:0,translateY:50},{duration:1,ease:"easeOutExpo",stagger:.1,onStart:()=>{const e=document.querySelector("h1");e&&(e.style.opacity="1")}},0),this.scene.from(this.canvas,{opacity:0},{duration:2,ease:"easeOutQuint",onUpdate:()=>{this.onResize()}},.5),this.scene.play()}lerp(t,e,s){return(1-s)*t+s*e}onPreloaded(){this.appear()}onUpdate(t){this.speed.current<1.000001&&(this.speed.current=1),this.speed.current=this.lerp(this.speed.current,this.speed.target,this.speed.ease),this.now=t*this.timeScale,this.time+=(this.now-this.then)*this.speed.current,this.then=this.now,this.renderer.gl.clearColor(0,0,0,0),this.renderer.render(this.volume,this.camera),this.planeMesh.uniforms.uTime.value=this.time}}let Bt=class extends V{constructor(){super("section.hero"),this.isActive=!0,this.enterThreshold=-80,this.persistentAnimation=!0,this.addAnimation(new $t),this.addAnimation(new Nt)}onScroll(t){t.y>=this.metrics.scrollY+this.enterThreshold&&t.y<this.metrics.scrollY+this.metrics.height+this.exitThreshold?this.onEnter():this.onExit(),this.animations.forEach(e=>e.onScroll&&e.onScroll(t))}},Vt=class{constructor(){n(this,"pixelPerfect");n(this,"time");n(this,"then");n(this,"now");n(this,"timeScale");n(this,"canvas");n(this,"renderer");n(this,"volume");n(this,"camera");n(this,"viewport");n(this,"gridShader");n(this,"loupeShader");n(this,"gridSize");n(this,"gridMesh");n(this,"progress");n(this,"loupeMesh");n(this,"scene");this.pixelPerfect=new ut,this.time=0,this.then=0,this.now=0,this.timeScale=.003,this.canvas=document.getElementById("pixel-grid"),this.renderer=new y.Renderer(this.canvas),this.renderer.depthTest=!1,this.volume=new y.Volume,this.camera=new y.Perspective(70,1,100,1e3),this.camera.setPosition(0,0,500),this.viewport={width:window.innerWidth,height:window.innerHeight,aspectRatio:window.innerWidth/window.innerHeight},this.gridShader=new y.Program(this.renderer.gl,`#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

#define PI 3.14159265359

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uLocalMatrix;
uniform vec2 uCenterPoint;
uniform float uPointSize;
uniform float uIntensity;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;
varying float vIntensity;

void main() {
	float pixelIntensity = uIntensity * (1.0 - length(aUV.xy - uCenterPoint));
	float zoomedIntensity = (pow(abs(sin(PI * pixelIntensity / 2.0)), 64.0) * 3.0) + 1.0;
	vec4 newPos = aPosition;
	newPos.z += zoomedIntensity * 20.0;
	vec4 position = uViewProjectionMatrix * uLocalMatrix * newPos;
	gl_Position = position;
	gl_PointSize = uPointSize * (1.0 / position.z) * zoomedIntensity;
	vNormal = aNormal;
	vUV = aUV;
	vPos = position.xyz;
	vIntensity = zoomedIntensity;
}`,`#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

uniform float uProgress;
uniform float uOpacity;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;
varying float vIntensity;

float map(float value, float min1, float max1, float min2, float max2) {
	return min2 + (value - min1) * (max2 - min1) / (max1 - min1);
}

void main() {
	vec2 center = vec2(0.5);
	float dist = pow(-distance(vUV, center) + 1.0, uProgress);
	float distanceFromLeft = distance(gl_PointCoord.x, 0.0);
	float intensity = ((vIntensity - 1.0) / 3.0);
	vec3 triColor = vec3(1.0, 0.0, 0.0);
	triColor = mix(vec3(0.0, 1.0, 0.0), triColor, step(distanceFromLeft, 0.33333));
	triColor = mix(vec3(0.0, 0.0, 1.0), triColor, step(distanceFromLeft, 0.66666));
	vec3 color = mix(vec3(dist) * 0.5, triColor, intensity);
	gl_FragColor = vec4(color * uOpacity, uOpacity);
}`),this.loupeShader=new y.Program(this.renderer.gl,`#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

attribute vec4 aPosition;
attribute vec3 aNormal;
attribute vec2 aUV;

uniform mat4 uViewProjectionMatrix;
uniform mat4 uLocalMatrix;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

void main() {
	vec4 position = uViewProjectionMatrix * uLocalMatrix * aPosition;
	gl_Position = position;
	vNormal = aNormal;
	vUV = aUV;
	vPos = position.xyz;
}`,`#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
#else
	precision mediump float;
#define GLSLIFY 1
#endif

uniform float uBaseThickness;
uniform float uTransition;

varying vec3 vNormal;
varying vec2 vUV;
varying vec3 vPos;

void main() {
	vec4 startColor = vec4(0.419, 0.831, 0.564, 1.0);
	vec4 endColor = vec4(0.200, 0.392, 0.517, 1.0);
	float distance = (0.5 - length(vUV - vec2(0.5))) * 2.0;
	float thickness = (uBaseThickness * (1.0 - uTransition)) + 0.0125;
	float width = smoothstep(0.005 + thickness, 0.0 + thickness, distance);
	width = mix(0.0, width, smoothstep(0.0, 0.005, distance));

	vec4 finalColor = mix(startColor, endColor, uTransition);

	gl_FragColor = mix(vec4(0.0), finalColor, width);

	//gl_FragColor = vec4(distance);
}`)}createGridGeometry(t,e){const s=[],i=e%2!==0?e-1:e,o=2*i,r=2*t,h=t/i,d=r/o;for(let u=0;u<=o;u++)for(let f=0;f<=i;f++){const x=f*h-t/2,v=u*d-r/2;s.push(x,v,0)}const p=new y.Geometry(s),l=[];for(let u=0;u<s.length;u+=3){const f=(s[u]+t/2)/t,x=(s[u+1]+t/2)/t;l.push(f,x)}return p.setAttribute("aUV",new Float32Array(l),2),p}reset(){this.progress={pointSize:this.gridSize/2,pointOpacity:240,rotation:0,cameraX:0,cameraY:-window.innerHeight/2+24,cameraRotate:0,scale:0,centerX:.5,centerY:.5,gridY:0,loupeX:0,loupeY:0,loupeZ:50,totalOpacity:1,colorTransition:0,endDelay:0},this.scene=this.pixelPerfect.scene,this.scene.fromTo(this.progress,{pointSize:[this.gridSize/2,this.gridSize]},{duration:1,ease:"easeInOutExpo"},0),this.scene.fromTo(this.progress,{cameraY:[-window.innerHeight/2+24,0]},{duration:1.25,ease:"easeInOutSine"},0),this.scene.fromTo(this.progress,{pointOpacity:[240,0]},{duration:1.25,ease:"easeInOutExpo"},.25),this.scene.fromTo(this.progress,{scale:[0,1]},{duration:.5,ease:"easeOutExpo"},.75),this.scene.fromTo(this.progress,{gridY:[0,this.gridSize/2]},{duration:2.25},.75),this.viewport.height<=this.viewport.width?(this.scene.fromTo(this.progress,{centerX:[.5,.75],centerY:[.5,.75],loupeX:[0,this.gridSize/4],loupeY:[0,this.gridSize/4]},{duration:.5,ease:"easeInOutQuint"},1),this.scene.to(this.progress,{centerY:.25,loupeY:-this.gridSize/4},{duration:.5,ease:"easeInOutQuint"},1.5),this.scene.to(this.progress,{centerX:.25,centerY:.5,loupeX:-this.gridSize/4,loupeY:0},{duration:1,ease:"easeInOutQuint"},2),this.scene.fromTo(this.progress,{loupeZ:[50,0],pointSize:[this.gridSize,0],totalOpacity:[1,0],colorTransition:[0,1]},{duration:1,ease:"easeInOutQuint"},2)):(this.scene.fromTo(this.progress,{centerX:[.5,.5+this.viewport.width/this.viewport.height*.25],centerY:[.5,.75],loupeX:[0,this.gridSize/4*(this.viewport.width/this.viewport.height)],loupeY:[0,this.gridSize/4]},{duration:.5,ease:"easeInOutQuint"},1),this.scene.to(this.progress,{centerY:.25,loupeY:-this.gridSize/4},{duration:.5,ease:"easeInOutQuint"},1.5),this.scene.to(this.progress,{centerX:.5-this.viewport.width/this.viewport.height*.25,centerY:.5,loupeX:-this.gridSize/4*(this.viewport.width/this.viewport.height),loupeY:0},{duration:1,ease:"easeInOutQuint"},2),this.scene.fromTo(this.progress,{loupeZ:[50,0],pointSize:[this.gridSize,0],totalOpacity:[1,0],colorTransition:[0,1]},{duration:1,ease:"easeInOutQuint"},2)),this.scene.fromTo(this.progress,{endDelay:[0,1]},{duration:.5},3)}onResize(t){this.viewport=t,this.camera.setFieldOfView(2*Math.atan(t.height/2/500)*(180/Math.PI)),this.camera.setAspectRatio(t.aspectRatio),this.gridSize=Math.max(t.width,t.height);const e=this.createGridGeometry(Math.floor(this.gridSize),Math.floor(4/this.gridSize*(12*this.gridSize)));this.gridMesh=new y.Mesh(e,this.gridShader),this.gridMesh.drawMode="POINTS",this.gridMesh.setUniform("uCenterPoint",[.5,.5],"2f"),this.gridMesh.setUniform("uPointSize",this.renderer.pixelRatio*(this.gridSize/2),"1f"),this.gridMesh.setUniform("uProgress",240,"1f"),this.gridMesh.setUniform("uIntensity",0,"1f"),this.gridMesh.setUniform("uOpacity",1,"1f");const s=new y.Plane(this.viewport.width/3,this.viewport.width/3,1,1);this.loupeMesh=new y.Mesh(s,this.loupeShader),this.loupeMesh.setUniform("uBaseThickness",.05/this.viewport.width*this.viewport.width,"1f"),this.loupeMesh.setUniform("uTransition",0,"1f"),this.volume.objects=[],this.volume.add(this.gridMesh),this.volume.add(this.loupeMesh),this.renderer.resize(),this.reset()}onUpdate(t){this.now=t*this.timeScale,this.time+=this.now-this.then,this.then=this.now,this.camera.position.y=this.progress.cameraY,this.gridMesh.uniforms.uCenterPoint.value=[this.progress.centerX,this.progress.centerY-this.progress.gridY/this.gridSize],this.gridMesh.uniforms.uProgress.value=this.progress.pointOpacity,this.gridMesh.uniforms.uIntensity.value=this.progress.scale,this.gridMesh.uniforms.uPointSize.value=this.progress.pointSize*this.renderer.pixelRatio,this.gridMesh.uniforms.uOpacity.value=this.progress.totalOpacity,this.gridMesh.position.y=this.progress.gridY,this.loupeMesh.uniforms.uTransition.value=this.progress.colorTransition,this.loupeMesh.position.x=this.progress.loupeX,this.loupeMesh.position.y=this.progress.loupeY,this.loupeMesh.position.z=this.progress.loupeZ,this.loupeMesh.setScale(this.progress.scale,this.progress.scale,this.progress.scale),this.renderer.gl.clearColor(0,0,0,0),this.renderer.render(this.volume,this.camera)}};class Gt{constructor(){n(this,"pixelPerfect");n(this,"textElement");n(this,"scene");this.pixelPerfect=new ut,this.textElement=document.querySelector("section.pixel-perfect p"),this.scene=this.pixelPerfect.scene}onResize(t){this.textElement.style.opacity="0",this.textElement.style.transform="translateY(100%)",this.scene=this.pixelPerfect.scene,this.scene.fromTo(this.textElement,{translateY:[100,-100]},{duration:2,ease:"linear"},1),this.scene.fromTo(this.textElement,{opacity:[0,1]},{duration:1,ease:"easeInOutExpo"},1),this.scene.to(this.textElement,{opacity:0},{duration:1,ease:"easeInOutExpo"},2)}}const ot={didInit:null};let Xt=class extends V{constructor(){super("section.pixel-perfect");n(this,"scene");n(this,"progress");if(ot.didInit)return ot.didInit;ot.didInit=this,this.attachScene(),this.progress=0,this.addAnimation(new Vt),this.addAnimation(new Gt),this.enable()}initializeTextFocus(){var s;const e=Number((s=this.viewport)==null?void 0:s.height)/100;this.DOM.querySelectorAll("[data-focus]").forEach(i=>{const o=i,r=Number(o.dataset.focus)*e+this.DOM.offsetTop;o.dataset.focusOffset=`${r}`})}onScroll(e){if(super.onScroll(e),this.isActive){const s=this.metrics.scrollY+this.enterThreshold,i=this.metrics.scrollY+this.metrics.height+this.exitThreshold,o=e.y-s;this.progress=o/(i-s)}else e.y<=this.metrics.scrollY+this.enterThreshold?this.progress=0:this.progress=1,this.scene.setProgressImmediately(this.progress)}attachScene(){this.scene=new E.Scene}onUpdate(e){this.isActive&&(this.scene.setProgressImmediately(this.progress),this.animations.forEach(s=>{s.onUpdate&&s.onUpdate(e)}))}onResize(e){this.viewport=e,this.attachScene(),super.onResize(e),this.enterThreshold=this.exitThreshold=-e.height,this.initializeTextFocus()}};const ut=Xt;let Wt=class{constructor(){n(this,"interactive");n(this,"time");n(this,"then");n(this,"now");n(this,"timeScale");n(this,"viewport");n(this,"bounds");n(this,"mouse");n(this,"clicking");n(this,"progress");n(this,"canvas");n(this,"ctx");n(this,"balloonIndexStart");n(this,"scaleFactor");n(this,"scene");n(this,"balloons");this.interactive=new mt,this.time=0,this.then=0,this.now=0,this.timeScale=.003,this.viewport={width:window.innerWidth,height:window.innerHeight,aspectRatio:window.innerWidth/window.innerHeight},this.bounds={left:0,top:0},this.mouse={x:this.viewport.width/2,y:this.viewport.height/2,xOffset:0,yOffset:0},this.clicking=!1,this.progress={triggerFlash:0,impact:0},this.canvas=document.getElementById("interactive-game"),this.ctx=this.canvas.getContext("2d"),this.balloonIndexStart=0,this.balloons=[],this.scene=this.interactive.scene,this.scaleFactor=0}reset(){this.progress={triggerFlash:0,impact:0},this.balloonIndexStart=0,this.balloons=[],this.scaleFactor=Math.ceil(this.viewport.width/600);for(let t=0;t<8;t++)this.createBalloon();this.scene=this.interactive.scene,this.scene.fromTo(this.canvas,{opacity:[1,0]},{duration:1},1.5)}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const t of this.balloons)t.y-=(this.now-this.then)*(this.viewport.height/(24*this.scaleFactor))*t.velocity*this.scaleFactor,t.y<-130*this.scaleFactor?(t.x=Math.random()*(this.viewport.width-75*this.scaleFactor),t.y=this.viewport.height):(this.drawBalloon(t),this.drawReticle(this.mouse.xOffset,this.mouse.yOffset))}drawBalloon(t){this.ctx.scale(t.scale,t.scale),this.ctx.translate(t.x/t.scale-5*t.scale,t.y/t.scale-5*t.scale);const e=new Path2D("m40 88 3 5H31l3-5h6ZM36.534 1c23 0 35.564 16.992 35.467 37C71.895 59.52 54 88 36.995 88 19.991 88 .995 59.524 1 38 1.005 16.476 15.534 1 36.534 1Z"),s=new Path2D("M48.955 11.223C58.169 16.089 63.054 25.922 63 36.92M37.313 93C33 106 45 109 44 120c-.706 7.766-9 10-13 5");this.ctx.isPointInPath(e,this.mouse.xOffset,this.mouse.yOffset)&&!t.isPopped?(this.ctx.strokeStyle=`rgba(104, 189, 231, ${t.opacity})`,this.ctx.fillStyle=`rgba(0, 0, 0, ${t.opacity})`,this.clicking&&(E.fromTo(this.progress,{impact:[1,0]},{duration:.125,ease:"linear"}),E.to(t,{opacity:0,scale:1.5*this.scaleFactor},{duration:.25,ease:"easeOutExpo",onComplete:()=>{t.x=Math.random()*(this.viewport.width-75*this.scaleFactor),t.y=this.viewport.height,t.isPopped=!1,t.opacity=1,t.scale=this.scaleFactor}}),t.isPopped=!0)):(this.ctx.strokeStyle=`rgba(214, 103, 97, ${t.opacity})`,this.ctx.fillStyle=`rgba(0, 0, 0, ${t.opacity})`),this.ctx.fill(e),this.ctx.stroke(e),this.ctx.stroke(s),this.ctx.setTransform(1,0,0,1,0,0)}createBalloon(){const t=Math.random()*(this.viewport.width-75*this.scaleFactor),e=Math.random()*this.viewport.height,s=Math.random()*3+1;this.balloons.push({id:this.balloonIndexStart,isPopped:!1,scale:this.scaleFactor,opacity:1,x:t,y:e,velocity:s}),this.balloonIndexStart=this.balloonIndexStart+1}drawReticle(t,e){this.reticleLines(t,e),this.reticleCircle(t,e),this.reticleChevrons(t,e)}reticleLines(t,e){this.ctx.strokeStyle="#D66761",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(t-60,e),this.ctx.moveTo(t+60,e),this.ctx.lineTo(this.canvas.width,e),this.ctx.moveTo(t,0),this.ctx.lineTo(t,e-60),this.ctx.moveTo(t,e+60),this.ctx.lineTo(t,this.canvas.height),this.ctx.closePath(),this.ctx.stroke(),this.ctx.strokeStyle="#FFFFFF",this.ctx.beginPath(),this.ctx.moveTo(0+(t-60)*(1-this.progress.triggerFlash),e),this.ctx.lineTo(t-60,e),this.ctx.moveTo(t+60,e),this.ctx.lineTo((t+60)*(1-this.progress.triggerFlash)+this.canvas.width*this.progress.triggerFlash,e),this.ctx.moveTo(t,0+(e-60)*(1-this.progress.triggerFlash)),this.ctx.lineTo(t,e-60),this.ctx.moveTo(t,e+60),this.ctx.lineTo(t,(e+60)*(1-this.progress.triggerFlash)+this.canvas.height*this.progress.triggerFlash),this.ctx.closePath(),this.ctx.stroke()}reticleCircle(t,e){this.ctx.strokeStyle="#D66761",this.ctx.beginPath(),this.ctx.arc(t,e,36,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke(),this.ctx.strokeStyle=`rgba(255, 255, 255, ${this.progress.triggerFlash}`,this.ctx.beginPath(),this.ctx.arc(t,e,36,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.stroke()}reticleChevrons(t,e){this.ctx.strokeStyle="#FBE7E6",this.ctx.beginPath(),this.ctx.moveTo(t-10,e-18-6*this.progress.triggerFlash),this.ctx.lineTo(t,e-8-6*this.progress.triggerFlash),this.ctx.lineTo(t+10,e-18-6*this.progress.triggerFlash),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t-18-6*this.progress.triggerFlash,e-10),this.ctx.lineTo(t-8-6*this.progress.triggerFlash,e),this.ctx.lineTo(t-18-6*this.progress.triggerFlash,e+10),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t-10,e+18+6*this.progress.triggerFlash),this.ctx.lineTo(t,e+8+6*this.progress.triggerFlash),this.ctx.lineTo(t+10,e+18+6*this.progress.triggerFlash),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t+18+6*this.progress.triggerFlash,e-10),this.ctx.lineTo(t+8+6*this.progress.triggerFlash,e),this.ctx.lineTo(t+18+6*this.progress.triggerFlash,e+10),this.ctx.stroke()}calculateMouseOffset(){this.mouse.xOffset=this.mouse.x-this.bounds.left,this.mouse.yOffset=this.mouse.y-this.bounds.top}onResize(t){this.viewport=t,this.canvas.width=this.viewport.width,this.canvas.height=this.viewport.height,this.reset()}onMouseDown(t){this.bounds=this.canvas.getBoundingClientRect(),E.fromTo(this.progress,{triggerFlash:[1,0]},{duration:1,ease:"easeOutExpo"}),this.mouse.x=t.clientX,this.mouse.y=t.clientY,this.clicking=!0}onMouseUp(){setTimeout(()=>this.clicking=!1,100)}onMouseMove(t){this.bounds=this.canvas.getBoundingClientRect(),this.mouse.x=t.clientX,this.mouse.y=t.clientY}onUpdate(t){this.now=t*this.timeScale,this.time+=this.now-this.then,this.calculateMouseOffset(),this.draw(),this.then=this.now}};class qt{constructor(){n(this,"interactive");n(this,"textElement");n(this,"scene");this.interactive=new mt,this.textElement=document.querySelector("section.interactive span"),this.scene=this.interactive.scene}onResize(){this.textElement.style.opacity="0",this.textElement.style.transform="scale(0.5)",this.scene=this.interactive.scene,this.scene.fromTo(this.textElement,{scale:[.5,1.5]},{duration:2,ease:"linear"},0),this.scene.fromTo(this.textElement,{opacity:[0,1]},{duration:1,ease:"easeInOutExpo"},0),this.scene.to(this.textElement,{opacity:0},{duration:1,ease:"easeInOutExpo"},1)}}const nt={didInit:null};let Qt=class extends V{constructor(){super("section.interactive");n(this,"scene");n(this,"progress");if(nt.didInit)return nt.didInit;nt.didInit=this,this.persistentAnimation=!0,this.addAnimation(new Wt),this.addAnimation(new qt),this.attachScene(),this.progress=0}initializeTextFocus(){var s;const e=Number((s=this.viewport)==null?void 0:s.height)/100;this.DOM.querySelectorAll("[data-focus]").forEach(i=>{const o=i,r=Number(o.dataset.focus)*e+this.DOM.offsetTop;o.dataset.focusOffset=`${r}`})}attachScene(){this.scene=new E.Scene}onScroll(e){if(super.onScroll(e),this.isActive){const s=this.metrics.scrollY+this.enterThreshold,i=this.metrics.scrollY+this.metrics.height+this.exitThreshold,o=e.y-s;this.progress=o/(i-s)}else e.y<=this.metrics.scrollY+this.enterThreshold?this.progress=0:this.progress=1,this.scene.setProgressImmediately(this.progress)}onUpdate(e){this.isActive&&(this.scene.setProgressImmediately(this.progress),this.animations.forEach(s=>s.onUpdate&&s.onUpdate(e)))}onResize(e){this.viewport=e,this.attachScene(),super.onResize(e),this.exitThreshold=0,this.initializeTextFocus()}onMouseMove(e){this.isActive&&this.animations.forEach(s=>s.onMouseMove&&s.onMouseMove(e))}};const mt=Qt;class Zt{constructor(){n(this,"photography");n(this,"progress");n(this,"viewport");n(this,"background");n(this,"scene");this.photography=new lt,this.progress={value:0},this.background=document.querySelector("section.photography .photography--background")}onResize(t){this.viewport=t,this.scene=this.photography.scene,this.scene.fromTo(this.background,{opacity:[0,1]},{duration:1},0),this.scene.fromTo(this.progress,{value:1},{duration:3},0)}}class Kt{constructor(){n(this,"photography");n(this,"viewport");n(this,"scene");n(this,"collage");this.photography=new lt,this.collage=document.querySelector("section.photography .photography--collage")}onResize(t){this.viewport=t,this.scene=this.photography.scene,this.scene.addClass(this.collage,{class:"enter"},{toggle:!0},.75)}}class Jt{constructor(){n(this,"photography");n(this,"scene");n(this,"textElement");this.photography=new lt,this.textElement=document.querySelector("section.photography span")}onResize(){this.textElement.style.transform="translateY(100%)",this.scene=this.photography.scene,this.scene.fromTo(this.textElement,{translateY:[100,-100]},{duration:2.4,ease:"linear"},0)}}const rt={didInit:null};let te=class extends V{constructor(){super("section.photography");n(this,"scene");n(this,"progress");if(rt.didInit)return rt.didInit;rt.didInit=this,this.attachScene(),this.addAnimation(new Zt),this.addAnimation(new Kt),this.addAnimation(new Jt),this.progress=0}initializeTextFocus(){var s;const e=Number((s=this.viewport)==null?void 0:s.height)/100;this.DOM.querySelectorAll("[data-focus]").forEach(i=>{const o=i,r=Number(o.dataset.focus)*e+this.DOM.offsetTop;o.dataset.focusOffset=`${r}`})}attachScene(){this.scene=new E.Scene}onScroll(e){if(super.onScroll(e),this.isActive){const s=this.metrics.scrollY+this.enterThreshold,i=this.metrics.scrollY+this.metrics.height+this.exitThreshold,o=e.y-s;this.progress=o/(i-s)}else e.y<=this.metrics.scrollY+this.enterThreshold?this.progress=0:this.progress=1,this.scene.setProgressImmediately(this.progress)}onUpdate(e){this.isActive&&(this.scene.setProgressImmediately(this.progress),this.animations.forEach(s=>s.onUpdate&&s.onUpdate(e)))}onResize(e){this.viewport=e,this.attachScene(),super.onResize(e),this.enterThreshold=-e.height,this.exitThreshold=e.height/2,this.initializeTextFocus()}};const lt=te;class ee{constructor(){n(this,"travel");n(this,"progress");n(this,"viewport");n(this,"introText");n(this,"canvas");n(this,"ctx");n(this,"text");n(this,"imageDimensions");n(this,"time");n(this,"then");n(this,"now");n(this,"timeScale");n(this,"initialRender");n(this,"image");n(this,"imageReady");n(this,"orientation");n(this,"scene");n(this,"lastChar");this.travel=new gt,this.scene=this.travel.scene,this.time=0,this.then=0,this.now=0,this.timeScale=.003,this.progress={xPosition:0,yPosition:0,fontSize:4,xOffset:0},this.viewport={width:window.innerWidth,height:window.innerHeight,aspectRatio:window.innerWidth/window.innerHeight},this.introText=document.getElementById("travel-intro"),this.canvas=document.getElementById("adventures-mask"),this.ctx=this.canvas.getContext("2d"),this.ctx.font="600 96px AppleSDGothicNeo",this.text=this.ctx.measureText("adventures"),this.imageDimensions={aspectRatio:1.8,height:800,width:1440,scaledHeight:0,scaledWidth:0,xOffset:0,yOffset:0},this.image=new Image,this.imageReady=!1,this.image.onload=()=>{this.imageReady=!0,this.imageDimensions.height=this.image.height,this.imageDimensions.width=this.image.width,this.imageDimensions.aspectRatio=this.image.width/this.image.height,this.setImageDimensions()},this.orientation=window.matchMedia("(orientation: portrait)"),this.initialRender=!1}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.imageReady&&(this.ctx.globalCompositeOperation="destination-atop",this.ctx.drawImage(this.image,this.imageDimensions.xOffset,this.imageDimensions.yOffset,this.imageDimensions.scaledWidth,this.imageDimensions.scaledHeight,0,0,this.canvas.width,this.canvas.height)),this.ctx.fillStyle="rgb(255, 255, 255)",this.ctx.font=`600 ${this.progress.fontSize}vw AppleSDGothicNeo`,this.text=this.ctx.measureText("adventures"),this.lastChar=this.ctx.measureText("s"),this.ctx.fillText("adventures",this.progress.xPosition-this.text.width/2-(this.text.width/2-this.lastChar.width/2)*this.progress.xOffset,this.progress.yPosition+this.lastChar.actualBoundingBoxAscent/2*this.progress.xOffset)}setImageDimensions(){this.viewport.aspectRatio<this.imageDimensions.aspectRatio?(this.imageDimensions.scaledHeight=this.imageDimensions.aspectRatio,this.imageDimensions.scaledWidth=this.imageDimensions.height*this.viewport.aspectRatio,this.imageDimensions.xOffset=this.imageDimensions.width/2-this.imageDimensions.scaledWidth/2,this.imageDimensions.yOffset=0):(this.imageDimensions.scaledHeight=this.imageDimensions.width/this.viewport.aspectRatio,this.imageDimensions.scaledWidth=this.imageDimensions.width,this.imageDimensions.xOffset=0,this.imageDimensions.yOffset=this.imageDimensions.height/2-this.imageDimensions.scaledHeight/2)}onResize(t){this.viewport=t,this.canvas.width=this.viewport.width,this.canvas.height=this.viewport.height,this.setImageDimensions(),this.progress={xPosition:this.canvas.width,yPosition:this.canvas.height,fontSize:4,xOffset:0},this.scene=this.travel.scene,this.scene.fromTo(this.progress,{xPosition:[this.canvas.width,this.canvas.width/2],fontSize:[8,16]},{duration:1},0),this.scene.fromTo(this.introText,{translateX:[-50,-50],translateY:[-50,-400],opacity:[1,0]},{duration:1},1),this.scene.fromTo(this.progress,{xOffset:[0,1],yPosition:[this.canvas.height,this.canvas.height/2],fontSize:[16,32]},{duration:1},1),this.scene.fromTo(this.progress,{fontSize:[32,512]},{duration:1},2),this.initialRender=!1}onUpdate(t){this.now=t*this.timeScale,this.time+=this.now-this.then,this.then=this.now,this.initialRender?this.draw():(this.initialRender=!0,this.scene.setProgressImmediately(.25))}}class se{constructor(){n(this,"travel");n(this,"overlay");n(this,"scene");this.travel=new gt,this.overlay=document.querySelector("section.travel .travel--overlay")}onResize(){this.scene=this.travel.scene,this.scene.fromTo(this.overlay,{opacity:[0,1]},{duration:1},2)}}const at={didInit:null};let ie=class extends V{constructor(){super("section.travel");n(this,"scene");n(this,"progress");if(at.didInit)return at.didInit;at.didInit=this,this.attachScene(),this.addAnimation(new ee),this.addAnimation(new se),this.progress=0,this.enable()}initializeTextFocus(){var s;const e=Number((s=this.viewport)==null?void 0:s.height)/100;this.DOM.querySelectorAll("[data-focus]").forEach(i=>{const o=i,r=Number(o.dataset.focus)*e+this.DOM.offsetTop;o.dataset.focusOffset=`${r}`})}onScroll(e){if(super.onScroll(e),this.isActive){const s=this.metrics.scrollY+this.enterThreshold,i=this.metrics.scrollY+this.metrics.height+this.exitThreshold,o=e.y-s;this.progress=o/(i-s)}else e.y<=this.metrics.scrollY+this.enterThreshold?this.progress=0:this.progress=1,this.scene.setProgressImmediately(this.progress)}attachScene(){this.scene=new E.Scene}onUpdate(e){this.isActive&&(this.scene.setProgressImmediately(this.progress),this.animations.forEach(s=>{var i;(i=s.onUpdate)==null||i.call(s,e)}))}onResize(e){this.viewport=e,this.attachScene(),super.onResize(e),this.enterThreshold=-e.height/4,this.exitThreshold=-e.height,this.initializeTextFocus()}};const gt=ie;let oe=class{constructor(){n(this,"contact");n(this,"bounds");n(this,"mouse");n(this,"cta");n(this,"viewport");this.contact=new ft,this.bounds={top:0,left:0,width:0,height:0},this.mouse={x:0,y:0,xOffsetTarget:0,xOffsetCurrent:0,yOffsetTarget:0,yOffsetCurrent:0},this.cta=document.querySelector("section.contact .contact--copy .contact--cta a")}calculateMouseOffset(){this.mouse.xOffsetTarget=(this.mouse.x-this.bounds.left-this.bounds.width/2)/(this.viewport.width/2),this.mouse.yOffsetTarget=(this.mouse.y-this.bounds.top-this.bounds.height/2)/(this.viewport.height/2)}onResize(t){this.viewport=t}onMouseMove(t){this.bounds=this.cta.getBoundingClientRect(),this.mouse.x=t.clientX,this.mouse.y=t.clientY}lerp(t,e,s){return(1-s)*t+s*e}onUpdate(){this.calculateMouseOffset(),this.mouse.xOffsetCurrent=this.lerp(this.mouse.xOffsetCurrent,this.mouse.xOffsetTarget,.1),this.mouse.yOffsetCurrent=this.lerp(this.mouse.yOffsetCurrent,this.mouse.yOffsetTarget,.1),this.cta.style.transform=`translate(${100*this.mouse.xOffsetCurrent}%, ${100*this.mouse.yOffsetCurrent}%)`}},ne=class{constructor(){n(this,"contact");n(this,"viewport");n(this,"progress");n(this,"textWrapper");n(this,"text");n(this,"played");n(this,"scene");n(this,"textAnimation");n(this,"splitText");this.contact=new ft,this.progress={value:0},this.textWrapper=document.querySelector("section.contact .contact--copy"),this.text=document.querySelector("section.contact .contact--copy p"),this.played=!1,this.splitTitle()}splitTitle(){var s;const t=this.text,e=[...t.childNodes];for(;t.firstChild;)t.removeChild(t.firstChild);for(let i of e){if(i.nodeType===Node.TEXT_NODE){const o=((s=i.textContent)==null?void 0:s.split(" "))??"";for(let r=0;r<o.length;r++)if(o[0]!==""||r!==0){if(i=document.createElement("span"),i.setAttribute("role","text"),o[0]===""){const h=document.createTextNode(" "+o[r]);i.appendChild(h)}else{let h=document.createTextNode(o[r]);r!==o.length-1&&(h=document.createTextNode(o[r]+" ")),i.appendChild(h)}t.appendChild(i)}}t.appendChild(i)}this.splitText=document.querySelectorAll("section.contact .contact--copy p span, section.contact .contact--copy .contact--cta")}onResize(){this.scene=this.contact.scene,this.played=!1,this.textAnimation=new E.Scene,this.textAnimation.fromTo(this.splitText,{opacity:[0,1],translateY:[50,0]},{duration:1,ease:"easeOutExpo",stagger:.1},0),this.scene.fromTo(this.progress,{value:[0,1]},{duration:3},0),this.scene.fromTo(this.textWrapper,{opacity:[0,1]},{duration:.5,ease:"easeInOutExpe",onComplete:()=>{this.played||(this.textAnimation.play(),this.played=!0)}},0)}lerp(t,e,s){return(1-s)*t+s*e}};const ht={didInit:null};let re=class extends V{constructor(){super("section.contact");n(this,"scene");n(this,"progress");if(ht.didInit)return ht.didInit;ht.didInit=this,this.persistentAnimation=!0,this.attachScene(),this.progress=0,this.addAnimation(new oe),this.addAnimation(new ne)}initializeTextFocus(){var s;const e=Number((s=this.viewport)==null?void 0:s.height)/100;this.DOM.querySelectorAll("[data-focus]").forEach(i=>{const o=i,r=Number(o.dataset.focus)*e+this.DOM.offsetTop;o.dataset.focusOffset=`${r}`})}onScroll(e){if(super.onScroll(e),this.isActive){const s=this.metrics.scrollY+this.enterThreshold,i=this.metrics.scrollY+this.metrics.height+this.exitThreshold,o=e.y-s;this.progress=o/(i-s)}else e.y<=this.metrics.scrollY+this.enterThreshold?this.progress=0:this.progress=1,this.scene.setProgressImmediately(this.progress)}attachScene(){this.scene=new E.Scene}onUpdate(e){this.isActive&&(this.scene.setProgressImmediately(this.progress),this.animations.forEach(s=>{var i;(i=s.onUpdate)==null||i.call(s,e)}))}onResize(e){this.viewport=e,this.attachScene(),super.onResize(e),this.initializeTextFocus()}onEnter(){this.isActive||(this.enable(),this.animations.forEach(e=>e.onEnter&&e.onEnter()))}onExit(){this.isActive&&(this.disable(),this.animations.forEach(e=>e.onExit&&e.onExit()))}onMouseMove(e){this.isActive&&this.animations.forEach(s=>s.onMouseMove&&s.onMouseMove(e))}};const ft=re;let ae=class{constructor(){n(this,"viewport");n(this,"DOMS");n(this,"cards");this.viewport={width:window.innerWidth,height:window.innerHeight,aspectRatio:window.innerWidth/window.innerHeight},this.DOMS=document.querySelectorAll(".work--item"),this.cards=[]}createCardObjects(){this.cards=[],this.DOMS.forEach((t,e)=>{this.cards.push({DOM:t,scrollY:t.offsetTop,height:t.clientHeight,progress:0,offsetMultiplier:e===2||e===5?4:1})})}createScenes(){this.cards.forEach(t=>{const e=new E.Scene;e.fromTo(t.DOM,{translateY:[25*t.offsetMultiplier,0]},{duration:1,ease:"easeInOutSine"},0),t.scene=e})}onScroll(t){this.cards.forEach(e=>{var s;if(t.y>=e.scrollY-this.viewport.height){const i=(t.y-(e.scrollY-this.viewport.height))/e.height;e.progress=Math.min(i,1)}else e.progress=0;(s=e.scene)==null||s.setProgressImmediately(e.progress)})}onResize(t){this.viewport=t,this.createCardObjects(),this.createScenes()}};const ct={didInit:null};let he=class extends V{constructor(){super("section.work");n(this,"scene");n(this,"progress");if(ct.didInit)return ct.didInit;ct.didInit=this,this.addAnimation(new ae),this.persistentAnimation=!0}onScroll(e){super.onScroll(e)}onUpdate(e){this.isActive&&this.animations.forEach(s=>{var i;(i=s.onUpdate)==null||i.call(s,e)})}onResize(e){super.onResize(e),this.enterThreshold=-e.height}};class ce{constructor(){n(this,"sections",[]);n(this,"viewportTracker",document.createElement("div"));n(this,"resizeTimer");n(this,"viewport");n(this,"ticking");n(this,"persistentAnimation");n(this,"scrollMetrics");n(this,"needScrollUpdate");n(this,"frame");n(this,"pressed");n(this,"lazyLoadItems",[]);this._initializeLazyLoad(),this.lazyLoad=this.lazyLoad.bind(this),this._createViewportTracker(),this.onScroll=this.onScroll.bind(this),this.debounceResize=this.debounceResize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.sections.push(new Bt),this.sections.push(new pt),this.sections.push(new ut),this.sections.push(new mt),this.sections.push(new lt),this.sections.push(new gt),this.sections.push(new ft),this.sections.push(new he),this.addEventListener(),this.ticking=!1,this.persistentAnimation=!1,this.viewport={width:0,height:0,aspectRatio:0},this.pressed=!1,this.scrollMetrics={x:0,y:0},this.onPreloaded(),this.onResize(),this.hasPersistentAnimation(),this.onUpdate(0)}_initializeLazyLoad(){const t=document.querySelectorAll("section");this.lazyLoadItems=[],t.forEach(e=>{this.lazyLoadItems.push({section:e,scrollTarget:e.offsetTop-e.offsetHeight,lazyTarget:e.querySelector("picture[data-lazy]"),lazyData:e.querySelector("noscript"),loaded:!1})})}lazyLoad(){this.lazyLoadItems.forEach(t=>{var e;if(!t.loaded&&(window.scrollY>=t.scrollTarget||window.scrollY>=t.scrollTarget)){if(t.lazyTarget&&t.lazyData){const s=document.createElement("picture");s.innerHTML=t.lazyData.textContent;const i=s.firstChild;i.setAttribute("data-lazy",""),(e=t.lazyTarget.parentNode)==null||e.replaceChild(i,t.lazyTarget)}t.loaded=!0}})}onPreloaded(){this.sections.forEach(t=>t.onPreloaded())}onUpdate(t){this.ticking=!1,this.needScrollUpdate&&this.sections.forEach(e=>e.onScroll(this.scrollMetrics)),this.sections.forEach(e=>e.onUpdate(t)),this.hasPersistentAnimation(),this.persistentAnimation?(this.sections.forEach(e=>e.persistentAnimation&&e.onUpdate(t)),this.frame=requestAnimationFrame(this.onUpdate.bind(this))):this.sections.forEach(e=>e.onUpdate(t))}hasPersistentAnimation(){this.persistentAnimation=!1,this.sections.forEach(t=>{t.isActive&&t.persistentAnimation&&(this.persistentAnimation=!0)})}tick(){this.ticking||(this.frame=requestAnimationFrame(this.onUpdate.bind(this)),this.ticking=!0)}onScroll(){const t={x:scrollX,y:scrollY};this.needScrollUpdate=this.scrollMetrics.x!==t.x||this.scrollMetrics.y!==t.y,this.scrollMetrics=t,this.persistentAnimation||this.tick()}debounceResize(){clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(this.onResize.bind(this),400)}onResize(){const{width:t,height:e}=this.viewportTracker.getBoundingClientRect(),s={width:t,height:e,aspectRatio:t/e};(this.viewport.width!==s.width||this.viewport.height!==s.height)&&this.sections.forEach(i=>i.onResize(s))}onMouseDown(t){this.pressed=!0,this.sections.forEach(e=>{e.onMouseDown(t)})}onMouseUp(t){this.pressed=!1,this.sections.forEach(e=>{e.onMouseUp(t)})}onMouseMove(t){this.sections.forEach(e=>{var s;(s=e.onMouseMove)==null||s.call(e,t)})}addEventListener(){window.addEventListener("scroll",this.onScroll),window.addEventListener("scroll",this.lazyLoad),window.addEventListener("resize",this.debounceResize),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchstart",this.onMouseDown),window.addEventListener("touchend",this.onMouseUp)}removeEventListeners(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("scroll",this.lazyLoad),window.removeEventListener("resize",this.debounceResize),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchstart",this.onMouseDown),window.removeEventListener("touchend",this.onMouseUp)}clear(){this.removeEventListeners(),document.body.removeChild(this.viewportTracker),it.didInit=null,ot.didInit=null,nt.didInit=null,rt.didInit=null,at.didInit=null,ht.didInit=null,ct.didInit=null}_createViewportTracker(){this.viewportTracker.id="viewport-tracker",this.viewportTracker.style.height="100vh",this.viewportTracker.style.opacity="0",this.viewportTracker.style.pointerEvents="none",this.viewportTracker.style.position="fixed",this.viewportTracker.style.top="0",this.viewportTracker.style.left="0",this.viewportTracker.style.width="100vw",this.viewportTracker.style.visibility="hidden",this.viewportTracker.style.zIndex="-1",document.body.appendChild(this.viewportTracker)}}const le=g.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({theme:c})=>c.color.real_black};
`,de=g.h1`
  color: ${({theme:c})=>c.color.real_white};
  font-size: 8vw;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
  text-align: center;
  opacity: 0;
  z-index: 1;
  margin-top: calc(50vh - 1.5em);
`,pe=g.div`
  display: block;
  mix-blend-mode: multiply;
  pointer-events: none;
  position: absolute;
  z-index: 3;
`,ue=g.canvas`
  width: 100%;
  height: 100%;
  margin-bottom: 0.5vw;
`,me=g.canvas`
  display: block;
  margin-top: 2rem;
`,ge=g.section`
  align-items: center;
  display: block;
  height: 300vh;
  opacity: 0;
  justify-content: center;
  overflow: initial;
  position: relative;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`,fe=g.div`
  height: 100vh;
  left: 0;
  position: sticky;
  top: 0;
  width: 100%;
`,xe=g.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;

  & > p {
    color: ${({theme:c})=>c.color.real_white};
    font-size: 8vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    text-shadow: 0 0 0.25em ${({theme:c})=>c.color.real_black};
    opacity: 0;
    transform: translateY(100%);
    will-change: transform;
  }
`,ve=g.canvas`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 4;
`,we=g.section`
  display: block;
  align-items: center;
  background-color: transparent;
  height: 400vh;
  margin-top: -150vh;
  opacity: 0;
  justify-content: center;
  overflow: initial;
  pointer-events: none;
  position: relative;
  z-index: 3;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`,ye=g.div`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`,be=g.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;
`,Te=g.p`
  color: ${({theme:c})=>c.color.real_white};
  display: block;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  margin-top: 0.25em;
  text-align: center;

  & > .word-wrap:nth-of-type(1) > .overlay {
    background-color: #68bde7;
  }

  & > .word-wrap:nth-of-type(2) > .overlay {
    background-color: #d66761;
  }

  & > .word-wrap:nth-of-type(3) > .overlay {
    background-color: #c4c4c4;
  }

  & > .word-wrap:nth-of-type(4) > .overlay {
    background-color: #aee8fa;
  }

  & > .word-wrap:nth-of-type(5) > .overlay {
    background-color: #6bd490;
  }
`,X=g.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;

  & > .text {
    opacity: 0;
  }

  & > .overlay {
    background-color: #68bde7;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-101%);
    width: 100%;
    will-change: transform;
    z-index: 1;
  }
`,Me=g.span`
  display: inline-block;
  height: 1em;
  position: relative;

  & > svg {
    height: 100%;
    left: 0.25em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    & .short {
      stroke-dasharray: 31;
      stroke-dashoffset: 93;
    }
    & .long {
      stroke-dasharray: 42;
      stroke-dashoffset: 126;
    }
  }
`,Se=g.canvas`
  display: block;
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 4;
`,Ee=g.section`
  align-items: center;
  background-color: ${({theme:c})=>c.color.real_black};
  display: block;
  height: 300vh;
  margin-top: -250vh;
  justify-content: center;
  opacity: 0;
  overflow: initial;
  pointer-events: none;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 0;
  }
`,Ie=g.div`
  height: 100vh;
  position: sticky;
  left: 0;
  overflow: hidden;
  top: 0;
  width: 100%;

  &::after {
    background-image: linear-gradient(transparent, #000);
    bottom: 0;
    content: '';
    display: block;
    height: 50vh;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: 4;
  }
`,Pe=g.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;

  span {
    color: ${({theme:c})=>c.color.real_white};
    display: block;
    font-size: 8vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    will-change: transform;

    &:focus {
      outline: none;
    }
  }
`,_e=g.canvas`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
`,ze=g.section`
  background-color: ${({theme:c})=>c.color.real_black};
  opacity: 0;
  overflow: initial;
  pointer-events: none;
  height: 100vh;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 3;
  }
`,ke=g.div`
  background-color: ${({theme:c})=>c.color.gray_black};
  bottom: 0;
  display: block;
  height: calc(100% + 100vh);
  left: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
  will-change: opacity;
  z-index: 1;
`,Ae=g.div`
  height: 200%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 2;

  img {
    border-radius: 2vw;
    position: absolute;
    opacity: 0;
    transition:
      transform 0.8s cubic-bezier(0.5, 1, 0.5, 1),
      opacity 0.2s cubic-bezier(0.5, 0, 1, 1);
    will-change: transform;

    &:nth-of-type(1) {
      bottom: calc(50% + 120px);
      left: -0.2%;
      transform: translate(-50%, -100%) rotate(-30deg);
      width: 28%;
    }
    &:nth-of-type(2) {
      bottom: calc(50% + 68px);
      left: 39.65%;
      transform: translate(25%, -100%) rotate(20deg);
      transition-delay: 0.2s;
      width: 21%;
    }
    &:nth-of-type(3) {
      bottom: calc(50% + 31px);
      left: 74.16%;
      transform: translate(75%, -100%) rotate(30deg);
      transition-delay: 0.15s;
      width: 21%;
    }
    &:nth-of-type(4) {
      left: 7.98%;
      top: calc(50% + 2px);
      transform: translate(-50%, 100%) rotate(15deg);
      transition-delay: 0.1s;
      width: 21%;
    }
    &:nth-of-type(5) {
      left: 35.13%;
      top: calc(50% + 142px);
      transform: translate(12.5%, 100%) rotate(0deg);
      transition-delay: 0.25s;
      width: 28%;
    }
    &:nth-of-type(6) {
      left: 71.87%;
      top: calc(50% + 117px);
      transform: translate(75%, 100%) rotate(-20deg);
      transition-delay: 50ms;
      width: 21%;
    }
  }

  &.enter img {
    opacity: 1;
    transition:
      transform 0.8s cubic-bezier(0.5, 1, 0.5, 1),
      opacity 0.8s cubic-bezier(0.5, 1, 0.5, 1);

    &:nth-of-type(1) {
      transform: translate(0) rotate(-20deg);
    }
    &:nth-of-type(2) {
      transform: translate(0) rotate(10deg);
    }
    &:nth-of-type(3) {
      transform: translate(0) rotate(30deg);
    }
    &:nth-of-type(4) {
      transform: translate(0) rotate(15deg);
    }
    &:nth-of-type(5) {
      transform: translate(0) rotate(-5deg);
    }
    &:nth-of-type(6) {
      transform: translate(0) rotate(-30deg);
    }
  }
`,Ce=g.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 3;

  span {
    color: ${({theme:c})=>c.color.real_white};
    display: block;
    font-size: 7vw;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    will-change: transform;

    &:focus {
      outline: none;
    }
  }
`,Ne=g.section`
  background-color: ${({theme:c})=>c.color.gray_black};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300vh;
  pointer-events: auto;
  position: relative;
`,Re=g.div`
  left: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`,je=g.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  left: 0;
  overflow: hidden;
  top: 0;
  z-index: 5;
`,Oe=g.span`
  position: absolute;
  text-align: center;
  width: 100%;
  color: ${({theme:c})=>c.color.real_white};
  display: block;
  font-size: 7vw;
  font-weight: 600;
  left: 50%;
  letter-spacing: -1px;
  line-height: 1;
  top: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;

  &:focus {
    outline: none;
  }
`,De=g.canvas`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
`,Fe=g.div`
  background-color: ${({theme:c})=>c.color.real_white};
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  will-change: opacity;
  z-index: 4;
`,Le=g.section`
  background-color: ${({theme:c})=>c.color.real_white};
  height: 125vh;
  margin-top: -100vh;
  opacity: 0;
  pointer-events: none;
  position: relative;

  &.active {
    opacity: 1;
    pointer-events: auto;
    z-index: 3;
  }
`,Ue=g.div`
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
`,Ye=g.div`
  left: 50%;
  max-width: 75vw;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 5;
`,He=g.p`
  color: ${({theme:c})=>c.color.real_black};
  display: block;
  font-size: 8vw;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
  width: 100%;
  will-change: opacity;
  will-change: transform;

  &:focus {
    outline: none;
  }
  & span {
    will-change: transform;
  }
`,$e=g.div`
  display: inline-block;
  margin-top: 72px;
  position: relative;
  a {
    display: inline-block;
    background-color: #aee8fa;
    border-radius: 12px;
    color: #0a1e31;
    font-size: 16px;
    font-weight: 600;
    padding: 14px 28px;
    text-decoration: none;
    transition:
      background-color 0.2s cubic-bezier(0.5, 1, 0.5, 1),
      color 0.2s cubic-bezier(0.5, 1, 0.5, 1);
    &:hover {
      background-color: #336484;
      color: #eaf4fe;
    }

    &:focus {
      background-color: #336484;
      color: #eaf4fe;
      box-shadow:
        0 0 0 4px #fff,
        0 0 0 8px #000;
      outline: none;
    }
  }

  &:before {
    border: 2px dashed #242528;
    border-radius: 12px;
    content: '';
    display: block;
    height: calc(100% - 4px);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.9875);
    width: calc(100% - 4px);
    z-index: -1;
  }
`,Be=g.section`
  background-color: #f9f9f9;
  min-height: 100vh;
  overflow: hidden;
  padding: 128px 20px;

  &:focus {
    outline: none;
  }
`,Ve=g.div`
  text-align: center;

  h2 {
    color: ${({theme:c})=>c.color.gray_black};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin-bottom: 40px;
  }
`,Ge=g.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 764px;
  width: 100%;
`,Xe=dt`
  background-color: red;
  background-color: #a2f6cf;
  color: #0f270c;

  hr {
    background-color: #6bd490;
  }

  a {
    background-color: #0f270c;
    color: #ecfeef;

    &:hover {
      background-color: #417944;
      color: #ecfeef;
    }
    &:focus {
      background-color: #417944;
      color: #ecfeef;
      box-shadow:
        0 0 0 4px #a2f6cf,
        0 0 0 8px #000;
      outline: none;
    }
  }
`,We=dt`
  background-color: red;
  background-color: #aee8fa;
  color: #0a1e31;

  hr {
    background-color: #68bde7;
  }

  a {
    background-color: #0a1e31;
    color: #eaf4fe;

    &:hover {
      background-color: #336484;
      color: #eaf4fe;
    }
    &:focus {
      background-color: #336484;
      color: #eaf4fe;
      box-shadow:
        0 0 0 4px #aee8fa,
        0 0 0 8px #000;
      outline: none;
    }
  }
`,qe=dt`
  background-color: red;
  background-color: #1b1b1b;
  color: #fff;

  hr {
    background-color: #484848;
  }
  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    span {
      border: 1px solid #f5eee6;
      border-radius: 24px;
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }
`,st=g.article`
  width: calc(50% - 72px);
  ${({$full:c})=>c&&{width:"100%"}}
  align-items: flex-start;
  background-color: #fff;
  border-radius: 32px;
  color: #242424;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  padding: 32px 32px 24px;
  will-change: transform;

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  hr {
    background-color: #c4c4c4;
    border: none;
    height: 1px;
    margin-bottom: 16px;
    margin-top: 0;
    width: 100%;
  }

  a {
    background-color: #c4c4c4;
    border-radius: 12px;
    color: #242424;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    padding: 14px 28px;
    text-decoration: none;
    transition:
      background-color 0.2s cubic-bezier(0.5, 1, 0.5, 1),
      color 0.2s cubic-bezier(0.5, 1, 0.5, 1);

    &:hover {
      background-color: #242424;
      color: #f9f9f9;
    }
    &:focus {
      background-color: #242424;
      color: #f9f9f9;
      box-shadow:
        0 0 0 4px #000,
        0 0 0 8px #fff;
      outline: none;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: auto;
    width: 100%;

    & + a {
      margin-top: 24px;
    }
  }

  & > :last-child {
    margin-bottom: 8px;
  }

  ${({$green:c})=>c&&{...Xe}}
  ${({$blue:c})=>c&&{...We}}
  ${({$black:c})=>c&&{...qe}}

  @media ${It} {
    width: 100%;
  }
`,us=()=>{const c=bt.useRef();return bt.useEffect(()=>(c.current=new ce,()=>{var t;(t=c.current)==null||t.clear()}),[]),a.jsxs(a.Fragment,{children:[a.jsx(Pt,{title:"석이 | About"}),a.jsxs(le,{className:"hero",children:[a.jsxs(de,{children:["당신의 가장 ",a.jsx("span",{id:"hero-heading-key-line",children:"창의적인"}),a.jsx("br",{}),"개발자를 만나보세요."]}),a.jsx(pe,{children:a.jsx(ue,{id:"hero-text-background"})}),a.jsx(me,{id:"hero-indicator"})]}),a.jsx(ge,{className:"pixel-perfect",children:a.jsxs(fe,{children:[a.jsx(xe,{children:a.jsxs("p",{children:["저는 디자인적 완벽을",a.jsx("br",{}),"추구합니다."]})}),a.jsx(ve,{id:"pixel-grid"})]})}),a.jsx(we,{className:"animation",children:a.jsxs(ye,{children:[a.jsx(be,{children:a.jsxs(Te,{className:"wrapper",children:[a.jsxs(X,{className:"word-wrap",children:[a.jsx("span",{className:"text",children:"새로운 "}),a.jsx("span",{className:"overlay"})]}),a.jsxs(X,{className:"word-wrap",children:[a.jsx("span",{className:"text",children:"도전도 "}),a.jsx("span",{className:"overlay"})]}),a.jsx("br",{}),a.jsxs(X,{className:"word-wrap",children:[a.jsx("span",{className:"text",children:"결코 "}),a.jsx("span",{className:"overlay"})]}),a.jsxs(X,{className:"word-wrap",children:[a.jsx("span",{className:"text",children:"마다하지 "}),a.jsx("span",{className:"overlay"})]}),a.jsxs(X,{className:"word-wrap",children:[a.jsx("span",{className:"text",children:"않죠."}),a.jsx("span",{className:"overlay"})]}),a.jsx(Me,{className:"flourish-wrap",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 100",children:a.jsxs("g",{stroke:"#68BDE7",strokeWidth:"8",strokeLinecap:"round",fillRule:"nonzero",children:[a.jsx("path",{className:"short",d:"M4 24L30 8"}),a.jsx("path",{className:"long",d:"M4 50H46"}),a.jsx("path",{className:"short",d:"M4 76L30 92"})]})})})]})}),a.jsx(Se,{id:"motion-path"})]})}),a.jsx(Ee,{className:"interactive",children:a.jsxs(Ie,{children:[a.jsx(Pe,{children:a.jsxs("span",{children:["모두가 즐거워하는",a.jsx("br",{}),"작품을 좋아해요."]})}),a.jsx(_e,{id:"interactive-game"})]})}),a.jsxs(ze,{className:"photography",children:[a.jsx(ke,{className:"photography--background"}),a.jsxs(Ae,{className:"photography--collage",children:[a.jsx("img",{src:"img/suo_photo_main.jpeg",alt:"고양이1"}),a.jsx("img",{src:"img/ha_photo_main.jpg",alt:"고양이2"}),a.jsx("img",{src:"img/mak_photo_main.jpeg",alt:"고양이3"}),a.jsx("img",{src:"img/tung_photo_main.jpg",alt:"고양이4"}),a.jsx("img",{src:"img/zizon_photo_main.jpeg",alt:"고양이5"}),a.jsx("img",{src:"img/me.jpeg",alt:"서우석 사진"})]}),a.jsx(Ce,{children:a.jsxs("span",{children:["고양이를 사랑하고",a.jsx("br",{}),"행복한 모험을 즐깁니다."]})})]}),a.jsx(Ne,{className:"travel",children:a.jsxs(Re,{children:[a.jsx(je,{children:a.jsx(Oe,{id:"travel-intro",children:"항상 두근거리고 새로운"})}),a.jsx(De,{id:"adventures-mask"}),a.jsx(Fe,{className:"travel--overlay"})]})}),a.jsx(Le,{className:"contact",children:a.jsx(Ue,{children:a.jsxs(Ye,{className:"contact--copy",children:[a.jsxs(He,{children:["당신과 함께 이야기",a.jsx("br",{}),"해보고 싶어요."]}),a.jsx($e,{className:"contact--cta",children:a.jsx("a",{href:"mailto:seows2@naver.com",children:"Say Hello"})})]})})}),a.jsxs(Be,{className:"work",children:[a.jsx(Ve,{children:a.jsx("h2",{children:"최근 작업과 경험들"})}),a.jsxs(Ge,{children:[a.jsxs(st,{$full:!0,className:"work--item",children:[a.jsx("h3",{children:"Tmaxsoft"}),a.jsx("span",{children:"2021 – Present"}),a.jsx("hr",{}),a.jsx("h4",{children:"Front End Developer"}),a.jsx("p",{children:"디자인 팀과 긴밀하게 협업하며 티맥스 디자인 시스템을 구축하고 있으며 제품 사용자들이 Jeus 및 SuperFrameMaster 제품을 쉽게 사용할 수 있도록 도와주는 어드민 페이지 개발을 맡고 있습니다."})]}),a.jsxs(st,{$green:!0,className:"work--item",children:[a.jsx("div",{children:a.jsx("h3",{children:"My Cat"})}),a.jsx("span",{children:"2021"}),a.jsx("hr",{}),a.jsx("p",{children:"프론트엔드를 막 공부했을 시절 만들었던 프로젝트입니다. CSS 애니메이션과 자바스크립트를 배우기 위해 진행했었으며 이쁜 코드는 아니지만 FE의 매력을 알게 해준 소중한 작품입니다."}),a.jsx("a",{href:"https://seows2.github.io/Cat-Fansite/html/index.html",target:"_blank",rel:"noopener noreferrer",children:"View Result"}),a.jsx("a",{href:"https://github.com/seows2/Cat-Fansite",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]}),a.jsxs(st,{$blue:!0,className:"work--item",children:[a.jsx("div",{children:a.jsx("h3",{children:"결혼 축하해"})}),a.jsx("span",{children:"2022"}),a.jsx("hr",{}),a.jsx("p",{children:"결혼 당사자에게 추억을 간직할 수 있도록 만들어 본 결혼 축하 사이트입니다. 직접 디자인도 하면서 짬짬이 만들어 보았으나 바쁜 일정에 쫓겨 전달되지 못했고 붕 떠버린 프로젝트입니다. 언젠가 다시 사용할 일이 있지 않겠냐는 생각과 함께 남겨놓고 있습니다."}),a.jsx("a",{href:"https://seows2.github.io/wedding-demo/",target:"_blank",rel:"noopener noreferrer",children:"View Result"}),a.jsx("a",{href:"https://github.com/seows2/wedding-demo",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]}),a.jsxs(st,{$full:!0,$black:!0,className:"work--item",children:[a.jsx("h3",{children:"항상 관심있어하는 분야"}),a.jsx("hr",{}),a.jsxs("div",{children:[a.jsx("span",{children:"Front End Developer"}),a.jsx("span",{children:"UX/UI DESIGN"}),a.jsx("span",{children:"MOBX"}),a.jsx("span",{children:"REACT QUERY"}),a.jsx("span",{children:"TYPE SCRIPT"}),a.jsx("span",{children:"ANIMATION"}),a.jsx("span",{children:"CYPRESS"}),a.jsx("span",{children:"BREAD"}),a.jsx("span",{children:"ICE CREAM"})]})]})]})]})]})};export{us as default};
