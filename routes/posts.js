import express from "express"; //ES Modules] 최신 JS 방식, 설정 필요
// const express = require("express"); //CommonJS] Node 기본, 설정 필요 없음
const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];
//Get all posts
router.get("/", (req, res) => {
  //경로 중복 않기 위해 /로 변경
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
router.get(":id", (req, res) => {
  //경로 중복 않기 위해 :id로 변경
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

export default router;
