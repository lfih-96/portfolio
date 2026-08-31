import { useEffect, useState } from 'react'
import '../styles/navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <header
            className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        >
            <div className="container navbar__container">

                <a
                    href="#inicio"
                    className="navbar__brand"
                    onClick={closeMenu}
                >
                    LF<span>.</span>
                </a>

                <button
                    className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''
                        }`}
                    type="button"
                    aria-label="Abrir menú de navegación"
                    aria-expanded={isOpen}
                    aria-controls="main-navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    id="main-navigation"
                    className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''
                        }`}
                    aria-label="Navegación principal"
                >
                    <a
                        href="#sobre-mi"
                        className="navbar__link"
                        onClick={closeMenu}
                    >
                        Sobre mí
                    </a>

                    <a
                        href="#habilidades"
                        className="navbar__link"
                        onClick={closeMenu}
                    >
                        Habilidades
                    </a>

                    <a
                        href="#proyectos"
                        className="navbar__link"
                        onClick={closeMenu}
                    >
                        Proyectos
                    </a>

                    <a
                        href="#experiencia"
                        className="navbar__link"
                        onClick={closeMenu}
                    >
                        Experiencia
                    </a>

                    <a
                        href="#contacto"
                        className="navbar__contact"
                        onClick={closeMenu}
                    >
                        Contacto
                    </a>
                </nav>

            </div>
        </header>
    )
}

export default Navbar