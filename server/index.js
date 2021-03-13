const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/test', (req, res) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization) {
    const token = authorization.split(' ')[1];
    if (token === 'expired') {
      return res.sendStatus(401);
    }
    if (token === 'accessToken') {
      return res.sendStatus(403);
    }
    if (token === 'newAccessToken') {
      return res.send('Success');
    }
    if (token === 'undefined' || token === 'null') {
      return res.send('No token');
    }
    return res.send('Smth went wrong');
  }
  return res.send('Default response');
});

app.post('/refreshToken', (req, res) => {
  // res.sendStatus(401);
  res.send({
    accessToken: 'newAccessToken',
    refreshToken: 'newRefreshToken',
    username: 'Nikita',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
