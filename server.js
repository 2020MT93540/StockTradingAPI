var express = require('express'), app = express(), port = process.env.port || 3050;
yahooStockPrices = require('./yahoo-stock-prices');

//app.listen(port);
app.listen(port, () => console.log(`app listening on port ${port}!`));
console.log("server started on " + port);

app.get("/", (req, res) => {
	res.send("Welcome to StockTrading API");
});

app.get("/getStockDetails/:stockName", async (req, res) => {
	const data = await yahooStockPrices.getCurrentData(req.params.stockName);
	res.send(data);
});



