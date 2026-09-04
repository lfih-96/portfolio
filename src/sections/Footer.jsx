import socialLinks from '../data/socialLinks'
import '../styles/footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer__container">

                <div className="footer__brand">
                    <a
                        href="#inicio"
                        className="footer__logo"
                    >
                        LF<span>.</span>
                    </a>

                    <p>
                        Diseñado y desarrollado por Luis Fernando Ilbay.
                    </p>
                </div>

                <div className="footer__socials">

                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href={`mailto:${socialLinks.email}`}>
                        Email
                    </a>

                </div>

                <p className="footer__copyright">
                    © {currentYear} Luis Fernando Ilbay
                </p>

            </div>
        </footer>
    )
}

export default Footer