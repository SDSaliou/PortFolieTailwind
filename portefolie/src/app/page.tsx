"use client";
import { useEffect } from "react";
import { FaBars, FaPython, FaAws, FaJenkins, FaHtml5, FaJs, FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaDatabase,FaGithub, FaNetworkWired, FaLaptopCode } from "react-icons/fa";

export default function Home() {
  useEffect(() => {
    // Animation fade-in
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((s) => observer.observe(s));

    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    const handleMenuToggle = () => {
      if (menu) menu.classList.toggle("hidden");
    };

    menuBtn?.addEventListener("click", handleMenuToggle);

    // Nettoyage de l'event listener pour éviter les fuites mémoire
    return () => {
      menuBtn?.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#home" className="text-2xl font-bold text-purple-700">
            Mame Mariama
          </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-lg text-gray-700">
            <li><a href="#home" className="hover:text-purple-700">Accueil</a></li>
            <li><a href="#about" className="hover:text-purple-700">À propos</a></li>
            <li><a href="#skills" className="hover:text-purple-700">Compétences</a></li>
            <li><a href="#projects" className="hover:text-purple-700">Projets</a></li>
            <li><a href="#contact" className="hover:text-purple-700">Contact</a></li>
            <li><a href="https://github.com/SDSaliou" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700">
              <FaGithub className="text-2xl" />
            </a></li>
          </ul>
        </nav>

        {/* Burger */}
        <button id="menu-btn" className="md:hidden text-purple-700 text-3xl focus:outline-none">
          <FaBars />
        </button>
    </div>

        {/* Mobile Menu */}
        <div id="menu" className="hidden bg-white border-t border-purple-100 shadow-md md:hidden">
          <ul className="flex flex-col text-center text-lg py-4 space-y-2 text-gray-700">
            <li><a href="#home" className="hover:text-purple-700">Accueil</a></li>
            <li><a href="#about" className="hover:text-purple-700">À propos</a></li>
            <li><a href="#skills" className="hover:text-purple-700">Compétences</a></li>
            <li><a href="#projects" className="hover:text-purple-700">Projets</a></li>
            <li><a href="#contact" className="hover:text-purple-700">Contact</a></li>
            <li><a href="https://github.com/SDSaliou" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700">GitHub</a></li>
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-50 to-white text-center px-4">
        <img src="/ma_photo.jpg" alt="Photo de profil" className="w-60 h-60 rounded-full shadow-xl mb-6 border-4 border-purple-400" />
        <h1 className="text-3xl font-bold text-purple-800 mb-2 typewriter">
          Une apprenante en Développeuse Web Full-Stack & Data Engineer
        </h1>
        <p className="text-xl text-gray-700 max-w-xl">
          Guidée par la <strong>création, l’innovation et l’automatisation</strong>.
        </p>
        <a href="#projects" className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition">
          Voir mes projets
        </a>
      </section>

      {/* À propos */}
      <section id="about" className="py-20 bg-white fade-in px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/bg.jpg" alt="Sokhna Diarra" className="rounded-2xl shadow-2xl w-80 h-80 object-cover border-4 border-purple-300 transform hover:scale-105 transition" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">À propos de moi</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Je suis <strong>Mame Mariama</strong>, passionnée par le <strong>data engineering</strong>, le <strong>développement web</strong> et la <strong>modélisation mathématique</strong>.
            </p>
            <a href="https://drive.google.com/file/d/1RKKRf8xW2-3mIh2btvKE7lzPMmBry8dk/view?usp=sharing" className="inline-block mt-6 bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-800 transition">
              Mon CV
            </a>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-20 bg-purple-50 text-center fade-in px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">Mes Compétences</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaPython className="text-4xl text-purple-600 mb-2" />
            <p>Python / Pandas / Faker</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaDatabase className="text-4xl text-purple-600 mb-2" />
            <p>PostgreSQL / MySQL / Redis / Neo4j / MongoDB</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaJenkins className="text-4xl text-purple-600 mb-2" />
            <p>CI/CD - Jenkins</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaAws className="text-4xl text-purple-600 mb-2" />
            <p>AWS / Cloud</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaNetworkWired className="text-4xl text-purple-600 mb-2" />
            <p>Kafka / NiFi</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaLaptopCode className="text-4xl text-purple-600 mb-2" />
            <p>API / Flask / PHP</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaHtml5 className="text-4xl text-purple-600 mb-2" />
            <p>HTML / CSS / Tailwind</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition">
            <FaJs className="text-4xl text-purple-600 mb-2" />
            <p>React / Next / Node.js / Express</p>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-20 bg-white text-center fade-in px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Projet Pipeline */}
          <div className="relative group bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 transition">
            <img src="/data.png" alt="Pipeline Data" className="w-full h-52 object-cover group-hover:scale-110 transition" />
            <div className="absolute inset-0 bg-purple-800 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-2xl font-bold text-white mb-3">Pipeline Data</h3>
              <a href="https://github.com/SDSaliou/ProjectDATAFLOW360/tree/main/SDSaliou" target="_blank" className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200">
                GitHub
              </a>
            </div>
          </div>

        {/* Projet Migration */}
        <div className="relative group bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 transition">
          <img src="/mysqlpostgres.jpg" alt="Transfert MySQL PostgreSQL" className="w-full h-52 object-cover group-hover:scale-110 transition" />
          <div className="absolute inset-0 bg-purple-800 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-2xl font-bold text-white mb-3">Migration MySQL → PostgreSQL</h3>
            <a href="http://github.com/SDSaliou/flaskmysqlpostgres" target="_blank" className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200">
              GitHub
            </a>
          </div>
        </div>

        {/* Projet Hôpital */}
        <div className="relative group bg-white shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-2 transition">
          <img src="/hopital.png" alt="Site Hôpital" className="w-full h-52 object-cover group-hover:scale-110 transition" />
          <div className="absolute inset-0 bg-purple-800 bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-2xl font-bold text-white mb-3">Site Hôpital</h3>
            <div className="space-x-3">
              <a href="https://gestion-hopital-chi.vercel.app/" target="_blank" className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200">
                Voir le site
              </a>
              <a href="https://github.com/SDSaliou" target="_blank" className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-900">
                GitHub
              </a>
            </div>
          </div>
        </div>

        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-20 bg-purple-50 text-center fade-in px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">Contactez-moi</h2>

        <form
          id="contact-form"
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          action="https://formspree.io/f/xqaydrzw"
          method="POST"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-purple-700 font-bold mb-2">Nom & Prénom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-purple-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full p-3 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-purple-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 border border-purple-200 rounded-md focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="gradient-bg text-white py-3 px-6 rounded-md w-full hover:opacity-90 transition flex items-center justify-center"
          >
            Envoyer
          </button>
        </form>
      </section>


      {/* Footer */}
      <footer className="gradient-bg text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg">&copy; 2025 Sokhna Diarra - Développeuse Web & Data Engineer</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/SDSaliou" className="hover:text-gray-200"><FaGithub className="text-2xl" /></a>
            <a href="https://linkedin.com/in/sokhna-diarra-ngane-829449311" className="hover:text-gray-200"><FaLinkedinIn className="text-2xl" /></a>
            <a href="https://x.com/diarra_ngane?s=21" className="hover:text-gray-200"><FaTwitter className="text-2xl" /></a>
            <a href="https://www.instagram.com/mame_diarra_ngane" className="hover:text-gray-200"><FaInstagram className="text-2xl" /></a>
            <a href="https://wa.me/221776813274" className="hover:text-gray-200"><FaWhatsapp className="text-2xl" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
