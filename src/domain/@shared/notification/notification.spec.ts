import Notification from "./notification";

describe("unit test for notification", () => {

  it("should create erros", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    }
    notification.addError(error);

    expect(notification.messages("customer")).toBe("customer: error message,");

    const error2 = {
      message: "error message2",
      context: "customer",
    }

    notification.addError(error2)
    expect(notification.messages("customer")).toBe("customer: error message,customer: error message2,");

    const error3 = {
      message: "error message3",
      context: "Order",
    }

    notification.addError(error3)
    expect(notification.messages("customer")).toBe("customer: error message,customer: error message2,");

    expect(notification.messages()).toBe("customer: error message,customer: error message2,Order: error message3,");


  })

  it("should check if notification has at least one error", () => {
    const notification = new Notification();
    const error = {
      message: "error message",
      context: "customer",
    }
    notification.addError(error);

    expect(notification.hasErrors()).toBe(true);
  })
});