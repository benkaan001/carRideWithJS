require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/words', (req, res) => {
  //   console.log(req.query);

  const chosenLevel = req.query.level;
  const words = {
    method: 'GET',
    url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
    params: { level: chosenLevel, area: 'sat' },
    headers: {
      'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
  };

  axios
    .request(words)
    .then((response) => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => {
  console.log(`---> Server is running on PORT ${PORT} --->`);
});
