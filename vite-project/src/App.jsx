import { useState } from "react";

const initialSlots = [
  { id: 1, time: "6:00 - 7:00 AM", capacity: 10, booked: 0 },
  { id: 2, time: "7:00 - 8:00 AM", capacity: 10, booked: 0 },
  { id: 3, time: "8:00 - 9:00 AM", capacity: 10, booked: 0 },
];

export default function App() {
  const [slots, setSlots] = useState(initialSlots);

  const handleBook = (id) => {
    setSlots((prev) =>
      prev.map((slot) =>
        slot.id === id && slot.booked < slot.capacity
          ? { ...slot, booked: slot.booked + 1 }
          : slot
      )
    );
  };

  const handleCancel = (id) => {
    setSlots((prev) =>
      prev.map((slot) =>
        slot.id === id && slot.booked > 0
          ? { ...slot, booked: slot.booked - 1 }
          : slot
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gym Slot Booking</h1>

      {slots.map((slot) => {
        const available = slot.capacity - slot.booked;

        return (
          <div
            key={slot.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{slot.time}</h3>
            <p>Available: {available}</p>

            <button
              onClick={() => handleBook(slot.id)}
              disabled={available === 0}
              style={{ marginRight: "10px" }}
            >
              Book
            </button>

            <button onClick={() => handleCancel(slot.id)}>
              Cancel
            </button>
          </div>
        );
      })}
    </div>
  );
}