import express from 'express';
import { routes } from './routers/routes.mjs';
import { initializeDBConnection } from './db.mjs';

const PORT = process.env.PORT || 8080;

//initialize the app and set up ability to extract JSON object through req.body 
const app = express();
app.use(express.json());

//import the routes
routes.forEach(route => {
    app[route.method](route.path,route.handler);
})

//set up the db
initializeDBConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`app running on port ${PORT}`);
    })
});

