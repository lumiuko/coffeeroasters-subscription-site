export default function CollectionCard({ title, text, imageSource, imageAlt }) {
  return (
    <article className="max-w-[573px] flex flex-col items-center gap-6 md:flex-row md:gap-9 md:items-start xl:flex-col xl:items-center xl:gap-[4.5rem] xl:max-w-[255px]">
      <img src={imageSource} alt={imageAlt} className="max-w-[200px] md:max-w-[255px]" />
      <div className="text-center md:text-left md:mt-[1.875rem] xl:text-center xl:mt-0">
        <h3 className="font-serif font-black text-h4 leading-h4">{title}</h3>
        <p className="mt-4 md:mt-6">{text}</p>
      </div>
    </article>
  )
}
