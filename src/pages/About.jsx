import React from 'react';
import profile from '../assets/profile.jpg';

export default function About() {
  return (
    <div className="container about-grid">
      <div className="about-photo">
        <img src={profile} alt="Vaishnavi Bardapure" className="profile-photo small" />
      </div>
      <div className="about-text">
        <h1>About - Vaishnavi Bardapure</h1>
        <p>I am currently pursuing B.Tech (Third Year) in Computer Science and Engineering. I enjoy web development and building small interactive projects.</p>
        <p>Use the chatbox to reach out or go to the contact page for LinkedIn.</p>
      </div>
    </div>
  );
}