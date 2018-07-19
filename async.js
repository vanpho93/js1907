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

async function tinhDienTich(a, b, c) {
    const tong = await cong(a, b);
    const tich = await nhan(tong, c);
    const kq = await chia(tich, 2);
    return kq;
}

tinhDienTich(4, 5, 6)
.then(kq => console.log(kq));
