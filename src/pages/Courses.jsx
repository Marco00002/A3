// src/pages/Courses.js
import React from 'react';
import { courses } from '../data';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Todos os Cursos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent: 'center'}}>
        {courses.map(course => (
          <div key={course.id} style={{ flex: '0 0 30%', margin: '1rem' }}>
          <CourseCard course={course} />
        </div>
        ))}
      </div>
    </div>
  );
}
