import express from 'express';
import * as db from "../database.js"
import { Ticker } from "../Models/ticker_model.js"

const app = express();

app.get('/ticker/:name', (req, res) => {
    let name = req.params.name;
    db.select(name).then((result) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(result));
    })
});

app.post('/ticker/test', async (req, res) => {
    try {
        console.log("0");
        let t = await Ticker.createWithAPI("TIME_SERIES_MONTHLY", "NVDA");
        console.log("1");
        await t.create();
        console.log("2");
        await t.addOverview();
        console.log("3");
        res.status(200).send('Ticker created successfully');
      } catch (error) {
        console.error('Error creating ticker:', error);
        res.status(500).send('Internal Server Error');
      }
})

  export default app