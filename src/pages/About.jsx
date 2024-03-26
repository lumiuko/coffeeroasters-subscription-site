import HeroSection from '../components/common/HeroSection'
import LocationCard from '../components/about/LocationCard'

export default function About() {
  return (
    <main className="px-6 mb-[7.5rem] md:px-10 md:mb-36 xl:mb-[10.5rem]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[7.5rem] md:gap-36 xl:gap-[10.5rem]">
        <HeroSection
          page="about"
          title="About Us"
          text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        />
        <section className="flex flex-col items-center gap-12 md:flex-row md:gap-[4.375rem] xl:justify-center xl:gap-[7.75rem]">
          <picture className="shrink-0">
            <source srcSet="/about/desktop/image-commitment.jpg" media="(min-width: 1280px)" />
            <source srcSet="/about/tablet/image-commitment.jpg" media="(min-width: 768px)" />
            <img src="/about/mobile/image-commitment.jpg" alt="Barista preparing coffee." className="rounded-lg" />
          </picture>
          <div className="text-center md:text-left xl:max-w-[540px]">
            <h2 className="text-h3 leading-h2 font-serif font-black xl:text-h2">Our commitment</h2>
            <p className="text-dark-gray-blue/80 mt-[1.875rem] xl:mt-8">
              We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel
              nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we
              roast each lot to highlight tasting profiles distinctive to their native growing region.
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-16 bg-about-quality-mobile bg-cover text-light-cream px-6 pb-[3.75rem] rounded-[10px] mt-[4.875rem] md:pb-[4.25rem] md:mt-40 md:bg-about-quality-tablet xl:flex-row xl:px-[5.25rem] xl:pb-[5.5rem] xl:mb-[5.5rem] xl:bg-about-quality-desktop">
          <picture className="xl:order-1">
            <source srcSet="/about/desktop/image-quality.jpg" media="(min-width: 1280px)" />
            <source srcSet="/about/tablet/image-quality.jpg" media="(min-width: 768px)" />
            <img
              src="/about/mobile/image-quality.jpg"
              className="rounded-lg mt-[-4.875rem] md:-mt-40 xl:mt-[-5.5rem]"
              alt="Cup of coffee on a table."
            />
          </picture>
          <div className="text-center max-w-[540px] xl:text-left">
            <h2 className="text-[1.75rem] leading-none font-serif font-black md:text-h3 md:leading-h2 xl:text-h2">
              Uncompromising quality
            </h2>
            <p className="mt-6 text-light-cream/80 xl:mt-8">
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast
              date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
        </section>
        <section className="xl:ml-[5.25rem]">
          <h2 className="font-serif font-black text-gray text-center text-h4 leading-h4 md:text-left">Our headquarters</h2>
          <div className="mt-[4.5rem] flex flex-col gap-20 text-body leading-body md:flex-row md:gap-[0.625rem] xl:gap-24">
            <LocationCard
              country="United Kingdom"
              imageSource="/about/desktop/illustration-uk.svg"
              address="68 Asfordby Rd"
              city="Alcaston"
              region="SY6 1YA"
              phone="+44 1241 918425"
            />
            <LocationCard
              country="Canada"
              imageSource="/about/desktop/illustration-canada.svg"
              address="1528 Eglinton Avenue"
              city="Toronto"
              region="Ontario M4P 1A6"
              phone="+1 416 485 2997"
            />
            <LocationCard
              country="Australia"
              imageSource="/about/desktop/illustration-australia.svg"
              address="36 Swanston Street"
              city="Kewell"
              region="Victoria"
              phone="+61 4 9928 3629"
            />
          </div>
        </section>
      </div>
    </main>
  )
}
