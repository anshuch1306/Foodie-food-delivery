var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const carticon = document.querySelector('.cart-icon');
const carttab = document.querySelector('.cart-tab');
const closebtn = document.querySelector('.close-btn');
const cardlist = document.querySelector('.card-list');
const cartlist = document.querySelector('.cart-list');
const carttotal = document.querySelector('.cart-total');
const cartvalue = document.querySelector('.cart-value');
const hamburger = document.querySelector('.hamburger');
const mobilemenu = document.querySelector('.mobile-menu');

carticon.addEventListener('click', () => carttab.classList.add('cart-tab-active'));
closebtn.addEventListener('click', () => carttab.classList.remove('cart-tab-active'));
hamburger.addEventListener('click',()=>mobilemenu.classList.toggle('mobile-menu-active'));
let productlist = [];
let cartproduct = [];

const updatetotal = () =>{

  let totalprice = 0;
  let totalquantity = 0;


  document.querySelectorAll('.item').forEach(item =>{
    const quantity = parseInt(item.querySelector('.quantity-value').textContent);
    const price = parseFloat(item.querySelector('.item-total').textContent.replace('$',''));

    totalprice +=price;
    totalquantity +=quantity;

    

  });

  carttotal.textContent =  `$${totalprice.toFixed(2)}`;
  cartvalue.textContent = totalquantity;
}

const showcards = () => {
  productlist.forEach(product => {

    const ordercard = document.createElement('div');
    ordercard.classList.add('order-card');

    ordercard.innerHTML = `
    <div class="card-image">
      <img src="${product.image}">
    </div>
    <h4>${product.name}</h4>
    <h4 class="price">${product.price}</h4>
    <a href="#" class="btn card-btn">Add to Cart</a>
    `
    cardlist.appendChild(ordercard);
    

    const cardbtn = ordercard.querySelector('.card-btn');
    cardbtn.addEventListener('click', (e) => {
      e.preventDefault();
      addtocard(product);
    });


  });
};

const addtocard = (product) => {

  const exisitingproduct = cartproduct.find(item => item.id === product.id);
  if (exisitingproduct) {

    alert('item already in your cart!!');
    return
  }

  cartproduct.push(product);

  let quantity = 1;
  let price = parseFloat(product.price.replace('$', ''));

  const cartitem = document.createElement('div');
  cartitem.classList.add('item');
  cartitem.innerHTML = `
  <div class="img">
    <img src="${product.image}">
  </div>
  <div class="detail">
<h4>${product.name}</h4>
<h4 class="item-total">${product.price}</h4></div>

<div class="flex">
 <a href="#" class="quantity-btn minus">
<i class="fa-solid fa-minus"></i>
</a>
<h4 class="quantity-value">${quantity}</h4>
<a href="#" class="quantity-btn plus">
    <i class="fa-solid fa-plus"></i>
</a>
</div>
  `;

  cartlist.appendChild(cartitem);
  updatetotal();

  const plusbtn = cartitem.querySelector('.plus');
  const minusbtn = cartitem.querySelector('.minus');
  const quantityvalue = cartitem.querySelector('.quantity-value');
  const itemtotal = cartitem.querySelector('.item-total');

  plusbtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    quantity++;
    quantityvalue.textContent = quantity;
    itemtotal.textContent = `$${(price * quantity).toFixed(2)}`;
    updatetotal();
  });
  minusbtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (quantity > 1) {
      quantity--;
      quantityvalue.textContent = quantity;
      itemtotal.textContent = `$${(price * quantity).toFixed(2)}`;
       updatetotal();
    }

    else{
      cartitem.classList.add('slide-out')

      setTimeout(()=> {
        cartitem.remove();
      cartproduct = cartproduct.filter(item => item.id!==product.id);
      updatetotal();
      }, 300);
      
    }

  });

}



const initapp = () => {
  fetch('products.json').then
    (response => response.json()).then
    (data => {

      productlist = data;
      showcards();
    })
}
initapp();