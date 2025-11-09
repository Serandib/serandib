"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  title?: string;
  description2?: string; // updated prop name
  images?: string[];
  bannerImage?: string;
}

export default function ReadMoreModal({
  title,
  description2,
  images,
  bannerImage,
}: Props) {
  const [open, setOpen] = useState(false);

  if (!description2) return null;

  return (
    <>
      {/* === Trigger Button === */}
      <button
        onClick={() => setOpen(true)}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-2xl w-60 hover:bg-primary/90 transition"
      >
        Read more
      </button>

      {/* === Modal === */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-lg mx-4 overflow-hidden animate-fadeIn">
            {/* === Top Banner Image === */}
            {(bannerImage || (images && images.length > 0 && images[0])) && (
              <div className="relative w-full h-60 md:h-50">
                <Image
                  src={bannerImage ?? images![0]}
                  alt="Banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              </div>
            )}

            {/* === Scrollable Content === */}
            <div className="relative p-6 overflow-y-auto max-h-[70vh]">
              <div className="flex justify-between items-start">
                {/* === Next-Level Itinerary Section === */}
                <div className="relative w-full max-w-5xl mx-auto px-6 py-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Decorative glow background */}
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent blur-3xl opacity-60"></div>

                  {title && (
                    <h3 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
                      {title}
                    </h3>
                  )}

                  <div className="text-center text-lg font-semibold text-primary uppercase tracking-wider mb-8">
                    Day-by-Day Highlights
                  </div>

                  <div className="relative flex flex-col gap-8">
                    {/* Vertical gradient line */}
                    <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to bg-secondary2 rounded-full"></div>

                    {description2
                      ?.trim()
                      .split("\n\n")
                      .filter((line) => line)
                      .map((entry, index) => {
                        const [heading, ...details] = entry.split("\n");
                        return (
                          <div
                            key={index}
                            className="relative flex items-start gap-6 pl-10 group transition-all duration-300 hover:-translate-y-1"
                          >
                            {/* Day marker */}
                            <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to bg-secondary2 text-white font-bold shadow-md">
                              {index + 1}
                            </div>

                            {/* Card */}
                            <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                {heading}
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                {details.join(" ")}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className="w-24 h-1 mx-auto mt-10 bg-gradient-to-r from-primary to bg-secondary2 rounded-full"></div>
                </div>

                {/* === Close Button === */}
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="ml-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>

              {/* === Additional Images (Optional) === */}
              {/* {images && images.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                  {images
                    .filter(Boolean)
                    .slice(1, 9)
                    .map((src, idx) => (
                      <div
                        key={idx}
                        className="w-full h-40 relative rounded overflow-hidden"
                      >
                        <Image
                          src={src || bannerImage || "/default.jpg"}
                          alt={`${title ?? "image"} ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
