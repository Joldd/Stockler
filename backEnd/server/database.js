import request from 'request';
import fs from 'fs';
import pg from 'pg'

const { Client } = pg
const client = new Client({
	user: 'root',
	password: 'root',
	host: 'stockler-db',
	port: '5432',
	database: 'app',
});

export function connectDB(){
	client
		.connect()
		.then(() => {
			console.log('Connected to PostgreSQL database');
		})
		.catch((err) => {
			console.error('Error connecting to PostgreSQL database', err);
		});
}

export function select(req){
	const query = {
		text: `SELECT * 
				FROM tickers
				WHERE name = $1`,
		values: [req],
	}
	return new Promise((resolve, reject) => {
		client.query(query, (err, result) => {
			if (err) {
				console.error('Error executing query', err);
				reject(err);
			} else {
				resolve(result.rows[0]);
			}
		});
	})
}


connectDB();

//ALTER TABLE
// const queryAlter = `ALTER TABLE tickers 
// 			ADD COLUMN overview JSON
// 		`;
// client.query(queryAlter);

//ADD COMPANY TO DATABASE

export function addTicker(type, symbol){
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
			const queryInsert = {
				text: 'INSERT INTO tickers(name, data) VALUES($1, $2)',
				values: [ data['Meta Data']['2. Symbol'], JSON.stringify(DATA)],
		  	};
			client.query(queryInsert);
		}
	});
}

export function addOverview(symbol){
	request.get({
		url: `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=XYHZPBM3BULB5BP4`,
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
				values: [ data, symbol]
		  	};	
			client.query(queryUpdate);
		}
	});
}

//const s = "GOOG";
//addTicker('TIME_SERIES_MONTHLY', s);
//addOverview(s);