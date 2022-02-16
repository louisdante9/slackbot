const express = require('express')
const { json, urlencoded } = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000
app.use(json());
app.use(urlencoded({ extended: false }));

app.post('/bot', (req, res)=> {
    console.log(res.send, 'request was successful')
})

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})

// var http = require('http');
// const port = process.env.PORT || 3000
// http.createServer(function (req, res) {
    
//    if (req.url === "/") {
//       res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World\n');
//    } else if (req.url === "/bot" && req.method === "POST") {
//       res.write("This is about page.");
//       res.end();
//    } else {
//       res.write("Not Found!");
//       res.end();
//    }
// }).listen(port, "0.0.0.0");
// console.log('Server running at port ' + port);