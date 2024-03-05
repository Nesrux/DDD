import EventDispacherInterface from "./event-dispacher.interface";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDispacher implements EventDispacherInterface {
  notify(event: EventInterface): void {
    throw new Error("Method not implemented.");
  }
  register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
    throw new Error("Method not implemented.");
  }
  unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
    throw new Error("Method not implemented.");
  }
  unregisterAll(): void {
    throw new Error("Method not implemented.");
  }

}