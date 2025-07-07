import { Cat, CatType } from "./cats.module.js";
import { Router } from "express";

const router = Router();

//* [POST] 고양이 데이터 생성
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data); // create
    res.status(201).send({
      success: true,
      data: { data },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* [GET] 고양이 전체 데이터 조회
router.get("/cats", (req, res) => {
  try {
    const cats: CatType[] = Cat;
    // throw new Error('db connect error');

    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* [GET] 특정 고양이 데이터 조회
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    // console.log( params);
    const cat: CatType | undefined = Cat.find((cat) => {
      return cat.id === params.id;
    });

    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* [PUT] 특정 고양이 데이터 수정
router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    const index = Cat.findIndex((cat) => cat.id === params.id);
    if (index !== -1) {
      Cat[index] = body;
      result = Cat[index]; // update
    }

    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* [PATCH] 특정 고양이 데이터 부분 수정
router.patch("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body }; // update
        result = cat;
      }
    });

    res.status(200).send({
      success: true,
      data: { cat: result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* [DELETE] 특정 고양이 데이터 삭제
router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id); // delete
    res.status(200).send({
      success: true,
      data: {
        newCat,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;
