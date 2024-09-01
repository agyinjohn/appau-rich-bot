import React, { useState } from "react";
import { toast } from "react-toastify";

export default function BookingForm() {
  const [service, setService] = useState("");
  const [hospital, sethospital] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const services = [
    { label: "Headache", value: "headache" },
    { label: "Ulcer", value: "ulcer" },
    { label: "Back Pain", value: "back_pain" },
    { label: "Arthritis", value: "arthritis" },
    { label: "Migraine", value: "migraine" },
    { label: "Diabetes", value: "diabetes" },
    { label: "Hypertension", value: "hypertension" },
  ];

  const hospitals = [
    {
      label: "General Hospital",
      value: "general_hospital",
      services: ["headache", "ulcer", "migraine"],
    },
    {
      label: "City Clinic",
      value: "city_clinic",
      services: ["back_pain", "arthritis"],
    },
    {
      label: "Sunrise Medical Center",
      value: "sunrise_medical_center",
      services: ["diabetes", "hypertension"],
    },
    {
      label: "Downtown Health Center",
      value: "downtown_health_center",
      services: ["headache", "back_pain", "arthritis"],
    },
    {
      label: "Hope Hospital",
      value: "hope_hospital",
      services: ["ulcer", "migraine", "diabetes"],
    },
    {
      label: "Metro Health Clinic",
      value: "metro_health_clinic",
      services: ["hypertension", "migraine", "headache"],
    },
  ];

  const filteredhospitals = hospitals.filter((hospital) =>
    hospital.services.includes(service)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { service, hospital, date, time, message, email, phone, name };

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          "Appointment booked successfully! A confirmation email has been sent."
        );
      } else {
        toast.error("Failed to book appointment.");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Unexpected error happened");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "40px",
        margin: "20px auto",
        gap: "40px",
        maxWidth: "1200px",
        backgroundColor: "#F7F8FA",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
          backgroundColor: "#24B47E",
          borderRadius: "8px",
          flex: 2,
          color: "#fff",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "2rem",
            textAlign: "center",
            borderBottom: "2px solid #fff",
            paddingBottom: "10px",
          }}
        >
          Free Consultation
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <option value="">Select Health Condition</option>
              {services.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <select
              value={hospital}
              onChange={(e) => sethospital(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <option value="">Select Hospital</option>
              {filteredhospitals.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 45%", marginBottom: "20px" }}>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <div style={{ flex: "1 1 100%", marginBottom: "20px" }}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Additional Message"
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1.1rem",
                boxSizing: "border-box",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: loading ? "#999" : "#FF5A5F",
              border: "none",
              borderRadius: "4px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#fff",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </div>
      </form>
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            marginBottom: "10px",
            color: "#24B47E",
            textAlign: "center",
          }}
        >
          Welcome to Our Health Center
        </h3>
        <p style={{ fontSize: "1rem", color: "#555", textAlign: "center" }}>
          We offer a variety of healthcare services to meet your needs. Book an
          appointment with us today for a free consultation.
        </p>
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h4 style={{ fontSize: "1.3rem", color: "#333" }}>Working Hours</h4>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Monday - Friday: 8:00 AM - 6:00 PM
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Saturday: 9:00 AM - 4:00 PM
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
