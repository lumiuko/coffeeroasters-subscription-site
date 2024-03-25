import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

import { fade } from '../utils/transition'
import NavLinks from '../components/NavLinks'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevState => !prevState)
  }

  useEffect(() => {
    const method = isMenuOpen ? 'add' : 'remove'
    document.body.classList[method]('no-scroll')
    window.scrollTo(0, 0)
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <header className="px-6 pt-8 pb-10 md:px-10 md:pt-10 md:pb-[3.375rem] xl:pb-11">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <img src="/shared/desktop/logo.svg" className="h-[18px] md:h-[26px]" alt="Coffeeroasters logo" />
        <button
          aria-expanded={isMenuOpen}
          aria-haspopup="menu"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <img src="/shared/mobile/icon-close.svg" alt="Close menu" aria-hidden="true" />
          ) : (
            <img src="/shared/mobile/icon-hamburger.svg" alt="Menu" aria-hidden="true" />
          )}
        </button>
        <ul className="hidden items-center gap-8 text-small leading-small tracking-wider uppercase font-bold text-gray desktop-nav md:flex">
          <NavLinks />
        </ul>
      </nav>
      <Transition show={isMenuOpen} {...fade}>
        <ul
          id="mobile-menu"
          className="fixed w-full h-[calc(100dvh-5.625rem)] top-0 mt-[5.625rem] left-0 z-10 nav-gradient text-center p-10 text-h4 leading-h4 font-serif font-black flex flex-col gap-8 md:hidden"
        >
          <NavLinks onClick={() => setIsMenuOpen(false)} />
        </ul>
      </Transition>
    </header>
  )
}
