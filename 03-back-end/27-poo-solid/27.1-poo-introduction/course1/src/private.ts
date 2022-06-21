class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(n: string, h: number, w: number, a: number) {
    this.name = n;
    this._weight = w;
    this._age = a;
    this.height = h;
  }

  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

// Modifica variavel publica
p1.name = 'Mariah'
console.log(p1.name);

// chama metodo que retorna variavel privada
console.log(p1.getWeight());

// leitura metodo getter e faz leitura do privado
console.log(p2.age);

p2.birthday();
console.log(p2.age);

// escrita metodo setter e altera o privado
p2.age = 17;
console.log(p2.age);

// nao é possivel escrever em readonly mesmo sendo publico
// p1.height = 188;
console.log(p1.height);

// escrevendo no setter fora da validacao
p2.age = 300;
console.log(p2.age);

// acesso a atributo privado invalido
// p1._weight;

