const express = require('express');

const app = express();
const port = 3000;
//middleware
app.use(express.json());
//
app.get('/health', (req, res) => {

  const requestLog = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    query: req.query,
    body: req.body,
    ip: req.ip,
    protocol: req.protocol,
    hostname: req.hostname,
  };
  console.log("Health Checking From: "+JSON.stringify(req.headers, null, 2));
  res.status(200).send(requestLog);
});
app.get('/auth', (req, res)=>{
  const requestLog = {
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.originalUrl,
    headers: req.headers,
    query: req.query,
    body: req.body,
    ip: req.ip,
    protocol: req.protocol,
    hostname: req.hostname,
  };
  console.log("Auth Checking From: "+ JSON.stringify(req.headers, null, 2));
  res.status(200).send(requestLog);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});