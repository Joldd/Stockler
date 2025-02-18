import express from 'express';
import * as db from "./database.js"
import cors from 'cors'

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();

app.use(cors(corsOptions));

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/ticker/:name', (req, res) => {
  let name = req.params.name;
  db.select(name).then((result) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
  })
});
 
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);