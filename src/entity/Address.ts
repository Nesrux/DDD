export default class Address {
  _street: string;
  _number: number;
  _zip: string;
  _city: string;
  _active: boolean = false;

  constructor(street: string, number: number, zip: string, city: string, country: string) {
    this._street = street,
      this._number = number,
      this._zip = zip;
    this._city = city;
    this.validate();
  }

  validate() {
    if (this._number === 0 || this._number < 0) {
      throw new Error("Número tem que ser valido");
    }
    if (this._street === "") {
      throw new Error("Rua tem que ser valido");
    }
    if (this._city === "") {
      throw new Error("cidade tem que ser valido");
    }
    if (this._zip === "") {
      throw new Error("Código zip tem que ser valido");
    }

  }
  toString() {
    return `${this._street}, ${this._city} and ${this._number} whith code ${this._zip}`
  }


}