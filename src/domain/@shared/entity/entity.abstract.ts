import Notification from "../notification/notification";

export default abstract class Entity {
  protected notification: Notification;
  protected _id: string;

  constructor() {
    this.notification = new Notification;
  }
  get id(): string {
    return this._id
  }
}