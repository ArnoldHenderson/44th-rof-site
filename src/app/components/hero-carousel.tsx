"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Hero Carousel component for the website.
 * @description Displays a changing carousel of hero images on the homepage, takes 5 seconds per image.
 * @module HeroCarousel
 */

const photos = [
  "/media/images/regiment_photos/regphoto8.webp",
  "/media/images/regiment_photos/regphoto1.webp",
  "/media/images/regiment_photos/regphoto2.webp",
  "/media/images/regiment_photos/regphoto3.webp",
  "/media/images/regiment_photos/regphoto4.webp",
  "/media/images/regiment_photos/regphoto5.webp",
  "/media/images/regiment_photos/regphoto6.webp",
  "/media/images/regiment_photos/regphoto7.webp",
];

export default function HeroCarousel(): import("react").JSX.Element {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhoto((currentPhoto) => (currentPhoto + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="home-hero relative isolate mt-4 w-full overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600 shadow-lg">
      {photos.map((photo, index) => (
        <Image
          key={index}
          src={photo}
          alt=""
          fill
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${index === activePhoto ? "opacity-100" : "opacity-0"}`}
          priority={index === 0}
          loading="eager"
          aria-hidden={index !== activePhoto}
        />
      ))}

      <div className="relative z-10 m-4 flex min-h-96 max-w-2xl flex-col rounded-lg bg-black/65 p-6 text-white backdrop-blur-[2px] md:m-6">
        <h1 className="mb-6 text-3xl font-bold font-noto">
          Looking for the best way to play Holdfast?
          <br />
          <span className="font-noto text-yellow-400">
            <i>
              <u>Join the 44th Regiment of Foot!</u>
            </i>
          </span>
        </h1>

        <div className="mb-6 text-xl font-bold font-noto">
          <p>
            We are a group of lads and lasses who like to play the game
            casually, we are centred around fun when it comes to the game such
            as chaotic line formations which usually end up with us getting shot
            by artillery, but it is always a laugh.
          </p>
          <p>
            With loads of ranks to climb and a great community to be a part of,
            we are always looking for more{" "}
            <span className="line-through">cannon fodder</span> members to join
            our ranks!
          </p>
          <p>
            If you are interested and want to see more, then go to our about
            page here!
          </p>
          <p>
            We have{" "}
            <span className="italic underline text-yellow-600">
              EU, NA and OCE
            </span>{" "}
            events for you to dabble in!
          </p>
        </div>

        <Link
          href="/about"
          title="Learn more about us"
          rel="noopener noreferrer"
          className="mt-auto rounded bg-yellow-600 px-4 py-2 text-center font-bold text-white hover:bg-yellow-700"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
