'use client';
import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('FE OKAY');
        const button = document.querySelector(
          '.submit-button'
        ) as HTMLButtonElement;
        button.style.backgroundColor = 'green';
        button.textContent = 'Message Sent';
      } else {
        console.log('FE NOT OKAY');
        const button = document.querySelector(
          '.submit-button'
        ) as HTMLButtonElement;
        button.style.backgroundColor = 'red';
        button.textContent = 'Something Went Wrong';
        setTimeout(() => {
          button.style.backgroundColor = '#06559E'; // Reset the button background color
          button.textContent = 'Try Again Please'; // Reset the button text
        }, 3000); // 3 seconds (3000 milliseconds)
      }
    } catch {
      console.log(
        'FE CATCH There was an error sending your message. Please try again.'
      );
    }
  };
  return (
    <div className='CONTACT_FORM_CONTAINER'>
      <form
        className='text-left text-sm text-scale-900 font-bold'
        onSubmit={handleSubmit}
      >
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label
              className='uppercase text-sm py-2'
              htmlFor='name'
            >
              Name
            </label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col'>
            <label
              className='uppercase text-sm py-2'
              htmlFor='phone'
            >
              Phone Number
            </label>
            <input
              className='border-2 rounded-lg p-3 flex border-gray-300'
              type='text'
              id='phone'
              name='phone'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label
            className='uppercase text-sm py-2'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='email'
            id='email'
            name='email'
            required
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label
            className='uppercase text-sm py-2'
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            id='subject'
            name='subject'
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label
            className='uppercase text-sm py-2'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='border-2 rounded-lg p-3 border-gray-300'
            id='message'
            name='message'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='flex justify-center m-4'>
          <button className='w-full bg-red-600 px-4 py-2 shadow-xl rounded-xl shadow-scale-500 text-2xl font-bold submit-button hover:bg-red-700 duration-300 text-white'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
