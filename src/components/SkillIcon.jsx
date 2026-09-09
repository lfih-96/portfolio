import {
    SiPython,
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiArduino,
    SiEspressif,
    SiBlender,
} from 'react-icons/si'

import {
    FaJava,
    FaCode,
    FaDatabase,
    FaRobot,
    FaCube,
    FaVrCardboard,
    FaLanguage,
} from 'react-icons/fa'

function SkillIcon({ name }) {
    const icons = {
        Python: SiPython,
        JavaScript: SiJavascript,
        Java: FaJava,
        'C++': FaCode,

        HTML5: SiHtml5,
        CSS3: SiCss,
        JSX: FaCode,
        React: SiReact,

        SQL: FaDatabase,
        PostgreSQL: SiPostgresql,

        Git: SiGit,
        GitHub: SiGithub,

        'IA aplicada al desarrollo de software': FaRobot,

        Arduino: SiArduino,
        ESP32: SiEspressif,
        ESP8266: SiEspressif,
        'Arduino IDE': SiArduino,

        'Realidad Virtual': FaVrCardboard,
        'Realidad Aumentada': FaVrCardboard,
        'Impresión 3D': FaCube,
        Blender: SiBlender,

        Español: FaLanguage,
        'Inglés B1': FaLanguage,
    }

    const Icon = icons[name] || FaCode

    return (
        <Icon
            className="skill-card__icon"
            aria-hidden="true"
        />
    )
}

export default SkillIcon