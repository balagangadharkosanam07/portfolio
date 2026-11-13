import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaPaperPlane, FaExclamationCircle, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personalInfo';
import SectionTitle from './SectionTitle';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration via Vite environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    if (!validate()) {
      return;
    }

    // Check if EmailJS environment variables are configured
    const isEmailJSConfigured =
      serviceId &&
      templateId &&
      publicKey &&
      serviceId !== 'your_service_id_here' &&
      templateId !== 'your_template_id_here' &&
      publicKey !== 'your_public_key_here';

    if (!isEmailJSConfigured) {
      // Do not simulate success. Provide clear, honest instructions and direct mailto.
      setStatus({
        type: 'notice',
        message:
          'The automated form service is awaiting EmailJS credentials in this environment. You can send your message directly to balagangadharkosanam99@gmail.com using your email client.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully! Thank you for getting in touch.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch {
      setStatus({
        type: 'error',
        message:
          'Unable to deliver message right now. Please email directly at balagangadharkosanam99@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate mailto link for direct sending
  const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="section" aria-label="Contact Information">
      <div className="container">
        <SectionTitle
          pill="Communication"
          title="Get In Touch"
          subtitle="Interested in full-stack engineering, cloud deployments, or open opportunities? Feel free to reach out."
        />

        <div className="contact-grid">
          {/* Left Column: Direct Channels */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              Whether you have an internship opportunity, a project to discuss, or a technical inquiry, my inbox is always open.
            </p>

            <div className="contact-channels">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-channel-item"
                aria-label="Send direct email"
              >
                <div className="contact-channel-icon" aria-hidden="true">
                  <FaEnvelope />
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">Email Address</span>
                  <span className="contact-channel-value">{personalInfo.email}</span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
                aria-label="View GitHub Profile (opens in new tab)"
              >
                <div className="contact-channel-icon" aria-hidden="true">
                  <FaGithub />
                </div>
                <div className="contact-channel-text">
                  <span className="contact-channel-label">GitHub Profile</span>
                  <span className="contact-channel-value">{personalInfo.github}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`form-input ${errors.name ? 'has-error' : ''}`}
                  required
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`form-input ${errors.email ? 'has-error' : ''}`}
                  required
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span>*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  className={`form-input ${errors.subject ? 'has-error' : ''}`}
                  required
                />
                {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                  rows={5}
                  required
                ></textarea>
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </div>

              {/* Status Notice / Alert */}
              {status.type && (
                <div className={`form-status ${status.type}`} role="status">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {status.type === 'success' && <FaCheckCircle aria-hidden="true" />}
                    {status.type === 'error' && <FaExclamationCircle aria-hidden="true" />}
                    {status.type === 'notice' && <FaInfoCircle aria-hidden="true" />}
                    <strong>
                      {status.type === 'success'
                        ? 'Success'
                        : status.type === 'error'
                        ? 'Delivery Issue'
                        : 'Direct Contact Available'}
                    </strong>
                  </div>
                  <div>{status.message}</div>
                  {status.type === 'notice' && (
                    <a
                      href={mailtoHref}
                      className="btn btn-primary btn-sm"
                      style={{ alignSelf: 'flex-start', marginTop: '6px' }}
                    >
                      <FaEnvelope aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                <FaPaperPlane aria-hidden="true" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
