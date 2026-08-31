import skills from '../data/skills'
import '../styles/skills.css'

function Skills() {
    return (
        <section
            id="habilidades"
            className="skills section"
        >
            <div className="container">

                <div className="section__header">

                    <span className="section__eyebrow">
                        Habilidades
                    </span>

                    <h2 className="section__title">
                        Tecnologías y herramientas
                    </h2>

                    <p className="section__description">
                        Tecnologías que utilizo actualmente para desarrollar
                        soluciones de software y que continúo fortaleciendo
                        mediante proyectos prácticos.
                    </p>

                </div>

                <div className="skills__grid">

                    {skills.map((category) => (
                        <article
                            key={category.id}
                            className="skills__category"
                        >
                            <span className="skills__category-number">
                                {String(
                                    skills.indexOf(category) + 1
                                ).padStart(2, '0')}
                            </span>

                            <h3 className="skills__category-title">
                                {category.title}
                            </h3>

                            <ul className="skills__list">

                                {category.technologies.map((technology) => (
                                    <li
                                        key={technology}
                                        className="skills__technology"
                                    >
                                        {technology}
                                    </li>
                                ))}

                            </ul>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Skills