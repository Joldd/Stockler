import express from 'express';
import * as db from "../database.js"
import { Ticker } from "../Models/ticker_model.js"

const app = express();

app.use(express.json());

app.get('/ticker/:name', (req, res) => {
    let name = req.params.name;
    db.select(name).then((result) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
    })
});

app.post('/ticker/add', async (req, res) => {
    let name = req.body.name;
    try {
        let t = await Ticker.createWithAPI("TIME_SERIES_MONTHLY", name);
        await t.create();
        await t.addOverview();
        res.status(200).send('Ticker created successfully');
      } catch (error) {
        console.error('Error creating ticker:', error);
        res.status(500).send('Internal Server Error');
      }
})

app.get('/ticker/top/:n', async (req, res) => {
  let n = req.params.n;
  try {
    let result = await Ticker.getTop(n);
    let topTickers = result.rows;
    res.setHeader('Content-Type', 'application/json');
    res.send(topTickers);
  } catch (err) {
    console.log(err);
  }
});

  export default app