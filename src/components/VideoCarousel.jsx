"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css"; // Asegúrate de importar los estilos

const VideoCarousel = () => {
  const [showButton, setShowButton] = useState(false); // Estado para mostrar el botón

  // Reorganizamos los videos según lo solicitado
  const videos = [
    {
      src: "/video2.mp4", // El video 2 en la primera posición
      text: "Descubre el equilibrio y bienestar",
    },
    {
      src: "/video3.mp4", // El video 3 en la segunda posición
      text: "Renueva tu energía con nuestras terapias",
    },
    {
      src: "/video4.mp4", // El video 4 en la tercera posición
      text: "Conéctate con tu propósito y energía interior",
    },
    {
      src: "/video5.mp4", // El video 5 en la cuarta posición
      text: "Medicina china y terapias energéticas",
    },
    {
      src: "/video1.mp4", // El video 1 en la última posición
      text: "Despierta tu energía y transforma tu vida",
      longerDuration: true, // Agregamos un flag para indicar que este video durará más
    },
  ];

  useEffect(() => {
    // Muestra el botón después de 10 segundos
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 10000); // 10 segundos

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  const handleCTA = () => {
    alert("¡Conéctate con tu propósito y energía interior!");
  };

  return (
    <div className="hero-container relative">
      <Swiper
        spaceBetween={0} // Sin espacio entre los slides
        slidesPerView={1} // Solo muestra 1 video por vez
        loop={true} // Habilitamos el loop para que el carrusel se repita
        autoplay={{
          delay: 3000, // Retraso entre cambios de video por defecto (3 segundos)
          disableOnInteraction: false, // No desactivar el autoplay al interactuar
        }}
        navigation={true} // Habilita las flechas de navegación
        modules={[Autoplay, Navigation]} // Usar autoplay y navegación
        speed={3000} // Velocidad de la transición (3000ms)
        effect="fade" // Efecto de desvanecimiento para una transición suave
        className="video-carousel"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="relative">
            <video
              src={video.src}
              autoPlay
              loop={false} // Desactiva el loop dentro del componente, solo será cíclico en el Swiper
              muted
              playsInline
              className="video-slide w-full h-full object-cover"
              onLoadedData={(e) => {
                if (video.longerDuration && index === 4) {
                  // Solo para el video1 (en la posición 5)
                  e.target.play();
                  setTimeout(() => {
                    e.target.pause(); // Pausa después de 1 segundo extra
                  }, 4000); // 4 segundos en total para el video1
                }
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-40">
              <p className="text-center">{video.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Condicionalmente muestra el botón después de 10 segundos */}
      {showButton && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={handleCTA}
            className="px-8 py-4 text-xl bg-[#eafffe] text-black font-semibold rounded-lg shadow-lg hover:bg-[#ffb3ab] transition duration-300"
          >
            ¡Conéctate ahora!
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
