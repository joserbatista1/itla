import  express  from "express";
import { get_pizza_tipo } from "../functions/pizza_functions.js";

export const pizza_routers = express.Router();

pizza_routers.get("/",get_pizza_tipo);
