
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const paymentRoutes = require('./routes/payment');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const dbConnect=require('./config/db');
dbConnect();

app.use("/", paymentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));


