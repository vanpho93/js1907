const request = require('request');

function cong(a, b, cb) {
    const URL = 'http://localhost:3000/tinh/CONG/4/5';
    request.get(URL, (error, response, body) => {
        console.log(body);
    });
}

cong();
