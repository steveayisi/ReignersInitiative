import { useState } from "react";
import "./App.css";
import logo from "./assets/reigners.jpeg";
import shirt from "./assets/shirt.jpeg";
import photo1 from "./assets/1.jpeg";
import photo2 from "./assets/2.jpeg";
import photo4 from "./assets/4.jpeg";
import photo5 from "./assets/5.jpeg";
import video3 from "./assets/3.mp4";

function App() {
   const [selectedIndex, setSelectedIndex] = useState(null);

  const mediaItems = [
    { type: "image", src: logo, alt: "Reigner Initiative Logo" },
    { type: "image", src: shirt, alt: "Our Shirt Design" },
    { type: "image", src: photo1, alt: "Gallery Image 1" },
    { type: "image", src: photo2, alt: "Gallery Image 2" },
    { type: "image", src: photo4, alt: "Gallery Image 4" },
    { type: "image", src: photo5, alt: "Gallery Image 5" },
    { type: "video", src: video3, alt: "Gallery Video" },
  ];

  const selectedMedia =
    selectedIndex !== null ? mediaItems[selectedIndex] : null;

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + mediaItems.length) % mediaItems.length,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % mediaItems.length,
    );
  };

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img
              src={logo}
              alt="Reigner Initiative Logo"
              className="logo-img"
            />
            <span className="logo-text">Reigner Initiative</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#mission">Mission</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <h1 className="hero-title">Caring, Our Priority</h1>
          <p className="hero-subtitle">
            Empowering communities through sustainable development and social
            impact initiatives
          </p>
          <button className="cta-button">Get Involved</button>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Reigner Initiative is a non-profit organization dedicated to
            creating positive change in communities worldwide. We focus on
            education, healthcare, and sustainable development to build a better
            future for all.
          </p>
        </div>
      </section>

      <section id="mission" className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">📚</div>
              <h3>Education</h3>
              <p>
                Providing quality education and learning opportunities to
                underserved communities
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>
                Ensuring access to essential healthcare services and promoting
                wellness
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                Building sustainable solutions for long-term community
                development
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-text">
            Photos and videos from our journey of making a difference
          </p>

          <div className="gallery-grid">
            {mediaItems.map((item, index) => (
              <button
                key={`${item.type}-${index}`}
                className="gallery-item"
                type="button"
                onClick={() => setSelectedIndex(index)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="gallery-image"
                  />
                ) : (
                  <div className="gallery-video-thumb">
                    <video className="gallery-image" muted playsInline>
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <span className="play-badge">▶</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedMedia && (
        <div className="modal" onClick={() => setSelectedIndex(null)}>
          <button
            className="modal-nav modal-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            ‹
          </button>

          <button
            className="modal-nav modal-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>

          <button
            className="modal-close"
            type="button"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>

          <div
            className="modal-body"
            onClick={(event) => event.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="modal-content"
              />
            ) : (
              <video className="modal-content" controls autoPlay>
                <source src={selectedMedia.src} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      )}

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-text">
            Join us in making a difference. Whether you want to volunteer,
            donate, or partner with us, we'd love to hear from you.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Reigner Initiative. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
