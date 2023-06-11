import fetch from 'node-fetch';
import {config} from "../core/config.js";
import {UsersInterface} from "../interfaces/users.interface.js";

async function getUsers(): Promise<UsersInterface>{
    try {
        console.log(`getUsers | start`)
        const response = await fetch(`${config.BASE_URL}/users`);
        console.log(`getUsers | end`)
        return await response.json() as Promise<UsersInterface>;
    }catch (err) {
        console.error(`getUsers | error: ${JSON.stringify(err)}`)
        throw err;
    }
}

export const userProvider={
    getUsers,
}
