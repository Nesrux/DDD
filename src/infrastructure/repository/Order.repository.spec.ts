import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../db/sequelize/model/Customer.model";
import Customer from "../../domain/entity/Customer";
import Address from "../../domain/entity/Address";
import CustomerRepository from "./Customer.repository";
describe("Order repository test", () => {
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

});