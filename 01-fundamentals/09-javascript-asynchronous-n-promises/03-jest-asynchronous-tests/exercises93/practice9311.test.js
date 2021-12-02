// githubApi.test.js
const { describe, test, expect, beforeEach } = require('@jest/globals');
const fetch = require('node-fetch');

const url = 'https://api.github.com/orgs/tryber/repos';
const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
describe('Teste de verificação de respositórios', () => {
  it('verify respository sd-01-week4-5-project-todo-list', async () => {
    const result = await getRepos(url);
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});