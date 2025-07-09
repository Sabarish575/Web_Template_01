// MapLocationPins.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const locations = [
  {
    city: "Madurai",
    places: "Periyar, Meenakshi Temple",
    status: "Live",
  },
  {
    city: "Chennai",
    places: "Central, Egmore, T. Nagar, Marina",
    status: "Live",
  },
  {
    city: "20+ Cities",
    places: "Coimbatore, Trichy, Kochi, Vizag, Bengaluru, Jaipur...",
    status: "Coming Soon",
  },
];

const statusColor = {
  Live: "bg-green-100 text-green-700 border-green-500",
  "Coming Soon": "bg-yellow-100 text-yellow-700 border-yellow-400 animate-pulse",
};

export default function MapLocationPins() {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-24">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
        Where We Are
      </h2>

      <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`relative p-6 rounded-xl shadow-lg border-2 ${statusColor[loc.status]} transition-all duration-300`}
          >
            <div className="flex items-center gap-3 text-xl font-semibold">
              <span className="text-2xl">📍</span> {loc.city}
              <span className="text-xs px-3 py-1 rounded-full border font-medium ml-auto">
                {loc.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {loc.places}
            </p>
          </motion.div>
        ))}
      </div>

      {showMap && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center text-sm text-gray-500"
        >
          🔜 More cities are joining soon across India — stay tuned.
        </motion.div>
      )}
    </section>
  );
}