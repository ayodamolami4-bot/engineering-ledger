import {useState} from 'react';
import {site} from '../content/site';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section className="section wrap page-top contact-page">
      <p className="eyebrow">CONTACT / LET'S BUILD SOMETHING USEFUL</p>
      <h1 className="page-title">Let's talk about the work.</h1>
      <p className="page-deck">
        I'm interested in software engineering, backend and product engineering
        opportunities, and thoughtful conversations about building useful systems.
      </p>

      <div className="contact-list">
        <div>
          <div>
            <span>01 / EMAIL</span>
            <a className="contact-identity" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div>
            <a href={`mailto:${site.email}`}>Write an email ↗</a>
            <button type="button" onClick={copyEmail}>{copied ? 'Copied ✓' : 'Copy email'}</button>
          </div>
        </div>

        <div>
          <div>
            <span>02 / LINKEDIN</span>
            <a className="contact-identity" target="_blank" rel="noopener noreferrer" href={site.linkedin}>
              Ayodamola Adesina ↗
            </a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={site.linkedin}>Open LinkedIn ↗</a>
        </div>

        <div>
          <div>
            <span>03 / GITHUB</span>
            <a className="contact-identity" target="_blank" rel="noopener noreferrer" href={site.github}>
              @ayodamolami4-bot ↗
            </a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={site.github}>View GitHub ↗</a>
        </div>

        <div>
          <div>
            <span>04 / RESUME</span>
            <strong>Professional experience and skills</strong>
          </div>
          <a href={site.resume} download>Download PDF ↓</a>
        </div>
      </div>

      <p className="contact-location">Based in {site.location} · Remote opportunities welcome.</p>
    </section>
  );
}
