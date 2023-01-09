import React from 'react';

// import img
import Image from '../assets/img/DanielFamily.jpg';

const About = () => {
  return (
    <section className='section lg:h-[95vh] bg-primary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-5xl lg:text-6xl font-medium lg:font-extrabold mb-3 relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Sorrells Insurance Solutions
              </h2>
              <p className='mb-4 text-3xl text-accent'>
                Your Agent; Daniel Sorrells
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 text-paragraph lg:text-xl'>
              Many people do not fully comprehend the concept of health insurance. Given the cost of coverage, everyone should be fully aware of what their insurance covers (or does not cover) and how their benefits work. There are so many plans available these days that it can be difficult to find one on your own... As a health insurance advisor, it is my priority to find the best insurance plan for your specific needs and budget. You should fully understand what you're getting into, which is why I take the time to help you understand your coverage so you can make an informed decision about your healthcare. <br />
                <br />
                Sorrells Insurance Solutions is a private health insurance advisor that specializes in finding the best plans for you.
              </p>
            </div>
            <button className='btn btn-md bg-secondary hover:bg-secondary-hover transition-all'>
            <a href="#contact" onClick={() => ('#contact')}>Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
