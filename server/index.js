/* eslint-disable no-console */
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import handleRender from './handleRender';

const app = express();

app.use(compression());

// Serve the static files from the dist folder
app.use(express.static(path.resolve(__dirname, '../dist')));

// Allows cookies to be available on req.cookies in subsequent handlers
app.use(cookieParser());

// Handles any requests that don't match the ones above
app.get('*', handleRender);

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port} - http://localhost:${port}/`);
