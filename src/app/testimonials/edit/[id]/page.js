// src/app/testimonials/edit/[id]/page.js
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import TestimonialForm from '../../../../pages/Testimonials/TestimonialForm';

const EditTestimonialPage = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const handleSubmit = (id, formData) => {
    // Logique pour mettre à jour le témoignage
    console.log('Mise à jour du témoignage:', id, formData);
    // Après mise à jour, rediriger vers la liste des témoignages
    router.push('/testimonials');
  };

  
  const testimonials = [];

  return <TestimonialForm id={id} onSubmit={handleSubmit} testimonials={testimonials} />;
};

export default EditTestimonialPage;