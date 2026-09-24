"use client";

import { useState } from "react";
import EventSchedule from "./eventschedule-card";
import Modal from "./modal";

/**
 * RegimentEvents component.
 * @component RegimentEvents
 * @description Renders the regiment events section with a button to view the event schedule in a modal.
 * @returns {JSX.Element} The rendered regiment events component.
 */

export default function RegimentEvents() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto">
        <div className="mb-6 left-10">
          <h1 className="mb-6 text-3xl font-bold font-noto">
            Our Regiment Events
          </h1>
          <div className="mb-6 text-1xl">
            <p>
              Our regiment attends events that usually consist of an hour of fun
              and casual gameplay. We have events every day in our main EU side
              as well as regular events for our NA side and a select few events
              for OCE. These events will be announced a few hours before the
              event starts.
            </p>
            <p>
              We also do regular training sessions throughout the week on our EU
              side to help our members improve their skills and teamwork. The
              types of training will vary, they could be drills, line leader
              training, melee practice, or fun.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          title="View our Event Schedule"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          View our Event Schedule
        </button>
      </div>

      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          titleId="regiment-events-schedule-title"
        >
          <EventSchedule />
        </Modal>
      )}
    </>
  );
}
