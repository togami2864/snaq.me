!function(e){var t={};function o(c){if(t[c])return t[c].exports;var n=t[c]={i:c,l:!1,exports:{}};return e[c].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const c=()=>{const e=document.getElementById("header");let t=0;window.addEventListener("scroll",()=>{t=window.scrollY,t>90?e.classList.add("header-turbidity"):e.classList.remove("header-turbidity")})};c();const n=()=>{const e=document.querySelectorAll(".tag_content");let t=0;window.addEventListener("scroll",()=>{t=window.scrollY,t>1335&&e[0].classList.add("fade-in"),t>1755&&e[1].classList.add("fade-in"),t>1900&&e[2].classList.add("fade-in"),t>2220&&e[3].classList.add("fade-in"),t>2600&&e[4].classList.add("fade-in"),t>2750&&e[5].classList.add("fade-in"),t>3e3&&e[6].classList.add("fade-in")})};n();const a=()=>{const e=document.querySelector(".marquee"),t=document.querySelector("ul.marquee_slides-content");e.style.setProperty("--marqueeElements",20);for(let e=0;e<20;e++)t.appendChild(t.children[e].cloneNode(!0))};a();const r=()=>{const e=document.querySelector(".marquee_category-btn"),t=document.querySelector(".marquee_category-body");e.addEventListener("click",()=>{e.classList.toggle("marquee_category-btn--active"),t.classList.toggle("marquee_category-body--active")})};r();const i=()=>{new Glide(".review_glide",{type:"carousel",perView:3}).mount()};i();const s=()=>{const e=document.querySelector(".media_carousels");new Glide(".media_glide",{autoplay:2500,type:"carousel",perView:3}).mount(),e.addEventListener("hover",()=>{mediaGlide.disable()})};s();const d=()=>{const e=document.querySelectorAll(".faq_accordion-btn"),t=document.querySelectorAll(".faq_accordion-body");e[0].addEventListener("click",()=>{e[0].classList.toggle("faq_accordion-btn--active"),t[0].classList.toggle("faq_accordion-body--active")}),e[1].addEventListener("click",()=>{e[1].classList.toggle("faq_accordion-btn--active"),t[1].classList.toggle("faq_accordion-body--active")}),e[2].addEventListener("click",()=>{e[2].classList.toggle("faq_accordion-btn--active"),t[2].classList.toggle("faq_accordion-body--active")}),e[3].addEventListener("click",()=>{e[3].classList.toggle("faq_accordion-btn--active"),t[3].classList.toggle("faq_accordion-body--active")}),e[4].addEventListener("click",()=>{e[4].classList.toggle("faq_accordion-btn--active"),t[4].classList.toggle("faq_accordion-body--active")})};d()}]);