const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');

app.get('/', (req, res) => {
  res.send('hello World from express');
});

app.use(express.json());
routerApi(app);

app.listen(port, () => {
  console.log('hello world from console');
});
