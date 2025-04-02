import React from "react";

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="section-header">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-serif">
          Nuestros Servicios
        </h2>
      </div>

      <div className="text-container">
        <p>
          Descubre un viaje de sanación que une la sabiduría ancestral con
          enfoques vanguardistas para renovar y equilibrar tu ser,
          enriqueciéndote con cada sesión.
        </p>
      </div>

      <div className="services">
        {/* Acupuntura */}
        <div className="service">
          <div className="service-image-container">
            <img
              src="/acupuntura-servicio.png"
              alt="Acupuntura"
              className="service-image"
            />
          </div>
          <h3>ACUPUNTURA</h3>
          <p>
            Mejora tu salud física, emocional y espiritual, equilibrando la
            energía de tu cuerpo mediante técnicas de acupuntura, basadas en los
            principios de la medicina tradicional china.
          </p>
          <a href="/acupuntura" className="read-more">
            Leer más...
          </a>
        </div>

        {/* Tarot Terapéutico */}
        <div className="service">
          <div className="service-image-container">
            <img
              src="/tarot-servicio.png"
              alt="Tarot Terapéutico"
              className="service-image"
            />
          </div>
          <h3>TAROT TERAPÉUTICO</h3>
          <p>
            Descubre tu camino y tu potencial, encuentra claridad y guía a
            través de nuestras terapias de Tarot, una herramienta para el
            autoconocimiento y la evolución personal.
          </p>
          <a href="/tarot-terapeutico" className="read-more">
            Leer más...
          </a>
        </div>
      </div>

      {/* Botón para explorar más servicios */}
      <div className="cta-container">
        <a
          href="/servicios"
          className="px-8 py-4 text-xl bg-[#eafffe] text-black font-semibold rounded-lg shadow-lg hover:bg-[#ffb3ab] transition duration-300"
        >
          Explora nuestros servicios
        </a>
      </div>
    </section>
  );
};

export default OurServices;
