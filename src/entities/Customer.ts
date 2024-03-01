// Ctrl + T
class Customer {
  _id: string;
  _name: string;
  _address: string;
  _active: boolean = false;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
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
    if (this._address == "") {
      throw new Error("Endereço é obrigatório para ativar o Cliente!")
    }
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }

}
/**
 * Uma entidade sempre deve se auto validar
 */