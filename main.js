document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    fetchData()
    //basketContent()
})

let basket =  JSON.parse(localStorage.getItem("data")) || [] 
console.log(basket);

// function basketContent() {
//     fetch("http://localhost:3000/basket")
//     .then((res) => res.json())
//     .then(basket => {console.log(basket);})
// }

//const basket = basketContent()

function fetchData() {
    fetch("http://localhost:3000/gadgets")
    .then((res) => res.json())
    .then(generateShop)
}


        
function generateShop(shopItemsData){
            return (shop.innerHTML= shopItemsData.map((x) => {
                let {id,name,price,color,capacity,img} = x
                localStorage.setItem('data', JSON.stringify(basket)) //post
                let search = basket.find((x) => x.id === id) || []
                
                return `
                <div id= product-id-${id} class="item">
                <img width="220" height="300" src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${color}</p>
                    <p>${capacity}</P>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i onclick='decrement(${id})'  class="bi bi-dash-lg"></i>
                            <div id='${id}' class="male">${search.item === undefined ? 0 : search.item}</div>
                            <i onclick='increment(${id})'  class="bi bi-plus-lg"></i>
                            </div>
                </div>
            </div>
            </div>
            `
            }).join(""))

        }


   
let increment = (id) => {
    console.log('increment is working');
    let selecteditem = id
    let search = basket.find((x) => x.id === selecteditem.id)
    console.log(search);
    if (search === undefined) {
        basket.push({
            id: selecteditem.id,
            item: 1
        })} 
        else {
         search.item += 1
     }
     update(selecteditem.id)
    console.log(selecteditem.id);
    
    console.log(basket);
    localStorage.setItem('data', JSON.stringify(basket)) 
    
}



let decrement = (id) => {
    console.log('decrement is working');
    let selecteditem = id
    let search = basket.find((x) => x.id === selecteditem.id)
    if (search === undefined) return
    else if (search.item === 0) {
        return }else {
        search.item -= 1
    }
    update(selecteditem.id)

     basket = basket.filter((x) => x.item !== 0)
     localStorage.setItem('data', JSON.stringify(basket)) //post--patch
    
 }


 let update = (id)=> {
     let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    
    calculation()
}



let calculation = () => {
    let catIcon = document.getElementById('cartAmount')
    catIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y, 0)
}

 calculation()