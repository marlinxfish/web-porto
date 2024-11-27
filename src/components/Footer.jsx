import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kontak</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Jl. K.H.M Hasan, Rawalini, Tanggerang
          </p>
          <p>
            <i className="fas fa-phone"></i> 0881 0111 77146 (Aji)
          </p>
          <p>
            <i className="fas fa-phone"></i> 0882 1441 8226 (Endah)
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@elcomputercenter.id
          </p>
        </div>

        <div className="footer-section">
          <h3>Jam Operasional</h3>
          <p>
            <strong>Senin - Kamis & Sabtu - Minggu:</strong>
          </p>
          <ul className="operation-hours">
            <li>09:30 - 11:00</li>
            <li>14:00 - 15:30</li>
            <li>15:30 - 17:00</li>
            <li>18:00 - 20:30</li>
          </ul>
          <p>
            <strong>Jumat:</strong> Libur
          </p>
        </div>

        <div className="footer-section map-section">
          <h3>Lokasi Kami</h3>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6664463317765!2d106.64884357575765!3d-6.094520193763259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a035bb4f376f9%3A0x5e6b51211f791444!2sEl%20Computer%20Center!5e0!3m2!1sen!2sid!4v1684786347401!5m2!1sen!2sid" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="El Computer Center location"></iframe>{" "}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} El Computer Center. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
