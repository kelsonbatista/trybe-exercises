class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

class OrderItem {
  private _items: {}[] = Array();

  constructor(items: {}[]) {
    this._items = items;
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
}
