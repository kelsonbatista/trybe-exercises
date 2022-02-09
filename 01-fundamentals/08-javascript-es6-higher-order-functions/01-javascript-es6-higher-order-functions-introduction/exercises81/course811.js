const wakeup = () => {
  console.log('Acordando!!!');
}

const coffee = () => {
  console.log('Bora tomar café!!!');
}

const sleep = () => {
  console.log('Partiu dormir!!!');
}

const doingThings = (action) => action();

doingThings(sleep);