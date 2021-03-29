const express = require('express')
// const keys = require('./config/keys')
// const connectDB = require('./database/index')
const cors = require('cors')
// const cloudinary = require('cloudinary')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3333

// app.use(fileUpload({
//     useTempFiles: true
// }));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
// connectDB()

// cloudinary.config({
//     cloud_name:keys.cloudinary_name,
//     api_key: keys.cloudinary_API_Key,
//     api_secret: keys.cloudinary_API_Secret
// })


// require('./routes/index')

app.listen(port, console.log('Listen port 3333 ...'));

// Routes
app.use('/api', require('./routes/index'))