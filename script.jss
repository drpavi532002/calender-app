let events = [];

// Function to get the number of days in a month
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Function to calculate the start day of the year (Sunday = 0, Monday = 1, ..., Saturday = 6)
function getStartDay(year) {
    return new Date(year, 0, 1).getDay();
}

// Function to print the full year calendar
function printYearCalendar() {
    let year = parseInt(document.getElementById("year").value);
    let calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";

    let startDay = getStartDay(year);

    for (let month = 1; month <= 12; month++) {
        let monthDiv = document.createElement("div");
        monthDiv.innerHTML = `<h3>${new Date(year, month - 1).toLocaleString('default', { month: 'long' })} ${year}</h3>`;

        let daysInMonth = getDaysInMonth(month, year);
        let daysHTML = "<div style='display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px;'>";

        for (let i = 0; i < startDay; i++) {
            daysHTML += "<div></div>"; // Empty spaces before start day
        }

        for (let day = 1; day <= daysInMonth; day++) {
            daysHTML += `<div class='day' onclick='addEvent(${day}, ${month})'>${day}</div>`;
            if ((day + startDay) % 7 === 0) daysHTML += "<br>";
        }
        
        daysHTML += "</div>";
        monthDiv.innerHTML += daysHTML;
        calendarDiv.appendChild(monthDiv);

        startDay = (startDay + daysInMonth) % 7;
    }
}

// Function to add an event
function addEvent(day, month) {
    let desc = prompt(`Enter event for ${day}/${month}:`);
    if (desc) {
        events.push({ day, month, desc });
        alert("Event added!");
    }
}

// Function to view events of a specific month
function viewEvents() {
    let month = parseInt(document.getElementById("view-month").value);
    let eventList = document.getElementById("event-list");
    eventList.innerHTML = "";

    let filteredEvents = events.filter(e => e.month == month);
    if (filteredEvents.length === 0) {
        eventList.innerHTML = "<p>No events found.</p>";
    } else {
        filteredEvents.forEach((e, index) => {
            let eventItem = document.createElement("p");
            eventItem.innerHTML = `📅 ${e.day}/${e.month}: ${e.desc} <button onclick='deleteEvent(${index})'>❌</button>`;
            eventList.appendChild(eventItem);
        });
    }
}

// Function to delete an event
function deleteEvent(index) {
    events.splice(index, 1);
    alert("Event deleted!");
    viewEvents();
}