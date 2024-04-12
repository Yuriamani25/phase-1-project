let shop = document.getElementById('shop')
//fetch
let shopItemsData = [
    {
        id:'hjhdgd',
        name:'Casual Shirt',
        price:45,
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        img:'./images/img-1.jpg'
    },
    {
        id:'dhkvkd',
        name:'Office Shirt',
        price:100,
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        img:'./images/img-2.jpg'
    },
    {
        id:'kljhdklc',
        name:'T Shirt',
        price:25,
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        img:'./images/img-3.jpg'
    },
    {
        id:'fjhj',
        name:'Men Suits',
        price:300,
        desc:'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        img:'./images/img-4.jpg'
    }]
//fetch
let basket = [] || JSON.parse(localStorage.getItem(data))

    

    let generateShop = () => {
        return (shop.innerHTML= shopItemsData.map((x) => {
            let {id,name,price,desc,img} = x
            localStorage.setItem('data', JSON.stringify(basket)) //post
            let search = basket.find((x) => x.id === id) || []
            return `
            <div id= product-id-${id} class="item">
            <img width="220" src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick='decrement(${id})' class="bi bi-dash-lg"></i>
                        <div id= ${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                        <i onclick='increment(${id})' class="bi bi-plus-lg"></i>
                    </div>
            </div>
        </div>
        </div>
        `
        }).join(""))
    }

generateShop()

let increment = (id) => {
    let selecteditem = id
    let search = basket.find((x) => x.id === selecteditem.id)
    if (search === undefined) {
        basket.push({
            id: selecteditem.id,
            item: 1
        })} else {
        search.item += 1
    }
    update(selecteditem.id)
    localStorage.setItem('data', JSON.stringify(basket)) //post--patch
    
    
}
let decrement = (id) => {
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