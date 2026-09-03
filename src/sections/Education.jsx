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
                        Mi formación combina informática, educación
                        e ingeniería de software, fortaleciendo una visión
                        multidisciplinaria para el desarrollo de soluciones tecnológicas.
                    </p>
                </div>

                <div className="education__timeline">

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

                            <p>
                                Programa cursado en modalidad en línea,
                                orientado al desarrollo de software,
                                arquitectura, sistemas de información
                                y tecnologías aplicadas a entornos profesionales.
                            </p>

                            <div className="education__scholarship">
                                <strong>
                                    Beca académica
                                </strong>

                                <p>
                                    Beneficiario de una beca/descuento académico
                                    otorgado por World Literacy Organization (WLO).
                                </p>
                            </div>

                        </div>

                    </article>

                    <article className="education__item">

                        <div className="education__period">
                            2025
                        </div>

                        <div className="education__content">

                            <span className="education__status education__status--completed">
                                Graduado
                            </span>

                            <h3>
                                Licenciatura en Pedagogía de la Informática
                            </h3>

                            <p className="education__institution">
                                Universidad Nacional de Chimborazo
                            </p>

                            <p>
                                Formación orientada a informática, programación,
                                tecnologías educativas, robótica, sistemas digitales
                                y aplicación de tecnología en procesos de aprendizaje.
                            </p>

                        </div>

                    </article>

                </div>

            </div>
        </section>
    )
}

export default Education