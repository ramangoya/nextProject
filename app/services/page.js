import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function ServicesPage() {
  const services = [
    {
      title: 'Full-Stack Web Development',
      description:
        'Custom, high-performance web applications built with Next.js, React, Laravel, and Django.',
    },
    {
      title: 'Mobile App Development',
      description:
        'Native Android applications built with Kotlin and modern UI architectures for smooth performance.',
    },
    {
      title: 'UI/UX & Responsive Design',
      description:
        'Clean, minimalist, mobile-first interfaces designed with Tailwind CSS and Bootstrap.',
    },
    {
      title: 'API & Database Architecture',
      description:
        'Secure REST APIs, relational database design with MySQL, and scalable backend systems.',
    },
    {
      title: 'AI & Machine Learning Integration',
      description:
        'Predictive analytics, natural language processing, and intelligent automation powered by Python.',
    },
    {
      title: 'Technical Training & Consulting',
      description:
        'Hands-on workshops, code reviews, and structured mentorship for students and development teams.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Page Header */}
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Welcome to the Services
          </h1>
          <p className="mt-3 text-base text-gray-600">
            End-to-end software development, design, and technical solutions tailored to your goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-600/40"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Inquire now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}