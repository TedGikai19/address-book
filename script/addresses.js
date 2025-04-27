import { Destination, TravelLog } from './business.js';

const travelLog = new TravelLog();

function displayDestinations() {
  const list = document.getElementById('destination-list');
  list.innerHTML = "";

  for (const id in travelLog.destinations) {
    const destination = travelLog.destinations[id];
    const li = document.createElement('li');
    li.textContent = destination.location;
    li.dataset.id = id;
    list.appendChild(li);
  }
}

function displayDestinationDetails(id) {
  const destination = travelLog.findDestination(id);
  const details = document.getElementById('destination-details');
  
  if (destination) {
    details.innerHTML = `
      <h2>${destination.location}</h2>
      <p><strong>Landmarks:</strong> ${destination.landmarks.join(', ')}</p>
      <p><strong>Time of Year:</strong> ${destination.timeOfYear}</p>
      <p><strong>Notes:</strong> ${destination.notes}</p>
    `;
  } else {
    details.innerHTML = "<p>Destination not found.</p>";
  }
}
document.getElementById('destination-form').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const location = document.getElementById('location').value;
  const landmarks = document.getElementById('landmarks').value.split(',').map(l => l.trim());
  const timeOfYear = document.getElementById('timeOfYear').value;
  const notes = document.getElementById('notes').value;

  const newDestination = new Destination(location, landmarks, timeOfYear, notes);
  travelLog.addDestination(newDestination);

  displayDestinations();
  event.target.reset();
});
document.getElementById('destination-list').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    displayDestinationDetails(event.target.dataset.id);
  }
});

