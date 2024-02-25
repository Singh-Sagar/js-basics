const shoppingCart = [
    {itemName:"Berserk complete set",
     price:16_000},
    {itemName:"INCERTO deluxe",
     price:6_999},
    {itemName:"Princeton Math",
     price:6_000},
    {itemName:"Feynman lectures",
     price:8_999},
]

// using reduce method to create total 

// failed attempt
// let start = 0;
// const total = shoppingCart.filter((acc, item)=>acc+item.price,start)
// console.log(`Total: ${total}`);

const priceToPay = shoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(priceToPay);