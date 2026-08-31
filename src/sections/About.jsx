import '../styles/about.css'

function About() {
    return (
        <section
            id="sobre-mi"
            className="about section"
        >
            <div className="container">

                <div className="section__header">
                    <span className="section__eyebrow">
                        Sobre mí
                    </span>

                    <h2 className="section__title">
                        Construyendo soluciones,
                        no solamente código.
                    </h2>
                </div>

                <div className="about__content">

                    <div className="about__text">

                        <p>
                            Soy Ingeniero en Desarrollo de Software y Sistemas de
                            Información, con experiencia profesional como desarrollador
                            junior.
                        </p>

                        <p>
                            Me interesa diseñar y desarrollar soluciones de software
                            que permitan resolver problemas reales, optimizar procesos
                            y gestionar información de manera eficiente.
                        </p>

                        <p>
                            Actualmente continúo fortaleciendo mis conocimientos en
                            desarrollo web, arquitectura de software, backend y
                            tecnologías modernas, aplicándolos en proyectos reales.
                        </p>

                    </div>

                    <div className="about__highlights">

                        <article className="about__highlight">
                            <span className="about__highlight-number">
                                01
                            </span>

                            <div>
                                <h3>Desarrollo de Software</h3>

                                <p>
                                    Construcción de soluciones mantenibles orientadas
                                    a necesidades reales.
                                </p>
                            </div>
                        </article>

                        <article className="about__highlight">
                            <span className="about__highlight-number">
                                02
                            </span>

                            <div>
                                <h3>Sistemas de Información</h3>

                                <p>
                                    Análisis de procesos, información y necesidades
                                    para diseñar soluciones tecnológicas.
                                </p>
                            </div>
                        </article>

                        <article className="about__highlight">
                            <span className="about__highlight-number">
                                03
                            </span>

                            <div>
                                <h3>Aprendizaje continuo</h3>

                                <p>
                                    Incorporación progresiva de nuevas tecnologías
                                    mediante proyectos prácticos.
                                </p>
                            </div>
                        </article>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About