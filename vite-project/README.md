# Gym Slot Booking System

## Overview

This project is a frontend implementation of a gym slot booking system where users can:

- View available slots
- Book a slot (if capacity allows)
- Cancel a booking

## Tech Stack

- React (Frontend)
- Simulated backend using local state

## Features Implemented

- Slot listing with capacity tracking
- Booking functionality (reduces available slots)
- Cancellation functionality (frees up slots)
- Button disabling when slot is full

## Note on Backend

Due to time constraints, the backend is simulated using React state.

In a production system, I would implement:

- Backend APIs:
  - GET /slots
  - POST /book
  - DELETE /cancel
- Database (SQL):
  - slots table
  - bookings table
- Concurrency control using transactions to prevent overbooking
- Row-level locking to handle simultaneous booking requests

## Future Improvements

- Real backend integration (Node.js / FastAPI)
- Authentication system
- Persistent storage
- Handling race conditions under concurrent requests

## Disclosure

This implementation was completed with the assistance of AI. I currently have strong frontend knowledge and am actively learning backend development.
