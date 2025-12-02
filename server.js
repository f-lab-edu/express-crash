const { log } = require("console");
const express = require("express"); //express불러오기
const path = require("path");
const port = process.env.PORT || 8000;

const app = express(); //app 객체로 라우팅,미들웨어서버시작,포트수신대기 .. 작업들 처리

//setup static folder 정적 폴더로 처리
// app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];
//Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

//Get single post
app.get("/api/posts/:id", (req, res) => {
  console.log(req.params);
  res.json(posts);
});

//서버실행
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
