const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const cookieparser = require("cookie-parser");
const UserRouter = require("./routes/userRoute");
const nodemailer = require("nodemailer");
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use("/api", UserRouter);
// variables
app.use(cookieparser());
const Port = 8080;
const DATABASE_URL =
  "mongodb+srv://agyinjohn97:nCUKNewVDnK5cM9h@cluster0.gfy1xs0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const hospitals = {
  general_hospital: {
    name: "General Hospital",
    email: "agyinjohn100@gmail.com",
    services: ["headache", "ulcer", "back_pain"],
  },
  city_clinic: {
    name: "City Clinic",
    email: "agyinjohn100@gmail.com",
    services: ["arthritis", "migraine"],
  },
  sunrise_medical_center: {
    name: "Sunrise Medical Center",
    email: "agyinjohn100@gmail.com",
    services: ["diabetes", "hypertension", "migraine"],
  },
  downtown_health_center: {
    name: "Downtown Health Center",
    email: "agyinjohn100@gmail.com",
    services: ["headache", "back_pain"],
  },
  hope_hospital: {
    name: "Hope Hospital",
    email: "agyinjohn100@gmail.com",
    services: ["ulcer", "arthritis", "migraine"],
  },
  metro_health_clinic: {
    name: "Metro Health Clinic",
    email: "agyinjohn100@gmail.com",
    services: ["diabetes", "hypertension", "back_pain"],
  },
};

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., use "gmail" or your email service provider
  auth: {
    user: "agyinjohn100@gmail.com",
    pass: "hvfh elua bxtm vhhs",
  },
});

// Route to handle booking form submission
app.post("/api/book", async (req, res) => {
  const { name, phone, service, hospital, date, time, message, email } =
    req.body;
  console.log(req.body);
  // Find the hospital details
  const selectedHospital = hospitals[hospital];

  if (!selectedHospital) {
    return res.status(400).json({ error: "Invalid hospital selected" });
  }

  // Prepare email details

  const mailOptions = {
    from: "kwekuabakah222@gmail.com",
    to: [selectedHospital.email, email], // Replace with actual user's email
    subject: `Booking for ${service} on ${date}`,
    text: `
        Hello ${selectedHospital.name},
        
        You have a new booking:
        
        Name: ${name}
        Phone: ${phone}
        Service: ${service}
        Date: ${date}
        Time: ${time}
        Message: ${message}
  
        Please contact the patient for further details.
        
        Thank you.
      `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Booking email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

mongoose
  .connect(DATABASE_URL)
  .then((val) => console.log("You have connected to the server"));

app.listen(Port, () => {
  console.log(`Server is listening on ${Port}`);
});
