import Address from "./Address";

// Ctrl + T
class Customer {
  _id: string;
  _name: string;
  _address!: Address;
  _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  validate() {
    if (this._id == "" || this._id.length < 1) {
      throw new Error("Id é obrigatório");
    }
    if (this._name == "" || this._name.length < 1) {
      throw new Error("Id é obrigatório");
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
  set address(Address: Address) {
    this.address = this.address
  }

}
/**
 * Uma entidade sempre deve se auto validar
 */