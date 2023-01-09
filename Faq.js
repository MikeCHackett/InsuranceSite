import React from 'react';

// import services data
import { faq } from '../data';

const Faq = () => {
  return (
    <section id='faq' className='section lg:h-[95vh] bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title lg:text-6xl mb-0 py-2'>
            Frequently asked questions
          </h2>
          <p className='subtitle text-xl text-accent mb-0'>
            We provide complete transparency to make the process smoothe for you
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {faq.map((faq, index) => {
            const { icon, name, description } = faq;
            return (
              <div className='bg-primary p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center text-[20px]'>
                  {icon}
                </div>
                <h4 className='lg:text-2xl md:text-1xl font-medium'>{name}</h4>
                <p className='lg:text-xl text-paragraph'>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
