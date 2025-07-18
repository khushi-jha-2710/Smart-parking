document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([28.6139, 77.2090], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  const spots = [
    [28.6139, 77.2090],
    [28.6159, 77.2105],
    [28.6170, 77.2120]
  ];

  spots.forEach(coords => {
    L.marker(coords).addTo(map).bindPopup('Available Spot');
  });

  document.getElementById('booking-form').addEventListener('submit', async e => {
    e.preventDefault();
    const booking = {
      name: document.getElementById('name').value,
      vehicle: document.getElementById('vehicle').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value
    };

    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });

    const data = await res.json();
    alert(data.message);
    e.target.reset();
  });
});
