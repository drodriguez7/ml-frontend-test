require('dotenv').config();

const express = require('express');
const cors = require('cors');
const config = require('./config');
const itemaApi = require('./api/itemsApi');

const app = express();
app.use(cors());

itemaApi(app);

const PORT = config.port;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
