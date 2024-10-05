let prodel=document.querySelector(".prod")
let fruits=[
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
        image:"images/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        quntity:0


    },
    {
        id:9,
        image:"images/fruite-item-2.jpg",
        name:"Raspberries",
        price:5.93,
        stock:20,
        quntity:0


    }
]
function displayprod()
{
    fruits.forEach((f)=>{
        prodel.innerHTML+=`
        <div class="col">
        <div class="p-2">
        <div class="card">
          <img src=${f.image} class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${f.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas suscipit officiis
              fugit veritatis quisquam reprehenderit incidunt, blanditiis cum odio numquam animi obcaecati
              distinctio ipsa corporis repellat quae tempore! Sit, voluptatem!</p>
            <h5>${f.price}</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill"><i
                class="fa-solid fa-bag-shopping me-2"></i> Add to Cart</button>
          </div>
        </div>
        </div>`

    })

}
displayprod()