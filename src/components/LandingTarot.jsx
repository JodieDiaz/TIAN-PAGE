export default function LandingTarot() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center relative">
        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/lluviaestrellas.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>

        {/* Capa opaca sobre toda la imagen con más opacidad */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Contenedor de texto */}
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-wide mb-6">
            Descubre los Secretos de tu Alma
          </h1>
          <p className="text-white text-lg md:text-2xl font-semibold mb-8">
            Conecta con tu esencia más profunda a través del Tarot Terapéutico.
            Una guía para el autoconocimiento y la realización personal.
          </p>

          {/* Botón de acción con texto en negro */}
          <a
            href="#reserva"
            className="bg-[#FFB88C] text-black px-8 py-4 rounded-md text-lg font-bold shadow-lg hover:bg-[#AA8EAF] transition-colors"
          >
            Reserva tu Sesión
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 text-[#AA8EAF] text-2xl animate-bounce">
          ⬇️
        </div>
      </section>

      {/* Sección: Problema y Solución */}
      <section className="bg-gradient-to-r from-[#fbddff] to-[#ffebdf] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#AA8EAF] mb-8">
            ¿Te Sientes Perdid@? ¡Es Hora de Reconectar con Tu Propósito!
          </h2>
          <h3 className="text-2xl font-semibold text-[#171717] mb-6">
            El Tarot Terapéutico puede ayudarte a encontrar el camino hacia una
            vida plena y conectada.
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <div className="text-lg md:text-xl text-[#171717] max-w-2xl">
              <p className="mb-6">
                En momentos de incertidumbre, es común sentir que no tenemos la
                claridad necesaria para tomar decisiones importantes o para
                encontrar el equilibrio en nuestras vidas. Las preocupaciones
                diarias, los miedos o la falta de dirección pueden alejarnos de
                nuestra verdadera esencia y potencial.
              </p>
              <p>
                <strong>El Tarot Terapéutico</strong> es más que una simple
                lectura; es una herramienta poderosa para reconectar contigo
                mismo. A través del Tarot, accederás a las respuestas que tu
                alma ya conoce, obteniendo claridad sobre tus desafíos y la
                dirección que debes tomar. Cada carta revela aspectos profundos
                de tu ser, ayudándote a comprender patrones ocultos y a
                empoderarte para tomar decisiones alineadas con tu propósito.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="/ayudatarot.jpeg" // Asegúrate de que la ruta esté correcta
                alt="Imagen Tarot"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#reserva"
              className="bg-[#19bbb6] text-black px-8 py-4 rounded-md text-xl font-semibold shadow-md hover:bg-[#9cccc4] transition-colors"
            >
              Descubre tu Camino
            </a>
          </div>
        </div>
      </section>

      {/* Sección: Beneficios del Tarot Terapéutico */}
      <section className="bg-gradient-to-r from-[#fbddff] to-[#ffebdf] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#AA8EAF] mb-8">
            Beneficios del Tarot Terapéutico
          </h2>
          <p className="text-lg md:text-2xl font-semibold text-[#171717] mb-12">
            Descubre cómo el Tarot puede ayudarte a conectar con tu propósito y
            transformar tu vida.
          </p>
          <div className="mb-12">
            <img
              src="/conectadauniverso.jpeg" // Ruta correcta de la imagen
              alt="Conexión con el Universo"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Contenedor de los beneficios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🧘‍♀️</div>{" "}
              {/* Emoticón para Autoconocimiento */}
              <h3 className="text-2xl font-semibold text-[#171717] mb-4">
                Autoconocimiento
              </h3>
              <p className="text-lg text-[#171717]">Conoce tu verdadero ser.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🧭</div>{" "}
              {/* Emoticón para Claridad y Dirección */}
              <h3 className="text-2xl font-semibold text-[#171717] mb-4">
                Claridad y Dirección
              </h3>
              <p className="text-lg text-[#171717]">
                Toma decisiones conscientes.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">⚡</div>{" "}
              {/* Emoticón para Empoderamiento Personal */}
              <h3 className="text-2xl font-semibold text-[#171717] mb-4">
                Empoderamiento Personal
              </h3>
              <p className="text-lg text-[#171717]">
                Encuentra tu fuerza interior.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">💖</div>{" "}
              {/* Emoticón para Sanación Emocional */}
              <h3 className="text-2xl font-semibold text-[#171717] mb-4">
                Sanación Emocional
              </h3>
              <p className="text-lg text-[#171717]">
                Libérate del estrés y las emociones bloqueadas.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🛤️</div>{" "}
              {/* Emoticón para Conexión con tu Propósito */}
              <h3 className="text-2xl font-semibold text-[#171717] mb-4">
                Conexión con tu Propósito
              </h3>
              <p className="text-lg text-[#171717]">
                Encuentra el camino que te llevará a tu destino.
              </p>
            </div>

            {/* Nuevo beneficio */}
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">🌟</div>{" "}
              {/* Emoticón para Transformación Personal */}
              <h3 className="text-2xl font-semibold text-[#171717] mb-4">
                Transformación Personal
              </h3>
              <p className="text-lg text-[#171717]">
                Experimenta un cambio profundo en tu vida.
              </p>
            </div>
          </div>

          {/* Llamada a la acción */}
          <div className="mt-10">
            <a
              href="#reserva"
              className="bg-[#19bbb6] text-black px-8 py-4 rounded-md text-xl font-semibold shadow-md hover:bg-[#9cccc4] transition-colors"
            >
              Conéctate con tu esencia
            </a>
          </div>
        </div>
      </section>

      {/* Sección: Autoridad y Confianza */}
      <section className="bg-[#f3f3f3] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#AA8EAF] mb-6">
            El Tarot Terapéutico es Un Camino hacia el Autoconocimiento
          </h2>
          <p className="text-xl text-[#171717] mb-10">
            "Te ayudo a descubrir tu camino a través del tarot, proporcionando
            claridad, sanación emocional y crecimiento espiritual."
          </p>
          <div className="flex flex-col md:flex-row gap-16 justify-center">
            {/* Imagen del tarot */}
            <div className="flex-shrink-0 max-w-md">
              <img
                src="/ridertarot.jpeg"
                alt="Mazo Rider Tarot"
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-lg text-[#171717] font-semibold mt-4">
                El Tarot, una herramienta universal de autodescubrimiento.
              </p>
            </div>

            {/* Texto y referencia de Jung */}
            <div className="max-w-lg text-left">
              <p className="text-lg text-[#171717] mb-6">
                "El Tarot Terapéutico es una herramienta poderosa que, como
                señaló Carl Jung, conecta con los arquetipos universales,
                revelando aspectos profundos de la psique humana. A través de
                los Arcanos Mayores, es posible explorar patrones inconscientes
                que facilitan la sanación interior y guían la toma de decisiones
                alineadas con nuestro propósito de vida."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/JungTarot.png"
                  alt="Carl Jung"
                  className="w-40 h-40 rounded-full shadow-md"
                />
                <p className="text-lg text-[#171717] italic">
                  - Carl Jung, fue un psicoanalista y pionero en el estudio de
                  los arquetipos.
                </p>
              </div>
              <p className="text-lg text-[#171717] mt-6">
                El Tarot Terapéutico que ofrezco no solo busca darte respuestas
                a tus preguntas, sino que también te conecta con las fuerzas más
                profundas de tu psique y te ayuda a descubrir tu verdadero
                camino.
              </p>
            </div>
          </div>

          {/* Testimonios */}
          <div className="mt-12">
            <h3 className="text-2xl text-[#171717] font-semibold mb-4">
              Testimonios
            </h3>
            <p className="text-lg text-[#171717] italic mb-4">
              "Gracias al tarot, descubrí mi propósito y ahora vivo con claridad
              y paz interior." – María G.
            </p>
            <p className="text-lg text-[#171717] italic">
              "Nunca imaginé lo transformador que sería una sesión de tarot. El
              enfoque terapéutico me ayudó a desbloquear mis miedos y tomar
              decisiones importantes." – Ana R.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#reserva"
              className="bg-[#19bbb6] text-black px-8 py-4 rounded-md text-xl font-semibold shadow-md hover:bg-[#9cccc4] transition-colors"
            >
              Reserva tu Sesión de Tarot Terapéutico
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/canalizaciontarot.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <video className="object-cover w-full h-full" autoPlay loop muted>
            <source src="/manofuccia.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative py-16 px-6 text-black max-w-7xl mx-auto">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            {" "}
            {/* Fondo opaco detrás del texto */}
            <h2 className="text-4xl font-extrabold mb-6 text-center text-white">
              Qué Esperar en una Sesión
            </h2>
            <p className="text-xl mb-10 text-center text-white">
              Experimenta un proceso introspectivo y revelador en Tian Sanación
              Holística.
            </p>
            <div className="space-y-8 text-lg leading-relaxed text-white">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex justify-center items-center text-white">
                  <span className="text-xl">🗣️</span>{" "}
                  {/* Emoticón de diálogo */}
                </div>
                <div>
                  <p className="font-bold">Consulta Inicial:</p>
                  <p>
                    Una conversación para entender tus inquietudes, objetivos y
                    áreas en las que buscas claridad.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex justify-center items-center text-white">
                  <span className="text-xl">💫</span>{" "}
                  {/* Emoticón de energía */}
                </div>
                <div>
                  <p className="font-bold">Canalización:</p>
                  <p>
                    Antes de comenzar, sintonizamos con tu energía y abrimos un
                    espacio sagrado.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex justify-center items-center text-white">
                  <span className="text-xl">🔮</span>{" "}
                  {/* Emoticón de bola de cristal */}
                </div>
                <div>
                  <p className="font-bold">Lectura de Cartas:</p>
                  <p>
                    Selección e interpretación de cartas en relación a tu
                    situación actual.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex justify-center items-center text-white">
                  <span className="text-xl">🧘‍♀️</span>{" "}
                  {/* Emoticón de meditación */}
                </div>
                <div>
                  <p className="font-bold">Interpretación y Discusión:</p>
                  <p>
                    Exploramos el significado de las cartas y diseñamos acciones
                    concretas.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex justify-center items-center text-white">
                  <span className="text-xl">📝</span> {/* Emoticón de plan */}
                </div>
                <div>
                  <p className="font-bold">Plan de Acción:</p>
                  <p>
                    Creamos un plan personalizado para abordar tus desafíos y
                    maximizar tu potencial.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a
                href="/reservar"
                className="inline-block bg-purple-600 text-white py-3 px-8 rounded-lg text-xl font-bold hover:bg-purple-700 transition duration-300"
              >
                Comienza tu Transformación
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-purple-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Descuento Especial para Tu Viaje Espiritual
          </h2>
          <p className="text-2xl mb-10">
            10% de Descuento en tu Primera Sesión
          </p>
          <p className="text-lg mb-10">
            ¡No dejes pasar esta oportunidad única! Reserva ahora y recibe un
            10% de descuento en tu primera sesión de Tarot evolutivo. Los cupos
            son limitados, ¡agenda tu sesión antes de que se agoten!
          </p>

          <div className="mb-8 flex justify-center">
            <div className="text-6xl">🔮✨💫</div>{" "}
            {/* Emoticones relacionados con el tarot y lo espiritual */}
          </div>

          <a
            href="/reservar"
            className="inline-block bg-white text-purple-600 py-3 px-8 rounded-lg text-xl font-bold hover:bg-gray-200 transition duration-300"
          >
          ¡Lo Quiero!
          </a>
        </div>
      </section>

      {/* Sección Final con Fondo Degradado y Fondo de Imagen */}
      <section className="bg-gradient-to-r from-[#f3f3f3] via-[#fbddff] to-[#FFB88C] py-20 relative">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/caminotarot.png"
            alt="Camino del Tarot"
            className="w-full h-full object-cover opacity-50" // Ajusta la opacidad aquí
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-[#171717] relative inline-block px-6 py-3">
            ¿Estás Listo para Transformarte?
          </h2>
          <p className="text-2xl font-extrabold mb-6 text-[#171717]">
            El Tarot te guía y transforma. Este es el primer paso hacia una
            nueva versión de ti mismo. Reserva tu sesión hoy y comienza tu viaje
            hacia el autoconocimiento y la sanación.
          </p>

          <a
            href="#reserva"
            className="inline-block bg-[#FFB88C] text-black py-3 px-8 rounded-lg text-xl font-bold hover:bg-[#AA8EAF] transition duration-300"
          >
            Reserva tu Sesión Ahora
          </a>
        </div>
      </section>
    </>
  );
}
