import EventScheduleEU from "@/data/EventSchedules/Schedule-EU.json";
import EventScheduleNA from "@/data/EventSchedules/Schedule-NA.json";
import EventScheduleOCE from "@/data/EventSchedules/Schedule-OCE.json";

type Event = {
  name: string;
  timeuk: string;
};

type DaySchedule = {
  [eventKey: string]: Event;
};

type Schedule = {
  [day: string]: DaySchedule;
};

function CreateEUScheduleTableElements() {
  const schedule = EventScheduleEU as Schedule;

  return Object.entries(schedule).flatMap(([day, events]) =>
    Object.entries(events).map(([eventKey, event]) => (
      <tr key={`${day}-${eventKey}`}>
        <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
        <td>{event.name}</td>
        <td>{event.timeuk}</td>
      </tr>
    )),
  );
}

function CreateNAScheduleTableElements() {
  const schedule = EventScheduleNA as Schedule;

  return Object.entries(schedule).flatMap(([day, events]) =>
    Object.entries(events).map(([eventKey, event]) => (
      <tr key={`${day}-${eventKey}`}>
        <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
        <td>{event.name}</td>
        <td>{event.timeuk}</td>
      </tr>
    )),
  );
}

function CreateOCEScheduleTableElements() {
  const schedule = EventScheduleOCE as Schedule;

  return Object.entries(schedule).flatMap(([day, events]) =>
    Object.entries(events).map(([eventKey, event]) => (
      <tr key={`${day}-${eventKey}`}>
        <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
        <td>{event.name}</td>
        <td>{event.timeuk}</td>
      </tr>
    )),
  );
}

export default function EventSchedule(): import("react").JSX.Element {
  return (
    <>
      <div className="z-10 bg-gray-950 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
        {/* EU */}
        <h1 className="text-3xl underline bold font-ubuntu">
          EU Event Schedule
        </h1>
        <div className="mb-6 table-auto relative overflow-x-auto bg-gray-800 shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body m-2">
            <thead className="border-b border-default">
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time (EU/London)</th>
              </tr>
            </thead>

            <tbody>{CreateEUScheduleTableElements()}</tbody>
          </table>
        </div>

        {/* NA */}
        <h1 className="text-3xl underline bold font-ubuntu">
          NA Event Schedule
        </h1>
        <div className="mb-6 table-auto relative overflow-x-auto bg-gray-800 shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body m-2">
            <thead className="border-b border-default">
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time (EU/London)</th>
              </tr>
            </thead>

            <tbody>{CreateNAScheduleTableElements()}</tbody>
          </table>
        </div>

        {/* OCE */}
        <h1 className="text-3xl underline bold font-ubuntu">
          OCE Event Schedule
        </h1>
        <div className="mb-6 table-auto relative overflow-x-auto bg-gray-800 shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body m-2">
            <thead className="border-b border-default">
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time (EU/London)</th>
              </tr>
            </thead>

            <tbody>{CreateOCEScheduleTableElements()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
