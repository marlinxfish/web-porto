import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Pesan dari ${formData.name}`;
    const body = `Nama: ${formData.name}\nEmail: ${formData.email}\nNomor Telepon: ${formData.phone}\nPesan: ${formData.message}`;

    const mailtoUrl = `mailto:info@elcomputercenter.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div id="contact" className="contact-container">
      <section className="contact">
        <h2 className="section-title">Hubungi Kami</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email Anda" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Nomor Telepon</label>
            <input type="tel" id="phone" name="phone" placeholder="Contoh: 08123456789" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" placeholder="Tulis pesan Anda di sini" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Kirim
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
