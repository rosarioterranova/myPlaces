// Centering on a point that's a good compromise for Europe/Mediterranean
const map = L.map("map").setView([37.5, 14.5], 6);

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Add markers for each location
locations.forEach((loc) => {
  L.marker([loc.lat, loc.lng]).addTo(map).bindPopup(loc.name);
});

// Fit bounds to all markers
const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
map.fitBounds(bounds);

// Update the Statistics Box ---
const statsDiv = document.getElementById("map-stats");
const totalLocations = locations.length;
const nations = locations.map((loc) => loc.nation);
const continents = locations.map((loc) => loc.continent);
statsDiv.innerHTML = `<div>
      <p>Posti: <strong>${totalLocations}</strong></p>
      <p>Nazioni: <strong>${new Set(nations).size}</strong></p>
      <p>Continenti: <strong>${new Set(continents).size}</strong></p>
      </div>`;
