import React from 'react';

const teachers = [
  {
    id: 1,
    name: "Dr. Abdulrahman Saud",
    title: "Development Manager",
    image: "/images/teacherone.jpg",
  },
  {
    id: 2,
    name: "Fatima Al-Ali",
    title: "Arabic Language Instructor",
    image: "/images/teacherone.jpg",
  },
  {
    id: 3,
    name: "Mohammed Al-Saleh",
    title: "Tajweed Specialist",
    image: "/images/teacherone.jpg",
  },
  {
    id: 4,
    name: "Sarah Al-Najjar",
    title: "Education Supervisor",
    image: "/images/teacherone.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A team of experts and professionals in technology and education working together
          to achieve our goals in learning and professional development.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden group hover:shadow-lg dark:hover:shadow-gray-900/30 transition-shadow h-72"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 mx-4 my-2 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white text-center py-2 shadow-md dark:shadow-gray-900/50">
                <h4 className="text-lg font-semibold">{teacher.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{teacher.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;