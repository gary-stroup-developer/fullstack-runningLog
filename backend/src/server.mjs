// import express from 'express';
// import { routes } from './routers/routes.mjs';
// import { initializeDBConnection } from './db.mjs';

// const PORT = process.env.PORT || 8080;

// //initialize the app and set up ability to extract JSON object through req.body 
// const app = express();
// app.use(express.json());

// //import the routes
// routes.forEach(route => {
//     app[route.method](route.path,route.handler);
// })

// //set up the db
// initializeDBConnection().then(() => {
//     app.listen(PORT, () => {
//         console.log(`app running on port ${PORT}`);
//     })
// });

import express from 'express';
import { routes } from './routers/routes.mjs';
import { initializeDbConnection } from './db.mjs';

const PORT = process.env.PORT || 8080;

const app = express();

// This allows us to access the body of POST/PUT
// requests in our route handlers (as req.body)
app.use(express.json());

// Add all the routes to our Express server
// exported from routes/index.js
routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

// Connect to the database, then start the server.
// This prevents us from having to create a new DB
// connection for every request.
initializeDbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    });

