import { Sequelize } from "sequelize-typescript"

describe("product repository test", () => {
  let sequileze: Sequelize;
  beforeEach(async () => {
    sequileze = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true }
    });

    afterEach(async () => {
      await sequileze.close();
    })
  })

})