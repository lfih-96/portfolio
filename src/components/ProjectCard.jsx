function ProjectCard({ project, index }) {
    const projectNumber = String(index + 1).padStart(2, '0')

    return (
        <article
            className={`project-card ${project.featured
                    ? 'project-card--featured'
                    : ''
                }`}
            data-reveal
        >

            <div className="project-card__header">

                <span className="project-card__number">
                    {projectNumber}
                </span>

                <span
                    className={`project-card__status ${project.status === 'En desarrollo'
                        ? 'project-card__status--development'
                        : ''
                        }`}
                >
                    {project.status}
                </span>

            </div>

            <div className="project-card__content">

                <span className="project-card__category">
                    {project.category}
                </span>

                <h3 className="project-card__title">
                    {project.title}
                </h3>

                <p className="project-card__description">
                    {project.description}
                </p>

                <ul className="project-card__technologies">
                    {project.technologies.map((technology) => (
                        <li key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>

            </div>

            <div className="project-card__actions">

                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                    >
                        Ver proyecto
                        <span aria-hidden="true"> ↗</span>
                    </a>
                )}

                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                    >
                        GitHub
                        <span aria-hidden="true"> ↗</span>
                    </a>
                )}

            </div>

        </article>
    )
}

export default ProjectCard