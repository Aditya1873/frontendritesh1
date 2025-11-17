const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors({
  origin: [
    "http://localhost:8080",
    "http://localhost:5173",
    "https://rj-international-traders-vyud.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

const contactRoutes = require("./routes/contactRoutes");
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("✅ RJ International Backend is running successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
