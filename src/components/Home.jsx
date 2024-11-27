import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Kegiatan1 from "../assets/Kegiatan1.jpg";
import Kegiatan2 from "../assets/Kegiatan2.jpg";
import Kegiatan3 from "../assets/Kegiatan3.jpg";
import Kegiatan4 from "../assets/Kegiatan4.jpg";
import Parkir from "../assets/Parkir.jpg";
import brosur from "../assets/brosur.pdf";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="home" className="home-container">
      <div className="hero-section">
        <div className="content">
          <h1>Mau Belajar Komputer dan Bahasa Inggris dengan Mudah?</h1>
          <p>Bergabunglah bersama kami untuk meningkatkan keterampilan Anda dan membuka peluang baru.</p>
          <div className="buttons">
            <a className="explore-button" href="#program">
              Lihat Kursus
            </a>
            <a className="get-started-button" href={brosur} target="_blank" rel="noopener noreferrer">
              Download Brosur
            </a>
          </div>
        </div>
      </div>

      <section className="image-slider">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src={Kegiatan1} alt="Siswa belajar pemrograman" />
            <p>Siswa kami tengah menguasai bahasa pemrograman terkini</p>
          </div>
          <div className="slide">
            <img src={Kegiatan2} alt="Kelas interaktif" />
            <p>Suasana kelas yang interaktif dan menyenangkan</p>
          </div>
          <div className="slide">
            <img src={Kegiatan3} alt="Fasilitas modern" />
            <p>Fasilitas modern untuk mendukung pembelajaran optimal</p>
          </div>
          <div className="slide">
            <img src={Kegiatan4} alt="Praktik langsung" />
            <p>Praktik langsung untuk pengalaman belajar yang lebih baik</p>
          </div>
          <div className="slide">
            <img src={Parkir} alt="Parkir yang luas" />
            <p>Parkir yang luas untuk kendaraan Anda</p>
          </div>
        </Slider>
      </section>
    </div>
  );
};

export default Home;
