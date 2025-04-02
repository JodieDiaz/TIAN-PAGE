import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      {/* Hero - Cinta estrecha con título */}
      <section className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] bg-white">
        {/* Video de fondo ajustado */}
        <div className="absolute inset-0 z-[1]">
          <video
            className="w-full h-full object-cover scale-95"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/servicevideo.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>

        {/* Overlay oscuro para mejorar la visibilidad del texto */}
        <div className="absolute inset-0 bg-black opacity-30 z-[2]"></div>

        {/* Contenido del Hero (título) */}
        <div className="relative z-[3] flex items-center justify-center h-full text-center px-4 sm:px-8 md:px-16 sm:mt-16 md:mt-0">
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-3xl sm:text-4xl font-bold leading-tight text-white"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }}
            >
              Nuestros Servicios de Sanación Holística
            </h1>
          </div>
        </div>
      </section>

      {/* Sección de descripción (párrafo) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg sm:text-xl text-gray-700">
            En <strong>Tian Sanación Holística</strong>, te ofrecemos una
            selección de terapias diseñadas para reconectar tu cuerpo, mente y
            espíritu. Con herramientas efectivas y transformadoras, nuestros
            servicios personalizados te guiarán hacia la paz interior y el
            equilibrio que tanto buscas.
          </p>
        </div>
      </section>

      {/* Título sobre la sección de imágenes */}
      <section className="py-8 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          ¡Es momento de empezar tu camino hacia el bienestar integral que
          mereces!
        </h2>
      </section>

      {/* Sección con las imágenes de los servicios */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta de Acupuntura */}
            <Link href="/acupuntura" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative w-full h-[600px]">
                  <Image
                    src="/naranja-acupuntura.jpeg"
                    alt="Terapia de Acupuntura"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wider text-center">
                    Terapia de Acupuntura
                  </h3>
                </div>
              </div>
            </Link>

            {/* Tarjeta de Tarot Terapéutico */}
            <Link href="/tarot" className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative w-full h-[600px]">
                  <Image
                    src="/tarot-café.jpeg"
                    alt="Tarot Terapéutico"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wider text-center">
                    Tarot Terapéutico
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
