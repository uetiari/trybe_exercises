let productPrice = 10;
let productSale = 15;

let custoTotal = productPrice * 1.2;
let lucro = ( productSale - custoTotal ) * 1000;

if (productPrice >= 0 && productSale >= 0){
  console.log(lucro);
} else {
  console.log("Esse valor não pode ser negativo.");
};