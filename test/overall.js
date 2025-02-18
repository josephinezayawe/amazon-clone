import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

dayjs();
describe("cartFunctions"),
  function () {
    it("should add an item to the cart", function () {
      cart.push({
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2,
      });
      expect(cart.length).toBe(1);
    });
  };
