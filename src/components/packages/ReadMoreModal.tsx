"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  images?: string[];
  bannerImage?: string;
}

export default function ReadMoreModal({
  title,
  description,
  images,
  bannerImage,
}: Props) {
  const [open, setOpen] = useState(false);

  if (!description) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-2xl w-60"
      >
        Read more
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="relative max-w-7xl w-full bg-white rounded-lg shadow-lg mx-4 overflow-hidden">
            {/* === Top Banner Image === */}
            {images && images.length > 0 && (
              <div className="relative w-full h-60 md:h-80">
                <Image
                  src={images[0]}
                  alt="Banner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              </div>
            )}

            {/* === Scrollable Content Section === */}
            <div className="relative p-6 overflow-y-auto max-h-[80vh]">
              <div className="flex justify-between items-start">
                <div className="w-full">
                  {title && (
                    <h3 className="text-2xl font-bold mb-2">{title}</h3>
                  )}
                  <div className="text-sm text-muted-foreground mb-4">
                    {description}
                  </div>

                  {/* === Additional Images Below === */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    {images &&
                      images
                        .filter(Boolean)
                        .slice(1, 9)
                        .map((src, idx) => (
                          <div
                            key={idx}
                            className="w-full h-40 relative rounded overflow-hidden"
                          >
                            <Image
                              src={
                                bannerImage || (images?.[1] ?? "/default.jpg")
                              }
                              alt={`${title ?? "image"} ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                  </div>
                </div>

                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="ml-4 text-gray-600 hover:text-gray-900"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
