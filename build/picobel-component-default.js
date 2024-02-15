var X=Object.defineProperty;var Z=(e,t)=>{for(var r in t)X(e,r,{get:t[r],enumerable:!0})};var ee=(e="default")=>{switch(e){case"itunes":return["playPause",[["title","artist"],["timer","progress","duration"]]];case"default":default:return["playPause",["mute","volume"],["title","artist"],["timer","progress","duration"]]}},L=(e={})=>{let t={context:document,theme:"default",preload:!1},{components:r,...a}=e,o=ee(e.theme),i={...t,components:o,...a};return r&&Array.isArray(r)&&(i.components=r),i};var g=e=>{let t=Math.floor(e/3600),r=Math.floor(e%3600/60).toFixed(0).toString(),a=Math.floor(e%3600%60).toFixed(0).toString();a=a>=10?a:`0${a}`;let o=`${r}:${a}`;return t>0&&(r=r>=10?r:`0${r}`,o=`${t}:${r}:${a}`),o},$=e=>e.substr((~-e.lastIndexOf(".")>>>0)+2),T=e=>e.replace(/^.*[\\\/]/,"").split(".")[0];var f={};Z(f,{artist:()=>oe,duration:()=>se,mute:()=>le,playPause:()=>te,progress:()=>ie,timer:()=>ae,title:()=>re,volume:()=>ne});var b=({namespace:e="picobel",min:t=0,max:r=100,value:a=0,step:o=!1,index:i=0,label:l="slider"})=>{let n=s("div",e),u=s("div",`${e}-slider__wrapper`),d=s("div",`${e}-slider__replacement`),G=s("div",`${e}-slider__background`);d.appendChild(G);let K=s("div",`${e}-slider__indicator`);d.appendChild(K);let Q=s("div",`${e}-slider__playhead`);d.appendChild(Q),u.appendChild(d);let w=`${e}-slider__range--${i}`,p=s("input",`${e}-slider__range`);p.setAttribute("id",w),p.setAttribute("type","range"),p.setAttribute("min",t),p.setAttribute("max",r),p.setAttribute("value",a),o&&p.setAttribute("step",o),u.appendChild(p);let c=s("label",`${e}-label`);return typeof l=="string"?c.innerHTML=l:c.appendChild(l),c.setAttribute("for",w),n.appendChild(c),n.appendChild(u),n};var te=e=>{let t=s("button",`${e}__play-pause`);t.setAttribute("type","button");let r=s("span",`${e}__play-pause__text`);return r.innerHTML="Play",t.appendChild(r),t},re=(e,t)=>{let r=s("span",`${e}__title`);return r.innerHTML="File "+(t+1),r},oe=e=>s("span",`${e}__artist`),ae=e=>{let t=s("span",`${e}__timer`);return t.innerHTML="0:00",t},se=e=>{let t=s("span",`${e}__duration`);return t.innerHTML="-:--",t},ie=(e,t)=>{let r=s("span",`${e}__progress-label-inner`);return r.innerHTML="Progress",b({namespace:`${e}__progress`,min:0,max:100,value:0,index:t,label:r})},le=e=>{let t=s("button",`${e}__mute`);return t.setAttribute("type","button"),t.innerHTML="Mute",t},ne=(e,t)=>{let r=s("span",`${e}__volume-label-inner`),a=s("span",`${e}__volume-label-key`);a.innerHTML="Volume ",r.appendChild(a);let o=s("span",`${e}__volume-label-value`);return o.innerHTML="10",r.appendChild(o),b({namespace:`${e}__volume`,min:0,max:1,value:1,step:.1,index:t,label:r})};var s=(e="div",t="")=>{let r=document.createElement(e);return r.className=t,r},y=({key:e,container:t,components:r,namespace:a})=>(r.forEach(o=>{if(typeof o=="string"&&f[o]){let i=f[o](a,e);t.appendChild(i);return}if(Array.isArray(o)&&o.length){let i=o.flat().join("-"),l=s("div",`${a}__wrapper--${i}`),n=y({key:e,container:l,components:o,namespace:a});t.appendChild(n)}}),t);var P=e=>{let t=g(e.duration);return e.elements.durationDisplay&&(e.elements.durationDisplay.innerHTML=t),e},A=(e,t)=>(e.artist&&t.artistDisplay&&(t.artistDisplay.innerHTML=e.artist),t.titleDisplay&&(t.titleDisplay.innerHTML=e.title),t),E=(e=[],t,r)=>e.map(o=>{let i=s("div"),l=C(o.key,o.className,r);i.classList.add(...l),i.setAttribute("data-picobel-index",o.key);let n=s("div",`${r}__loader`);return i.appendChild(n),y({key:o.key,container:i,components:t,namespace:r})}),S=(e,t,r)=>e.map(a=>{let o=t.querySelector(`[data-picobel-index='${a.key}']`);return a.elements={wrapper:o,playPauseButton:o.querySelector(`.${r}__play-pause`),playPauseButtonText:o.querySelector(`.${r}__play-pause__text`),muteButton:o.querySelector(`.${r}__mute`),playTimer:o.querySelector(`.${r}__timer`),durationDisplay:o.querySelector(`.${r}__duration`),titleDisplay:o.querySelector(`.${r}__title`),artistDisplay:o.querySelector(`.${r}__artist`),progressWrapper:o.querySelector(`.${r}__progress-slider__replacement`),progressRange:o.querySelector(`.${r}__progress-slider__range`),progressPlayhead:o.querySelector(`.${r}__progress-slider__playhead`),progressBackground:o.querySelector(`.${r}__progress-slider__background`),progressIndicator:o.querySelector(`.${r}__progress-slider__indicator`),volumeWrapper:o.querySelector(`.${r}__volume-slider__replacement`),volumeControl:o.querySelector(`.${r}__volume-slider__range`),volumeDisplay:o.querySelector(`.${r}__volume-label-value`),volumeIndicator:o.querySelector(`.${r}__volume-slider__indicator`),volumePlayhead:o.querySelector(`.${r}__volume-slider__playhead`)},a});var ue=e=>e.forEach(t=>{N(t)}),M=(e,t)=>{e.paused||e.currentTime===0?(ue(t),pe(e)):N(e)},pe=e=>{e.play();let t=e.elements.playPauseButton,r=e.elements.playPauseButtonText;t.classList.remove("paused"),r.innerHTML="Pause",t.classList.add("playing")},N=e=>{e.pause();let t=e.elements.playPauseButton,r=e.elements.playPauseButtonText;t.classList.remove("playing"),r.innerHTML="Play",t.classList.add("paused")},de=e=>{e.pause();let t=e.elements.playPauseButton,r=e.elements.playPauseButtonText;t.classList.remove("playing"),r.innerHTML="Play"},B=e=>H(e.srcElement),H=e=>{let t=e.currentTime,r=e.duration;if(e.elements.playTimer){let o=g(t);e.elements.playTimer.innerHTML=o}t>=r&&de(e);let a=(t/r*100).toFixed(2);e.elements.progressRange&&(e.elements.progressRange.value=a,e.elements.progressIndicator.style.width=a+"%",e.elements.progressPlayhead.style.left=a+"%")},F=e=>{P(e),m(e)},m=e=>{e.elements.wrapper.classList.remove("loading");let t=V(e);A(t,e.elements)},h=e=>{e.elements.wrapper.classList.add("error"),e.elements.wrapper.classList.remove("loading"),e.elements.wrapper.innerHTML='<div class="error" style="display:flex;height: 100%;align-items:  center;justify-content: center;"><span class="error__icon"></span><span class="error__message">Error loading audio file</span></div>'},q=(e,t)=>{let a=t.duration*(e.srcElement.value/100);a=a.toFixed(2),t.currentTime=a,H(t)},v=(e,t)=>e.elements.progressWrapper.classList.toggle("focus",t),z=(e,t)=>{let r=e.srcElement.value;t.tmpVolume=t.volume,t.mute=!1,I(t),_(t,r)},x=(e,t)=>e.elements.volumeWrapper.classList.toggle("focus",t),_=(e,t)=>{let r=t*10,a=(t*100).toFixed(2);e.volume=t,e.elements.volumeDisplay&&(e.elements.volumeDisplay.innerHTML=r),e.elements.volumeControl&&(e.elements.volumeControl.value=t),e.elements.volumeIndicator&&(e.elements.volumeIndicator.style.width=a+"%"),e.elements.volumePlayhead&&(e.elements.volumePlayhead.style.left=a+"%")},D=e=>{e.mute=!e.mute,I(e)},I=e=>{let t=e.elements.muteButton;e.mute?(e.tmpVolume=e.volume,_(e,0),t.classList.add("muted"),t.classList.remove("unmuted"),t.innerHTML="Unmute"):(typeof e.tmpVolume<"u"&&e.tmpVolume>0?_(e,e.tmpVolume):_(e,1),t.classList.remove("muted"),t.classList.add("unmuted"),t.innerHTML="Mute")},R=(e,t)=>{let r=e.duration,a=(t/r*100).toFixed(2);e.elements.progressBackground&&(e.elements.progressBackground.style.width=a+"%")};var U=e=>[...e.getElementsByTagName("audio")],C=(e,t,r)=>[...`picobel loading picobel--index-${e} ${t}`.trim().split(" "),r],O=e=>e.map((t,r)=>(t.key=r,t.mute=!1,t.tmpVolume=1,t)),V=e=>{let t={};return t.url=e.currentSrc,t.fileType=$(t.url),t.fileName=T(t.url),t.title=e.title&&e.title!==""?e.title:`${t.fileName}.${t.fileType}`,e.dataset?t.artist=e.dataset.artist?e.dataset.artist:!1:t.artist=!1,t};var W=async(e,t)=>{let a=!1,o=0,i=15,l=()=>{if(o++,e.buffered.length>0){let n=e.buffered.end(e.buffered.length-1),u=e.duration;R(e,n),n>=u&&(a=!0,clearInterval(t[e.currentSrc]))}o>=i&&(e.buffered.length<=0&&e.readyState<=0&&h(e),clearInterval(t[e.currentSrc]))};t[e.currentSrc]=setInterval(l,1e3),window.addEventListener("unload",()=>clearInterval(t[e.currentSrc]))};var j=e=>e.map(t=>(t.addEventListener("timeupdate",B,!1),t.addEventListener("canplaythrough",()=>F(t),!1),t.addEventListener("loadedmetadata",()=>m(t),!1),t.addEventListener("error",()=>h(t),!1),t.elements.playPauseButton&&t.elements.playPauseButton.addEventListener("click",()=>M(t,e),!1),t.elements.progressRange&&t.elements.progressRange.addEventListener("input",r=>q(r,t),!1),t.elements.progressRange&&t.elements.progressRange.addEventListener("focus",()=>v(t,!0),!1),t.elements.progressRange&&t.elements.progressRange.addEventListener("blur",()=>v(t,!1),!1),t.elements.volumeControl&&t.elements.volumeControl.addEventListener("input",r=>z(r,t),!1),t.elements.volumeControl&&t.elements.volumeControl.addEventListener("focus",()=>x(t,!0),!1),t.elements.volumeControl&&t.elements.volumeControl.addEventListener("blur",()=>x(t,!1),!1),t.elements.muteButton&&t.elements.muteButton.addEventListener("click",r=>D(t,r),!1),t));var Y=(e={})=>{let t=L(e),r={audioNodes:[],theme:t.theme,components:t.components},a=(l,n)=>{l.map((u,d)=>{u.parentNode.replaceChild(n[d],u)})};r.audioNodes=U(t.context),r.audioNodes=O(r.audioNodes);let o=E(r.audioNodes,r.components,r.theme);a(r.audioNodes,o),r.audioNodes=S(r.audioNodes,t.context,r.theme),r.audioNodes=j(r.audioNodes);let i={};return r.audioNodes.forEach(l=>{l.readyState>=1&&m(l),W(l,i)}),{state:r}};var J=`.default.picobel{--black: #555;--black--light: hsl(0, 0%, 43.3%);--black--opacity: rgba(0, 0, 0, .3);--white: #ffffff;--grey: #dad8d2;--greyDark: hsl(30, 10%, 65%);--primary: #ddd;--primary--opacity: rgba(221, 221, 221, .4);--highlight: #00b7c6;--background_grey_dark: #e6e6e6;--background_grey_light: #f1f1f1;--focus: #015ecc;--progress-bar-height: 2em}@keyframes default_background_slide{0%{background-position:0 0}to{background-position:2em 0}}.default.picobel{font-size:10px;position:relative;box-sizing:border-box;z-index:1;margin:1em 0;height:6em;border-radius:.3em;box-shadow:var(--black--opacity) 0 .1em .2em 0;background-image:linear-gradient(var(--background_grey_light),var(--background_grey_dark))}.default.picobel *,.default.picobel *:before,.default.picobel *:after{box-sizing:inherit}.default.picobel *:focus{outline:2px solid var(--focus);outline-offset:1px;border-radius:2px}.default__loader{position:absolute;z-index:2;bottom:0;left:5.6em;right:0;height:var(--progress-bar-height);opacity:0;transition:opacity .2s;pointer-events:none;background:linear-gradient(to right,var(--highlight) 50%,var(--black) 50%);background-size:var(--progress-bar-height) var(--progress-bar-height);background-repeat:repeat;background-position:0 0;animation:default_background_slide linear infinite .4s}.default.loading .default__loader{opacity:1}.default__play-pause{font-size:1em;border:none;appearance:none;width:4em;height:6em;color:var(--white);background:var(--black);background-image:linear-gradient(var(--black--light),var(--black));box-shadow:inset var(--black--light) -1px 0 0 0;position:absolute;top:0;left:0;cursor:pointer}.default__play-pause:focus{z-index:3}.default__play-pause__text{display:none}.default__play-pause:before{content:"";display:block;position:absolute;top:50%;left:50%;margin-top:-.8em;margin-left:-.4em;border-top:.8em solid transparent;border-left:1em solid var(--white);border-bottom:.8em solid transparent}.default__play-pause:after{content:"";display:block;position:absolute;top:50%;right:50%;height:1.4em;margin-top:-.7em;margin-right:-.7em;border-top:0;border-left:.5em solid var(--white);border-bottom:0;opacity:0}.default__play-pause.playing:before{height:1.4em;margin-top:-.7em;margin-left:-.7em;border-top:0;border-left:.5em solid var(--white);border-bottom:0}.default__play-pause.playing:after{opacity:1}.default__wrapper--title-artist{padding:1em 2em 1em 7em;height:4.4em;background:var(--primary);color:var(--black);text-shadow:var(--white) 0 .1em 0;background-image:linear-gradient(var(--background_grey_light),var(--background_grey_dark))}.default__title{display:inline-block;line-height:1;font-weight:700;font-family:monospace}.default__artist{font-family:monospace;display:inline-block;line-height:1;margin-left:.5em}.default__artist:not(:empty):before{content:" \\2013  "}.default__wrapper--timer-progress-duration{position:absolute;bottom:0;left:5.6em;right:0;height:var(--progress-bar-height)}.default__timer,.default__duration{position:absolute;top:0;z-index:3;width:6em;text-align:left;background:transparent;color:var(--white);line-height:1em;height:var(--progress-bar-height);pointer-events:none;font-size:1em;padding:.5em .5em .5em 1em;font-family:monospace}.default__timer{left:0}.default__duration{right:0;text-align:right}.default.loading .default__timer,.default.loading .default__duration{display:none}.default__progress-slider__wrapper{height:var(--progress-bar-height);position:absolute;top:0;left:0;width:100%}.default__progress-slider__replacement{height:100%;position:absolute;top:0;left:0;width:100%;background:var(--black);border-bottom-right-radius:.2em;overflow:hidden}.default__progress-slider__replacement.focus{outline:2px solid var(--focus);outline-offset:1px;border-radius:2px}.default__progress-slider__indicator{height:var(--progress-bar-height);position:absolute;top:0;left:0;background:var(--primary--opacity);width:0%}.default__progress-slider__playhead{width:.5em;height:var(--progress-bar-height);position:absolute;top:0;left:0%;margin-left:-.2em;background:var(--highlight)}.default.loading .default__progress-slider__indicator,.default.loading .default__progress-slider__playhead{display:none}.default__progress-slider__range{width:100%;height:var(--progress-bar-height);font-size:inherit;padding:0;margin:0;position:absolute;top:0;left:0;opacity:0}.default__progress-slider__range::-webkit-slider-runnable-track{width:100%;font-size:1em;height:2em;cursor:pointer}.default__progress-slider__range::-moz-range-track{width:100%;height:2em;cursor:pointer}.default__progress-slider__range::-ms-track{width:100%;height:2em;cursor:pointer}.default__wrapper--mute-volume{position:absolute;top:0;left:4em;width:1.6em;height:6em;z-index:2}.default__mute{display:block;width:1.6em;height:1.6em;font-size:1em;color:transparent;border:0;appearance:none;background:var(--black);position:absolute;top:0;right:0;cursor:pointer;overflow:hidden}.default__mute:before{display:block;width:.4em;height:.3em;position:absolute;content:"";top:50%;right:50%;margin-right:-.1em;transform:translateY(-50%);background:var(--white)}.default__mute:after{display:block;width:.4em;max-width:100%;height:.4em;position:absolute;content:"";top:50%;margin-top:-.4em;right:50%;margin-right:-.2em;border-top:.4em solid transparent;border-right:.4em solid var(--white);border-bottom:.4em solid transparent}.default__mute.muted:before{background:var(--grey)}.default__mute.muted:after{border-right-color:var(--grey)}.default__volume-label{display:none}.default__volume-slider__wrapper{display:block;height:1.6em;position:absolute;top:1.6em;left:0;z-index:3;width:4.4em;transform:rotate(90deg) translateY(-100%);transform-origin:top left}.default__volume-slider__replacement{display:block;height:1.6em;position:absolute;top:0;left:0;background:var(--greyDark);width:4.4em}.default__volume-slider__replacement:after{content:"";display:block;width:100%;border-right:4.4em solid var(--black);border-bottom:1.6em solid transparent;position:absolute;bottom:0;left:0;pointer-events:none}.default__volume-slider__replacement.focus{outline:2px solid var(--focus);outline-offset:1px;border-radius:2px}.default__volume-slider__indicator{height:1.6em;position:absolute;top:0;right:0;background:var(--highlight);width:100%;transform:rotate(180deg)}.default__volume-slider__playhead{display:none}.default__volume-slider__range{width:100%;padding:0;margin:0;height:1.6em;position:absolute;top:0;left:0;opacity:0;transform:rotate(180deg)}.default__volume-slider__range::-webkit-slider-runnable-track{width:100%;font-size:1em;height:1.5em;cursor:pointer}.default__volume-slider__range::-moz-range-track{width:100%;height:1.5em;cursor:pointer}.default__volume-slider__range::-ms-track{width:100%;height:1.5em;cursor:pointer}
`;var k=class extends HTMLElement{constructor(){super()}mountStyles(t="default"){let r=`picobel-styles-${t}`;if(!document.getElementById(r)){let a=document.createElement("style");a.id=r,a.textContent=J,document.head.appendChild(a)}}connectedCallback(){let t=this.getAttribute("data-theme")||"default",r={theme:t,context:this},a=this.getAttribute("data-components");a&&(r.components=JSON.parse(a)),Y(r),this.mountStyles(t)}};typeof window<"u"&&"customElements"in window&&window.customElements.define("picobel-player-default",k);
