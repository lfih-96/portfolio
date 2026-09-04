import socialLinks from '../data/socialLinks'
import '../styles/contact.css'

function Contact() {
  return (
    <section
      id="contacto"
      className="contact section"
    >
      <div className="container">

        <div className="contact__content">

          <span className="section__eyebrow">
            Contacto
          </span>

          <h2 className="contact__title">
            Construyamos algo juntos.
          </h2>

          <p className="contact__description">
            Estoy interesado en continuar creciendo profesionalmente
            en el área de desarrollo de software y sistemas de
            información, participando en proyectos donde pueda aportar,
            aprender y desarrollar soluciones tecnológicas.
          </p>

          <div className="contact__actions">

            <a
              href={`mailto:${socialLinks.email}`}
              className="button button--primary"
            >
              Enviar correo
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="button button--secondary"
            >
              GitHub ↗
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button button--secondary"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact