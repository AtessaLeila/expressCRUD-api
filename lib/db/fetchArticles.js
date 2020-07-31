const fetch = require("node-fetch");
const fs = require("fs");



var obj;
const newData = JSON.stringify(obj);
fetch('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=e91b575c85fe44d48afb8cdaea74e356')
    .then(res => res.json())
    .then((data) =>
        fs.writeFile('./lib/db/data.json', JSON.stringify(data), (err) => {
            if (err) {
                throw err;
            } else {
                console.log("JSON data is saved.");
            }

        })
    )










