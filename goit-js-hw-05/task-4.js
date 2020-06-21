class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    return this._value;
  }

  append(str) {
    this._value += str;
  }

  prepend(str) {
    const arraySymbols = this._value.split('');
    arraySymbols.unshift(str);
    this._value = arraySymbols.join('');
  }

  pad(str) {
    const arraySymbols = this._value.split('');
    arraySymbols.unshift(str);
    arraySymbols.push(str);
    this._value = arraySymbols.join('');
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
