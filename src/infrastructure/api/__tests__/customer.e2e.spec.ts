import { app, sequelize } from "../express";
import request from "supertest";
describe("end to end test for customer", () => {

  beforeEach(async () => {
    await sequelize.sync({ force: true })
  })
  afterAll(async () => {
    await sequelize.close();
  })

  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "cleiton",
        address: {
          street: "street",
          number: 123,
          zip: "zip 123",
          city: "city"
        }
      })
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("cleiton");
    expect(response.body.address.street).toBe("street");
    expect(response.body.address.number).toBe(123);
    expect(response.body.address.zip).toBe("zip 123");
    expect(response.body.address.city).toBe("city")



  })
})