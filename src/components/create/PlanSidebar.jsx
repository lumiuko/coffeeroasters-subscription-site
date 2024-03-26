import { preferences } from '../../data'

export default function PlanSidebar({ settings, scrollToSection }) {
  return (
    <div className="hidden xl:block w-full max-w-[255px] font-serif font-black text-h4 leading-h4">
      <div className="flex flex-col sticky top-12">
        {preferences.map((preference, index) => (
          <button
            key={preference.slug}
            className="text-left py-6 border-b border-b-gray/25 last:border-none first:pt-0 group"
            disabled={preference.slug === 'grindOption' && settings?.howDrink?.name === 'Capsule'}
            onClick={() => scrollToSection(preference.slug)}
          >
            <div className="opacity-40 group-disabled:opacity-20 group-hover:opacity-100 transition-opacity">
              <span className={`${settings[preference.slug] ? 'text-dark-cyan group-disabled:text-inherit' : ''}`}>
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <span className="ml-7">{preference.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
