"use client"; // Aseguramos que este es un componente de cliente

import React, { useEffect, useState } from "react";

const Us = () => {
  // Estado para manejar el efecto de zoom en la imagen del Hero
  const [scale, setScale] = useState(1);

  // Efecto para manejar el desplazamiento de la imagen en el Hero
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition * 0.002;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section con efecto de parallax */}
      <section>
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('/yodyjenny.jpeg')",
            transform: `scale(${scale})`,
            transition: "transform 0.2s ease-out",
          }}
        >
          {/* Título del Hero */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex items-center justify-center h-full z-10 text-center">
            <h1 className="text-white text-4xl font-semibold shadow-lg">
              ¿Quiénes Somos?
            </h1>
          </div>
        </div>
      </section>

      {/* Sección con imagen a la izquierda y texto */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-6 md:space-y-0">
          {/* Contenedor de imagen */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="/jennyody.jpeg"
              alt="Jodie & Jenny"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          {/* Contenedor de texto */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
              Creemos en el poder de la sanación integral para transformar
              vidas.
            </h2>
            <p className="text-lg text-center md:text-left">
              Somos Jodie & Jenny, dos Colombianas apasionadas por el bienestar
              y el autocuidado, comprometidas en compartir nuestras experiencias
              y conocimientos para ayudarte a encontrar sanación, equilibrio y
              armonía en tu vida.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Historias personales */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2
              className="text-5xl font-bold text-[#ffb3ab]"
              style={{ fontFamily: "Kaushan Script, cursive" }}
            >
              "Un Viaje hacia la Sanación Holística y el Autodescubrimiento"
            </h2>
          </div>

          {/* Historia de Jenny */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            {/* Imagen de Jenny */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/holajenny.png"
                alt="Jenny"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Texto de Jenny */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Jenny Ruano
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Soy bailarina de danzas orientales desde hace 10 años y hace 6
                años comencé mi camino en la medicina china para aprender sobre
                el autocuidado y entender cómo sanarme a través de esta medicina
                ancestral. Realicé un curso en la escuela de España *********, y
                a través de este proceso, tuve la oportunidad de hacer un
                voluntariado con el pueblo Arhuaco en la Sierra Nevada de Santa
                Marta, donde les enseñé técnicas ancestrales de medicina china.
                Esta experiencia enriquecedora me permitió profundizar en la
                sabiduría y el poder curativo de las terapias holísticas, y
                consolidó mi compromiso de compartir estas prácticas con la
                comunidad para que más personas puedan experimentar los
                beneficios de la sanación integral.
              </p>
            </div>
          </div>

          {/* Historia de Jodie */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            {/* Imagen de Jodie */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/Holayody.JPG"
                alt="Jodie"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Texto de Jodie */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg relative">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Jodie Díaz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Soy Desarrolladora de Software y Tarotista, ¡Sí, una alquimista
                tecnológica! Siempre he tenido afinidad y gusto por la
                tecnología, sin embargo desde muy niña supe que tenía dones
                especiales para compartir con el mundo. Tuve la experiencia de
                realizar un intercambio cultural en el exterior, donde aprendí
                mucho sobre adaptabilidad y crecimiento personal. Esta vivencia
                me enseñó a ver el mundo con otros ojos y a entender la
                importancia de conectar con mis dones y mi propósito de
                transformación. Usar mis dones y habilidades para leer el Tarot
                me permite guiar a las personas hacia su verdadero camino y
                potencial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: "url('/uneteblue.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Contenido centrado */}
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#000000] mb-4">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg text-[#000000] mb-8">
            Un espacio donde la sanación, el crecimiento personal y la conexión
            espiritual se encuentran.
          </p>
          <a
            href="#"
            className="bg-[#a3c9e2] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#ffb3ab] transition duration-300"
          >
            ¡Únete Ahora!
          </a>
        </div>
      </section>
    </div>
  );
};

export default Us;
