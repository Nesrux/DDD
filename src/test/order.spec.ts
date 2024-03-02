import Order from "../entity/Oder"
import OrderItem from "../entity/Order_Item";

describe("order unit test", () => {
  it("shold throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "1", [new OrderItem("a1", "product1", 10)]);
    }).toThrowError("Id is required");

  })

  it("shold throw error when CustumerId is empty", () => {
    expect(() => {
      let order = new Order("1", "", [new OrderItem("a1", "product1", 10)]);
    }).toThrowError("CustumerId is required");
  })


  it("shold throw error when lenght is 0", () => {
    expect(() => {
      let order = new Order("1", "1", []);
    }).toThrowError("itens are required ");
  })
  it("shold calculate total", () => {
    const item = new OrderItem("1", "item1", 180)
    const item2 = new OrderItem("2", "item2", 80)
    const item3 = new OrderItem("3", "item3", 50)
    const totalPrice = item.price + item2._price + item3.price;

    const order = new Order("a1", "b1", [item, item2, item3])
    const total = order.total();

    expect(total).toBe(totalPrice)

  })


})