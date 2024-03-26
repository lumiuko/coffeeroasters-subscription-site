export default function LocationCard({ country, imageSource, address, city, region, phone }) {
  return (
    <article className="flex flex-col items-center md:flex-1 md:items-start xl:max-w-[285px]">
      <img src={imageSource} className="h-[50px]" alt={`${country} map outline`} />
      <h3 className="mt-12 font-serif font-black text-[1.75rem] leading-h3 md:text-h4 xl:mt-11">{country}</h3>
      <p className="mt-[1.375rem] text-center md:text-left xl:mt-6 *:block">
        <span>{address}</span>
        <span>{city}</span>
        <span>{region}</span>
        <span>{phone}</span>
      </p>
    </article>
  )
}
