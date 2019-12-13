//run the project backend use -> tsc && node main.js
import * as http from "http"
import { get_weather_information } from "./config"

http.createServer(func).listen(3000)

console.log("server is running.")

async function func(req : http.IncomingMessage, res : http.ServerResponse) {

    res.setHeader("Access-Control-Allow-Origin", "*")

    if(req.url === "/api/NYC") {
        res.end(`{"weather":"clear","temp":42.00}`)
    }
    else if(req.url === "/api/BOS") {
        res.end(`{"weather":"wind","temp":-15.00}`)
    }
    else if(req.url === "/") {
        res.end(JSON.stringify(await get_weather_information()))
    }
    else {
        res.end("woops, wrong place. try \"ng serve\"");
    }
}