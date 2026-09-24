"use client";

import { useEffect, useRef } from "react";

/**
 * Modal component.
 * @component Modal
 * @description Renders a modal dialog that can be closed by clicking outside or pressing the Escape key.
 * @returns {JSX.Element} The rendered modal component.
 * @param {ModalProps} props - The properties for the modal component.
 */

type ModalProps = {
  onClose: () => void;
  children: import("react").ReactNode;
  titleId: string;
};

export default function Modal({ onClose, children, titleId }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const modal = modalRef.current;

    modal?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modal) return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onMouseDown={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-base bg-(--surface) p-6 text-(--surface-foreground) shadow-lg"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close event schedule"
          title="Close event schedule"
          className="absolute right-3 top-3 text-2xl leading-none opacity-70 transition-opacity hover:opacity-100"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
