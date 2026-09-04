import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

import '../styles/projects.css'

function Projects() {
    return (
        <section
            id="proyectos"
            className="projects section"
        >
            <div className="container">

                <div
                    className="section__header"
                    data-reveal
                >

                    <span className="section__eyebrow">
                        Proyectos
                    </span>

                    <h2 className="section__title">
                        Construyendo soluciones
                        mediante tecnología.
                    </h2>

                    <p className="section__description">
                        Proyectos en los que he aplicado programación,
                        desarrollo web, sistemas de información y
                        tecnologías emergentes para resolver diferentes
                        necesidades.
                    </p>

                </div>

                <div className="projects__grid">

                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Projects