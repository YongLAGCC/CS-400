
//run the project backend use -> tsc && node main.js
import * as request from "request"

const w = {
    url: 'http://api.weatherunlocked.com/api/current/us.02212',
    id: 'd50bde6f',
    key: 'de459df5c718fb895ca97946f3766b3b',
    method: 'GET'
}

const options = {
    url: w.url,
    qs: {
        app_id: w.id,
        app_key: w.key,
    },
    method: w.method
};

export async function get_weather_information() : Promise<any> {
    return new Promise(function(res, rej) { 

        request.get(options, function (error : Error, response : any, body : any) {
            if (error)
                throw new Error(error.message);
            const jsonBody = JSON.parse(body);
            res(jsonBody)
        });

    })
}





