class Tv {
  brand: string;
  size: number;
  resolution: number;
  connections: string;
  connectedTo?: string;

  constructor(br: string, sz: number, res: number, conn: string) {
    this.brand = br;
    this.size = sz;
    this.resolution = res;
    this.connections = conn;
  }

  turnOn() {
    console.log(`
      TV Marca: ${this.brand}\n
      Tamanho: ${this.size}\n
      Resolução: ${this.resolution}\n
      Conexões: ${this.connections}
    `);
  }
}

const tv1 = new Tv('Samsung', 52, 4000, 'HDMI, USB, VGA');

tv1.turnOn();

