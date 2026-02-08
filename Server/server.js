const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a database connection
mongoose.connect("mongodb://localhost:27017/mydatabase")
.then(() => console.log("mongoDB connected"))
.catch((error) => console.log("mongoDB error: ",error))


const app = express();
const port = process.env.PORT || 3000; 

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type', 
            'Authorization',
            'cache-control',
            'Expires',
            'pragma'
        ],
        credentials: true
    })
)

app.use(express.json());
app.use(cookieParser());

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})