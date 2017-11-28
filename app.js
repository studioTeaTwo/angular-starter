const express = require('express');
const app = express();

// CORSを許可する
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/api/test", (req, res, next) => {
    console.log('apiを受信したよ', req.params);
    res.sendStatus(200);
});

const port = 3000;
app.listen(port,() => {
	console.log("Expressサーバーがポート%dで起動しました。モード:%s", port, app.settings.env)
});
