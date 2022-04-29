const express = require('express');
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const fileUpload = require('express-fileupload')

const errorMiddleware = require('./middlewares/errors')

 app.use(express.json()); 
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cookieParser());
 app.use(fileUpload());
 
//Setting up cloudinary config



//Importing all the routers
const products = require('./routes/product');
const auth = require('./routes/auth');
const authVendor = require('./routes/authVendor');
const order = require('./routes/order');
const payment = require('./routes/payment');  

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', authVendor)

app.use('/api/v1', order)
app.use('/api/v1', payment)

//Middleware to handle errors
app.use(errorMiddleware);

module.exports= app