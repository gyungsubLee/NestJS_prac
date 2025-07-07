import { Request, Response } from "express";
import { Cat, CatType } from "./cats.module.js";

export const createCat = (req: Request, res: Response) => {
  try {
    const data: CatType = req.body;
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
};

export const readAllCats = (req: Request, res: Response) => {
  try {
    res.status(200).send({
      success: true,
      data: { Cat },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

export const readCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cat: CatType | undefined = Cat.find((cat) => cat.id === id);

    if (!cat) {
      throw new Error("Cat not found");
    }

    res.status(200).send({
      success: true,
      data: { cat },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* [PUT] 특정 고양이 데이터 수정
export const updateCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: CatType = req.body;

    const index = Cat.findIndex((cat) => cat.id === id);
    if (index === -1) throw new Error("Cat not found");

    Cat[index] = body;
    const result = Cat[index];

    res.status(200).send({
      success: true,
      data: { result },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* [PATCH] 특정 고양이 데이터 부분 수정
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body: Partial<CatType> = req.body;

    const index = Cat.findIndex((cat) => cat.id === id);
    if (index === -1) throw new Error("Cat not found");

    Cat[index] = { ...Cat[index], ...body };
    const result = Cat[index];

    res.status(200).send({
      success: true,
      data: {
        cat: { result },
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

//* [DELETE] 특정 고양이 데이터 삭제
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: { newCat },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
