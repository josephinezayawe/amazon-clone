export const orders = JSON.parse(localStorage.getItem("orders")) || [];

export function addOrder(order) {
  orders.unshift(order);
  SaveToStorage();
}

function SaveToStorage() {
  localStorage.setItem("orders", JSON.stringify(orders));
}

document
  .querySelector(".js-place-holder")
  .addEventListener("click", async () => {
    try {
      const response = await fetch("https://supersimplebackend.dev/orders", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });
      const order = await response.json();
      addOrder(order);
    } catch (error) {
      console.log("unexpected error.try again later");
    }
    window.location.href = "orders.html";
  });
