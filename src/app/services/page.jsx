// app/service/page.jsx

import Services from "../../components/Services"; // Ajusta la ruta
import Navbar2 from "../../components/Navbar2"; // Ajusta la ruta
export default function Page() {
  return (
    <div>
      <Navbar2 />
      <Services />
      {/* Aquí puedes agregar el resto de contenido para la página de servicios */}
    </div>
  );
}
