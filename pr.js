const request = require('request');

function cong(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) throw new Error('Type error!');
        const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        request.get(URL, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function nhan(a, b) {
    const URL = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) throw new Error('Type error!');
        request.get(URL, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

function chia(a, b) {
    const URL = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) throw new Error('Type error!');
        request.get(URL, (error, response, body) => {
            if (error) return reject(error);
            resolve(body);
        });
    });
}

// (4 + 5) * 6 / 2
// cong(4, 'x')
// .then(tong => nhan(tong, 6))
// .then(tich => chia(tich, 2))
// .then(kq => console.log(kq))
// .catch(error => console.log(error.message));

function tinhDienTich(a, b, h) {
    return cong(a, b)
    .then(tong => nhan(tong, h))
    .then(tich => chia(tich, 2));
}

tinhDienTich(4, 5, 6)
.then(result => console.log(result))
.catch(error => console.log(error));
