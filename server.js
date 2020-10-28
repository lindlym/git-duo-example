const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Receiving data...');
});

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}...`);
});
