import HeroSection from '../components/HeroSection'
import StepCards from '../components/StepCards'
import Preference from '../components/Preference'
import { preferences } from '../data'
import { useState } from 'react'
import LinkButton from '../components/LinkButton'
import SummaryOption from '../components/SummaryOption'

const preferencesEntries = preferences.map(({ slug }) => [slug, ''])

export default function CreatePlan() {
  const [settings, setSettings] = useState(() => Object.fromEntries(preferencesEntries))

  function onChange(value, key) {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }))
  }

  return (
    <main className="flex flex-col gap-[7.5rem] mb-[7.5rem] md:gap-36 md:mb-36 xl:gap-[10.5rem] xl:mb-[10.5rem]">
      <div className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <HeroSection
            isLargeHeading
            page="create"
            title="Create a plan"
            text="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
          />
        </div>
      </div>

      <section className="px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="px-6 py-20 rounded-[10px] bg-cover text-light-cream overflow-hidden md:px-10 md:pt-24 md:pb-[4.375rem] xl:px-[5.25rem] xl:py-[6.25rem] bg-blue">
            <StepCards />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <div className="max-w-[69.375rem] mx-auto flex justify-between">
          <h2 className="sr-only">Customize your coffee</h2>
          <div className="hidden xl:block max-w-[255px]"></div>
          <div className="flex flex-col gap-[7.5rem] text-body leading-body md:gap-36 xl:max-w-[730px] xl:gap-[5.5rem]">
            <div className="flex flex-col gap-24 md:gap-[6.25rem] xl:gap-[5.5rem]">
              {preferences.map(preference => (
                <Preference key={preference.slug} value={settings[preference.slug]} onChange={onChange} preference={preference} />
              ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 md:gap-10 xl:items-end">
              <div className="p-8 rounded-[10px] bg-plan-summary-mobile bg-cover text-white md:py-7 md:px-11 xl:bg-plan-summary-desktop xl:px-16">
                <h2 className="text-body leading-body uppercase text-white/50">Order Summary</h2>
                <p className="mt-2 font-serif font-black text-h4 leading-10">
                  “I drink my coffee as <SummaryOption value={settings.preferences} />, with a <SummaryOption value={settings.beanType} />{' '}
                  type of bean. <SummaryOption value={settings.quantity} /> ground ala <SummaryOption value={settings.grindOption} />, sent
                  to me <SummaryOption value={settings.deliveries} />
                  .”
                </p>
              </div>
              <LinkButton isButton>Create my plan!</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
