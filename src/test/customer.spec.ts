import Address from "../entity/Address";
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

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

})