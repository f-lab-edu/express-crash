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
  const limit = parseInt(req.query.limit); //postman에 http://localhost:8000/api/posts?limit=2 이런식으로 제한 확인 가능

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  // 제한 없을 때 _전체 목록
  res.status(200).json(posts);

  //   console.log(req.query);
  //   res.json(posts);
});

//Get single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id); //문자열 ->숫자로 //parseInt 오타 주의
  const post = posts.find((post) => post.id === id);

  //존재하지 않을 떄
  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the id of ${id} was not found` });
  }
  // 존재할때 _단일 게시글
  res.status(200).json(post);
  //   res.status(200).json(posts.filter((p) => p.id === id)); //위에 posts 객체의 id가 여기 전달된 id와 같은지 유무 확인
  //   console.log(req.params.id);
  //   res.json(posts);
});

//서버실행
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
