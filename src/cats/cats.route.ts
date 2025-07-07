import { Router } from "express";
import { NextFunction } from "express-serve-static-core";
import {
  createCat,
  readAllCats,
  readCat,
  updateCat,
  updatePartialCat,
  deleteCat,
} from "./cats.service.js";

const router = Router();

router.post("/cats", createCat);
router.get("/cats", readAllCats);
router.get("/cats/:id", readCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);

export default router;
