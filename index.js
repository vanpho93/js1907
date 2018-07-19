const request = require('request');

function getTemp(cityName, cb) {
    const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    request.get(URL + cityName, { json: true }, (error, response, body) => {
        cb(body.main.temp);
    });
}

// getTemp('Hanoi', t => console.log(t));
// getTemp('Hanoi', console.log);
Array.prototype.myMap = function(fn) {
    let output = [];
    for(let i = 0; i < this.length; i++) {
        output.push(fn(this[i]));
    }
    return output;
}

const arr = [1, 2, 4];

console.log(arr.myMap(x => x * x));
