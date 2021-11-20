import express from 'express';
import { routes } from './routers/routes.mjs';
import { createDBCollection, initializeDBConnection } from './db.mjs';

const PORT = process.env.PORT || 8080;

//initialize the app
const app = express();
app.use(express.json());

//import the routes

routes.forEach(route => {
    app[route.method](route.path,route.handler);
})

//set up the db
createDBCollection();

initializeDBConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`app running on port ${PORT}`);
    })
});

