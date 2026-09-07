import {
    FaCode,
    FaShieldAlt,
    FaVrCardboard,
} from 'react-icons/fa'

function ProjectIcon({ projectId }) {
    const icons = {
        'security-management': FaShieldAlt,
        'portfolio-web': FaCode,
        'unach-vr': FaVrCardboard,
    }

    const Icon = icons[projectId] || FaCode

    return (
        <Icon
            className="project-card__project-icon"
            aria-hidden="true"
        />
    )
}

export default ProjectIcon