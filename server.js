const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: ["https://rj-international-traders-7xs1.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Import routes
const contactRoutes = require("./routes/contactRoutes");

// Mount routes
app.use("/api", contactRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
