function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire6dfe;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire6dfe=r);var u=r("eWCmQ");const i={inputFirstDelay:document.querySelector('[name="delay"]'),inputDelayStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]'),btnCreatePromise:document.querySelector("form")};i.btnCreatePromise.addEventListener("submit",(function(e){e.preventDefault();let t=Number(i.inputFirstDelay.value),n=Number(i.inputDelayStep.value),o=Number(i.inputAmount.value);for(let e=1;e<=o;e+=1)l(e,t),t+=n}));function l(t,n){const o=Math.random()>.3;new Promise(((r,i)=>{setTimeout((()=>{o?e(u).Notify.success(r(`Fulfilled promise ${t} in ${n}ms`)):e(u).Notify.failure(i(`Rejected promise ${t} in ${n}ms`))}),n)})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}
//# sourceMappingURL=03-promises.531109be.js.map