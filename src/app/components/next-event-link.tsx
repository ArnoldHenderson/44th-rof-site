"use client";

import { useState } from "react";
import EventSchedule from "./eventschedule-card";
import { Modal } from "./modal";

export function NextEventLink() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        title="View our Event Schedule"
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        View our Event Schedule
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <EventSchedule />
        </Modal>
      )}
    </>
  );
}
