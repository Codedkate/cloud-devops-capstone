import Calendar from "color-calendar";
import "color-calendar/dist/css/theme-glass.css";

const onDateChange = (currentDate, events) => {
  const eventDisplay = document.getElementById('events-display');
  let html = '';
  events.forEach(event => {
    html += `
      <div class="event">
        <div class="event__name">${event.name}</div>
        <div class="event__datestart">From: ${new Date(event.start).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</div>
        <div class="event__dateend">To: ${new Date(event.end).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}</div>
      </div>
    `;
    event.name
  });
  eventDisplay.innerHTML = html;
}

let myCal = new Calendar({
  id: "#color-calendar",
  primaryColor: "#04AFDF",
  theme: "glass",
  border: "7px solid #04AFDF",
  weekdayType: "long-upper",
  monthDisplayType: "long",
  headerBackgroundColor: "#04AFDF",
  eventsData: [
    {
      id: 1,
      name: "French class",
      start: "2020-08-17T09:00:00",
      end: "2020-08-18T20:30:00"
    },
    {
      id: 2,
      name: "Blockchain 101",
      start: "2020-08-20T10:00:00",
      end: "2020-08-20T11:30:00"
    },
    {
      id: 3,
      name: "Cheese 101",
      start: "2020-09-01T10:00:00",
      end: "2020-09-02T11:30:00"
    },
    {
      id: 4,
      name: "DevOps 201",
      start: "2020-08-01T10:00:00",
      end: "2020-08-02T11:30:00"
    },
    {
      id: 5,
      name: "Web Dev 404",
      start: "2020-09-02T10:00:00",
      end: "2020-09-02T20:30:00"
    },
    {
      id: 6,
      name: "Pizza Eating Contest",
      start: "2020-08-02T06:00:00",
      end: "2020-08-04T15:30:00"
    },
    {
      id: 7,
      name: "Hackathon",
      start: "2020-08-20T9:00:00",
      end: "2020-08-21T13:30:00"
    },
    {
      id: 8,
      name: "Git Workshop",
      start: "2020-08-20T10:00:00",
      end: "2020-08-20T11:30:00"
    }
  ],
  dateChanged: onDateChange,
  monthChanged: (currentDate, events) => {
    console.log("month change", currentDate, events);
  }
});
