import fetch from "node-fetch";
import {config} from "../core/config.js";
import {PostsInterface} from "../interfaces/posts.interface.js";

async function getPost(): Promise<PostsInterface>{
    try {
        console.log(`getPost | start`)
        const response = await fetch(`${config.BASE_URL}/posts`);
        console.log(`getPost | end`)
        return await response.json() as Promise<PostsInterface>;
    }catch (err) {
        console.error(`getPost | error: ${JSON.stringify(err)}`)
        throw err;
    }
}

export const postProvider={
    getPost,
}
