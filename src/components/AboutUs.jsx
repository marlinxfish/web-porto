import React from "react";
import "./AboutUs.css";
import logo from "../assets/logo.png";

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="content">
        <img src={logo} alt="El Computer Center Logo" className="logo" />
        <h1 className="title">Siapa Kita?</h1>
        <h2 className="organization-name">El Computer Center</h2>
        <p className="description">Kami adalah El Computer Center, sebuah lembaga pendidikan yang berdedikasi untuk menyediakan pelatihan komputer dan bahasa Inggris yang berkualitas. Misi kami adalah membantu individu dan komunitas untuk mengembangkan keterampilan yang diperlukan untuk sukses di era digital ini.</p>
        <div className="vision-mission-container">
          <div className="card">
            <h3 className="card-title">Visi Kami</h3>
            <p className="card-text">Menjadi pusat pelatihan komputer terkemuka yang menyediakan pelatihan berkualitas tinggi dengan fokus pada keterampilan yang siap kerja.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Misi Kami</h3>
            <p className="card-text">Memberikan keterampilan siap kerja kepada pelajar dan profesional dengan program pelatihan yang up-to-date dan relevan dalam dunia teknologi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
