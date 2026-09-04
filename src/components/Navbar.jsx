import { useEffect, useState } from 'react'
import '../styles/navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')

    /* ========================================
       DETECTAR SCROLL DEL NAVBAR
    ======================================== */

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    /* ========================================
       BLOQUEAR SCROLL CON MENÚ MÓVIL ABIERTO
    ======================================== */

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    /* ========================================
       CERRAR MENÚ CON ESCAPE
    ======================================== */

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    /* ========================================
       CERRAR MENÚ AL CAMBIAR A ESCRITORIO
    ======================================== */

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    /* ========================================
       DETECTAR SECCIÓN ACTIVA
    ======================================== */

    useEffect(() => {
        const sectionIds = [
            'inicio',
            'sobre-mi',
            'habilidades',
            'proyectos',
            'experiencia',
            'formacion',
            'contacto',
        ]

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: '-35% 0px -55% 0px',
                threshold: 0,
            }
        )

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    /* ========================================
       FUNCIONES
    ======================================== */

    const closeMenu = () => {
        setIsOpen(false)
    }

    const handleNavClick = (section) => {
        setActiveSection(section)
        closeMenu()
    }

    return (
        <>
            <header
                className={`navbar ${isScrolled ? 'navbar--scrolled' : ''
                    }`}
            >
                <div className="container navbar__container">

                    {/* LOGO */}

                    <a
                        href="#inicio"
                        className={`navbar__brand ${activeSection === 'inicio'
                                ? 'navbar__brand--active'
                                : ''
                            }`}
                        onClick={() => handleNavClick('inicio')}
                    >
                        LF<span>.</span>
                    </a>

                    {/* BOTÓN HAMBURGUESA */}

                    <button
                        className={`navbar__toggle ${isOpen
                                ? 'navbar__toggle--active'
                                : ''
                            }`}
                        type="button"
                        aria-label={
                            isOpen
                                ? 'Cerrar menú de navegación'
                                : 'Abrir menú de navegación'
                        }
                        aria-expanded={isOpen}
                        aria-controls="main-navigation"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* NAVEGACIÓN */}

                    <nav
                        id="main-navigation"
                        className={`navbar__nav ${isOpen
                                ? 'navbar__nav--open'
                                : ''
                            }`}
                        aria-label="Navegación principal"
                    >

                        <a
                            href="#sobre-mi"
                            className={`navbar__link ${activeSection === 'sobre-mi'
                                    ? 'navbar__link--active'
                                    : ''
                                }`}
                            onClick={() =>
                                handleNavClick('sobre-mi')
                            }
                        >
                            Sobre mí
                        </a>

                        <a
                            href="#habilidades"
                            className={`navbar__link ${activeSection === 'habilidades'
                                    ? 'navbar__link--active'
                                    : ''
                                }`}
                            onClick={() =>
                                handleNavClick('habilidades')
                            }
                        >
                            Habilidades
                        </a>

                        <a
                            href="#proyectos"
                            className={`navbar__link ${activeSection === 'proyectos'
                                    ? 'navbar__link--active'
                                    : ''
                                }`}
                            onClick={() =>
                                handleNavClick('proyectos')
                            }
                        >
                            Proyectos
                        </a>

                        <a
                            href="#experiencia"
                            className={`navbar__link ${activeSection === 'experiencia'
                                    ? 'navbar__link--active'
                                    : ''
                                }`}
                            onClick={() =>
                                handleNavClick('experiencia')
                            }
                        >
                            Experiencia
                        </a>

                        <a
                            href="#formacion"
                            className={`navbar__link ${activeSection === 'formacion'
                                    ? 'navbar__link--active'
                                    : ''
                                }`}
                            onClick={() =>
                                handleNavClick('formacion')
                            }
                        >
                            Formación
                        </a>

                        <a
                            href="#contacto"
                            className={`navbar__contact ${activeSection === 'contacto'
                                    ? 'navbar__contact--active'
                                    : ''
                                }`}
                            onClick={() =>
                                handleNavClick('contacto')
                            }
                        >
                            Contacto
                        </a>

                    </nav>

                </div>
            </header>

            {/* OVERLAY DEL MENÚ MÓVIL */}

            {isOpen && (
                <button
                    className="navbar__overlay"
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={closeMenu}
                />
            )}
        </>
    )
}

export default Navbar