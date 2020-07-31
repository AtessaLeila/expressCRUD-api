const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use(require('./routes/index.js'))



// app.listen(4000, () => {
//     console.log("listening...")
// })
app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
});