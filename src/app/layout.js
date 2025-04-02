import "./globals.css"; // Asegúrate de que los estilos globales estén bien importados
import Footer from "../components/Footer"; // Asegúrate de que el path sea correcto dependiendo de donde guardes Footer.jsx

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>

        {/* Agrega el pie de página aquí */}
        <Footer />
      </body>
    </html>
  );
}
