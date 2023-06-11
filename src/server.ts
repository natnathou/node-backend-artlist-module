import express from 'express';
import postsRoutes from "./routes/posts.router.js";
import usersRoutes from "./routes/users.router.js";
import {logTypeRequestMiddleware} from "./middlewares/log-type-request.middleware.js";

const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);


app.use(logTypeRequestMiddleware);
app.use(`/api/v1/posts/`, postsRoutes);
app.use(`/api/v1/users/`, usersRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
