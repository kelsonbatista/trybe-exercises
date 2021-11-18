const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dmax = dragon.strength;
const dmin = 15;
const wmax = warrior.strength * warrior.weaponDmg;
const wmin = warrior.strength;
const mmax = mage.intelligence * 2;
const mmin = mage.intelligence;

const damageDragon = () => Math.floor(Math.random() * (dmax - dmin + 1)) + dmin;
const damageWarrior = () => Math.floor(Math.random() * (wmax - wmin + 1)) + wmin;
const damageMage = () => Math.floor(Math.random() * (mmax - mmin + 1)) + mmin;

const theMage = (callback, object) => {
  if (object.mage.mana < 15) {
    object.mage.damage = 'Não possui mana suficiente';
  } else {
    object.mage.mana -= 15;
    object.mage.damage = callback();
  }
  return { dano: object.mage.damage , mana: object.mage.mana }
};

console.log(theMage(damageMage, battleMembers));

const gameActions = { warriorTurn }

const warriorTurn = (damageWarrior) => {}