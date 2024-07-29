// src/pages/Testimonials/TestimonialForm.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { validateTestimonial } from '../../utils/validation';
import './Testimonials.css';

const TestimonialForm = ({ testimonial, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (testimonial) {
      setFormData(testimonial);
    }
  }, [testimonial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateTestimonial(formData);
    if (Object.keys(validationErrors).length === 0) {
      onSave(formData);
      setFormData({ name: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="testimonial-form">
      <h2>{testimonial ? 'Modifier le témoignage' : 'Laisser un témoignage'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-button">Soumettre</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="cancel-button">Annuler</button>
        )}
      </form>
    </div>
  );
};

export default TestimonialForm;