"use client";

import { sendMail } from "../actions/sendMail";
import { useState } from "react";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  async function action(formData: FormData) {
    const res = await sendMail(formData);
    if (res.success) setSent(true);
  }

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Kontakta oss</h1>

        {sent ? (
          <div className="p-6 bg-green-50 border border-green-200 text-green-700 rounded-lg">
            Tack! Ditt meddelande har skickats.
          </div>
        ) : (
          <form action={action} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Namn
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full p-3 border rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                E-post
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full p-3 border rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Meddelande
              </label>
              <textarea
                name="message"
                required
                className="w-full p-3 h-32 border rounded-lg bg-gray-50"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Skicka
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
