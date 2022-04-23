const express = require('express');
const port = 3001;
const app = express();

app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  const checkUsername = username.length > 3;
  const regexEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
  const checkEmail = regexEmail.test(email);
  const regexPassword = /^[0-9]{3,16}$/;
  const checkPassword = regexPassword.test(password);

  if(!(checkUsername && checkEmail && checkPassword)) {
    return res.status(400).json({ message: 'invalid data' });
  }
  return res.status(200).json({ message: 'user created' });
})

app.listen(port, () => console.log(`App running at port ${port}`));
