import NavLinks from './NavLinks'

export default function Footer() {
  return (
    <footer className="px-6 mb-[4.5rem] md:px-10">
      <div className="max-w-7xl mx-auto bg-blue px-6 py-[3.375rem] flex flex-col items-center xl:px-[5.25rem] xl:py-12 xl:flex-row">
        <img src="/shared/desktop/logo-light.svg" className="h-[24px] md:h-[26px]" alt="Coffeeroasters logo" />
        <ul className="mt-12 text-center text-small leading-small uppercase font-bold tracking-wider text-gray flex flex-col gap-6 md:mt-8 md:flex-row md:gap-8 xl:mt-0 xl:ml-[6.25rem] footer-nav">
          <NavLinks />
        </ul>
        <div className="mt-12 flex items-center gap-6 md:mt-16 xl:mt-0 xl:ml-auto">
          <a href="#" aria-label="Facebook">
            <img src="/shared/desktop/icon-facebook.svg" alt="Facebook logo" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="/shared/desktop/icon-twitter.svg" alt="Twitter logo" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/shared/desktop/icon-instagram.svg" alt="Instagram logo" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
