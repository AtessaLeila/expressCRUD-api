const fetch = require("node-fetch");
const fs = require("fs");




fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e91b575c85fe44d48afb8cdaea74e356')
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










