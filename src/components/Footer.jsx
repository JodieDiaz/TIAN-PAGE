import { FaInstagram, FaFacebook } from "react-icons/fa"; // Importamos react-icons

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Línea separadora */}
        <div className="border-t border-[#d1d5db] my-4"></div>

        {/* Información básica */}
        <div className="text-sm text-[#ffb3ab]">
          <p>© 2025 Tian Sanación Holística. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces de navegación básicos y redes sociales */}
        <div className="mt-2 flex justify-center space-x-6 text-sm text-[#ffb3ab]">
          <a
            href="/aviso-legal"
            className="hover:text-[#9cccc4] transition duration-300"
          >
            Aviso Legal
          </a>
          <a
            href="/contacto"
            className="hover:text-[#9cccc4] transition duration-300"
          >
            Contacto
          </a>
          <a
            href="/servicios"
            className="hover:text-[#9cccc4] transition duration-300"
          >
            Servicios
          </a>

          {/* Iconos de redes sociales */}
          <a
            href="https://www.instagram.com/tiansanacionholistica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#ffb3ab] text-2xl hover:text-[#9cccc4] transition duration-300" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61568008730767"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-[#ffb3ab] text-2xl hover:text-[#9cccc4] transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
