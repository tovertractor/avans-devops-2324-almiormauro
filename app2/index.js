require('dotenv').config();
const express = require('express');
const app = express();
var logger = require('morgan');

app.use(express.json());
app.use(logger('dev'));

const indexRoutes = require("./routes/index")

const promBundle = require('express-prom-bundle');
const metricsMiddleware = promBundle({
    includePath: true,
    includeStatusCode: true,
    normalizePath: true,
    promClient: {
        collectDefaultMetrics: {}
    }
})
app.use(metricsMiddleware)

app.use('/', indexRoutes)

module.exports = app