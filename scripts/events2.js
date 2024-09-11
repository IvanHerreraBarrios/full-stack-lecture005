let btnAdd = document.getElementById('add');

function add(){
    let title = document.getElementById('title');
    let price = document.getElementById('price');

    if (title.value === '' || price.value === '') {
        alert("You must be complete the data");
    } else {
        addSesionStorage();
        updateDiv();
    }
}

function addSesionStorage() {
    let title = document.getElementById('title');
    let price = document.getElementById('price');

    let product = {
        title: title.value,
        price: price.value,
    };

    let products = sessionStorage.getItem('products');

    if (products) {
        //It comes from there as text, transform it into an object
        products = JSON.parse(products);
        products.push(product);
    } else {
        products = [product];
    }

    //update
    sessionStorage.setItem('products', JSON.stringify(products));
}

function updateDiv() {
    let products = sessionStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);
    } else {
        products = [];
    }
    let divProducts = document.getElementById('products');
    divProducts.innerHTML = '';
    for (const p of products) {
        divProducts.innerHTML += `Title: ${p.title}, Price: ${p.price}`;
    }
}