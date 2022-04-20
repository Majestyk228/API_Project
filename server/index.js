// * IMPORTS
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contactRoutes.js');
const stateRouter = require('./routes/stateRoutes.js');
const contactListRouter = require('./routes/contactListRoutes.js');
const listRouter = require('./routes/listRoutes.js');
const messageRouter = require('./routes/messageRoutes.js');
const modelRouter = require('./routes/modelRoutes.js');
const statsRouter = require('./routes/statsRoutes.js');
const tokenRouter = require('./routes/tokenRoutes.js');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js');



// * Tools
dotenv.config();

// * APP
const app = express();
const port = process.env.PORT || 3000;

// * MIDDLEWARES
app.use(bodyParser.json());
app.use("/contacts", contactRouter);
app.use("/state", stateRouter);
app.use("/contactList", contactListRouter);
app.use("/list", listRouter);
app.use("/messages", messageRouter);
app.use("/model", modelRouter);
app.use("/stats", statsRouter);
app.use("/token", tokenRouter);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(docs));

//importing and executing cron task
require('../cron/cronTask.js')();

// * SERVER LISTENING
app.listen(port, () => {
    console.log("/!\\ Port '" + port + "' en écoute /!\\");
})
