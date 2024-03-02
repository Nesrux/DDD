import Address from "./Address";

// Ctrl + T
export default class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  set Address(address: Address) {
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  isActive(): boolean {
    return this._active;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length <= 0) {
      throw new Error("Name is required");
    }
  }
  changeName(name: string) {
    this._name = name;
    this.validate()
  }
  activate() {
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }
}
/**
 * Uma entidade sempre deve se auto validar
 */