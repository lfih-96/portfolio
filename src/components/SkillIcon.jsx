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
} from 'react-icons/fa'

function SkillIcon({ technology }) {
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

        Arduino: SiArduino,
        ESP32: SiEspressif,
        ESP8266: SiEspressif,
        'Arduino IDE': SiArduino,

        'Inteligencia Artificial': FaRobot,
        'Realidad Virtual': FaVrCardboard,
        'Realidad Aumentada': FaCube,
        'Impresión 3D': FaCube,
        Blender: SiBlender,
    }

    const Icon = icons[technology] || FaCode

    return (
        <Icon
            className="skills__technology-icon"
            aria-hidden="true"
        />
    )
}

export default SkillIcon