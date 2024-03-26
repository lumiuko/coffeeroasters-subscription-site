export default function FeatureCard({ title, text, imageSource, imageAlt }) {
  return (
    <article className="bg-dark-cyan rounded-lg flex flex-col justify-between items-center gap-14 px-3 pt-[4.5rem] pb-[3.25rem] min-h-[383px] md:flex-row md:min-h-0 md:max-w-[700px] md:self-center md:py-10 md:pl-[4.375rem] md:pr-12 xl:flex-col xl:max-w-[350px] xl:pt-[4.5rem] xl:px-12 xl:pb-12 xl:flex-1 xl:self-stretch">
      <img src={imageSource} alt={imageAlt} className="md:w-[56px] xl:w-[72px]" />
      <div className="text-center md:flex-1 md:text-left xl:text-center xl:flex-grow-0">
        <h3 className="font-serif font-black text-h4 leading-h4">{title}</h3>
        <p className="max-w-[212px] mt-6 md:max-w-none md:mt-[1.125rem] xl:mt-6">{text}</p>
      </div>
    </article>
  )
}
