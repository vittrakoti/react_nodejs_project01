require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql2 = require('mysql2');

const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default 

app.use(cors());
app.use(bodyParser.json());

//pool connection
const pool = mysql2.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: 10         // Set the maximum number of connections in the pool
})
//Connect to DB
pool.getConnection((err, connection) =>{
    if(err) throw err;
    console.log('app db connection successfull' + connection.threadId)
});

// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to bezkoder application." });
//   });
  // Routes
 app.use('/api/users', userRoutes);
// app.use('/api/products', productRoutes);



  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });