'use strict';
// DEMONSTRATION MODE: These are illustrative models, not live retailer offers.
// Never add fabricated prices, availability, reviews, or affiliate URLs.
const phones=[
  {
    "id": "iphone16",
    "brand": "Apple",
    "name": "Apple iPhone 16",
    "desc": "View a real photo of the iPhone 16. Confirm specifications, price and availability with Apple.",
    "tag": "Official model",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/About_iPhone_16_Ultramarine.jpg?width=800",
    "source": "Wikimedia Commons photo",
    "credit": "https://commons.wikimedia.org/wiki/File:About_iPhone_16_Ultramarine.jpg",
    "url": "https://www.apple.com/shop/buy-iphone/iphone-16",
    "focus": "Apple · iOS · standard model",
    "p1": "#543cb6",
    "p2": "#0b1c44",
    "glow": "#7653d44a"
  },
  {
    "id": "iphone15",
    "brand": "Apple",
    "name": "Apple iPhone 15",
    "desc": "An older-generation iPhone to research when considering a used or refurbished purchase. No live used offer is connected.",
    "tag": "Value comparison",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Apple_iPhone_15.jpg?width=800",
    "source": "Wikimedia Commons photo",
    "credit": "https://commons.wikimedia.org/wiki/File:Apple_iPhone_15.jpg",
    "url": "https://www.apple.com/iphone/compare/",
    "focus": "Apple · older-generation · compare condition",
    "p1": "#9b5a82",
    "p2": "#321c45",
    "glow": "#d575b448"
  },
  {
    "id": "galaxys24",
    "brand": "Samsung",
    "name": "Samsung Galaxy S24",
    "desc": "Explore the Galaxy S24 and verify availability on Samsung's official site; Samsung currently lists this model as sold out.",
    "tag": "Older flagship",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Samsung_Galaxy_S24.jpg?width=800",
    "source": "Vis M / Wikimedia Commons, CC BY-SA",
    "credit": "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_S24.jpg",
    "url": "https://www.samsung.com/us/smartphones/galaxy-s24/",
    "focus": "Samsung · Android · S series",
    "p1": "#275b91",
    "p2": "#061a33",
    "glow": "#488ae24a"
  },
  {
    "id": "pixel11",
    "brand": "Google",
    "name": "Google Pixel 11",
    "desc": "Google's current Pixel 11 lineup. This card uses an accurate device illustration; a licensed photograph is still needed.",
    "tag": "Official lineup",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Pixel_11_(Frost,_back).svg",
    "source": "Wikimedia Commons device illustration",
    "credit": "https://commons.wikimedia.org/wiki/File:Pixel_11_(Frost,_back).svg",
    "url": "https://store.google.com/us/category/phones?hl=en-US",
    "focus": "Google · Android · Pixel",
    "p1": "#548a8a",
    "p2": "#15263c",
    "glow": "#46c4bc42"
  }
]
let activeBrand='All',query='',selected=[];
const cards=document.getElementById('cards');
function render(){const visible=phones.filter(p=>(activeBrand==='All'||p.brand===activeBrand)&&(p.name+' '+p.brand+' '+p.desc).toLowerCase().includes(query));cards.replaceChildren();if(!visible.length){const p=document.createElement('p');p.textContent='No matching models. Try a different search.';cards.append(p);return;}for(const p of visible){const article=document.createElement('article');article.className='product';article.style.setProperty('--p1',p.p1);article.style.setProperty('--p2',p.p2);article.style.setProperty('--glow',p.glow);article.innerHTML=`<div class="product-visual"><span class="tag"></span><img class="actual-phone" loading="lazy" referrerpolicy="no-referrer" alt=""></div><div class="product-body"><span class="brandline"></span><h3></h3><p></p><div class="product-foot"><a class="source-link" target="_blank" rel="noopener noreferrer">View official source ↗</a><button class="compare-btn" type="button"></button></div></div>`;article.querySelector('.tag').textContent=p.tag;article.querySelector('.actual-phone').src=p.image;article.querySelector('.actual-phone').alt=p.source+' showing '+p.name;article.querySelector('.actual-phone').onerror=function(){this.style.display='none';article.querySelector('.product-visual').classList.add('photo-unavailable');article.querySelector('.product-visual').insertAdjacentHTML('beforeend','<div class="photo-fallback">Photo temporarily unavailable — use official source link</div>');};article.querySelector('.brandline').textContent=p.brand;article.querySelector('h3').textContent=p.name;article.querySelector('p').textContent=p.desc;const official=article.querySelector('.source-link');official.href=p.url;official.setAttribute('aria-label','Open official model information for '+p.name);const credit=document.createElement('a');credit.className='photo-credit';credit.href=p.credit;credit.target='_blank';credit.rel='noopener noreferrer';credit.textContent='Image source: '+p.source;article.querySelector('.product-body').append(credit);const btn=article.querySelector('button');btn.textContent=selected.includes(p.id)?'✓ Selected':'+ Compare';btn.classList.toggle('selected',selected.includes(p.id));btn.setAttribute('aria-pressed',String(selected.includes(p.id)));btn.addEventListener('click',()=>toggleCompare(p.id));cards.append(article);}}
function toggleCompare(id){if(selected.includes(id))selected=selected.filter(x=>x!==id);else if(selected.length<2)selected.push(id);else selected=[selected[1],id];render();renderCompare();}
function renderCompare(){const el=document.getElementById('comparison');el.replaceChildren();if(!selected.length){el.textContent='Select “Compare” on two phone cards to get started.';return;}const grid=document.createElement('div');grid.className='compare-grid';for(const id of selected){const p=phones.find(x=>x.id===id);const div=document.createElement('div');div.className='compare-item';const title=document.createElement('strong');title.textContent=p.name;const brand=document.createElement('span');brand.textContent=p.brand;const focus=document.createElement('span');focus.textContent=p.focus;div.append(title,brand,focus);grid.append(div);}el.append(grid);}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{activeBrand=b.dataset.brand;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render();}));document.getElementById('search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();render();});document.getElementById('clearCompare').addEventListener('click',()=>{selected=[];render();renderCompare();});document.getElementById('year').textContent=new Date().getFullYear();render();renderCompare();

// Illustrative size preview only; deliberately not tied to actual device dimensions.
const previewPhone=document.getElementById('phoneSize');
const sizeCaption=document.getElementById('sizeCaption');
const sizeText={small:'Illustrative compact phone silhouette — not model-specific.',medium:'Illustrative standard phone silhouette — not model-specific.',large:'Illustrative large phone silhouette — not model-specific.'};
const sizeScale={small:.83,medium:1,large:1.12};
document.querySelectorAll('.size-pill').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.size-pill').forEach(b=>b.classList.toggle('active',b===button));const size=button.dataset.size;previewPhone.style.transform=`scale(${sizeScale[size]})`;sizeCaption.textContent=sizeText[size];}));
