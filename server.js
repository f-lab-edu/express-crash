const express = require("express"); //express불러오기
const app = express(); //app 객체로 라우팅,미들웨어서버시작,포트수신대기 .. 작업들 처리

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World<h1>");
  res.send({ messege: "hello world" });
});

//서버실행
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
