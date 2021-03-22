require('dotenv').config();

const express = require('express');
const config = require('./config');
const itemaApi = require('./api/itemsApi');

const app = express();
itemaApi(app);

const PORT = config.port;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
