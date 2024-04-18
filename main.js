document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

let basket = JSON.parse(localStorage.getItem("data")) || [];

function fetchData() {
    fetch("https://my-json-server.typicode.com/Yuriamani25/phase-1-project/gadgets")
        .then((res) => res.json())
        .then(generateShop);
}

function generateShop(shopItemsData) {
    shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, color, capacity, img } = x;
            localStorage.setItem('data', JSON.stringify(basket));

            let search = basket.find((x) => x.id === id) || [];

            return `
                <div id= product-id-${id} class="item">
                    <img width="220" height="300" src=${img} alt="">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${color}</p>
                        <p>${capacity}</P>
                        <div class="price-quantity">
                            <h2>$ ${price}</h2>
                            <button class="increment-button" data-id="${id}">+</button>
                            <div id='${id}' class="male">${search.item === undefined ? 0 : search.item}</div>
                            <button class="decrement-button" data-id="${id}">-</button>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");

    addEventListenersToButtons();
}

function addEventListenersToButtons() {
    const incrementButtons = document.querySelectorAll('.increment-button');
    const decrementButtons = document.querySelectorAll('.decrement-button');

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.getAttribute('data-id');
            increment(itemId);
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemId = button.getAttribute('data-id');
            decrement(itemId);
        });
    });
}

let increment = (id) => {
    console.log('increment is working');
    let selecteditem = id;
    let search = basket.find((x) => x.id === selecteditem);
    console.log(search);
    if (search === undefined) {
        basket.push({
            id: selecteditem,
            item: 1
        });
    } else {
        search.item += 1;
    }
    update(selecteditem);
    console.log(selecteditem);

    console.log(basket);
    localStorage.setItem('data', JSON.stringify(basket));
}

let decrement = (id) => {
    console.log('decrement is working');
    let selecteditem = id;
    let search = basket.find((x) => x.id === selecteditem);
    if (search === undefined) return;
    else if (search.item === 0) {
        return;
    } else {
        search.item -= 1;
    }
    update(selecteditem);

    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem('data', JSON.stringify(basket));
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;

    calculation();
}

let calculation = () => {
    let catIcon = document.getElementById('cartAmount');
    catIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculation();
console.log(object);