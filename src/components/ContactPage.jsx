"use client"; // Marcar este archivo como un componente de cliente

import { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.location.href = `mailto:sanandoholistico@gmail.com?subject=Nuevo mensaje de ${name}&body=Correo: ${email}%0A%0AMensaje:%0A${message}`;
  };

  return (
    <div className="contact-page">
      {/* FONDO CON VIDEOS */}
      <div className="background-videos">
        <video autoPlay loop muted className="video-background flor">
          <source src="/videogiffflor.mp4" type="video/mp4" />
        </video>
        <video autoPlay loop muted className="video-background sol">
          <source src="/videogiffsol.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content">
        {/* TITULO Y DESCRIPCION */}
        <h1 className="title">¡Conéctate con tu energía y bienestar!</h1>
        <div className="description-container">
          <p className="description-title">¡Estamos aquí para ayudarte!</p>
          <p className="description-text">
            Si tienes alguna pregunta o deseas más información sobre nuestros
            servicios, no dudes en contactarnos.
          </p>
        </div>

        {/* FORMULARIO DE CONTACTO */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nombre
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </label>
          <label>
            Correo Electrónico
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </label>
          <label>
            Mensaje
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </label>
          <button type="submit" className="submit-btn">
            Enviar mensaje
          </button>
        </form>
      </div>

      {/* ESTILOS */}
      <style jsx>{`
        .contact-page {
          position: relative;
          overflow: hidden;
          min-height: 120vh; /* Aumento la altura para que se vea todo el contenido */
        }
        .background-videos {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.3;
        }
        .video-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .content {
          text-align: center;
          position: relative;
          z-index: 1;
          padding: 50px;
          margin-top: 80px; /* Agregar margen superior para evitar que interfiera con el navbar */
        }
        .title {
          font-size: 2.5rem;
          color: #000; /* Cambié el color del título a negro */
          margin-bottom: 20px;
          font-weight: 700; /* Texto más grueso */
        }
        .description-container {
          margin-bottom: 40px;
        }
        .description-title {
          font-size: 1.2rem;
          color: #000; /* Cambié el color de la descripción a negro */
          margin-bottom: 10px;
          font-weight: 600; /* Texto más grueso */
        }
        .description-text {
          font-size: 1.2rem;
          color: #000; /* Cambié el color de la descripción a negro */
          font-weight: 600; /* Texto más grueso */
        }
        .contact-form {
          background-color: rgba(
            255,
            182,
            193,
            0.5
          ); /* Fondo rosado pastel con más transparencia */
          color: #fff;
          padding: 30px;
          border-radius: 8px;
          width: 100%;
          max-width: 500px; /* Limitar el ancho */
          margin: 0 auto;
        }
        .contact-form label {
          display: block;
          margin: 15px 0 5px;
          font-size: 1rem;
          font-weight: 600; /* Etiquetas con texto más grueso */
          color: #000; /* Color negro para las etiquetas */
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          margin-top: 5px;
          border-radius: 8px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 1rem;
          color: #333; /* Color del texto de los inputs */
          background-color: #fff; /* Fondo blanco para los inputs */
        }
        .contact-form textarea {
          height: 150px;
        }
        .submit-btn {
          background-color: #34d399;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          transition:
            background-color 0.3s ease,
            color 0.3s ease;
          width: 100%;
        }
        .submit-btn:hover {
          background-color: #ffdd57; /* Amarillo pastel */
          color: #000; /* Letra en negro al hacer hover */
        }

        /* Media Query para pantallas pequeñas */
        @media (max-width: 768px) {
          .background-videos {
            opacity: 0.4; /* Reduce un poco la opacidad en pantallas pequeñas */
            transform: scale(1.3); /* Aumento del zoom al 130% */
            transform-origin: center center; /* Asegura que el zoom se haga desde el centro */
          }
          .content {
            padding: 30px; /* Reducir el padding en pantallas pequeñas */
            margin-top: 100px; /* Ajustar el margen superior para evitar que el contenido quede pegado al navbar */
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
