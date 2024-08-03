'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const res = await fetch('/api/contact', {
      const api = process.env.NODE_ENV === 'production' ? 'https://portfolio-mailer-8sx0.onrender.com' : 'http://localhost:8000';
      const res = await fetch(`${api}/sendmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle error response
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='basis-1/2 p-4 b'>
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          I&apos;m always excited to connect for:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Business inquiries</li>
          <li>Collaboration opportunities</li>
          <li>Speaking engagements</li>
          <li>General questions</li>
        </ul>
        <p className="mb-4">
          Use the form to reach out. I&apos;ll respond within 48 hours.
        </p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Connect with me:</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.linkedin.com/in/saviour-eking" target="_blank" rel="noopener noreferrer" className='contact-me-options'>
              {/* <FaLinkedin className='socials' /> */} LinkedIn
            </a>
            <a href="https://twitter.com/TheSaviourEking" target="_blank" rel="noopener noreferrer" className='contact-me-options'>
              {/* <FaTwitter className='socials' /> */} Twitter
            </a>
            <a href="https://github.com/TheSaviourEking" target="_blank" rel="noopener noreferrer" className='contact-me-options'>
              {/* <FaGithub className='socials' /> */} Github
            </a>
          </div>
        </div>
      </div>
      <div className="basis-1/2 container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        {submitted ? (
          <>
            <p className="text-green-500">Thank you for your message!</p>
            <p className="text-green-500">Would do well to reach back out to you ASAP!</p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-background_input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-background_input"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-background_input"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
