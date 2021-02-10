let express = require('express');
let app = express();
let BaseuUrl = 9000;
let server = app.listen(BaseuUrl,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`http://localhost:${port}`);
})