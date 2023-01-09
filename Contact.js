import React from 'react';
import { useRef }from 'react'
import emailjs from '@emailjs/browser';

// import contact data
import { contact } from '../data';


const Contact = () => {

const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sc7mp39', 'template_0ifxg58', form.current, 'NWPv•••••••••••••••••')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }
          );
          e.target.reset()
      };

  return (
    <section className='section lg:h-[85vh] bg-grey' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title lg:text-6xl relative'>
            Contact me
          </h2>
          <p className='lg:text-2xl text-accent subtitle'>
            Find out if you qualify today!
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-2xl mb-1'>{title}</h4>
                    <p className='mb-1 text-xl text-paragraph'>{subtitle}</p>
                    <p className='text-accent text-xl font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form ref={form} onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input bg-tertiary' type='text' name='user_name' placeholder='Your name' />
              <input className='input bg-tertiary' type='email' name='user_email' placeholder='Your email' />
            </div>
            <input className='input bg-tertiary' type='text' name='message' placeholder='Subject' />
            <textarea
              className='textarea bg-tertiary'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg bg-secondary hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
