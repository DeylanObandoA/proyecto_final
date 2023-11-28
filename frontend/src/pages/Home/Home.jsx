import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";

const home = () => {
    return (

        <div className="home-container">
            <header>
                <h1>Bienvenido a CoursesFinder</h1>
                <p>Descubre y Aprende con Nosotros</p>
            </header>

            <section>
                <h2>En CoursesFinder, nos enorgullece informarte de una amplia variedad de cursos que instituciones tengan disponibles</h2>
            </section>

            <section>
                <h2>Explora Cursos de Calidad</h2>
                <p>Navega a través de nuestra colección de cursos podras encontrar Desde cursos introductorios hasta programas avanzados, encontrarás opciones que se adaptan a todos los niveles de experiencia.</p>
            </section>

            <section>
                <h2>Personaliza tu Experiencia de Aprendizaje</h2>
                <p>¡Haz que tu aprendizaje sea único! Personaliza tu perfil, busca cursos por caegorias especificas, y mantente al tanto de tu progreso. Con herramientas interactivas, te ofrecemos una experiencia de aprendizaje que se adapta a tus necesidades individuales.</p>
            </section>

            <section>
                <h2>Únete a Nuestra Comunidad</h2>
                <p>Forma parte de una comunidad vibrante de aprendices. En CoursesFinder, creemos en el poder del aprendizaje colaborativo y la construcción de una comunidad informativa y con interes al conocimiento, por que aprender es gratis.</p>
            </section>

            <section>
                <h2>Comienza tu Viaje de Aprendizaje hoy mismo</h2>
                <p>Regístrate ahora y comienza tu emocionante viaje de aprendizaje con [Nombre de tu Plataforma]. ¡Estamos emocionados de acompañarte en cada paso del camino!</p>
                <Link to="/courses">Explora Nuestros Cursos</Link>
            </section>
        </div>
    );
};


export default home