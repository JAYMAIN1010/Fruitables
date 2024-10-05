let subtotalel=document.getElementById("subtot")
let totalel=document.querySelector('sup')
const items=[
    {
        id:1,
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        quntity:0


    },
    {
        id:2,
        image:"images/fruite-item-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:20,
        quntity:0


    },
    {
        id:3,
        image:"images/fruite-item-4.jpg",
        name:"Apricots",
        price:3.97,
        stock:21,
        quntity:0


    },
    {
        id:4,
        image:"images/fruite-item-3.jpg",
        name:"Banana",
        price:2.39,
        stock:18,
        quntity:0


    },
    {
        id:5,
        image:"images/fruite-item-1.jpg",
        name:"Orange",
        price:4.96,
        stock:20,
        quntity:0


    },
    {
        id:6,
        image:"images/featur-1.jpg",
        name:"Apples",
        price:6.99,
        stock:27,
        quntity:0


    },
    {
        id:7,
        image:"images/featur-2.jpg",
        name:"StrawBerry",
        price:3.99,
        stock:10,
        quntity:0


    },
    {
        id:8,
        image:"images/featur-3.jpg",
        name:"Brocoli",
        price:3.99,
        stock:25,
        quntity:0


    },
    {
        id:9,
        image:"images/vegetable-item-1.jpg",
        name:"Tomateos",
        price:2.99,
        stock:30,
        quntity:0


    },
    {
        id:10,
        image:"images/vegetable-item-4.jpg",
        name:"Capsicum",
        price:3.99,
        stock:27,
        quntity:0


    },
    {
        id:11,
        image:"images/vegetable-item-5.jpg",
        name:"Potatoes",
        price:5.99,
        stock:35,
        quntity:0


    },
    {
        id:12,
        image:"images/vegetable-item-6.jpg",
        name:"Parsley",
        price:3.69,
        stock:21,
        quntity:0


    },
    {
        id:13,
        image:"images/bread-item-1.jpg",
        name:"Garlic Bread",
        price:2.59,
        stock:25,
        quntity:0


    },
    {
        id:14,
        image:"images/bread-item-1.jpg",
        name:"Roasted Bread",
        price:3.69,
        stock:23,
        quntity:0


    },
    {
        id:15,
        image:"images/meat-1.jpg",
        name:"Mixed Salad",
        price:1.59,
        stock:13,
        quntity:0


    },
    {
        id:16,
        image:"images/meat-2.jpg",
        name:"Chicken Masala",
        price:5.69,
        stock:15,
        quntity:0


    }
    
]
let producte1=document.querySelector(".products")
console.log(producte1)
function displayproducts()
{
    items.map((prod)=>{
        producte1.innerHTML+=
        `<div class="col">
        <div class="card">
        <img src=${prod.image} class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit officiis fugit veritatis quisquam reprehenderit incidunt, blanditiis cum odio numquam animi obcaecati distinctio ipsa corporis repellat quae tempore! Sit, voluptatem!</p>
          <h5>${prod.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
        </div>
      </div>
    </div>
    `
    })
}
displayproducts()

let veggiese1=document.querySelector(".veges")
console.log(veggiese1)
function displayveges()
{
    items.slice(7,12).map((prod)=>{
        veggiese1.innerHTML+=
        `<div class="col">
        <div class="card">
        <img src=${prod.image} class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit officiis fugit veritatis quisquam reprehenderit incidunt, blanditiis cum odio numquam animi obcaecati distinctio ipsa corporis repellat quae tempore! Sit, voluptatem!</p>
          <h5>${prod.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
        </div>
      </div>
    </div>
    `
    })
}
displayveges()

let fruitse1=document.querySelector(".fruits")
console.log(fruitse1)
function displayfruits()
{
    items.slice(0,7).map((prod)=>{
        fruitse1.innerHTML+=
        `<div class="col">
        <div class="card">
        <img src=${prod.image} class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit officiis fugit veritatis quisquam reprehenderit incidunt, blanditiis cum odio numquam animi obcaecati distinctio ipsa corporis repellat quae tempore! Sit, voluptatem!</p>
          <h5>${prod.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
        </div>
      </div>
    </div>
    `
    })
}
displayfruits()

let breadse1=document.querySelector(".breads")
console.log(breadse1)
function displaybreads()
{
    items.slice(12,14).map((prod)=>{
        breadse1.innerHTML+=
        `<div class="col">
        <div class="card">
        <img src=${prod.image} class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit officiis fugit veritatis quisquam reprehenderit incidunt, blanditiis cum odio numquam animi obcaecati distinctio ipsa corporis repellat quae tempore! Sit, voluptatem!</p>
          <h5>${prod.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
        </div>
      </div>
    </div>
    `
    })
}
displaybreads()

let meatse1=document.querySelector(".meat")
console.log(meatse1)
function displaymeats()
{
    items.slice(14,16).map((prod)=>{
        meatse1.innerHTML+=
        `<div class="col">
        <div class="card">
        <img src=${prod.image} class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit officiis fugit veritatis quisquam reprehenderit incidunt, blanditiis cum odio numquam animi obcaecati distinctio ipsa corporis repellat quae tempore! Sit, voluptatem!</p>
          <h5>${prod.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
        </div>
      </div>
    </div>
    `
    })
}
displaymeats()

let bestprodel=document.querySelector(".bestprods")
let bestfruits=[
    {
        id:1,
        image:"images/best-product-1.jpg",
        name:"Oranges",
        price:4.99,
        stock:30,
        quntity:0


    },
    {
        id:2,
        image:"images/best-product-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:20,
        quntity:0


    },
    {
        id:3,
        image:"images/best-product-3.jpg",
        name:"Banana",
        price:3.97,
        stock:21,
        quntity:0


    },
    {
        id:4,
        image:"images/best-product-4.jpg",
        name:"Apricots",
        price:2.39,
        stock:18,
        quntity:0


    },
    {
        id:5,
        image:"images/best-product-5.jpg",
        name:"Grapes",
        price:4.96,
        stock:20,
        quntity:0


    },
    {
        id:6,
        image:"images/best-product-6.jpg",
        name:"Apples",
        price:6.99,
        stock:27,
        quntity:0


    }
]
function displaybest()
{
    bestfruits.map((prod)=>{
        bestprodel.innerHTML+=
        `<div class="col">
        <div class="card mb-3 p-4 rounded bg-light" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-6">
              <img src=${prod.image} class="img-fluid rounded-circle" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">${prod.name}</h5>
                <p class="card-text">
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondary"></i>
                </p>
                <p class="card-text fs-3">${prod.price}</p>
                <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>`
              
                
    })
}
displaybest()
let bestprodel1=document.querySelector(".bestprods1")
function displaybest1()
{
    bestfruits.slice(0,4).map((prod)=>{
        bestprodel1.innerHTML+=
        `<div class="col">
        <div class="card">
        <img src=${prod.image} class="card-img-top h-50 w-100" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${prod.name}</h5>
          <p class="card-text fs-5">
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star" style="color: #81C408;"></i>
                  <i class="fa-solid fa-star text-secondary"></i>
                  </p>
          <h5>${prod.price}</h5>
          <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})><i class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
        </div>
      </div>
    </div>
    `
    })
}
displaybest1()
let cart=JSON.parse(localStorage.getItem("cart"))||[]
updatecart()
function addtocart(id)
{
  if(cart.some((itm)=>itm.id===id))
  {
    changeqty("plus",id)
  }
  else{
    const p=items.find((prod)=>prod.id===id)
    cart.push({
      ...p,
      qty:1
    })
    console.log(cart)
    //localStorage.setItem("cart",stringyfy("cart"))
  }
  updatecart()
}
function updatecart()
{
  // displaycartitems()
  rendersubtotal()
  localStorage.setItem('cart',JSON.stringify(cart))
}
// totalel.innerHTML=cart.length
let cartel = document.getElementById("cartitems")
console.log(cartel)
function displaycartitems() {
  cart.map((c) => {
    cartel.innerHTML +=
      `
        <tr>

            <td><img src=${c.image} height=80px width=90px </td>
            <td>${c.name}</td>
            <td>${c.price}</td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${c.id})">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>
                ${c.qty}
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${c.id})">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
            </td>

            <td>${c.price}</td>
            <td><i class="fa-solid fa-trash text-danger fs-4" onclick="removeprod(${c.id})"></i></td>
            
        </tr>
        `
  })
}

displaycartitems()
function changeqty(action, id) {
  cart = cart.map((c) => {
    let qty = c.qty
    console.log("Quantity", c.qty, "Stock", c.stock)
    if (c.id === id) {
      if (action === 'minus' && qty > 1) {
        qty--
      }
      else if (action === 'plus' && qty < c.stock) {
        qty++
      }
    }
    return {
      ...c,
      qty
    }
  })
  updatecart()
}

function removeprod(id) {
  cart = cart.filter((item) => item.id !== id)
  updatecart()
}
function rendersubtotal() {
  let totalprice = 0, totalitems = 0;
  cart.forEach((item) => {
    totalprice += item.price * item.qty;
    totalitems += item.qty;
  });
  subtotalel.innerHTML = `Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
  totalel.innerHTML = totalitems;
}