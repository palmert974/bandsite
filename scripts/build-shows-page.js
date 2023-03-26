let shows__array = [
  {
    date: "Mon Sep 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },

  {
    date: "Tue Sep 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },

  {
    date: "Sat Nov 6 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },

  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },

  {
    date: "Wed Dec 15  2021",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },
];

let table = document.querySelector(".shows-events");
let divTable = document.createElement("div");
divTable.className = "shows-events__header-row";

let headerDates = document.createElement("p");
headerDates.innerText = "DATES";
headerDates.className = "shows-events__date-header";

let headerVenue = document.createElement("p");
headerVenue.innerText = "VENUE";
headerVenue.className = "shows-events__venue-header";

let headerLocation = document.createElement("p");
headerLocation.innerText = "LOCATION";
headerLocation.className = "shows-events__location-header";

divTable.appendChild(headerDates);
divTable.appendChild(headerVenue);
divTable.appendChild(headerLocation);
table.appendChild(divTable);

function displayShow(showObj) {
  let shows__row = document.createElement("div");
  shows__row.className = "shows-events__row";

  let shows__dateText = document.createElement("h3");
  shows__dateText.innerText = "DATE";
  shows__dateText.className = "shows-events__header";
  shows__row.appendChild(shows__dateText);

  let shows__date = document.createElement("p");
  shows__date.innerText = showObj["date"];
  shows__date.className = "shows-events__date";
  shows__row.appendChild(shows__date);

  let shows__venueText = document.createElement("h3");
  shows__venueText.innerText = "VENUE";
  shows__venueText.className = "shows-events__header";
  shows__row.appendChild(shows__venueText);

  let shows__venue = document.createElement("p");
  shows__venue.innerText = showObj["venue"];
  shows__venue.className = "shows-events__venue";
  shows__row.appendChild(shows__venue);

  let shows__locationText = document.createElement("h3");
  shows__locationText.innerText = "LOCATION";
  shows__locationText.className = "shows-events__header";
  shows__row.appendChild(shows__locationText);

  let shows__location = document.createElement("p");
  shows__location.innerText = showObj["location"];
  shows__location.className = "shows-events__location";
  shows__row.appendChild(shows__location);

  let shows__button = document.createElement("button");
  shows__button.innerText = "BUY TICKETS";
  shows__button.classList.add("shows-events__button");
  shows__row.appendChild(shows__button);

  document.querySelector(".shows-events").appendChild(shows__row);
}

shows__array.forEach(function (show) {
  displayShow(show);
});
