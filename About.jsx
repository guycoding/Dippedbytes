import React from 'react';
import './About.css';
import founderPhoto from '../../assets/charles-mosena.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About DippedBytes</h1>
        <p className="tagline">Empowering Africa through technology</p>
      </div>

      <div className="about-content">
        <div className="founder-section">
          <div className="founder-image-container">
            <img
              src={founderPhoto}
              alt="Charles Mosena, Founder of DippedBytes"
              className="founder-image"
            />
          </div>
          <div className="founder-info">
            <h2>Charles Mosena</h2>
            <p className="founder-title">Founder & Lead Developer</p>
            <p className="founder-bio">
              A self-taught fullstack developer with a passion for creating solutions that address
              real challenges in African communities. Charles believes technology should be
              accessible and beneficial to all, and works to bridge the digital divide through
              innovative software solutions.
            </p>
          </div>
        </div>

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At DippedBytes, we're committed to developing technology solutions that uplift and
            empower African communities. Based in Johannesburg, South Africa, we understand the
            unique challenges and opportunities present in our local context.
          </p>
          <p>
            Our work focuses on creating accessible, relevant digital tools that help businesses
            and individuals thrive in the digital economy. We believe that by equipping people
            with the right technological tools, we can contribute to Africa's growth and
            development.
          </p>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Community Focus</h3>
              <p>We build solutions that address real needs in African communities.</p>
            </div>
            <div className="value-card">
              <h3>Continuous Learning</h3>
              <p>As a self-taught team, we embody the spirit of lifelong learning.</p>
            </div>
            <div className="value-card">
              <h3>Accessibility</h3>
              <p>We believe technology should be available to everyone, regardless of background.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We approach problems with creativity and African-relevant solutions.</p>
            </div>
          </div>
        </div>

        <div className="location-section">
          <h2>Our Location</h2>
          <p>
            Based in Johannesburg, South Africa, we're proud to be part of Africa's growing tech
            ecosystem. Our location gives us firsthand insight into the challenges and
            opportunities unique to emerging markets.
          </p>
          <div className="map-container">
            <iframe src="https://storage.googleapis.com/maps-solutions-zi9l11wjh4/locator-plus/oemo/locator-plus.html"
              width="100%" height="100%"
              style={{ border:0}}
              loading="lazy">
            </iframe>
            <div className="map-placeholder">
              <p>Limpopo, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;