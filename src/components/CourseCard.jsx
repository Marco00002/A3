// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '300px', margin: '1rem' }}>
      <img src={course.image} alt={course.title} style={{ width: '100%' }} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`}>Ver mais</Link>
    </div>
  );
}