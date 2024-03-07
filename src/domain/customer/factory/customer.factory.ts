import Customer from "../entity/Customer";
import { v4 as uuid } from "uuid";
import Address from "../value-object/Address";
export default class CustomerFactory {

  static create(nome: string): Customer {
    return new Customer(uuid(), nome)
  }
  static createWhitAddress(name: string, address: Address): Customer {
    const customer = this.create(name);
    customer.address = address
  
    return customer;
  }

}