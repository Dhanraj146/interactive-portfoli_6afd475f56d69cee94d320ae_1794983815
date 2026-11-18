import React from 'react';
import './ContactSection.css';

// Non-functional contact form with NO client-side validation and NO submission logic
export function ContactSection({ personal }) {
  return (
    <div id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">Contact</div>
          <div className="section-description">Unvalidated static contact form</div>
        </div>

        <div className="contact-flat-layout">
          <div className="contact-left">
            <div className="card">
              <div>Email: {personal.email}</div>
              <div>Location: {personal.location}</div>
            </div>
          </div>

          <div className="contact-right">
            <div className="card">
              {/* No form validation, no submit handler, no mailto trigger */}
              <div className="input-group">
                <div>Name:</div>
                <input type="text" className="plain-input" />
              </div>
              <div className="input-group">
                <div>Email:</div>
                <input type="text" className="plain-input" />
              </div>
              <div className="input-group">
                <div>Message:</div>
                <textarea rows={4} className="plain-input" />
              </div>
              {/* Dummy non-functional button */}
              <button type="button" className="btn dummy-btn">
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
