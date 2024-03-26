import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify'

import { preferences } from '../data'
import { fade, scale } from '../utils/transition'

import HeroSection from '../components/common/HeroSection'
import StepCards from '../components/common/StepCards'
import Button from '../components/common/Button'
import PreferenceSection from '../components/create/PreferenceSection'
import SummaryText from '../components/create/SummaryText'
import PlanSidebar from '../components/create/PlanSidebar'

const initialEntries = Object.fromEntries(preferences.map(({ slug }) => [slug, null]))

export default function CreatePlan() {
  const [settings, setSettings] = useState(initialEntries)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRefs = useRef({})
  const { deliveries } = settings

  const isCapsuleSelected = settings?.howDrink?.name === 'Capsule'
  const keysToCheck = isCapsuleSelected ? Object.keys(settings).filter(key => key !== 'grindOption') : Object.keys(settings)
  const isComplete = keysToCheck.every(key => settings[key])
  const totalPrice = deliveries?.prices[settings.quantity?.name] * deliveries?.multiplier || 0

  function setValue(key, value) {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }))
  }

  function scrollToSection(slug) {
    const element = sectionRefs.current[slug]
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  function openModal() {
    if (!totalPrice) return
    setIsModalOpen(true)
  }

  function complete() {
    window.scrollTo(0, 0)
    toast.success('Your plan has been created')
    setIsModalOpen(false)
    setSettings(initialEntries)
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
          <PlanSidebar settings={settings} scrollToSection={scrollToSection} />

          <div className="flex flex-col gap-[7.5rem] text-body leading-body md:gap-36 xl:max-w-[730px] xl:gap-[5.5rem]">
            <div className="flex flex-col gap-24 md:gap-[6.25rem] xl:gap-[5.5rem]">
              {preferences.map(preference => (
                <PreferenceSection
                  ref={el => (sectionRefs.current[preference.slug] = el)}
                  key={preference.slug}
                  settings={settings}
                  onChange={setValue}
                  preference={preference}
                  disabled={preference.slug === 'grindOption' && isCapsuleSelected}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 md:gap-10 xl:items-end">
              <div className="p-8 rounded-[10px] bg-plan-summary-mobile bg-cover text-white md:py-7 md:px-11 xl:bg-plan-summary-desktop xl:px-16">
                <h2 className="text-body leading-body uppercase text-white/50 mb-2">Order Summary</h2>
                <SummaryText settings={settings} />
              </div>
              <Button isButton disabled={!isComplete} onClick={openModal}>
                Create my plan!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Transition show={isModalOpen} as={Fragment}>
        <Dialog onClose={() => setIsModalOpen(false)} className="relative z-50">
          <Transition.Child as={Fragment} {...fade}>
            <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>
          </Transition.Child>
          <div className="fixed inset-0 w-screen overflow-auto">
            <div className="flex justify-center items-center inset-0 min-h-full px-6 py-8 overflow-y-auto">
              <Transition.Child as={Fragment} {...scale}>
                <Dialog.Panel className="w-full max-w-[445px] rounded-lg bg-white overflow-hidden md:max-w-[540px]">
                  <Dialog.Title className="px-6 py-7 bg-dark-gray-blue text-white font-serif font-black text-[1.75rem] leading-h4 md:px-14 md:pt-12 md:pb-10 md:text-h2 md:leading-h2">
                    Order Summary
                  </Dialog.Title>
                  <div className="px-6 pt-10 pb-6 text-gray md:p-14">
                    <SummaryText settings={settings} />
                    <Dialog.Description className="text-dark-gray-blue/80 md:mt-2">
                      Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount
                      codes can also be redeemed at the checkout.
                    </Dialog.Description>
                    <div className="mt-6 md:mt-12 font-serif font-black flex gap-5 items-center">
                      <p className="hidden md:block text-dark-gray-blue text-h3 leading-h3">${totalPrice.toFixed(2)} / mo</p>
                      <Button isButton style={{ flex: '1' }} onClick={complete}>
                        <span>Checkout</span>
                        <span className="md:hidden"> - ${totalPrice.toFixed(2)} / mo</span>
                      </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}
