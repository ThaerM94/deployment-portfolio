'use strict';
/// import the express fun from the npm library and store it in the constant\\\\\\\
 
const express = require ('express');


const app = express();


////creat a PORT number\\\

const PORT = process.env.PORT || 3000;


/// use app with express function in the public folder as a static files 'means an freez files'\\\

app.use(express.static('./public'));

///make the server ready for listening\\\


app.listen(PORT,() => {
     console.log(`Listening ...`);
    });
