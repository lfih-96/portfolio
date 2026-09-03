import '../styles/hero.css'

function Hero() {
    return (
        <section
            id="inicio"
            className="hero"
        >
            <div className="container hero__container">

                <div className="hero__content">

                    <p className="hero__eyebrow">
                        Software Developer
                    </p>

                    <h1 className="hero__title">
                        Luis Fernando
                        <span> Ilbay</span>
                    </h1>

                    <h2 className="hero__subtitle">
                        Licenciado en Pedagogía de la Informática
                        <br />
                        Maestrante en Ingeniería de Software
                        y Sistemas de Información
                    </h2>

                    <p className="hero__description">
                        Desarrollo soluciones de software y sistemas de información
                        orientados a resolver problemas reales, combinando programación,
                        desarrollo web y una sólida formación tecnológica.
                    </p>

                    <div className="hero__actions">

                        <a
                            href="#proyectos"
                            className="button button--primary"
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="/cv/cv-luis-fernando-ilbay.pdf"
                            className="button button--secondary"
                            download
                        >
                            Descargar CV
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero