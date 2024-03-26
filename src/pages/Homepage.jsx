import CollectionCard from '../components/homepage/CollectionCard'
import FeatureCard from '../components/homepage/FeatureCard'
import HeroSection from '../components/common/HeroSection'
import Button from '../components/common/Button'
import StepCards from '../components/common/StepCards'

export default function Homepage() {
  return (
    <main className="px-6 mb-[7.5rem] md:px-10 md:mb-36 xl:mb-[12.5rem]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[7.5rem] md:gap-36 xl:gap-[12.5rem]">
        <HeroSection
          isBigger
          isLargeHeading
          page="homepage"
          title="Great coffee made simple."
          text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        >
          <Button to="/create">Create your plan</Button>
        </HeroSection>
        <section className="flex flex-col items-center xl:-mt-16">
          <h2 className="sr-only">Our collection</h2>
          <picture>
            <source srcSet="/home/desktop/our-collection-heading.svg" media="(min-width: 1280px)" />
            <source srcSet="/home/tablet/our-collection-heading.svg" media="(min-width: 768px)" />
            <img src="/home/mobile/our-collection-heading.svg" alt="Our collection text." aria-hidden="true" />
          </picture>
          <div className="mt-3 flex flex-col items-center gap-12 md:gap-8 md:mt-[-3.625rem] xl:flex-row xl:gap-[1.875rem] xl:-mt-16">
            <CollectionCard
              title="Gran Espresso"
              text="Light and flavorful blend with cocoa and black pepper for an intense experience"
              imageSource="/home/desktop/image-gran-espresso.png"
              imageAlt="Paper bag with Gran Espresso print."
            />
            <CollectionCard
              title="Planalto"
              text="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
              imageSource="/home/desktop/image-planalto.png"
              imageAlt="Paper bag with Planalto print."
            />
            <CollectionCard
              title="Piccollo"
              text="Mild and smooth blend featuring notes of toasted almond and dried cherry"
              imageSource="/home/desktop/image-piccollo.png"
              imageAlt="Paper bag with Piccollo print."
            />
            <CollectionCard
              title="Danche"
              text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
              imageSource="/home/desktop/image-danche.png"
              imageAlt="Paper bag with Danche print."
            />
          </div>
        </section>
        <section className="bg-blue text-light-cream px-6 pt-16 rounded-[0.625rem] flex flex-col gap-16 mb-[37.25rem] md:px-[3.625rem] md:pt-14 md:gap-[4.375rem] md:mb-[18.125rem] xl:pt-[6.25rem] xl:px-[5.25rem] xl:gap-[5.375rem] xl:mb-[9.375rem]">
          <div className="text-center max-w-[540px] self-center">
            <h2 className="font-serif font-black text-[1.75rem] leading-none md:text-h3 md:leading-h2 xl:text-h2">Why choose us?</h2>
            <p className="mt-6 text-light-cream/80 xl:mt-8">
              A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with
              the best coffee growers to give you a more impactful experience on every level.
            </p>
          </div>
          <div className="flex flex-col gap-6 mb-[-37.25rem] md:mb-[-18.125rem] xl:flex-row xl:justify-between xl:mb-[-9.375rem]">
            <FeatureCard
              title="Best quality"
              text="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
              imageSource="/home/desktop/icon-coffee-bean.svg"
              imageAlt="Coffee bean."
            />
            <FeatureCard
              title="Exclusive benefits"
              text="Special offers and swag when you subscribe, including 30% off your first shipment."
              imageSource="/home/desktop/icon-gift.svg"
              imageAlt="Gift."
            />
            <FeatureCard
              title="Free shipping"
              text="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
              imageSource="/home/desktop/icon-truck.svg"
              imageAlt="Truck."
            />
          </div>
        </section>
        <section className="xl:max-w-[1045px] xl:ml-[5.25rem] overflow-hidden">
          <h2 className="text-h4 leading-h4 font-serif font-black text-center text-gray mb-20 md:text-left md:mb-10 xl:mb-20">
            How it works
          </h2>
          <StepCards isHomepage />
          <div className="mt-20 flex justify-center md:justify-start md:mt-11 xl:mt-16">
            <Button to="/create">Create your plan</Button>
          </div>
        </section>
      </div>
    </main>
  )
}
