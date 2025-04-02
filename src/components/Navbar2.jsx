"use client"; // Aseguramos que esto sea un componente de cliente

import { useState, useEffect } from "react";
import {
  HomeIcon,
  FaceIcon,
  EnvelopeClosedIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import { FaShoppingCart, FaMagic } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Para controlar el estado del menú en móvil
  const [bgColor, setBgColor] = useState("transparent"); // Color de fondo del navbar
  const [lastScrollY, setLastScrollY] = useState(0); // Para hacer el seguimiento del scroll
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Para controlar la visibilidad del navbar
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false); // Estado del submenu
  const [timeoutId, setTimeoutId] = useState(null); // Para manejar el tiempo de ocultación del submenu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  // Efecto para manejar el scroll y cambiar la visibilidad del navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Cambiar color de fondo del navbar cuando se haga scroll hacia abajo
      if (currentScrollY > 50) {
        setBgColor("white"); // Fondo blanco cuando se hace scroll
      } else {
        setBgColor("transparent"); // Fondo transparente al principio
      }

      // Mostrar/ocultar navbar basado en la dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false); // Ocultar navbar
      } else {
        setIsNavbarVisible(true); // Mostrar navbar
      }

      setLastScrollY(currentScrollY); // Actualizamos el valor de scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Limpiar cualquier timeout previo cuando el mouse entra
    setIsSubMenuVisible(true);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setIsSubMenuVisible(false); // Desaparece después del retraso
    }, 300); // Ajusta el tiempo aquí (en milisegundos) para dar tiempo a que el cursor llegue al submenu
    setTimeoutId(newTimeoutId);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        isNavbarVisible ? "z-20" : "-z-10"
      }`}
    >
      <nav
        className={`text-black py-2 transition-all duration-300 ${
          bgColor === "white" ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/pnglunalogo.png" alt="Logo" className="w-16 h-16" />
          </div>

          {/* Menú en dispositivos grandes */}
          <div className="hidden md:flex space-x-8">
            {[
              {
                href: "/",
                icon: <HomeIcon className="w-6 h-6 text-black" />,
                label: "Home",
              },
              {
                href: "/about",
                icon: <FaceIcon className="w-6 h-6 text-black" />,
                label: "Conócenos",
              },
              {
                href: "/services",
                icon: <HeartIcon className="w-6 h-6 text-black" />,
                label: "Servicios",
                submenu: [
                  {
                    href: "/services/acupuncture",
                    label: "Acupuntura",
                  },
                  {
                    href: "/services/tarot",
                    label: "Tarot Terapéutico",
                  },
                ],
              },
              {
                href: "/sessions",
                icon: <FaMagic className="w-6 h-6 text-black" />,
                label: "Sesiones",
              },
              {
                href: "/contact",
                icon: <EnvelopeClosedIcon className="w-6 h-6 text-black" />,
                label: "Contacto",
              },
              {
                href: "/store",
                icon: <FaShoppingCart className="w-6 h-6 text-black" />,
                label: "Tienda",
              },
            ].map(({ href, icon, label, submenu }) => (
              <div
                key={href}
                className="relative group"
                onMouseEnter={submenu ? handleMouseEnter : null}
                onMouseLeave={submenu ? handleMouseLeave : null}
              >
                <Link
                  href={href}
                  className="text-[#ffb3ab] flex items-center space-x-2 relative"
                >
                  {icon}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[#ffb3ab] text-black py-1 px-2 rounded-md text-xs">
                    {label}
                  </span>
                </Link>
                {/* Submenú */}
                {submenu && (
                  <div
                    className={`absolute top-full left-0 shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isSubMenuVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ left: "0px" }} // Ajustamos el submenú para alinearlo más a la derecha
                  >
                    {submenu.map(({ href, label }) => (
                      <div
                        key={href}
                        className="flex flex-col items-center px-4 py-2 text-black mb-2"
                      >
                        <Link
                          href={href}
                          className="block w-full text-center py-2 px-4 rounded-lg bg-white hover:bg-[#ffb3ab] hover:text-white"
                        >
                          {label}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Menú hamburguesa en pantallas pequeñas */}
          <div className="md:hidden flex items-center pr-4">
            <button onClick={toggleMenu} className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "Conócenos" },
              {
                href: "/services",
                label: "Servicios",
                submenu: [
                  { href: "/services/acupuncture", label: "Acupuntura" },
                  {
                    href: "/services/tarot",
                    label: "Tarot Terapéutico",
                  },
                ],
              },
              { href: "/sessions", label: "Sesiones" },
              { href: "/contact", label: "Contacto" },
              { href: "/store", label: "Tienda" },
            ].map(({ href, label, submenu }) => (
              <div key={href} className="relative group">
                <button
                  onClick={submenu ? toggleSubMenu : null}
                  className="text-[#ffb3ab] flex items-center space-x-2 relative"
                >
                  <Link href={href} className="block w-full py-2">
                    {label}
                  </Link>
                </button>
                {/* Submenú en móviles */}
                {submenu && isSubMenuVisible && (
                  <div className="absolute top-full left-0 bg-white shadow-md rounded-md opacity-100 z-50">
                    {submenu.map(({ href, label }) => (
                      <div
                        key={href}
                        className="px-4 py-2 text-black hover:bg-[#ffb3ab] hover:text-white"
                      >
                        <Link href={href}>{label}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
