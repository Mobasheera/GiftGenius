const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
