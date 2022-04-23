const express = require('express');
const crypto = require('crypto');
// const rescue = require('express-rescue');
const port = 3001;
const app = express();

app.use(express.json());

const generateToken = (content) => {
  return crypto.randomBytes(6).toString('hex');
}

const validateInfo = (req, res, next) => {
  try {
    const { username } = req.body;
    const { email, password } = req.body;
    const checkUsername = username && username.length > 3;
    const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
    const checkEmail = email && regexEmail.test(email);
    const regexPassword = /^[0-9]{4,8}$/;
    const checkPassword = password && regexPassword.test(password);

    const verify = username === undefined
      ? (!checkUsername && !(checkEmail && checkPassword))
      : (!(checkUsername && checkEmail && checkPassword));

    if(verify) return res.status(400).json({ message: "invalid data" });
      //return res.status(200).json({ message: "user created" });
  } catch(error) {
      return res.status(500).json({ message: `Error 500 - Internal Server Error - ${error}` });
  }
  next();
}

app.post('/user/register', validateInfo);

app.post('/user/login', validateInfo, (_req, res) => {
    try {
      const token = generateToken();
      return res.status(200).json({ token: `${token}` });
    } catch(error) {
      return res.status(500).json({ message: "Error 500 - Internal Server Error"})
    }
})

app.listen(port, () => console.log(`App running at port ${port}`));
