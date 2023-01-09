import React from 'react';

// import components
import TestiSlider from './TestiSlider';

const Testimonials = () => {

  return (
    <section id='testimonials' className='section lg:h-[90vh] bg-primary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title lg:text-6xl relative'>
            Reviews from clients
          </h2>
          <p className='lg:text-2xl text-accent subtitle'>
          Hear from our past success stories
          </p>
        </div>
        <TestiSlider />
      </div>
    </section>
  );
};

export default Testimonials;
