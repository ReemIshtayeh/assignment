//Task 4

// define product interface
interface product {
    name:string;
    price:number;
}

 function calculatePrice(products:product[]): number{
return products.reduce((total,product)=>total+product.price,0);
}

const products:product[] =[
    {name:"Apple", price:5},
    {name:"Strawberry", price:15},
    {name:"Bannana", price:10},
    {name:"Orange", price:8},
];

const totalPrice=calculatePrice(products);
console.log(`${totalPrice}`);
   

//Task 5
function validEmail(email:string){
    // Regular expression to check the basic structure of an email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailRegex.test(email);
     if(emailRegex.test(email)){return "Email is valid";}
     else {return "Email isnt valid";}
}

// Test the function
let correctEmail = "reem@gmail.com";
let wrongEmail = "re^em.com";
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

