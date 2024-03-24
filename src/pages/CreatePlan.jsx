import { useState } from 'react'

import HeroSection from '../components/HeroSection'
import StepCards from '../components/StepCards'
import LinkButton from '../components/LinkButton'
import PreferenceSection from '../components/PreferenceSection'
import SummaryText from '../components/SummaryText'
import { preferences } from '../data'

const preferencesEntries = preferences.map(({ slug }) => [slug, null])

export default function CreatePlan() {
  const [settings, setSettings] = useState(() => Object.fromEntries(preferencesEntries))
  const isGrindDisabled = settings?.preferences?.name === 'Capsule'

  function onChange(key, value) {
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
          <div className="hidden xl:block w-full max-w-[255px] font-serif font-black text-h4 leading-h4">
            <div className="flex flex-col gap-6 sticky top-12">
              {preferences.map((preference, index) => (
                <button
                  key={preference.slug}
                  className="text-left pb-6 border-b border-b-gray/25 last:border-none last:pb-0 text-dark-gray-blue/40 disabled:text-dark-gray-blue/20 hover:text-dark-gray-blue transition-colors"
                  disabled={preference.slug === 'grindOption' && isGrindDisabled}
                >
                  <span>{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="ml-7">{preference.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[7.5rem] text-body leading-body md:gap-36 xl:max-w-[730px] xl:gap-[5.5rem]">
            <div className="flex flex-col gap-24 md:gap-[6.25rem] xl:gap-[5.5rem]">
              {preferences.map(preference => (
                <PreferenceSection
                  key={preference.slug}
                  settings={settings}
                  onChange={onChange}
                  currentPreference={preference}
                  disabled={preference.slug === 'grindOption' && isGrindDisabled}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 md:gap-10 xl:items-end">
              <div className="p-8 rounded-[10px] bg-plan-summary-mobile bg-cover text-white md:py-7 md:px-11 xl:bg-plan-summary-desktop xl:px-16">
                <h2 className="text-body leading-body uppercase text-white/50 mb-2">Order Summary</h2>
                <SummaryText settings={settings} />
              </div>
              <LinkButton isButton>Create my plan!</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
