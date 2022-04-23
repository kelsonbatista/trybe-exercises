const { generateToken } = require('../utils-token');

const signupMiddleware = (req, res) => {
  const { email, password, firstName, phone } = req.body;
  // console.log(password, 'password',  password === '', 'isEmpty');
  if(!email || email === '') throw new Error('Error email');
  else if(!password || password === '') throw new Error('Error password');
  else if(!firstName || firstName === '') throw new Error('Error firstName');
  else if(!phone || phone === '') throw new Error('Error phone');

  // const concatEmailPass = email.concat(password.toString());
  // console.log(concatEmailPass);
  const token = generateToken();
  return res.status(200).json({ token: `${token}` });
}

module.exports = {
  signupMiddleware,
}
