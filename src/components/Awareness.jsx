import Image from "next/image"; // Importa el componente Image de Next.js
import Link from "next/link"; // Para hacer la redirección

const Awareness = () => {
  return (
    <section className="awareness flex flex-col justify-center items-center my-12 px-4">
      {/* Título centrado */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-serif">
        La Conexión del Ser, el Sentir y el Hacer
        <span className="block text-lg md:text-xl mt-2 font-normal">
          Recupera tu Equilibrio Interior
        </span>
      </h2>

      <div className="content flex flex-col md:flex-row justify-center items-center w-full">
        {/* Texto de la sección */}
        <div className="textContent max-w-[800px] text-base md:text-lg leading-relaxed text-center md:text-left px-4">
          <p className="mb-3">
            <strong>Ser, Hacer, Sentir</strong>
          </p>
          <p>
            El desequilibrio en nuestra vida ocurre cuando no estamos alineados
            con tres aspectos esenciales: nuestro ser, nuestras emociones y
            nuestras acciones. El equilibrio solo se alcanza cuando estos tres
            elementos están conectados y armonizados. Lo que soy debe estar en
            sintonía con lo que pienso, lo que siento y lo que hago.
          </p>
          <p>
            Cuando logramos esta conexión, alcanzamos el equilibrio verdadero.
            Sin embargo, en la sociedad actual, hemos perdido este balance,
            tanto como individuos como colectivamente. Afortunadamente, estamos
            viviendo un despertar en la humanidad, donde más personas se están
            dando cuenta de que podemos recuperar este equilibrio.
          </p>
          <p>
            <strong>¿Por qué vivimos en desequilibrio?</strong>
          </p>
          <p>
            A lo largo de los años, hemos olvidado la importancia de esta
            conexión esencial entre el ser, el sentir y el hacer. Pero en Tian
            Sanación Holística creemos firmemente que cada persona tiene el
            poder de restaurar ese equilibrio interior.
          </p>
          <p>
            Con nuestras herramientas terapéuticas, como el{" "}
            <strong>Tarot Evolutivo</strong> y la{" "}
            <strong>Medicina Tradicional China</strong>, te ayudamos a descubrir y
            fortalecer tu poder interior para que puedas sanar y reconectar esos
            tres aspectos esenciales de tu ser.
          </p>
        </div>

        {/* Imagen de la sección */}
        <div className="imageContainer flex-shrink-0 mt-8 md:mt-0 md:ml-8 w-full md:w-[50%]">
          <Image
            src="/ser-sentir-hacer.png"
            alt="Conexión entre el ser, el sentir y el hacer"
            width={600} /* Ajusta el tamaño de la imagen */
            height={600} /* Ajusta el tamaño de la imagen */
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Llamado a la acción (CTA) */}
      <div className="cta-container text-center mt-12">
        <p className="text-xl font-semibold mb-4">
          Comienza tu viaje hacia el equilibrio hoy mismo con Tian Sanación
          Holística.
        </p>
        <p className="text-lg mb-6">
          Descubre más sobre nuestros servicios y reserva una sesión.
        </p>
        <Link href="/reserva" passHref>
          <button className="px-8 py-4 text-xl bg-[#eafffe] text-black font-semibold rounded-lg shadow-lg hover:bg-[#ffb3ab] transition duration-300">
            Reserva tu Sesión
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Awareness;
