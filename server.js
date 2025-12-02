import express from "express";
import path from "path";
import posts from "./routes/posts.js";
// const express = require("express"); //express불러오기
// const path = require("path");
// const posts = require("./routes/posts"); //오타 주의 post❌, routes폴더의 posts를 읽어라~
const port = process.env.PORT || 8000;

const app = express(); //app 객체로 라우팅,미들웨어서버시작,포트수신대기 .. 작업들 처리

//setup static folder 정적 폴더로 처리
// app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/posts", posts);

//서버실행
app.listen(port, () => {
  console.log("Server is running on port 8000");
});
