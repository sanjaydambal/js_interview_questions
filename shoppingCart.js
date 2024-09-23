let cart = [];

function addItemToCart(name,price,qty){
    let item  = cart.find(i=>i.name === name);
    if(item){
        item.qty += qty;
    }else{
        cart.push({name,price,qty});
    }
}

function removeItemFromCart(name){
     cart = cart.filter(item => item.name !== name)

}

function totalCost(){
    return cart.reduce((total,item)=>total + item.qty * item.price,0)
}

addItemToCart('Apple', 200,1 ); 
addItemToCart('Banana', 25, 2); 
addItemToCart('Apple', 200, 1); 

console.log('Cart:', cart); 
console.log('Total Cost:', totalCost()); 

removeItemFromCart('Banana'); 

console.log('Updated Cart:', cart); 
console.log('Total Cost:', totalCost()); 