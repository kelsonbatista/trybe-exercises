const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3001;

app.use(express.json());

const postTeam = async (req, res, next) => {
  const { name, initials, country, league } = req.body;

  if(!(name && initials && country && league)) {
    return res.status(404).json({ message: "invalid data" });
  }

  try {
    const readTeams = await fs.readFile('./teams.json', 'utf-8')
      .then(content => JSON.parse(content));
    readTeams.push(req.body);
    await fs.writeFile('./teams.json', JSON.stringify(readTeams));
  } catch(error) {
    res.status(404).json({ message: "File not found!" });
    await fs.writeFile('./teams.json', JSON.stringify([]));
  }
 
  return res.status(200).json(req.body);
}

const getTeams = async (req, res) => {
  try {
    const readTeams = await fs.readFile('./teams.json', 'utf-8')
      .then(content => JSON.parse(content));
    const teams = readTeams.some((team) => team.name);
    if(!teams) return res.status(200).json({ teams: [] })
    return res.status(200).json(readTeams);
  } catch(error) {
    return res.status(500).json({ message: "Error 500 - Internal Server Error"})
  }
}

app.post('/teams', postTeam)

app.get('/teams', getTeams)

app.listen(port, () => console.log(`App running at port ${port}`));
