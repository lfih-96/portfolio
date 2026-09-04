import socialLinks from '../data/socialLinks'
import '../styles/hero.css'

function Hero() {
    return (
        <section
            id="inicio"
            className="hero"
        >
            <div className="container hero__container">

                <div className="hero__content">

                    <div className="hero__status">
                        <span className="hero__status-dot"></span>

                        <span>
                            Pasante en Global Exchange
                        </span>
                    </div>

                    <p className="hero__eyebrow">
                        Software Developer
                    </p>

                    <h1 className="hero__title">
                        Luis Fernando
                        <span> Ilbay</span>
                    </h1>

                    <div className="hero__education">

                        <p>
                            Licenciado en Pedagogía de la Informática
                        </p>

                        <span aria-hidden="true">•</span>

                        <p>
                            Maestrante en Ingeniería de Software
                            y Sistemas de Información
                        </p>

                    </div>

                    <p className="hero__description">
                        Desarrollo soluciones de software y sistemas de información
                        orientados a resolver problemas reales, combinando programación,
                        desarrollo web y una formación tecnológica multidisciplinaria.
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

                    <div className="hero__socials">

                        <span className="hero__socials-label">
                            Encuéntrame en
                        </span>

                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                            <span aria-hidden="true"> ↗</span>
                        </a>

                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                            <span aria-hidden="true"> ↗</span>
                        </a>

                    </div>

                </div>

                <div
                    className="hero__visual"
                    aria-hidden="true"
                >

                    <div className="hero__code-card">

                        <div className="hero__code-header">

                            <div className="hero__code-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <span>
                                profile.jsx
                            </span>

                        </div>

                        <div className="hero__code">

                            <p>
                                <span className="code-purple">
                                    const
                                </span>{' '}
                                developer = {'{'}
                            </p>

                            <p className="code-indent">
                                name:{' '}
                                <span className="code-green">
                                    'Luis Fernando'
                                </span>,
                            </p>

                            <p className="code-indent">
                                focus:{' '}
                                <span className="code-green">
                                    'Software Development'
                                </span>,
                            </p>

                            <p className="code-indent">
                                learning: [
                            </p>

                            <p className="code-indent-2">
                                <span className="code-green">
                                    'SQL'
                                </span>,
                            </p>

                            <p className="code-indent-2">
                                <span className="code-green">
                                    'PostgreSQL'
                                </span>
                            </p>

                            <p className="code-indent">
                                ],
                            </p>

                            <p>
                                {'}'}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero