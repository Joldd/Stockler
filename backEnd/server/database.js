import request from 'request';
import pg from 'pg'

const { Client } = pg

export const client = new Client({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_DB,
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