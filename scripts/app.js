function adition2(x) {
    let res = x + 2;
    return res;
}

let adition = adition2(10);
console.log(adition);

adition = adition2(12);
console.log(adition);




console.log(additionArray([10,20]));
console.log(additionArray([1,20]));

let resDivide = divide(10,2);
console.log(resDivide);

inform();

//Take id with id
let div = document.getElementById('lecture4');
console.log(div.id);

let input = document.getElementsByName('name');
console.log(input);

let divs = document.querySelectorAll('.class1');

console.log(divs);

let div1 = document.querySelector('.class1');
console.log(div);

let word = 'hi' + 'i am' + 100;
let be = 'be';
let _100 = 100;
`Hi ${be} ${_100}`;