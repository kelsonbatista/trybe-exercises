
// objeto

let person = {
	fistName : 'Murilo',
	lastName : 'Flesch',
	agePerson : 36,
	canDrive : true,
	favoriteMovies : ['Interestellar', 'Matrix'],
  address: {
      street: 'Cristovao Colombo',
      number: 455,
  }
};

console.log(person.fistName);
console.log(person['fistName']); //outra forma de conotacao - colchetes
console.log(person.address.street);
