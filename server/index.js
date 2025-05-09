
import {port} from "./src/utils/keys.js";
import { app } from "./src/main.js";

app.listen(port,()=>{
    console.log(`El servidor esta ejecutandose en el puerto: ${port}`);
})

