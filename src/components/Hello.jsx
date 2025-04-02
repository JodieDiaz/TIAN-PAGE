"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Hello = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#ffb3ab] text-center relative">
      <div className="max-w-4xl mx-auto px-4 relative z-20">
        {/* Título */}
        <h2 className="text-4xl font-serif text-[#ffb3ab] mb-6">
          Hola, somos <span className="font-bold">Jodie & Jenny</span>
        </h2>

        {/* Imagen decorativa en forma de círculo */}
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={1.1}
          transitionSpeed={2000}
          className="mb-8 flex justify-center"
        >
          <div
            className="w-[400px] h-[400px] relative rounded-full overflow-hidden shadow-lg"
            style={{ background: "#ffffff" }}
          >
            <Image
              src="/jenny-yody.jpg"
              alt="Jodie & Jenny"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </Tilt>

        {/* Párrafos */}
        <p className="text-lg text-gray-700 mb-6">
          Creamos <span className="font-semibold">Tian Sanación Holística</span>
          , enfocándonos en el autocuidado y el bienestar integral, nuestra
          iniciativa es ofrecer terapias y sanación holística, creando
          conciencia sobre la importancia de cuidar la salud física, mental,
          emocional y espiritual por medio de métodos naturales y alternativas
          de sanación.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Ofrecemos un espacio donde cada persona pueda encontrar su camino
          hacia la sanación y el equilibrio. Nuestros servicios terapéuticos
          están diseñados para guiar tu proceso de sanación y bienestar.
        </p>

        {/* Enlace "Leer más" */}
        <a
          href="#nosotras"
          className="text-white font-semibold hover:underline"
        >
          Lee más sobre nosotras
        </a>
      </div>
    </section>
  );
};

export default Hello;
