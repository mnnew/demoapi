const express = require("express")
const cors = require("cors")
const app = express();

const PORT = 3002;

app.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Api Is Running...',
    });
});

app.get('/demodata', (req, res) => {
    res.status(200).json({
        msg: 'demodata Api Is Running...',
    });
});

app.listen(PORT, () => {
    console.log(`Server is Running On Port ${PORT}`);
});
