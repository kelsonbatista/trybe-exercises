const books = {
  collection: 'The Lord of the Rings',
  book1: 'The Fellowship',
  book2: 'Two Towers',
  book3: 'Return of the King',
 };
 
// const number1 = 10;
// const number2 = number1;
// console.log(number2);

// Copiando com atribuição (sinal de = )
// const newBook = books;
// console.log(newBook);

// newBook.collection = 'The Lord of the Rings - The best';
// console.log(books); // São o mesmo objeto

// const NÃO é tão constante assim
// books.collection = 'Não mude, please';
// console.log(books);

// Copiando corretamente com Object.assign(target, source)
// const newBook = Object.assign({}, books);
// console.log(newBook);

// newBook.collection = 'The Lord of the Rings - The best';
// console.log(books); // NÃO são o mesmo objeto

// Copiando de um objeto para outro objeto
// const bookAuthor = {
//   authorName: 'J. R. R. Tolkien',
// };

// Object.assign(books, bookAuthor);
// console.log(books);

// Problema de copia - shallow copy (cópia rasa)
books.publisher = {
  name: 'Martins Fontes',
  address: 'Rua XYZ, 123',
};
const newBook = Object.assign({}, books);
// console.log(newBook);

newBook.book3 = 'Harry Potter';
// console.log(books);

newBook.publisher.address = 'Rua ABC';
console.log(books);
