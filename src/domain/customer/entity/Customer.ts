import Entity from "../../@shared/entity/entity.abstract";
import Address from "../value-object/Address";

// Ctrl + T
export default class Customer extends Entity {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    super();
    this._id = id;
    this._name = name;
    this.validate();

    if (this.notification.hasErrors) {
      throw new Error(this.notification.messages());
    }
  }

  get id(): string {
    return this._id;
  }

  set address(address: Address) {
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints
  }

  get address(): Address {
    return this._address;
  }

  isActive(): boolean {
    return this._active;
  }

  validate() {
    if (this.id.length === 0) {
      this.notification.addError({
        context: "customer",
        message: "Id is required"
      })
    }
    if (this._name.length === 0) {
      this.notification.addError({
        context: "customer",
        message: "Name is required"
      })
    }
  }
  changeName(name: string) {
    this._name = name;
    this.validate()
  }
  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a custumer")
    }
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }
  changeAddress(address: Address) {
    this.address = address
  }

}

/**
 * Uma entidade sempre deve se auto validar
 */