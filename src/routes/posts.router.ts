import { Router } from 'express';
import {postsController} from "../controllers/posts.controller.js";

const postsRoutes = Router();

postsRoutes.post('/withLongestTitle', postsController.getPostWithLongestTitle);

export default postsRoutes;
