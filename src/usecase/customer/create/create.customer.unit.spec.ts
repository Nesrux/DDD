import CreateCustomerUseCase from "./create.customer.usecase";

const input = {
  name: "jhon",
  address: {
    street: "street",
    number: 123,
    zip: "zip",
    city: "city"
  }
}
const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  }
};

describe("unit Test create custumer use case", () => {

  it("should create a customer ", async () => {
    const costumerRepository = MockRepository();
    const customerCreateUseCase = new CreateCustomerUseCase(costumerRepository);

    const output = await customerCreateUseCase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      address: {
        street: input.address.street,
        number: input.address.number,
        zip: input.address.zip,
        city: input.address.city
      }
    })
  })

  it("should throw an error when name is missing", async () => {
    const costumerRepository = MockRepository();
    const customerCreateUseCase = new CreateCustomerUseCase(costumerRepository);

    input.name = "";
    await expect(customerCreateUseCase.execute(input)).rejects.toThrow("Name is required");

  })

  it("should throw an error when street is missing", async () => {
    const costumerRepository = MockRepository();
    const customerCreateUseCase = new CreateCustomerUseCase(costumerRepository);

    input.address.street = "";
    await expect(customerCreateUseCase.execute(input)).rejects.toThrow("Street is required");

  })
})