const fetch = require('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGitHubUserInfos = async (username) => {
  const url = getUserReposUrl(username);

  try {
    const result = await fetch(url);
    const data = await result.json();
  } catch (error) {
    console.log(error)
  }

  const { name, company, twitter_username: twitter, bio, location } = data;
  return {
    name,
    company,
    twitter,
    bio,
    location,
  };
};

module.exports = {
  getGitHubUserInfos,
  getUserReposUrl,
};