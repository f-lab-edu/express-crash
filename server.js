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
  console.log(req.query);
  res.json(posts);
});

//Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id); //문자열 ->숫자로 //parseInt 오타 주의
  res.json(posts.filter((p) => p.id === id)); //위에 posts 객체의 id가 여기 전달된 id와 같은지 유무 확인
  //   console.log(req.params.id);
  //   res.json(posts);
});

//서버실행
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
