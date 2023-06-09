'use strict'
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const conn = require('../config/connections')
const userRoutes = require('../src/routes/users.routes.js');
const headquarterRoutes = require('../src/routes/headquaters.routes.js')
const spacesRoutes = require('../src/routes/spaces.routes.js')
const facebookAuthRoutes = require('../src/routes/facebook-auth.routes')
const inventoriesRoutes = require('../src/routes/inventories.routes.js')
const bookingRoutes = require('../src/routes/booking.routes.js')

//initialization
const app = express();

//settings
app.set('port', (process.env.PORT));
app.get(conn);

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

//routes
app.use('/api', userRoutes);
app.use('/api', headquarterRoutes);
app.use('/api', spacesRoutes);
app.use('/api', facebookAuthRoutes);
app.use('/api', inventoriesRoutes);
app.use('/api', bookingRoutes);

module.exports = app;