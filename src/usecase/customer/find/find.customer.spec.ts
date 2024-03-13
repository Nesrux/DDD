import { Sequelize } from "sequelize";
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/Customer.model";
import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/Customer.repository";
import CustomerFactory from "../../../domain/customer/factory/customer.factory";
import Address from "../../../domain/customer/value-object/Address";

describe("test find customer use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a customer", async () => {
    const customerRepository = new CustomerRepository();
    


    await customerRepository.create(custumer);
  })

})