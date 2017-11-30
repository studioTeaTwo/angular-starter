const express = require('express');
const app = express();

// CORSを許可する
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, test, test2, test3");
    next();
  });

app.get("/api/test", (req, res, next) => {
    console.log('request received', req.params);
    res.sendStatus(200);
});

app.head("/api/example/header", (req, res, next) => {
    console.log('request received', req.method);
    res.header('test3', 'header')
    res.end();
});

const port = 3000;
app.listen(port,() => {
	console.log("Expressサーバーがポート%dで起動しました。モード:%s", port, app.settings.env)
});
