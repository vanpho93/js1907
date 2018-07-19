const request = require('request');

function cong(a, b, cb) {
    const URL = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request.get(URL, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    const URL = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request.get(URL, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    const URL = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    request.get(URL, (error, response, body) => {
        if (error) return cb(error, null);
        cb(null, body);
    });
}

// (4 + 5) * 6 / 2


function tinhDienTich(a, b, h, cb) {
    cong(a, b, (errorCong, tong) => {
        if (errorCong) return cb(errorCong);
        nhan(tong, h, (errorNhan, tich) => {
            if (errorNhan) return cb(errorNhan);
            chia(tich, 2, (errorChia, kq) => {
                if (errorChia) return cb(errorNhan);
                cb(null, kq);
            });
        });
    });
}

tinhDienTich(4, 5, 6, (error, result) => console.log(error | result));
