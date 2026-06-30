// Static show data — replaces dead Heroku API endpoint
const SHOW_DATA = [
  { date: 1748736000000, place: "Madison Square Garden", location: "New York, NY" },
  { date: 1751414400000, place: "Crypto.com Arena", location: "Los Angeles, CA" },
  { date: 1754006400000, place: "United Center", location: "Chicago, IL" },
  { date: 1756684800000, place: "Toyota Center", location: "Houston, TX" },
  { date: 1759363200000, place: "Kaseya Center", location: "Miami, FL" },
  { date: 1762041600000, place: "TD Garden", location: "Boston, MA" },
  { date: 1764633600000, place: "Ball Arena", location: "Denver, CO" },
];

const table = document.querySelector(".shows-events__shows");

const headerRow = document.createElement("div");
headerRow.className = "shows-events__header-row";

const headerDates = document.createElement("p");
headerDates.innerText = "DATES";
headerDates.className = "shows-events__date-header";

const headerVenue = document.createElement("p");
headerVenue.innerText = "VENUE";
headerVenue.className = "shows-events__venue-header";

const headerLocation = document.createElement("p");
headerLocation.innerText = "LOCATION";
headerLocation.className = "shows-events__location-header";

const showsHeaderButton = document.createElement("button");
showsHeaderButton.innerText = "BUY TICKETS";
showsHeaderButton.classList.add("shows-events__header-button");

headerRow.appendChild(headerDates);
headerRow.appendChild(headerVenue);
headerRow.appendChild(headerLocation);
headerRow.appendChild(showsHeaderButton);
table.appendChild(headerRow);

function createShowRow(showObj) {
  const showsRow = document.createElement("div");
  showsRow.className = "shows-events__row";

  const dateLabel = document.createElement("h3");
  dateLabel.innerText = "DATE";
  dateLabel.className = "shows-events__header";
  showsRow.appendChild(dateLabel);

  const showsDate = document.createElement("p");
  showsDate.innerText = new Date(showObj.date).toLocaleDateString();
  showsDate.className = "shows-events__date";
  showsRow.appendChild(showsDate);

  const venueLabel = document.createElement("h3");
  venueLabel.innerText = "VENUE";
  venueLabel.className = "shows-events__header";
  showsRow.appendChild(venueLabel);

  const showsVenue = document.createElement("p");
  showsVenue.innerText = showObj.place;
  showsVenue.className = "shows-events__venue";
  showsRow.appendChild(showsVenue);

  const locationLabel = document.createElement("h3");
  locationLabel.innerText = "LOCATION";
  locationLabel.className = "shows-events__header";
  showsRow.appendChild(locationLabel);

  const showsLocation = document.createElement("p");
  showsLocation.innerText = showObj.location;
  showsLocation.className = "shows-events__location";
  showsRow.appendChild(showsLocation);

  const ticketButton = document.createElement("button");
  ticketButton.innerText = "BUY TICKETS";
  ticketButton.classList.add("shows-events__button");
  showsRow.appendChild(ticketButton);

  return showsRow;
}

function addRowSelectionListeners(rows) {
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      rows.forEach((r) => r.classList.remove("shows-events__row-selected"));
      row.classList.add("shows-events__row-selected");
    });
  });
}

SHOW_DATA.forEach((show) => {
  table.appendChild(createShowRow(show));
});

const rows = document.querySelectorAll(".shows-events__row");
addRowSelectionListeners(rows);
