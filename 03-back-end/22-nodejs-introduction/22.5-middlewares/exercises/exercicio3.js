const app = require('express')();
const port = 3001;

const posts = [
  { "id": 1, "post": "aaaaaaaaaaaa" },
  { "id": 2, "post": "bbbbbbbbbbbb" },
  { "id": 3, "post": "cccccccccccc" },
  { "id": 4, "post": "dddddddddddd" },
  { "id": 5, "post": "eeeeeeeeeeee" }
];

// express.use(express.json());

const getPosts = (_req, res) => {
  if(posts.length) return res.status(200).json(posts);
  return res.status(200).json({ "post": [] })
}

const getPost = (req, res) => {
  const { id } = req.params;
  const idSearch =  posts.find((post) => post.id === JSON.parse(id));
  if (!idSearch) return res.status(404).json({ "message": "Post not found!"});
  return res.status(200).json(idSearch.post);
}

const handleError = (err, req, res, next) => {
  const msg = err.message;
  if(msg === 'Route Not Found') {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
  }
  return res.status(500).json({ "message": "Error 500: Internal Server Error" });
}

app.get('/posts', getPosts);

app.get('/posts/:id', getPost);

app.all('*', (_req, _res) => {
  throw new Error('Route Not Found');
});

app.use(handleError);

app.listen(port, () => {
  console.log(`App running at ${port}`);
})
