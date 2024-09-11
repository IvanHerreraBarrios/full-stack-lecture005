function something(params) {
    //HTML <input type="text" name="name" id="name" value="pepe"/>
    let name = document.getElementById("name").value;
    //name = pepe
    name.value="";

    let input = document.getElementById("name");
    input.value = "";
}

/**
 * Add products to the HTML.
 */

function add() {
    //let title = document.getElementById("title");

    //jquery
    //id => #
    let title = $('#title');

    //let price = document.getElementById("price");
    let price = $('.classPrice');

    //title.value price.value
    if (title.val() !== '' && price.val() !== '') {
       addSesionStorage();
    }else {
        alert("Ypu must complete the fields.")
    }

    
}

function getProducts(){
    let products = sessionStorage.getItem('products');
    if (products) {
        products = JSON.parse(products);
    } else {
        products = []
    }
    return products
}

/**
 * Add article to sesionStorage
 * Pre: Title and price are not null
 */

function addSesionStorage(){
    let title = document.getElementById("title");
    let price = document.getElementById("price");
    let products = sessionStorage.getItem('products');


    let product = {
        id: 0,
        title: title.value,
        price: price.value,
    };
    //!=0
    if (products) {
        products = JSON.parse(products);
        products.push(product);
    } else {
        products = [product];
    }

    product.id = products.length;

    sessionStorage.setItem('products', JSON.stringify(products));

    updateDiv();

    title.value = "";
    title.price = "";

    
}

function deleteAll() {
    let confirm = confirm("Are you sure?");
    if (confirm) {
        sessionStorage.removeItem('products');
        updateDiv();
    }
}

function deleteId(id) {
    let confirm = confirm("Are you sure?");

    if (confirm) {
        
        let productsInStorage = getProducts();
        let auxList = productsInStorage.filter( aux => aux.id !== id);
        
        /*
        let auxList = [];
        for (let aux of productsInStorage) {
            if (aux.id !== id) {
                auxList.push(aux);
            }
        }
            */
        alert(id);
        sessionStorage.setItem('products', JSON.stringify(auxList));
    
        updateDiv();
    }
}

function updateDiv() {

    /*
    let products = JSON.parse(sessionStorage.getItem('products'));
    */

    let products = getProducts();
    

    let div = document.getElementById('events');
    div.innerHTML = ``;

    for (let product of products) {
        let linkDelete = `<button class="btn btn-danger btn-sm" onclick="deleteId(${product.id})">Delete</button>`;
        div.innerHTML += `id: ${product.id}, Title ${product.title}, Price: ${product.price}, ${linkDelete}<br>`;
    }
}

/*
let btnAdd = document.getElementById('add');
btnAdd.onclick = add;
*/

/*
f11 Get into a function
*/

function cloneHTML(){
    let htmlSource = $('.container');
    alert(htmlSource.html());

    let htmlTarget = $('#htmlTarget');

    htmlTarget.html(htmlSource.html());
}

//let btnAdd = document.getElementById('btnAdd');

/*
let btnAdd = $('#btnAdd');
btnAdd.click = add;
*/

//$('#btnAdd').click(add);

//let btnRemoveAll = document.getElementById('btnRemoveAll');
let btnRemoveAll = $('#btnRemoveAll');
btnRemoveAll.click = deleteAll;

$('#btnInnerHTML').click(cloneHTML);
