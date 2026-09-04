import { useEffect } from 'react'

function useRevealAnimations() {
    useEffect(() => {
        const elements = document.querySelectorAll('[data-reveal]')

        if (!elements.length) {
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible')

                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -60px 0px',
            }
        )

        elements.forEach((element) => {
            observer.observe(element)
        })

        return () => {
            observer.disconnect()
        }
    }, [])
}

export default useRevealAnimations