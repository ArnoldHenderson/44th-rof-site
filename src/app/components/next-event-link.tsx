"use client";

import Link from "next/link";

export function NextEventLink() {
  return (
    <Link
      href="#"
      onClick={() => alert("Join us for our next event!")}
      className="text-blue-500 underline cursor-pointer"
    >
      Join our next event
    </Link>
  );
}
