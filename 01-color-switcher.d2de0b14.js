let t=null;const e=document.querySelector("body"),r=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");d.setAttribute("disabled",!0);r.addEventListener("click",(function(){t=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,r.setAttribute("disabled",!0),d.removeAttribute("disabled",!1)}),1e3)})),d.addEventListener("click",(function(){clearInterval(t),d.setAttribute("disabled",!0),r.removeAttribute("disabled",!1)}));
//# sourceMappingURL=01-color-switcher.d2de0b14.js.map