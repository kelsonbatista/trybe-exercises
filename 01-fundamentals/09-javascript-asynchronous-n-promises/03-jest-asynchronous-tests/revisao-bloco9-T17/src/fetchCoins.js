const fetchCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((jsonObj) => jsonObj.data)
        .catch((error) => error.toString());
    
    return coins;
}

fetchCoins();

if (typeof module !== 'undefined') {
    module.exports = {
        fetchCoins,
    };
}
