import {postsService} from "../services/posts.service.js";
import { Request, Response } from 'express';


async function getPostWithLongestTitle(req: Request, res: Response){
    try {
        console.log(`getPostWithLongestTitle | start`)
        const response = await  postsService.getPostWithLongestTitle();
        console.log(`getPostWithLongestTitle | end`)
        return res.status(200).json(response);
    }catch (err){
        console.log(`getPostWithLongestTitle | err: ${JSON.stringify(err)}`)
        res.status(500).json(err);
    }
}

export const postsController={
    getPostWithLongestTitle,
}
