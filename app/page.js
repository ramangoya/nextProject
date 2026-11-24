import React from 'react';
import Link from 'next/link';
import Header from './components/Header';

export default function HomePage() {
  const highlights = [
    {
      title: 'Modern Web & Mobile Apps',
      description:
        'Fast, scalable applications built with Next.js, React, Laravel, and Kotlin.',
    },
    {
      title: 'Clean & Responsive UI',
      description:
        'Minimalist interfaces engineered to perform smoothly across desktop and mobile screens.',
    },
    {
      title: 'Reliable Support & Training',
      description:
        'Dedicated technical guidance, maintenance, and hands-on development mentorship.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <main>
        <section className="border-b border-gray-100 bg-gray-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Welcome to Home Page
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Building modern digital solutions for your ideas.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We design and develop fast, reliable web applications, mobile software, and custom digital tools tailored to your needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}