const fetchGithub = async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  try {
    const promise = fetch(url);
    const response = await promise.json();
    console.log(response);
  } catch (error) {
    console.log(`Ocorreu um erro: ${error}`);
  }
}

fetchGithub();
