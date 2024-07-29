// src/app/testimonials/page.js
"use client";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import TestimonialList from '../../pages/Testimonials/TestimonialList';
import TestimonialForm from '../../pages/Testimonials/TestimonialForm';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import './testimonials.css';

const TestimonialsPage = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'Idir Kebbiche', message: 'Excellent service!' },
    { id: 2, name: 'Kamel Abdet', message: 'Très satisfait!' }
  ]);
  const [editingId, setEditingId] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const addTestimonial = (newTestimonial) => {
    setTestimonials([...testimonials, { ...newTestimonial, id: Date.now() }]);
  };

  const updateTestimonial = (id, updatedTestimonial) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, ...updatedTestimonial } : t));
    setEditingId(null);
  };

  const startEditing = (id) => {
    setEditingId(id);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2 className="centered-text">Veuillez vous connecter ou vous inscrire pour voir les témoignages</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => { setShowSignIn(true); setShowSignUp(false); }}>Se connecter</button>
          <button onClick={() => { setShowSignUp(true); setShowSignIn(false); }}>S'inscrire</button>
        </div>
        {showSignIn && <SignIn />}
        {showSignUp && <SignUp />}
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogout}>Se déconnecter</button>
      {editingId !== null ? (
        <TestimonialForm
          testimonial={testimonials.find(t => t.id === editingId)}
          onSave={(formData) => updateTestimonial(editingId, formData)}
          onCancel={() => setEditingId(null)}
        />
      ) : (
        <TestimonialForm onSave={addTestimonial} />
      )}
      <TestimonialList testimonials={testimonials} onEdit={startEditing} />
    </div>
  );
};

export default TestimonialsPage;
