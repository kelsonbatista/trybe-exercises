const github = require('./github');
const trybeSimulator = require('./trybeSimulator');

trybeSimulator(github, 'getGitHubUserInfos');
const { getGitHubUserInfos, getUserReposUrl } = github; 

describe('quando chamada, a função getGitHubUserInfos', () => {
  const dadosRetornados = {
    name: 'Matheus Alexandre',
    company: '@betrybe',
    twitter: undefined,
    bio: 'Web Development Student and \r\n' +
      'Summer Student at Trybe. Front-end: React, HTML, JS e CSS. #openToWork',
    location: 'Brazil',
  };

  beforeEach(async () => {
    return (resultado = await getGitHubUserInfos('Matheus Alexandre'));
  });

  test('deve retornar um objeto contendo name, company, twitter, bio, location', () => {
    expect(resultado).toEqual(dadosRetornados);
    expect(resultado.name).toBe('Matheus Alexandre');
  });

  test('deve retornar um nome com a informação Matheus Alexandre', async () => {
    expect(resultado.name).toBe('Matheus Alexandre');
  });
});