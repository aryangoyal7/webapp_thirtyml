const express = require("express");
const connectDb = require("./config/default");
const errorHandler = require("./middleware/errorHandle.js");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/bookings", require("./routes/BookingRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


/*
this is a check
*/