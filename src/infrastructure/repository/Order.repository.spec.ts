import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../db/sequelize/model/Customer.model";
import Customer from "../../domain/entity/Customer";
import Address from "../../domain/entity/Address";
import CustomerRepository from "./Customer.repository";
import OrderModel from "../db/sequelize/model/Order.model";
import OrderItemModel from "../db/sequelize/model/OrderItem.model";
import ProductModel from "../db/sequelize/model/Product.model";
import ProductRepository from "./Product.repository";
import Product from "../../domain/entity/Product";
import OrderItem from "../../domain/entity/Order_Item";
import Order from "../../domain/entity/Oder";
import OrderRepository from "./Order.repository";
describe("Order repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("shold create a new Order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1")
    const address = new Address("rua 1", 1, "codigo 1", "cidade 1")
    customer.changeAddress(address);
    await customerRepository.create(customer)

    const productRepository = new ProductRepository();
    const product = new Product("123", "product 1", 100);
    await productRepository.create(product);

    const orderItem = new OrderItem("1", product.name, product.price, product.id, 2)

    const order = new Order("123", customer.id, [orderItem])

    const orderRepository = new OrderRepository();
    await orderRepository.create(order)

    const orderModel = await OrderModel.findOne({ where: { id: order.id }, include: ["items"] });

    expect(orderModel.toJSON()).toStrictEqual({
      id: "123",
      customer_id: customer.id,
      items: [{
        id: orderItem.id,
        name: orderItem.name,
        price: orderItem.price,
        quantity: orderItem.quantity,
        product_id: product.id
      }],
      total: order.total(),
    });
  });

});