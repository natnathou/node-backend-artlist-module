import {UserInterface, UsersInterface} from "../interfaces/users.interface.js";
import {userProvider} from "../providers/users.provider.js";

async function getUserWithLongestName(): Promise<UserInterface | null>{
    try {
        console.log(`getUserWithLongestName | start`)
        const users = await userProvider.getUsers();
        let maxTitleLength = 0;
        let userWithLongestTitle:UserInterface | null = null ;

        users.forEach(u=>{
            if(u.name.length >maxTitleLength){
                maxTitleLength =  u.name.length;
                userWithLongestTitle = u;
            }
        })

        console.log(`getUserWithLongestName | end`)
        return userWithLongestTitle;
    }catch (err) {
        console.error(`getUserWithLongestName | error: ${JSON.stringify(err)}`)
        throw err;
    }
}
export const usersService={
    getUserWithLongestName,
}
