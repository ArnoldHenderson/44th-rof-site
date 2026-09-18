"use client";

import { useEffect } from "react";

type ModalProps = {
  onClose: () => void;
  children: import("react").ReactNode;
};

export function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-base  bg-(--surface) text-(--surface-foreground) p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          title="Close"
          className="absolute right-3 top-3 text-2xl leading-none opacity-70 hover:opacity-100 transition-opacity duration-200"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
