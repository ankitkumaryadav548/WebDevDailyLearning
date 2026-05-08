const express = require('express');
const app = express();

app.use(express.json()); // important to read JSON data

app.post('/data', (req, res) => {
    const userData = req.body;
    res.send("Data received: " + JSON.stringify(userData));
    res.send(userData);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});