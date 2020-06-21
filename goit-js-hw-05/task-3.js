class Storage {
  constructor(object) {
    this.items = object;
  }

  getItems() {
    console.log(this.items);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemForDelete) {
    const position = this.items.includes(itemForDelete);
    this.items.splice(position, 1);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems(); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
