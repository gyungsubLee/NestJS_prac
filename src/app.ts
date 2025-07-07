console.log("🔥 앱 시작됨");

import express from "express";
import catRouter from "./cats/cats.route.js";

const app: express.Application = express();

console.log("✅ express 객체 생성");

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next();
});

/**  
 * json 미들웨어 설정
    해당 설정은 클라이언트가 보낸 JSON 형식의 요청 본문을
    자동으로 파싱하여 req.body에 저장한다.
*/
app.use(express.json());

// 라우터 등록
app.use(catRouter);

// 404 에러 핸들링
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
