import { Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useId } from 'react'

export default function PreferenceSection({ currentPreference, onChange, disabled, settings }) {
  const [isDisclosureOpen, setIsDisclosureOpen] = useState(currentPreference.isDefaultOpen)
  const id = useId()

  useEffect(() => {
    if (!disabled) return
    setIsDisclosureOpen(false)
  }, [disabled])

  function toggleDisclosure() {
    if (disabled) return
    setIsDisclosureOpen(prevState => !prevState)
  }

  return (
    <div className="text-body leading-body flex flex-col gap-8 md:gap-10 xl:gap-14 has-[:disabled]:opacity-50 transition-opacity">
      <button
        className="text-gray font-serif font-black text-h4 leading-7 text-left flex justify-between items-center md:text-h3 md:leading-h2 xl:text-h2"
        onClick={toggleDisclosure}
        disabled={disabled}
        aria-expanded={isDisclosureOpen}
        aria-controls={`disclosure-panel-${id}`}
      >
        <span className="mr-[4.375rem]">{currentPreference.title}</span>
        <img
          src="/plan/desktop/icon-arrow.svg"
          className={`${isDisclosureOpen ? 'rotate-180' : ''} transition-transform`}
          alt="Arrow down"
          aria-hidden="true"
        />
      </button>

      {isDisclosureOpen && (
        <RadioGroup
          id={`disclosure-panel-${id}`}
          className="flex flex-col gap-4 md:flex-row md:gap-[0.625rem] xl:gap-6"
          value={settings[currentPreference.slug]}
          onChange={value => onChange(currentPreference.slug, value)}
        >
          <RadioGroup.Label className="sr-only">{currentPreference.name}</RadioGroup.Label>
          {currentPreference.options.map(option => (
            <RadioGroup.Option key={option.name} value={option} as={Fragment}>
              {({ checked }) => (
                <div
                  className={`p-6 rounded-lg transition-colors md:flex-1 md:py-8 md:min-h-[250px] cursor-pointer ${
                    checked ? 'bg-dark-cyan text-white' : 'bg-light-gray hover:bg-pale-orange'
                  }`}
                >
                  <h3 className="font-serif font-black text-h4 leading-8">{option.name}</h3>
                  <p className="mt-2 md:mt-6">
                    {option.prices && settings.quantity.name && (
                      <span>{`$${option.prices[settings.quantity.name]?.toFixed(2)} per shipment. `}</span>
                    )}
                    {option.description}
                  </p>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      )}
    </div>
  )
}
