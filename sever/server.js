const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

const db = require("./models");

// app.get('/api/products', (req, res) => {
//     db.query("SELECT * FROM mall_test", (err, data) => {
//         if(!err) res.send({ products : data });
//         else res.send(err);
//     })
// })

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server On : http://localhost:${PORT}/`);
    })
});

