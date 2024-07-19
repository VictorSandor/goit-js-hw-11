import{S as f,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(s){return s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:a,downloads:d})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${t}" 
            alt="${o}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${r}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${a}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${d}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}const l={key:"45016563-185536351b7165172c03d7cff",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0};function h(s){return l.q=s,`https://pixabay.com/api/?${new URLSearchParams(l).toString()}`}function p(s){return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const y=new f(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),c={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader")};c.searchForm.addEventListener("submit",g);function g(s){s.preventDefault();const i=s.currentTarget.elements.searchtext.value.toLowerCase().trim();if(console.log("Form Value: ",i),!i){u.error({title:"Error",message:"Search field cannot be empty. Please enter a search query!"});return}c.gallery.innerHTML="",c.loader.classList.add("loader"),p(h(i)).then(o=>{c.loader.classList.remove("loader");const e=o.hits;e.length===0?n():(c.gallery.insertAdjacentHTML("beforeend",m(e)),y.refresh())}).catch(n).finally(()=>{c.searchForm.reset()})}function n(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
