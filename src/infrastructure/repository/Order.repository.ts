import Order from "../../domain/entity/Oder";
import OrderModel from "../db/sequelize/model/Order.model";
import OrderItemModel from "../db/sequelize/model/OrderItem.model";

export default class OrderRepository {

  async create(entity: Order): Promise<void> {
    await OrderModel.create({
      id: entity.id,
      customer_id: entity.customerId,
      items: entity.items.map((item) => ({
        id: item.id,
        price: item.price,
        name: item.name,
        product_id: item.productId,
        quantity: item.quantity
      })),
    }, { include: [{ model: OrderItemModel }] })
  }


}