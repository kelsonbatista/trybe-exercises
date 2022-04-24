const express = require('express')();
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

const handleError = (error, req, res, next) => {
  return res.status(500).json({ "message": "Error 500: Internal Server Error" });
}

express.get('/posts', getPosts);

express.get('/posts/:id', getPost);

express.use(handleError);

express.listen(port, () => {
  console.log(`App running at ${port}`);
})