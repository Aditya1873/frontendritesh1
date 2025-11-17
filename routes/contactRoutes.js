const express = require("express");
const { sendContactMail } = require("../controllers/contactController");

const router = express.Router();

// Test route to confirm mounting
router.get("/test", (req, res) => {
  res.json({ msg: "Contact route is working!" });
});

router.post("/contact", sendContactMail);

module.exports = router;
