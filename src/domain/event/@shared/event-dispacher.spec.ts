import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-Email-When-Product-Is-created-Handler";
import EventDispacher from "./event-dispacher";

describe("domain events test", () => {
  it("should register an event handler", () => {
    const eventDispacher = new EventDispacher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
  });
});