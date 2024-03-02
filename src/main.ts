import Address from "./entities/Address";
import Customer from "./entities/Customer";
import Order from "./entities/Oder";
import OrderItem from "./entities/Order_Item";

// Customer aggregate
let custumer = new Customer("123", "jaumm")
const addres = new Address("rua dois", 2, "123456789", "sao paulo", "são sebastiao");
custumer.address = addres;
custumer.activate;

// Order aggregate
const item1 = new OrderItem("1", "item 1", 10);
const item2 = new OrderItem("2", "item 2", 15);
const order = new Order("1", "123", [item1, item2]);