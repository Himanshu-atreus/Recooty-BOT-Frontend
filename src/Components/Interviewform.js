import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function Interviewform() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!name.trim()) {
      errors.name = "Patient name is required";
    } else if (name.trim().length < 8) {
      errors.name = "Patient name must be at least 8 characters";
    }

    if (!number.trim()) {
      errors.number = "Patient phone number is required";
    } else if (number.trim().length !== 10) {
      errors.number = "Patient phone number must be of 10 digits";
    }

   
    if (!date) {
      errors.date = "Appointment time is required";
    } else {
      const selectedTime = new Date(time).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.time = "Please select a future appointment time";
      }
    }
   
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setName("");
    setNumber("");
    setDate("");
    setTime("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Recooty
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Schedule an Interview with Roothi</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {formErrors.Name && <p className="error-message">{formErrors.Name}</p>}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            {formErrors.number && <p className="error-message">{formErrors.number}</p>}
          </label>

          <br />
          <label>
            Preferred Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            {formErrors.date && <p className="error-message">{formErrors.date}</p>}
          </label>

          <br />
          <label>
            Preferred Time:
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Morning</option>
              <option value="video">Evening</option>
            </select>
            {formErrors.time && <p className="error-message">{formErrors.time}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Schedule Interview
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Your Interview details has been sent to the phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2018-2025 Recooty. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default Interviewform;
