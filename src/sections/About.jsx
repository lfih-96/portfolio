import '../styles/about.css'

function About() {
    return (
        <section
            id="sobre-mi"
            className="about section"
        >
            <div className="container">

                <div
                    className="section__header"
                    data-reveal
                >

                    <span className="section__eyebrow">
                        Sobre mí
                    </span>

                    <h2 className="section__title">
                        De la tecnología educativa
                        al desarrollo de software.
                    </h2>

                </div>

                <div className="about__content">

                    <div
                        className="about__text"
                        data-reveal="left"
                    >

                        <p>
                            Soy Licenciado en Pedagogía de la Informática y actualmente
                            curso una Maestría en Ingeniería de Software y Sistemas
                            de Información.
                        </p>

                        <p>
                            Mi formación me ha permitido trabajar con programación,
                            desarrollo web, robótica, microcontroladores, impresión 3D
                            y tecnologías emergentes, desarrollando una visión amplia
                            sobre cómo utilizar la tecnología para resolver problemas.
                        </p>

                        <p>
                            Actualmente estoy orientando mi crecimiento profesional
                            hacia el desarrollo de software y sistemas de información,
                            fortaleciendo mis conocimientos mediante experiencia
                            profesional y proyectos de software reales.
                        </p>

                    </div>

                    <div
                        className="about__highlights"
                        data-reveal="right"
                    >

                        <article className="about__highlight">

                            <span className="about__highlight-number">
                                01
                            </span>

                            <div>
                                <h3>Desarrollo de Software</h3>

                                <p>
                                    Diseño y desarrollo de soluciones mediante programación,
                                    desarrollo web y buenas prácticas de ingeniería.
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
                                    Interés en el análisis de procesos, datos y necesidades
                                    organizacionales para construir soluciones tecnológicas.
                                </p>
                            </div>

                        </article>

                        <article className="about__highlight">

                            <span className="about__highlight-number">
                                03
                            </span>

                            <div>
                                <h3>Perfil tecnológico multidisciplinario</h3>

                                <p>
                                    Experiencia previa con robótica, microcontroladores,
                                    tecnologías inmersivas e impresión 3D.
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