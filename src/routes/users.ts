import {Request,Response} from "express";

/* GET users listing. */

export let users = (req:Request, res:Response) => {
    res.send('respond with a resource');
}

