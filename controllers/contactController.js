const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Send Email Using RESEND API
    await resend.emails.send({
      from: "RJ International <onboarding@resend.dev>",  // Default sender
      to: "rjinternationaltraders9711@gmail.com",       // Your receiving email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to send message" });
  }
};

module.exports = { sendContactMail };
