import React from 'react';

export default function Projects() {
  return (
    <div className="container">
      <section className="section">
        <h1>Projects</h1>
        <h3 className="subtitle">Web Dev</h3>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-info">
              <p>Live demo:</p>
              <a href="https://vaishnavibardapure.github.io/stopwatch/" target="_blank" rel="noreferrer">https://vaishnavibardapure.github.io/stopwatch/</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <p>Live demo:</p>
              <a href="https://vaishnavibardapure.github.io/rock_papers_scissors/" target="_blank" rel="noreferrer">https://vaishnavibardapure.github.io/rock_papers_scissors/</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}