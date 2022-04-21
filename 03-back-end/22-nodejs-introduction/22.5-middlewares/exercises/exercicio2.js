const express = require('express')();
const axios = require('axios');
const port = 3001;
const URL = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const authMiddleware = (req, res, next) => {
  const { token } = req.headers;
  const regex = /([A-Za-z0-9]{12})/i;
  if(!token.match(regex)) {
    return res.status(401).json({ "message": "Não autorizado" })
  }
  next();
}

const getBtcMiddleware = async (req, res, _next) => {
  try {
    const response = await axios.get(URL);
    return res.status(200).json(response.data);
  } catch(error) {
    return res.status(401).json({ "message": `Error: ${error}`});
  }
}

express.get('/btc/price', authMiddleware, getBtcMiddleware);

express.listen(port, () => {
  console.log(`Application running at port ${port}`);
})
