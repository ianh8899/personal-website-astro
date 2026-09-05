import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Astro, TypeScript, Tailwind CSS,
        Framer Motion, Hosted on Cloudflare Workers.
      </p>
    </footer>
  );
}
