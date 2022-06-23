class Client {
  private _name: string;
  
  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
  }
}

class OrderItem {
  private _item: string;
  private _price: number;

  constructor(item: string, price: number) {
    this._item = item;
    this._price = price;
  }

  public get item(): string {
    return this._item;
  }

  public set item(value: string) {
    this._item = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    this._price = value;
  }
}

class Order {
  private _client: string;
  private _items: OrderItem[] = [];
  private _payment: string;
  private _discount: number;

  constructor(client: string, items: OrderItem[], payment: string, discount: number) {
    this._client = client;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  public get client(): string {
    return this._client;
  }

  public set client(value: string) {
    this._client = value;
  }

  public get items(): OrderItem[] {
    return this._items;
  }

  public set items(value: OrderItem[]) {
    this._items = value;
  }

  public get payment(): string {
    return this._payment;
  }

  public set payment(value: string) {
    this._payment = value;
  }

  public get discount(): number {
    return this._discount;
  }

  public set discount(value: number) {
    this._discount = value;
  }

  public calcTotal(): number {
    return this.items.reduce((prevItem, item) => {
      prevItem += item.price;
      return Number(prevItem.toFixed(2));
    }, 0);
  }

  public calcTotalWithDiscount(): string {
    const total = this.calcTotal();
    const value = Number((total - (total * this.discount)).toFixed(2));
    return `${value} - ${this.discount * 100}% de desconto`;
  }
}

const client = new Client('Joao');

const item1 = new OrderItem('Mamão', 5.90);
const item2 = new OrderItem('Banana', 11.50);
const item3 = new OrderItem('Maça', 3.99);
const item4 = new OrderItem('Melancia', 9.70);

const order = new Order(client.name, [item1, item2, item3, item4], 'dinheiro', 0.10);

console.log(order.calcTotal());
console.log(order.calcTotalWithDiscount());
