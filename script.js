let shoppingcart = [];
let amounts = [];
let prices = [];
let description = [];
let subTotal = 0;
let deliveryPrice = 1;



function render() {
    let index = document.getElementById('shoppingcart');
    index.innerHTML = '';
    for (let i = 0; i < shoppingcart.length; i++) {
        index.innerHTML += renderShoppingcartHTML(i);
    }
    renderSubTotal();
    renderEmptyShoppingcart();
    renderMenuCard();
    shoppingcartMobileButton()
}

function renderShoppingcartHTML(i) {
    let newPrice = amounts[i] * prices[i];
    return `
    <div class="menu"> 
        <table>
            <tr>
                <td class="amount"><b>${amounts[i]}</b></td>
                <td class="menuName"><b class="underline">${shoppingcart[i]}</b></td>
                <td class="price">${newPrice.toFixed(2)} €</td>
            </tr>
            <tr>
                <td></td>
                <td class="menuDescription">${description[i]}</td>
                <td></td>
            </tr>
        </table>
    </div>
    <div class="menuButtons">
        <img onclick="deleteMenu(${i})" src="./img/remove.svg" alt="delete">
        <img onclick="addAmount(${i})" src="./img/add.svg" alt="add">
    </div>`;
}


function back() {
    let bar = document.getElementById('bar');
    bar.scrollLeft -= 200;
}

function forward() {
    let bar = document.getElementById('bar');
    bar.scrollLeft += 200;
}

function renderSubTotal() {
    let index = document.getElementById('subTotal');
    subTotal = 0;

    for (let i = 0; i < prices.length; i++) {
        subTotal = subTotal + (prices[i] * amounts[i]);
    }
    index.innerHTML = `${subTotal.toFixed(2)} €`;
    renderTotal();
    renderDeliveryPrice();
}

function renderDeliveryPrice() {
    let index = document.getElementById('deliveryPrice');
    index.innerHTML = `${deliveryPrice.toFixed(2)} €`;
}

function renderTotal() {
    let index = document.getElementById('total');
    let payButton = document.getElementById('payButton');
    let shoppingcartButton = document.getElementById('shoppingcartButton');
    let total = subTotal + deliveryPrice;
    index.innerHTML = `<b>${total.toFixed(2)} €</b>`;
    payButton.innerHTML = `Bezahlen (${total.toFixed(2)} €)`;
    shoppingcartButton.innerHTML = `Warenkorb (${total.toFixed(2)} €)`;
}

function deleteMenu(i) {
    amounts[i]--;
    if (amounts[i] == 0) {
        shoppingcart.splice(i, 1);
        amounts.splice(i, 1);
        prices.splice(i, 1);
        description.splice(i, 1);
    };
    render();
}

function addAmount(i) {
    amounts[i]++;
    render();
}

function addMenu(menu, price, menuDescription) {
    let index = shoppingcart.indexOf(menu);
    if (index == -1) {
        shoppingcart.push(menu);
        prices.push(price);
        description.push(menuDescription);
        amounts.push(1);
    }
    else {
        amounts[index]++;
    };

    render();
}

function renderEmptyShoppingcart() {
    let index = document.getElementById('shoppingcart');
    let costs = document.getElementById('costs');
    if (shoppingcart.length == 0) {
        index.innerHTML = renderEmptyShoppingcartHTML();
        costs.classList.add('displayNone');
    }
    else {
        costs.classList.remove('displayNone');
    };
}

function renderEmptyShoppingcartHTML() {
    return `
    
    <div class="emptyShoppingcart">
        <img src="./img/bag.svg" alt="bag">
        <h2>Fülle deinen Warenkorb</h2>
        <span>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
    </div>`;
}

function renderMenuCard() {
    let ids = ['popularList', 'forKidsList', 'saladList', 'pizzaList', 'pastaList', 'burgerList', 'cutletList', 'casserolesList', 'pizzaRollsList', 'pizzaBunList', 'croquesList', 'fingerfoodList', 'dessertsList', 'toDrinkList'];
    for (let i = 0; i < menus.length; i++) {
        let id = document.getElementById(ids[i]);
        id.innerHTML = '';
        let menu = menus[i];
        for (let j = 0; j < menu['name'].length; j++) {
            id.innerHTML += renderMenuCardHTML(menu, j);
        };
    };
}

function renderMenuCardHTML(i, j) {
    return `
        <div class="menuCard" onclick="addMenu('${i['name'][j]}', ${i['price'][j]}, '${i['description'][j]}')">
            <div>
                <h2>${i['name'][j]}</h2>
                <p>${i['description'][j]}</p><br>
                <b>${i['price'][j].toFixed(2)} €</b>
            </div>
            <div>
                <img src="./img/add.svg" alt="add">
            </div>
        </div>`;
}

function mobileOpenShoppingcart() {
    let sideBox = document.getElementById('sideBox');
    sideBox.classList.remove('desktop');
}

function mobileCloseShoppingcart() {
    let sideBox = document.getElementById('sideBox');
    sideBox.classList.add('desktop');
}

function shoppingcartMobileButton() {
    let index = document.getElementById('shoppingcartButtonDiv');
    if (shoppingcart.length > 0) {
        index.classList.remove('displayNone');
    }
    else {
        index.classList.add('displayNone');
    };
}

function noFunction() {
    alert('Leider noch keine Funktion');
}

function order() {
    shoppingcart = [];
    amounts = [];
    prices = [];
    description = [];

    render();
    alert('Deine Bestellung wurde aufgegeben.');
}

document.addEventListener('DOMContentLoaded', function () {
    window.onscroll = function () { searchbarFixed(); noMaginTop() };
    let searchbar = document.getElementById('searchbarBox');
    let searchbarBoxFixed = searchbar.offsetTop;
    let shoppingcartBox = document.getElementById('shoppingcartTitle');
    let sticky = shoppingcartBox.offsetTop;

    function searchbarFixed() {
        let bar = document.getElementById('barBox');

        if (window.pageYOffset >= searchbarBoxFixed) {
            searchbar.classList.add('searchbarBoxFixed');
            bar.classList.add('barFixed');
        }
        else {
            searchbar.classList.remove('searchbarBoxFixed');
            bar.classList.remove('barFixed');
        };
    }
    function noMaginTop() {
        if (screen.width > 999) {
            if (window.pageYOffset >= sticky) {
                shoppingcartBox.classList.add('noMaginTop');
            }
            else {
                shoppingcartBox.classList.remove('noMaginTop');
            };
        }
    }
});




