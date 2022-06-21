class Tv2 {
  private _brand: string;
  private _size: number;
  private _resolution: number;
  private _connections: string;
  private _connectedTo?: string;

  constructor(br: string, sz: number, res: number, conn: string) {
    this._brand = br;
    this._size = sz;
    this._resolution = res;
    this._connections = conn;
  }

  turnOn() {
    console.log(`
      TV Marca: ${this._brand}\n
      Tamanho: ${this._size}\n
      Resolução: ${this._resolution}\n
      Conexões: ${this._connections}
    `);
  }

  get connectedTo() {
    if (this._connectedTo) return this._connectedTo;
  }

  set connectedTo(device: string) {
    const check = this._connections.includes(device);
    if (check) {
      this._connectedTo = device;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    } 

  }
}

const tv12 = new Tv2('Samsung', 52, 4000, 'HDMI, USB, VGA');

tv12.turnOn();

tv12.connectedTo = 'USB';
console.log(tv12);
