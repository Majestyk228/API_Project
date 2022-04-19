// * IMPORTS
const mysql = require('mysql2');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const contactRouter = require('./routes/contactRoutes.js');
const stateRouter = require('./routes/stateRoutes.js');
const sendRouter = require('./routes/sendRoutes.js');
const contactListRouter = require('./routes/contactListRoutes.js');
const listRouter = require('./routes/listRoutes.js');
const messageRouter = require('./routes/messageRoutes.js');
const modelRouter = require('./routes/modelRoutes.js');
const statsRouter = require('./routes/statsRoutes.js');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js');
const cron = require('node-cron');
const axios = require('axios');


// * Tools
dotenv.config();

//APP
const app = express();
const port = process.env.PORT || 3000;

// * Middlewares
app.use(bodyParser.json());
app.use("/contacts", contactRouter);
app.use("/state", stateRouter);
app.use("/send", sendRouter);
app.use("/contactList", contactListRouter);
app.use("/list", listRouter);
app.use("/messages", messageRouter);
app.use("/model", modelRouter);
app.use("/stats", statsRouter);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(docs));

// * Écoute du serveur
app.listen(port, () => {
    console.log("Port '" + port + "' en écoute");
    // Schedule tasks to be run on the server.
    cron.schedule('3 * * * * *', function () {
        //console.log('running a task every second');

        axios.get('http://localhost:3000/messages').then(resp => {
            console.log(resp.data);
            resp.data.forEach(element => {
                axios.put("http://localhost:3000/messages/send", { "id": element.id, "id_state": 3 });
            });
        });
    });
})
