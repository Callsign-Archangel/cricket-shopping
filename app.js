/* ---------- Product illustrations (inline SVG, no image files needed) ---------- */
/* To use a real photo instead, add  img:"images/yourphoto.jpg"  to a product. */
const ART={
 bat:c=>`<g transform="rotate(32 60 60)"><rect x="52" y="4" width="16" height="16" rx="4" fill="#222"/><rect x="55" y="18" width="10" height="24" fill="#444"/><path d="M47 42h26l3 62q0 8-8 8H52q-8 0-8-8z" fill="#e9c58d"/><rect x="57" y="46" width="6" height="56" fill="${c}"/><path d="M47 42h26" stroke="#c9a468" stroke-width="2"/></g>`,
 ball:c=>`<circle cx="60" cy="60" r="38" fill="${c}"/><path d="M30 38q30 22 0 44M90 38q-30 22 0 44" stroke="#fff" stroke-width="3" stroke-dasharray="4 4" fill="none"/><ellipse cx="46" cy="42" rx="10" ry="6" fill="#fff" opacity=".25"/>`,
 gloves:c=>`<path d="M36 80V44q0-9 7-9t7 9V30q0-9 7-9t7 9v4q0-8 7-8t7 9v6q0-6 6-6t6 8v34z" fill="${c}"/><rect x="34" y="78" width="58" height="26" rx="6" fill="#222"/><rect x="34" y="84" width="58" height="5" fill="#fff" opacity=".6"/>`,
 helmet:c=>`<path d="M20 82Q20 28 62 28t42 54z" fill="${c}"/><path d="M62 28q-2 30 0 54" stroke="#fff" stroke-width="3" fill="none" opacity=".6"/><path d="M58 60h46v22H58z" fill="none" stroke="#222" stroke-width="3"/><path d="M58 68h46M58 75h46M72 60v22M86 60v22" stroke="#222" stroke-width="2"/>`,
 pads:c=>`<rect x="24" y="12" width="32" height="96" rx="14" fill="${c}"/><rect x="64" y="12" width="32" height="96" rx="14" fill="${c}"/><path d="M24 44h32M24 74h32M64 44h32M64 74h32" stroke="#fff" stroke-width="3" opacity=".7"/><rect x="24" y="30" width="32" height="6" fill="#222" opacity=".35"/><rect x="64" y="30" width="32" height="6" fill="#222" opacity=".35"/>`,
 shoe:c=>`<path d="M14 84V52l24-8 10 12 30 6q26 4 28 24v6H14z" fill="${c}"/><path d="M38 44l6 14M48 56l4 12" stroke="#fff" stroke-width="3"/><rect x="10" y="88" width="100" height="10" rx="4" fill="#222"/><path d="M18 98v6M34 98v6M50 98v6M78 98v6M94 98v6" stroke="#222" stroke-width="4"/><path d="M14 74h86" stroke="#fff" stroke-width="3" opacity=".6"/>`,
 bag:c=>`<path d="M40 44q0-16 20-16t20 16" stroke="#222" stroke-width="6" fill="none"/><rect x="82" y="8" width="9" height="40" rx="3" fill="#e9c58d" transform="rotate(14 86 28)"/><rect x="18" y="44" width="84" height="54" rx="12" fill="${c}"/><rect x="18" y="62" width="84" height="7" fill="#fff" opacity=".55"/><circle cx="60" cy="66" r="6" fill="#222"/><rect x="26" y="98" width="12" height="8" rx="3" fill="#222"/><rect x="82" y="98" width="12" height="8" rx="3" fill="#222"/>`,
 shirt:c=>`<path d="M42 16l-28 16 12 22 12-7v57h52V47l12 7 12-22-28-16q-8 12-22 12t-22-12z" fill="${c}"/><path d="M42 16q8 12 22 12t22-12" fill="none" stroke="#fff" stroke-width="4"/><rect x="38" y="56" width="52" height="8" fill="#fff" opacity=".55"/>`,
 cap:c=>`<path d="M22 74Q22 32 60 32t38 42z" fill="${c}"/><path d="M60 74h50q-2 12-30 12H60z" fill="#222" opacity=".85"/><circle cx="60" cy="30" r="4" fill="#fff"/><path d="M60 32q-6 20 0 42" stroke="#fff" stroke-width="2" opacity=".6" fill="none"/>`,
 pants:c=>`<path d="M34 12h52l8 98H68L60 52l-8 58H26z" fill="${c}"/><rect x="34" y="12" width="52" height="8" fill="#222" opacity=".4"/><path d="M40 20l-6 90M80 20l6 90" stroke="#fff" stroke-width="3" opacity=".6"/>`,
 jumper:c=>`<path d="M42 14l-30 18 8 40 14-4v38h52V68l14 4 8-40-30-18q-8 10-22 10t-22-10z" fill="${c}"/><path d="M42 14q8 14 22 14t22-14" fill="none" stroke="#fff" stroke-width="4"/><path d="M38 92h52" stroke="#fff" stroke-width="5" opacity=".6"/>`
};
const svg=(t,c)=>`<svg viewBox="0 0 120 120" role="img" aria-label="${t}">${ART[t](c)}</svg>`;

/* [id, name, category, price, old price, art type, colour, tag] */
const RAW=[
 [1,"English Willow Bat – Pro Edition","Bats",18999,22999,"bat","#d7263d","Bestseller"],
 [2,"Kashmir Willow Bat – Club Series","Bats",3499,4299,"bat","#3a86ff"],
 [3,"Junior Bat (Size 5)","Bats",1799,0,"bat","#0fb5a3","Kids"],
 [4,"Power Hitter T20 Bat","Bats",8999,10499,"bat","#8338ec","New"],
 [5,"Tennis Ball Bat – Street Edition","Bats",999,0,"bat","#ffb703"],
 [6,"Leather Match Ball (Pack of 3)","Balls",1199,0,"ball","#d7263d"],
 [7,"Pink Day-Night Ball","Balls",699,0,"ball","#ff5d8f","Day-night"],
 [8,"Tennis Ball (Pack of 6)","Balls",599,0,"ball","#b7e000"],
 [9,"White Practice Ball (Pack of 4)","Balls",899,0,"ball","#e8eaf2"],
 [10,"Batting Gloves – Elite Grip","Protection",1999,2499,"gloves","#3a86ff"],
 [11,"Wicketkeeping Gloves","Protection",2499,0,"gloves","#d7263d"],
 [12,"Match Helmet with Steel Grille","Protection",2799,0,"helmet","#12294d","New"],
 [13,"Leg Guards – Lightweight","Protection",2299,0,"pads","#ffb703"],
 [14,"Junior Leg Guards","Protection",1599,0,"pads","#0fb5a3","Kids"],
 [15,"Spiked Cricket Shoes – Blaze","Footwear",3299,3999,"shoe","#d7263d","Bestseller"],
 [16,"Rubber Sole Shoes – Sky","Footwear",2299,0,"shoe","#3a86ff"],
 [17,"Pro White Cricket Shoes","Footwear",4499,5299,"shoe","#e8eaf2"],
 [18,"Bowling Shoes – Volt","Footwear",3799,0,"shoe","#b7e000","New"],
 [19,"Junior Cricket Shoes","Footwear",1799,0,"shoe","#8338ec","Kids"],
 [20,"Full Kit – Beginner","Kits",6499,7999,"bag","#0fb5a3","Kit deal"],
 [21,"Full Kit – Pro Player","Kits",24999,0,"bag","#12294d"],
 [22,"Junior Kit (Age 8–12)","Kits",4999,5999,"bag","#ff5d8f","Kids"],
 [23,"Wheelie Kit Bag","Kits",3999,0,"bag","#8338ec"],
 [24,"Coaching Kit – Cones & Stumps","Kits",2999,0,"bag","#ffb703"],
 [25,"Team Jersey – Custom Name","Apparel",999,0,"shirt","#3a86ff","Bestseller"],
 [26,"Cricket Whites Trousers","Apparel",1499,0,"pants","#e8eaf2"],
 [27,"Sun Cap","Apparel",399,0,"cap","#d7263d"],
 [28,"Training Sweater","Apparel",1799,0,"jumper","#12294d"],
 [29,"Dri-Fit Practice Tee","Apparel",799,999,"shirt","#0fb5a3","Sale"]
];
const PRODUCTS=RAW.map(([id,name,cat,price,old,t,c,tag])=>({id,name,cat,price,old,t,c,tag,img:null}));
const CATS=[["All","#12294d","ball","#d7263d"],["Bats","#d7263d","bat","#ffb703"],["Protection","#3a86ff","helmet","#ffb703"],["Balls","#0fb5a3","ball","#d7263d"],["Footwear","#8338ec","shoe","#ffb703"],["Kits","#ff7a00","bag","#12294d"],["Apparel","#e0398a","shirt","#ffb703"]];
const BG={Bats:"#ffe4e8",Protection:"#e2edff",Balls:"#dcf7f3",Footwear:"#efe4ff",Kits:"#ffe9d1",Apparel:"#ffe0ee"};

const inr=n=>"₹"+n.toLocaleString("en-IN");
const prod=id=>PRODUCTS.find(p=>p.id===id);
/* Real photos: put images/products/<id>.jpg (or .png / .webp). If a photo is missing, the drawing is shown instead. */
const EXTS=["jpg","png","webp"];
function imgFail(el,id,i){
  i++;
  if(i<EXTS.length){el.dataset.i=i;el.src=`images/products/${id}.${EXTS[i]}`}
  else{const p=prod(id);el.outerHTML=svg(p.t,p.c)}
}
const art=p=>`<img src="images/products/${p.id}.jpg" alt="${p.name}" data-i="0" onerror="imgFail(this,${p.id},+this.dataset.i)">`;
let cart=[];
try{cart=JSON.parse(localStorage.getItem("cart")||"[]")}catch(e){}
let current="All";

function save(){try{localStorage.setItem("cart",JSON.stringify(cart))}catch(e){}}
function show(id){
  ["home","checkout","success"].forEach(s=>document.getElementById(s).style.display=(s===id?"block":"none"));
  window.scrollTo(0,0);
}
function filter(c){current=c;renderCats();renderGrid();document.getElementById("shop").scrollIntoView()}
function renderCats(){
  document.getElementById("cats").innerHTML=CATS.map(([c,bg,t,col])=>
   `<button class="cat ${c===current?'on':''}" style="background:${bg}" onclick="filter('${c}')">${svg(t,col)}${c}</button>`).join("");
}
function renderGrid(){
  const list=current==="All"?PRODUCTS:PRODUCTS.filter(p=>p.cat===current);
  document.getElementById("gtitle").textContent=current==="All"?"All products":current;
  document.getElementById("grid").innerHTML=list.map(p=>`
   <article class="card"><div class="thumb" style="background:${BG[p.cat]}">${p.tag?`<span class="tag">${p.tag}</span>`:""}${art(p)}</div>
   <div class="info"><small>${p.cat}</small><h3>${p.name}</h3>
   <div class="price">${inr(p.price)}${p.old?`<s>${inr(p.old)}</s>`:""}</div>
   <button class="btn" onclick="addToCart(${p.id})">Add to cart</button></div></article>`).join("");
}
function addToCart(id){
  const it=cart.find(i=>i.id===id);
  it?it.qty++:cart.push({id,qty:1});
  save();renderCart();toggleCart(true);
}
function changeQty(id,d){
  const it=cart.find(i=>i.id===id);
  it.qty+=d;
  if(it.qty<=0)cart=cart.filter(i=>i.id!==id);
  save();renderCart();
}
function removeItem(id){cart=cart.filter(i=>i.id!==id);save();renderCart()}
const cartTotal=()=>cart.reduce((s,i)=>s+prod(i.id).price*i.qty,0);
function renderCart(){
  document.getElementById("count").textContent=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("total").textContent=inr(cartTotal());
  document.getElementById("items").innerHTML=cart.length?cart.map(i=>{const p=prod(i.id);return `
   <div class="row"><div class="e" style="background:${BG[p.cat]}">${art(p)}</div>
   <div><div style="font-weight:600">${p.name}</div>
   <div class="qty"><button onclick="changeQty(${p.id},-1)" aria-label="Decrease">−</button>${i.qty}<button onclick="changeQty(${p.id},1)" aria-label="Increase">+</button></div></div>
   <div style="text-align:right"><div>${inr(p.price*i.qty)}</div><button class="rm" onclick="removeItem(${p.id})">Remove</button></div></div>`}).join("")
   :`<div class="empty">Your cart is empty.<br>Add a bat or kit to get started.</div>`;
}
function toggleCart(open){document.body.classList.toggle("open",open)}
function summary(items){
  const sub=items.reduce((s,i)=>s+prod(i.id).price*i.qty,0);
  const ship=sub>=2999||sub===0?0:149;
  return items.map(i=>`<div class="l"><span>${prod(i.id).name} × ${i.qty}</span><span>${inr(prod(i.id).price*i.qty)}</span></div>`).join("")
   +`<div class="l"><span>Delivery</span><span>${ship?inr(ship):"Free"}</span></div>
   <div class="l t"><span>Total</span><span>${inr(sub+ship)}</span></div>`;
}
function goCheckout(){
  if(!cart.length){alert("Your cart is empty. Add an item first.");return}
  toggleCart(false);
  document.getElementById("cosum").innerHTML="<h3 style='margin-bottom:10px'>Order summary</h3>"+summary(cart);
  show("checkout");
}
function placeOrder(e){
  e.preventDefault();
  const orderId="WS"+Math.floor(100000+Math.random()*900000);
  const name=document.getElementById("name").value;
  document.getElementById("okmsg").innerHTML=`Thanks, <b>${name}</b>. Your order <b>#${orderId}</b> is confirmed and will be delivered to PIN ${document.getElementById("pin").value}. Payment: ${document.getElementById("pay").value}.`;
  document.getElementById("oksum").innerHTML="<h3 style='margin-bottom:10px'>Items ordered</h3>"+summary(cart);
  cart=[];save();renderCart();
  document.getElementById("form").reset();
  show("success");
}
