import request from 'request';
import pg from 'pg'

const { Client } = pg
export const client = new Client({
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