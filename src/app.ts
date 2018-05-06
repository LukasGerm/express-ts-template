import express from "express";
import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import * as index from "./routes/index";
import * as users from "./routes/users";
const app = express();

// view engine setup
app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.index);
app.get('/users', users.users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

export default app;