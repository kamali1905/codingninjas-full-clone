import React from 'react';

const CoursesSection = () => {
  const courses = [
    { title: 'DSA', desc: 'Master data structures & algorithms' },
    { title: 'Full Stack Web', desc: 'Frontend to backend development' },
    { title: 'Java Backend', desc: 'Build APIs & web services' },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {courses.map((course, i) => (
          <div key={i} className="p-6 bg-orange-100 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-orange-600">{course.title}</h3>
            <p className="mt-2 text-gray-700">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;