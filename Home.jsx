import { Link } from "react-router-dom";
import "./Home.css";
import { FaServer, FaCode, FaRobot, FaChartLine, FaTools } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1 className="hero-title">Dipped<span style={{ color: "#4ca1af" }}>Bytes</span></h1>
                <h2 className="hero-subtitle">Transforming Businesses Through Intelligent Technology Solutions</h2>
                <div className="hero-cta-group">
                    <Link to="/services" className="cta-button">Our Services</Link>
                    <Link to="/contact" className="cta-button secondary">Get Started</Link>
                </div>
            </section>
            
            <section className="content-section">
                <div className="about-preview">
                    <h2>Your Trusted <Link to="/about" className="inline-link">Technology Partner</Link></h2>
                    <p>
                        At <strong>DippedBytes</strong>, we're revolutionizing how South African businesses leverage technology. 
                        Founded by <Link to="/about" className="inline-link">Charles Mosena</Link>, our Johannesburg-based team combines 
                        technical expertise with innovative thinking to deliver solutions that matter.
                    </p>
                </div>

                <div className="core-services">
                    <h3>Our Core <Link to="/services" className="inline-link">Services</Link></h3>
                    <div className="services-grid">
                        <div className="service-card">
                            <FaServer className="service-icon" />
                            <h4>Web Development</h4>
                            <p>
                                Custom <Link to="/services" className="inline-link">websites</Link> and applications built with modern 
                                technologies, from WordPress to full-stack solutions.
                            </p>
                        </div>
                        <div className="service-card">
                            <FaCode className="service-icon" />
                            <h4>AI Integration</h4>
                            <p>
                                Smart features powered by our <Link to="/machines" className="inline-link">machine learning tools</Link> 
                                to automate and optimize your operations.
                            </p>
                        </div>
                        <div className="service-card">
                            <FaRobot className="service-icon" />
                            <h4>Business Solutions</h4>
                            <p>
                                Custom <Link to="/calculations" className="inline-link">calculation tools</Link> and analytics dashboards 
                                tailored to your specific needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="technology-showcase">
                    <h3>Why Choose <Link to="/about" className="inline-link">DippedBytes</Link>?</h3>
                    <ul className="features-list">
                        <li>
                            <FaChartLine className="feature-bullet" />
                            <span>Data-driven approach using our <Link to="/measurements" className="inline-link">analytical tools</Link></span>
                        </li>
                        <li>
                            <FaTools className="feature-bullet" />
                            <span>Continuous maintenance and support for all <Link to="/services" className="inline-link">our products</Link></span>
                        </li>
                        <li>
                            <FaRobot className="feature-bullet" />
                            <span>Future-ready solutions with AI and <Link to="/machines" className="inline-link">automation</Link></span>
                        </li>
                    </ul>
                    
                    <div className="cta-box">
                        <p>Ready to transform your business?</p>
                        <Link to="/contact" className="cta-button">Contact Our Team</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;