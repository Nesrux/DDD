describe("domain events test", () => {
  it("should register an event handler", () => {
    const eventDispacher = new EventDispacher();
    const eventHandler = new SendEmailWhenProductIsHandler();

    eventDispacher.register("ProductCreatedEvent", eventHandler);

    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"]).toBeDefined()
    expect(eventDispacher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
  });
});