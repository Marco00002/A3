// src/pages/CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) return <p>Curso não encontrado.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{course.title}</h2>
      <img
        src={course.image}
        alt={course.title}
        style={{ width: '400px', marginBottom: '1rem' }}
      />
      <p>{course.description}</p>

      {course.content && (
        <>
          <p><strong>Conteúdo:</strong></p>
          <ul>
            {course.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}