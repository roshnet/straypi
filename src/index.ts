import express from 'express'

const app: express.Application = express()
const port = 8000

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server listening at http://localhost:${port}`);
});
