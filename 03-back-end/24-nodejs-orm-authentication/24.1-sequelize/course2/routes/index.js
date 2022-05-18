const express = require('express');
const booksRouter = require('./bookRouter');

const router = express.Router();

router.use('/books', booksRouter);

module.exports = router;
