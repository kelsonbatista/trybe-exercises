const setCoins = async () => {
    const coins = await fetchCoins();
    const coinsList = document.getElementById('coins-list');

    coins.filter((coin) => Number(coin.rank) <= 15)
        .forEach((crypto) => {
            const newLi = document.createElement('li');
            newLi.className = 'crypto'; 
            newLi.innerText = `${crypto.name} ${crypto.symbol} ${crypto.priceUsd}`;
            coinsList.appendChild(newLi);
        });
    
    coinsList.addEventListener('click', (event) => {
        const newList = document.getElementById('new-list');
        newList.appendChild(event.target);
        localStorage.setItem('myFavoriteCryptos', newList.innerHTML); 
    });
}

window.onload = () => {
    setCoins();

    try {
        const newList = document.querySelector('#new-list'); 
        newList.innerHTML = localStorage.getItem('myFavoriteCryptos');
    } catch (error) {
        console.log(error);
    }
}
