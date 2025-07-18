const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

let bookings = [];

app.post('/api/bookings', (req, res) => {
  const { name, vehicle, date, time } = req.body;
  if (!name || !vehicle || !date || !time) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  bookings.push({ name, vehicle, date, time });
  res.status(201).json({ message: 'Booking saved!', bookings });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
