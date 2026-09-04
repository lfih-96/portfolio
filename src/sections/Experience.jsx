import experience from '../data/experience'
import '../styles/experience.css'

function Experience() {
    return (
        <section
            id="experiencia"
            className="experience section"
        >
            <div className="container">

                <div className="section__header">
                    <span className="section__eyebrow">
                        Experiencia
                    </span>

                    <h2 className="section__title">
                        Experiencia profesional y tecnológica
                    </h2>

                    <p className="section__description">
                        Una trayectoria que comenzó con proyectos tecnológicos
                        aplicados a la educación y que actualmente evoluciona
                        hacia el desarrollo profesional de software.
                    </p>
                </div>

                <div className="experience__timeline">

                    {experience.map((item) => (
                        <article
                            key={item.id}
                            className="experience__item"
                        >

                            <div className="experience__period">
                                {item.period}
                            </div>

                            <div className="experience__content">

                                <span className="experience__type">
                                    {item.type}
                                </span>

                                <h3 className="experience__role">
                                    {item.role}
                                </h3>

                                <p className="experience__organization">
                                    {item.organization}
                                </p>

                                <p className="experience__description">
                                    {item.description}
                                </p>

                                {item.organizations && (
                                    <div className="experience__organizations">
                                        <span className="experience__label">
                                            Instituciones
                                        </span>

                                        <ul>
                                            {item.organizations.map((organization) => (
                                                <li key={organization}>
                                                    {organization}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {item.highlights?.length > 0 && (
                                    <ul className="experience__highlights">
                                        {item.highlights.map((highlight) => (
                                            <li key={highlight}>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {item.technologies?.length > 0 && (
                                    <ul className="experience__technologies">
                                        {item.technologies.map((technology) => (
                                            <li key={technology}>
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>

                        </article>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Experience