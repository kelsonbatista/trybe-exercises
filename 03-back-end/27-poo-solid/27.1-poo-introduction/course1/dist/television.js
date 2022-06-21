"use strict";
class Tv {
    constructor(br, sz, res, conn) {
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
