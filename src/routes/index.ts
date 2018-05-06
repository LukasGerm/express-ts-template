import {Request, Response} from "express";

/* GET home page. */
export let index = (req: Request, res: Response) => {
  res.render('index', {title:'Express'});
};
