// src/pages/Testimonials/TestimonialList.jsx
"use client";
import React from 'react';
import './Testimonials.css';

const TestimonialList = ({ testimonials = [], onEdit }) => {
  return (
    <div className="testimonial-list">
      <h2>Témoignages</h2>
      <ul>
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonial-item">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.message}</p>
              <button onClick={() => onEdit(testimonial.id)} className="edit-testimonial-button">Modifier</button>
            </li>
          ))
        ) : (
          <p>Aucun témoignage disponible.</p>
        )}
      </ul>
    </div>
  );
};

export default TestimonialList;