/*
* Routes for image upload
* Let us assume we have multiple upload routes, we can just put them all here.
*/

import express from "express";
import { uploadMiddleware, uploadImage } from "../controller/uploadsController";

const router = express.Router();

router.post("/", uploadMiddleware, uploadImage);

export default router;