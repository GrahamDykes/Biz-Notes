require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3500;
const fs = require("fs");
const https = require("https");
const http = require("http");

console.log("Environment:", process.env.NODE_ENV);

// Connect to MongoDB
connectDB();

//SSL cert stuff
// const privateKey = fs.readFileSync(
//   "/etc/letsencrypt/live/cryptic.llc/privkey.pem",
//   "utf8"
// );
// const certificate = fs.readFileSync(
//   "/etc/letsencrypt/live/cryptic.llc/fullchain.pem",
//   "utf8"
// );
// const ca = fs.readFileSync(
//   "/etc/letsencrypt/live/cryptic.llc/chain.pem",
//   "utf8"
// );
// const credentials = { key: privateKey, cert: certificate, ca: ca };

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

// Development Locally
app.use("/", express.static(path.join(__dirname, "public")));

// Serve static files from React build folder INSIDE SAME FOLDER AS this file!!!!
// app.use(express.static(path.join(__dirname, "./build")));

// // Handle client-side routes (React) Not 100% sure this made deployment
// app.get("*", (req, res) => {
// res.sendFile(path.resolve(__dirname, "./build", "index.html"));
// });

app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use("/notes", require("./routes/noteRoutes"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

// Production
// Start HTTPS server  So forget the https server, use app.listen. Nginx handles the sll aspect
// https.createServer(credentials, app).listen(3500, "0.0.0.0", () => {
//   console.log("HTTPS Server running on https://cryptic.llc:3500");
// });

//Development
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
