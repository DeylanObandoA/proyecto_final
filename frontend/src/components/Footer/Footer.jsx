import React from "react";
// import logotext from './logotext.png';
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="copytext">
            <button className="csfooter" data-text="Awesome">
              <span className="actual-text">&nbsp;CourseFinder&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;CourseFinder&nbsp;</span>
            </button>
            <p>&copy; 2023 CourseFinder | Todos los derechos reservados</p>
          <div className="flex">
            <div>
          <div className="footerorder">
              <p>Contacto: <a href="deylanobando12@gmail.com">deylanobando12@gmail.com</a></p>
              <p>Contacto: <a href="ariassteven555@gmail.com">ariassteven555@gmail.com</a></p>
              <p>Teléfono: +506 84680502</p>
            </div>
            <p>Acerca de nosotros</p>
            <p>CourseFinder es una plataforma dedicada a facilitar la búsqueda y publicación de cursos. Nuestra misión es conectar a estudiantes y educadores de manera sencilla y efectiva.</p>
          </div>
        </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
