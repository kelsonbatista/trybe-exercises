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
      Conexões: ${this._connections}\n
      Conectar: ${this._connectedTo}
    `);
  }

  get connectedTo() {
    if (this._connectedTo) return this._connectedTo;
    return '';
  }

  set connectedTo(device: string) {
    const check = this._connections.toLowerCase().includes(device.toLowerCase());
    if (check) {
      this._connectedTo = device;
    } else {
      this._connectedTo = `Sorry, connection ${device.toUpperCase()} unavailable!`;
    } 
    console.log(this._connectedTo);
  }
}

const tv12 = new Tv2('Samsung', 52, 4000, 'HDMI, USB, VGA');

tv12.turnOn();

tv12.connectedTo = 'VGA';
tv12.turnOn();
