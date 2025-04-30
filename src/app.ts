import Express, {Request, Response, json} from "express";
import { getPlayer } from "./controllers/players-controlers";
import router from "./routes";

function createApp(){
    const app = Express();
    
    app.use(Express.json())
    app.use("/api", router);
    
    return app;
};

export default createApp;




