// src/app/contact/page.jsx
import ContactPage from "../../components/ContactPage"; // Importamos el componente
import Navbar2 from "../../components/Navbar2"; // Ajusta la ruta

const Contact = () => {
  return (
    <div>
      <Navbar2 />
      <ContactPage /> {/* Renderizamos el componente aquí */}
    </div>
  );
};

export default Contact;
