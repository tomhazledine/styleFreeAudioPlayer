(()=>{var Q=Object.defineProperty;var X=(e,t)=>{for(var r in t)Q(e,r,{get:t[r],enumerable:!0})};var Y=(e="default")=>{switch(e){case"itunes":return["playPause",[["title","artist"],["timer","progress","duration"]]];case"default":default:return["playPause",["mute","volume"],["title","artist"],["timer","progress","duration"]]}},$=(e={})=>{let t={context:document,theme:"default",preload:!1},{components:r,...l}=e,s=Y(e.theme),i={...t,components:s,...l};return r&&Array.isArray(r)&&(i.components=r),i};var f=e=>{let t=Math.floor(e/3600),r=Math.floor(e%3600/60).toFixed(0).toString(),l=Math.floor(e%3600%60).toFixed(0).toString();l=l>=10?l:`0${l}`;let s=`${r}:${l}`;return t>0&&(r=r>=10?r:`0${r}`,s=`${t}:${r}:${l}`),s},P=e=>e.substr((~-e.lastIndexOf(".")>>>0)+2),T=e=>e.replace(/^.*[\\\/]/,"").split(".")[0];var y={};X(y,{artist:()=>te,duration:()=>se,mute:()=>oe,playPause:()=>Z,progress:()=>le,timer:()=>re,title:()=>ee,volume:()=>ie});var v=({namespace:e="picobel",min:t=0,max:r=100,value:l=0,step:s=!1,index:i=0,label:a="slider"})=>{let n=o("div",e),u=o("div",`${e}-slider__wrapper`),c=o("div",`${e}-slider__replacement`),G=o("div",`${e}-slider__background`);c.appendChild(G);let J=o("div",`${e}-slider__indicator`);c.appendChild(J);let K=o("div",`${e}-slider__playhead`);c.appendChild(K),u.appendChild(c);let L=`${e}-slider__range--${i}`,p=o("input",`${e}-slider__range`);p.setAttribute("id",L),p.setAttribute("type","range"),p.setAttribute("min",t),p.setAttribute("max",r),p.setAttribute("value",l),s&&p.setAttribute("step",s),u.appendChild(p);let d=o("label",`${e}-label`);return typeof a=="string"?d.innerHTML=a:d.appendChild(a),d.setAttribute("for",L),n.appendChild(d),n.appendChild(u),n};var Z=e=>{let t=o("button",`${e}__play-pause`);t.setAttribute("type","button");let r=o("span",`${e}__play-pause__text`);return r.innerHTML="Play",t.appendChild(r),t},ee=(e,t)=>{let r=o("span",`${e}__title`);return r.innerHTML="File "+(t+1),r},te=e=>o("span",`${e}__artist`),re=e=>{let t=o("span",`${e}__timer`);return t.innerHTML="0:00",t},se=e=>{let t=o("span",`${e}__duration`);return t.innerHTML="-:--",t},le=(e,t)=>{let r=o("span",`${e}__progress-label-inner`);return r.innerHTML="Progress",v({namespace:`${e}__progress`,min:0,max:100,value:0,index:t,label:r})},oe=e=>{let t=o("button",`${e}__mute`);return t.setAttribute("type","button"),t.innerHTML="Mute",t},ie=(e,t)=>{let r=o("span",`${e}__volume-label-inner`),l=o("span",`${e}__volume-label-key`);l.innerHTML="Volume ",r.appendChild(l);let s=o("span",`${e}__volume-label-value`);return s.innerHTML="10",r.appendChild(s),v({namespace:`${e}__volume`,min:0,max:1,value:1,step:.1,index:t,label:r})};var o=(e="div",t="")=>{let r=document.createElement(e);return r.className=t,r},x=({key:e,container:t,components:r,namespace:l})=>(r.forEach(s=>{if(typeof s=="string"&&y[s]){let i=y[s](l,e);t.appendChild(i);return}if(Array.isArray(s)&&s.length){let i=s.flat().join("-"),a=o("div",`${l}__wrapper--${i}`),n=x({key:e,container:a,components:s,namespace:l});t.appendChild(n)}}),t);var A=e=>{let t=f(e.duration);return e.elements.durationDisplay&&(e.elements.durationDisplay.innerHTML=t),e},S=(e,t)=>(e.artist&&t.artistDisplay&&(t.artistDisplay.innerHTML=e.artist),t.titleDisplay&&(t.titleDisplay.innerHTML=e.title),t),C=(e=[],t,r)=>e.map(s=>{let i=o("div"),a=M(s.key,s.className,r);i.classList.add(...a),i.setAttribute("data-picobel-index",s.key);let n=o("div",`${r}__loader`);return i.appendChild(n),x({key:s.key,container:i,components:t,namespace:r})}),E=(e,t,r)=>e.map(l=>{let s=t.querySelector(`[data-picobel-index='${l.key}']`);return l.elements={wrapper:s,playPauseButton:s.querySelector(`.${r}__play-pause`),playPauseButtonText:s.querySelector(`.${r}__play-pause__text`),muteButton:s.querySelector(`.${r}__mute`),playTimer:s.querySelector(`.${r}__timer`),durationDisplay:s.querySelector(`.${r}__duration`),titleDisplay:s.querySelector(`.${r}__title`),artistDisplay:s.querySelector(`.${r}__artist`),progressWrapper:s.querySelector(`.${r}__progress-slider__replacement`),progressRange:s.querySelector(`.${r}__progress-slider__range`),progressPlayhead:s.querySelector(`.${r}__progress-slider__playhead`),progressBackground:s.querySelector(`.${r}__progress-slider__background`),progressIndicator:s.querySelector(`.${r}__progress-slider__indicator`),volumeWrapper:s.querySelector(`.${r}__volume-slider__replacement`),volumeControl:s.querySelector(`.${r}__volume-slider__range`),volumeDisplay:s.querySelector(`.${r}__volume-label-value`),volumeIndicator:s.querySelector(`.${r}__volume-slider__indicator`),volumePlayhead:s.querySelector(`.${r}__volume-slider__playhead`)},l});var ae=e=>e.forEach(t=>{w(t)}),k=(e,t)=>{e.paused||e.currentTime===0?(ae(t),ne(e)):w(e)},ne=e=>{e.play();let t=e.elements.playPauseButton,r=e.elements.playPauseButtonText;t.classList.remove("paused"),r.innerHTML="Pause",t.classList.add("playing")},w=e=>{e.pause();let t=e.elements.playPauseButton,r=e.elements.playPauseButtonText;t.classList.remove("playing"),r.innerHTML="Play",t.classList.add("paused")},ue=e=>{e.pause();let t=e.elements.playPauseButton,r=e.elements.playPauseButtonText;t.classList.remove("playing"),r.innerHTML="Play"},N=e=>B(e.srcElement),B=e=>{let t=e.currentTime,r=e.duration;if(e.elements.playTimer){let s=f(t);e.elements.playTimer.innerHTML=s}t>=r&&ue(e);let l=(t/r*100).toFixed(2);e.elements.progressRange&&(e.elements.progressRange.value=l,e.elements.progressIndicator.style.width=l+"%",e.elements.progressPlayhead.style.left=l+"%")},F=e=>{A(e),m(e)},m=e=>{e.elements.wrapper.classList.remove("loading");let t=V(e);S(t,e.elements)},g=e=>{e.elements.wrapper.classList.add("error"),e.elements.wrapper.classList.remove("loading"),e.elements.wrapper.innerHTML='<div class="error" style="display:flex;height: 100%;align-items:  center;justify-content: center;"><span class="error__icon"></span><span class="error__message">Error loading audio file</span></div>'},H=(e,t)=>{let l=t.duration*(e.srcElement.value/100);l=l.toFixed(2),t.currentTime=l,B(t)},b=(e,t)=>e.elements.progressWrapper.classList.toggle("focus",t),q=(e,t)=>{let r=e.srcElement.value;t.tmpVolume=t.volume,t.mute=!1,I(t),_(t,r)},h=(e,t)=>e.elements.volumeWrapper.classList.toggle("focus",t),_=(e,t)=>{let r=t*10,l=(t*100).toFixed(2);e.volume=t,e.elements.volumeDisplay&&(e.elements.volumeDisplay.innerHTML=r),e.elements.volumeControl&&(e.elements.volumeControl.value=t),e.elements.volumeIndicator&&(e.elements.volumeIndicator.style.width=l+"%"),e.elements.volumePlayhead&&(e.elements.volumePlayhead.style.left=l+"%")},D=e=>{e.mute=!e.mute,I(e)},I=e=>{let t=e.elements.muteButton;e.mute?(e.tmpVolume=e.volume,_(e,0),t.classList.add("muted"),t.classList.remove("unmuted"),t.innerHTML="Unmute"):(typeof e.tmpVolume<"u"&&e.tmpVolume>0?_(e,e.tmpVolume):_(e,1),t.classList.remove("muted"),t.classList.add("unmuted"),t.innerHTML="Mute")},R=(e,t)=>{let r=e.duration,l=(t/r*100).toFixed(2);e.elements.progressBackground&&(e.elements.progressBackground.style.width=l+"%")};var U=e=>[...e.getElementsByTagName("audio")],M=(e,t,r)=>[...`picobel loading picobel--index-${e} ${t}`.trim().split(" "),r],W=e=>e.map((t,r)=>(t.key=r,t.mute=!1,t.tmpVolume=1,t)),V=e=>{let t={};return t.url=e.currentSrc,t.fileType=P(t.url),t.fileName=T(t.url),t.title=e.title&&e.title!==""?e.title:`${t.fileName}.${t.fileType}`,e.dataset?t.artist=e.dataset.artist?e.dataset.artist:!1:t.artist=!1,t};var O=async(e,t)=>{let l=!1,s=0,i=15,a=()=>{if(s++,e.buffered.length>0){let n=e.buffered.end(e.buffered.length-1),u=e.duration;R(e,n),n>=u&&(l=!0,clearInterval(t[e.currentSrc]))}s>=i&&(e.buffered.length<=0&&e.readyState<=0&&g(e),clearInterval(t[e.currentSrc]))};t[e.currentSrc]=setInterval(a,1e3),window.addEventListener("unload",()=>clearInterval(t[e.currentSrc]))};var j=e=>e.map(t=>(t.addEventListener("timeupdate",N,!1),t.addEventListener("canplaythrough",()=>F(t),!1),t.addEventListener("loadedmetadata",()=>m(t),!1),t.addEventListener("error",()=>g(t),!1),t.elements.playPauseButton&&t.elements.playPauseButton.addEventListener("click",()=>k(t,e),!1),t.elements.progressRange&&t.elements.progressRange.addEventListener("input",r=>H(r,t),!1),t.elements.progressRange&&t.elements.progressRange.addEventListener("focus",()=>b(t,!0),!1),t.elements.progressRange&&t.elements.progressRange.addEventListener("blur",()=>b(t,!1),!1),t.elements.volumeControl&&t.elements.volumeControl.addEventListener("input",r=>q(r,t),!1),t.elements.volumeControl&&t.elements.volumeControl.addEventListener("focus",()=>h(t,!0),!1),t.elements.volumeControl&&t.elements.volumeControl.addEventListener("blur",()=>h(t,!1),!1),t.elements.muteButton&&t.elements.muteButton.addEventListener("click",r=>D(t,r),!1),t));var z=(e={})=>{let t=$(e),r={audioNodes:[],theme:t.theme,components:t.components},l=(a,n)=>{a.map((u,c)=>{u.parentNode.replaceChild(n[c],u)})};r.audioNodes=U(t.context),r.audioNodes=W(r.audioNodes);let s=C(r.audioNodes,r.components,r.theme);l(r.audioNodes,s),r.audioNodes=E(r.audioNodes,t.context,r.theme),r.audioNodes=j(r.audioNodes);let i={};return r.audioNodes.forEach(a=>{a.readyState>=1&&m(a),O(a,i)}),{state:r}};window.picobel=z;})();
