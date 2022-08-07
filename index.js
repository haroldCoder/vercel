const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        "name": "John Doe",
        "age": 30,
        "cars": [
            "Ford",
            "BMW",
            "Fiat"
        ]
    })
    }
);

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
})