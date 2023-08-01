import React, { useState } from "react";
import axios from "axios"; // If using Axios library

const FacilityBooking = () => {
  const [facility, setFacility] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [output, setOutput] = useState("");

  const bookFacility = async () => {
    try {
      const response = await axios.post("http://localhost:8000/book", {
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

  return (
    <div>
      <h1>Facility Booking Module</h1>
      <div>
        <label>Facility:</label>
        <input
          type="text"
          value={facility}
          onChange={(e) => setFacility(e.target.value)}
        />
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
