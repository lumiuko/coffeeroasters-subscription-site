export default function HeroSection({ page, title, text, isBigger, isLargeHeading, children }) {
  return (
    <section
      className={`flex flex-col justify-center items-center rounded-[10px] px-6 ${page}-hero bg-cover md:px-[3.625rem] md:items-start xl:px-[5.25rem] ${
        isBigger ? 'min-h-[500px] xl:min-h-[600px]' : 'min-h-[400px] xl:min-h-[450px]'
      }`}
    >
      <div className="text-light-cream text-center max-w-[400px] md:text-left xl:max-w-[500px]">
        <h1
          className={`mb-6 font-serif font-black text-balance ${
            isLargeHeading
              ? 'text-h2 leading-10 font-black md:text-5xl xl:text-h1 xl:leading-h1 xl:mb-8'
              : 'text-[1.75rem] leading-7 md:text-h3 md:leading-10 xl:text-h2 xl:leading-h2'
          }`}
        >
          {title}
        </h1>
        <p className={`text-light-cream/80 xl:max-w-[440px] ${children ? 'mb-10 xl:mb-14' : ''}`}>{text}</p>
        {children}
      </div>
    </section>
  )
}
