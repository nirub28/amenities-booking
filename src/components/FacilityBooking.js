import React, { useState } from "react";
import axios from "axios";
import "../styles/main.css";

const FacilityBooking = () => {
  const [facility, setFacility] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [output, setOutput] = useState("");

  const facilitiesList = ["Tennis Court", "Clubhouse"]; // List of facilities

  const bookFacility = async () => {
    try {
      const response = await axios.post("https://amenities-booking-backend.onrender.com/book", {
        facility,
        date,
        slot,
      });

      // Handle the response from the Node.js server
      setOutput(response.data.message);
    } catch (error) {
      // Handle errors
      console.error("Error booking facility:", error);
      setOutput("Booking Failed, Please try again.");
    }
  };

  const resetBookingData = async () => {
    try {
      const response = await axios.get("https://amenities-booking-backend.onrender.com/reset");

      // Handle the response from the Node.js server
      setOutput(response.data.message);
    } catch (error) {
      // Handle errors
      console.error("Error resetting booking data:", error);
      setOutput("Resetting Booking Data Failed, Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Facility Booking Module</h1>
      <button className="reset-button" onClick={resetBookingData}>Reset Booking Data</button>
      <div>
        <label>Facility:</label>
        <select value={facility} onChange={(e) => setFacility(e.target.value)}>
          <option value="">Select Facility</option>
          {facilitiesList.map((facility) => (
            <option key={facility} value={facility}>
              {facility}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Date:</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label>Slot:</label>
        <input
          type="text"
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
        />
      </div>
      <button onClick={bookFacility}>Book Facility</button>
      <div>
        <strong>Output:</strong> {output}
      </div>
    </div>
  );
};

export default FacilityBooking;
