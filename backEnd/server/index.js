import express from 'express';
import cors from 'cors'
import ticker_controller from './Controllers/ticker_controller.js'

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();

app.use(cors(corsOptions));

app.use(ticker_controller);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
 
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);