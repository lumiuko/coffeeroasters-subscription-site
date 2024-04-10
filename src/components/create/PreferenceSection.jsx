import { useState, useEffect, Fragment, useId, forwardRef } from 'react'
import { RadioGroup, Transition } from '@headlessui/react'
import { scale } from '../../utils/transition'

const PreferenceSection = forwardRef(({ preference, onChange, disabled, settings }, ref) => {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(true)
  const id = useId()

  useEffect(() => {
    setIsDisclosureOpen(!disabled)
  }, [disabled])

  function toggleDisclosure() {
    if (disabled) return
    setIsDisclosureOpen(prevState => !prevState)
  }

  return (
    <div ref={ref} className="text-body leading-body flex flex-col gap-8 md:gap-10 xl:gap-14 has-[:disabled]:opacity-50 transition-opacity">
      <button
        className="text-gray font-serif font-black text-h4 leading-7 text-left flex justify-between items-center md:text-h3 md:leading-h2 xl:text-h2"
        onClick={toggleDisclosure}
        disabled={disabled}
        aria-expanded={isDisclosureOpen}
        aria-controls={`disclosure-panel-${id}`}
      >
        <span className="mr-[4.375rem]">{preference.title}</span>
        <img
          src="/plan/desktop/icon-arrow.svg"
          className={`${isDisclosureOpen ? 'rotate-180' : ''} transition-transform`}
          alt="Arrow down"
          aria-hidden="true"
        />
      </button>

      <Transition show={isDisclosureOpen} {...scale}>
        <RadioGroup
          id={`disclosure-panel-${id}`}
          className="flex flex-col gap-4 md:flex-row md:gap-[0.625rem] xl:gap-6"
          value={settings[preference.slug]}
          onChange={value => onChange(preference.slug, value)}
        >
          <RadioGroup.Label className="sr-only">{preference.name}</RadioGroup.Label>
          {preference.options.map(option => (
            <RadioGroup.Option key={option.name} value={option} as={Fragment}>
              {({ checked }) => (
                <div
                  className={`p-6 rounded-lg transition-colors md:flex-1 md:py-8 md:min-h-[250px] cursor-pointer ${
                    checked ? 'bg-dark-cyan text-white' : 'bg-light-gray hover:bg-pale-orange'
                  }`}
                >
                  <h3 className="font-serif font-black text-h4 leading-8">{option.name}</h3>
                  <p className="mt-2 md:mt-6">
                    {option.prices && settings.quantity?.name && (
                      <span>{`$${option.prices[settings.quantity.name]?.toFixed(2)} per shipment. `}</span>
                    )}
                    {option.description}
                  </p>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </Transition>
    </div>
  )
})

PreferenceSection.displayName = 'PreferenceSection'
export default PreferenceSection
