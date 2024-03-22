export default function StepCard({ number, title, text, isHomepage }) {
  return (
    <article className="text-center group md:text-left md:flex-1 xl:max-w-[285px]">
      <div className="hidden items-center md:flex mb-12 relative xl:mb-[4.25rem]">
        <div
          className={`group size-8 shrink-0 rounded-full border-2 border-dark-cyan z-10 ${
            isHomepage ? 'bg-light-cream' : 'bg-transparent'
          }`}
        ></div>
        <div
          className={`hidden group-first:block group-last:block absolute left-4 w-screen h-[2px] bg-pale-orange  ${
            isHomepage ? 'group-last:bg-light-cream' : 'group-last:bg-blue'
          }`}
        ></div>
      </div>
      <span className="font-serif font-black text-h1 leading-h1 text-pale-orange">{String(number).padStart(2, '0')}</span>
      <h3 className="mt-6 text-[1.75rem] leading-h4 font-serif font-black md:min-h-16 md:mt-10 md:max-w-[200px] xl:text-h3 xl:leading-h3">
        {title}
      </h3>
      <p className="mt-6 md:mt-10">{text}</p>
    </article>
  )
}
