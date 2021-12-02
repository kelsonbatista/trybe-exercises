const { describe, test, expect, beforeEach } = require('@jest/globals');
const { getGitHubUserInfos, getUserReposUrl } = require('./github');

// const { getGitHubUserInfos, getUserReposUrl } = github;

describe('quando chamada, a função getGitHubUserInfos', () => {
  const dadosRetornados = {
    name: 'Atanes',
    company: 'IridiumIT - Alexandre Atanes de Jesus',
    twitter: 'AAtanes',
    bio: 'More than 25 years teaching development skills, advanced knowledge in back and front end with Java, JavaScript, HTML, CSS, React, Angular',
    location: 'São Bernardo do Campo - SP',
  };

  beforeEach(async () => {
    return (resultado = await getGitHubUserInfos('atanes'));
  });

  test('deve retornar um objeto contendo name, company, twitter, bio, location', () => {
    expect(resultado).toEqual(dadosRetornados);
  });

  test('deve retornar um nome com a informação Atanes', async () => {
    expect(resultado.name).toBe('Atanes');
  });
});
