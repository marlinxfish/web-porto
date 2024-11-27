import React, { useState } from "react";
import { FaLanguage, FaFileWord, FaCode, FaPalette, FaTimes } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Programs.css";

const Programs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const classes = [
    {
      name: "Program Bahasa Inggris",
      description: "Asah keterampilan bahasa Inggris Anda dan buka peluang internasional!",
      icon: <FaLanguage />,
      color: "#4CAF50",
      benefits: ["Meningkatkan kemampuan berbicara dan menulis dalam bahasa Inggris", "Mendapatkan materi belajar eksklusif", "Pendampingan dari instruktur berpengalaman"],
      details: [
        { name: "Pendaftaran", price: "Rp.100.000" },
        { name: "Buku", price: "Rp.35.000" },
        { name: "Seragam Khusus", price: "Rp.150.000" },
        { name: "Biaya Pertemuan (per sesi)", price: "Rp.10.000" },
      ],
    },
    {
      name: "Program Microsoft Office",
      description: "Tingkatkan produktivitas Anda dengan keterampilan Microsoft Office yang profesional!",
      icon: <FaFileWord />,
      color: "#2196F3",
      benefits: ["Menguasai Microsoft Word, Excel, dan PowerPoint", "Materi praktis yang dapat diakses kapan saja", "Sertifikat resmi setelah menyelesaikan program"],
      details: [
        { name: "Pendaftaran", price: "Rp.100.000" },
        { name: "Modul", price: "Rp.30.000" },
        { name: "Biaya Pertemuan (per sesi)", price: "Rp.10.000" },
        { name: "Biaya Sertifikat", price: "Rp.150.000" },
      ],
    },
    {
      name: "Program Pemrograman",
      description: "Mulai petualangan Anda di dunia coding dan jadi ahli pemrograman!",
      icon: <FaCode />,
      color: "#FF9800",
      benefits: ["Pemahaman dasar-dasar pemrograman dengan praktik langsung", "Proyek mini untuk membangun portofolio", "Bimbingan intensif dari profesional di bidang IT"],
      details: [
        { name: "Pendaftaran", price: "Rp.200.000" },
        { name: "Biaya Pertemuan (per sesi)", price: "Rp.10.000" },
        { name: "Biaya Sertifikat", price: "Rp.200.000" },
      ],
    },
    {
      name: "Program Desain Grafis",
      description: "Ekspresikan kreativitas Anda dan ciptakan karya visual yang menakjubkan!",
      icon: <FaPalette />,
      color: "#E91E63",
      benefits: ["Mempelajari dasar-dasar desain grafis dan software populer", "Akses software desain berlisensi", "Proyek portofolio untuk menampilkan karya kreatif"],
      details: [
        { name: "Pendaftaran + Buku", price: "Rp.200.000" },
        { name: "Biaya Pertemuan (per sesi)", price: "Rp.10.000" },
        { name: "Biaya Sertifikat", price: "Rp.200.000" },
      ],
    },
  ];

  const handleRegister = (programName) => {
    setSelectedProgram(programName);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `saya tertarik mengikuti program ${selectedProgram}\n\nNama: ${formData.name}\nTelepon: ${formData.phone}\nEmail: ${formData.email}`;
    const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
    setShowModal(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="program" className="programs">
      <h1>Temukan Program Terbaik di EL COMPUTER CENTER</h1>
      <p>Pilih program unggulan yang dirancang khusus untuk mengembangkan keterampilan Anda! Temukan kelas yang sesuai dengan kebutuhan dan minat Anda untuk memulai perjalanan belajar yang seru dan bermanfaat!</p>

      <Slider {...settings}>
        {classes.map((classItem, index) => (
          <div key={index} className="slider-item">
            <div className="class-card" style={{ borderColor: classItem.color }}>
              <div className="card-header" style={{ backgroundColor: classItem.color }}>
                <span className="icon">{classItem.icon}</span>
                <h2>{classItem.name}</h2>
              </div>
              <div className="card-content">
                <p className="description">{classItem.description}</p>
                <ul className="details-list">
                  {classItem.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="detail-item">
                      <span className="detail-name">{detail.name}</span>
                      <span className="detail-price">{detail.price}</span>
                    </li>
                  ))}
                </ul>
                <button className="register-btn" onClick={() => handleRegister(classItem.name)}>
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              <FaTimes />
            </span>
            <h2>Daftar untuk {selectedProgram}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <button type="submit">Daftar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
