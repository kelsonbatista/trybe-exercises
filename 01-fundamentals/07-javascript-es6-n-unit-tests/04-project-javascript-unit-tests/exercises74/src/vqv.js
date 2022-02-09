const text = (firstName, age) => {
  if (!firstName || !age) return 'undefined';
  return `Oi, meu nome é ${firstName}!
  Tenho ${age} anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!`
}
// console.log(text('Jose', 35));
module.exports = text;