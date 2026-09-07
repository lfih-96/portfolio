import {
    FaExternalLinkAlt,
    FaGithub,
} from 'react-icons/fa'

import ProjectIcon from './ProjectIcon'

function ProjectCard({ project, index }) {
    const projectNumber = String(index + 1).padStart(2, '0')

    const isDevelopment =
        project.status === 'En desarrollo'

    return (
        <article
            className={`project-card ${project.featured
                    ? 'project-card--featured'
                    : ''
                }`}
            data-reveal
        >
            {/* CABECERA */}

            <div className="project-card__header">

                <div className="project-card__identity">

                    <span className="project-card__number">
                        {projectNumber}
                    </span>

                    {project.featured && (
                        <span className="project-card__featured-label">
                            Destacado
                        </span>
                    )}

                </div>

                <span
                    className={`project-card__status ${isDevelopment
                            ? 'project-card__status--development'
                            : 'project-card__status--completed'
                        }`}
                >
                    {isDevelopment && (
                        <span
                            className="project-card__status-dot"
                            aria-hidden="true"
                        />
                    )}

                    {project.status}
                </span>

            </div>

            {/* CUERPO */}

            <div className="project-card__body">

                <div className="project-card__icon-wrapper">

                    <ProjectIcon
                        projectId={project.id}
                    />

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

                    {/* TECNOLOGÍAS */}

                    <ul
                        className="project-card__technologies"
                        aria-label={`Tecnologías utilizadas en ${project.title}`}
                    >
                        {project.technologies.map(
                            (technology) => (
                                <li key={technology}>
                                    {technology}
                                </li>
                            )
                        )}
                    </ul>

                </div>

            </div>

            {/* ENLACES */}

            {(project.demo || project.github) && (
                <div className="project-card__actions">

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                        >
                            <FaExternalLinkAlt
                                aria-hidden="true"
                            />

                            <span>
                                Ver proyecto
                            </span>
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__link"
                        >
                            <FaGithub
                                aria-hidden="true"
                            />

                            <span>
                                GitHub
                            </span>
                        </a>
                    )}

                </div>
            )}

        </article>
    )
}

export default ProjectCard