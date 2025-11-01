import React from 'react';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="container">
      <section className="hero rose-hero">
        <div className="hero-left">
          <h1>Hi, I'm <span className="name">Vaishnavi Bardapure</span></h1>
          <p className="lead">B.Tech (TY) — CSE. Passionate about building web experiences and learning new technologies.</p>
          <div style={{ marginTop: 16 }}>
            <a className="cta" href="/projects">View Projects</a>
            <a className="cta ghost" href="/contact" style={{ marginLeft: 12 }}>Contact Me</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-wrap">
            <img src={profile} alt="Vaishnavi Bardapure" className="profile-photo" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Skills & Summary</h2>
        <p>Front-end development, HTML, CSS, JavaScript, React — currently learning more advanced topics and building projects.</p>
      </section>
    </div>
  );
}