export default class Currency {
  constructor(code, name) {
    // This creates the objects
    this._code = code;
    this._name = name;
  }


  // These are the setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._name = newCode;
  }

  // These are the getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // These are the methods

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
