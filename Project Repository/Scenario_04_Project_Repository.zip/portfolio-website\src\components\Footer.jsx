import React from 'react';
import './Footer.css';

// Non-semantic generic div footer
export function Footer({ personal }) {
  return (
    <div className="footer-box">
      <div className="container">
        <div>{personal.name}'s Portfolio &bull; Local Static Version</div>
        <div>(c) 2026 Developer Portfolio</div>
      </div>
    </div>
  );
}
