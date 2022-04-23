// const SHA256 = require('crypto-js/sha256');
const crypto = require('crypto');

const generateToken = (content) => {
  // console.log(content, 'content');
  // console.log(SHA256(content), 'sha256');

  // const algorithm = 'aes-256-ctr';
  // const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
  // const iv = crypto.randomBytes(16);
  // const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  // const encrypted = Buffer.concat([cipher.update(content), cipher.final()]);

  // return SHA256();
  return crypto.randomBytes(8).toString('hex');
  // return cipher;
}

module.exports = {
  generateToken,
}
