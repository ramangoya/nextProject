import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

export default function AboutPage() {
  const stats = [
    { label: 'Projects Delivered', value: '120+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Team Specialists', value: '25+' },
    { label: 'Years of Experience', value: '8+' },
  ];

  const values = [
    {
      title: 'Precision Engineering',
      description:
        'We build scalable, maintainable web applications using modern frameworks, clean architecture, and rigorous testing.',
    },
    {
      title: 'User-First Design',
      description:
        'Every interface is crafted for clarity, accessibility, and fast performance across desktop and mobile devices.',
    },
    {
      title: 'Transparent Collaboration',
      description:
        'From initial discovery to deployment, we keep communication direct, predictable, and aligned with your goals.',
    },
  ];

  const team = [
    {
      name: 'Aarav Sharma',
      role: 'Founder & Lead Architect',
      bio: 'Full-stack engineer specialising in distributed systems, Next.js, and cloud infrastructure.',
    },
    {
      name: 'Priya Nair',
      role: 'Head of Product Design',
      bio: 'Focuses on minimalist design systems, usability research, and responsive web interfaces.',
    },
    {
      name: 'Rohan Verma',
      role: 'Senior Backend Engineer',
      bio: 'Builds high-throughput APIs, database architectures, and automated deployment pipelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="border-b border-gray-100 bg-gray-50/60 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                About Us
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Building reliable digital products with clarity and purpose.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We are a team of engineers, designers, and problem-solvers dedicated to turning complex ideas into fast, intuitive web experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-gray-200 bg-white py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story & Core Values */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Our Story
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Founded with the belief that great software should be both technically sound and effortless to use, we started by helping small businesses modernise their web presence.
                </p>
                <p className="mt-4 leading-relaxed text-gray-600">
                  Today, we partner with organisations across industries to design, develop, and scale full-stack applications that solve real operational challenges.
                </p>
              </div>

              <div className="space-y-6">
                {values.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="border-t border-gray-100 bg-gray-50/60 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Meet the Team
              </h2>
              <p className="mt-3 text-gray-600">
                The people behind our architecture, design, and engineering delivery.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-600">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-blue-600 px-8 py-12 text-white md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Ready to start a project with us?
                </h2>
                <p className="mt-2 text-blue-100">
                  Reach out to discuss your requirements and timeline.
                </p>
              </div>
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}