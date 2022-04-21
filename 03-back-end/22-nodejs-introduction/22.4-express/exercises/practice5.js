const fs = require('fs').promises;
const express = require('express');
const app = express();

const getSimpsons = async (req, res) => {
  try {
    const simpson = await fs.readFile('simpsons.json', 'utf-8');
    console.log(simpson);
  } catch(error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

getSimpsons();
