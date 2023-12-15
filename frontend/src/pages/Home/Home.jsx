import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/SideBard/Sidebard.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Home.css';

const Home = () => {

    return (
        <>
            <div className="home-container">
                <Sidebar className="sidebarho" />
                <div className='box-home'>
                    <main className="main-content">
                        <div className="welcome-section">
                            <h3>Bienvenido a CoursesFinder</h3>
                            <p>Informate, Descubre</p>
                        </div>

                        <section>
                            <p>En CoursesFinder, nos enorgullece informarte de una amplia variedad de cursos que instituciones tengan disponibles</p>
                        </section>

                        <section>
                            <h3>Explora Cursos subidos por Instituciones</h3>
                            <p>Navega a través de nuestra colección de cursos podras encontrar Desde cursos introductorios hasta programas avanzados, encontrarás opciones que se adaptan a todos los niveles de experiencia.</p>
                        </section>

                        <section>
                            <h3>Personaliza tu Experiencia de Aprendizaje</h3>
                            <p>¡Haz que tu aprendizaje sea único! Personaliza tu perfil, busca cursos por caegorias especificas, y mantente al tanto de tu progreso. Con herramientas interactivas, te ofrecemos una experiencia de aprendizaje que se adapta a tus necesidades individuales.</p>
                        </section>

                        <section>
                            <h3>Únete a Nuestra Comunidad</h3>
                            <p>Forma parte de una comunidad vibrante de aprendices. En CoursesFinder, creemos en el poder del aprendizaje colaborativo y la construcción de una comunidad informativa y con interes al conocimiento, por que aprender es gratis.</p>
                        </section>

                        <div className="cta-section">
                            <section>
                                <h3>Comienza tu Viaje de Aprendizaje hoy mismo</h3>
                                <p>Regístrate ahora y comienza tu emocionante viaje de aprendizaje con CourseFinder. ¡Estamos emocionados de acompañarte en cada paso del camino!</p>
                            </section>
                            <Link to="/courses">Explora Nuestros Cursos</Link>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Home;