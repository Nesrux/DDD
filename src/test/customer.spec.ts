import Customer from "../entity/Customer";

describe("Customer unit test", () => {


  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required")
  });

  it("shold change name", () => {
    const customer = new Customer("1", "marquinhos")
    customer.changeName("marcos")
    expect(customer.name).toBe("marcos")
  })

})