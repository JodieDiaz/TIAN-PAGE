import Image from "next/image";

const Connect = () => {
  return (
    <section className="py-16 bg-[#9cccc4] text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-serif">
          Conecta con nosotr@s
        </h2>

        {/* Frase debajo del título */}
        <p className="text-lg text-gray-700 mb-6">
          Estamos aquí para apoyarte en tu camino de sanación y transformación.
          Únete a nuestra comunidad.
        </p>

        {/* Video de comunidad */}
        <div className="mb-8">
          <div className="mx-auto w-48 h-48 overflow-hidden rounded-lg">
            <video
              src="/videogiffflor.mp4" // Ruta correcta
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        {/* Botón para unirse debajo del video */}
        <div className="mb-8">
          <a
            href="#unete"
            className="px-8 py-4 text-xl bg-[#eafffe] text-black font-semibold rounded-lg shadow-lg hover:bg-[#ffb3ab] transition duration-300"
          >
            ¡Únete y transforma tu vida!
          </a>
        </div>

        {/* Párrafo informativo */}
        <p className="text-lg text-gray-700 mb-6">
          Únete a nuestro canal para recibir actualizaciones exclusivas,
          consejos de bienestar y acceso prioritario a nuestras sesiones en vivo
          y eventos especiales. No te pierdas la oportunidad de llevar tu
          sanación al siguiente nivel con contenido único, herramientas y
          recursos.
        </p>

        {/* Beneficios de unirte */}
        <div className="mb-6 text-left">
          <h3 className="text-2xl text-black font-semibold mb-4">
            Beneficios de unirte:
          </h3>
          <ul className="list-disc pl-8 space-y-2">
            <li className="text-lg text-gray-700">
              💎 Consejos Semanales: Recibe artículos y videos con
              recomendaciones prácticas para tu bienestar.
            </li>
            <li className="text-lg text-gray-700">
              💎 Acceso Exclusivo: Sé el primero en enterarte de nuestras nuevas
              terapias y eventos especiales.
            </li>
            <li className="text-lg text-gray-700">
              💎 Ofertas Especiales: Disfruta de descuentos exclusivos en
              nuestras consultas y servicios.
            </li>
          </ul>
        </div>

        {/* Video redondo */}
        <div className="mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
            <video
              src="/videogiffsol.mp4" // Ruta correcta
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        {/* Botón para reserva de consulta gratuita */}
        <div className="mb-8">
          <a
            href="#consulta"
            className="px-8 py-4 text-xl bg-[#eafffe] text-black font-semibold rounded-lg shadow-lg hover:bg-[#ffb3ab] transition duration-300"
          >
            Reserva tu consulta gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
