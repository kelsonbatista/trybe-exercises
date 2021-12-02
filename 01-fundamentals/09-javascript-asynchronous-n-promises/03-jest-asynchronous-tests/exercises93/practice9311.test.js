// githubApi.test.js

const fetch = require('node-fetch');

const url = 'https://api.github.com/orgs/tryber/repos';
const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
describe('Teste de verificação de respositórios', () => {
  it('verify respository sd-01-week4-5-project-todo-list', () {

  });
});