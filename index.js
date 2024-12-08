const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/new", (req, res) => {
  res.send("new Hello World!");
});
app.get("/get2", (req, res) => {
  res.send("new2 Hello World!");
});

app.get("/posts", (req, res) => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];
  res.json(posts);
});
app.get("/render", (req, res) => {
    res.send(
      "<html><head><title>res.render() Demo</title></head><body><h2>Welcome to GeeksforGeeks</h2></body></html>"
    );
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });