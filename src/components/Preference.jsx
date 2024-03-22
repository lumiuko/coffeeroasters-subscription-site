import { Fragment } from 'react'
import { Disclosure, RadioGroup } from '@headlessui/react'

export default function Preference({ preference, value, onChange }) {
  return (
    <div className="text-body leading-body flex flex-col gap-8 md:gap-10 xl:gap-14">
      <Disclosure defaultOpen>
        <Disclosure.Button as={Fragment}>
          {({ open }) => (
            <button className="text-gray font-serif font-black text-h4 leading-7 text-left flex justify-between items-center md:text-h3 md:leading-h2 xl:text-h2">
              <span className="mr-[4.375rem]">{preference.title}</span>
              <img
                src="/plan/desktop/icon-arrow.svg"
                className={`${open ? 'rotate-180' : ''} transition-transform`}
                alt="Arrow down"
                aria-hidden="true"
              />
            </button>
          )}
        </Disclosure.Button>
        <Disclosure.Panel>
          <RadioGroup
            className="flex flex-col gap-4 md:flex-row md:gap-[0.625rem] xl:gap-6"
            value={value}
            onChange={value => onChange(value, preference.slug)}
          >
            <RadioGroup.Label className="sr-only">{preference.name}</RadioGroup.Label>
            {preference.options.map((option, index) => (
              <RadioGroup.Option key={index} value={option.name} as={Fragment}>
                {({ checked }) => (
                  <div
                    className={`p-6 rounded-lg transition-colors md:flex-1 md:py-8 md:min-h-[250px] cursor-pointer ${
                      checked ? 'bg-dark-cyan text-white' : 'bg-light-gray hover:bg-pale-orange'
                    }`}
                  >
                    <h3 className="font-serif font-black text-h4 leading-8">{option.name}</h3>
                    <p className="mt-2 md:mt-6">{option.description}</p>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}
