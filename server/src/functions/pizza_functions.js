
import { pizza_db,usuario } from "../database/pizza_db.js";



export const get_pizza_tipo= (req,res)=> {
    const tipos_pizza=(Object.keys(pizza_db));

    return res.send({'values':tipos_pizza,"error":""});
}