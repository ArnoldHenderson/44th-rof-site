import EventScheduleEU from "@/data/EventSchedules/event-schedule-eu.json";
import EventScheduleNA from "@/data/EventSchedules/event-schedule-na.json";
import EventScheduleOCE from "@/data/EventSchedules/event-schedule-oce.json";
import type { Schedule } from "@/types/content";

/**
 * Generates and displays the event schedule tables for EU, NA, and OCE regions.
 * @component EventSchedule
 * @description Renders the event schedule for different regions using data from JSON files.
 * @returns {JSX.Element} The rendered event schedule component.
 */

function createScheduleTableRows(schedule: Schedule) {
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
      <div className="z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.10)] dark:drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
        <h1 className="text-4xl underline bold font-ubuntu">
          44th Event Schedule
        </h1>
        <h1 className="text-1xl font-ubuntu text-gray-400">
          Events may be canceled or rescheduled. This schedule is subject to
          change.
        </h1>

        <h1 className="text-3xl underline bold font-ubuntu">
          EU Event Schedule
        </h1>
        <div className="mb-6 table-auto relative overflow-x-auto bg-(--surface) text-(--surface-foreground) shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body m-2">
            <thead className="border-b border-default">
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time (EU/London)</th>
              </tr>
            </thead>

            <tbody>
              {createScheduleTableRows(EventScheduleEU as Schedule)}
            </tbody>
          </table>
        </div>

        <h1 className="text-3xl underline bold font-ubuntu">
          NA Event Schedule
        </h1>
        <div className="mb-6 table-auto relative overflow-x-auto bg-(--surface) text-(--surface-foreground) shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body m-2">
            <thead className="border-b border-default">
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time (EU/London)</th>
              </tr>
            </thead>

            <tbody>
              {createScheduleTableRows(EventScheduleNA as Schedule)}
            </tbody>
          </table>
        </div>

        <h1 className="text-3xl underline bold font-ubuntu">
          OCE Event Schedule
        </h1>
        <div className="mb-6 table-auto relative overflow-x-auto bg-(--surface) text-(--surface-foreground) shadow-xs rounded-base border border-default">
          <table className="w-full text-sm text-left rtl:text-right text-body m-2">
            <thead className="border-b border-default">
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Time (EU/London)</th>
              </tr>
            </thead>

            <tbody>
              {createScheduleTableRows(EventScheduleOCE as Schedule)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
