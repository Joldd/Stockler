import request from 'request';
import * as db from "../database.js"

export class Ticker{
    constructor(){
        this.id;
        this.name = null;
        this.data  = null;
        this.overview = null;
    }

    static createWithAPI(type, symbol){
        let ticker = new Ticker();
        return new Promise((resolve, reject) =>{
            request.get({
                url: `https://www.alphavantage.co/query?function=${type}&symbol=${symbol}&apikey=XYHZPBM3BULB5BP4`,
                json: true,
                headers: {'User-Agent': 'request'}
              }, (err, res, data) => {
                if (err) {
                  console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                  console.log('Status:', res.statusCode);
                } else {
                    var DATA = [];
                    var t = data[Object.keys(data)[1]];
                    var n = Object.keys(t).length;
                    for (var i = n - 1; i >= 0; i--) {
                    var d = Object.keys(t)[i];
                    var date = new Date(parseInt(d.slice(0, 4)), parseInt(d.slice(5, 7) - 1), parseInt(d.slice(8, 10)));
                    DATA.push({
                        'Date': date,
                        'Open': parseFloat(t[d]['1. open']),
                        'High': parseFloat(t[d]['2. high']),
                        'Low': parseFloat(t[d]['3. low']),
                        'Close': parseFloat(t[d]['4. close']),
                        'Volume': parseFloat(t[d]['5. volume'])
                    });
                    }
                    ticker.name = data['Meta Data']['2. Symbol'];
                    ticker.data = JSON.stringify(DATA);
                    resolve(ticker);
                }
            });
        })      
    }
    
    addOverview(){
        return new Promise((resolve, reject) => {
            request.get({
                url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.name}&apikey=XYHZPBM3BULB5BP4`,
                json: true,
                headers: {'User-Agent': 'request'}
              }, (err, res, data) => {
                if (err) {
                  console.log('Error:', err);
                } else if (res.statusCode !== 200) {
                  console.log('Status:', res.statusCode);
                } else {
                    const queryUpdate = {
                        text: 'UPDATE tickers SET overview = $1 WHERE name = $2',
                        values: [ data, this.name]
                      };	
                    db.client.query(queryUpdate, (err, res) => {
                        if (err) {
                            return reject(err);
                        }
                        resolve(res);
                    });
                }
            });
        })
    }

    create(){
        return new Promise((resolve, reject) => {
            const queryInsert = {
                text: 'INSERT INTO tickers(name, data, overview) VALUES($1, $2, $3)',
                values: [ this.name, this.data, this.overview],
            };
            db.client.query(queryInsert, (err, res) => {
                if (err) {
                    return reject(err);
                }
                resolve(res);
            });
        });
    }
}