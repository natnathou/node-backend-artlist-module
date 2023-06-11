import {Request, Response, NextFunction} from "express";

export async function logTypeRequestMiddleware(req: Request, res: Response, next: NextFunction){
    console.log(`url: ${req.url}`);
    console.log(`method: ${req.method}`);
    next();
}
