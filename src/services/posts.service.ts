import {PostInterface} from "../interfaces/posts.interface.js";
import {postProvider} from "../providers/posts.provider.js";

async function getPostWithLongestTitle(): Promise<PostInterface | null>{
    try {
        console.log(`getPostWithLongestTitle | start`)
        const posts = await postProvider.getPost();
        let maxTitleLength = 0;
        let postWithLongestTitle:PostInterface | null = null ;

            posts.forEach(p=>{
            if(p.title.length >maxTitleLength){
                maxTitleLength =  p.title.length;
                postWithLongestTitle = p;
            }
        })

        console.log(`getPostWithLongestTitle | end`)
        return postWithLongestTitle;
    }catch (err) {
        console.error(`getPostWithLongestTitle | error: ${JSON.stringify(err)}`)
        throw err;
    }
}
export const postsService={
    getPostWithLongestTitle,
}
