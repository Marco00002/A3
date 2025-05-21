// src/pages/Home.js
// src/pages/Home.js
import React from 'react';
import { courses } from '../data';
import CourseCard from '../components/CourseCard';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Cursos em destaque</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {courses.slice(0, 3).map(course => (
           <div key={course.id} style={{ margin: '3rem' }}>
           <CourseCard course={course} />
         </div>
        ))}
      </div>
    </div>
  );
}