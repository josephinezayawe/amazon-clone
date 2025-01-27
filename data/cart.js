export let cart=[];
export function addToCart (productId) {

    let matchingItem = cart.find((cartItem)=>cartItem.productId === productId);
    if(matchingItem) {
      matchingItem.quantity +=1
    } else{
      cart.push({
        productId:productId,
        quantity:1 
      });
    }
  };