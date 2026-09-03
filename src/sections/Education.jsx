import '../styles/education.css'

function Education() {
    return (
        <section
            id="formacion"
            className="education section"
        >
            <div className="container">

                <div className="section__header">
                    <span className="section__eyebrow">
                        Formación
                    </span>

                    <h2 className="section__title">
                        Formación académica
                    </h2>

                    <p className="section__description">
                        Mi trayectoria académica combina informática, tecnología,
                        educación e ingeniería de software, fortaleciendo una visión
                        multidisciplinaria para el desarrollo de soluciones digitales.
                    </p>
                </div>

                <div className="education__timeline">

                    {/* Maestría */}
                    <article className="education__item">

                        <div className="education__period">
                            Actualidad
                        </div>

                        <div className="education__content">

                            <span className="education__status">
                                En curso
                            </span>

                            <h3>
                                Maestría en Ingeniería de Software
                                y Sistemas de Información
                            </h3>

                            <p className="education__institution">
                                TECH Universidad Tecnológica
                            </p>

                            <p className="education__modality">
                                Modalidad en línea
                            </p>

                            <p className="education__description">
                                Formación de posgrado orientada al fortalecimiento de
                                conocimientos relacionados con ingeniería de software,
                                desarrollo de sistemas y sistemas de información.
                            </p>

                            <div className="education__scholarship">
                                <span className="education__scholarship-label">
                                    Beca académica
                                </span>

                                <p>
                                    Beneficiario de una beca/descuento académico otorgado
                                    por World Literacy Organization (WLO).
                                </p>
                            </div>

                        </div>

                    </article>

                    {/* Licenciatura */}
                    <article className="education__item">

                        <div className="education__period">
                            2025
                        </div>

                        <div className="education__content">

                            <span
                                className="
                  education__status
                  education__status--completed
                "
                            >
                                Graduado
                            </span>

                            <h3>
                                Licenciado en Pedagogía de la Informática
                            </h3>

                            <p className="education__institution">
                                Universidad Nacional de Chimborazo
                            </p>

                            <p className="education__location">
                                Riobamba, Ecuador
                            </p>

                            <p className="education__description">
                                Formación en informática, programación, tecnologías
                                educativas, robótica y aplicación de herramientas
                                tecnológicas en diferentes contextos.
                            </p>

                        </div>

                    </article>

                </div>

            </div>
        </section>
    )
}

export default Education