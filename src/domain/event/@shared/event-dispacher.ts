import EventDispacherInterface from "./event-dispacher.interface";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDispacher implements EventDispacherInterface {

  private eventHandlers: { [eventName: string]: EventHandlerInterface[] } = {};

  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] } {
    return this.eventHandlers;
  }


  notify(event: EventInterface): void {
    throw new Error("Method not implemented.");
  }
  register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler)
  }
  unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
    throw new Error("Method not implemented.");
  }
  unregisterAll(): void {
    throw new Error("Method not implemented.");
  }

}