//Task 4
function calculatePrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
var products = [
    { name: "Apple", price: 5 },
    { name: "Strawberry", price: 15 },
    { name: "Bannana", price: 10 },
    { name: "Orange", price: 8 },
];
var totalPrice = calculatePrice(products);
console.log("".concat(totalPrice));
//Task 5
function validEmail(email) {
    // Regular expression to check the basic structure of an email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(email);
    if (emailRegex.test(email)) {
        return "Email is valid";
    }
    else {
        return "Email isnt valid";
    }
}
// Test the function
var correctEmail = "reem@gmail.com";
var wrongEmail = "re^em.com";
console.log(validEmail(correctEmail));
console.log(validEmail(wrongEmail));
//another solution
// function validEmail(email){
//     let i=0;
//     let hasAsymbol=false;
//     let hasDOTsymbol=false;
//     let countAT=0;
//     let isValid="Email is valid"
//     let isntValid="Email is not valid"
//     while(i <email.length){
//       if (email[i]=="@" ){
//         hasAsymbol=true;
//         countAT++; 
//       }
//       if (email[i]=="."){
//         hasDOTsymbol=true; 
//        
//       }
//       i++;
//     }
//     if(hasDOTsymbol==true && hasAsymbol==true && countAT==1 ){
//         return isValid;
//     }
//     else 
//         return isntValid;
// }
