class Cart {
  cartItems = undefined;
  #localStoragekey = undefined;

  constructor(localStoragekey) {
    this.#localStoragekey = localStoragekey;

    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStoragekey));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 0,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 0,
          deliveryOptionId: "2",
        },
      ];
    }
  }
  SaveToStorage() {
    localStorage.setItem(this.#localStoragekey, JSON.stringify(this.cartItems));
  }
  addToCart(productId) {
    let matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
    this.SaveToStorage();
  }
  removeFromCart(productId) {
    const newcart = [];
    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    if (container) {
      container.remove();
    }

    this.cartItems = newcart;
    this.SaveToStorage();
  }
  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.SaveToStorage();
  }
}

const cart = new Cart("cartitem");
const businessCart = new Cart("businesscart");

console.log(cart);
console.log(businessCart);
