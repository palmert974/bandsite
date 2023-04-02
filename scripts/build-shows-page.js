const table = document.querySelector(".shows-events__shows");
const divTable = document.createElement("div");
divTable.className = "shows-events__header-row";

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

divTable.appendChild(headerDates);
divTable.appendChild(headerVenue);
divTable.appendChild(headerLocation);
divTable.appendChild(showsHeaderButton);
table.appendChild(divTable);

function displayShow(showObj) {
  const showsRow = document.createElement("div");
  showsRow.className = "shows-events__row";

  const showsDateText = document.createElement("h3");
  showsDateText.innerText = "DATE";
  showsDateText.className = "shows-events__header";
  showsRow.appendChild(showsDateText);

  const showsDate = document.createElement("p");

  console.log(showObj);
  const d = new Date(showObj.date);

  showsDate.innerText = d.toLocaleDateString();
  showsDate.className = "shows-events__date";
  showsRow.appendChild(showsDate);

  const showsVenueText = document.createElement("h3");
  showsVenueText.innerText = "VENUE";
  showsVenueText.className = "shows-events__header";
  showsRow.appendChild(showsVenueText);

  const showsVenue = document.createElement("p");
  showsVenue.innerText = showObj["place"];
  showsVenue.className = "shows-events__venue";
  showsRow.appendChild(showsVenue);

  const showsLocationText = document.createElement("h3");
  showsLocationText.innerText = "LOCATION";
  showsLocationText.className = "shows-events__header";
  showsRow.appendChild(showsLocationText);

  const showsLocation = document.createElement("p");
  showsLocation.innerText = showObj["location"];
  showsLocation.className = "shows-events__location";
  showsRow.appendChild(showsLocation);

  const showsButton = document.createElement("button");
  showsButton.innerText = "BUY TICKETS";
  showsButton.classList.add("shows-events__button");
  showsRow.appendChild(showsButton);

  table.appendChild(showsRow);
}

const showsUrl =
  "https://project-1-api.herokuapp.com/showdates?api_key=d510c716-cbf6-4fd7-b185-17b9bc7cb63a";

axios
  .get(showsUrl)
  .then((response) => {
    const data = response.data;

    console.log(data);

    data.forEach((show) => {
      displayShow(show);
    });

    return data;
  })
  .then((data) => {
    const rows = document.querySelectorAll(".shows-events__row");

    console.log(rows);

    addRowsListener(rows);
  });

function addRowsListener(rows) {
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      rows.forEach((r) => {
        r.classList.remove("shows-events__row-selected");
      });

      row.classList.add("shows-events__row-selected");
    });
  });
}
