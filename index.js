const request = require('request');

request.get('http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=SaiGon', { json: true }, (error, response, body) => {
    console.log(response.body)
    // console.log(body.main.temp);
});
